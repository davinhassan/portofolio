const fs = require('fs');
const path = require('path');
const https = require('https');

async function getScreenshot(url, outputPath) {
  // Use Microlink API to get screenshot
  const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`;
  
  return new Promise((resolve, reject) => {
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.data && json.data.screenshot && json.data.screenshot.url) {
            const imgUrl = json.data.screenshot.url;
            downloadImage(imgUrl, outputPath).then(resolve).catch(reject);
          } else {
            reject(new Error('Screenshot not found in API response'));
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(outputPath);
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else if (res.statusCode === 301 || res.statusCode === 302) {
        // Handle redirect
        downloadImage(res.headers.location, outputPath).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed to download image. Status: ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const projects = [
    { url: 'https://siar-run.vercel.app/', file: 'siar-run.png' },
    { url: 'https://english-everywhere.my.id/', file: 'english-everywhere.png' }
  ];

  for (const proj of projects) {
    const dest = path.join(publicDir, proj.file);
    console.log(`Downloading screenshot for ${proj.url} to ${dest}...`);
    try {
      await getScreenshot(proj.url, dest);
      console.log(`Successfully saved screenshot as ${proj.file}`);
    } catch (e) {
      console.error(`Error downloading ${proj.file}:`, e.message);
    }
  }
}

main();

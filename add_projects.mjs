import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';

// Load env vars
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function addProjects() {
  const projects = [
    {
      title: 'Siar Run',
      description: 'A platform to track and manage running activities, designed for runners of all levels.',
      demo_url: 'https://siar-run.vercel.app/',
      image_url: '/siar-run.png', // Temporary, will fetch or generate later
      github_url: null,
      tags: ['Next.js', 'React', 'Tailwind CSS']
    },
    {
      title: 'English Everywhere',
      description: 'An interactive platform for learning English effectively and engagingly anywhere you go.',
      demo_url: 'https://english-everywhere.my.id/',
      image_url: '/english-everywhere.png', // Temporary, will fetch or generate later
      github_url: null,
      tags: ['Next.js', 'React', 'Tailwind CSS']
    }
  ];

  for (const project of projects) {
    const { data, error } = await supabase
      .from('projects')
      .insert([project]);

    if (error) {
      console.error(`Error adding ${project.title}:`, error);
    } else {
      console.log(`Successfully added ${project.title}`);
    }
  }
}

addProjects();

-- supabase/schema.sql

-- Projects Table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  tags TEXT[], -- Array of strings for tech stack, e.g., ['Next.js', 'Tailwind']
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access to projects"
  ON projects FOR SELECT USING (true);


-- Messages Table
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public insert
CREATE POLICY "Allow public inserts for messages"
  ON messages FOR INSERT WITH CHECK (true);

-- Create policy to restrict read access only to authenticated admin (optional)
CREATE POLICY "Allow admin to read messages"
  ON messages FOR SELECT USING (auth.role() = 'authenticated');

-- Seed Data (Optional)
INSERT INTO projects (title, description, demo_url, github_url, tags)
VALUES 
  (
    'Sistem Bengkel XYZ (TA Inventory)', 
    'Kelola stok, transaksi, supplier, dan laporan bengkel Anda dalam satu aplikasi yang terintegrasi, aman, dan mudah digunakan.', 
    'https://ta-inventory.vercel.app/', 
    NULL, 
    ARRAY['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel']
  );

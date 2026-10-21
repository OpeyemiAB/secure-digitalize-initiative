-- ==========================================================================
-- SECURE DIGITALIZE INITIATIVE — DATABASE SCHEMA (POSTGRESQL / SUPABASE)
-- Millennium Fellowship Class of 2026 | UN SDG 4, 8 & 9
-- Lead Developer: Opeyemi Abraham Benjamin (Lagos State University)
-- ==========================================================================

-- Enable Cryptographic Extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Students Table
CREATE TABLE IF NOT EXISTS public.students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    matric_number VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    department VARCHAR(80) DEFAULT 'Computer Science',
    institution VARCHAR(120) DEFAULT 'Lagos State University',
    academic_year VARCHAR(20) DEFAULT '300L/400L',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Placements Table
CREATE TABLE IF NOT EXISTS public.placements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    industry_partner VARCHAR(150) NOT NULL,
    department_attached VARCHAR(100) NOT NULL,
    supervisor_name VARCHAR(120) NOT NULL,
    supervisor_email VARCHAR(120) NOT NULL,
    status VARCHAR(30) DEFAULT 'ACTIVE_VERIFIED',
    verification_code VARCHAR(50) UNIQUE NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Digital Logbook Entries
CREATE TABLE IF NOT EXISTS public.logbook_entries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES public.students(id) ON DELETE CASCADE,
    week_number INT NOT NULL,
    date_range VARCHAR(50) NOT NULL,
    daily_activities TEXT NOT NULL,
    technical_skills TEXT[] DEFAULT '{}',
    supervisor_approved BOOLEAN DEFAULT TRUE,
    entry_hash VARCHAR(64) NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Verification Audit Logs
CREATE TABLE IF NOT EXISTS public.verification_audits (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    queried_identifier VARCHAR(100) NOT NULL,
    is_authentic BOOLEAN NOT NULL,
    client_ip VARCHAR(45),
    user_agent TEXT,
    queried_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- --- SEED DATA ---
INSERT INTO public.students (matric_number, full_name, email, department, institution)
VALUES 
('230591215', 'BENJAMIN OPEYEMI ABRAHAM', 'oluwafemibenjamin488@gmail.com', 'Computer Science', 'Lagos State University'),
('190591206', 'OLADEJI TOSIN DAVID', 'david.oladeji@lasu.edu.ng', 'Computer Science', 'Lagos State University')
ON CONFLICT (matric_number) DO NOTHING;

-- Row Level Security (RLS)
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.placements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logbook_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_audits ENABLE ROW LEVEL SECURITY;

-- Public Policy for Verification
CREATE POLICY "Allow public verification lookup" ON public.placements
    FOR SELECT USING (true);

-- Create users table extension
create extension if not exists "uuid-ossp";

-- Create profiles table
create table profiles (
  id uuid references auth.users on delete cascade,
  username text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (id)
);

-- Create RLS policies for profiles
alter table profiles disable row level security;
create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on profiles for update
  using ( auth.uid() = id );

-- Create prediction_history table
create table prediction_history (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade,
  symptoms text[],
  predicted_disease text,
  description text,
  medications text[],
  diet text[],
  workout text[],
  precautions text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policies for prediction_history
alter table prediction_history disable row level security;
create policy "Users can view own predictions."
  on prediction_history for select
  using ( auth.uid() = user_id );

create policy "Users can insert own predictions."
  on prediction_history for insert
  with check ( auth.uid() = user_id );

-- Create storage bucket for profile images
insert into storage.buckets (id, name)
values ('profile_images', 'profile_images', true);

-- Set up storage policies
create policy "Avatar images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'profile_images' );

create policy "Anyone can upload an avatar."
  on storage.objects for insert
  with check ( bucket_id = 'profile_images' );

create policy "Anyone can update their own avatar."
  on storage.objects for update
  using ( bucket_id = 'profile_images' );
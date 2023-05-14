import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://cjajhqtlutzdjdevdxgu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqYWpocXRsdXR6ZGpkZXZkeGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM5ODAzNTUsImV4cCI6MTk5OTU1NjM1NX0.3oBSGXQzp_kTZ7NIpVsIjZ9XeMpHugQGxIzjH9k3wSk"
);

export default supabase;

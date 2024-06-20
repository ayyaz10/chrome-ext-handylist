import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://phwmpkojyrgraeqimgpd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBod21wa29qeXJncmFlcWltZ3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3OTA1MjEsImV4cCI6MjAyNzM2NjUyMX0.30hQTtlHuMuqAL3D9lQIB8Wt63HSchECrlE2TQo9UXQ";
// const supabaseUrl = "https://phwmpkojyrgraeqimgpd.supabase.co";
// const supabaseKey =
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBod21wa29qeXJncmFlcWltZ3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3OTA1MjEsImV4cCI6MjAyNzM2NjUyMX0.30hQTtlHuMuqAL3D9lQIB8Wt63HSchECrlE2TQo9UXQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;

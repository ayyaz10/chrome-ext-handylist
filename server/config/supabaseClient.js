const { createClient } = require("@supabase/supabase-js");

if (!process.env.SUPABASE_URL || !process.env.ANON_KEY) {
  throw new error("Missing Supabase environment varibles");
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;

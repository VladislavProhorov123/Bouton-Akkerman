import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://uvtpbqjgwovfcrknsqld.supabase.co"
const SUPABASE_ANNON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2dHBicWpnd292ZmNya25zcWxkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjIwNzksImV4cCI6MjA4ODYzODA3OX0.rxTwU1DCXwjUT6Gm0taMRW-9sNZnXng2FvFP4NN1AJw"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANNON_KEY)
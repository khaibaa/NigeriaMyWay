/* eslint-disable no-undef */
//this file is used to create a supabase client
//it is used to interact with the supabase database

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://sqdtzakxnqngnoalctgi.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxZHR6YWt4bnFuZ25vYWxjdGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNTI0NzEsImV4cCI6MjAyNjYyODQ3MX0.ZDNLTZR_TfiSdaae2SflGPuHQPwoE5SVS3k-xAMhA1E"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

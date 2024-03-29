/* eslint-disable no-undef */
//this file is used to create a supabase client
//it is used to interact with the supabase database

import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://xbbhkhsfdtttrpdcmcnc.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiYmhraHNmZHR0dHJwZGNtY25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE1NzMzODgsImV4cCI6MjAyNzE0OTM4OH0.jzw-cE14ya49RGLK2pxQtkL6Qm2Y2rlO4JZXQuyFrG4"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

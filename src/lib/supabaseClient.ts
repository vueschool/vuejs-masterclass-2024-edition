import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://sdhztteotjicppotlhcp.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkaHp0dGVvdGppY3Bwb3RsaGNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwNTE2MzUsImV4cCI6MjAzMjYyNzYzNX0.q-M-IuvG25uqPQV8SNDvPmNbR8vkuyULRXIzcyavyJg'
)

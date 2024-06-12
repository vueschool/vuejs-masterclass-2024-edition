/* eslint-env node */

import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
// In case you're using Node version older than v20
// Install dotenvx by running the following command npm install @dotenvx/dotenvx --save
// Next, add the following code to the file
//
// import { config } from '@dotenvx/dotenvx'
// config()
//
// With that done, you can now use env variables as usual

const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

console.log(supabase)

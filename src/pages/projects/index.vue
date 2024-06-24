<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref()
;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.log(error)

  projects.value = data

  console.log('projects: ', projects.value)
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
    {{ projects }}
  </div>
</template>

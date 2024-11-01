<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects()

const { getProfilesByIds } = useCollabs()

const test = await getProfilesByIds(projects.value[0].collaborators)

console.log('TEST :: ', test)

// getGroupedCollabs(projects.value)
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

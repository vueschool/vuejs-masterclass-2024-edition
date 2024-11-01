<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

await getGroupedCollabs(projects.value)

console.log('TEST :: ', groupedCollabs.value)

// getGroupedCollabs(projects.value)
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>

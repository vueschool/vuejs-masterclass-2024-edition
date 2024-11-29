<script setup lang="ts">
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projectsLoader = useProjectsStore()
const { projects } = storeToRefs(projectsLoader)
const { getProjects } = projectsLoader

await getProjects()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

getGroupedCollabs(projects.value ?? [])

const columnsWithCollabs = columns(groupedCollabs)

useMeta({
  title: 'Projects | Pulse',
  description: {
    name: 'description',
    content: 'See all projects in Pulse.'
  }
})
</script>

<template>
  <DataTable v-if="projects" :columns="columnsWithCollabs" :data="projects" />
</template>

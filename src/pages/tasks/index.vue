<script setup lang="ts">
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'My Tasks'

const tasksLoader = useTasksStore()
const { tasks } = storeToRefs(tasksLoader)
const { getTasks } = tasksLoader

await getTasks()

const { getGroupedCollabs, groupedCollabs } = useCollabs()

getGroupedCollabs(tasks.value ?? [])

const columnsWithCollabs = columns(groupedCollabs)
</script>

<template>
  <DataTable v-if="tasks" :columns="columnsWithCollabs" :data="tasks" />
</template>

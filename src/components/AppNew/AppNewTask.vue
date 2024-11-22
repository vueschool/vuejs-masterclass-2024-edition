<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm'

const sheetOpen = defineModel<boolean>()

const createTask = async (formData: CreateNewTask) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(formData))
    }, 2000)
  })
}
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create new task</SheetTitle>
      </SheetHeader>

      <FormKit type="form" @submit="createTask" submit-label="Create Task">
        <FormKit
          type="text"
          name="name"
          id="name"
          label="Name"
          placeholder="My new task"
        />
        <FormKit
          type="select"
          name="for"
          id="for"
          label="For"
          placeholder="Select a user"
          :options="[{ label: 'Item name', value: 1 }]"
        />
        <FormKit
          type="textarea"
          name="description"
          id="description"
          label="Description"
          placeholder="Task description"
        />
        <FormKit
          type="select"
          name="project"
          id="project"
          label="Porject"
          placeholder="Select a project"
          :options="[{ label: 'Item name', value: 1 }]"
        />
      </FormKit>
    </SheetContent>
  </Sheet>
</template>

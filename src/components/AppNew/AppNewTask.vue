<script setup lang="ts">
import type { CreateNewTask } from '@/types/CreateNewForm'
import {
  createNewTaskQuery,
  profilesQuery,
  projectsQuery
} from '@/utils/supaQueries'

const sheetOpen = defineModel<boolean>()

type SelectOption = { label: string; value: number | string }

const selectOptions = ref({
  projects: [] as SelectOption[],
  profiles: [] as SelectOption[]
})

const getProjectsOptions = async () => {
  const { data: allProjects } = await projectsQuery

  if (!allProjects) return

  allProjects.forEach((project) => {
    selectOptions.value.projects.push({
      label: project.name,
      value: project.id
    })
  })
}

const getProfilesOptions = async () => {
  const { data: allProfiles } = await profilesQuery

  if (!allProfiles) return

  allProfiles.forEach((profile) => {
    selectOptions.value.profiles.push({
      label: profile.full_name,
      value: profile.id
    })
  })
}

const getOptions = async () => {
  await Promise.all([getProjectsOptions(), getProfilesOptions()])
}

getOptions()

const { profile } = storeToRefs(useAuthStore())

const createTask = async (formData: CreateNewTask) => {
  const task = {
    ...formData,
    collaborators: [profile.value!.id]
  }

  const { error } = await createNewTaskQuery(task)

  if (error) {
    console.log(error)
  }

  sheetOpen.value = false
}
</script>

<template>
  <Sheet v-model:open="sheetOpen">
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Create new task</SheetTitle>
      </SheetHeader>

      <FormKit
        type="form"
        @submit="createTask"
        submit-label="Create Task"
        :config="{
          validationVisibility: 'submit'
        }"
      >
        <FormKit
          type="text"
          name="name"
          id="name"
          label="Name"
          placeholder="My new task"
          validation="required|length:1,255"
        />
        <FormKit
          type="select"
          name="profile_id"
          id="profile_id"
          label="User"
          placeholder="Select a user"
          :options="selectOptions.profiles"
          validation="required"
        />
        <FormKit
          type="select"
          name="project_id"
          id="project_id"
          label="Porject"
          placeholder="Select a project"
          :options="selectOptions.projects"
          validation="required"
        />
        <FormKit
          type="textarea"
          name="description"
          id="description"
          label="Description"
          placeholder="Task description"
          validation="length:0,500"
        />
      </FormKit>
    </SheetContent>
  </Sheet>
</template>

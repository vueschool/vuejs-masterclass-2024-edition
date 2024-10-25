import { projectsQuery } from '@/utils/supaQueries'
import { useMemoize } from '@vueuse/core'
import type { Projects } from '@/utils/supaQueries'

export const useProjectsStore = defineStore('projects-store', () => {
  const projects = ref<Projects | null>(null)
  const loadProjects = useMemoize(async (key: string) => await projectsQuery)

  const getProjects = async () => {
    const { data, error, status } = await loadProjects('projects')

    if (error) useErrorStore().setError({ error, customCode: status })

    projects.value = data
  }

  return {
    projects,
    getProjects
  }
})

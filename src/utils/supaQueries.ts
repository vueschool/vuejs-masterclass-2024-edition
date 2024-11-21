import { supabase } from '@/lib/supabaseClient'
import type { QueryData } from '@supabase/supabase-js'

export const tasksWithProjectsQuery = supabase.from('tasks').select(`
    *,
    projects (
      id,
      name,
      slug
    )
  `)
export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectsQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof projectsQuery>

export const projectQuery = (slug: string) =>
  supabase
    .from('projects')
    .select(
      `
   *,
   tasks (
    id,
    name,
    status,
    due_date
   )
  `
    )
    .eq('slug', slug)
    .single()

export type Project = QueryData<ReturnType<typeof projectQuery>>

export const updateProjectQuery = (updatedProject = {}, id: number) => {
  return supabase.from('projects').update(updatedProject).eq('id', id)
}

export const taskQuery = (id: string) => {
  return supabase
    .from('tasks')
    .select(
      `
      *,
      projects (
        id,
        name,
        slug
      )
    `
    )
    .eq('id', id)
    .single()
}
export type Task = QueryData<ReturnType<typeof taskQuery>>

export const updateTaskQuery = (updatedTask = {}, id: number) => {
  return supabase.from('tasks').update(updatedTask).eq('id', id)
}

export const profileQuery = ({
  column,
  value
}: {
  column: string
  value: string
}) => {
  return supabase.from('profiles').select().eq(column, value).single()
}

export const groupedProfilesQuery = (userIds: string[]) =>
  supabase
    .from('profiles')
    .select('username, avatar_url, id, full_name')
    .in('id', userIds)
export type Collabs = QueryData<ReturnType<typeof groupedProfilesQuery>>

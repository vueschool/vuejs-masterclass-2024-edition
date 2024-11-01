import { groupedProfilesQuery } from '@/utils/supaQueries'

export const useCollabs = () => {
  const getProfilesByIds = async (userIds: string[]) => {
    const { data, error } = await groupedProfilesQuery(userIds)

    if (error || !data) return []

    return data
  }

  return {
    getProfilesByIds
  }
}

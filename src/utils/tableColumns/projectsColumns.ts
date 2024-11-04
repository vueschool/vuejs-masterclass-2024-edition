import { RouterLink } from 'vue-router'
import type { ColumnDef } from '@tanstack/vue-table'
import type { Projects } from '../supaQueries'
import type { Ref } from 'vue'
import type { GroupedCollabs } from '@/types/GroupedCollabs'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'

export const columns = (
  collabs: Ref<GroupedCollabs>
): ColumnDef<Projects[0]>[] => [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/projects/${row.original.slug}`,
          class: 'text-left font-medium hover:bg-muted block w-full'
        },
        () => row.getValue('name')
      )
    }
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        row.getValue('status')
      )
    }
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        collabs.value[row.original.id]
          ? collabs.value[row.original.id].map((collab) => {
              return h(RouterLink, { to: `/users/${collab.username}` }, () => {
                return h(
                  Avatar,
                  { class: 'hover:scale-110 transition-transform' },
                  () => h(AvatarImage, { src: collab.avatar_url || '' })
                )
              })
            })
          : row.original.collaborators.map(() => {
              return h(Avatar, { class: 'animate-pulse' }, () =>
                h(AvatarFallback)
              )
            })
      )
    }
  }
]

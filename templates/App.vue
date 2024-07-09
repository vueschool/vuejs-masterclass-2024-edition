<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <aside
    class="flex flex-col h-screen gap-2 border-r fixed bg-muted/40 lg:w-52 w-16 transition-[width]"
  >
    <div class="flex h-16 items-center border-b px-2 lg:px-4 shrink-0 gap-1 justify-between">
      <button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:menu"></iconify-icon>
      </button>

      <button variant="outline" size="icon" class="w-8 h-8">
        <iconify-icon icon="lucide:plus"></iconify-icon>
      </button>
    </div>

    <nav class="flex flex-col gap-2 justify-between h-full relative">
      <div>
        <RouterLink
          to="/"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:house"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Dashboard</span>
        </RouterLink>
        <RouterLink
          to="/projects"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:building-2"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Projects</span>
        </RouterLink>
        <RouterLink
          to="/tasks"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:badge-check"></iconify-icon>
          <span class="hidden lg:block text-nowrap">My Tasks</span>
        </RouterLink>
      </div>

      <div class="border-y text-center bg-background py-3">
        <RouterLink
          to="/profile"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:user"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Profile</span>
        </RouterLink>
        <RouterLink
          to="/settings"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:settings"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Settings</span>
        </RouterLink>
        <RouterLink
          to="/signout"
          class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
        >
          <iconify-icon icon="lucide:log-out"></iconify-icon>
          <span class="hidden lg:block text-nowrap">Sign out</span>
        </RouterLink>
      </div>
    </nav>
  </aside>
  <div class="flex flex-col lg:ml-52 ml-16 transition-[margin]">
    <nav class="h-16 border-b bg-muted/40 flex gap-2 justify-between px-6 items-center">
      <form class="relative h-fit w-full max-w-96">
        <iconify-icon
          class="absolute top-[50%] translate-y-[-50%] left-2.5 text-muted-foreground"
          icon="lucide:search"
        ></iconify-icon>
        <Input class="w-full pl-8 bg-background" type="text" placeholder="Search ..." />
      </form>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

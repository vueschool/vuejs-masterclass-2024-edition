<script setup lang="ts">
interface LinkProp {
  title: string
  to?: string
  icon: string
}

const props = defineProps<{
  links: LinkProp[]
}>()

const filteredLinks = props.links.filter((link): link is LinkProp & { to: string } => !!link.to)
</script>

<template>
  <RouterLink
    exactActiveClass="text-primary bg-muted"
    v-for="link in filteredLinks"
    :key="link.title"
    :to="link.to"
    class="nav-link"
  >
    <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span>
  </RouterLink>

  <div class="nav-link cursor-pointer">
    <!-- <iconify-icon :icon="link.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ link.title }}</span> -->
  </div>
</template>

<style scoped>
.nav-link {
  @apply flex items-center justify-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary lg:justify-normal text-muted-foreground;
}
</style>

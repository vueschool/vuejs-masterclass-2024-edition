<script setup lang="ts">
const MocComponent = defineComponent(async () => {
  const greeting = ref('Hello')

  await new Promise((resolve) => {
    greeting.value = 'Hello from the database!'

    setTimeout(() => {
      resolve(true)
    }, 1000)
  })

  return () => h('p', greeting.value)
})
</script>

<template>
  <AuthLayout>
    <Suspense>
      <MocComponent />

      <template #fallback>
        <span>Loading ..</span>
      </template>
    </Suspense>
    <!-- <RouterView /> -->
  </AuthLayout>
</template>

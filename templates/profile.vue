<template>
  <div
    class="mx-auto mb-10 flex w-full flex-col items-center justify-center py-10 text-center"
  >
    <div class="flex flex-col items-center justify-center pb-4">
      <Avatar size="lg">
        <AvatarImage src="" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p class="mt-2 text-gray-500">@username</p>
      <h1 class="mt-5 text-4xl font-bold">John Doe</h1>
      <p class="mt-2 text-sm">Software developer</p>
    </div>
    <Button>Edit profile</Button>
  </div>
</template>

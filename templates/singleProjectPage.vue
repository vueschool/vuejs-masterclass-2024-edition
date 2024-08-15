<template>
  <Table>
    <TableRow>
      <TableHead> Name </TableHead>
      <TableCell> Lorem ipsum dolor sit amet. </TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Description </TableHead>
      <TableCell>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iure qui tempora ex nihil, ab
        reprehenderit dolorem sunt veritatis perferendis? Repudiandae quis velit quasi ab natus quia
        ratione voluptas deserunt labore sed distinctio nam fuga fugit vero voluptates placeat
        aperiam, saepe excepturi eos harum consectetur doloremque perspiciatis nesciunt! Incidunt,
        modi.
      </TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Status </TableHead>
      <TableCell>In progress</TableCell>
    </TableRow>
    <TableRow>
      <TableHead> Collaborators </TableHead>
      <TableCell>
        <div class="flex">
          <Avatar
            class="-mr-4 border border-primary hover:scale-110 transition-transform"
            v-for="n in 5"
            :key="n"
          >
            <RouterLink class="w-full h-full flex items-center justify-center" to="">
              <AvatarImage src="" alt="" />
              <AvatarFallback> </AvatarFallback>
            </RouterLink>
          </Avatar>
        </div>
      </TableCell>
    </TableRow>
  </Table>

  <section class="mt-10 flex flex-col md:flex-row gap-5 justify-between grow">
    <div class="flex-1">
      <h2>Tasks</h2>
      <div class="table-container">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Name </TableHead>
              <TableHead> Status </TableHead>
              <TableHead> Due Date </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="n in 5" :key="n">
              <TableCell> Lorem ipsum dolor sit amet. </TableCell>
              <TableCell> In progress </TableCell>
              <TableCell> 22/08/2024 </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
    <div class="flex-1">
      <h2>Documents</h2>
      <div class="table-container">
        <p class="text-muted-foreground text-sm font-semibold px-4 py-3">
          This project doesn't have documents yet...
        </p>
        <!-- <Table>
          <TableHeader>
            <TableRow>
              <TableHead> Name </TableHead>
              <TableHead> Visibility </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell> Lorem ipsum dolor sit amet. </TableCell>
              <TableCell> Private </TableCell>
            </TableRow>
          </TableBody>
        </Table> -->
      </div>
    </div>
  </section>
</template>

<style>
th {
  @apply w-[100px];
}

h2 {
  @apply mb-4 text-lg font-semibold w-fit;
}

.table-container {
  @apply overflow-hidden overflow-y-auto rounded-md bg-slate-900 h-80;
}
</style>

const menuOpen = ref(false)

export const useMenu = () => {
  const toggleMenu = () => (menuOpen.value = !menuOpen.value)

  return {
    menuOpen,
    toggleMenu
  }
}

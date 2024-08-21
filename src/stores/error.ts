export const useErrorStore = defineStore('error-store', () => {
  const activeError = ref(false)

  const setError = () => {
    activeError.value = true
  }

  return {
    activeError,
    setError
  }
})

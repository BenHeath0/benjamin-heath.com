import { ref, watch } from 'vue'

// Shared state across all components
const isDark = ref(false)

// Initialize from localStorage or system preference
const initDarkMode = () => {
  const saved = localStorage.getItem('darkMode')
  if (saved !== null) {
    isDark.value = saved === 'true'
  } else {
    // Default to system preference if no saved preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateDarkMode()
}

const updateDarkMode = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkMode', 'true')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkMode', 'false')
  }
}

// Initialize on module load
if (typeof window !== 'undefined') {
  initDarkMode()
}

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDark.value = !isDark.value
  }

  // Watch for changes and update DOM
  watch(isDark, () => {
    updateDarkMode()
  })

  return {
    isDark,
    toggleDarkMode,
    initDarkMode
  }
}

import type { InjectionKey, Ref } from 'vue'

export interface MenuInjectionOptions {
  menuOpen: Ref<boolean>
  toggleMenu: () => void
}

export const menuKey = Symbol() as InjectionKey<MenuInjectionOptions>

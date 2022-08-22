import { writable } from 'svelte/store'

function controlMask() {
  const { subscribe, set, update } = writable(false)

  return {
    subscribe,
    makeVisible: () => set(true),
    makeInvisible: () => set(false),
  }
}

export const visible = controlMask()

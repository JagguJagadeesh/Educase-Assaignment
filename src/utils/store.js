import { create } from 'zustand'

const useStore = create((set) => ({
  slide: "",
  updateSlide: (newSlide) => set({ slide: newSlide }),
}))

export { useStore }
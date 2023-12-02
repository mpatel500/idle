import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

interface InventoryState {
  items: number[]
  add: (item: number) => void,
  setNew: (newItems: number[]) => void,
}

const useStore = create<InventoryState>()(
  devtools(
    persist(
      (set) => ({
        items: [],
        add: (item) => set((state) => ({
          items: [...state.items, item]
        })),
        setNew: (newItems: number[]) => set((state) => ({
          items: newItems,
        })),
      }),
      {
        name: 'inventory-storage',
      },
    ),
  ),
)

export default useStore;

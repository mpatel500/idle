import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

interface EquippedItemsState {
  items: number[]
  setNew: (newItems: number[]) => void,
}

const useStore = create<EquippedItemsState>()(
  devtools(
    persist(
      (set) => ({
        items: [0, 0, 0, 0, 0, 0],
        setNew: (newItems: number[]) => set((state) => ({
          items: newItems,
        })),
      }),
      {
        name: 'equipped-items-storage',
      },
    ),
  ),
)

export default useStore;

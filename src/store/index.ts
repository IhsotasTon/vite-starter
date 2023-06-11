import { create as zustandCreate } from 'zustand';
import { devtools } from 'zustand/middleware';

const dev = import.meta.env.DEV;
export type BearPopulation = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};
const create = (store: any) => {
  if (dev) {
    return zustandCreate(devtools(store, { serialize: { options: true } }));
  }
  return zustandCreate(store);
};
export const useBearStore = create((set: any) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: BearPopulation) => ({ bears: state.bears + 1 }), false, 'bear/eatFish'),
  removeAllBears: () => set({ bears: 0 }),
}));

// import { mountStoreDevtool } from 'simple-zustand-devtools';
// import { create as zustandCreate } from 'zustand';
// import { devtools } from 'zustand/middleware';

// const dev = import.meta.env.DEV;
// export type BearPopulation = {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
// };
// const create = (store: any) => {
//   if (dev) {
//     return zustandCreate(devtools(store, { serialize: { options: true } }));
//   }
// };
// export const useBearStore = zustandCreate<BearPopulation>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state: BearPopulation) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
// }));
// if (dev) {
//   mountStoreDevtool('Store1', useBearStore);
// }

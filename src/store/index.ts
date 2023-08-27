import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import createAuthSlice from '@/store/slices/createAuthSlice';
import createDarkModeSlice from '@/store/slices/createDarkModeSlice';
import { StoreTypes } from '@/types/store-types';

const useStore = create<StoreTypes>()(
  immer(
    devtools((...a) => ({
      ...createDarkModeSlice(...a),
      ...createAuthSlice(...a),
    })),
  ),
);

export default useStore;

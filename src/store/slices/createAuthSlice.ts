import { Authentication, MiddleStateCreator } from '@/types/store-types';

const createAuthSlice: MiddleStateCreator<Authentication> = (set) => ({
  token: '',
  getToken: (value) =>
    set((state) => {
      state.token = value;
    }),
});

export default createAuthSlice;

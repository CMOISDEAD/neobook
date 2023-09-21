import { create } from "zustand";

const useStoreApp = create((_set) => ({
  socket: null,
}));

export default useStoreApp;

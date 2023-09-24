import { create } from "zustand";

interface StoreApp {
  socket: any;
  files: any;
}

const useStoreApp = create<StoreApp>((_set) => ({
  socket: null,
  files: [],
}));

export default useStoreApp;

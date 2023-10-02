import { create } from "zustand";

interface StoreApp {
  socket: any;
  files: any;
  theme: string;
}

const useStoreApp = create<StoreApp>((_set) => ({
  socket: null,
  files: [],
  theme: "",
}));

export default useStoreApp;

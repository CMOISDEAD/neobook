import { create } from "zustand";

interface StoreApp {
  socket: any;
}

const useStoreApp = create<StoreApp>((_set) => ({
  socket: null,
}));

export default useStoreApp;

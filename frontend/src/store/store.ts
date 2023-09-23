import { create } from "zustand";

interface StoreApp {
  files: any;
}

const useStoreApp = create<StoreApp>((_set) => ({
  files: [],
}));

export default useStoreApp;

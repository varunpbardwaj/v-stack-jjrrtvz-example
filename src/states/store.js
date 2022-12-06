import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const blacklist = [""];

const useStore = create()(
  devtools(
    persist(
      immer((set) => ({
        theme: true,
        setTheme: (payload) =>
          set(
            (state) => {
              state.theme = payload;
            },
            false,
            "SET_THEME"
          ),
      })),
      {
        name: "zustand:app",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !blacklist.includes(key))
          ),
      }
    )
  )
);

export default useStore;

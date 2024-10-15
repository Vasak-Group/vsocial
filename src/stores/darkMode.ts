import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
  state: () => {
    return { darkMode: localStorage.getItem("darkMode") === "true", };
  },
  getters: {
    getDarkMode(): boolean {
      return this.darkMode;
    },
    getIcon(): string {
      return this.darkMode ? "fas fa-sun" : "fas fa-moon";
    }
  },
  actions: {
    changeDarkMode() {
      this.darkMode = !this.darkMode;
      localStorage.setItem("darkMode", this.darkMode.toString());
      this.setBodyClass();
    },
    setBodyClass() {
      if (this.darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  },
});

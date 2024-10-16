import { defineStore } from "pinia";

export const useUserSessionStore = defineStore("userSession", {
  state: () => {
    return {
      token: localStorage.getItem("vUserSessionToken"),
      username: localStorage.getItem("vUserSessionUsername"),
    };
  },
  getters: {
    isAuth(): boolean {
      return (
        this.token !== "" || this.token !== null || this.token !== undefined
      );
    },
  },
  actions: {
    logout() {
      this.token = "";
      this.username = "";
      localStorage.removeItem("vUserSessionToken");
      localStorage.removeItem("vUserSessionUsername");
    },
    setToken(token: string) {
      this.token = token;
      localStorage.setItem("vUserSessionToken", token);
    },
    setUsername(username: string) {
      this.username = username;
      localStorage.setItem("vUserSessionUsername", username);
    },
  },
});

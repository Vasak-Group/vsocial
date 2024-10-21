const publicPages = ["/login", "/register", "/"];
const invitePages = ["/login", "/register"];

export const secureMiddleware = (to: any, from: any, next: any) => {
  const authRequired = !publicPages.includes(to.path);
  const onlyInvite = invitePages.includes(to.path);
  const loggedIn = localStorage.getItem("vUserSessionToken");

  if (to.path !== "/login" && authRequired && !loggedIn) {
    return next({ path: "/login" });
  } else if (to.path !== "/dashboard" && onlyInvite && loggedIn) {
    return next({ path: "/dashboard" });
  }
  next();
};

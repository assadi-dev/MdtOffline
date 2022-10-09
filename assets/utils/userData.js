export const getUserRole = (role) => {
  if (Array.isArray(role)) {
    if (role.length > 0) {
      if (role.join("-").includes("ROLE_ADMIN")) {
        return "Admin";
      } else if (role.join("-").includes("ROLE_MODERATEUR")) {
        return "moderateur";
      } else {
        return "utilisateur";
      }
    }
  }
};

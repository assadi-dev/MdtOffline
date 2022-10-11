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

export const getAgentNameById = (listOfAgents, id) => {
  if (Array.isArray(listOfAgents)) {
    if (listOfAgents.length > 0) {
      let agent = listOfAgents.find((agent) => agent.id == id);
      const { name, matricule } = agent;
      return `${matricule}-${name}`;
    } else {
      return "Cet agent n'est plus dans l'effectif";
    }
  }
};

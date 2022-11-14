import { COMMAND_STAFF_ACCESS } from "../constants/acces";

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
      if (agent) {
        const { name, matricule } = agent;
        return `${matricule}-${name}`;
      }
      return "Cet agent n'est plus dans l'effectif";
    } else {
      return "Cet agent n'est plus dans l'effectif";
    }
  }
};

export const getGradeById = (id, listOfGrades) => {
  if (Array.isArray(listOfGrades)) {
    if (listOfGrades.length > 0) {
      let grade = listOfGrades.find((grade) => grade.id == id);
      const { nom } = grade;
      return nom;
    } else {
      return "";
    }
  }
};

export const IsCommandStaff = (userGrade) => {
  return userGrade.includes(COMMAND_STAFF_ACCESS) ? true : false;
};

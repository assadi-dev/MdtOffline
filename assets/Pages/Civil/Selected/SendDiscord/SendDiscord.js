import { DOMAIN } from "../../../../constants/localStorage";
import sendDiscord from "../../../../service/Api/SendDiscord";
import iconSAPD from "../../../../ressources/img/logoSapd.png";
import { SEND_DISCORD_CELLS } from "../../../../constants/Webhooks";

export const sendCelluleToDiscord = (data) => {
  const { name, entree, sortie, agent, photo, arrestReport, arrestFolder } =
    data;

  const icon = DOMAIN.includes("localhost") ? "" : `${DOMAIN}/${iconSAPD}`;
  const photoCivil = DOMAIN.includes("localhost") ? "" : `${DOMAIN}/${photo}`;

  let payload = (data = {
    content: null,
    embeds: [
      {
        title: "Mise en cellule",
        description: `**Prénom Nom  :**  ${name} \n\n**Numéro de rapport : ** N° ${arrestReport}\n**Numéro de dossier : ** N° ${arrestFolder}\n**Heure d'entrée : ** ${entree} \n**Heure de sortie : ** ${sortie}
        \n\n\n **Agent concerné:** ${agent}`,
        color: 5144500,
        thumbnail: {
          url: photoCivil,
        },
        footer: {
          text: "SAN ANDREAS POLICE DEPARTMENT",
          icon_url: icon,
        },
      },
    ],
  });

  return sendDiscord.post(SEND_DISCORD_CELLS, payload);
};

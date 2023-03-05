import { SEND_DISCORD_SAISIE } from "../../../../constants/Webhooks";
import { DOMAIN } from "../../../../constants/localStorage";
import iconSAPD from "../../../../ressources/img/logoSapd.png";
import sendDiscord from "../../../../service/Api/SendDiscord";

export const sendSaisieToDiscord = (data) => {
  const { agent, poste, depot } = data;

  const icon = DOMAIN.includes("localhost") ? "" : `${DOMAIN}/${iconSAPD}`;

  const payload = {
    content: null,
    embeds: [
      {
        title: "Saisies - San Andreas Police Departement",
        description: `**Agent**\n${agent}\n\n**Poste**\n${poste}i\n\n**Objets Saisie**\n${depot}\n\n`,
        color: 0xffd000,
        thumbnail: {
          url: icon,
        },
        footer: {
          text: "SAN ANDREAS POLICE DEPARTMENT",
          icon_url: icon,
        },
      },
    ],
  };

  return sendDiscord.post(SEND_DISCORD_SAISIE, payload);
};

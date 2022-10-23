import sendDiscord from "../../../service/Api/SendDiscord";
import iconSAPD from "../../../ressources/img/logoSapd.png";
import { SEND_DISCORD_RAPPORT_DEPUTY_TRAINY } from "../../../constants/Webhooks";
import { DOMAIN } from "../../../constants/localStorage";

export const sendDeputyTrainy = (data) => {
  const {
    deputyTrainyConcerned,
    datePatrouille,
    typePatrouille,
    rapport,
    agent,
  } = data;

  const icon = DOMAIN.includes("localhost")
    ? iconSAPD
    : `${DOMAIN}/${iconSAPD}`;

  let payload = (data = {
    content: null,
    embeds: [
      {
        title: "Rapport Rookie / Deputy",
        description: `**Rapport concernant le Rookie / Deputy :**  ${deputyTrainyConcerned} \n **Date de patrouille: ** ${datePatrouille} \n **Type de patrouille:** ${typePatrouille} \n**rapport: ** ${rapport}  \n\n\n 
         **Agent concerné:** ${agent}
         `,
        color: 5144500,
        thumbnail: {
          url: icon,
        },
        footer: {
          text: "SAN ANDREAS POLICE DEPARTMENT",
          icon_url: icon,
        },
      },
    ],
  });

  return sendDiscord.post(SEND_DISCORD_RAPPORT_DEPUTY_TRAINY, payload);
};

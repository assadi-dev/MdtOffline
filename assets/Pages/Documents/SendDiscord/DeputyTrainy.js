import sendDiscord from "../../../service/Api/SendDiscord";

export const sendDeputyTrainy = (data) => {
  const { deputyTrainyAgent, datePatrouille, typePatrouille, rapport, agent } =
    data;

  let payload = (data = {
    content: null,
    embeds: [
      {
        description: `**Rapport concernant le Rookie / Deputy :**  ${deputyTrainyAgent} \n 
         **Date de patrouille: ** ${datePatrouille} \n 
         **Type de patrouille: ** ${typePatrouille} \n 
         **rapport: ** ${rapport}  \n\n\n 
         **Agent concerné:** ${agent}
         `,
        color: 5144500,
        thumbnail: {
          url: "https://cdn.discordapp.com/attachments/947977481930018859/1025877645809958922/logo-sapd.jpg",
        },
        footer: {
          text: "SAN ANDREAS POLICE DEPARTMENT",
          icon_url:
            "https://cdn.discordapp.com/attachments/947977481930018859/1025877645809958922/logo-sapd.jpg",
        },
      },
    ],
  });

  return sendDiscord.post(
    "1025722030127054959/12G1oIstJviZm6cBmX2sbUwePhjr_H6HOn7l7sB4Oduqy99LnsRwCpZkxijo_L46zuFZ",
    payload
  );
};

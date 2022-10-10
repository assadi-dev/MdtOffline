import sendDiscord from "../../../../service/Api/SendDiscord";

export const sendCelluleToDiscord = (data) => {
  const { name, entree, sortie, agent, photo } = data;
  console.log(photo);

  let payload = (data = {
    content: null,
    embeds: [
      {
        title: "Mise en cellule",
        description: `**Prénom Nom  :**  ${name}  
         **Heure d'entrée : ** ${entree} 
         **Heure de sortie : ** ${sortie} \n\n\n\n 
         **Agent concerné:** ${agent}
         `,
        color: 5144500,
        thumbnail: {
          url: photo,
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

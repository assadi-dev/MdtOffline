import axios from "axios";

const sendDiscord = axios.create({
  baseURL: `https://discord.com/api/webhooks`,
  headers: {
    "Content-type": "application/json",
  },
});

export default sendDiscord;

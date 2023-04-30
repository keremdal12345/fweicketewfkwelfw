module.exports = (client) => console.log(`${client.user.username} biletleri yönetmeye hazır!`);

var KARISIKDURUM = 1
setInterval(async () => {
  status = [`All Star Scrim League ❤️ Léran`,]
  KARISIKDURUM = (KARISIKDURUM + 2) % (status.length);
  client.user.setPresence({
    activities: [{
      name: `${status[KARISIKDURUM]}`,
      type: "PLAYING",
    }],
    status: "online"
  })
}, 5000);
module.exports = (client, type, guild, user) => {
    switch (type) {
        case 'newTicket': {
            return console.log(`${user.username} az önce sunucuda bir bilet oluşturdu ${guild.name}`);
        }

        case 'closeTicket': {
            return console.log(`${user.username} az önce sunucuda bir bilet kapattı ${guild.name}`);
        }

        case 'reopenTicket': {
            return console.log(`${user.username} az önce sunucuda bir bileti yeniden açtı ${guild.name}`);
        }

        case 'deleteTicket': {
            return console.log(`${user.username} az önce sunucudaki bir bileti sildim ${guild.name}`);
        }

        case 'saveTicket': {
            return console.log(`${user.username} az önce sunucuya bir bilet kaydettim ${guild.name}`);
        }
    }
};
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({
    checkUpdate: false,
});

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);
})

client.on('messageCreate', async message => {
  if (message.author.id === client.user.id && message.content === '.cl' && message.channel.type === 'DM') {
      try {
          const messages = await message.channel.messages.fetch();
          messages.forEach(msg => {
              if (msg.author.id === client.user.id) {
                  msg.delete();
              }
          });
      } catch (err) {
          console.error(err);
      }
  }
});   



client.login('sua-token');
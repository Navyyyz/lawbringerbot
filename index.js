const fs = require('fs');
require('dotenv').config()
const Discord = require('discord.js');
 const client = new Discord.Client();
fs.readdir('./events/', (err, files) => {
  files.forEach(file => {
    const eventHandler = require(`./events/${file}`)
    const eventName = file.split('.')[0]
    client.on(eventName, arg => eventHandler(client, arg))
  })
});

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity('Bringing Justice');
 });
client.on('message', msg=> {
 if (msg.content === 'bruh') {
 msg.reply('sorry gamer but this is a no bruh zone');
 }
 });
client.on('message', msg4=> {
 if (msg4.content === 'Bruh') {
 msg4.reply('sorry gamer but this is a no bruh zone');
 }
 });
client.on('message', msg5=> {
 if (msg5.content === 'Boi') {
 msg5.reply('sorry gamer but this is a no boi zone');
 }
 });
client.on('message', msg6=> {
 if (msg6.content === 'boi') {
 msg6.reply('sorry gamer but this is a no boi zone');
 }
 });
client.on('message', msg2=> {
 if (msg2.content === 'nigger') {
 msg2.reply('You cant say that! Thats racist!');
 }
 });
client.on('message', msg3=> {
 if (msg3.content === 'niggers') {
 msg3.reply('You cant say that! Thats racist!');
 }
 });
 
client.on('message', msg7=> {
 if (msg7.content === 'Bruh Moment') {
 msg7.reply('It is truly a moment of the bruh');
 }
 });
client.on('message', msg8=> {
 if (msg8.content === 'Bruh moment') {
 msg8.reply('It is truly a moment of the bruh');
 }
 });
client.on('message', msg9=> {
 if (msg9.content === 'bruh moment') {
 msg9.reply('It is truly a moment of the bruh');
 }
 });
client.on('message', msg10=> {
 if (msg10.content === 'broi') {
 msg10.reply('https://navyyy.tk/broi.png');
 }
 });
client.on('message', msg11=> {
 if (msg11.content === 'Broi') {
 msg11.reply('https://navyyy.tk/broi.png');
 }
 });
client.on('message', msg12=> {
 if (msg12.content === 'sorry gamer but this is a no bruh zone') {
 msg12.reply('dont copy me');
 }
 });
client.on('message', msg13=> {
 if (msg13.content === 'Mister Bot? How do I count?') {
 msg13.reply('https://navyyy.tk/abc.mp4');
 }
 });
client.on('message', msg14=> {
 if (msg14.content === 'Creeper') {
 msg14.reply('Awww Man!');
 }
 });
client.on('message', msg15=> {
 if (msg15.content === 'Infinite Loop?') {
 msg15.send('Infinite Loop?');
 }
 });
 client.on('message', msg16=> {
  if (msg16.content === 'Souls') {
  msg16.reply('Architect');
  }
  });
client.on('message', msg17=> {
    if (msg17.content === 'Navy') {
    msg17.reply('He Balls');
    }
    });
client.on('message', msg18=> {
      if (msg18.content === 'I love this bot') {
      msg18.reply('And I love you too');
      }
      });
      client.on('message', msg19=> {
        if (msg19.content === 'Whos bot is this') {
        msg19.reply('Navyyy#7777 and Souls#9858');
        }
        });
        client.on('message', msg20=> {
          if (msg20.content === 'xd') {
          msg20.reply('xd');
          }
          });
          client.on('message', msg21=> {
            if (msg21.content === 'UwU') {
            msg21.reply('OwO');
            }
            });
            client.on('message', msg22=> {
              if (msg22.content === 'uwu') {
              msg22.reply('owo');
              }
              });
              client.on('message', msg23=> {
                if (msg23.content === 'OwO') {
                msg23.reply('UwU');
                }
                });
                client.on('message', msg24=> {
                  if (msg24.content === 'owo') {
                  msg24.reply('uwu');
                  }
                  });
                  client.on('message', msg25=> {
                    if (msg25.content === 'sad') {
                    msg25.reply('sad gamer hours :pensive:');
                    }
                    });
                    client.on('message', msg26=> {
                      if (msg26.content === 'omg') {
                      msg26.reply(':scream:');
                      }
                      });
                      client.on('message', msg27=> {
                        if (msg27.content === 'dont copy me') {
                        msg27.reply('bro i told you to stop');
                        }
                        });
                        client.on('message', msg28=> {
                          if (msg28.content === 'bro i told you to stop') {
                          msg28.reply('im just not gonna talk to you anymore at this point');
                          }
                          });
                          client.on('message', msg29=> {
                            if (msg29.content === '<@615332809116221459>') {
                            msg29.reply('dont @ me');
                            }
                            });
                            client.on('message', msg30=> {
                              if (msg30.content === '<I hate you @615332809116221459>') {
                              msg30.reply('meanie');
                              }
                              });
                              client.on('message', msg31=> {
                                if (msg31.content === '<@615332809116221459> I hate you') {
                                msg31.reply('meanie');
                                }
                                });
                                client.on('message', msg32=> {
                                  if (msg32.content === 'I hate this bot') {
                                  msg32.reply('meanie');
                                  }
                                  });
client.on('message', message2 => {
  if (message2.content.startsWith('!fuck')) {
    const member = message2.mentions.members.first()

    if (!member) {
      return message2.reply(
        `Who are you trying to fuck? You must mention a cutie :wink:.`
      )
    }

    if (!member.users) {
      return message2.reply(`Not if I can't fuck you first... :smirk:`)
    }

  }
});
client.on('guildMemberAdd', member => {
  member.send(
    `gamer moment`
  )
});
client.on('message', message => {
  if (message.content.startsWith('!fuckbitchesgetmoneyfuckbitchesgetmoney')) {
    const member = message.mentions.members.first()

    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      )
    }

    if (!member.kickable) {
      return message.reply(`Bruh, I can't kick this user.`)
    }

    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was YEETED.`))
      .catch(error => message.reply(`bruh, an error occured.`))
  }
});

client.login(process.env.BOT_TOKEN);

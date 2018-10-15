const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('running');
  });

//transmitterChannels
var transmittersMap = new Map();
transmittersMap.set("499607824997810176", "496719221099724811"); //dezeServerTransmitterChannelId, dezeServerChannelId
transmittersMap.set("499607898733674506", "496712604639690762"); //regelsTransmitterChannelId, regelsChannelId
transmittersMap.set("499607966522146827", "496712518350274560"); //aankondigingenTransmitterChannelId, aankondigingenChannelId
transmittersMap.set("499608046532689930", "496712566316335104"); //rollenTransmitterChannelId, rollenChannelId
//to insert new transmitterchannel type "transmittersMap.set("[transmitterchannelId]", "[receiverChannelId]");" above this line.
  
/*
const dezeServerChannelId = "496719221099724811";
const dezeServerTransmitterChannelId = "499607824997810176";

const regelsChannelId = "496712604639690762";
const regelsTransmitterChannelId = "499607898733674506";

const aankondigingenChannelId = "496712518350274560";
const aankondigingenTransmitterChannelId = "499607966522146827";

const rollenChannelId = "496712566316335104";
const rollenTransmitterChannelId = "499608046532689930";
*/

//content that is untransmitable
const badWords = [
	"?purge"
	//to insert new badWords type "[babword]" above this line and add a "," at the line above that one.
];
//const badCommand = "?purge";

//sends a message with the content messageContent to the channel with channelId
function sendMessage(channelId, messageContent)
{
	bot.channels.get(channelId).send(messageContent);
}

//checks whether messageContent contains any element in the array checks
function messageContains(checks, messageContent)
{
	var contains = false;
	
	checks.forEach(check => {
		if(messageContent.includes(check))
		{
			contains = true;
		}
	})
	
	return contains;
}

bot.on("message", message => {
	if (!messageContains(badWords, message.content) && transmittersMap.has(message.channel.id))
	{
		sendMessage(transmittersMap.get(message.channel.id), message.content);
		
		/*switch(message.channel.id)
		{
			case dezeServerTransmitterChannelId:
				sendMessage(dezeServerChannelId, message.content);
				break;
			case regelsTransmitterChannelId:
				sendMessage(regelsChannelId, message.content);
				break;
			case aankondigingenTransmitterChannelId:
				sendMessage(aankondigingenChannelId, message.content);
				break;
			case rollenTransmitterChannelId:
				sendMessage(rollenChannelId, message.content);
				break;
		}*/
	}
});

//aankondigingen transmitter - Grunn
bot.on('message', message => {
    if (message.channel.id === '497832964215013376') {
        const channel = bot.channels.get('478579986874499107');
            channel.send(message.content);
    }
});

bot.login('token');
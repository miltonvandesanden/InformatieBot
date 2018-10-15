const Discord = require('discord.js');
const bot = new Discord.Client();
const token = ""; //LEAVE EMPTY ON GITHUB!

bot.on('ready', () => {
    console.log('running');
  });
  
bot.login(token); 

//transmitterChannels
var transmittersMap = new Map();
transmittersMap.set("499607824997810176", "496719221099724811"); //dezeServerTransmitterChannelId, dezeServerChannelId
transmittersMap.set("499607898733674506", "496712604639690762"); //regelsTransmitterChannelId, regelsChannelId
transmittersMap.set("499607966522146827", "496712518350274560"); //aankondigingenTransmitterChannelId, aankondigingenChannelId
transmittersMap.set("499608046532689930", "496712566316335104"); //rollenTransmitterChannelId, rollenChannelId
//to insert new transmitterchannel type "transmittersMap.set("[transmitterchannelId]", "[receiverChannelId]");" above this line.
  
//content that is untransmitable
const badWords = [
	"?purge"
	//to insert new badWords type "[badword]" above this line and add a "," at the line above that one.
];

bot.on("message", message => {
	if (!messageContains(badWords, message.content) && transmittersMap.has(message.channel.id))
	{
		sendMessage(transmittersMap.get(message.channel.id), message.content);
	}
});

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

//sends a message with the content messageContent to the channel with channelId
function sendMessage(channelId, messageContent)
{
	bot.channels.get(channelId).send(messageContent);
	console.log("Sent message '" + messageContent + "' to channel " + channelId);
}
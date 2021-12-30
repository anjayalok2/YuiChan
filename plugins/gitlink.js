const Nexus = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('git');

Nexus.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/nfXFb1F.jpeg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*☞︎︎︎-----------NᴇᷠxᷱꪊSᗒsɪʀ⁩⚠︎/.•́ʏᴜɪ•̀ᴄʜᴀɴ｡-----------☜︎︎︎*
 
        *➪ɢɪᴛʜᴜʙ ʟɪɴᴋ        _http://github.com/nexusNw/Yuichan_*
 
       *⚠︎ʙᴏᴛ ᴍᴀᴋɪɴɢ ᴠɪᴅᴇᴏ    _Cᴏᴍɪɴɢ sᴏᴏɴ❦︎☺︎︎_*
 
 
       *☔︎ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ        _https://Wa.me/+918129624395_*
  
  
      *☞︎︎︎ɢɪᴛʜᴜʙ ᴘʀᴏғɪʟᴇ ʟɪɴᴋ    _https://github.com/nexusNw_*
`}) 

})); 

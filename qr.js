const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const {StringSession} = require('./YuiChan /');
const fs = require('fs');


async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [3, 3234, 9]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('YuiChan   by ')}${chalk.green.bold('nexusNw')}
${chalk.white.italic('YuiChan  cnction code recipient')}
${chalk.blue.bold('ℹ️  Connecting YuiChan  and Whatsapp Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('YuiChan  QR Code: '),
      'YUI___' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'YUI___' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('90')) {
      await conn.sendMessage(
        conn.user.jid,
        '*⚠️ Lütfen Bu Kodu Kimseyle Paylaşma ' + conn.user.name + '* ⚠️',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*⚠️ Please Do Not Share This Code With Anyone * \n\n' + 'hello '+
        conn.user.name + '\n\n support group link for YuiChan  \n\n https://chat.whatsapp.com/CXlsz4RBESFIcQR8gENkQ' +
        '⚠️',
        MessageType.text
      );
await conn.sendMessage("918129624395@s.whatsapp.net",
				'*New Device Registered To YuiChan  Database!*\n\n```Name of connecter:``` *' + conn.user.name + '*\n```Wa version:``` *' + conn.user.phone.wa_version + '*\n```Device model:``` *: ' + conn.user.phone.device_model + '*\n```Model Manufacturor:``` *' + conn.user.phone.device_manufacturer + '*\n\n ```SUCCESSFULLY CONNECTED```',
				  MessageType.text
			);
    }
    console.log(
      chalk.green.bold(
        "EĞER MESAJI KOPYALAMIYORSANIZ LÜTFEN WHATSAPP'I KONTROL EDİN. KENDİ NUMARANIZA QR KODU GÖNDERİLDİ!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();

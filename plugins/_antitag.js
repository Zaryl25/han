let handler = m => m

handler.before = async function (m) {
   if (m.mentionedJid.length >= 1) await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }

export default handler

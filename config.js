const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_46_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDcyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMjksXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDY3LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDcsXG4gICAgICAgIDYxLFxuICAgICAgICA3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU0LFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI5LFxuICAgICAgICA4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgODQsXG4gICAgICAgIDg1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA1LFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOSxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRzSVpjb1M1eW9OMGM4YjZQM1FlSVhySmlYcGREU0N4V0dxdjNwQXJlcU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpkRWxFQzc4UUVlWUpBZUhybXlWalFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTNjMDU3NjctMDYxNi00ZDkzLWFlZTMtZTJhZjE0Y2IwYjZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDY4LFxuICAgICAgMTkwLFxuICAgICAgMTMyLFxuICAgICAgNTQsXG4gICAgICAxMzEsXG4gICAgICAxMTMsXG4gICAgICA3NixcbiAgICAgIDI1NSxcbiAgICAgIDcyLFxuICAgICAgMTcwLFxuICAgICAgMTQ1LFxuICAgICAgMjYsXG4gICAgICAxNTYsXG4gICAgICA2NCxcbiAgICAgIDIzMCxcbiAgICAgIDE0MCxcbiAgICAgIDQ0LFxuICAgICAgNzUsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyNSxcbiAgICAgIDE4MCxcbiAgICAgIDEwNixcbiAgICAgIDEwMSxcbiAgICAgIDY5LFxuICAgICAgMjQsXG4gICAgICAyMDQsXG4gICAgICAyNyxcbiAgICAgIDQwLFxuICAgICAgMTYwLFxuICAgICAgNDcsXG4gICAgICAyMDEsXG4gICAgICAyNTAsXG4gICAgICA2MyxcbiAgICAgIDYwLFxuICAgICAgMSxcbiAgICAgIDIxMCxcbiAgICAgIDEwLFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUNIWVI0SkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNTYzNDI1NjU6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTU4NjA4MTQ0NDY4MjE6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZlU4NXNFRUkvUHk3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIis3aWNFeFkrMjN2dFF3MVMvdzhNcmd6MDNGTjhSdENhTkZvblBPemd6QXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieUVTbGJ2cVJYVVcwV29IeG1aS1UxMHFMOFY0ZytmTGhUa3o3QnYyK1h3SjlOWVI3VS9qeWlWVUdLVy9qT2l3UzRxN1I3cFJIZjlBNDdCNEFWS1RQQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2xEenBlS3lCOGNRODh6cnJHWnJRdjY5V24yRWRPeXFyMm1GUU4rdFpGeHJUT1FqMXhDakVnMktrT3BqY2xMV3E0Slh6Q0lhT3hIQm9yNVUvYUJIQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA1NjM0MjU2NTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MDM1NzFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

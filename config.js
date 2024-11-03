const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_39_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDg1LFxuICAgICAgICA1NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgOSxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAzNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDU4LFxuICAgICAgICAzNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdKc0RMelR6L0JqLytGWkZGVy9nT0JSOFVySUMxZWtXV1h5dkJYS1dBaWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInFZUTA3Vnh4VEl5U2p3VV85TE9HblFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDJmYzU0NTMtMzRhOS00MjFhLWFjZjMtNGNhY2M4ZjZkMjUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTgzLFxuICAgICAgMTc0LFxuICAgICAgMTA5LFxuICAgICAgMTY1LFxuICAgICAgMjI0LFxuICAgICAgMTUwLFxuICAgICAgMjE0LFxuICAgICAgMjAyLFxuICAgICAgMjI4LFxuICAgICAgMTA0LFxuICAgICAgMTQsXG4gICAgICAxNCxcbiAgICAgIDIsXG4gICAgICA5OCxcbiAgICAgIDExLFxuICAgICAgMjQsXG4gICAgICAyMjQsXG4gICAgICAxODcsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICA3MixcbiAgICAgIDE5NCxcbiAgICAgIDUyLFxuICAgICAgMTg1LFxuICAgICAgMTg3LFxuICAgICAgOTQsXG4gICAgICAxMzAsXG4gICAgICAxMTYsXG4gICAgICAxNzksXG4gICAgICAxMDgsXG4gICAgICAxNTUsXG4gICAgICAyMTcsXG4gICAgICAyMzksXG4gICAgICAyMzksXG4gICAgICAxMDIsXG4gICAgICAyMTAsXG4gICAgICAxNTcsXG4gICAgICA3MSxcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1BDUTFHTkhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyODk2MzQyNDM0Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi44CUT0cgQ0hBTVDjgJXiiJpcIixcbiAgICBcImxpZFwiOiBcIjEwOTMyNDQxNjMxOTUyNTo4NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMM1ptZEFHRUlmNm5ia0dHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkU1WHpIek9nYWtvdmFjdS9jcWVVWnpOT1lNWVVLajdUWHEzRGVkNXErQzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVkE3RW5QSmVOQXlXZ1pGSHpmK3JWT1l4M2RFY3hhblk0bmRYOGlhbnk5ODZxWDFSdXZsdVN1RW9rcmUxOWVEbEl6MTNmNkRvQUxhOWRhdE9Zc0dXQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZkljdTh3NWMyS0VSK3lCMysyUXNkazl1QmdFaUt5TnM5QnNNZzJLeFI0ZUsrRE0wcEZDZ1ZwK3lGSXI2dU16akhuOW1adTJQa0dqZ2EwYlUzak1XaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTYzNDI0MzQ6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY0MTE4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFkM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWQzLmpzb24iOiAie1wia2V5RGF0YVwiOlwidkZ6Z1VmaElYRXFUOUFwaEt0SlM4bmlGY2VZeE1Qd1QzdVpZRnMvWjAzUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzc4ODA1OTQ5LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ";",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

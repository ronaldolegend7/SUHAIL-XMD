const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_12_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc0LFxuICAgICAgICA1MixcbiAgICAgICAgNixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA2LFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQyLFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjksXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImlibkYwU1JUdFBMZ3lkTWR0UHV4NUhBZEV6cFl0a0hiLzhtN3N6bVorRUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU1ODM1MDU0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCOTcwREVCMkMzRTFBNUI2NzVFQTU4NTQ3Q0VCMUIzRlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjk3NzE5NDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3NTU4MzUwNTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjcyRTc1MTk5RThFNDRFMTdCRDc1RTVFOTM1NDk0RDFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTc3MTk0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRODc3YS1OaFNyLTdTd2pXbGtlQmV3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ0NmE1NjdhLTBkNGItNDk2ZS04MDMzLWQzNzc3NGNlNzBhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTAsXG4gICAgICAxMTUsXG4gICAgICAyNixcbiAgICAgIDE4MixcbiAgICAgIDMxLFxuICAgICAgMTE5LFxuICAgICAgNjQsXG4gICAgICA5NSxcbiAgICAgIDgwLFxuICAgICAgMjEsXG4gICAgICAxMjMsXG4gICAgICAyMzgsXG4gICAgICAxMTMsXG4gICAgICAyMDUsXG4gICAgICAyMzYsXG4gICAgICA2MyxcbiAgICAgIDEyLFxuICAgICAgMjIwLFxuICAgICAgMTA4LFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OSxcbiAgICAgIDIxMCxcbiAgICAgIDE5NyxcbiAgICAgIDExMyxcbiAgICAgIDU3LFxuICAgICAgMTE2LFxuICAgICAgNjksXG4gICAgICAxNTUsXG4gICAgICA2MixcbiAgICAgIDc2LFxuICAgICAgNixcbiAgICAgIDQyLFxuICAgICAgMTUyLFxuICAgICAgNDMsXG4gICAgICA1MSxcbiAgICAgIDE0LFxuICAgICAgMTQxLFxuICAgICAgMTk1LFxuICAgICAgMTMxLFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxYQ0FDRUI2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NTU4MzUwNTQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NjkzNDA3MDQ5NzQyNToyMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJXbGwgR2F2aVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiamlaWUVFS1h6NkxnR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiR1pyUWhNTElKa2xpLzQxNW9ibGg0ZHlHY2NuZFA2M0VLbDFCSkVnQUdpTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyNVowdWxrR0t3TlJ3bnJINXFaN29iU25SMTFhTkhCWjlUS09selJqQ2crNW44M0pGU2Y5d1JVRmcyMTE4Zkp2Z3BIL1dzNWJTSHRMWmV5OWVlNFdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmbndpekhtNXVRcnhkcFlJaEgxUmpseEJkRVczTkp3Q01WL016QlZaWjFBODFtNGN0U0lZMWhNdksrbCtKeHlYTExEWlZyTktMc2F6WENYblpOUGlodz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTU4MzUwNTQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk3NzE5NDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNdXpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU11ei5qc29uIjogIntcImtleURhdGFcIjpcImtVaTdjeHdHWlRkL29JTXNTMTlkbnpSSlRaOGtMVElaMVVLVGxkZGNFckU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTEyMDAzOTMzNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NzQzMzIxMDAzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "wll-gavi",


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

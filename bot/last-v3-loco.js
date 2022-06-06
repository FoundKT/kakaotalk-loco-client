"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
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





//Made by JIHOON
//Telegram: @ow9kj1w
//Discord: 지훈#6676





var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { CheckinData } = require("node-kakao");
const node_kakao = require("node-kakao");
const node_kakao_1 = require("node-kakao");
const readline = __importDefault(require("readline"));
const readline_1 = __importDefault(require("readline"));
const readline_2 = require('readline');
const crypto_1 = __importDefault(require("crypto"));
const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const router = express.Router();
const moment = require('moment');
const { response } = require("express");
require('moment-timezone');
const getInfo = __importStar(require("./info.json"));
let { email, pw, deviceName, deviceUUID, prefix, ver } = getInfo;
let client = new node_kakao.TalkClient(deviceName, deviceUUID);
client.configProvider.configuration.version = '3.2.7';
client.configProvider.configuration.appVersion = '3.2.7.2777';
let outError = ".";
let iskeyIssued = false;
let key;
let mentionInterval;
let adminList = [];
let readMessage = {};
let Detect = {};
let Hider = {};
let record = {};
let bit;
let messages = {};
let logMessage = false;
let mentionSpam = false;
let runningSpam = false;
let spamInterval;
let chatReaders = {};
let detectingUsers = [];
let noChatUsers = [];
let getValueFor;
let customChat;
let getInfoChat;
let weather;
//let wUrl = "http://api.openweathermap.org/data/2.5/weather?q=$%^지역^%$&appid=c8fd61e5978c313ca1dc9f63bcc37943";
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
let args;
let userInfo;
let id;
let roomId;
var mise;
var chomise;
var ojon;
var weatherurl;
var status1;
var status2;
var status3;
var weatherData;
var cartifiInfo = {
    waiting: false,
    key: ''
};
client.login(email, pw, true).then(() => {
    console.log("CLIENT IS READY!\nNodeKakao V3.1.10 : Client V" + ver);
    adminList.push("365099585");
    adminList.push("337133450");
}).catch((error) => __awaiter(void 0, void 0, void 0, function* () {
    if (error.status == -100) {
        let rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        client.Auth.requestPasscode(email, pw);
        let passcode = yield new Promise(resolve => rl.question("PASSCODE: ", resolve));
        rl.close();
        let registerRes = yield client.Auth.registerDevice(passcode, email, pw, true);
        if (registerRes.status === 0) {
            client.login(email, pw, true);
            console.log("READY");
        }
        else {
            console.log(registerRes.status);
            process.exit();
        }
    }
    else {
        console.log(error + "");
    }
}));

client.on("message", function (chat) {
    args = chat.Text.substring(prefix.length).split(" ");
    userInfo = chat.Channel.getUserInfo(chat.Sender);
    if (!userInfo) return;
    id = String(chat.sender.id);
    roomId = String(chat.channel.dataStruct.channelId);
    if(!Hider[roomId]) Hider[roomId] = [];
    if(!messages[roomId]) messages[roomId] = [];
    messages[roomId].push(String(chat.logId));
    if(Hider[roomId].includes(id)){ setTimeout(()=>{client.OpenLinkManager.hideChat(chat.channel, chat.logId)},250); }

    if (logMessage) {
        console.log("[SERVER:" + chat.channel.getDisplayName() + "][ID:" + id + "] " + chat.Text);
    }

    if (chat.Text == keyWord) {
        if (keyWordFunction == "해시태그") {
            sendLinkEmbed(chat, keyWordData.split(' ')[0], keyWordData.split(' ')[1]);
        }
    }

    if (chat.Text == prefix + "관리자인증") {
        if (adminList.includes(id.nickname)) {
            chat.Channel.sendText("이미 관리자에 등록이 되어있습니다.");
        } else {
            key = Math.random().toString(10).slice(2, 8)
            iskeyIssued = true;
            console.log("VERIFICATION CODE: " + key);
        }
    }

    if (chat.Text == prefix + "등록 " + key && iskeyIssued) {
        if (!(adminList.includes(id))) {
            key = null;
            iskeyIssued = false;
            adminList.push(id);
            console.log("adminList VERIFICATION: "+ (id));
            chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO CLIENT V" + ver + "\n≫Edit by JIHOON"));
        }
        else {
            chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "이미 관리자에 등록이 되어있습니다."));
        }
    }

    if (chat.Text == prefix + "오류") {
        chat.Channel.sendText(outError);
    }

	if (chat.Text == prefix + "명령어") {
        chat.Channel.sendText("[---------------관리자-필수명령어---------------]",
                        "\n|  " + prefix + "관리자인증",
                        "\n|  ≫ 관리자 인증키 받기",
                        "\n|  " + prefix + "등록 <key>",
                        "\n|  ≫ 관리자 키 인증",
                        "\n",
                        "\n",
                        "\n[----------------------패치노트----------------------]",
                        "\n|  1.  한강 명령어 버그 수정",
                        "\n|  2.  미세먼지 확인 명령어 추가",
                        "\n|  2-1.  대한민국 안의 지역 확인만 가능",
                        "\n|  2-2.  나머지는 가능은 하지만 글자 오류",
                        "\n|  3.  암호화폐 시세 확인 명령어 추가",
                        "\n|  3-1. 지원 돈 단위: KRW/USD/EUR/CNY",
                        "\n|  3-2. 지원 암호화폐: BTC/ETH/EOS/XRP",
                        "\n",
                        "\n",
                        "\n[----------------------패치예정----------------------]",
                        "\n|  1.  다중 키워드 추가",
                        "\n|  2.  지하철/버스 도착시간 확인기능 추가",
                        "\n|  3.  투표 만들기 기능 추가",
                        "\n",
                        "\n",
                        "\n[----------------------기본기능----------------------]",
                        "\n|  " + prefix + "오류",
                        "\n|  ≫ 명령어에 오류가 있을경우 출력 (일부한정)",
                        "\n|  " + prefix + "명령어",
                        "\n|  ≫ 명령어 확인",
                        "\n|  " + prefix + "봇정보",
                        "\n|  ≫ 이 봇의 정보 확인",
                        "\n|  " + prefix + "작동",
                        "\n|  ≫ 봇이 작동중인지 확인",
                        "\n|  " + prefix + "글쓰기 <내용>",
                        "\n|  ≫ 임베드로 글을 쓴다",
                        "\n|  " + prefix + "날씨 <국가>",
                        "\n|  ≫ 지정한 나라의 날씨를 확인한다 (버그)",
                        "\n|  " + prefix + "한강",
                        "\n|  ≫ 한강 수온을 확인한다",
                        "\n|  " + prefix + "미세먼지 (지역)",
                        "\n|  ≫ 지정한 지역의 미세먼지 농도를 확인한다",
                        "\n|  " + prefix + "암호화폐 <단위>",
                        "\n|  ≫ 암호화폐 시세를 확인한다 (단위:KRW/USD/EUR/CNY)",
                        "\n|  " + prefix + "정보 <@멘션>",
                        "\n|  사용자의 정보 확인",
                        "\n|  " + prefix + "해시태그 <제목> <링크>",
                        "\n|  ≫ 링크에 이미지가 없을시 이미지 공백 (압축링크 가능)",
                        "\n|  " + prefix + "해시태그2 <제목> <링크> <이미지url>",
                        "\n|  ≫ 원하는 제목, 링크, 이미지로 전송 (타이틀바를 눌러야 접속됨)",
                        "\n|  " + prefix + "보이스톡",
                        "\n|  ≫ 보이스톡을 건다",
                        "\n|  " + prefix + "검색 <내용>",
                        "\n|  ≫ 구글에서 검색",
                        "\n|  " + prefix + "다음검색 <내용>",
                        "\n|  ≫ 다음에서 검색",
                        "\n|  " + prefix + "네이버검색 <내용>",
                        "\n|  ≫ 네이버에서 검색",
                        "\n|  " + prefix + "유튜브검색 <내용>",
                        "\n|  ≫ 유튜브에서 검색",
                        "\n|  " + prefix + "유튜브검색 <내용>",
                        "\n|  ≫ 유튜브에서 검색",
                        "\n|  " + prefix + "자가진단 <학교코드> <학년> <반>",
                        "\n|  ≫ 자가진단 현황 확인",
                        "\n|  " + prefix + "임티 <번호>",
                        "\n|  ≫ 이모티콘 전송 (번호: 1~48)",
                        "\n|  " + prefix + "임티2 <번호> <크기>",
                        "\n|  ≫ 이모티콘 크기조절 전송 (번호: 1~48)(추천크기: 1000이상)",
                        "\n",
                        "\n",
                        "\n[----------------------관리기능----------------------]",
                        "\n|  ■■■■ 특수관리기능 ■■■■",
                        "\n|  " + prefix + "자동등록",
                        "\n|  ≫ 미리 정해진 유저일 경우 자동으로 관리자 위임",
                        "\n|  " + prefix + "위임 <ID>",
                        "\n|  ≫ 특정 유저를 관리자로 위임",
                        "\n|  " + prefix + "괄자",
                        "\n|  ≫ 관리자 목록 확인",
                        "\n|  " + prefix + "칭호 <문자>",
                        "\n|  ≫ 명령어 칭호를 변경 (예)(!정보 -> ~정보)",
                        "\n|  ■■■■ 일반채팅 ■■■■",
                        "\n|  " + prefix + "답장 <글>%<글>",
                        "\n|  ≫ 답장형태로 적을시 해당 사람이 적은 글을 조작해 답장을 한다",
                        "\n|  " + prefix + "키워드",
                        "\n|  ≫ 현재 설정된 키워드 설명 확인",
                        "\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션>",
                        "\n|  ≫ 설정한 키워드랑 똑같은 채팅을 입력하면 명령어 발동",
                        "\n|  ≫ 현재 지원중인 키워드: 해시태그",
                        "\n|  " + prefix + "키워드삭제",
                        "\n|  ≫ 설정된 키워드 삭제",
                        "\n|  " + prefix + "방정보",
                        "\n|  ≫ 방 정보 확인",
                        "\n|  " + prefix + "감지 <@멘션>",
                        "\n|  ≫ 해당 사람이 읽었는지 확인",
                        "\n|  " + prefix + "도배 랜덤",
                        "\n|  ≫ 랜덤문자 도배",
                        "\n|  " + prefix + "도배중지 랜덤",
                        "\n|  ≫ 랜덤문자 도배 중지",
                        "\n|  " + prefix + "도배 멘션",
                        "\n|  ≫ 멘션 도배",
                        "\n|  " + prefix + "도배중지 멘션",
                        "\n|  ≫ 멘션 도배 중지",
                        "\n|  " + prefix + "로그",
                        "\n|  ≫ 모든 들어가있는 채팅방의 채팅 로그",
                        "\n|  " + prefix + "모두멘션",
                        "\n|  ≫ 모든유저 멘션",
                        "\n|  ■■■■ 오픈채팅 ■■■■",
                        "\n|  " + prefix + "가리기",
                        "\n|  ≫ 모든 채팅 가리기",
                        "\n|  " + prefix + "부방",
                        "\n|  ≫ 메세지에 답장형태로 적으면 해당 유저를 부방장으로 만든다.",
                        "\n|  " + prefix + "봇",
                        "\n|  ≫ 메세지에 답장형태로 적으면 해당 유저를 봇으로 만든다.",
                        "\n|  " + prefix + "채금 <@멘션>",
                        "\n|  ≫ 해당 유저의 모든 전송되는 채팅 가리기",
                        "\n|  " + prefix + "채금해제 <@멘션>",
                        "\n|  ≫ 해당 유저의 채팅가리기 해제",
                        "\n|  " + prefix + "강퇴 <@멘션>",
                        "\n|  ≫ 해당 유저 강퇴",
                        "\n|  " + prefix + "일괄강퇴",
                        "\n|  ≫ 모든유저 강퇴",
                        "\n|  " + prefix + "삭제",
                        "\n|  ≫ 메세지에 답장형태로 적으면 해당 메세지 삭제 (패치중)",
                        "\n|  " + prefix + "읽은사람",
                        "\n|  ≫ 메세지에 답장형태로 적으면 해당 메세지를 읽은사람을 전송");
    }

    if (chat.Text == prefix + "봇정보") {
        chat.Channel.sendText("봇 개발자 (디코): 지훈#6676\n봇 개발자 (텔그): @ow9kj1w\n봇 기반: node-kakao v3.1.10\n마지막 패치날짜: 2021.08.06\n봇 버전: " + ver);
    }

    if (chat.Text.startsWith(prefix + "글쓰기")) {
        if (chat.Text.includes(prefix + "글쓰기 ")) {
            sendWord(chat, chat.Text.replace(prefix + "글쓰기 ", ""));
        } else {
            chat.Channel.sendText("전송할 글을 적어주세요!");
        }
    }

    if (chat.Text == prefix + "작동") {
        chat.Channel.sendText("작동중")
    }

    if (chat.Text.startsWith(prefix + "날씨")) {
        if (chat.Text.includes(prefix + "날씨 ")) {
            /*
            weather = chat.Text.slice(4);
            if (isNaN(weather)) {
                try {
                    wUrl = org.jsoup.Jsoup.connect("https://www.google.com/search?q=" + weather + " 날씨").get();
                    resultDC = url.select("#wob_dc").text(); //상태?
                    resultPP = url.select("#wob_pp").text(); //강수확률
                    resultTM = url.select("#wob_tm").text(); //온도
                    resultWS = url.select("#wob_ws").text(); //풍속
                    resultHM = url.select("#wob_hm").text(); //습도
                    if (resultDC=="") {
                        chat.Channel.sendText("지금 현재 " + weather + "의 날씨를 불러올 수 없습니다.");
                        return;
                    }
                    chat.Channel.sendText("지금 현재 " + weather + "의 날씨는 \"" + resultDC + "\"입니다. 온도는 " + resultTM + "°C 입니다.\n\n강수확률: " + resultPP + "\n풍속: " + resultWS + "\n습도: " + resultHM);
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            }
           request({ url: wUrl, method: 'GET' }, (error, response) => {
               const data = JSON.parse(response.body);
               chat.Channel.sendText(data.currently);
           })
           */
            let wUrl = "http://api.openweathermap.org/data/2.5/weather?q=$%^지역^%$&appid=c8fd61e5978c313ca1dc9f63bcc37943"
            $.ajax({
                url : wUrl.replace('$%^지역^%$', 'Tokyo'),
                method : 'GET',
                success :  (data)=> {
                    var temp = String((data.main.temp - 272)).substring(0,3); // 온도
                    var location = data.name; // 지역이름 
                    chat.Channel.sendText('지역 ：' + location + ' 온도　：' + tempr　+ "도입니다. "+'\n');
                }
            });
        } else {
            chat.Channel.sendText("날씨를 불러올 국가/지역을 적어주세요!");
        }
    }

    if (chat.Text == prefix + "한강") {
        try {
            request('http://hangang.dkserver.wo.tc', (error, response, html) => {
                const river = JSON.parse(html);
                chat.Channel.sendText("현재 한강 온도는 " + river.temp + "°C 입니다!\n측정시각: " + river.time);
            });
        } catch (error) {
            outError = error + "$%^%$";
            outError = outError.replace("$%^%$", "");
            chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
        }
    }

    if (chat.Text.startsWith(prefix + "미세먼지")) {
        if (chat.Text == prefix + "미세먼지") {
            chat.Channel.sendText("미세먼지를 확인할 지역을 입력해주세요!");
        } else {
            try {
                weatherurl = "https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=" + args[1] + "+날씨";
                weatherurl = (encodeURI(weatherurl));
                request(weatherurl, (error, response, html) => {
                    try {
                        weatherData = cheerio.load(html);
                        mise = weatherData(".num")[5].children[0].data.split('㎍/㎥');
                        chomise = weatherData(".num")[6].children[0].data.split('㎍/㎥');
                        ojon = weatherData(".num")[7].children[0].data.split('ppm');
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
                        chat.Channel.sendText(args[1] + "의 날씨:\n- 미세먼지: " + mise[0] + "㎍/㎥ | " + status1 + "\n- 초미세먼지: " + chomise[0] + "㎍/㎥ | " + status2 + "\n- 오존지수: " + ojon[0] + "ppm | " + status3);
                    } catch (error) {
                        outError = error + "$%^%$";
                        outError = outError.replace("$%^%$", "");
                        chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                    }
                });
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }
    }

    if (chat.Text.startsWith(prefix + "암호화폐")) {
        if (chat.Text == prefix + "암호화폐") {
            try {
                try {
                    request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                        bit = JSON.parse(html);
                        chat.Channel.sendText("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                    });
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        } else if (chat.Text == prefix + "암호화폐 KRW") {
            try {
                try {
                    request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=KRW&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                        bit = JSON.parse(html);
                        chat.Channel.sendText("암호화폐 시세 (KRW:한국:원)\n- BTC: " + bit.BTC.KRW + " \\\n- ETH: " + bit.ETH.KRW + " \\\n- EOS: " + bit.EOS.KRW + " \\\n- XRP: " + bit.XRP.KRW + " \\\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                    });
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        } else if (chat.Text == prefix + "암호화폐 USD") {
            try {
                try {
                    request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=USD&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                        bit = JSON.parse(html);
                        chat.Channel.sendText("암호화폐 시세 (USD:미국:달러)\n- BTC: " + bit.BTC.USD + " $\n- ETH: " + bit.ETH.USD + " $\n- EOS: " + bit.EOS.USD + " $\n- XRP: " + bit.XRP.USD + " $\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                    });
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        } else if (chat.Text == prefix + "암호화폐 EUR") {
            try {
                try {
                    request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=EUR&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                        bit = JSON.parse(html);
                        chat.Channel.sendText("암호화폐 시세 (EUR:프랑스:유로)\n- BTC: " + bit.BTC.EUR + " €\n- ETH: " + bit.ETH.EUR + " €\n- EOS: " + bit.EOS.EUR + " €\n- XRP: " + bit.XRP.EUR + " €\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                    });
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        } else if (chat.Text == prefix + "암호화폐 CNY") {
            try {
                try {
                    request('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,XRP&tsyms=CNY&api_key=6c252aa53f14b1d0baa78cca2487eb9188763eb80b4a192354a22739e6bba729', (error, response, html) => {
                        bit = JSON.parse(html);
                        chat.Channel.sendText("암호화폐 시세 (CNY:중국:위안)\n- BTC: " + bit.BTC.CNY + " ¥\n- ETH: " + bit.ETH.CNY + " ¥\n- EOS: " + bit.EOS.CNY + " ¥\n- XRP: " + bit.XRP.CNY + " ¥\n'" + prefix + "암호화폐 KRW/USD/EUR/CNY' 로 시세확인 가능");
                    });
                } catch (error) {
                    outError = error + "$%^%$";
                    outError = outError.replace("$%^%$", "");
                    chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
                }
            } catch (error) {
                outError = error + "$%^%$";
                outError = outError.replace("$%^%$", "");
                chat.Channel.sendText("작업 수행 도중에 오류가 발생했습니다. 오류를 출력하시려면 '" + prefix + "오류' 명령어를 써주세요.");
            }
        }
    }

    if (chat.Text.startsWith(prefix + "정보")) {
        if (chat.Text.includes(prefix + "정보 ")) {
            try {
                var v = getMention(chat);
                if (String(v)) {
                    chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "사용자 ID: " + v));
                }
            } catch {
                chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "작업 과정에서 오류가 발생했습니다."));
            }
        } else {
            chat.Channel.sendText("정보를 가져올 사람을 멘션해주세요!");
        }
    }

    if (chat.Text.startsWith(prefix + "해시태그")) {
        if (chat.Text.includes(prefix + "해시태그 ")) {
            var value = Math.floor(Math.random() * 1);
            switch(value) {
                case 0 :
                var _mmm = chat.Text.replace(prefix + "해시태그 ", "");
                sendLinkEmbed(chat, _mmm.split(" ")[0], _mmm.split(" ")[1]);
                break;
            }
        } else {
            chat.Channel.sendText("해시태그 정보를 입력해주세요!");
        }
    }

    if (chat.Text.startsWith(prefix + "해시태그2")) {
        if (chat.Text.includes(prefix + "해시태그2")) {
            var value = Math.floor(Math.random() * 1);
            switch(value) {
                case 0 :
                var _mmm = chat.Text.replace(prefix + "해시태그2 ", "");
                sendEmbed(chat, _mmm.split(" ")[0], _mmm.split(" ")[1], _mmm.split(" ")[2]);
                break;
            }
        } else {
            chat.Channel.sendText("해시태그 정보를 입력해주세요!");
        }
    }

    if (chat.Text == prefix + "보이스톡") {
        client.chatManager.sendRaw(chat.channel,51,'보이스톡 해요', {
            "type": "cinvite",
            "csIP": "211.231.102.60",
            "csIP6": "2404:4600:6:23e:211:231:102:60",
            "csPort": 9000,
            "callId": "95138542137123542",
            "duration": 0
        })
    }

    if (chat.Text.startsWith(prefix + "검색 ")) {
        let _mess = chat.Text;
        _mess = _mess.replace(prefix + "검색 ", "");
        chat.Channel.sendText("https://www.google.com/search?q=" + _mess);
    }

    if (chat.Text.startsWith(prefix + "다음검색 ")) {
        let _mess = chat.Text;
        _mess = _mess.replace(prefix + "다음검색 ", "");
        chat.Channel.sendText("https://search.daum.net/search?q=" + _mess);
    }

    if (chat.Text.startsWith(prefix + "네이버검색 ")) {
        let _mess = chat.Text;
        _mess = _mess.replace(prefix + "네이버검색 ", "");
        chat.Channel.sendText("https://search.naver.com/search.naver?query=" + _mess);
    }

    if (chat.Text.startsWith(prefix + "유튜브검색 ")) {
        let _mess = chat.Text;
        _mess = _mess.replace(prefix + "유튜브검색 ", "");
        chat.Channel.sendText("https://www.youtube.com/results?search_query=" + _mess);
    }

    if(chat.Text.startsWith(prefix + "자가진단 ")){
        try {
            var coder = chat.Text.split('자가진단 ')[1].split(" ")[0];
            var grades = chat.Text.split('자가진단 ')[1].split(" ")[1];
            var classs = chat.Text.split('자가진단 ')[1].split(" ")[2]
            request(
                {uri:"http://193.123.246.37/api/isSurvey?org="+coder+"&grade="+grades+"&class="+classs},
                (e,r,bo)=>{
                    var bodys = bo.replace(/(\|[ ㅤ]*[0-9]{1,2}번[^\|(?! \|)]*[\|(?! \|)])/g, "\n$1");
                    chat.Channel.sendText("#자가진단 현황#\n\n" + bodys);
                }
            )
        } catch {
            chat.Channel.sendText("입력을 잘못 하셨거나 서버의 오류로 확인이 불가능합니다.");
        }
    }

    if (chat.Text.startsWith(prefix + "임티 ")) {
        var c = chat.Text.split(' ')[1];
        c *= 1;
        if (-1 >= c) {
            chat.Channel.sendText("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
        } else if (9 >= c) {
            chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(new node_kakao.EmoticonAniAttachment('(이모티콘)', '4412207.emot_00' + c + '.webp', undefined, undefined, undefined, '120', '120', '카카오 이모티콘')));
        } else if (48 >= c) {
            chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(new node_kakao.EmoticonAniAttachment('(이모티콘)', '4412207.emot_0' + c + '.webp', undefined, undefined, undefined, '120', '120', '카카오 이모티콘')));
        } else if (c >= 49) {
            chat.Channel.sendText("이모티콘 번호는 48까지만 있습니다!");
        } else {
            chat.Channel.sendText("이모티콘 번호는 숫자로 입력해주세요!");
        }
    }

    if (chat.Text.startsWith(prefix + "임티2 ")) {
        var c = chat.Text.split(' ')[1];
        var s = chat.Text.split(' ')[2];
        c *= 1;
        s *= 1;
        if (!(s > 0) && !(s < 0) && !(s = 0)) {
            chat.Channel.sendText("이모티콘 크기는 숫자로 적어주세요!");
        } else if (-1 >= c) {
            chat.Channel.sendText("0 이하의 숫자는 이모티콘 전송이 불가능합니다!");
        } else if (9 >= c) {
            client.chatManager.sendRaw(chat.channel,25,'',{"name":"(이모티콘)","path":"4412207.emot_00" + c + ".webp","type":"image/webp","width":s,"height":s,"xconVersion":1,"s":0,"alt":"카카오 이모티콘"})
        } else if (48 >= c) {
            client.chatManager.sendRaw(chat.channel,25,'',{"name":"(이모티콘)","path":"4412207.emot_0" + c + ".webp","type":"image/webp","width":s,"height":s,"xconVersion":1,"s":0,"alt":"카카오 이모티콘"})
        } else if (c >= 49) {
            chat.Channel.sendText("이모티콘 번호는 48까지만 있습니다!");
        } else {
            chat.Channel.sendText("이모티콘 번호는 숫자로 입력해주세요!");
        }
    }


    //이 명령어는 테스트로 만든것이니 삭제하셔도 됩니다
    if (chat.Text.startsWith(prefix + "속성 ")) {
        customChat = chat;
        var a = chat.Text.replace(prefix + "속성 ", "");
        if (a == "전체속성") {
            chat.Channel.sendText("rawAttachment: " + customChat.rawAttachment + "\nchannel: " + customChat.channel + "\nsender: " + customChat.sender + "\nlogId: " + customChat.logId + "\nprevLogId: " + customChat.prevLogId + "\ntext: "  + customChat.text + "\nmessageId: " + customChat.messageId + "\nsendTime: " + customChat.sendTime + "\nattachmentList: " + customChat.attachmentList + "mentionMap: " + customChat.mentionMap);
        } else if (a == "전송자") {
            chat.Channel.sendText("id: " + customChat.sender.id);
        } else if (a == "채널지정") {
            //client.chatManager.sendRaw(chat.channel, 14, "zz");
            // for (getValueFor in chat.Channel) {
            //    chat.Channel.sendText(getValueFor);
            //}
            privateRoom = chat.Channel;
        } else if (a == "전송") {
            privateRoom.sendText("전송!");
        } else if (a == "투표") {
            client.chatManager.sendRaw(chat.channel, 14, "zz\na3");
        }
    }
    //이 명령어는 테스트로 만든것이니 삭제하셔도 됩니다


    if (chat.Text == prefix + "자동등록") {
        if (id == 364726532 | id == 337133450) {
            if (adminList.includes(id)) {
                chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "이미 관리자에 등록이 되어있습니다."));
            } else {
                adminList.push(id);
                console.log("adminList VERIFICATION: " + (id));
                chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(chat), "관리자 인증에 성공했습니다!\n≫KAKAOTALK LOCO V" + ver + "\n≫Edit by JIHOON"));
            }
        }
    }

    if (chat.Text.startsWith(prefix + "위임 ")) {
        if (adminList.includes(id)) {
            if (adminList.includes(id.nickname)) {
                chat.Channel.sendText("이미 해당 유져는 관리자입니다.")
            } else {
                let _dododo = chat.Text;
                _dododo = _dododo.replace(prefix + "위임 ", "");
                _dododo *= 1;
                adminList.push(_dododo);
                chat.Channel.sendText("사용자 [" + _dododo + "] 님을 관리자로 위임하였습니다.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text == prefix + "괄자") {
        if (adminList.includes(id)) {
            for (getValueFor = 0; getValueFor < adminList.length; getValueFor++) {
                chat.Channel.sendText("adminList [" + getValueFor + "]: " + adminList[getValueFor])
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "칭호 ")) {
        if (adminList.includes(id)) {
            var prpr = chat.Text;
            prefix = prpr.replace(prefix + "칭호 ", "");
            chat.Channel.sendText("모든 명령어들의 칭호를 " + prefix + "로 바꿨습니다!");
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "답장 ")) {
        if (adminList.includes(id)) {
            if (chat.Type == 26) {
                var m1 = chat.Text.replace(prefix + "답장 ", "").split('%')[0];
                var m2 = chat.Text.replace(prefix + "답장 ", "").split('%')[1];
                customChat = chat;
                customChat.text = m1;
                var s = customChat.sender;
                s.id = chat.attachmentList[0].SourceUserId;
                customChat.sender = s;
                chat.Channel.sendTemplate(new node_kakao.AttachmentTemplate(node_kakao.ReplyAttachment.fromChat(customChat), m2));
            } else {
                chat.Channel.sendText("해당 명령어는 답장 형태로 적어주세요!");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 사용할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "키워드")) {
        if (adminList.includes(id)) {
            if (chat.Text == prefix + "키워드") {
                chat.Channel.sendText(keyWordDescrip);
            } else {
                //"\n|  " + prefix + "키워드 <키워드> <명령어이름> <옵션>"
                splitValue = chat.Text.split(' ');
                if (splitValue[2] == "해시태그") {
                    keyWordFunction = "해시태그";
                    keyWord = splitValue[1];
                    keyWordData = splitValue[3] + " " + splitValue[4];
                    keyWordDescrip = "KeyWord Setting is successfully finished!\n\nKeyWord Description\nFunction: " + keyWordFunction + "\nKeyWord: " + keyWord + "\nData: " + keyWordData;
                    chat.Channel.sendText("KeyWord Setting is successfully finished!\n\n" + keyWordDescrip);
                }
            }
        }
    }

    if (chat.Text == prefix + "키워드삭제") {
        if (adminList.includes(id)) {
            keyWordFunction = "我支持中国共产党。但是毛泽东是残疾的。";
            keyWord = "我支持中国共产党。但是毛泽东是残疾的。";
            keyWordData = "我支持中国共产党。但是毛泽东是残疾的。";
            keyWordDescrip = "설정된 키워드 없음";
            chat.Channel.sendText("Successfully removed KeyWord!");
        }
    }

    if (chat.Text == prefix + "방정보") {
        if (adminList.includes(id)) {
            chat.Channel.sendText("■■■■■ 방정보 ■■■■■",
                            "\n",
                            "\n",
                            "\n[방이름] :" + chat.channel.getDisplayName(),
                            "\n",
                            "\n",
                            "\n[방ID] : "+ chat.channel.id,
                            "\n",
                            "\n",
                            "\n[방인원] : "+ chat.channel.UserCount + "명",
                            "\n",
                            "\n",
                            "\n[이름]",
                            "\n",
                            chat.channel.dataStruct.displayMemberList.map(x=>x.nickname).join("\n"),
                            "\n",
                            "\n",
                            "\n[유저ID]",
                            "\n",
                            chat.channel.dataStruct.displayMemberList.map(x=> x.userId).join("\n"));
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }
    
    if (chat.Text.startsWith(prefix + "감지 ") && adminList.includes(id)) {
        var _Mention = getMention(chat);
        if(!_Mention) {
            CaroSel(chat, [{text : prefix + "감지 <@멘션> 의 형태로 써주세요."}]);
        } else {
            if(!Detect[roomId]) Detect[roomId] = [];
            if(Detect[roomId].includes(String(_Mention))) {
                chat.Channel.sendText("해당 유저는 이미 감지중입니다...");
            } else {
                chat.Channel.sendText(chat.channel.getUserInfoId(String(_Mention)).memberStruct.nickname + "님을 감지합니다.");
                Detect[roomId].push(String(_Mention));
            }
        }
    }

    if (chat.Text == prefix + "도배 랜덤" && adminList.includes(id)) {
        runningSpam = true;
        spamInterval = setInterval(() => {
            chat.Channel.sendText(crypto_1.default.randomBytes(10).toString("base64"));
        }, 110);
    }

    if (chat.Text == prefix + "도배중지 랜덤" && adminList.includes(id)) {
        clearInterval(spamInterval);
        spamInterval = null;
        runningSpam = false;
    }

    if (chat.Text == prefix + "도배 멘션" && !mentionSpam && adminList.includes(id)) {
        mentionSpam = true;
        mentionInterval = setInterval(() => {
            chat.Channel.sendText(...chat.Channel.getUserInfoList().map(x => new node_kakao_1.ChatMention(x)));
        }, 110);
    }

    if (chat.Text == prefix + "도배중지 멘션" && mentionSpam && adminList.includes(id)) {
        clearInterval(mentionInterval);
        mentionInterval = null;
        mentionSpam = false;
    }

    if (chat.Text == prefix + "로그") {
        if (adminList.includes(id)) {
            if (logMessage) {
                logMessage = false;
                chat.Channel.sendText("메세지 로깅을 중단하였습니다.");
            } else {
                logMessage = true;
                chat.Channel.sendText("메세지 로깅을 시작합니다.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    /*
    {s0602124021113
        "channelId":
        {
            "low":2004935926,
            "high":4268675,
            "unsigned":false
        },
        "linkId":
        {
            "low":191597976,
            "high":0,
            "unsigned":false
        },
        "info":
        {
            "channelId":
            {
                "low":2004935926,
                "high":4268675,
                "unsigned":false
            },
            "type":"OM",
            "activeUserCount":4,
            "newChatCount":0,"newChatCountInvalid":true,"lastChatLogId":{"low":1628336128,"high":609604157,"unsigned":false},"lastSeenLogId":{"low":1628336128,"high":609604157,"unsigned":false},"displayUserList":[],"metaMap":{},"pushAlert":true,"linkId":{"low":191597976,"high":0,"unsigned":false},"openToken":1632873740,"directChannel":false,"openLink":null}}
    */

    if (chat.Text == prefix + "모두멘션" && adminList.includes(id)) {
        chat.Channel.sendText("모든 유저를 멘션하기 시작합니다.");
        chat.Channel.sendText(...Array.from(chat.channel.userInfoMap).map(s => s[1].user).map(s => new node_kakao.ChatMention(s)));
    }

    if (chat.Text == prefix + "중지") {
        if (adminList.includes(id)) {
            chat.Channel.sendText("프로그램이 중지됩니다...\n≫KAKAOTALK LOCO V" + ver + "\n≫Edit by JIHOON");
            process.exit();
        }
        else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text == prefix + "가리기" && adminList.includes(id)) {
        var list = messages[roomId].reverse();
        var value = 0;
        var max = list.length;
        if(max.length != 0) {
            tt = setInterval(()=>{
                if(value>=max) {
                    clearInterval(tt);
                } else {
                    client.OpenLinkManager.hideChat(chat.channel, list[value]);
                    value++;
                }
            },110);
            messages[roomId] = [];
        } else {
            chat.Channel.sendText("기록된 메시지가 없습니다.");
        }
    }

    if (chat.Type == 26 && chat.Text == prefix + "부방" && adminList.includes(id)) {
        client.OpenLinkManager.setOpenMemberType(chat.channel, chat.attachmentList[0].SourceUserId, 4);
        chat.Channel.sendText("완료");
    }

    if (chat.Type == 26 && chat.Text == prefix + "봇") {
        if (adminList.includes(id)) {
            try {
                client.OpenLinkManager.setOpenMemberType(chat.channel, chat.attachmentList[0].SourceUserId, 8);
                chat.Channel.sendText("봇 작업 완료");
            } catch {
                chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "채금 ")) {
        if (adminList.includes(id)) {
            try {
                var v = getMention(chat);
                if (String(v)) {
                    if (!Hider[roomId].includes(String(v))) {
                        Hider[roomId].push(String(v));
                        chat.Channel.sendText("해당 유저의 모든 메시지를 가리기 시작합니다.");
                    } else {
                        chat.Channel.sendText("해당 유저는 이미 리스트에 등재되있습니다.");
                    }
                } else {
                    CaroSel(chat, [{text : ".채팅금지 @멘션 의 형태로 써주세요."}]);
                }
            } catch {
                chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "채금해제 ")) {
        if (adminList.includes(id)) {
            try {
                var v = getMention(chat);
                if(String(v)) {
                    var v1 = Hider[roomId].indexOf(String(v));
                    if(v1 > -1) {
                        Hider[roomId].splice(v1, 1);
                        chat.Channel.sendText("해당 유저를 리스트에서 삭제했습니다.");
                    } else {
                        chat.Channel.sendText("리스트에 없는 유저입니다.");
                    }
                } else {
                    CaroSel(chat, [{text : ".채금해제 @멘션 의 형태로 써주세요."}]);
                }
            } catch {
                chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "강퇴 ") && adminList.includes(id)) {
        try {
            var _Mention = getMention(chat);
            var v = getMention(chat);
            if(!_Mention) {
                chat.Channel.sendText("/ban @멘션 의 형태로 써주세요.");
                } else {
                    if(String(v)) {
                    client.OpenLinkManager.kickMember(chat.channel, v);
                    chat.Channel.sendText("강퇴완료. (" + v + ")");
                }
            }
        } catch {
            chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
        }
    }
 
    if (chat.Text == prefix + "일괄강퇴" && adminList.includes(id)) {
        try {
            chat.Channel.sendText("모든 유저를 강퇴시킵니다.");
            var list = chat.channel.dataStruct.displayMemberList.map(x=> x.userId);
            var value = 0;
            var max = list.length;
            var tt = setInterval(()=>{
                if(value>=max) {
                    clearInterval(tt);
                } else {
                    client.OpenLinkManager.kickMember(chat.channel, list[value]);
                    value++;
                }
            },110);
        } catch {
            chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
        }
    }

    if (chat.Text == prefix + "삭제" && chat.Type == 26 && adminList.includes(id)) {
        client.OpenLinkManager.setOpenMemberType(chat.channel, chat.attachmentList[0].SourceUserId, 2);
        chat.Channel.sendText("complete");
    }

    if (chat.Text == prefix + "읽은사람") {
        if (adminList.includes(id)) {
            if (chat.Type == 26) {
                try {
                    if(!readMessage[roomId]) {
                        chat.Channel.sendText("그룹채팅 또는 99명이 넘는 오픈채팅에서는 해당 기능을 사용하실 수 없습니다.");
                    } else {
                        var r = readMessage[roomId][chat.attachmentList[0].SourceLogId];
                        if(!r || r.length == 0) {
                            chat.Channel.sendText("기록된 읽은 사람이 없습니다.");
                        } else {
                            chat.Channel.sendText("읽은사람입니다.\n\n", "" + r.join("\n"));
                        }
                    }
                } catch {
                    chat.Channel.sendText("작업 과정에서 오류가 발생했습니다.");
                }
            } else {
                chat.Channel.sendText("메세지를 답장 형태로 적어주세요.");
            }
        } else {
            chat.Channel.sendText("당신은 해당 명령어를 수행할 권한이 없습니다!");
        }
    }

    if (chat.Text.startsWith(prefix + "도배 문자 ") && adminList.includes(id)) {
        var _message = chat.Text;
        _message = _message.replace(prefix + "도배 문자 ", "");
        chat.Channel.sendText(_message);
    }

    function sendLinkEmbed(chat, _text, _link) {
        client.chatManager.sendRaw(chat.channel,23,'Search',{
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
    })}

    function sendEmbed(chat, _text, _link, _image) {
        client.chatManager.sendRaw(chat.channel,23,'Search',{
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
    })}

    function sendWord(chat, _text) {
        client.chatManager.sendRaw(chat.channel,23,'Search',{
        "Q": _text
    })}

    if(chat.Text.startsWith("ev ") && adminList.includes(id)){
        chat.Channel.sendText(String(eval(chat.text.substr(3))))
    }
});

function getMention(chat) {
    var zr = chat.getMentionContentList();
    if(!zr[0]) {
        return null;
    }
    return zr[0].UserId;
}

client.on("message_read", function(channel, reader, logId){
    if(readMessage[channel.id] === undefined) readMessage[channel.id] = {}; //채널 긁어오기
    if(readMessage[channel.Id][logId] === undefined) readMessage[channel.Id][logId] = []; //메시지 별로 배열 선언하기
    if(!Detect[channel.id]) Detect[channel.id] = [];
    if(!record[channel.id]) record[channel.id] = [];
    var usinfo = channel.getUserInfo(reader); //userInfo
    if(!usinfo) return;
    if(!usinfo.memberStruct) return;
    if(!record[channel.id].includes(logId)) record[channel.id].push(logId);
    if(Object.keys(readMessage[channel.id]).length >= 50) {
        delete readMessage[channel.id][Object.keys(readMessage[channel.id])[0]];
    }
    try {
        for(var j in Detect[channel.id]) {
            if(Detect[channel.id][j] == String(usinfo.memberStruct.userId)) {
                channel.sendText(new node_kakao.ChatMention(usinfo), "님이 읽었습니다.");
                var _index = Detect[channel.id].indexOf(String(usinfo.memberStruct.userId))
                Detect[channel.id].splice(_index, 1);
            }
        }
    } catch (e) {}
    Object.keys(readMessage[channel.id]).map(e => {
        try {
            if(!readMessage[channel.id][e].includes(usinfo.memberStruct.nickname)) { //각 메시지에 읽음목록 추가
                readMessage[channel.Id][e].push(String(usinfo.memberStruct.nickname)); //위와같음
            }
        } catch (e) {
            console.log("readMessage 오류가 발생하였습니다.\n" + e.stack);
        }
    });
})


var info = new node_kakao.CustomInfo (
    "지훈",
    "Carousel",
    "plusfriend_bot",
    "https://naver.com",
    "1.4.5", 
    "1.4.5",
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
)

function CaroSel(chat, slide, userInfo, style) {
    if(!userInfo) {userInfo = {memberStruct : {nickname : "Bot", profileImageUrl : ""}}};
    style = style ? style : "";
    var content = new node_kakao.CustomCarouselContent (
        node_kakao.CustomType.FEED, slide.map(feed => {
            feed.buttons = feed.buttons || [];
            feed.images = feed.images || [];
            var buttonTypes = { "up-down": 1, "left-right": 0 };
            if(feed.buttonType == "left-right") feed.buttons = feed.buttons.slice(0, 2);
            else if(feed.buttonType == "up-down") feed.buttons = feed.buttons.slice(0, 5);
            var cont = new node_kakao.CustomFeedContent (
                new node_kakao.TextDescFragment(feed.text, feed.desc),
                buttonTypes[feed.buttonType],
                feed.buttons.map(s => {
                    return new node_kakao.ButtonFragment (
                        s.text,
                        "both",
                        new node_kakao.URLFragment(...new Array(4).fill(s.url))
                    );
                }),
                feed.images.map(s => {
                    return new node_kakao.ImageFragment(s.image,
                    s.width || -1, s.height || -1, s.cropStyle || 0, s.isLive || false)
                }),
                feed.images.length,
                undefined,
                true,
                undefined,
                new node_kakao.ProfileFragment (
                    new node_kakao.TextDescFragment(style + userInfo.memberStruct.nickname, ""),
                    undefined,
                    undefined,
                    new node_kakao.ImageFragment(userInfo.memberStruct.profileImageUrl, 200, 200)
                ),
                new node_kakao.SocialFragment()
            );
            return cont;
        })
    );
    var attachment = new node_kakao.CustomAttachment(info, content);
    var template = new node_kakao.AttachmentTemplate(attachment, "카카오링크");
    return chat.replyTemplate(template);
}
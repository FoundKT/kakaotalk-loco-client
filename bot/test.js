eval console.log('---------------------');
try {
    async function joinOpenRoom(openLink) {
        var roomList = [];
        Array.from(CLIENT.channelList.all()).map(e => roomList.push(e));
        var openRoomList = [];
        for (var i = 0; i < roomList.length; i++) {
            if (roomList[i].info.type == "OM") {
                openRoomList.push(roomList[i]);
            }
        }
        var openLinkIdList = [];
        openRoomList.map(e => openLinkIdList.push(e.info.linkId.low));
        var data = await CLIENT.channelList.open.getJoinInfo(openLink);
        if (!data.success) {
            channel.sendChat("해당 오픈채팅방의 정보를 불러올수 없습니다!");
        } else if (data.result.openLink.type !== $OpenLinkType.CHANNEL) {
            channel.sendChat("해당 채팅방은 그룹 오픈채팅방이 아닙니다!");
        } else if (openLinkIdList.includes(data.result.openLink.linkId.low)) {
            channel.sendChat("이미 접속해있는 채팅방입니다!");
        } else {
            const a = await CLIENT.channelList.open.joinChannel({ linkId: data.result.openLink.linkId }, { nickname: '지훈#6676' });
            if (!a.success) {
                channel.sendChat("채팅방에 입장하던 중 오류가 발생했습니다!");
            } else {
                console.log("LENGTH: " + roomList.length + "\nLink leng: " + openLinkIdList.length + "\nLink List: " + openLinkIdList + "\nLink Type: " + typeof(openLinkIdList[0]) + "\nId Type: " + typeof(data.result.openLink.linkId) + "\nId Obj: " + JSON.stringify(data.result.openLink.linkId));
                // var secondRoomList = [];
                // Array.from(CLIENT.channelList.all()).map(e => secondRoomList.push(e));
                // var differentChannel = firstRoomList.filter(x => !secondRoomList.includes(x));
                // channel.sendChat("차이값 " + differentChannel.length);
                // console.log("LENGTH: " + roomList.length);
                // console.log("NAME: " + roomList[channelNumber].getDisplayName() + "\nTYPE: " + roomList[channelNumber].info.type + "\n" + JSON.stringify(roomList[channelNumber]._channel));
            }
        }
    }
    joinOpenRoom("https://open.kakao.com/o/gjkSxMFd");
} catch (e) {
    console.log(e)
}
console.log('---------------------');
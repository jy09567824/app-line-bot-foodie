// demo.js 測試資料是否有接收成功，配合 demobase.json 資料庫
const fs = require('fs')

// event handler
function handleEvent(event) {

  let rawdata = fs.readFileSync('./demodata.json');
  let restaurant = JSON.parse(rawdata);
  console.log(restaurant);

  if (event.type !== "message" || event.message.type !== "text") {
    console.log("False", msg.events);
    // 用戶傳送不是訊息或不是文字 -> 不執行
    return Promise.resolve(null);
  }

  if (event.message.text == "japanese") {
    // 查訊 data 資料中餐廳類別為 Japanese 的餐廳，並隨機產生 3 筆
    console.log(restaurant)
  }

  // create a echoing text message
  const echo = { type: "text", text: event.message.text };

  // use reply API; 回覆 echo 中的訊息
  // return client.replyMessage(event.replyToken, echo);
  console.log("True", echo)
  return echo
}

const msg = {
  events: {
    type: "message",
    message: {
      type: "text",
      id: "14353798921116",
      text: "japanese",
    },
  },
};

handleEvent(msg.events);

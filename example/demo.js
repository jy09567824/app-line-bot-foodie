// demo.js 測試資料是否有接收成功，配合 demobase.json 資料庫
const fs = require('fs')

const rawdata = fs.readFileSync('./demodata.json');
const restaurants = JSON.parse(rawdata);

// 查詢 data 資料中餐廳類別為 "..." 的餐廳，並隨機產生 3 筆
function getCategoryArray(category) {
  try {
    const filterData = restaurants.filter(restaurant => restaurant.category == category)
    console.log(getRandomArrayElements(filterData, 3))    
  } catch (error) {
    console.log(error)
  }
}

// 從陣列中隨機取出 n 筆元素
function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// event handler
function handleEvent(event) {
  //  從 Json 中取得 Restaurant Data
  if (event.type !== "message" || event.message.type !== "text") {
    console.log("False", msg.events);
    // 用戶傳送不是訊息或不是文字，就不執行
    return Promise.resolve(null);
  }

  if (event.message.text == "japanese") {
    getCategoryArray("japanese")
  }

  // create a echoing text message
  // const echo = { type: "text", text: event.message.text };
  // return client.replyMessage(event.replyToken, echo);
  // return echo
}

// 測試用：使用者留言，text: Japanese
const msg = {
  events: {
    type: "message",
    message: {
      type: "text",
      id: "14353798921116",
      text: "Japanese",
    },
  },
};

handleEvent(msg.events);

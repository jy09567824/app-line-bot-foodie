const line = require('@line/bot-sdk');
const express = require('express');
const fs = require('fs');

const rawdata = fs.readFileSync('./database.json')
const restaurants = JSON.parse(rawdata)

// Data 
let replyMsg = {}

const restaurantTypeMsgCH = {
  type: "flex",
  altText: "請選擇您要的餐廳種類：中式餐廳、日式餐廳、西式⋯⋯",
  contents: {
    type: "bubble",
    hero: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "請點選您要的餐廳種類",
          style: "normal",
          decoration: "none",
          align: "center",
          weight: "bold",
          size: "lg",
          margin: "xxl",
        },
      ],
      backgroundColor: "#f7f4ef"
    },
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_001.png",
              action: {
                type: "message",
                label: "action",
                text: "中式餐廳",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_002.png",
              action: {
                type: "message",
                label: "action",
                text: "日式餐廳",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_003.png",
              action: {
                type: "message",
                label: "action",
                text: "西式餐廳",
              },
            },
          ],
        },
        {
          type: "box",
          layout: "horizontal",
          contents: [
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_004.png",
              action: {
                type: "message",
                label: "action",
                text: "咖啡廳",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_005.png",
              action: {
                type: "message",
                label: "action",
                text: "美式餐廳",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_ch_006.png",
              action: {
                type: "message",
                label: "action",
                text: "異國風味",
              },
            },
          ],
        },
      ],
      paddingTop: "none",
      paddingBottom: "none",
      backgroundColor: "#f7f4ef"
    },
  },
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
// 查詢 data 資料中餐廳類別為 "..." 的餐廳，並隨機產生 3 筆 Reply 格式訊息
function getCategoryArray(category) {
  try {
    const carouselMsg = {
      type: "flex",
      altText: "carousel flex message",
      contents: {
        type: "carousel",
        contents: []
      }
    }
    const filterData = restaurants.filter(restaurant => restaurant.category == category)
    let carouselArray = getRandomArrayElements(filterData, 3);
    replyMsg = carouselMsg;
    carouselArray.forEach(element => {
      replyMsg.contents.contents.push(element.message)   
    }); 
  } catch (error) {
    console.log(error)
  }
}

// create LINE SDK config from env variables
const config = {
  channelAccessToken: 'dzLSFCXyo20IYimW5b88EwlgGK58C5snmxujSn1otANXwU4NmVMahnGRbsy7qXix+7wM2qXHxei7VDzUuiJ0c1MmKMkxVCesV0u8F6laksYQM47D1kW9kxkq65zt5aSW/WKTfjE/mIGL8izf0kCnGgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '9061d7775daad56e55306b8b04595772',
};

// create LINE SDK client
const client = new line.Client(config);
// base URL for webhook server
const baseURL = process.env.BASE_URL;
// create Express app
const app = express();

// serve images files
app.use('/images', express.static('images'));

// register a webhook handler with middleware
app.post('/linewebhook', line.middleware(config), (req, res) => {
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

// event handler
function handleEvent(event) {
  if (event.type !== 'message' || event.message.type !== 'text') {
    // ignore non-text-message event; 用戶傳送不是訊息或不是文字 -> 不執行
    return Promise.resolve(null);
  } 

  switch (event.message.text) {
    case "餐廳":
      client.replyMessage(event.replyToken, restaurantTypeMsgCH);
      break;
    case "Restaurant":
    case "restaurant":
      client.replyMessage(event.replyToken, { type: 'text', text: `It's restaurant` });
      break;
    case "轉盤":
      client.replyMessage(event.replyToken, { type: 'text', text: '這是轉盤' });
      break;
    case "中式餐廳":
    case "中餐":
      getCategoryArray("japanese")
      client.replyMessage(event.replyToken, replyMsg)
      break;
  }

  // if (event.message.text == "餐廳") {
  //   return client.replyMessage(event.replyToken, restaurantTypeMsg);
  // }
  // if (event.message.text == "轉盤") {
  //   return client.replyMessage(event.replyToken, { type: 'text', text: '這是轉盤' });
  // }
  // if (event.message.text == "Restaurant") {
  //   return client.replyMessage(event.replyToken, { type: 'text', text: `It's restaurant` });
  // }
  // if (event.message.text == "中式餐廳") {
  //   getCategoryArray("japanese")
  //   return client.replyMessage(event.replyToken, replyMsg)
  // }
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  if (baseURL) {
    console.log(`listening on ${baseURL}:${port}/callback`);
  } else {
    console.log("It seems that BASE_URL is not set. Connecting to ngrok...")
  }
});


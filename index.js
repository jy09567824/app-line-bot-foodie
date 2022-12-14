const line = require('@line/bot-sdk');
const express = require('express');
const fs = require('fs');

// Data 
const rawdataCH = fs.readFileSync('./database.json')
const restaurantsCH = JSON.parse(rawdataCH)
const rawdataEN = fs.readFileSync('./database_en.json')
const restaurantsEN = JSON.parse(rawdataEN)

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
const restaurantTypeMsgEN = {
  type: "flex",
  altText: "Choose the type you into: Chinese Food, Japanese Food,⋯",
  contents: {
    type: "bubble",
    hero: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "Choose The Type You Into",
          style: "normal",
          decoration: "none",
          align: "center",
          weight: "bold",
          size: "md",
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
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_001.png",
              action: {
                type: "message",
                label: "action",
                text: "Chinese",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_002.png",
              action: {
                type: "message",
                label: "action",
                text: "Japanese",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_003.png",
              action: {
                type: "message",
                label: "action",
                text: "Western",
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
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_004.png",
              action: {
                type: "message",
                label: "action",
                text: "Coffee",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_005.png",
              action: {
                type: "message",
                label: "action",
                text: "American",
              },
            },
            {
              type: "image",
              url: "https://app-line-bot-foodie.herokuapp.com/images/list_en_006.png",
              action: {
                type: "message",
                label: "action",
                text: "Exotic",
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
const beforeCarouselMsgCH = { type: 'text', text: `以下為您推薦三間餐廳，祝您享用愉快、有個美好的一天！
(提示：點擊圖片查看店家資訊)` }
const beforeCarouselMsgEN = { type: 'text', text: `食物救星分享了三則餐廳資訊，等下就從這幾間裡挑想吃的吧！` }
const wheelMsg = { type: 'text', text: '等下吃這間！' }

let replyMsg = {}

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
function getCategoryArray(category, database) {
  try {
    const carouselMsg = {
      type: "flex",
      altText: "Here are the 3 options for you. Click in the picture card to view the information...",
      contents: {
        type: "carousel",
        contents: []
      }
    }
    const filterData = database.filter(restaurant => restaurant.category == category)
    let carouselArray = getRandomArrayElements(filterData, 3);
    replyMsg = carouselMsg;
    carouselArray.forEach(element => {
      replyMsg.contents.contents.push(element.message)   
    }); 
  } catch (error) {
    console.log(error)
  }
}
// 轉盤功能，隨機推薦 1 筆餐廳
function getRandomArray() {
  try {
    const carouselMsg = {
      type: "flex",
      altText: "食物救星分享了一則餐廳資訊，等下就吃這間吧！",
      contents: {
        type: "carousel",
        contents: []
      }
    }
    let carouselArray = getRandomArrayElements(restaurantsCH, 1);
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
    case "轉盤":
      getRandomArray();
      client.replyMessage(event.replyToken, [wheelMsg, replyMsg]);
      break;
    case "餐廳":
      client.replyMessage(event.replyToken, restaurantTypeMsgCH);
      break;
    case "中式餐廳":
    case "中餐":
      getCategoryArray("chinese", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "日式餐廳":
    case "日本料理":
    case "日式":
      getCategoryArray("japanese", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "西式餐廳":
    case "西式":
    case "西餐":
      getCategoryArray("western", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "咖啡廳":
    case "咖啡":
    case "咖啡店":
      getCategoryArray("cafe", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "美式餐廳":
    case "美式":
      getCategoryArray("american", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "異國風味":
    case "異國料理":
    case "其他":
      getCategoryArray("exotic", restaurantsCH);
      client.replyMessage(event.replyToken, [beforeCarouselMsgCH, replyMsg]);
      break;
    case "Restaurant":
    case "restaurant":
      client.replyMessage(event.replyToken, restaurantTypeMsgEN);
      break;
    case "Chinese":
    case "chinese":
      getCategoryArray("chinese", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
    case "Japanese":
    case "japanese":
      getCategoryArray("japanese", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
    case "Western":
    case "western":
      getCategoryArray("western", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
    case "Cafe":
    case "cafe":
    case "Coffee":
    case "coffee":
      getCategoryArray("cafe", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
    case "American":
    case "american":
      getCategoryArray("american", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
    case "Exotic":
    case "exotic":
      getCategoryArray("exotic", restaurantsEN);
      client.replyMessage(event.replyToken, [beforeCarouselMsgEN, replyMsg]);
      break;
  }
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


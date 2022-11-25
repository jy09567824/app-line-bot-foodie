// demo.js 測試資料是否有接收成功，配合 demobase.json 資料庫
const fs = require('fs')

const rawdata = fs.readFileSync('./demodata.json')
const restaurants = JSON.parse(rawdata)

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
    console.log("False", msg.events)
    // 用戶傳送不是訊息或不是文字，就不執行
    return Promise.resolve(null)
  }

  if (event.message.text = "餐應") {
    const listMsgCH = {
      "type": "bubble",
      "hero": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "請點選您要的餐廳種類",
            "style": "normal",
            "decoration": "none",
            "align": "center",
            "weight": "bold",
            "size": "lg",
            "margin": "xxl"
          }
        ]
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "中式餐廳"
                }
              },
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "日式餐廳"
                }
              },
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "西式餐廳"
                }
              }
            ]
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "咖啡廳"
                }
              },
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "美式餐廳"
                }
              },
              {
                "type": "image",
                "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                "action": {
                  "type": "message",
                  "label": "action",
                  "text": "異國風味"
                }
              }
            ]
          }
        ],
        "paddingTop": "none",
        "paddingBottom": "none"
      }
    }
    return client.replyMessage(event.replyToken, listMsgCH);
  }

  if (event.message.text == "japanese") {
    getCategoryArray("japanese")
  }

  // Echo 
  // const echo = { type: "text", text: event.message.text };
  // return client.replyMessage(event.replyToken, echo);
}

// 測試用：使用者留言，text: Japanese
const msg = {
  events: {
    type: "message",
    message: {
      type: "text",
      id: "14353798921116",
      text: "餐廳",
    },
  },
}

handleEvent(msg.events)
// demo.js 測試資料是否有接收成功，配合 demobase.json 資料庫
const fs = require('fs')

const rawdata = fs.readFileSync('./demodata.json')
const restaurants = JSON.parse(rawdata)

let carouselMsg = {
  type: "flex",
  altText: "carousel flex message",
  contents: {
    type: "carousel",
    contents: []
  }
}

// let carousalMsg = {
//   "type": "carousel",
//   "contents": [
//     {
//       "type": "bubble",
//       "size": "micro",
//       "hero": {
//         "type": "image",
//         "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg",
//         "size": "full",
//         "aspectMode": "cover",
//         "aspectRatio": "320:213"
//       },
//       "body": {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Brown Cafe",
//             "weight": "bold",
//             "size": "sm",
//             "wrap": true
//           },
//           {
//             "type": "box",
//             "layout": "baseline",
//             "contents": [
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
//               },
//               {
//                 "type": "text",
//                 "text": "4.0",
//                 "size": "xs",
//                 "color": "#8c8c8c",
//                 "margin": "md",
//                 "flex": 0
//               }
//             ]
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "baseline",
//                 "spacing": "sm",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "東京旅行",
//                     "wrap": true,
//                     "color": "#8c8c8c",
//                     "size": "xs",
//                     "flex": 5
//                   }
//                 ]
//               }
//             ]
//           }
//         ],
//         "spacing": "sm",
//         "paddingAll": "13px"
//       }
//     },
//     {
//       "type": "bubble",
//       "size": "micro",
//       "hero": {
//         "type": "image",
//         "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg",
//         "size": "full",
//         "aspectMode": "cover",
//         "aspectRatio": "320:213"
//       },
//       "body": {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Brow&Cony's Restaurant",
//             "weight": "bold",
//             "size": "sm",
//             "wrap": true
//           },
//           {
//             "type": "box",
//             "layout": "baseline",
//             "contents": [
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
//               },
//               {
//                 "type": "text",
//                 "text": "4.0",
//                 "size": "sm",
//                 "color": "#8c8c8c",
//                 "margin": "md",
//                 "flex": 0
//               }
//             ]
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "baseline",
//                 "spacing": "sm",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "東京旅行",
//                     "wrap": true,
//                     "color": "#8c8c8c",
//                     "size": "xs",
//                     "flex": 5
//                   }
//                 ]
//               }
//             ]
//           }
//         ],
//         "spacing": "sm",
//         "paddingAll": "13px"
//       }
//     },
//     {
//       "type": "bubble",
//       "size": "micro",
//       "hero": {
//         "type": "image",
//         "url": "https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg",
//         "size": "full",
//         "aspectMode": "cover",
//         "aspectRatio": "320:213"
//       },
//       "body": {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Tata",
//             "weight": "bold",
//             "size": "sm"
//           },
//           {
//             "type": "box",
//             "layout": "baseline",
//             "contents": [
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
//               },
//               {
//                 "type": "icon",
//                 "size": "xs",
//                 "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
//               },
//               {
//                 "type": "text",
//                 "text": "4.0",
//                 "size": "sm",
//                 "color": "#8c8c8c",
//                 "margin": "md",
//                 "flex": 0
//               }
//             ]
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "baseline",
//                 "spacing": "sm",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "東京旅行",
//                     "wrap": true,
//                     "color": "#8c8c8c",
//                     "size": "xs",
//                     "flex": 5
//                   }
//                 ]
//               }
//             ]
//           }
//         ],
//         "spacing": "sm",
//         "paddingAll": "13px"
//       }
//     }
//   ]
// }

// replyFormat.contents = carousalMsg
// console.log(replyFormat)


// 查詢 data 資料中餐廳類別為 "..." 的餐廳，並隨機產生 3 筆 LINE 訊息格式

function getCategoryArray(category) {
  try {
    const filterData = restaurants.filter(restaurant => restaurant.category == category)
    let replyFormat = ''
    replyFormat = carouselMsg
    let carouselArray = getRandomArrayElements(filterData, 3)
    carouselArray.forEach(element => {
      replyFormat.contents.contents.push(element.message)   
    }); 
    console.log(replyFormat)
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

  // if (event.message.text = "餐應") {
  //   const listMsgCH = {
  //     "type": "bubble",
  //     "hero": {
  //       "type": "box",
  //       "layout": "vertical",
  //       "contents": [
  //         {
  //           "type": "text",
  //           "text": "請點選您要的餐廳種類",
  //           "style": "normal",
  //           "decoration": "none",
  //           "align": "center",
  //           "weight": "bold",
  //           "size": "lg",
  //           "margin": "xxl"
  //         }
  //       ]
  //     },
  //     "body": {
  //       "type": "box",
  //       "layout": "vertical",
  //       "contents": [
  //         {
  //           "type": "box",
  //           "layout": "horizontal",
  //           "contents": [
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "中式餐廳"
  //               }
  //             },
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "日式餐廳"
  //               }
  //             },
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "西式餐廳"
  //               }
  //             }
  //           ]
  //         },
  //         {
  //           "type": "box",
  //           "layout": "horizontal",
  //           "contents": [
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "咖啡廳"
  //               }
  //             },
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "美式餐廳"
  //               }
  //             },
  //             {
  //               "type": "image",
  //               "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
  //               "action": {
  //                 "type": "message",
  //                 "label": "action",
  //                 "text": "異國風味"
  //               }
  //             }
  //           ]
  //         }
  //       ],
  //       "paddingTop": "none",
  //       "paddingBottom": "none"
  //     }
  //   }
  //   return client.replyMessage(event.replyToken, listMsgCH);
  // }

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
      text: "japanese",
    },
  },
}

handleEvent(msg.events)
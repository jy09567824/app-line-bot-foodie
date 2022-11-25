const line = require('@line/bot-sdk');
const express = require('express');

// create LINE SDK config from env variables
const config = {
  channelAccessToken: 'dzLSFCXyo20IYimW5b88EwlgGK58C5snmxujSn1otANXwU4NmVMahnGRbsy7qXix+7wM2qXHxei7VDzUuiJ0c1MmKMkxVCesV0u8F6laksYQM47D1kW9kxkq65zt5aSW/WKTfjE/mIGL8izf0kCnGgdB04t89/1O/w1cDnyilFU=',
  channelSecret: '9061d7775daad56e55306b8b04595772',
};

// create LINE SDK client
const client = new line.Client(config);

// create Express app
const app = express();

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

  const echo = { type: 'text', text: event.message.text };
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

  if (event.message.text == "餐廳") {
    return client.replyMessage(event.replyToken, listMsgCH);
  }

  if (event.message.text == "轉盤") {
    return client.replyMessage(event.replyToken, echo);
  }

  if (event.message.text == "list") {
    return client.replyMessage(event.replyToken, echo);
  }

  // return client.replyMessage(event.replyToken, echo);

}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
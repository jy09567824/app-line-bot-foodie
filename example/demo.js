// event handler
function handleEvent(event) {
  if (event.type !== "message" || event.message.type !== "text") {
    console.log("False", msg.events);
    // ignore non-text-message event; 用戶傳送不是訊息或不是文字 -> 不執行
    return Promise.resolve(null);
  }

  if (event.message.text == "japanese") {
    console.log('日本料理')
    
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

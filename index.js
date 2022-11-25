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
// about Express itself: https://expressjs.com/
const app = express();

// register a webhook handler with middleware
// about the middleware, please refer to doc
app.post('/webhook', line.middleware(config), (req, res) => {
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
    // ignore non-text-message event
    return Promise.resolve(null);
  }

  // create a echoing text message
  const echo = { type: 'text', text: event.message.text };

  // use reply API
  return client.replyMessage(event.replyToken, echo);
}

// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
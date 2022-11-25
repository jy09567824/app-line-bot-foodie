export const bubbleCH = () => {
  return {
    type: "flex",
    altText: "this is a flex message",
    content: {
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
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                action: {
                  type: "message",
                  label: "action",
                  text: "中式餐廳",
                },
              },
              {
                type: "image",
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                action: {
                  type: "message",
                  label: "action",
                  text: "日式餐廳",
                },
              },
              {
                type: "image",
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
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
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                action: {
                  type: "message",
                  label: "action",
                  text: "咖啡廳",
                },
              },
              {
                type: "image",
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
                action: {
                  type: "message",
                  label: "action",
                  text: "美式餐廳",
                },
              },
              {
                type: "image",
                url: "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png",
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
      },
    },
  };
};

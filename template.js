export const bubbleCH = () => {
  return {
    type: "flex",
    altText: "this is a flex message",
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
      },
    },
  };
};

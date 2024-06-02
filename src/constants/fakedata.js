// import MoneySource from "../components/MoneySource";

const FDATA = {
    currentBalance: -20000,
    incomeValue: 350000,
    expenseValue: 4500000,
    tagName: "Ăn uống",
    tagIconName: "cutlery",
    tagColor: "#9984CF",
    mainHistory: [
        {
          "sourceName": "Tiền mặt",
          "sourceIcon": "money",
          "cateName": "Ăn uống",
          "cateIcon": "cutlery",
          "date": "2024-06-01",
          "value": 25000,
          "description": "Cơm ktx",
          "type": "Chi tiêu"
        },
        {
          "sourceName": "Thẻ tín dụng",
          "sourceIcon": "money",
          "cateName": "Giải trí",
          "cateIcon": "cutlery",
          "date": "2024-06-01",
          "value": 120000,
          "description": "Xem phim",
          "type": "Chi tiêu"
        },
        {
          "sourceName": "Tiền gửi ngân hàng",
          "sourceIcon": "money",
          "cateName": "Tiết kiệm",
          "cateIcon": "cutlery",
          "date": "2024-05-28",
          "value": 2000000,
          "description": "Tiết kiệm hàng tháng",
          "type": "Tiết kiệm"
        },
        {
          "sourceName": "Tiền mặt",
          "sourceIcon": "money",
          "cateName": "Mua sắm",
          "cateIcon": "cutlery",
          "date": "2024-05-29",
          "value": 450000,
          "description": "Mua quần áo",
          "type": "Chi tiêu"
        },
        {
          "sourceName": "Thẻ tín dụng",
          "sourceIcon": "money",
          "cateName": "Giáo dục",
          "cateIcon": "cutlery",
          "date": "2024-05-30",
          "value": 1500000,
          "description": "Đóng học phí",
          "type": "Chi tiêu"
        },
        {
          "sourceName": "Lương",
          "sourceIcon": "money",
          "cateName": "Thu nhập",
          "cateIcon": "cutlery",
          "date": "2024-05-15",
          "value": 5000000,
          "description": "Lương tháng 5",
          "type": "Thu nhập"
        },
        {
          "sourceName": "Quà tặng",
          "sourceIcon": "money",
          "cateName": "Thu nhập",
          "cateIcon": "cutlery",
          "date": "2024-05-20",
          "value": 1000000,
          "description": "Quà sinh nhật",
          "type": "Thu nhập"
        }
    ],
    moneySources: [
        {
          "iconType": "money",
          "moneySourceName": "MB Bank",
          "balance": 1500500
        },
        {
          "iconType": "money",
          "moneySourceName": "Ống heo",
          "balance": 3000000
        },
        {
          "iconType": "money",
          "moneySourceName": "Tiền mặt",
          "balance": 250750
        },
        {
          "iconType": "money",
          "moneySourceName": "Thẻ tín dụng",
          "balance": 500250
        },
        {
          "iconType": "money",
          "moneySourceName": "Sổ tiết kiệm",
          "balance": 10000000
        }
    ],
    savings: [
        {
          "iconType": "money",
          "moneySourceName": "MB Bank",
          "balance": 1500500
        },
        {
          "iconType": "money",
          "moneySourceName": "Ống heo",
          "balance": 3000000
        },
        {
          "iconType": "money",
          "moneySourceName": "Tiền mặt",
          "balance": 250750
        },
        {
          "iconType": "money",
          "moneySourceName": "Thẻ tín dụng",
          "balance": 500250
        },
        {
          "iconType": "money",
          "moneySourceName": "Sổ tiết kiệm",
          "balance": 10000000
        }
    ],
    debts: [
        {
          "iconType": "money",
          "moneySourceName": "MB Bank",
          "balance": 1500500
        },
        {
          "iconType": "money",
          "moneySourceName": "Ống heo",
          "balance": 3000000
        },
        {
          "iconType": "money",
          "moneySourceName": "Tiền mặt",
          "balance": 250750
        },
        {
          "iconType": "money",
          "moneySourceName": "Thẻ tín dụng",
          "balance": 500250
        },
        {
          "iconType": "money",
          "moneySourceName": "Sổ tiết kiệm",
          "balance": 10000000
        }
    ],
    iconList: [
      {"iconName": "glass"},
      {"iconName": "music"},
      {"iconName": "search"},
      {"iconName": "envelope-o"},
      {"iconName": "heart"},
      {"iconName": "star"},
      {"iconName": "user"},
      {"iconName": "film"},
      {"iconName": "th-large"},
      {"iconName": "th"},
      {"iconName": "check"},
      {"iconName": "times"},
      {"iconName": "search-plus"},
      {"iconName": "search-minus"},
      {"iconName": "cog"},
      {"iconName": "home"},
      {"iconName": "file-o"},
      {"iconName": "lock"},
      {"iconName": "flag"},
      {"iconName": "camera"}
  ],
  colorList: [
    {"color": "#D8BFD8"},
    {"color": "#DDA0DD"},
    {"color": "#EE82EE"},
    {"color": "#DA70D6"},
    {"color": "#BA55D3"},
    {"color": "#9370DB"},
    {"color": "#9932CC"},
    {"color": "#9400D3"},
    {"color": "#8A2BE2"},
    {"color": "#800080"}
  ],
  tagList: [
    {
      "id": 1,
      "tagName": "Salary",
      "tagIconName": "money",
      "tagColor": "#7E57C2"
    },
    {
      "id": 2,
      "tagName": "Freelance",
      "tagIconName": "briefcase",
      "tagColor": "#D1C4E9"
    },
    {
      "id": 3,
      "tagName": "Investments",
      "tagIconName": "line-chart",
      "tagColor": "#B39DDB"
    },
    {
      "id": 4,
      "tagName": "Gifts",
      "tagIconName": "gift",
      "tagColor": "#9575CD"
    },
    {
      "id": 5,
      "tagName": "Savings",
      "tagIconName": "gift",
      "tagColor": "#7E57C2"
    },
    {
      "id": 6,
      "tagName": "Rental Income",
      "tagIconName": "home",
      "tagColor": "#673AB7"
    }
  ],
  categoryList: [
    {
        "id": 1,
        "tagIconName": "star",
        "tagName": "Thức ăn",
        "tagColor": "#800080"  // Purple color
    },
    {
        "id": 2,
        "tagIconName": "heart",
        "tagName": "Mua sắm",
        "tagColor": "#9370DB"  // Medium Purple color
    },
    {
        "id": 3,
        "tagIconName": "thumbs-up",
        "tagName": "Giải trí",
        "tagColor": "#8A2BE2"  // Blue Violet color
    },
    {
        "id": 4,
        "tagIconName": "car",
        "tagName": "Giao thông",
        "tagColor": "#9400D3"  // Dark Violet color
    },
    {
        "id": 5,
        "tagIconName": "home",
        "tagName": "Tiện ích",
        "tagColor": "#D8BFD8"  // Thistle color
    }
  ]
};

export {FDATA}
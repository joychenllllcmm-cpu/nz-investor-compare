// data.js
// 说明：
// - items：用于展示的结构化条目
// - rawText：

window.NZ_INVESTOR_DATA = {
  sources: {
    bizNews: "https://www.immigration.govt.nz/about-us/news-centre/business-investor-visa-offers-new-immigration-options-for-investors/",
    aip: "https://www.immigration.govt.nz/visas/active-investor-plus-visa/",
    nztE: "https://www.nzte.govt.nz/page/investor-migrants"
  },

  pathways: [
    {
      id: "biv-1m",
      group: "biv",
      name: "Business Investor · 1,000,000",
      subtitle: "3-year work-to-residence pathway · Visa valid up to 4 years",
      kpi: [
        {k:"最低投资额", v:"NZD $1,000,000", s:"existing business"},
        {k:"路径性质", v:"Work → Resident", s:"3-year pathway"},
        {k:"年龄门槛", v:"55岁及以下", s:"INZ 公告"},
        {k:"英语要求", v:"IELTS 5.0 或同等", s:"INZ 公告"},
        {k:"申请费用", v:"NZD $12,380", s:"application fee + levy"}
      ],
      links: [
        {label:"INZ 公告", url:"https://www.immigration.govt.nz/about-us/news-centre/business-investor-visa-offers-new-immigration-options-for-investors/"},
        {label:"NZTE", url:"https://www.nzte.govt.nz/page/investor-migrants"}
      ],
      modules: {
        eligibility: [
          {t:"最低投资门槛：NZD $1,000,000，投资于既有企业（existing business）。", src:"bizNews"},
          {t:"申请人年龄：55岁及以下。", src:"bizNews"},
          {t:"英语要求：IELTS 5.0 或同等水平。", src:"bizNews"},
          {t:"申请人须满足健康与品格要求。", src:"bizNews"},
          {t:"申请人须满足商业经验要求。", src:"bizNews"},
          {t:"申请人须具备至少 NZD $500,000 的生活支持资金（含家庭）。", src:"bizNews"},
          {t:"企业要求：满足财务门槛并雇佣至少 5 名全职等效员工。", src:"bizNews"},
          {t:"投资形式：允许全资购买；允许至少 25% 股权收购并满足最低投资额。", src:"bizNews"}
        ],
        documents: [
          {t:"资金能力与投资门槛证明材料（NZD $1,000,000）。", src:"bizNews"},
          {t:"生活支持资金证明材料（NZD $500,000）。", src:"bizNews"},
          {t:"英语能力证明材料（IELTS 5.0 或同等）。", src:"bizNews"},
          {t:"健康材料（Health）。", src:"bizNews"},
          {t:"品格材料（Character）。", src:"bizNews"},
          {t:"商业经验证明材料（Business experience requirements）。", src:"bizNews"},
          {t:"企业尽职调查材料（财务与法律尽调）。", src:"bizNews"}
        ],
        funds: [
          {t:"投资额：NZD $1,000,000（existing business）。", src:"bizNews"},
          {t:"生活支持资金：NZD $500,000。", src:"bizNews"},
          {t:"签证申请费用：NZD $12,380。", src:"bizNews"}
        ],
        timeline: [
          {t:"企业筛选与尽调", d:"确定既有企业并完成财务与法律尽调"},
          {t:"递交申请", d:"提交 Business Investor Work Visa 申请并提供证据"},
          {t:"落地运营", d:"在新西兰实际运营企业，完成 3-year pathway"},
          {t:"转居留", d:"满足条件后递交 Resident Visa"}
        ]
      },
      rawText: {
        bizNews: "",
        nztE: ""
      }
    },

    {
      id: "biv-2m",
      group: "biv",
      name: "Business Investor · 2,000,000",
      subtitle: "12-month fast-track pathway · Work → Resident",
      kpi: [
        {k:"最低投资额", v:"NZD $2,000,000", s:"existing business"},
        {k:"路径性质", v:"Work → Resident", s:"12-month fast-track"},
        {k:"年龄门槛", v:"55岁及以下", s:"INZ 公告"},
        {k:"英语要求", v:"IELTS 5.0 或同等", s:"INZ 公告"},
        {k:"申请费用", v:"NZD $12,380", s:"application fee + levy"}
      ],
      links: [
        {label:"INZ 公告", url:"https://www.immigration.govt.nz/about-us/news-centre/business-investor-visa-offers-new-immigration-options-for-investors/"},
        {label:"NZTE", url:"https://www.nzte.govt.nz/page/investor-migrants"}
      ],
      modules: {
        eligibility: [
          {t:"最低投资门槛：NZD $2,000,000，投资于既有企业（existing business）。", src:"bizNews"},
          {t:"申请人年龄：55岁及以下。", src:"bizNews"},
          {t:"英语要求：IELTS 5.0 或同等水平。", src:"bizNews"},
          {t:"申请人须满足健康与品格要求。", src:"bizNews"},
          {t:"申请人须满足商业经验要求。", src:"bizNews"},
          {t:"申请人须具备至少 NZD $500,000 的生活支持资金（含家庭）。", src:"bizNews"},
          {t:"企业要求：满足财务门槛并雇佣至少 5 名全职等效员工。", src:"bizNews"},
          {t:"投资形式：允许全资购买；允许至少 25% 股权收购并满足最低投资额。", src:"bizNews"}
        ],
        documents: [
          {t:"资金能力与投资门槛证明材料（NZD $2,000,000）。", src:"bizNews"},
          {t:"生活支持资金证明材料（NZD $500,000）。", src:"bizNews"},
          {t:"英语能力证明材料（IELTS 5.0 或同等）。", src:"bizNews"},
          {t:"健康材料（Health）。", src:"bizNews"},
          {t:"品格材料（Character）。", src:"bizNews"},
          {t:"商业经验证明材料（Business experience requirements）。", src:"bizNews"},
          {t:"企业尽职调查材料（财务与法律尽调）。", src:"bizNews"}
        ],
        funds: [
          {t:"投资额：NZD $2,000,000（existing business）。", src:"bizNews"},
          {t:"生活支持资金：NZD $500,000。", src:"bizNews"},
          {t:"签证申请费用：NZD $12,380。", src:"bizNews"}
        ],
        timeline: [
          {t:"企业筛选与尽调", d:"确定既有企业并完成财务与法律尽调"},
          {t:"递交申请", d:"提交 Business Investor Work Visa 申请并提供证据"},
          {t:"落地运营", d:"在新西兰实际运营企业并进入 fast-track 评估窗口"},
          {t:"转居留", d:"满足条件后递交 Resident Visa"}
        ]
      },
      rawText: {
        bizNews: "",
        nztE: ""
      }
    },

    {
      id: "aip-5m",
      group: "aip",
      name: "AIP Growth · 5,000,000",
      subtitle: "Investment period 36 months · Time in NZ 21 days",
      kpi: [
        {k:"最低投资额", v:"NZD $5,000,000", s:"Growth category"},
        {k:"投资期", v:"36 months", s:"AIP 页面"},
        {k:"到境要求", v:"21 days", s:"AIP 页面"},
        {k:"关键期限", v:"AIP 原则批准后 6 months", s:"完成投资"},
        {k:"申请费用", v:"From NZD $27,470", s:"AIP 页面"}
      ],
      links: [
        {label:"AIP 页面", url:"https://www.immigration.govt.nz/visas/active-investor-plus-visa/"},
        {label:"NZTE", url:"https://www.nzte.govt.nz/page/investor-migrants"}
      ],
      modules: {
        eligibility: [
          {t:"类别：Growth category。", src:"aip"},
          {t:"最低投资额：NZD $5,000,000。", src:"aip"},
          {t:"申请人须为 fit and proper person。", src:"aip"},
          {t:"资金须合法获得（earned or acquired lawfully）。", src:"aip"},
          {t:"资金须转入新西兰并完成投资（transfer to New Zealand）。", src:"aip"},
          {t:"投资期：36 months。", src:"aip"},
          {t:"到境要求：投资期内累计至少 21 days。", src:"aip"},
          {t:"可携带：配偶与 24 岁及以下受抚养子女。", src:"aip"}
        ],
        documents: [
          {t:"照片：2 张 head and shoulders photos。", src:"aip"},
          {t:"健康材料：胸部 X 光与体检证明。", src:"aip"},
          {t:"品格材料：17 岁及以上提交无犯罪证明（过去 10 年内居住满 12 个月及以上的国家；递交时在 6 个月有效期内）。", src:"aip"},
          {t:"资金合法来源证明材料。", src:"aip"},
          {t:"24 个月：资金持续投资证据 + Post investment questionnaire。", src:"aip"},
          {t:"36 个月：资金持续投资证据 + Post investment questionnaire。", src:"aip"}
        ],
        funds: [
          {t:"投资额：NZD $5,000,000。", src:"aip"},
          {t:"费用：From NZD $27,470。", src:"aip"},
          {t:"原则批准后 6 个月内完成转款与投资。", src:"aip"}
        ],
        timeline: [
          {t:"递交申请", d:"在线提交 Active Investor Plus Visa"},
          {t:"原则批准", d:"获得 approval in principle"},
          {t:"6个月完成投资", d:"转款至新西兰并完成投资"},
          {t:"24个月检查", d:"持续投资证据 + 问卷"},
          {t:"36个月检查", d:"持续投资证据 + 问卷"}
        ]
      },
      rawText: {
        aip: "",
        nztE: ""
      }
    },

    {
      id: "aip-10m",
      group: "aip",
      name: "AIP Balanced · 10,000,000",
      subtitle: "Investment period 60 months · Time in NZ 105 days · Time reduction via extra Growth funds",
      kpi: [
        {k:"最低投资额", v:"NZD $10,000,000", s:"Balanced category"},
        {k:"投资期", v:"60 months", s:"AIP 页面"},
        {k:"到境要求", v:"105 days", s:"AIP 页面"},
        {k:"减免机制", v:"每额外 NZD $1,000,000 → 14 days", s:"最多 42 days"},
        {k:"申请费用", v:"From NZD $27,470", s:"AIP 页面"}
      ],
      links: [
        {label:"AIP 页面", url:"https://www.immigration.govt.nz/visas/active-investor-plus-visa/"},
        {label:"NZTE", url:"https://www.nzte.govt.nz/page/investor-migrants"}
      ],
      modules: {
        eligibility: [
          {t:"类别：Balanced category。", src:"aip"},
          {t:"最低投资额：NZD $10,000,000。", src:"aip"},
          {t:"申请人须为 fit and proper person。", src:"aip"},
          {t:"资金须合法获得（earned or acquired lawfully）。", src:"aip"},
          {t:"资金须转入新西兰并完成投资（transfer to New Zealand）。", src:"aip"},
          {t:"投资期：60 months。", src:"aip"},
          {t:"到境要求：投资期内累计至少 105 days。", src:"aip"},
          {t:"时间减免：每额外投入 NZD $1,000,000 至 acceptable Growth category investments，减少 14 days；最多减少 42 days；额外资金须在原则批准前提名并维持投资期全程。", src:"aip"},
          {t:"可携带：配偶与 24 岁及以下受抚养子女。", src:"aip"}
        ],
        documents: [
          {t:"照片：2 张 head and shoulders photos。", src:"aip"},
          {t:"健康材料：胸部 X 光与体检证明。", src:"aip"},
          {t:"品格材料：17 岁及以上提交无犯罪证明（过去 10 年内居住满 12 个月及以上的国家；递交时在 6 个月有效期内）。", src:"aip"},
          {t:"资金合法来源证明材料。", src:"aip"},
          {t:"24 个月：资金持续投资证据 + Post investment questionnaire。", src:"aip"},
          {t:"60 个月：资金持续投资证据 + Post investment questionnaire。", src:"aip"}
        ],
        funds: [
          {t:"投资额：NZD $10,000,000。", src:"aip"},
          {t:"费用：From NZD $27,470。", src:"aip"},
          {t:"原则批准后 6 个月内完成转款与投资。", src:"aip"}
        ],
        timeline: [
          {t:"递交申请", d:"在线提交 Active Investor Plus Visa"},
          {t:"原则批准", d:"获得 approval in principle"},
          {t:"6个月完成投资", d:"转款至新西兰并完成投资"},
          {t:"24个月检查", d:"持续投资证据 + 问卷"},
          {t:"60个月检查", d:"持续投资证据 + 问卷"}
        ]
      },
      rawText: {
        aip: "",
        nztE: ""
      }
    }
  ]
};

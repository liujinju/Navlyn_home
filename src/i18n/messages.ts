export type Locale = "zh" | "en" | "fr" | "es";
export type ContentLocale = "zh" | "en";

export interface LocaleOption {
  key: Locale;
  label: string;
}

export const localeOptions: LocaleOption[] = [
  { key: "zh", label: "中文" },
  { key: "en", label: "English" },
  { key: "fr", label: "Français" },
  { key: "es", label: "Español" },
];

export const contentLocaleMap: Record<Locale, ContentLocale> = {
  zh: "zh",
  en: "en",
  fr: "en",
  es: "en",
};

export const shellMessages = {
  zh: {
    languageLabel: "语言",
    nav: {
      home: "首页",
      products: "产品体系",
      arc: "ARC ENGINE",
      industries: "行业应用",
      partners: "客户与合作",
      about: "关于我们",
    },
    contactFloat: {
      title: "Contact Us",
      subtitle: "联系我们 🤝",
    },
    footer: {
      summary:
        "Navlyn 航链科技以 ARC ENGINE 为核心，面向低空经济场景提供飞行智能体系统、硬件终端与行业解决方案。",
      groups: {
        productServices: "产品服务",
        about: "关于我们",
        ecosystem: "合作生态",
        language: "语言",
      },
      items: {
        products: "产品体系",
        arc: "ARC ENGINE",
        flightTraining: "飞行模拟训练",
        vision: "公司愿景",
        news: "新闻报道",
        partners: "客户与合作",
        careers: "人才招聘",
        alliances: "全球合作伙伴",
        distributors: "国际经销商",
        contact: "项目咨询",
        zh: "中文",
        en: "English",
        fr: "Français",
        es: "Español",
      },
    },
  },
  en: {
    languageLabel: "Language",
    nav: {
      home: "Home",
      products: "Products",
      arc: "ARC ENGINE",
      industries: "Industries",
      partners: "Clients & Partners",
      about: "About",
    },
    contactFloat: {
      title: "Contact Us",
      subtitle: "Let's Talk 🤝",
    },
    footer: {
      summary:
        "Navlyn centers ARC ENGINE to deliver intelligent flight systems, hardware terminals, and industry-ready low-altitude solutions.",
      groups: {
        productServices: "Product Services",
        about: "About",
        ecosystem: "Ecosystem",
        language: "Language",
      },
      items: {
        products: "Products",
        arc: "ARC ENGINE",
        flightTraining: "Flight Simulation",
        vision: "Vision",
        news: "News",
        partners: "Clients & Partners",
        careers: "Careers",
        alliances: "Global Partners",
        distributors: "Distributors",
        contact: "Project Inquiry",
        zh: "Chinese",
        en: "English",
        fr: "French",
        es: "Spanish",
      },
    },
  },
  fr: {
    languageLabel: "Langue",
    nav: {
      home: "Accueil",
      products: "Produits",
      arc: "ARC ENGINE",
      industries: "Industries",
      partners: "Clients & partenaires",
      about: "À propos",
    },
    contactFloat: {
      title: "Contact",
      subtitle: "Parlons-en 🤝",
    },
    footer: {
      summary:
        "Navlyn s'appuie sur ARC ENGINE pour proposer des systèmes de vol intelligents, des terminaux matériels et des solutions prêtes pour les opérations basse altitude.",
      groups: {
        productServices: "Produits",
        about: "À propos",
        ecosystem: "Écosystème",
        language: "Langue",
      },
      items: {
        products: "Produits",
        arc: "ARC ENGINE",
        flightTraining: "Simulation de vol",
        vision: "Vision",
        news: "Actualités",
        partners: "Clients & partenaires",
        careers: "Carrières",
        alliances: "Partenaires globaux",
        distributors: "Distributeurs",
        contact: "Demande de projet",
        zh: "Chinois",
        en: "Anglais",
        fr: "Français",
        es: "Espagnol",
      },
    },
  },
  es: {
    languageLabel: "Idioma",
    nav: {
      home: "Inicio",
      products: "Productos",
      arc: "ARC ENGINE",
      industries: "Industrias",
      partners: "Clientes y socios",
      about: "Nosotros",
    },
    contactFloat: {
      title: "Contáctanos",
      subtitle: "Hablemos 🤝",
    },
    footer: {
      summary:
        "Navlyn se apoya en ARC ENGINE para ofrecer sistemas de vuelo inteligente, terminales de hardware y soluciones operativas listas para la economía de baja altitud.",
      groups: {
        productServices: "Productos",
        about: "Nosotros",
        ecosystem: "Ecosistema",
        language: "Idioma",
      },
      items: {
        products: "Productos",
        arc: "ARC ENGINE",
        flightTraining: "Simulación de vuelo",
        vision: "Visión",
        news: "Noticias",
        partners: "Clientes y socios",
        careers: "Carreras",
        alliances: "Socios globales",
        distributors: "Distribuidores",
        contact: "Consulta de proyecto",
        zh: "Chino",
        en: "Inglés",
        fr: "Francés",
        es: "Español",
      },
    },
  },
} as const;

export const pageMessages = {
  zh: {
    home: {
      seoTitle: "Navlyn 航链科技 | 开启飞行智能体时代",
      seoDescription:
        "Navlyn 航链科技以 ARC ENGINE 为核心，提供飞行智能体系统、硬件终端与行业解决方案，服务测绘、矿业、工程与应急救援场景。",
      heroSecondary: "开启飞行智能体时代",
      heroSubtitle: "去飞手化｜安全可控｜群体协同",
      heroPrimaryCta: "探索产品",
      heroSecondaryCta: "了解更多",
      whatWeDo: {
        kicker: "What We Do",
        title: "我们做什么",
        paragraphs: [
          "航链科技（Navlyn）2025 年 8 月成立于中国浙江，承袭法国 Innotech-drone 工业无人机与精密测绘技术积淀，以低空经济 + 人工智能为核心定位，通过 AI 深度赋能硬件，打造具备高度自主意识的飞行智能体。",
          "我们提供从硬件终端、ARC ENGINE 智能操作系统到行业解决方案的全链路低空智能服务，让作业从“遥控执行”走向“意图决策”，推动全球低空经济迈入智能化 3.0 时代。",
        ],
      },
      industries: {
        kicker: "Industry Services",
        title: "行业服务",
        description:
          "航链科技以全场景解决方案服务农业、矿业、能源、建筑、海岸救援与巡检六大方向，通过空海协同终端与 ARC ENGINE 智能中枢，构建可复制的行业作业体系。",
        stats: ["覆盖全球四大洲", "200+ 实地项目", "累计飞行里程超 400 万公里"],
        cards: {
          agriculture: {
            title: "农业",
            summary: "面向农田巡查、作物监测与农事协同，提供低空智能化的感知与调度能力。",
          },
          mining: {
            title: "矿业",
            summary: "覆盖矿区建模、体积测算与风险巡检，适配复杂地形与高频作业场景。",
          },
          energy: {
            title: "能源",
            summary: "服务油气、电力与能源基础设施，强化远距离巡查与关键节点感知效率。",
          },
          construction: {
            title: "建筑",
            summary: "聚焦工地巡查、进度比对与现场治理，帮助工程现场建立持续更新的空中视角。",
          },
          "coastal-rescue": {
            title: "海岸救援",
            summary: "通过空海联动、快速搜寻与任务编排，提升海岸线与近海区域的救援响应能力。",
          },
          inspection: {
            title: "巡检",
            summary: "适配园区、交通与基础设施场景，让高频巡检任务从人工执行走向系统协同。",
          },
        },
      },
      capabilities: {
        kicker: "Core Capabilities",
        title: "王牌能力",
        intro:
          "从系统中枢、软硬件协同到群体安全与工程交付，航链科技把低空能力沉淀为可复用、可规模化的系统能力。",
      },
      productGateway: {
        kicker: "Product Gateways",
        title: "产品入口",
        lead: "从空海一体硬件终端到 ARC ENGINE 智能中枢，航链科技构建完整的低空智能产品体系。",
        cta: "预约体验",
        hardwareKicker: "Core Hardware Matrix",
        hardwareTitle: "核心硬件矩阵",
        hardwareDescription:
          "覆盖任务决策、空中执行与水面搜救三类终端，面向多场景部署形成完整的现场执行能力。",
        softwareKicker: "Core Software System",
        softwareTitle: "ARC ENGINE",
        softwareDescription: "低空智能操作系统",
      },
      news: {
        kicker: "Company News",
        title: "公司报道",
        description:
          "聚焦品牌发布、技术表达与产业交流，持续呈现航链科技在低空智能领域的最新公开报道与传播内容。",
        cta: "查看更多报道",
      },
      labels: {
        detail: "查看详情",
      },
    },
    products: {
      seoTitle: "产品体系 | Navlyn 航链科技",
      seoDescription:
        "查看 Navlyn 航链科技三款硬件终端如何分别承担任务决策、日常执行与水域响应角色。",
      heroTitle: "精密，且强悍。为极限作业而生的三款硬核先驱",
      heroSubtitle:
        "基于 ARC Inside 底层内核驱动，实现从边缘算力中心到全自主执行终端的闭环链路，让低空作业不再受限于环境。",
      hardwareSpecs: "硬件参数",
      aiCapabilities: "AI 能力",
      scenarios: "应用场景",
    },
    arc: {
      seoTitle: "ARC ENGINE | Navlyn 航链科技",
      seoDescription:
        "查看 NAVLYN ARC 如何重塑低空作业的大脑，并通过 Learning Loop 持续进化。",
      heroTitle: 'NAVLYN ARC：重塑低空作业的"大脑"',
      heroSubtitle:
        '从"遥控执行"进化至"意图决策"。基于 AI 驱动的自主飞行架构，让每一架无人机拥有专业飞手的直觉。',
      features: [
        {
          label: "Voice & Command Control",
          title: "语音指令，代替复杂人工",
          description: "无需复杂操作，通过简单指令即可让无人机理解意图，自主规划飞行路线。",
        },
        {
          label: "Muti-domain Flexibility",
          title: "跨域协同，灵活调度",
          description: "一个人就能轻松掌控一整队无人机，让它们像团队一样配合工作。",
        },
        {
          label: "Secure Access Control",
          title: "权限分明，操作合规",
          description: "内置严格的安全审批流程，只有获得授权的人才能操作，防止任何违规飞行。",
        },
        {
          label: "Quantify Progress Scale Success",
          title: "量化进步大脑，快速迭代经验",
          description:
            "根据历史作业数据，系统能帮你优化下一次的任务规划，让作业效率持续翻倍。用数据评价飞行好坏，不再靠感觉。成功的经验可以快速打包，复制到其他行业。",
        },
      ],
    },
    about: {
      seoTitle: "关于我们 | Navlyn 航链科技",
      seoDescription: "查看 Navlyn 航链科技关于公司愿景、新闻报道与职业招聘的二级入口。",
      paragraphs: [
        "浙江航链科技有限公司是一家聚焦低空智能装备与行业解决方案的科技企业。公司源自法国 Innotech 的技术与国际化基础，相关产品与方案已在海外多个国家和地区建立分销网络，并在巡检、测绘、安防、应急等多个场景形成落地案例，部分项目已成为国际行业中具有代表性的经典应用。",
        '在此基础上，航链科技依托中国成熟的制造与供应链体系，进一步推动低空装备的本地化研发、快速迭代与规模化交付。公司不仅聚焦复合翼无人机、无人船等核心装备，也积极推动低空智能操作系统开发，形成"智能硬件 + 操作系统 + 场景方案"的整体能力。',
        "未来，航链科技将以产业链主的角色，持续整合更多无人机、低空基础设施及相关智能制造企业，在人工智能与机器人智能能力的赋能下，推动低空应用从单一设备走向系统化、协同化和规模化升级，目前正处于全面拓展与加速落地阶段。",
      ],
    },
  },
  en: {
    home: {
      seoTitle: "Navlyn | Enabling Intelligent Airspace Capabilities",
      seoDescription:
        "Navlyn powers low-altitude intelligence with ARC ENGINE, smart hardware terminals, and industry solutions for surveying, mining, engineering, and emergency response.",
      heroSecondary: "The Era of Intelligent Flight",
      heroSubtitle: "Pilotless | Safe & Controllable | Swarm Collaboration",
      heroPrimaryCta: "Explore Products",
      heroSecondaryCta: "Learn More",
      whatWeDo: {
        kicker: "What We Do",
        title: "What We Do",
        paragraphs: [
          "Founded in Zhejiang, China in August 2025, Navlyn inherits the industrial UAV and precision mapping expertise of France-based Innotech-drone. With low-altitude economy plus AI at its core, the company deeply fuses intelligence into hardware to build highly autonomous flight agents.",
          "From hardware terminals and ARC ENGINE to industry-ready solutions, Navlyn delivers an end-to-end low-altitude intelligence stack that moves operations from remote control to intent-driven decision making, pushing the global low-altitude economy toward the intelligent 3.0 era.",
        ],
      },
      industries: {
        kicker: "Industry Services",
        title: "Industry Services",
        description:
          "Navlyn serves agriculture, mining, energy, construction, coastal rescue, and inspection with scenario-driven solutions built on air-sea terminals and the ARC ENGINE control core.",
        stats: [
          "Serving four continents",
          "200+ field projects",
          "4M+ km cumulative flight distance",
        ],
        cards: {
          agriculture: {
            title: "Agriculture",
            summary:
              "Precision sensing and task orchestration for crop monitoring, farmland patrols, and coordinated agricultural workflows.",
          },
          mining: {
            title: "Mining",
            summary:
              "Mine modeling, volumetric measurement, and risk inspection for complex terrain and high-frequency field operations.",
          },
          energy: {
            title: "Energy",
            summary:
              "Long-range inspection and key-node sensing for oil, gas, power, and critical energy infrastructure.",
          },
          construction: {
            title: "Construction",
            summary:
              "Continuous aerial visibility for site patrols, progress comparison, and on-site governance across engineering projects.",
          },
          "coastal-rescue": {
            title: "Coastal Rescue",
            summary:
              "Air-sea coordination, rapid search, and mission orchestration for fast response across shorelines and nearshore waters.",
          },
          inspection: {
            title: "Inspection",
            summary:
              "System-driven high-frequency inspection for campuses, transport corridors, and distributed infrastructure networks.",
          },
        },
      },
      capabilities: {
        kicker: "Core Capabilities",
        title: "Core Capabilities",
        intro:
          "From intelligent control and hardware-software synergy to swarm safety and field delivery, Navlyn distills low-altitude operations into reusable and scalable system capability.",
      },
      productGateway: {
        kicker: "Product Gateways",
        title: "Product Gateways",
        lead:
          "From air-sea hardware terminals to the ARC ENGINE software core, Navlyn builds a complete low-altitude intelligence product stack.",
        cta: "Book a Demo",
        hardwareKicker: "Core Hardware Matrix",
        hardwareTitle: "Core Hardware Matrix",
        hardwareDescription:
          "A three-terminal field architecture covering mission control, aerial execution, and water-surface rescue.",
        softwareKicker: "Core Software System",
        softwareTitle: "ARC ENGINE",
        softwareDescription: "Low-altitude Intelligent Operating System",
      },
      news: {
        kicker: "Company News",
        title: "Company News",
        description:
          "Track Navlyn's latest public stories around product launches, technology narratives, and industry collaboration in low-altitude intelligence.",
        cta: "View More Stories",
      },
      labels: {
        detail: "View Details",
      },
    },
    products: {
      seoTitle: "Products | Navlyn",
      seoDescription:
        "Explore three Navlyn hardware terminals built for command, execution, and water-surface response across extreme operational scenarios.",
      heroTitle:
        "Precision. Power. Three rugged pioneers built for extreme operations.",
      heroSubtitle:
        "Powered by the ARC Inside core, this trio forms a closed operational chain from edge intelligence and mission command to fully autonomous field execution.",
      hardwareSpecs: "Hardware Specs",
      aiCapabilities: "AI Capabilities",
      scenarios: "Scenarios",
    },
    arc: {
      seoTitle: "ARC ENGINE | Navlyn",
      seoDescription:
        "Discover how NAVLYN ARC reshapes low-altitude operations into an intent-driven autonomous intelligence stack.",
      heroTitle: 'NAVLYN ARC: The Brain Behind Intelligent Low-Altitude Work',
      heroSubtitle:
        'From remote execution to intent-driven decision making. An AI-native autonomy architecture that gives every aircraft the intuition of a professional pilot.',
      features: [
        {
          label: "Voice & Command Control",
          title: "Natural commands instead of complex operation",
          description:
            "A mission can begin with simple human instructions while the system translates intent into autonomous flight planning.",
        },
        {
          label: "Multi-domain Flexibility",
          title: "Flexible coordination across domains",
          description:
            "One operator can orchestrate an entire fleet and let every terminal collaborate as a coordinated team in the field.",
        },
        {
          label: "Secure Access Control",
          title: "Permission-aware and fully compliant",
          description:
            "Built-in governance and approval logic make sure only authorized people can operate critical flight missions.",
        },
        {
          label: "Quantify Progress Scale Success",
          title: "Quantified progress and repeatable growth",
          description:
            "Historical flight data continuously improves mission planning, replaces intuition with measurable evaluation, and turns successful protocols into reusable industry assets.",
        },
      ],
    },
    about: {
      seoTitle: "About | Navlyn",
      seoDescription:
        "Explore Navlyn's background, industry foundation, and integrated capability across intelligent hardware, software, and scenarios.",
      paragraphs: [
        "Navlyn is a technology company focused on low-altitude intelligent equipment and industry solutions. Built on the international engineering foundation of France-based Innotech, its products and solutions have already established overseas distribution in multiple countries and landed in inspection, surveying, security, and emergency response scenarios.",
        'With the support of China\'s mature manufacturing and supply-chain ecosystem, Navlyn is accelerating localized R&D, rapid iteration, and scalable delivery. The company focuses on fixed-wing UAVs, unmanned surface vehicles, and the ongoing development of intelligent operating systems for low-altitude operations, building an integrated capability across hardware, software, and scenario solutions.',
        "Looking ahead, Navlyn aims to act as a chain-leading integrator that connects UAVs, low-altitude infrastructure, and intelligent manufacturing partners. Driven by AI and embodied intelligence, the company is pushing low-altitude applications from standalone equipment toward system-level, collaborative, and scalable deployment.",
      ],
    },
  },
} as const;

export interface IndustryItem {
  key: string;
  label: string;
  painPoint: string;
  solution: string;
  outcome: string;
  image: string;
  eyebrow: string;
}

export interface HomeMediaSlide {
  image: string;
  alt: string;
  imagePosition: string;
}

export interface HomeCapabilityItem {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export interface HomeHardwareItem {
  key: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
}

export interface HomeNewsItem {
  title: string;
  summary: string;
  tag: string;
  meta: string;
  source: string;
  image: string;
  alt: string;
  to: string;
  featured?: boolean;
}

export const homeHero = {
  titleEn: 'Enabling Intelligent Airspace Capabilities',
  titleZh: '开启飞行智能体时代',
  subtitle: '去飞手化｜安全可控｜群体协同',
};

export const homeWhatWeDo = {
  kicker: 'What We Do',
  title: '我们做什么',
  paragraphs: [
    '航链科技（Navlyn）2025 年 8 月成立于中国浙江，承袭法国 Innotech-drone 工业无人机与精密测绘技术积淀，以低空经济 + 人工智能为核心定位，通过 AI 深度赋能硬件，打造具备高度自主意识的飞行智能体。',
    '我们提供从硬件终端、ARC ENGINE 智能操作系统到行业解决方案的全链路低空智能服务，让作业从“遥控执行”走向“意图决策”，推动全球低空经济迈入智能化 3.0 时代。',
  ],
  slides: [
    {
      image: '/media/what-we-do-1.png',
      alt: '航链科技业务与团队展示',
      imagePosition: 'center center',
    },
    {
      image: '/media/what-we-do-2.png',
      alt: '航链科技低空智能场景展示',
      imagePosition: 'center center',
    },
  ] satisfies HomeMediaSlide[],
};

export const homeIndustryService = {
  kicker: 'Industry Services',
  title: '行业服务',
  image: '/media/industry-service-bp-page-12.png',
  imageAlt: '行业服务案例展示',
  paragraphs: [
    '航链科技以全场景解决方案，服务测绘、建筑与能源、矿业资源、生态林业、公路铁路巡检、安防、应急救援七大领域，覆盖全球四大洲，落地 200+ 实地项目，累计飞行里程超 400 万公里。',
    '已成为多国政府、世界 500 强企业的低空智能合作伙伴。',
  ],
};

export const homeCapabilityIntro =
  '从系统中枢、软硬件协同到群体安全与工程交付，航链科技把低空能力沉淀为可复用、可规模化的系统能力。';

export const homeCapabilities: HomeCapabilityItem[] = [
  {
    eyebrow: 'System Intelligence',
    title: 'ARC ENGINE 低空智能操作系统',
    description: '自主研发 L4 级端侧智能平台，实现任务意图理解、自动规划、全域治理，被誉为低空经济的“安卓系统”。',
    note: '任务理解 · 自动规划 · 全域治理',
    image: '/media/capability-arc-os-1.jpg',
    imageAlt: 'ARC ENGINE system capability',
    imagePosition: 'center 38%',
  },
  {
    eyebrow: 'Hardware + AI',
    title: '软硬件双核驱动',
    description: '自研空海一体硬件矩阵与 AI 中枢深度融合，硬件标准化、软件持续进化，达成“硬件折旧，软件增值”。',
    note: '硬件标准化 · 软件持续进化',
    image: '/media/capability-arc-os-2.jpg',
    imageAlt: 'Navlyn hardware and AI integration',
    imagePosition: '64% center',
  },
  {
    eyebrow: 'Secure Swarm',
    title: '群体智能与安全可控',
    description: '支持多机与空海联动，最多可调度 200 台设备协同作业；主权级权限治理与主动安全防护，满足关键行业合规要求。',
    note: '多机协同 · 主动安全 · 权限治理',
    image: '/media/capability-swarm-security.png',
    imageAlt: 'Navlyn swarm and secure collaboration',
    imagePosition: '62% 32%',
  },
  {
    eyebrow: 'Field Delivery',
    title: '全场景工程交付能力',
    description: '从厘米级精密测绘到 24 小时无人巡检，从极端环境作业到应急救援，提供可落地、可复盘、可规模化的系统能力。',
    note: '实地项目 · 全球交付 · 可规模化落地',
    image: '/media/capability-delivery.png',
    imageAlt: 'Navlyn engineering delivery capability',
    imagePosition: 'center center',
  },
];

export const homeHardwareMatrix = {
  kicker: 'Product Gateways',
  title: '产品入口',
  lead: '从空海一体硬件终端到 ARC ENGINE 智能中枢，航链科技构建完整的低空智能产品体系。',
  ctaLabel: '预约体验',
  ctaTo: '/contact',
  hardwareHeading: '核心硬件矩阵',
  hardwareKicker: 'Core Hardware Matrix',
  hardwareDescription: '覆盖任务决策、空中执行与水面搜救三类终端，面向多场景部署形成完整的现场执行能力。',
  items: [
    {
      key: 'commander',
      title: '指挥官 Commander X1',
      description: '边缘算力与任务决策中心',
      image: '/media/commander-x1-product.jpg',
      imageAlt: 'Commander X1',
      imagePosition: 'center 52%',
    },
    {
      key: 'scout',
      title: '尖兵 Scout S1',
      description: '高性价比多功能作业机',
      image: '/media/scout-s1.png',
      imageAlt: 'Scout S1',
      imagePosition: 'center 42%',
    },
    {
      key: 'seal',
      title: '海豹 Seal S1',
      description: '自主水面无人救生艇',
      image: '/media/seal-usv.jpg',
      imageAlt: 'Seal S1',
      imagePosition: 'center 50%',
    },
  ] satisfies HomeHardwareItem[],
  software: {
    kicker: 'Core Software System',
    heading: '核心软件系统',
    title: 'ARC ENGINE',
    description: '低空智能操作系统',
    summary: '围绕任务理解、系统治理与多终端协同，构成航链科技低空智能体系中的软件中枢。',
    image: '/media/product-entry-arc-os.jpg',
    imageAlt: 'ARC ENGINE software system',
    imagePosition: 'center center',
  },
};

export const homeNews = {
  kicker: 'Company News',
  title: '公司报道',
  description: '聚焦品牌发布、技术表达与产业交流，持续呈现航链科技在低空智能领域的最新公开报道与传播内容。',
  ctaLabel: '查看更多报道',
  ctaTo: '/about/news',
  items: [
    {
      title: '航链科技品牌发布与低空智能路线获主流媒体持续关注',
      summary: '围绕飞行智能体、ARC ENGINE 与低空经济创新实践，多家主流媒体持续跟进航链科技的品牌发布与技术表达。',
      tag: 'Media Coverage',
      meta: '2026.02 · 新华网 / 中国日报网 / 界面新闻',
      source: '新华社系 / 财经媒体',
      image: '/media/company-news-feature.jpg',
      alt: '航链科技发布会现场',
      to: 'https://www.news.cn/digital/20260205/3a11fec4d2be4756bd569b850abb8db1/c.html',
      featured: true,
    },
    {
      title: '浙江电视台聚焦发布会现场与产品体系展示',
      summary: '从发布会现场、核心讲解到硬件展示，报道集中呈现航链科技在低空智能领域的产品表达与场景落地。',
      tag: 'Broadcast',
      meta: '2026.02 · 浙江电视台',
      source: '省级电视媒体',
      image: '/media/company-news-briefing.jpg',
      alt: '航链科技现场讲解',
      to: 'https://www.cztv.com/video/20091537/wh/horizontal_vod?id=20091537',
    },
    {
      title: '门户平台持续报道国际合作与产业交流进展',
      summary: '围绕国际合作、产业交流与低空经济实践，多家门户平台与行业媒体同步跟进航链科技最新公开动态。',
      tag: 'Industry Update',
      meta: '2026.02 · 中国网 / 经济观察网 / 环球时报',
      source: '门户与行业媒体',
      image: '/media/company-news-collab.jpg',
      alt: '航链科技合作交流现场',
      to: 'http://hs.china.com.cn/2026-02/02/content_43347937.html',
    },
  ] satisfies HomeNewsItem[],
};

export const industries: IndustryItem[] = [
  {
    key: 'surveying',
    label: '测绘',
    painPoint: '大范围作业效率低、数据更新周期长，复杂地形下人工测绘成本高。',
    solution: '通过 ARC ENGINE 进行任务规划、航线执行与实时建模，结合指挥机和巡查终端完成高效数据采集。',
    outcome: '形成高精度三维建模成果，缩短作业周期并提升多区域并行能力。',
    image: '/media/commander-x1.jpg',
    eyebrow: 'Surveying & Mapping',
  },
  {
    key: 'construction',
    label: '建筑与工程',
    painPoint: '项目现场变化频繁，传统巡检难以及时发现风险与进度偏差。',
    solution: '将无人机巡查、图像识别和任务日志结合，用统一平台管理工程现场状态与任务记录。',
    outcome: '帮助项目团队更快完成巡检闭环和现场可视化管理。',
    image: '/media/scout-s1.png',
    eyebrow: 'Construction & Engineering',
  },
  {
    key: 'mining',
    label: '矿业与资源',
    painPoint: '矿区范围广、道路条件复杂，应急与生产监管需要并行推进。',
    solution: '通过广域测绘、空中巡检和事件协同调度，建立低空运行与矿区治理的一体化方案。',
    outcome: '降低人力巡检压力，提升矿区生产监管和应急处置效率。',
    image: '/media/commander-x1.jpg',
    eyebrow: 'Mining & Resources',
  },
  {
    key: 'emergency',
    label: '应急救援',
    painPoint: '通信中断、道路受阻和现场环境复杂时，传统救援调度效率受限。',
    solution: '使用语音意图下达、空海协同执行和任务编排能力，快速完成搜索、定位与救援支援。',
    outcome: '提升复杂灾害场景中的任务响应速度与跨设备协同能力。',
    image: '/media/seal-usv.jpg',
    eyebrow: 'Emergency Response',
  },
];

export interface LandingMetric {
  value: string;
  label: string;
  detail: string;
}

export interface KnowledgeTrack {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

export interface LandingFeatureCard {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
}

export interface PartnerPreviewCard {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  accent: string;
}

export interface LandingEditorialCard {
  eyebrow: string;
  title: string;
  description: string;
  path: string;
  accent: string;
}

export const knowledgeLandingMetrics: LandingMetric[] = [
  {
    value: '05',
    label: '栏目主线',
    detail: '科研文章、成功案例、行业动态、资料下载、帮助中心',
  },
  {
    value: 'Method',
    label: '方法沉淀',
    detail: '系统原理、交付经验与行业观察统一沉淀到知识库',
  },
  {
    value: 'Update',
    label: '持续补充',
    detail: '本阶段先搭框架，后续按栏目逐项补文档、案例与答疑',
  },
];

export const knowledgeTracks: KnowledgeTrack[] = [
  {
    eyebrow: 'Research',
    title: '科研文章与系统方法',
    description: '承接 ARC ENGINE 的系统原理、任务理解、协同执行与学习闭环等内容，沉淀技术表达。',
    points: ['任务理解与调度逻辑', '软硬件协同与系统栈', '低空智能方法论文脉络'],
  },
  {
    eyebrow: 'Case Studies',
    title: '案例、动态与项目复盘',
    description: '把场景落地、项目结果和阶段性行业观察收成可复用的知识资产，方便客户与伙伴快速理解能力边界。',
    points: ['成功案例与实地结果', '行业动态与趋势观察', '场景复盘与方法迁移'],
  },
  {
    eyebrow: 'Downloads',
    title: '资料与帮助支持',
    description: '承接产品资料、品牌素材、部署答疑与常见问题，让知识库既能对外展示，也能对内支撑交付。',
    points: ['产品手册与品牌资料', '部署说明与常见问题', '帮助中心与支持入口'],
  },
];

export const knowledgeEditorialCards: LandingEditorialCard[] = [
  {
    eyebrow: 'Research Queue',
    title: '科研文章',
    description: '优先补系统原理、任务理解、群体协同与 Learning Loop 等方法文章。',
    path: '/knowledge-base/research',
    accent: '方法表达优先补齐',
  },
  {
    eyebrow: 'Case Queue',
    title: '成功案例',
    description: '围绕矿业、应急、建筑与能源等场景，持续沉淀项目案例与复盘。',
    path: '/knowledge-base/cases',
    accent: '案例与指标同步沉淀',
  },
  {
    eyebrow: 'Support Queue',
    title: '资料下载 / 帮助中心',
    description: '把产品手册、部署说明、品牌素材和常见问题统一沉淀为支持入口。',
    path: '/knowledge-base/help',
    accent: '对外支持内容统一入口',
  },
];

export const partnerLandingMetrics: LandingMetric[] = [
  {
    value: '04+',
    label: '覆盖大洲',
    detail: '合作与交付网络已经延伸至欧洲、非洲、北美和东南亚等区域',
  },
  {
    value: 'Alliance',
    label: '合作生态',
    detail: '合作伙伴与全球经销商两条主线，分别承接品牌合作与区域覆盖',
  },
  {
    value: 'Field',
    label: '项目落地',
    detail: '通过品牌合作、国际交付与本地经销，逐步形成可持续扩展的渠道网络',
  },
];

export const partnerPreviewCards: PartnerPreviewCard[] = [
  {
    eyebrow: 'Alliance Network',
    title: '合作伙伴',
    description: '用于承接合作品牌、联合项目与 Logo 墙，后续可继续补真实品牌标识与案例内容。',
    path: '/partners/alliances',
    accent: '合作品牌与项目入口',
  },
  {
    eyebrow: 'Global Distribution',
    title: '全球经销商',
    description: '用于展示国家、城市、区域代理与联络方式，后续可继续接入世界地图和经销商清单。',
    path: '/partners/distributors',
    accent: '地图、区域与联系方式入口',
  },
];

export const partnerModeCards: LandingEditorialCard[] = [
  {
    eyebrow: 'Brand Alliance',
    title: '品牌合作',
    description: '承接合作伙伴展示、联合品牌露出与合作案例，建立稳定的品牌协同入口。',
    path: '/partners/alliances',
    accent: '品牌墙、联合发布、案例露出',
  },
  {
    eyebrow: 'Regional Distribution',
    title: '区域经销',
    description: '承接国家、城市与本地代理关系，形成全球经销商与联络方式的清晰框架。',
    path: '/partners/distributors',
    accent: '地图、城市、代理联络',
  },
  {
    eyebrow: 'Project Collaboration',
    title: '项目共创',
    description: '为联合交付、行业方案和本地运营协同预留正式入口，后续可承接更多合作内容。',
    path: '/contact',
    accent: '联合交付与本地化协同',
  },
];

export const aboutLandingMetrics: LandingMetric[] = [
  {
    value: '03',
    label: '核心栏目',
    detail: '公司愿景、新闻报道、职业招聘共同构成关于我们的对外表达',
  },
  {
    value: 'Brand',
    label: '品牌表达',
    detail: '从愿景、公开报道到人才吸引，逐步建立 Navlyn 的长期品牌认知',
  },
  {
    value: 'Global',
    label: '国际叙事',
    detail: '承接法国工业无人机积淀、全球合作网络与低空智能长期方向',
  },
];

export const aboutFeatureCards: LandingFeatureCard[] = [
  {
    eyebrow: 'Company Vision',
    title: '公司愿景',
    description: '查看品牌愿景、系统方向与阶段性里程碑，理解 Navlyn 的长期表达。',
    path: '/about/vision',
    image: '/media/about-team-collab.jpg',
    imageAlt: 'Navlyn company vision',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'Media Coverage',
    title: '新闻报道',
    description: '查看航链科技已公开的品牌发布、媒体报道与产业传播内容。',
    path: '/about/news',
    image: '/media/company-news-feature.jpg',
    imageAlt: 'Navlyn media coverage',
    imagePosition: 'center center',
  },
  {
    eyebrow: 'Careers',
    title: '职业招聘',
    description: '查看研发、产品设计与商务运营等方向的岗位框架与招聘内容。',
    path: '/about/careers',
    image: '/media/logo-white.png',
    imageAlt: 'Navlyn careers',
    imagePosition: 'center center',
  },
];

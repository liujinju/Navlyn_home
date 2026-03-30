export type SiteNavIconKey =
  | 'home'
  | 'products'
  | 'arc'
  | 'industries'
  | 'knowledge-base'
  | 'partners'
  | 'about';

export interface SiteNavItem {
  key: string;
  label: string;
  path: string;
  iconKey: SiteNavIconKey;
}

export interface FooterNavGroup {
  title: string;
  items: Array<{
    label: string;
    path?: string;
  }>;
}

export interface GlobalRegionItem {
  name: string;
  locations: string;
}

export interface DistributorMarker {
  region: string;
  flag: string;
  city: string;
  note: string;
}

export const siteNavItems: SiteNavItem[] = [
  { key: 'home', label: '首页', path: '/', iconKey: 'home' },
  { key: 'products', label: '产品体系', path: '/products', iconKey: 'products' },
  { key: 'arc', label: 'ARC ENGINE', path: '/arc-os', iconKey: 'arc' },
  { key: 'industries', label: '行业应用', path: '/industries', iconKey: 'industries' },
  { key: 'knowledge-base', label: '知识库', path: '/knowledge-base', iconKey: 'knowledge-base' },
  { key: 'partners', label: '客户与合作', path: '/partners', iconKey: 'partners' },
  { key: 'about', label: '关于我们', path: '/about', iconKey: 'about' },
];

export const partnerQuotes = [
  {
    name: '吴文峻',
    title: '北京航空航天大学教授',
    quote:
      'AI 与低空产业的融合，会给低空经济的发展插上智慧的翅膀，让无人机在更多场景中快速形成协作能力。',
  },
  {
    name: '张景锋',
    title: '复旦大学教授',
    quote:
      '未来低空经济中自动导航与自动任务执行的容错率会持续提升，智能与治理需要同步建设。',
  },
  {
    name: '多哥 GIMS 集团',
    title: '海外合作伙伴',
    quote:
      '选择与航链合作，不只是看设备性能，也看中其在培训中心和制造中心上的长期合作潜力。',
  },
];

export const globalRegions = [
  { name: '欧洲', locations: '法国、荷兰、瑞士、比利时' },
  { name: '北美', locations: '加拿大' },
  { name: '非洲', locations: '多哥、科特迪瓦、肯尼亚' },
  { name: '东南亚', locations: '马来西亚、菲律宾、印尼' },
  { name: '澳洲', locations: '悉尼、墨尔本' },
] satisfies GlobalRegionItem[];

export const partnerBrandWall = [
  'INNOTECH-DRONE',
  'ARC ENGINE',
  'NAVLYN LAB',
  'LOW-ALTITUDE AI',
  'FLIGHT INTELLIGENCE',
  'GLOBAL DELIVERY',
  'INDUSTRY PARTNER',
  'FIELD INTEGRATOR',
];

export const distributorMarkers: DistributorMarker[] = [
  {
    region: '法国',
    flag: '🇫🇷',
    city: 'Grenoble',
    note: '代理商与联系方式待补充',
  },
  {
    region: '多哥',
    flag: '🇹🇬',
    city: 'Lome',
    note: '代理商与联系方式待补充',
  },
  {
    region: '马来西亚',
    flag: '🇲🇾',
    city: 'Kuala Lumpur',
    note: '代理商与联系方式待补充',
  },
  {
    region: '加拿大',
    flag: '🇨🇦',
    city: 'Montreal',
    note: '代理商与联系方式待补充',
  },
];

export const aboutTeam = [
  {
    name: '何海星',
    role: '创始人兼 CEO',
    image: '/media/team-hebo.jpg',
    bio: '法国格勒诺布尔大学计算机博士，长期从事无人机解决方案、全球供应链整合与国际市场拓展。',
  },
  {
    name: '黄峰明',
    role: '首席战略官',
    image: '/media/team-ali.png',
    bio: '悉尼大学人工智能博士，负责战略、品牌与销售，具备跨行业数字化运营与国际合作经验。',
  },
  {
    name: '国际工程团队',
    role: '联合研发与交付',
    image: '/media/team-olivier.jpg',
    bio: '汇聚欧洲工程师与海内外博士团队，连接飞行平台、系统研发和行业交付能力。',
  },
];

export const aboutMilestones = [
  '2025 年 8 月，航链科技在浙江启动品牌与产品发布。',
  '承袭法国工业无人机服务商 Innotech-drone 的工程和交付积累。',
  '围绕 ARC ENGINE 构建软件中枢、硬件终端与行业方案协同体系。',
  '联合高校和实验室持续推动低空智能与人才培养。',
];

export const contactCards = [
  {
    title: '产品演示',
    description: '适合需要快速了解 ARC ENGINE、指挥机和巡查终端能力的客户。',
  },
  {
    title: '方案咨询',
    description: '适合矿业、工程、测绘和应急救援场景的项目需求沟通。',
  },
  {
    title: '合作洽谈',
    description: '适合渠道伙伴、国际合作方和高校实验室对接。',
  },
];

export const footerSummary =
  'Navlyn 航链科技以 ARC ENGINE 为核心，面向低空经济场景提供飞行智能体系统、硬件终端与行业解决方案。';

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: '产品服务',
    items: [
      { label: '产品体系', path: '/products' },
      { label: 'ARC ENGINE', path: '/arc-os' },
      { label: '飞行模拟训练' },
      { label: '知识库', path: '/knowledge-base' },
    ],
  },
  {
    title: '关于我们',
    items: [
      { label: '公司愿景', path: '/about/vision' },
      { label: '新闻报道', path: '/about/news' },
      { label: '客户与合作', path: '/partners' },
      { label: '人才招聘', path: '/about/careers' },
    ],
  },
  {
    title: '合作生态',
    items: [
      { label: '全球合作伙伴', path: '/partners/alliances' },
      { label: '国际经销商', path: '/partners/distributors' },
      { label: '项目咨询', path: '/contact' },
    ],
  },
  {
    title: '语言',
    items: [{ label: '中文' }, { label: 'English' }, { label: 'Français' }, { label: 'Español' }],
  },
];

export const aboutHighlight = {
  title: 'Enabling Intelligent Airspace Capabilities',
  description:
    '从单机作业到多机多域协同，从手动控制到意图驱动执行，航链科技希望把低空能力沉淀为可长期运行的系统能力。',
};

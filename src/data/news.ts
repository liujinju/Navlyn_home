export interface NewsItem {
  slug: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  body: string[];
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

export const newsItems: NewsItem[] = [
  {
    slug: 'technology-breakthroughs',
    tag: 'Technology',
    title: '聚焦技术突破',
    description: '持续展示航链科技在飞行智能、系统协同与低空作业能力上的研发进展。',
    date: '2026-01-26',
    location: '浙江 · 杭州',
    image: '/media/news-team-1.jpg',
    imageAlt: 'Navlyn technology collaboration',
    body: [
      '围绕飞行智能体、系统协同与任务执行闭环，航链科技正在把技术能力持续沉淀为可复用的工程体系。现阶段官网先以品牌资料中的真实团队素材作为占位，后续可逐步替换为正式新闻稿与研发动态。',
      '这部分内容未来适合承接系统升级、算法迭代、硬件能力增强与工程成果发布，用更连续的方式记录航链科技在低空智能领域的技术推进。',
    ],
  },
  {
    slug: 'product-launches',
    tag: 'Release',
    title: '产品发布与品牌亮相',
    description: '围绕产品发布、系统演示与品牌活动，逐步沉淀官网新闻内容。',
    date: '2026-01-26',
    location: '浙江 · 嘉兴',
    image: '/media/news-team-2.jpg',
    imageAlt: 'Navlyn product and team presentation',
    body: [
      '从品牌发布、产品首秀到系统演示，产品动态页将作为官网对外呈现的重要信息入口，帮助客户与合作伙伴快速理解航链科技的产品矩阵与品牌节奏。',
      '当前版本先保留轻量化的新闻结构，待你补充正式发布会内容、活动照片与新闻原文后，即可进一步升级为完整的动态栏目。',
    ],
  },
  {
    slug: 'global-collaboration',
    tag: 'Global',
    title: '国际合作与行业展会',
    description: '记录中法团队合作、海外交流与行业展会中的关键时刻与落地实践。',
    date: '2026-01-26',
    location: '中国 / 法国',
    image: '/media/news-team-3.jpg',
    imageAlt: 'Navlyn international team collaboration',
    body: [
      '中法团队协作、海外交流与行业展会，是航链科技建立国际品牌识别与合作信任的重要组成部分。官网新闻区未来可以承接国际合作纪要、行业参展记录与跨区域项目沟通成果。',
      '当前展示内容仍以已有图片资料为主，后续补齐真实新闻后，这里可以直接形成持续更新的公司报道栏目。',
    ],
  },
];

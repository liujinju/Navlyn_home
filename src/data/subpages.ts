export interface SubpageLinkItem {
  title: string;
  description: string;
  path: string;
}

export interface UpdateCardItem {
  title: string;
  description: string;
}

export const knowledgeSubpages: SubpageLinkItem[] = [
  {
    title: '科研文章',
    description: '围绕系统原理、任务理解与智能调度的内容体系，页面正在更新。',
    path: '/knowledge-base/research',
  },
  {
    title: '成功案例',
    description: '围绕项目交付、场景落地与复盘方法的案例栏目，页面正在更新。',
    path: '/knowledge-base/cases',
  },
  {
    title: '行业动态',
    description: '围绕低空经济、政策与行业实践的动态栏目，页面正在更新。',
    path: '/knowledge-base/updates',
  },
  {
    title: '资料下载',
    description: '围绕产品手册、系统资料与品牌材料的下载专区，页面正在更新。',
    path: '/knowledge-base/downloads',
  },
  {
    title: '帮助中心',
    description: '围绕使用说明、部署答疑与常见问题的支持入口，页面正在更新。',
    path: '/knowledge-base/help',
  },
];

export const partnerSubpages: SubpageLinkItem[] = [
  {
    title: '合作伙伴',
    description: '合作伙伴页将用于展示合作品牌与 Logo 墙，目前页面正在更新。',
    path: '/partners/alliances',
  },
  {
    title: '全球经销商',
    description: '全球经销商页将用于承接地图、国家、城市与代理商联系方式，目前页面正在更新。',
    path: '/partners/distributors',
  },
];

export const aboutSubpages: SubpageLinkItem[] = [
  {
    title: '公司愿景',
    description: '查看品牌愿景、核心表达与企业介绍的第一版页面框架。',
    path: '/about/vision',
  },
  {
    title: '新闻报道',
    description: '查看企业新闻、公开报道与传播内容的聚合展示页。',
    path: '/about/news',
  },
  {
    title: '职业招聘',
    description: '查看航链科技招聘页框架与岗位卡片布局，后续继续补充内容。',
    path: '/about/careers',
  },
];

export const careerPreviewCards: UpdateCardItem[] = [
  {
    title: '研发类岗位',
    description: '算法工程、系统平台、前端与低空智能相关岗位内容正在更新。',
  },
  {
    title: '产品与设计岗位',
    description: '围绕产品体系、体验设计与内容表达的岗位信息正在更新。',
  },
  {
    title: '商务与运营岗位',
    description: '围绕国际合作、行业方案与品牌传播的岗位信息正在更新。',
  },
];

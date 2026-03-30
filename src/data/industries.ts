export interface IndustryScenarioItem {
  key: string;
  label: string;
  metric: string;
  metricDetail: string;
  statement: string;
  support: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export const industryPageHero = {
  tag: 'Industry Applications',
  title: '围绕真实行业现场组织系统能力，而不是只展示单一设备',
  description:
    '通过标签卡片切换行业场景，把产品、系统和交付方法拉回业务现场，形成更贴近项目语言的行业入口。',
};

export const industryScenarioItems: IndustryScenarioItem[] = [
  {
    key: 'inspection',
    label: '巡检',
    metric: '超越视距',
    metricDetail: '连续覆盖线性资产场景',
    statement: '超越视距，重塑线性资产的数字化边界。',
    support:
      '利用 ARC ENGINE 的多机协同能力，在复杂路网与电网中实现全自动、无感化的连续作业。',
    image: '/media/company-news-briefing.jpg',
    imageAlt: 'Inspection scenario',
    imagePosition: 'center center',
  },
  {
    key: 'agriculture',
    label: '农业',
    metric: '厘米级作业',
    metricDetail: '从粗放管理进入精准经营',
    statement: '精准感知，让每一寸耕地都拥有数字灵魂。',
    support:
      '通过高精度多光谱分析与自主路径规划，实现从粗放管理到厘米级精准作业的跨越。',
    image: '/media/what-we-do-1.png',
    imageAlt: 'Agriculture scenario',
    imagePosition: 'center center',
  },
  {
    key: 'energy',
    label: '能源',
    metric: '全时守护',
    metricDetail: '构建不落幕的能源哨兵',
    statement: '全时守护，为能源基建构建不落幕的哨兵。',
    support:
      '针对风电、光伏及高压电塔，提供基于数字孪生的结构完整性监测与风险预判。',
    image: '/media/commander-x1-field.jpg',
    imageAlt: 'Energy scenario',
    imagePosition: 'center 58%',
  },
  {
    key: 'mining',
    label: '矿业',
    metric: '厘米级测绘',
    metricDetail: '100% 替代高风险人工现场测绘',
    statement: '厘米级测绘，定义数字化矿山的感知标杆。',
    support:
      '在 GPS 缺失的极限环境下，实时构建矿区 3D 点云模型，让危险作业转化为安全的桌面决策。',
    image: '/media/industry-service-bp-page-12.png',
    imageAlt: 'Mining scenario',
    imagePosition: 'center center',
  },
  {
    key: 'construction',
    label: '建筑',
    metric: '实时同步',
    metricDetail: '让数字模型紧贴真实进度',
    statement: '智建未来，让物理进度与数字模型实时同步。',
    support:
      '全生命周期监测施工现场，通过 ARC Vision 自动比对设计方案与实地进度，消除交付误差。',
    image: '/media/scout-s1-field.jpg',
    imageAlt: 'Construction scenario',
    imagePosition: 'center center',
  },
  {
    key: 'marine',
    label: '海洋作业',
    metric: '空海协同',
    metricDetail: '跨域联动提升复杂海况响应',
    statement: '跨域协同，开启空海一体的智能搜救与治理。',
    support:
      '实现无人机与无人船的深度算法耦合，在复杂海况下高效执行识别、定位与协同救援任务。',
    image: '/media/seal-usv.jpg',
    imageAlt: 'Marine operations scenario',
    imagePosition: 'center center',
  },
];

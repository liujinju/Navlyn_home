export type ProductCategoryKey = 'hardware' | 'software';

export interface ProductCategory {
  key: ProductCategoryKey;
  label: string;
  title: string;
  description: string;
}

export interface ProductHardwareItem {
  key: string;
  name: string;
  role: string;
  positioning: string;
  value: string;
  shortLabel: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export const productCategories: ProductCategory[] = [
  {
    key: 'hardware',
    label: '硬件',
    title: '硬件端口',
    description: '查看三款终端如何分别承担任务决策、复杂执行与空海协同救援角色。',
  },
  {
    key: 'software',
    label: '软件',
    title: '软件端口',
    description: '聚焦 ARC ENGINE 与 ARC Inside 之间的系统关系，理解软件中枢如何驱动整套低空智能能力。',
  },
];

export const productHardwareHero = {
  tag: 'Hardware Gateway',
  title: '精密，且强悍。为极限作业而生的三款硬核先驱。',
  description:
    '基于 ARC Inside 底层内核驱动，实现从边缘算力中心到全自主执行终端的闭环链路，让低空作业不再受限于环境。',
  video: '/media/product-hardware-rescue.mp4',
  fallbackImage: '/media/company-news-feature.jpg',
};

export const productSoftwareHero = {
  tag: 'Software Gateway',
  title: '让 ARC ENGINE 成为整套低空能力的系统中枢',
  description:
    '从任务理解、策略编排到终端协同，把软件能力沉到现场执行链路中，让终端不再只是独立设备，而是统一系统的一部分。',
  image: '/media/arc-module-10.jpg',
};

export const productHardwareItems: ProductHardwareItem[] = [
  {
    key: 'commander',
    name: '指挥官 Commander X1',
    role: '边缘算力中枢',
    positioning: '低空大脑：任务决策与边缘算力的终极形态。',
    value:
      '内置高算力 AI 模块，支持多模态数据实时处理，是集群协同的核心指挥中心。',
    shortLabel: 'Mission Brain',
    image: '/media/commander-x1-product.jpg',
    imageAlt: 'Commander X1',
    imagePosition: 'center 52%',
  },
  {
    key: 'scout',
    name: '尖兵 Scout S1',
    role: '高性能多功能任务执行终端',
    positioning: '全能利刃：在高危与复杂环境下精准降临。',
    value:
      '具备卓越的抗干扰能力与避障精度，支持快速更换挂载，适配测绘、巡检等多种高频实战场景。',
    shortLabel: 'Agile Executor',
    image: '/media/scout-s1-field.jpg',
    imageAlt: 'Scout S1',
    imagePosition: 'center 38%',
  },
  {
    key: 'seal',
    name: '海豹 Seal S1',
    role: '自主水面无人救生艇',
    positioning: '水域先锋：跨域协同，开启空海一体救援新篇章。',
    value:
      '与无人机实现算法级深度耦合，在极端海况下亦能执行快速定位与精准救生任务。',
    shortLabel: 'Marine Rescue',
    image: '/media/seal-usv.jpg',
    imageAlt: 'Seal S1',
    imagePosition: 'center 48%',
  },
];

export const productSoftwareItems = [
  {
    title: 'ARC ENGINE',
    label: '任务中枢',
    description: '负责理解任务目标、组织终端协同并把执行过程纳入统一治理框架。',
    shortLabel: 'Task Brain',
  },
  {
    title: 'ARC Vision',
    label: '感知入口',
    description: '把视觉识别、环境感知与现场反馈整合成系统理解任务的第一层能力。',
    shortLabel: 'Perception',
  },
  {
    title: 'ARC Inside',
    label: '终端内核',
    description: '把软件能力沉到硬件内部，让终端真正具备自主执行、安全控制与协同响应能力。',
    shortLabel: 'Embedded Core',
  },
];

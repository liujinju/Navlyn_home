import {
  AppstoreOutlined,
  GlobalOutlined,
  RadarChartOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons';
import type { ReactNode } from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProductItem {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export interface IndustryItem {
  key: string;
  label: string;
  painPoint: string;
  solution: string;
  outcome: string;
  image: string;
  eyebrow: string;
}

export interface CaseItem {
  title: string;
  region: string;
  summary: string;
  result: string;
}

export const navItems = [
  { key: 'home', label: '首页' },
  { key: 'products', label: '产品体系' },
  { key: 'arc', label: 'ARC OS' },
  { key: 'industries', label: '行业应用' },
  { key: 'about', label: '关于我们' },
];

export const heroHighlights = ['去飞手化', '安全可控', '群体协同'];

export const features: FeatureItem[] = [
  {
    title: '自主引擎研发',
    description: '自研 ARC 引擎，驱动任务理解、规划与执行。',
    icon: <RadarChartOutlined />,
  },
  {
    title: '软硬件一体化',
    description: '终端、平台与数据链路一体协同。',
    icon: <AppstoreOutlined />,
  },
  {
    title: '全场景行业适配',
    description: '聚焦测绘、矿业、工程与应急救援。',
    icon: <GlobalOutlined />,
  },
  {
    title: '全生命周期服务',
    description: '从演示到交付，持续支撑客户落地。',
    icon: <SafetyCertificateOutlined />,
  },
];

export const products: ProductItem[] = [
  {
    name: 'Commander X1',
    subtitle: '任务决策中心',
    description: '高续航指挥机型，面向复杂任务与多机协同。',
    image: '/media/commander-x1.jpg',
    tags: ['边缘算力', '长航时', '多任务协同'],
  },
  {
    name: 'Scout S1',
    subtitle: '高性价比巡查终端',
    description: '轻量巡查终端，适合快速部署与规模化试点。',
    image: '/media/scout-s1.png',
    tags: ['快速拆装', '目标识别', '巡查作业'],
  },
  {
    name: 'Seal USV',
    subtitle: '空海协同扩展终端',
    description: '面向水域巡检与应急救援的多域协同终端。',
    image: '/media/seal-usv.jpg',
    tags: ['空海协同', '应急救援', '多域联动'],
  },
];

export const industries: IndustryItem[] = [
  {
    key: 'surveying',
    label: '测绘',
    painPoint: '大范围作业效率低、数据更新周期长，复杂地形下人工测绘成本高。',
    solution:
      '通过 ARC OS 进行任务规划、航线执行与实时建模，结合指挥机和巡查终端完成高效数据采集。',
    outcome: '形成高精度三维建模成果，缩短作业周期并提升多区域并行能力。',
    image: '/media/commander-x1.jpg',
    eyebrow: 'Surveying & Mapping',
  },
  {
    key: 'construction',
    label: '建筑与工程',
    painPoint: '项目现场变化频繁，传统巡检难以及时发现风险与进度偏差。',
    solution:
      '将无人机巡查、图像识别和任务日志结合，用统一平台管理工程现场状态与任务记录。',
    outcome: '帮助项目团队更快完成巡检闭环和现场可视化管理。',
    image: '/media/scout-s1.png',
    eyebrow: 'Construction & Engineering',
  },
  {
    key: 'mining',
    label: '矿业与资源',
    painPoint: '矿区范围广、道路条件复杂，应急与生产监管需要并行推进。',
    solution:
      '通过广域测绘、空中巡检和事件协同调度，建立低空运行与矿区治理的一体化方案。',
    outcome: '降低人力巡检压力，提升矿区生产监管和应急处置效率。',
    image: '/media/commander-x1.jpg',
    eyebrow: 'Mining & Resources',
  },
  {
    key: 'emergency',
    label: '应急救援',
    painPoint: '通信中断、道路受阻和现场环境复杂时，传统救援调度效率受限。',
    solution:
      '使用语音意图下达、空海协同执行和任务编排能力，快速完成搜索、定位与救援支援。',
    outcome: '提升复杂灾害场景中的任务响应速度与跨设备协同能力。',
    image: '/media/seal-usv.jpg',
    eyebrow: 'Emergency Response',
  },
];

export const cases: CaseItem[] = [
  {
    title: '马达加斯加智慧矿区',
    region: '矿业治理',
    summary: '广域测绘与空中巡检联动。',
    result: '形成可执行、可复盘、可交付的一体化系统能力。',
  },
  {
    title: '多哥洛美港海空协同巡检',
    region: '港口巡检',
    summary: '港口巡检与应急救援协同升级。',
    result: '帮助客户建立全天候巡检与协同响应能力。',
  },
  {
    title: '南湖救援实景演示',
    region: '应急救援',
    summary: '从搜索到救援的自动任务闭环演示。',
    result: '展示空海协同搜救与任务自动编排的完整流程。',
  },
];

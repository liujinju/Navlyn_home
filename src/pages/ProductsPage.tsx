import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const productSystemItems = [
  {
    key: 'commander',
    theme: 'is-commander',
    tag: 'Mission Brain',
    mark: 'Commander',
    name: '指挥官 Commander X1',
    role: '边缘算力中枢 / 任务决策中心',
    summary:
      '面向复杂任务理解、设备调度与多节点协同，承担整个任务链路中的决策与编排角色。',
    intro:
      'Commander X1 负责把任务意图拆解成可执行动作，并将空中多节点能力组织成一套协同系统，是整个低空作业链路中的核心中枢。',
    capabilities: [
      '任务解构：理解模糊指令，自动拆解并分配给巡查机执行。',
      '实时建图：汇总从机地图数据，生成全局态势图。',
      '自主安全：具备抗干扰与无 GPS 导航能力。',
    ],
    scenarios: ['大范围测绘', '设施巡检', '物流投送', '应急救援'],
    specs: [
      ['翼展', '3 米'],
      ['最大起飞重量', '19 kg'],
      ['载荷', '3.5 kg'],
      ['航行速度', '65 - 85 km/h'],
      ['飞行时间', '3 小时'],
      ['快速拆装', '3 分钟'],
    ],
    heroImage: '/media/commander-x1-field.jpg',
    heroAlt: 'Commander X1 runway view',
    heroPosition: 'center 58%',
    stageLabel: 'Core Platform Terminal',
    gallery: [
      {
        src: '/media/commander-x1-product.jpg',
        alt: 'Commander X1 kit',
        position: 'center center',
      },
      {
        src: '/media/commander-x1-render.png',
        alt: 'Commander X1 render',
        position: 'center 52%',
      },
    ],
  },
  {
    key: 'scout',
    theme: 'is-scout',
    tag: 'Agile Executor',
    mark: 'Scout',
    name: '尖兵 Scout S1',
    role: '高性价比多功能任务执行终端',
    summary:
      '强调快速部署、稳定执行与多场景适配，是面向规模化作业和日常巡检的高频执行终端。',
    intro:
      'Scout S1 聚焦高频任务执行，用更轻量的机体、更快的部署效率和更稳定的作业表现覆盖安防、巡检、矿区与设施检查等一线场景。',
    capabilities: [
      '目标识别：支持现场目标识别与任务触发。',
      '智能跟随：面向动态巡查与伴随作业自动执行。',
      '自动避障与多机协同：满足群体智能协作需求。',
    ],
    scenarios: ['日常安防巡逻', '公路巡检', '智慧矿区', '精细化设施检查'],
    specs: [
      ['翼展', '1.7 米'],
      ['最大起飞重量', '4.5 kg'],
      ['载荷', '800 g'],
      ['航行速度', '57 - 80 km/h'],
      ['飞行时间', '2 小时'],
      ['快速拆装', '1 分钟'],
    ],
    heroImage: '/media/scout-s1-field.jpg',
    heroAlt: 'Scout S1 field kit',
    heroPosition: 'center 54%',
    stageLabel: 'Rapid Field Deployment',
    gallery: [
      {
        src: '/media/scout-s1.png',
        alt: 'Scout S1 top render',
        position: 'center center',
      },
      {
        src: '/media/scout-s1-front.png',
        alt: 'Scout S1 front render',
        position: 'center 46%',
      },
    ],
  },
  {
    key: 'seal',
    theme: 'is-seal',
    tag: 'Surface Rescue',
    mark: 'Seal',
    name: '海豹 Seal S1',
    role: '自主水面无人救生艇',
    summary:
      '为水域环境与应急场景提供自主执行能力，和空中终端形成空海联动的任务闭环。',
    intro:
      'Seal S1 是航链科技空海协同体系中的水面执行终端，面向落水救援、水域巡逻与应急支援场景构建自主救生能力。',
    capabilities: [
      '落水人员识别：快速识别人、船、障碍等关键目标。',
      '自动避障：在复杂水域环境中保持安全航行。',
      '空海联动：与空中终端协同执行搜救任务。',
    ],
    scenarios: ['江河救援', '湖泊巡逻', '海滩救生', '应急协同处置'],
    specs: [
      ['尺寸', '1000 x 700 x 248 mm'],
      ['重量', '15.9 kg'],
      ['航速', '7 m/s'],
      ['拖曳能力', '1000 kg'],
      ['遥控距离', '1403 m'],
      ['防水等级', '艇体 / 遥控器均为 IP67'],
    ],
    heroImage: '/media/seal-s1-product.jpg',
    heroAlt: 'Seal S1 rescue craft',
    heroPosition: 'center center',
    stageLabel: 'Surface Rescue Unit',
    gallery: [
      {
        src: '/media/seal-usv.jpg',
        alt: 'Seal S1 rescue craft render',
        position: 'center center',
      },
    ],
  },
];

function splitFeature(text: string) {
  const parts = text.split('：');
  if (parts.length === 1) {
    return { label: '', body: text };
  }

  return {
    label: parts[0],
    body: parts.slice(1).join('：'),
  };
}

export default function ProductsPage() {
  const [primaryProduct] = productSystemItems;

  return (
    <SiteLayout
      title="Navlyn 产品体系 | 航链科技"
      description="查看 Navlyn 航链科技三款核心产品：指挥官 Commander X1、尖兵 Scout S1 与海豹 Seal S1。"
      hero={
        <section className="product-page-hero">
          <div className="product-page-hero-media">
            <img
              src={primaryProduct.heroImage}
              alt={primaryProduct.heroAlt}
              style={{ objectPosition: primaryProduct.heroPosition }}
            />
          </div>
          <div className="product-page-hero-overlay" />
          <div className="product-page-hero-shell">
            <div className="product-page-hero-copy">
              <Text className="product-page-hero-tag">Product System</Text>
              <Title>空海协同终端矩阵</Title>
              <Paragraph>
                以 Commander、Scout 与 Seal 覆盖任务决策、高频执行与水域协同，形成完整产品体系。
              </Paragraph>
              <div className="route-hero-actions">
                <a href="#commander" className="route-hero-action is-primary">
                  查看产品详情
                </a>
                <Link to="/contact" className="route-hero-action">
                  预约产品演示
                </Link>
              </div>
            </div>

            <div className="product-family-nav">
              {productSystemItems.map((item) => (
                <a key={item.key} href={`#${item.key}`} className={`product-family-link ${item.theme}`}>
                  <span className="product-family-link-tag">{item.tag}</span>
                  <strong>{item.name}</strong>
                  <em>{item.role}</em>
                </a>
              ))}
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section product-chapters">
        {productSystemItems.map((item, index) => (
          <article
            key={item.key}
            id={item.key}
            className={`product-chapter ${item.theme}${index % 2 === 1 ? ' is-reverse' : ''}`}
          >
            <div className="product-chapter-mark">{item.mark}</div>
            <div className="product-chapter-main">
              <div className="product-chapter-copy">
                <Text className="product-chapter-tag">{item.tag}</Text>
                <Title level={2}>{item.name}</Title>
                <Paragraph className="product-chapter-role">{item.role}</Paragraph>
                <Paragraph className="product-chapter-intro">{item.intro}</Paragraph>

                <Text className="product-chapter-subhead">关键参数</Text>
                <div className="product-chapter-quick-specs">
                  {item.specs.slice(0, 3).map(([label, value]) => (
                    <div key={label} className="product-chapter-quick-spec">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>

                <Text className="product-chapter-subhead">核心能力</Text>
                <div className="product-chapter-features">
                  {item.capabilities.map((feature) => {
                    const { label, body } = splitFeature(feature);

                    return (
                      <div key={feature} className="product-chapter-feature">
                        {label ? <strong>{label}</strong> : null}
                        <span>{body}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="product-chapter-visual">
                <div className="product-chapter-hero-media">
                  <img
                    src={item.heroImage}
                    alt={item.heroAlt}
                    style={{ objectPosition: item.heroPosition }}
                  />
                  <div className="product-chapter-media-label">{item.stageLabel}</div>
                </div>

                <div
                  className={`product-chapter-gallery${
                    item.gallery.length === 1 ? ' is-single' : ''
                  }`}
                >
                  {item.gallery.map((media) => (
                    <div key={media.src} className="product-chapter-gallery-media">
                      <img
                        src={media.src}
                        alt={media.alt}
                        style={{ objectPosition: media.position }}
                      />
                      <div className="product-chapter-media-label is-secondary">Detail View</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="product-chapter-footer">
              <div className="product-chapter-scenarios">
                <Text className="product-chapter-section-label">应用场景</Text>
                <div className="product-chapter-chip-row">
                  {item.scenarios.map((scenario) => (
                    <span key={scenario} className="product-chapter-chip">
                      {scenario}
                    </span>
                  ))}
                </div>
                <Paragraph>{item.summary}</Paragraph>
              </div>

              <div className="product-chapter-specs">
                <Text className="product-chapter-section-label">硬件参数</Text>
                <div className="product-chapter-spec-grid">
                  {item.specs.map(([label, value]) => (
                    <div key={label} className="product-chapter-spec-item">
                      <span>{label}</span>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteLayout>
  );
}

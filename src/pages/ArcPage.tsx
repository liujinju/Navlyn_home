import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const arcCapabilityCards = [
  {
    key: 'interaction',
    eyebrow: 'Multimodal',
    title: '多模态交互',
    description: '从遥控器操作升级到意图输入，让系统先理解任务，再组织执行。',
    image: '/media/arc-module-06.jpg',
    imageAlt: 'ARC OS multimodal interaction',
    imagePosition: 'center center',
  },
  {
    key: 'collaboration',
    eyebrow: 'Collaboration',
    title: '多机协同',
    description: '把单机能力扩展成跨域协同能力，在复杂任务中统一编排空海终端。',
    image: '/media/arc-module-07.jpg',
    imageAlt: 'ARC OS multi-agent collaboration',
    imagePosition: 'center center',
  },
  {
    key: 'governance',
    eyebrow: 'Governance',
    title: '安全可控',
    description: '把本体安全、权限分级、策略控制和责任追溯纳入同一套治理体系。',
    image: '/media/arc-module-08.jpg',
    imageAlt: 'ARC OS safety governance',
    imagePosition: 'center center',
  },
];

const arcArchitecturePillars = [
  {
    name: 'ARC Vision',
    role: '感知入口',
    description: '连接现场传感器、视觉识别与环境理解能力，让系统先看懂场景。',
  },
  {
    name: 'ARC OS',
    role: '任务中枢',
    description: '承担任务理解、策略路由、设备编排与执行闭环，是整套系统的大脑。',
  },
  {
    name: 'ARC Inside',
    role: '终端落地',
    description: '把智能能力装入终端设备，在边缘侧完成执行、安全与协同控制。',
  },
];

const arcWorkflowStages = [
  {
    step: '01',
    title: '输入任务目标',
    description: '以自然语言、任务模板或标准流程输入目标，让系统先理解任务意图。',
  },
  {
    step: '02',
    title: '识别场景与约束',
    description: '综合环境、设备状态与权限规则，自动判断当前场景的执行边界。',
  },
  {
    step: '03',
    title: '生成执行编排',
    description: '把终端、模型和路线组织成一套可执行计划，统一编排空海协同。',
  },
  {
    step: '04',
    title: '结果回传与持续学习',
    description: '把执行数据、人工干预和结果回流为系统经验，持续优化模型与策略。',
  },
];

export default function ArcPage() {
  return (
    <SiteLayout
      title="ARC OS | Navlyn 航链科技"
      description="了解 ARC OS 如何把去飞手化、安全可控和群体协同落到低空经济场景。"
      hero={
        <section className="arc-page-hero">
          <div className="arc-page-hero-media">
            <img src="/media/arc-module-11.jpg" alt="ARC OS hero" />
          </div>
          <div className="arc-page-hero-overlay" />
          <div className="arc-page-hero-shell">
            <div className="arc-page-hero-copy">
              <Text className="arc-page-hero-tag">ARC OS</Text>
              <Title>低空智能操作系统</Title>
              <Paragraph>让低空能力从单机工具升级为可理解、可治理、可持续进化的系统平台。</Paragraph>
              <div className="route-hero-actions">
                <a href="#arc-architecture" className="route-hero-action is-primary">
                  查看系统架构
                </a>
                <Link to="/contact" className="route-hero-action">
                  预约系统演示
                </Link>
              </div>
            </div>

            <div className="arc-page-hero-nav">
              <a href="#arc-architecture" className="arc-page-hero-link">
                <span>Architecture</span>
                <strong>软硬一体 AI 平台</strong>
              </a>
              <a href="#arc-capabilities" className="arc-page-hero-link">
                <span>Capabilities</span>
                <strong>三项核心系统能力</strong>
              </a>
              <a href="#arc-loop" className="arc-page-hero-link">
                <span>Learning Loop</span>
                <strong>系统越用越聪明</strong>
              </a>
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section arc-spotlight" id="arc-architecture">
        <div className="arc-spotlight-copy">
          <Text className="panel-label">System Architecture</Text>
          <Title level={2}>以 ARC 为中枢，连接终端、模型与治理逻辑</Title>
          <Paragraph>
            ARC Vision 承担“眼睛”，ARC OS 承担“大脑”，ARC Inside 承担“身体”。从边缘感知到任务编排、模型路由和安全治理，构成一套软硬一体的 AI 平台。
          </Paragraph>
          <div className="arc-architecture-grid">
            {arcArchitecturePillars.map((item) => (
              <div key={item.name} className="arc-architecture-card">
                <Text className="arc-architecture-name">{item.name}</Text>
                <strong>{item.role}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="arc-spotlight-media">
          <img src="/media/arc-module-10.jpg" alt="ARC OS architecture" />
        </div>
      </section>

      <section className="page-section arc-capabilities-section" id="arc-capabilities">
        <div className="section-heading">
          <Text className="news-page-kicker">Capabilities</Text>
          <Title level={2}>ARC OS 的三项系统能力</Title>
        </div>

        <div className="arc-capability-grid">
          {arcCapabilityCards.map((item) => (
            <article key={item.key} className="arc-capability-card">
              <div className="arc-capability-media">
                <img src={item.image} alt={item.imageAlt} style={{ objectPosition: item.imagePosition }} />
              </div>
              <div className="arc-capability-overlay" />
              <div className="arc-capability-copy">
                <Text className="arc-capability-eyebrow">{item.eyebrow}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section arc-learning-band" id="arc-loop">
        <div className="arc-learning-media">
          <img src="/media/arc-module-09.jpg" alt="ARC OS learning loop" />
        </div>
        <div className="arc-learning-overlay" />
        <div className="arc-learning-copy">
          <Text className="panel-label">Learning Loop</Text>
          <Title level={2}>每一次人工操作，都在训练 ARC 模型</Title>
          <Paragraph>
            ARC OS 不只是执行任务，也会沉淀经验。随着任务数据、交互行为和执行结果不断回流，系统能够在真实场景中持续优化策略与能力。
          </Paragraph>
        </div>
      </section>

      <section className="page-section arc-flow-section">
        <div className="section-heading">
          <Text className="news-page-kicker">Workflow</Text>
          <Title level={2}>从意图输入到结果回传的执行闭环</Title>
        </div>

        <div className="arc-flow-grid">
          {arcWorkflowStages.map((item) => (
            <article key={item.step} className="arc-flow-card">
              <Text className="arc-flow-step">{item.step}</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section route-cta-section arc-system-cta">
        <div className="route-cta-copy arc-system-cta-copy">
          <Text className="news-page-kicker">Next Step</Text>
          <Title level={2}>想把 ARC OS 放进你的业务现场？</Title>
          <Paragraph>
            继续查看产品体系，了解终端如何与 ARC OS 协同，或者直接预约一次系统演示，现场走一遍任务编排与执行闭环。
          </Paragraph>
        </div>
        <div className="route-cta-actions arc-system-cta-actions">
          <Link className="product-entry-link" to="/products">
            查看产品体系
          </Link>
          <Link className="product-entry-link product-system-cta-secondary" to="/contact">
            预约系统演示
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

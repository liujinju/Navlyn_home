import { Typography } from 'antd';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const arcKeywords = [
  {
    label: 'Autonomous',
    value: '全时自主',
    description: '从任务理解到执行编排，系统尽可能把重复操作转化为自动化工作流。',
  },
  {
    label: 'Reliable',
    value: '极致可靠',
    description: '围绕权限治理、安全边界与系统稳定性，把复杂场景下的执行风险压到可控范围。',
  },
  {
    label: 'Collaborative',
    value: '群体协同',
    description: '把空中终端、水面终端与现场操作统一编排，让系统能力真正落到多域任务里。',
  },
];

export default function ArcPage() {
  return (
    <SiteLayout
      title="ARC ENGINE | Navlyn 航链科技"
      description="查看 NAVLYN ARC 如何重塑低空作业的大脑，并通过 Learning Loop 持续进化。"
      hero={
        <section className="doc-arc-hero">
          <div className="doc-arc-hero-media">
            <video src="/media/arc-engine-release.mp4" poster="/media/arc-module-11.jpg" autoPlay muted loop playsInline />
          </div>
          <div className="doc-arc-hero-overlay" />
          <div className="doc-arc-hero-shell">
            <div className="doc-arc-hero-copy">
              <Text className="doc-arc-hero-tag">ARC ENGINE</Text>
              <Title>NAVLYN ARC：重塑低空作业的“大脑”</Title>
              <Paragraph>从“遥控执行”进化至“意图决策”。基于 AI 驱动的自主飞行架构，让每一架无人机拥有专业飞手的直觉。</Paragraph>
            </div>
            <div className="doc-arc-tags">
              {arcKeywords.map((item) => (
                <article key={item.label} className="doc-arc-tag-card">
                  <Text>{item.label}</Text>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section doc-arc-stage">
        <div className="doc-arc-stage-media">
          <img src="/media/arc-module-10.jpg" alt="ARC ENGINE system architecture" />
        </div>
        <div className="doc-arc-stage-copy">
          <Text className="news-page-kicker">System View</Text>
          <Title level={2}>把任务理解、系统治理与终端协同收敛到同一套智能中枢</Title>
          <Paragraph>ARC ENGINE 不再只是一个操作台，而是一套让终端理解意图、自动编排并持续反馈学习的低空智能系统。</Paragraph>
          <div className="doc-arc-stage-points">
            {arcKeywords.map((item) => (
              <article key={item.label} className="doc-arc-stage-point">
                <strong>{item.value}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section doc-learning-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Learning Loop</Text>
          <Title level={2}>每一次飞行都在进化</Title>
          <Paragraph>人工操作数据实时反馈至 ARC 模型，驱动算法自主迭代；从数据到资产，把行业 Know-how 沉淀为可复用、可扩展的知识系统，让技术真正转化为生产力。</Paragraph>
        </div>
        <div className="doc-learning-band">
          <div className="doc-learning-band-media">
            <img src="/media/arc-module-09.jpg" alt="Learning loop" />
          </div>
          <div className="doc-learning-band-copy">
            <div className="doc-learning-band-point">
              <strong>每一次飞行都在进化</strong>
              <p>现场反馈、人工干预与执行结果持续回流，让模型始终在真实任务里成长。</p>
            </div>
            <div className="doc-learning-band-point">
              <strong>从数据到资产</strong>
              <p>把零散经验沉淀为知识系统，让后续项目、客户与行业复制建立在同一套能力底座上。</p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

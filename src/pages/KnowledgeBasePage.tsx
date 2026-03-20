import { Typography } from 'antd';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const knowledgeTopics = [
  {
    title: '系统能力解析',
    description: '围绕 ARC ENGINE 的任务理解、系统治理、群体协同与安全机制，建立更结构化的系统认知。',
    points: ['任务意图理解', '多终端协同', '系统治理与权限控制'],
  },
  {
    title: '产品与交付资料',
    description: '沉淀指挥官、尖兵、海豹三类终端的产品定位、部署方式、交付流程与现场实施经验。',
    points: ['硬件矩阵说明', '典型部署方式', '交付实施清单'],
  },
  {
    title: '行业方法论',
    description: '把测绘、工程、矿业、生态巡护与应急救援中的项目经验整理成可复用的行业模板。',
    points: ['行业痛点拆解', '方案构成逻辑', '结果复盘方法'],
  },
];

export default function KnowledgeBasePage() {
  return (
    <SiteLayout
      title="知识库 | Navlyn 航链科技"
      description="查看 Navlyn 的系统资料、产品说明与行业方法论，建立对低空智能体系的完整认知。"
      hero={
        <section className="knowledge-page-hero">
          <div className="knowledge-page-hero-media">
            <img src="/media/arc-module-09.jpg" alt="Navlyn knowledge base" />
          </div>
          <div className="knowledge-page-hero-overlay" />
          <div className="knowledge-page-hero-shell">
            <div className="knowledge-page-hero-copy">
              <Text className="knowledge-page-hero-tag">Knowledge Base</Text>
              <Title>把系统资料、产品知识与行业方法论沉淀为长期资产</Title>
              <Paragraph>
                从 ARC ENGINE 到终端矩阵，从项目交付到行业模板，把关键认知整理成可查阅、可复用、可持续扩展的知识系统。
              </Paragraph>
            </div>

            <div className="knowledge-page-hero-nav">
              <a href="#knowledge-overview" className="knowledge-page-hero-link knowledge-page-hero-link-featured">
                <span>Overview</span>
                <strong>系统知识全景</strong>
              </a>
              <a href="#knowledge-stream" className="knowledge-page-hero-link">
                <span>Tracks</span>
                <strong>三条内容主线</strong>
              </a>
              <a href="#knowledge-method" className="knowledge-page-hero-link">
                <span>Method</span>
                <strong>如何组织与复用</strong>
              </a>
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section knowledge-stage" id="knowledge-overview">
        <div className="knowledge-stage-media">
          <img src="/media/product-entry-arc-os.jpg" alt="Knowledge overview" />
        </div>
        <div className="knowledge-stage-overlay" />
        <div className="knowledge-stage-shell">
          <div className="knowledge-stage-copy">
            <Text className="panel-label">Knowledge Overview</Text>
            <Title level={2}>知识库不是资料堆叠，而是帮助客户与团队快速建立共识的系统入口</Title>
            <Paragraph>
              用系统能力、产品资料和行业方法论三条主线，把低空智能从概念介绍沉淀为一套可查、可讲、可复盘的统一知识框架。
            </Paragraph>
          </div>

          <div className="knowledge-stage-grid">
            {knowledgeTopics.map((item) => (
              <article key={item.title} className="knowledge-stage-card">
                <Text className="knowledge-stage-label">Knowledge</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section knowledge-stream" id="knowledge-stream">
        <div className="section-heading">
          <Text className="news-page-kicker">Knowledge Tracks</Text>
          <Title level={2}>三条内容主线，覆盖系统理解、产品交付与行业落地</Title>
          <Paragraph>把知识组织成连续阅读的主线，而不是分散的资料碎片，后续无论扩展中英文还是内容中心都更容易承接。</Paragraph>
        </div>

        <div className="knowledge-stream-list">
          {knowledgeTopics.map((item) => (
            <article key={item.title} className="knowledge-stream-item">
              <div className="knowledge-stream-head">
                <Text className="panel-label">Track</Text>
                <Title level={3}>{item.title}</Title>
              </div>
              <div className="knowledge-stream-body">
                <Paragraph>{item.description}</Paragraph>
                <div className="knowledge-stream-points">
                  {item.points.map((point) => (
                    <div key={point} className="knowledge-stream-point">
                      <span />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section knowledge-method" id="knowledge-method">
        <div className="knowledge-method-shell">
          <div className="knowledge-method-copy">
            <Text className="news-page-kicker">How It Works</Text>
            <Title level={2}>先建立统一认知，再让销售、合作与交付共用同一套表达</Title>
            <Paragraph>
              这套知识结构既服务官网内容，也服务内部讲解、合作沟通与项目复盘。后续只需要继续补真实资料，就可以自然扩展为内容中心。
            </Paragraph>
          </div>
          <div className="knowledge-method-steps">
            <div className="knowledge-method-step">
              <strong>系统层</strong>
              <span>解释 ARC ENGINE 如何理解、编排与治理任务。</span>
            </div>
            <div className="knowledge-method-step">
              <strong>产品层</strong>
              <span>串起空海终端矩阵、部署方式与交付资料。</span>
            </div>
            <div className="knowledge-method-step">
              <strong>行业层</strong>
              <span>沉淀典型场景、复盘逻辑和可复用方案模板。</span>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

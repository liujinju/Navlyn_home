import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { knowledgeEditorialCards, knowledgeLandingMetrics, knowledgeTracks } from '../data/documentLanding';
import SiteLayout from '../layouts/SiteLayout';
import { knowledgeSubpages } from '../data/subpages';

const { Title, Paragraph, Text } = Typography;

export default function KnowledgeBasePage() {
  return (
    <SiteLayout
      title="知识库 | Navlyn 航链科技"
      description="查看 Navlyn 知识库的二级页面结构与后续更新入口。"
      hero={
        <ImmersivePageHero
          prefix="knowledge-page-hero"
          media={<img src="/media/arc-module-09.jpg" alt="Navlyn knowledge base" />}
          tag="Knowledge Base"
          title="知识库"
          description="围绕科研文章、成功案例、行业动态、资料下载与帮助中心，逐步建立 Navlyn 的公开知识表达体系。"
        />
      }
    >
      <section className="page-section doc-overview-stage">
        <SubpageTabNav items={knowledgeSubpages} />
        <div className="doc-metric-grid">
          {knowledgeLandingMetrics.map((item) => (
            <article key={item.label} className="doc-metric-card">
              <Text className="panel-label">{item.label}</Text>
              <strong>{item.value}</strong>
              <Paragraph>{item.detail}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section doc-knowledge-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Knowledge Framework</Text>
          <Title level={2}>知识库不只是资料仓库，而是内容主线的搭建</Title>
          <Paragraph>
            这一页先把知识主线搭稳：科研文章负责系统表达，成功案例负责场景复盘，行业动态负责趋势观察，资料下载与帮助中心负责对外支持。
          </Paragraph>
        </div>
        <div className="doc-knowledge-layout">
          <article className="doc-knowledge-intro">
            <Text className="panel-label">Editorial Structure</Text>
            <Title level={3}>先建立结构，再逐项填内容</Title>
            <Paragraph>
              先把知识库的栏目关系、表达层级和内容入口建立完整。后续无论接文章、案例、白皮书还是帮助文档，都能落到这套结构里。
            </Paragraph>
            <Paragraph>
              这样做的目标不是临时占位，而是把知识表达、行业传播和交付支持沉淀成同一套内容系统。
            </Paragraph>
          </article>
          <div className="doc-knowledge-tracks">
            {knowledgeTracks.map((item) => (
              <article key={item.title} className="doc-knowledge-track">
                <Text className="panel-label">{item.eyebrow}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="doc-editorial-grid">
          {knowledgeEditorialCards.map((item) => (
            <Link key={item.path} className="doc-editorial-card" to={item.path}>
              <Text className="panel-label">{item.eyebrow}</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <span>{item.accent}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="page-section doc-subpage-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Subpages</Text>
          <Title level={2}>知识库子菜单</Title>
          <Paragraph>以统一结构承接各类知识内容入口，后续可围绕行业、技术与资料逐项扩展，持续丰富内容体系。</Paragraph>
        </div>
        <div className="doc-subpage-grid">
          {knowledgeSubpages.map((item) => (
            <Link key={item.path} className="doc-subpage-card" to={item.path}>
              <Text className="panel-label">Knowledge</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <span>进入页面</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

import { Typography } from 'antd';
import { useState } from 'react';
import SiteLayout from '../layouts/SiteLayout';
import { industryPageHero, industryScenarioItems } from '../data/industries';

const { Title, Paragraph, Text } = Typography;

export default function IndustriesPage() {
  const [activeKey, setActiveKey] = useState(industryScenarioItems[0].key);
  const activeItem = industryScenarioItems.find((item) => item.key === activeKey) ?? industryScenarioItems[0];

  return (
    <SiteLayout
      title="行业应用 | Navlyn 航链科技"
      description="通过标签卡片切换巡检、农业、能源、矿业、建筑与海洋作业等行业场景。"
      hero={
        <section className="doc-industries-hero">
          <div className="doc-industries-hero-media">
            <img src={activeItem.image} alt={activeItem.imageAlt} style={{ objectPosition: activeItem.imagePosition }} />
          </div>
          <div className="doc-industries-hero-overlay" />
          <div className="doc-industries-hero-shell">
            <div className="doc-industries-hero-copy">
              <Text className="doc-industries-hero-tag">{industryPageHero.tag}</Text>
              <Title>{industryPageHero.title}</Title>
              <Paragraph>{industryPageHero.description}</Paragraph>
            </div>
            <div className="doc-industry-card-rail">
              {industryScenarioItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`doc-industry-card${item.key === activeKey ? ' is-active' : ''}`}
                  onClick={() => setActiveKey(item.key)}
                >
                  <div className="doc-industry-card-media">
                    <img src={item.image} alt={item.imageAlt} style={{ objectPosition: item.imagePosition }} />
                  </div>
                  <div className="doc-industry-card-overlay" />
                  <div className="doc-industry-card-copy">
                    <span>{item.label}</span>
                    <strong>{item.metric}</strong>
                    <em>{item.statement}</em>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section doc-industry-detail-stage">
        <div className="doc-industry-detail-media">
          <img src={activeItem.image} alt={activeItem.imageAlt} style={{ objectPosition: activeItem.imagePosition }} />
        </div>
        <div className="doc-industry-detail-copy">
          <Text className="news-page-kicker">{activeItem.label}</Text>
          <Title level={2}>{activeItem.statement}</Title>
          <div className="doc-industry-detail-points">
            <article>
              <strong>硬核指标</strong>
              <p>{activeItem.metric}</p>
            </article>
            <article>
              <strong>结果表达</strong>
              <p>{activeItem.metricDetail}</p>
            </article>
            <article>
              <strong>技术支撑点</strong>
              <p>{activeItem.support}</p>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

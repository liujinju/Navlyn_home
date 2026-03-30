import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { partnerLandingMetrics, partnerModeCards, partnerPreviewCards } from '../data/documentLanding';
import SiteLayout from '../layouts/SiteLayout';
import { partnerSubpages } from '../data/subpages';
import { globalRegions, partnerBrandWall, partnerQuotes } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersPage() {
  return (
    <SiteLayout
      title="客户与合作 | Navlyn 航链科技"
      description="查看 Navlyn 客户与合作页面下的合作伙伴与全球经销商入口。"
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src="/media/about-team-collab.jpg" alt="Navlyn partners" />}
          tag="Customers & Partners"
          title="客户与合作"
          description="聚焦合作伙伴与全球经销商两类内容，先把页面结构搭稳，再继续补合作品牌、地图与联系人信息。"
        />
      }
    >
      <section className="page-section doc-overview-stage">
        <SubpageTabNav items={partnerSubpages} />
        <div className="doc-metric-grid">
          {partnerLandingMetrics.map((item) => (
            <article key={item.label} className="doc-metric-card">
              <Text className="panel-label">{item.label}</Text>
              <strong>{item.value}</strong>
              <Paragraph>{item.detail}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section doc-partner-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Partner Overview</Text>
          <Title level={2}>从品牌合作到本地经销，先把合作网络框架搭稳</Title>
          <Paragraph>
            父页先承担总览作用：上承品牌表达与合作价值，下接合作伙伴和全球经销商两条子栏目，方便后续继续补 Logo、城市、联系方式和联合项目内容。
          </Paragraph>
        </div>
        <div className="doc-partner-overview-grid">
          <article className="doc-partner-surface">
            <Text className="panel-label">Alliance Snapshot</Text>
            <Title level={3}>合作生态总览</Title>
            <Paragraph>
              当前先用品牌墙和覆盖区域表达合作网络轮廓，后续再逐步替换成真实合作伙伴 Logo、项目案例与经销商联系人信息。
            </Paragraph>
            <div className="doc-logo-wall doc-logo-wall-compact">
              {partnerBrandWall.slice(0, 6).map((item) => (
                <div key={item} className="doc-logo-chip">
                  {item}
                </div>
              ))}
            </div>
          </article>
          <div className="doc-partner-aside">
            <article className="doc-partner-quote-card">
              <Text className="panel-label">Partner Voice</Text>
              <Paragraph>“{partnerQuotes[0]?.quote}”</Paragraph>
              <strong>{partnerQuotes[0]?.name}</strong>
              <span>{partnerQuotes[0]?.title}</span>
            </article>
            <article className="doc-region-card">
              <Text className="panel-label">Coverage</Text>
              <Title level={3}>当前覆盖区域</Title>
              <div className="doc-region-list">
                {globalRegions.map((region) => (
                  <div key={region.name} className="doc-region-item">
                    <strong>{region.name}</strong>
                    <span>{region.locations}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section doc-subpage-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Collaboration Modes</Text>
          <Title level={2}>合作网络会沿着这三条路径继续展开</Title>
          <Paragraph>品牌合作、区域经销和项目共创分别对应不同合作关系。当前先把结构搭清楚，后续再接真实品牌、国家和项目内容。</Paragraph>
        </div>
        <div className="doc-editorial-grid">
          {partnerModeCards.map((item) => (
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
          <Title level={2}>客户与合作子菜单</Title>
          <Paragraph>合作伙伴与全球经销商分别承接品牌合作和区域经销两条主线，父页先完成总览，子页再逐项补齐细节资料。</Paragraph>
        </div>
        <div className="doc-partner-preview-grid">
          {partnerPreviewCards.map((item) => (
            <Link key={item.path} className="doc-partner-preview-card" to={item.path}>
              <Text className="panel-label">{item.eyebrow}</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <span>{item.accent}</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

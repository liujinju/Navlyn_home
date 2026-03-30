import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import SiteLayout from '../layouts/SiteLayout';
import { partnerSubpages } from '../data/subpages';
import { distributorMarkers } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersDistributorsPage() {
  return (
    <SiteLayout
      title="全球经销商 | Navlyn 航链科技"
      description="查看 Navlyn 全球经销商页面框架与地图信息占位。"
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src="/media/company-news-briefing.jpg" alt="Navlyn distributors" />}
          tag="Customers & Partners"
          title="全球经销商"
          description="世界地图、国家城市与代理商联系方式将在经销商名单齐备后继续接入，当前先建立展示框架。"
        />
      }
    >
      <section className="page-section doc-distributor-stage">
        <SubpageTabNav items={partnerSubpages} />
        <div className="section-heading">
          <Text className="news-page-kicker">Map Layout</Text>
          <Title level={2}>世界地图与代理商信息框架</Title>
          <Paragraph>这一页按文档先建立“世界地图 + 小旗子 + 城市与联系方式”的承接框架，当前以区域卡片形式占位。</Paragraph>
        </div>
        <div className="doc-distributor-board">
          <div className="doc-distributor-map">
            <div className="doc-distributor-glow" />
            {distributorMarkers.map((item) => (
              <div key={`${item.region}-${item.city}`} className="doc-distributor-pin">
                <span>{item.flag}</span>
                <strong>{item.region}</strong>
              </div>
            ))}
          </div>
          <div className="doc-distributor-list">
            {distributorMarkers.map((item) => (
              <article key={`${item.region}-${item.city}`} className="doc-distributor-item">
                <div className="doc-distributor-head">
                  <span>{item.flag}</span>
                  <strong>{item.region}</strong>
                </div>
                <p>{item.city}</p>
                <em>{item.note}</em>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

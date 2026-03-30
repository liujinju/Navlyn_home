import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import SiteLayout from '../layouts/SiteLayout';
import { partnerSubpages } from '../data/subpages';
import { partnerBrandWall } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersAlliancesPage() {
  return (
    <SiteLayout
      title="合作伙伴 | Navlyn 航链科技"
      description="查看 Navlyn 合作伙伴页面框架与合作品牌展示区。"
      hero={
        <ImmersivePageHero
          prefix="partners-page-hero"
          media={<img src="/media/about-team-collab.jpg" alt="Navlyn alliances" />}
          tag="Customers & Partners"
          title="合作伙伴"
          description="合作伙伴页先建立大标题与品牌展示区框架，后续继续替换真实 Logo、联合项目与合作说明。"
        />
      }
    >
      <section className="page-section doc-partner-stage">
        <SubpageTabNav items={partnerSubpages} />
        <div className="section-heading">
          <Text className="news-page-kicker">Logo Wall</Text>
          <Title level={2}>合作品牌展示区</Title>
          <Paragraph>文档要求这一页以大标题和 Logo 墙为核心。当前先建立品牌墙结构，等待后续真实合作标识与项目内容接入。</Paragraph>
        </div>
        <div className="doc-logo-wall">
          {partnerBrandWall.map((item) => (
            <div key={item} className="doc-logo-chip">
              {item}
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

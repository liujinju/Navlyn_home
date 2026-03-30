import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import UpdatePageState from '../components/UpdatePageState';
import SiteLayout from '../layouts/SiteLayout';
import { aboutSubpages, careerPreviewCards } from '../data/subpages';

const { Title, Paragraph, Text } = Typography;

const careerHighlights = [
  '围绕飞行智能体、系统平台与国际合作建立跨学科团队',
  '持续开放研发、产品、设计、市场与商务岗位',
  '岗位信息与投递方式将在后续资料齐备后继续补充',
];

export default function AboutCareersPage() {
  return (
    <SiteLayout
      title="职业招聘 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技职业招聘页框架与岗位分类展示。"
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src="/media/company-news-briefing.jpg" alt="Navlyn careers" />}
          tag="Careers"
          title="职业招聘"
          description="招聘页先建立结构框架，后续再继续接入 Logo 动画、岗位信息与投递方式。"
        />
      }
    >
      <section className="page-section doc-jobs-stage">
        <SubpageTabNav items={aboutSubpages} />
        <div className="section-heading">
          <Text className="news-page-kicker">Hiring Categories</Text>
          <Title level={2}>岗位框架</Title>
          <Paragraph>当前先建立招聘页骨架，围绕研发、产品与商务三类岗位组织内容，后续继续补正式 JD 与投递入口。</Paragraph>
        </div>
        <div className="doc-career-banner">
          <img src="/media/logo-white.png" alt="Navlyn" />
          <div className="doc-career-banner-copy">
            <Text className="panel-label">Join Navlyn</Text>
            <Title level={3}>招聘页先建立品牌入口与岗位结构</Title>
            <Paragraph>文档里提到 Logo 动画素材，但当前目录未找到文件。本页先用品牌入口和岗位框架承接，后续再接动画。</Paragraph>
          </div>
        </div>
        <div className="doc-career-points">
          {careerHighlights.map((item) => (
            <article key={item} className="doc-career-point">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="doc-jobs-grid">
          {careerPreviewCards.map((item) => (
            <article key={item.title} className="doc-jobs-card">
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section doc-placeholder-stage">
        <UpdatePageState
          kicker="Careers"
          title="招聘内容持续更新中"
          description="由于当前目录中未找到 Logo 动画与岗位清单源文件，本页先完成结构，后续可直接补充动画素材与岗位内容。"
        />
      </section>
    </SiteLayout>
  );
}

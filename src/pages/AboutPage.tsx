import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import { aboutFeatureCards, aboutLandingMetrics } from '../data/documentLanding';
import { homeNews } from '../data/home';
import SiteLayout from '../layouts/SiteLayout';
import { aboutSubpages } from '../data/subpages';
import { aboutHighlight, aboutMilestones, aboutTeam } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function AboutPage() {
  return (
    <SiteLayout
      title="关于我们 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技关于公司愿景、新闻报道与职业招聘的二级入口。"
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src="/media/about-team-collab.jpg" alt="Navlyn about overview" />}
          tag="About Navlyn"
          title="关于我们"
          description="围绕公司愿景、新闻报道与职业招聘三条内容线，逐步建立 Navlyn 对外表达与品牌认知结构。"
          navItems={aboutSubpages.map((item, index) => ({
            label: `0${index + 1}`,
            title: item.title,
            href: item.path,
            featured: index === 0,
          }))}
        />
      }
    >
      <section className="page-section doc-overview-stage">
        <SubpageTabNav items={aboutSubpages} />
        <div className="doc-metric-grid">
          {aboutLandingMetrics.map((item) => (
            <article key={item.label} className="doc-metric-card">
              <Text className="panel-label">{item.label}</Text>
              <strong>{item.value}</strong>
              <Paragraph>{item.detail}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section doc-story-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Brand Overview</Text>
          <Title level={2}>{aboutHighlight.title}</Title>
          <Paragraph>{aboutHighlight.description}</Paragraph>
        </div>
        <div className="doc-about-overview">
          <article className="doc-about-manifesto">
            <Text className="panel-label">About Navlyn</Text>
            <Title level={3}>围绕品牌愿景、公开报道与人才吸引建立完整叙事</Title>
            <Paragraph>
              关于我们不仅要回答“我们是谁”，还要同时承接品牌愿景、外部传播和人才吸引三条内容线，让 Navlyn 的对外认知能够持续扩展。
            </Paragraph>
            <div className="doc-story-grid">
              {aboutMilestones.map((item) => (
                <article key={item} className="doc-story-card">
                  <span />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </article>
        </div>
        <div className="doc-about-spotlight-grid">
          <Link className="doc-about-spotlight-card" to="/about/news">
            <div className="doc-about-spotlight-media">
              <img src={homeNews.items[0]?.image} alt={homeNews.items[0]?.alt} />
            </div>
            <div className="doc-about-spotlight-copy">
              <Text className="panel-label">Latest Coverage</Text>
              <Title level={3}>{homeNews.items[0]?.title}</Title>
              <Paragraph>{homeNews.items[0]?.summary}</Paragraph>
              <span>查看新闻报道</span>
            </div>
          </Link>
          <article className="doc-about-person-card">
            <div className="doc-about-person-media">
              <img src={aboutTeam[0]?.image} alt={aboutTeam[0]?.name} />
            </div>
            <div className="doc-about-person-copy">
              <Text className="panel-label">Team Highlight</Text>
              <Title level={3}>{aboutTeam[0]?.name}</Title>
              <strong>{aboutTeam[0]?.role}</strong>
              <Paragraph>{aboutTeam[0]?.bio}</Paragraph>
            </div>
          </article>
        </div>
      </section>

      <section className="page-section doc-subpage-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Subpages</Text>
          <Title level={2}>关于我们的内容入口</Title>
          <Paragraph>公司愿景、新闻报道与职业招聘分别承担品牌、传播和人才三条主线，父页先把这三条线的入口和关系讲清楚。</Paragraph>
        </div>
        <div className="doc-about-feature-grid">
          {aboutFeatureCards.map((item) => (
            <Link key={item.path} className="doc-about-feature-card" to={item.path}>
              <div className="doc-about-feature-media">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt ?? item.title}
                    style={{ objectPosition: item.imagePosition ?? 'center center' }}
                  />
                ) : null}
              </div>
              <div className="doc-about-feature-overlay" />
              <div className="doc-about-feature-copy">
                <Text className="panel-label">{item.eyebrow}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <span>进入栏目</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="doc-subpage-grid">
          {aboutSubpages.map((item) => (
            <Link key={item.path} className="doc-subpage-card" to={item.path}>
              <Text className="panel-label">About</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <span>查看页面</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

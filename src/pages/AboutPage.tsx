import { Avatar, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import StaticContactPanel from '../components/StaticContactPanel';
import { aboutNews } from '../data/routes';
import SiteLayout from '../layouts/SiteLayout';
import {
  aboutHighlight,
  aboutMilestones,
  aboutTeam,
  contactCards,
  globalRegions,
  partnerQuotes,
} from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function AboutPage() {
  return (
    <SiteLayout
      title="关于我们 | Navlyn 航链科技"
      description="了解 Navlyn 航链科技的品牌背景、中法团队、合作网络与商务联系入口。"
      hero={
        <section className="about-page-hero">
          <div className="about-page-hero-media">
            <img src={aboutNews[0].media} alt={aboutNews[0].title} />
          </div>
          <div className="about-page-hero-overlay" />
          <div className="about-page-hero-shell">
            <div className="about-page-hero-copy">
              <Text className="about-page-hero-tag">About Navlyn</Text>
              <Title>以品牌、技术与国际合作共同塑造低空智能能力</Title>
              <Paragraph>
                从中法联合团队到全球交付网络，持续建立品牌信任、合作基础与长期交付能力。
              </Paragraph>
              <div className="route-hero-actions">
                <a href="#about-story" className="route-hero-action is-primary">
                  查看品牌故事
                </a>
                <Link to="/contact" className="route-hero-action">
                  联系我们
                </Link>
              </div>
            </div>

            <div className="about-page-hero-nav">
              <a href="#about-story" className="about-page-hero-link">
                <span>Story</span>
                <strong>品牌与里程碑</strong>
              </a>
              <a href="#about-team" className="about-page-hero-link">
                <span>Team</span>
                <strong>联合团队</strong>
              </a>
              <a href="#contact" className="about-page-hero-link">
                <span>Contact</span>
                <strong>合作入口</strong>
              </a>
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section about-story-band" id="about-story">
        <div className="about-story-band-media">
          <img src={aboutNews[0].media} alt={aboutNews[0].title} />
        </div>
        <div className="about-story-band-overlay" />
        <div className="about-story-band-shell">
          <div className="about-story-band-copy">
            <Text className="news-page-kicker">Brand Story</Text>
            <Title level={2}>{aboutHighlight.title}</Title>
            <Paragraph>{aboutHighlight.description}</Paragraph>
          </div>

          <div className="about-story-band-milestones">
            {aboutMilestones.map((item) => (
              <div key={item} className="about-story-band-milestone">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="about-story-band-gallery">
            {aboutNews.slice(1).map((item) => (
              <div key={item.title} className="about-story-band-thumb">
                <img src={item.media} alt={item.title} />
                <div className="about-story-band-thumb-copy">
                  <strong>{item.title}</strong>
                  <span>{item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section about-network-stage">
        <div className="about-network-stage-copy">
          <Text className="news-page-kicker">Global Network</Text>
          <Title level={2}>全球布局与合作方向</Title>
          <Paragraph>
            从法国技术积累到海外合作伙伴网络，航链科技正逐步把低空智能能力扩展到多国家、多行业、多类型场景。
          </Paragraph>
          <div className="about-network-stage-stats">
            <div>
              <strong>4+</strong>
              <span>洲际覆盖</span>
            </div>
            <div>
              <strong>200+</strong>
              <span>实地项目</span>
            </div>
            <div>
              <strong>500 强</strong>
              <span>合作客户</span>
            </div>
          </div>
          <div className="about-network-stage-quote">
            <Text className="panel-label">{partnerQuotes[2].title}</Text>
            <Paragraph>{partnerQuotes[2].quote}</Paragraph>
          </div>
        </div>

        <div className="about-network-stage-visual">
          <img src={aboutNews[1].media} alt={aboutNews[1].title} />
          <div className="about-network-stage-visual-overlay" />
          <div className="about-network-stage-regions">
            {globalRegions.map((item) => (
              <div key={item} className="about-network-region-item">
                <strong>{item.split('：')[0]}</strong>
                <span>{item.split('：')[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section about-team-stage" id="about-team">
        <div className="section-heading">
          <Text className="news-page-kicker">Team & Contact</Text>
          <Title level={2}>中法联合团队与跨学科协作能力</Title>
          <Paragraph>把联合研发、品牌表达、交付支持与合作入口组织成一个更完整的品牌信任模块。</Paragraph>
        </div>
        <div className="about-team-stage-grid">
          <div className="about-team-stage-main">
            <div className="about-team-people">
              {aboutTeam.map((person) => (
                <article className="about-team-person" key={person.name}>
                  <Avatar src={person.image} shape="square" size={96} />
                  <Title level={4}>{person.name}</Title>
                  <Text className="panel-label">{person.role}</Text>
                  <Paragraph>{person.bio}</Paragraph>
                </article>
              ))}
            </div>

            <div className="about-voice-band">
              {partnerQuotes.map((quote) => (
                <div key={quote.name} className="about-voice-band-item">
                  <strong>{quote.name}</strong>
                  <Text className="panel-label">{quote.title}</Text>
                  <Paragraph>{quote.quote}</Paragraph>
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="about-team-stage-side">
            <div className="section-heading about-team-stage-contact-heading">
              <Tag color="blue">Contact</Tag>
              <Title level={2}>让官网从品牌展示进一步走向有效转化</Title>
              <Paragraph>
                联系信息后续仍可继续补齐，当前保留静态合作入口与场景说明，不接任何提交接口。
              </Paragraph>
            </div>
            <div className="about-contact-card-list">
              {contactCards.map((item) => (
                <article className="about-contact-item" key={item.title}>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </article>
              ))}
            </div>
            <StaticContactPanel
              title="合作与演示入口"
              description="适用于产品演示、行业方案咨询、代理合作、高校实验室交流等场景。"
              items={[
                {
                  title: '静态联系区',
                  description:
                    '为避免接入无效提交流程，本页不保留表单。你后续只需要提供正式联系方式，我可以直接替换到这里。',
                },
              ]}
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

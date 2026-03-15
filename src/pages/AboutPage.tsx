import { Avatar, Card, Col, Row, Space, Tag, Typography } from 'antd';
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
      <section className="page-section about-story-section" id="about-story">
        <div className="about-story-grid">
          <div className="about-story-copy">
            <Text className="news-page-kicker">Brand Story</Text>
            <Title level={2}>{aboutHighlight.title}</Title>
            <Paragraph>{aboutHighlight.description}</Paragraph>
            <div className="about-milestone-list">
              {aboutMilestones.map((item) => (
                <div key={item} className="about-milestone-item">
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-story-media">
            <div className="about-story-video">
              <img src={aboutNews[0].media} alt={aboutNews[0].title} />
            </div>
            <div className="about-story-media-grid">
              {aboutNews.slice(1).map((item) => (
                <div key={item.title} className="about-story-image-card">
                  <img src={item.media} alt={item.title} />
                  <div className="about-story-image-copy">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section about-network-section">
        <div className="about-network-grid">
          <Card className="about-card about-network-card" bordered={false}>
            <Space direction="vertical" size="middle">
              <div className="feature-icon large">{aboutHighlight.icon}</div>
              <Tag color="blue">Global Network</Tag>
              <Title level={2}>全球布局与合作方向</Title>
              <div className="about-region-list">
                {globalRegions.map((item) => (
                  <div key={item} className="about-region-item">
                    <strong>{item.split('：')[0]}</strong>
                    <span>{item.split('：')[1]}</span>
                  </div>
                ))}
              </div>
            </Space>
          </Card>

          <Card className="timeline-card about-network-sidecard" bordered={false}>
            <Tag color="blue">Partnership</Tag>
            <Title level={3}>以国际合作支撑品牌与交付能力</Title>
            <Paragraph>
              从法国技术积累到海外合作伙伴网络，航链科技正逐步把低空智能能力扩展到多国家、多行业、多类型场景。
            </Paragraph>
            <div className="about-network-stats">
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
          </Card>
        </div>
      </section>

      <section className="page-section" id="about-team">
        <div className="section-heading">
          <Tag color="blue">Team</Tag>
          <Title level={2}>中法联合团队与跨学科协作能力</Title>
        </div>
        <Row gutter={[20, 20]}>
          {aboutTeam.map((person) => (
            <Col xs={24} md={8} key={person.name}>
              <Card className="team-card" bordered={false}>
                <Avatar src={person.image} shape="square" size={96} />
                <Title level={4}>{person.name}</Title>
                <Text className="panel-label">{person.role}</Text>
                <Paragraph>{person.bio}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="page-section about-voice-section">
        <div className="section-heading">
          <Tag color="blue">Voice</Tag>
          <Title level={2}>来自专家与合作方的外部背书</Title>
        </div>
        <Row gutter={[20, 20]} className="about-voice-grid">
          {partnerQuotes.map((quote) => (
            <Col xs={24} md={8} key={quote.name}>
              <Card className="case-card" bordered={false}>
                <Title level={4}>{quote.name}</Title>
                <Text className="panel-label">{quote.title}</Text>
                <Paragraph>{quote.quote}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section id="contact" className="page-section">
        <div className="section-heading split">
          <div>
            <Tag color="blue">Contact</Tag>
            <Title level={2}>让官网从品牌展示进一步走向有效转化</Title>
          </div>
          <Paragraph>
            联系信息还可以继续补齐，当前改为静态联系区与合作说明，不接任何提交接口。
          </Paragraph>
        </div>
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={10}>
            <Space direction="vertical" size="middle" className="contact-grid">
              {contactCards.map((item) => (
                <Card className="feature-card" bordered={false} key={item.title}>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              ))}
            </Space>
          </Col>
          <Col xs={24} lg={14}>
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
          </Col>
        </Row>
      </section>
    </SiteLayout>
  );
}

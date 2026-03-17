import { Card, Col, Row, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import { contactCards, globalRegions, partnerQuotes } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersPage() {
  return (
    <SiteLayout
      title="客户与合作 | Navlyn 航链科技"
      description="查看 Navlyn 的全球客户与合作方向，了解国际合作、渠道协同与项目咨询入口。"
    >
      <section className="page-section about-network-section">
        <div className="section-heading">
          <Text className="news-page-kicker">Customers & Partners</Text>
          <Title level={2}>围绕客户落地与全球合作建立长期协同关系</Title>
          <Paragraph>从项目交付、国际合作到渠道协同，把低空智能能力扩展到更多国家、行业与业务场景。</Paragraph>
        </div>

        <div className="about-network-grid">
          <Card className="about-card about-network-card" bordered={false}>
            <Tag color="blue">Global Network</Tag>
            <Title level={2}>全球客户与合作覆盖</Title>
            <div className="about-region-list">
              {globalRegions.map((item) => (
                <div key={item} className="about-region-item">
                  <strong>{item.split('：')[0]}</strong>
                  <span>{item.split('：')[1]}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="timeline-card about-network-sidecard" bordered={false}>
            <Tag color="blue">Collaboration</Tag>
            <Title level={3}>聚焦客户价值、渠道协同与联合创新</Title>
            <Paragraph>支持政府客户、企业项目、渠道伙伴与高校实验室等多类合作对象，逐步形成长期合作网络。</Paragraph>
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

      <section className="page-section about-voice-section">
        <div className="section-heading">
          <Text className="news-page-kicker">Partner Voice</Text>
          <Title level={2}>来自客户与合作伙伴的反馈</Title>
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

      <section className="page-section">
        <div className="section-heading">
          <Text className="news-page-kicker">Cooperation Focus</Text>
          <Title level={2}>当前合作入口</Title>
        </div>
        <Row gutter={[20, 20]}>
          {contactCards.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card className="feature-card" bordered={false}>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="page-section route-cta-section">
        <div className="route-cta-copy">
          <Text className="news-page-kicker">Next Step</Text>
          <Title level={2}>继续了解产品、系统与行业方案</Title>
          <Paragraph>如果你已经有明确的合作方向，可以继续查看产品体系、ARC ENGINE 或行业应用，进一步确认协同方式。</Paragraph>
        </div>
        <div className="route-cta-actions">
          <Link className="product-entry-link" to="/products">
            查看产品体系
          </Link>
          <Link className="product-entry-link product-system-cta-secondary" to="/arc-os">
            查看 ARC ENGINE
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

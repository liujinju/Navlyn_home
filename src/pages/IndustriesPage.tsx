import { Card, Col, Row, Segmented, Tag, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';
import { industries } from '../data/home';

const { Title, Paragraph, Text } = Typography;

export default function IndustriesPage() {
  const [industryKey, setIndustryKey] = useState(industries[0].key);
  const activeIndustry = useMemo(
    () => industries.find((item) => item.key === industryKey) ?? industries[0],
    [industryKey],
  );

  return (
    <SiteLayout
      title="行业应用 | Navlyn 航链科技"
      description="查看 Navlyn 在测绘、建筑工程、矿业与应急救援场景中的低空智能应用。"
      hero={
        <section className="industries-page-hero">
          <div className="industries-page-hero-media">
            <img src={activeIndustry.image} alt={activeIndustry.label} />
          </div>
          <div className="industries-page-hero-overlay" />
          <div className="industries-page-hero-shell">
            <div className="industries-page-hero-copy">
              <Text className="industries-page-hero-tag">Industry Services</Text>
              <Title>围绕真实业务场景组织产品，而不是单纯陈列设备</Title>
              <Paragraph>
                让产品、系统与交付能力回到业务现场，在具体场景里完成验证、复制与规模化落地。
              </Paragraph>
              <div className="route-hero-actions">
                <a href="#industry-stage" className="route-hero-action is-primary">
                  查看场景方案
                </a>
                <Link to="/contact" className="route-hero-action">
                  预约行业咨询
                </Link>
              </div>
            </div>

            <div className="industries-page-hero-nav">
              <a href="#industry-stage" className="industries-page-hero-link">
                <span>Scenario</span>
                <strong>{activeIndustry.label}</strong>
              </a>
              <a href="#industry-stage" className="industries-page-hero-link">
                <span>Solution</span>
                <strong>{activeIndustry.eyebrow}</strong>
              </a>
              <a href="#industry-summary" className="industries-page-hero-link">
                <span>Delivery</span>
                <strong>行业结果摘要</strong>
              </a>
            </div>

            <div className="industries-page-hero-tabs">
              <Segmented
                block
                className="industry-tabs"
                options={industries.map((item) => ({
                  label: item.label,
                  value: item.key,
                }))}
                value={industryKey}
                onChange={(value) => setIndustryKey(String(value))}
              />
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section" id="industry-stage">
        <Card className="industry-stage route-industry-stage" bordered={false}>
          <div className="industry-stage-media">
            <img src={activeIndustry.image} alt={activeIndustry.label} />
          </div>
          <div className="industry-stage-overlay" />
          <div className="industry-stage-content">
            <div className="industry-stage-head">
              <Text className="panel-label">{activeIndustry.eyebrow}</Text>
              <Title>{activeIndustry.label}</Title>
            </div>
            <Row gutter={[20, 20]}>
              <Col xs={24} lg={8}>
                <div className="industry-stage-block">
                  <Text className="panel-label">行业痛点</Text>
                  <Paragraph>{activeIndustry.painPoint}</Paragraph>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="industry-stage-block">
                  <Text className="panel-label">Navlyn 方案</Text>
                  <Paragraph>{activeIndustry.solution}</Paragraph>
                </div>
              </Col>
              <Col xs={24} lg={8}>
                <div className="industry-stage-block">
                  <Text className="panel-label">交付结果</Text>
                  <Paragraph>{activeIndustry.outcome}</Paragraph>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </section>

      <section className="page-section" id="industry-summary">
        <div className="section-heading">
          <Text className="news-page-kicker">Scenario Overview</Text>
          <Title level={2}>面向关键行业场景的交付摘要</Title>
          <Paragraph>把业务痛点、解决方案和落地结果组织成可复制的行业模板。</Paragraph>
        </div>
        <Row gutter={[20, 20]} className="industry-summary-grid">
          {industries.map((item) => (
            <Col xs={24} md={12} xl={6} key={item.key}>
              <Card className="industry-summary-card" bordered={false}>
                <Tag color="cyan">{item.label}</Tag>
                <Title level={4}>{item.eyebrow}</Title>
                <Paragraph>{item.outcome}</Paragraph>
                <div className="industry-summary-meta">
                  <div>
                    <span>痛点</span>
                    <strong>{item.painPoint}</strong>
                  </div>
                  <div>
                    <span>方案</span>
                    <strong>{item.solution}</strong>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </SiteLayout>
  );
}

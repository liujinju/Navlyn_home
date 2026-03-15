import { Card, Col, Row, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import StaticContactPanel from '../components/StaticContactPanel';
import { contactCards } from '../data/site';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const demoFlows = [
  {
    title: '产品演示',
    detail: '快速理解 Commander、Scout、Seal 与 ARC OS 的协同关系，适合首次建立产品认知。',
  },
  {
    title: '行业方案沟通',
    detail: '围绕测绘、工程、矿业、应急等场景梳理业务目标、部署方式与交付路径。',
  },
  {
    title: '合作与渠道洽谈',
    detail: '适合国际合作伙伴、经销商、高校实验室与联合创新项目对接。',
  },
];

const bookingAudiences = [
  '政府 / 城市治理客户：关注安全可控、低空治理、应急能力。',
  '国央企 / 大型企业：关注规模化部署、行业落地与合规管理。',
  '海外客户 / 渠道伙伴：关注产品组合、培训支持与长期合作方式。',
  '高校 / 技术合作方：关注系统路线、实验室合作与人才培养。',
];

const responseSteps = [
  {
    step: '01',
    title: '提交需求方向',
    detail: '明确你想看产品演示、行业方案还是合作交流，我们会据此组织最合适的沟通内容。',
  },
  {
    step: '02',
    title: '1 个工作日内响应',
    detail: '当前页面不接表单接口，正式联系方式补齐后可替换；现阶段先以静态沟通入口进行承接。',
  },
  {
    step: '03',
    title: '安排线上或现场演示',
    detail: '根据场景复杂度提供产品演示、系统讲解、案例复盘与合作方式说明。',
  },
];

export default function ContactPage() {
  return (
    <SiteLayout
      title="演示咨询 | Navlyn 航链科技"
      description="预约产品演示、行业方案沟通与合作洽谈，了解 Navlyn 如何把低空智能能力落到真实业务场景。"
      hero={
        <section className="contact-page-hero">
          <div className="contact-page-hero-media">
            <img src="/media/about-team-collab.jpg" alt="Navlyn contact and demo" />
          </div>
          <div className="contact-page-hero-overlay" />
          <div className="contact-page-hero-shell">
            <div className="contact-page-hero-copy">
              <Text className="contact-page-hero-tag">Contact / Demo</Text>
              <Title>让官网从品牌认知走向真正的演示与合作承接</Title>
              <Paragraph>围绕产品演示、行业方案、渠道合作与国际业务对接，建立更清晰的沟通入口。</Paragraph>
              <div className="route-hero-actions">
                <a href="#demo-services" className="route-hero-action is-primary">
                  查看演示内容
                </a>
                <a href="#contact-panel" className="route-hero-action">
                  查看合作入口
                </a>
              </div>
            </div>

            <div className="contact-page-hero-nav">
              <a href="#demo-services" className="contact-page-hero-link">
                <span>Services</span>
                <strong>我们能提供什么演示</strong>
              </a>
              <a href="#booking-fit" className="contact-page-hero-link">
                <span>Audience</span>
                <strong>适合哪些客户预约</strong>
              </a>
              <a href="#contact-panel" className="contact-page-hero-link">
                <span>Contact</span>
                <strong>静态联系入口</strong>
              </a>
            </div>
          </div>
        </section>
      }
    >
      <section className="page-section contact-page-services" id="demo-services">
        <div className="section-heading">
          <Text className="news-page-kicker">Demo Services</Text>
          <Title level={2}>我们能提供什么演示</Title>
          <Paragraph>先从产品认知、方案沟通和合作对接三条线承接需求，后续可继续扩展为多语言与真实表单流程。</Paragraph>
        </div>
        <Row gutter={[20, 20]}>
          {demoFlows.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card className="feature-card contact-service-card" bordered={false}>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.detail}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="page-section contact-page-fit" id="booking-fit">
        <div className="contact-fit-grid">
          <div className="contact-fit-copy">
            <Text className="news-page-kicker">Who It's For</Text>
            <Title level={2}>适合哪些客户预约</Title>
            <Paragraph>把不同客户的诉求放到明确入口里，避免官网只停留在展示层，而不能有效承接商务与合作沟通。</Paragraph>
          </div>
          <div className="contact-fit-list">
            {bookingAudiences.map((item) => (
              <div key={item} className="contact-fit-item">
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section contact-page-process">
        <div className="section-heading">
          <Text className="news-page-kicker">Process</Text>
          <Title level={2}>从咨询到演示的响应流程</Title>
        </div>
        <Row gutter={[20, 20]}>
          {responseSteps.map((item) => (
            <Col xs={24} md={8} key={item.step}>
              <Card className="timeline-card contact-process-card" bordered={false}>
                <Text className="arc-flow-step">{item.step}</Text>
                <Title level={4}>{item.title}</Title>
                <Paragraph>{item.detail}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="page-section contact-page-panel" id="contact-panel">
        <div className="section-heading split">
          <div>
            <Tag color="blue">Contact</Tag>
            <Title level={2}>静态联系入口与合作说明</Title>
          </div>
          <Paragraph>当前先按思维导图要求补齐独立承接页，不接接口；后续只需要把正式邮箱、电话和地址替换进来即可。</Paragraph>
        </div>
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={10}>
            <div className="contact-page-sidecards">
              {contactCards.map((item) => (
                <Card className="feature-card" bordered={false} key={item.title}>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </Card>
              ))}
            </div>
          </Col>
          <Col xs={24} lg={14}>
            <StaticContactPanel
              title="合作与演示入口"
              description="适用于产品演示、行业方案咨询、代理合作、高校实验室交流等场景。"
              items={[
                {
                  title: '静态联系区',
                  description: '当前页面不接提交接口，正式联系方式确认后可直接替换到这里。',
                },
                {
                  title: '建议沟通准备',
                  description: '建议提前准备行业场景、预期目标、部署地点与时间要求，便于快速安排合适的演示内容。',
                },
              ]}
              actionLabel="了解公司背景"
              actionTo="/about"
            />
          </Col>
        </Row>
      </section>

      <section className="page-section route-cta-section contact-page-cta">
        <div className="route-cta-copy">
          <Text className="news-page-kicker">Next Step</Text>
          <Title level={2}>继续深入了解产品、系统或行业方案</Title>
          <Paragraph>如果你已经明确场景方向，可以继续查看产品体系、ARC OS 或行业应用页面，再决定预约哪一类演示。</Paragraph>
        </div>
        <div className="route-cta-actions">
          <Link className="product-entry-link" to="/products">
            查看产品体系
          </Link>
          <Link className="product-entry-link product-system-cta-secondary" to="/arc-os">
            查看 ARC OS
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

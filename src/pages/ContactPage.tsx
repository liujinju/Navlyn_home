import { Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import StaticContactPanel from '../components/StaticContactPanel';
import { contactCards } from '../data/site';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const demoFlows = [
  {
    title: '产品演示',
    detail: '适合首次建立产品认知，快速理解 Commander、Scout、Seal 与 ARC ENGINE 的协同关系。',
  },
  {
    title: '行业方案沟通',
    detail: '适合围绕测绘、工程、矿业、应急等场景梳理目标、部署方式与交付路径。',
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
    title: '明确需求方向',
    detail: '先确认你更关注产品演示、场景方案，还是合作洽谈，我们据此准备沟通内容。',
  },
  {
    step: '02',
    title: '快速响应与匹配',
    detail: '根据行业、地区与合作意图，匹配合适的产品、案例和团队成员进入沟通。',
  },
  {
    step: '03',
    title: '安排演示或交流',
    detail: '可继续衔接线上讲解、现场演示、案例复盘与后续合作路径说明。',
  },
];

export default function ContactPage() {
  return (
    <SiteLayout
      title="联系我们 | Navlyn 航链科技"
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
              <Title>让官网从品牌认知走向真实合作与演示承接</Title>
              <Paragraph>围绕产品演示、行业方案、渠道合作与国际业务对接，建立更清晰、更有效的沟通入口。</Paragraph>
              <div className="route-hero-actions">
                <a href="#contact-services" className="route-hero-action is-primary">
                  查看服务内容
                </a>
                <a href="#contact-panel" className="route-hero-action">
                  查看联系入口
                </a>
              </div>
            </div>

            <div className="contact-page-hero-nav">
              <a href="#contact-services" className="contact-page-hero-link contact-page-hero-link-featured">
                <span>Services</span>
                <strong>我们能提供什么服务</strong>
              </a>
              <a href="#contact-fit" className="contact-page-hero-link">
                <span>Audience</span>
                <strong>适合哪些客户沟通</strong>
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
      <section className="page-section contact-service-stage" id="contact-services">
        <div className="contact-service-stage-media">
          <img src="/media/company-news-feature.jpg" alt="Navlyn demo services" />
        </div>
        <div className="contact-service-stage-overlay" />
        <div className="contact-service-stage-shell">
          <div className="contact-service-stage-copy">
            <Text className="panel-label">Demo Services</Text>
            <Title level={2}>把产品演示、行业方案与合作洽谈组织成清晰入口</Title>
            <Paragraph>先用更轻、更明确的内容模块承接需求，后续只需要补正式联系方式和真实流程，就能自然升级为完整的商务入口。</Paragraph>
          </div>

          <div className="contact-service-stage-grid">
            {demoFlows.map((item) => (
              <article key={item.title} className="contact-service-stage-card">
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.detail}</Paragraph>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section contact-audience-stage" id="contact-fit">
        <div className="contact-audience-copy">
          <Text className="news-page-kicker">Who It's For</Text>
          <Title level={2}>适合哪些客户发起沟通</Title>
          <Paragraph>把不同类型客户的目标、关注点与合作方向先放到公开入口中，官网才能从展示层真正走向承接层。</Paragraph>
        </div>

        <div className="contact-audience-list">
          {bookingAudiences.map((item) => (
            <div key={item} className="contact-audience-item">
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section contact-process-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Process</Text>
          <Title level={2}>从首次沟通到演示安排的承接流程</Title>
          <Paragraph>当前先按静态结构展示沟通路径，不接提交接口；后续只需要替换真实联系方式和流程规则即可。</Paragraph>
        </div>

        <div className="contact-process-grid">
          {responseSteps.map((item) => (
            <article key={item.step} className="contact-process-card">
              <Text className="arc-flow-step">{item.step}</Text>
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.detail}</Paragraph>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section contact-panel-stage" id="contact-panel">
        <div className="about-team-stage-grid">
          <div className="about-team-stage-main">
            <div className="section-heading">
              <Text className="news-page-kicker">Contact Paths</Text>
              <Title level={2}>把产品、方案与合作意向映射到更清晰的沟通入口</Title>
              <Paragraph>当前先保留静态结构，不接任何接口；等正式邮箱、电话和地址确认后，可以直接替换为可用联系页。</Paragraph>
            </div>

            <div className="about-contact-card-list">
              {contactCards.map((item) => (
                <article className="about-contact-item" key={item.title}>
                  <Title level={4}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </article>
              ))}
            </div>

            <div className="contact-panel-stage-note">
              <Tag color="blue">Static Mode</Tag>
              <Paragraph>
                这版页面先承担“解释沟通入口”的作用，而不是立即提交表单。这样能先把品牌和业务结构理顺，再接真实线索流。
              </Paragraph>
            </div>
          </div>

          <div className="about-team-stage-side">
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
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { Typography } from 'antd';
import SiteLayout from '../layouts/SiteLayout';
import { contactCards, globalRegions, partnerQuotes } from '../data/site';

const { Title, Paragraph, Text } = Typography;

export default function PartnersPage() {
  return (
    <SiteLayout
      title="客户与合作 | Navlyn 航链科技"
      description="查看 Navlyn 的全球客户与合作方向，了解国际合作、渠道协同与项目咨询入口。"
    >
      <section className="page-section about-network-stage">
        <div className="about-network-stage-copy">
          <Text className="news-page-kicker">Customers & Partners</Text>
          <Title level={2}>围绕客户落地与全球合作建立长期协同关系</Title>
          <Paragraph>从项目交付、国际合作到渠道协同，把低空智能能力扩展到更多国家、行业与业务场景。</Paragraph>
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
            <Text className="panel-label">Collaboration</Text>
            <Paragraph>聚焦客户价值、渠道协同与联合创新，逐步形成长期合作网络与项目承接能力。</Paragraph>
          </div>
        </div>

        <div className="about-network-stage-visual">
          <img src="/media/about-team-collab.jpg" alt="Navlyn customers and partners" />
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

      <section className="page-section about-team-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Partner Voice</Text>
          <Title level={2}>来自客户与合作伙伴的反馈</Title>
          <Paragraph>把合作方视角、项目反馈与合作入口组织成统一的信任模块，而不是零散的内容卡片。</Paragraph>
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
      </section>

      <section className="page-section about-team-stage">
        <div className="section-heading">
          <Text className="news-page-kicker">Cooperation Focus</Text>
          <Title level={2}>当前合作入口</Title>
          <Paragraph>为项目咨询、国际渠道、联合创新与客户演示保留清晰入口，便于后续继续接入正式商务流程。</Paragraph>
        </div>
        <div className="about-contact-card-list">
          {contactCards.map((item) => (
            <article className="about-contact-item" key={item.title}>
              <Title level={4}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

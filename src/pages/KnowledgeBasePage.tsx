import { Card, Col, Row, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const knowledgeTopics = [
  {
    title: '系统能力解析',
    description: '围绕 ARC ENGINE 的任务理解、系统治理、群体协同与安全机制，建立更结构化的系统认知。',
    points: ['任务意图理解', '多终端协同', '系统治理与权限控制'],
  },
  {
    title: '产品与交付资料',
    description: '沉淀指挥官、尖兵、海豹三类终端的产品定位、部署方式、交付流程与现场实施经验。',
    points: ['硬件矩阵说明', '典型部署方式', '交付实施清单'],
  },
  {
    title: '行业方法论',
    description: '把测绘、工程、矿业、生态巡护与应急救援中的项目经验整理成可复用的行业模板。',
    points: ['行业痛点拆解', '方案构成逻辑', '结果复盘方法'],
  },
];

export default function KnowledgeBasePage() {
  return (
    <SiteLayout
      title="知识库 | Navlyn 航链科技"
      description="查看 Navlyn 的系统资料、产品说明与行业方法论，建立对低空智能体系的完整认知。"
    >
      <section className="page-section news-page">
        <div className="news-page-hero">
          <Text className="news-page-kicker">Knowledge Base</Text>
          <Title>沉淀系统资料、产品知识与行业方法论</Title>
          <Paragraph>把 ARC ENGINE、硬件终端与场景交付能力组织成可查阅、可复用、可持续扩展的知识体系。</Paragraph>
        </div>

        <Row gutter={[20, 20]}>
          {knowledgeTopics.map((item) => (
            <Col xs={24} md={8} key={item.title}>
              <Card className="feature-card" bordered={false}>
                <Tag color="blue">Knowledge</Tag>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <div className="about-milestone-list">
                  {item.points.map((point) => (
                    <div key={point} className="about-milestone-item">
                      <span />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <section className="page-section route-cta-section">
          <div className="route-cta-copy">
            <Text className="news-page-kicker">Next Step</Text>
            <Title level={2}>从知识理解走向系统落地</Title>
            <Paragraph>继续查看产品体系或 ARC ENGINE 页面，理解知识库中的系统逻辑如何映射到真实终端与现场部署。</Paragraph>
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
      </section>
    </SiteLayout>
  );
}

import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import { Card, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

interface ContactPanelItem {
  title: string;
  description: string;
}

interface StaticContactPanelProps {
  title: string;
  description: string;
  items: ContactPanelItem[];
  actionLabel?: string;
  actionTo?: string;
}

export default function StaticContactPanel({
  title,
  description,
  items,
  actionLabel,
  actionTo,
}: StaticContactPanelProps) {
  return (
    <Card className="contact-card" bordered={false}>
      <Title level={3}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <Space direction="vertical" size="middle" className="contact-grid">
        {items.map((item) => (
          <Card className="feature-card contact-info-card" bordered={false} key={item.title}>
            <Title level={5}>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
          </Card>
        ))}
        <Card className="feature-card contact-info-card" bordered={false}>
          <Title level={5}>商务联系信息</Title>
          <Paragraph>商务邮箱、电话、办公地址与展示中心等正式联系信息，将通过该区域统一呈现。</Paragraph>
          <Text type="secondary">
            <MailOutlined /> 商务邮箱
          </Text>
          <br />
          <Text type="secondary">
            <EnvironmentOutlined /> 办公地址 / 展示中心
          </Text>
        </Card>
        {actionLabel && actionTo ? (
          <Link to={actionTo} className="ant-btn ant-btn-primary ant-btn-lg button-link">
            {actionLabel}
          </Link>
        ) : null}
      </Space>
    </Card>
  );
}

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
          <Title level={5}>联系信息待补充</Title>
          <Paragraph>当前页面保留静态占位，正式邮箱、电话和地址确认后可以直接替换到这里。</Paragraph>
          <Text type="secondary">
            <MailOutlined /> 建议后续补齐商务邮箱
          </Text>
          <br />
          <Text type="secondary">
            <EnvironmentOutlined /> 建议后续补齐办公地址 / 展示中心
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

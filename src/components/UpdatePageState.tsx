import { Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface UpdatePageStateProps {
  kicker: string;
  title: string;
  description: string;
}

export default function UpdatePageState({ kicker, title, description }: UpdatePageStateProps) {
  return (
    <section className="doc-update-state">
      <Text className="news-page-kicker">{kicker}</Text>
      <Title level={2}>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <div className="doc-update-badge">页面正在更新</div>
    </section>
  );
}

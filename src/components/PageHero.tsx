import { Tag, Typography } from 'antd';
import type { ReactNode } from 'react';

const { Title, Paragraph } = Typography;

interface PageHeroProps {
  tag: string;
  title: string;
  description: string;
  extra?: ReactNode;
}

export default function PageHero({ tag, title, description, extra }: PageHeroProps) {
  return (
    <section className="page-hero">
      <Tag color="blue">{tag}</Tag>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      {extra}
    </section>
  );
}

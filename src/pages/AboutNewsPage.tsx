import { Typography } from 'antd';
import { homeNews } from '../data/home';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import SiteLayout from '../layouts/SiteLayout';
import { aboutSubpages } from '../data/subpages';

const { Title, Paragraph, Text } = Typography;

export default function AboutNewsPage() {
  return (
    <SiteLayout
      title="新闻报道 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技的公开报道、媒体引用与阶段性新闻内容。"
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src="/media/company-news-feature.jpg" alt="Navlyn media coverage" />}
          tag="Media Coverage"
          title="新闻报道"
          description="聚焦品牌发布、技术表达与产业交流，汇总航链科技当前已公开的媒体报道与传播内容。"
        />
      }
    >
      <section className="page-section doc-news-stage">
        <SubpageTabNav items={aboutSubpages} />
        <div className="section-heading">
          <Text className="news-page-kicker">Press</Text>
          <Title level={2}>公开报道与传播内容</Title>
          <Paragraph>当前先基于企业新闻报道目录搭建第一版新闻页，后续可以继续补更多报道、正文与专题内容。</Paragraph>
        </div>
        <div className="doc-news-list">
          {homeNews.items.map((item) => (
            <a
              key={item.title}
              className="doc-news-item"
              href={item.to}
              target="_blank"
              rel="noreferrer"
            >
              <div className="doc-news-item-media">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="doc-news-item-copy">
                <Text className="panel-label">{item.tag}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.summary}</Paragraph>
                <span>{item.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

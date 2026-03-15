import { Segmented, Typography } from 'antd';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatNewsDate, newsItems } from '../data/news';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const newsTags = ['All', ...Array.from(new Set(newsItems.map((item) => item.tag)))];
  const filteredNews = useMemo(
    () => (activeTag === 'All' ? newsItems : newsItems.filter((item) => item.tag === activeTag)),
    [activeTag],
  );
  const [featuredNews, ...secondaryNews] = filteredNews;

  return (
    <SiteLayout
      title="公司报道 | Navlyn 航链科技"
      description="查看航链科技关于技术突破、产品发布、国际合作与行业展会的阶段性动态。"
    >
      <section className="page-section news-page">
        <div className="news-page-hero">
          <Text className="news-page-kicker">Newsroom</Text>
          <Title>公司报道</Title>
          <Paragraph>
            聚焦技术突破、产品发布、国际合作与行业展会，阶段性记录航链科技在低空智能领域的创新实践。
          </Paragraph>
        </div>

        <div className="news-filter-bar">
          <Segmented
            className="news-filter"
            options={newsTags}
            value={activeTag}
            onChange={(value) => setActiveTag(String(value))}
          />
        </div>

        <div className="news-page-grid">
          {featuredNews ? (
            <Link className="news-card news-card-featured" to={`/news/${featuredNews.slug}`}>
              <div className="news-card-copy">
                <Text className="news-card-tag">{featuredNews.tag}</Text>
                <Text className="news-card-meta">
                  {formatNewsDate(featuredNews.date)} · {featuredNews.location}
                </Text>
                <Title level={3}>{featuredNews.title}</Title>
                <Paragraph>{featuredNews.description}</Paragraph>
              </div>
              <div className="news-card-media">
                <img src={featuredNews.image} alt={featuredNews.imageAlt} />
              </div>
            </Link>
          ) : null}

          <div className={`news-grid-side${secondaryNews.length === 0 ? ' is-empty' : ''}`}>
            {secondaryNews.map((item) => (
              <Link key={item.slug} className="news-card" to={`/news/${item.slug}`}>
                <div className="news-card-copy">
                  <Text className="news-card-tag">{item.tag}</Text>
                  <Text className="news-card-meta">
                    {formatNewsDate(item.date)} · {item.location}
                  </Text>
                  <Title level={3}>{item.title}</Title>
                  <Paragraph>{item.description}</Paragraph>
                </div>
                <div className="news-card-media">
                  <img src={item.image} alt={item.imageAlt} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="news-archive-note">
          <Text className="news-page-kicker">Archive</Text>
          <Title level={3}>更多动态持续更新中</Title>
          <Paragraph>
            当前新闻中心已完成首页展示、新闻列表与详情页骨架。后续只需替换真实新闻标题、日期、正文与封面素材，即可持续扩展为正式内容栏目。
          </Paragraph>
        </div>
      </section>
    </SiteLayout>
  );
}

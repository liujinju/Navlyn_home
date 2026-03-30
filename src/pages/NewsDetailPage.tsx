import { Button, Typography } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { formatNewsDate, newsItems } from '../data/news';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

export default function NewsDetailPage() {
  const { slug } = useParams();
  const articleIndex = newsItems.findIndex((item) => item.slug === slug);
  const article = articleIndex >= 0 ? newsItems[articleIndex] : null;

  if (!article) {
    return (
      <SiteLayout title="报道未找到 | Navlyn 航链科技" description="当前访问的报道不存在或链接已失效。">
        <section className="page-section not-found-page">
          <div className="section-heading not-found-copy">
            <Text className="news-page-kicker">Story Not Found</Text>
            <Title level={1}>未找到对应报道</Title>
            <Paragraph>当前报道可能已下线、链接已变更，或当前内容尚未正式发布。</Paragraph>
          </div>

          <div className="not-found-actions">
            <Link to="/news" className="ant-btn ant-btn-primary ant-btn-lg button-link">
              返回新闻列表
            </Link>
            <Link to="/" className="ant-btn ant-btn-default ant-btn-lg button-link">
              返回首页
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const relatedNews = newsItems.filter((item) => item.slug !== article.slug).slice(0, 2);
  const previousArticle = newsItems[(articleIndex - 1 + newsItems.length) % newsItems.length];
  const nextArticle = newsItems[(articleIndex + 1) % newsItems.length];

  return (
    <SiteLayout title={`${article.title} | Navlyn 航链科技`} description={article.description}>
      <section className="page-section news-detail-page">
        <div className="news-detail-hero">
          <Text className="news-page-kicker">{article.tag}</Text>
          <Title>{article.title}</Title>
          <Text className="news-card-meta">
            {formatNewsDate(article.date)} · {article.location}
          </Text>
          <Paragraph>{article.description}</Paragraph>
          <Button type="default" ghost>
            <Link to="/news">返回新闻列表</Link>
          </Button>
        </div>

        <div className="news-detail-cover">
          <img src={article.image} alt={article.imageAlt} />
        </div>

        <div className="news-detail-body">
          {article.body.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </div>

        <div className="news-detail-nav">
          <Link className="news-detail-nav-link" to={`/news/${previousArticle.slug}`}>
            <Text className="news-card-tag">上一篇</Text>
            <strong>{previousArticle.title}</strong>
          </Link>
          <Link className="news-detail-nav-link" to={`/news/${nextArticle.slug}`}>
            <Text className="news-card-tag">下一篇</Text>
            <strong>{nextArticle.title}</strong>
          </Link>
        </div>

        <div className="news-detail-related">
          <div className="section-heading">
            <Text className="news-page-kicker">More Stories</Text>
            <Title level={2}>更多报道</Title>
          </div>
          <div className="news-grid-side news-detail-related-grid">
            {relatedNews.map((item) => (
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
      </section>
    </SiteLayout>
  );
}

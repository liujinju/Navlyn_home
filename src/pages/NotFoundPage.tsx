import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

export default function NotFoundPage() {
  return (
    <SiteLayout title="页面未找到 | Navlyn 航链科技" description="当前访问的页面不存在或链接已失效。">
      <section className="page-section not-found-page">
        <div className="section-heading not-found-copy">
          <Text className="news-page-kicker">404</Text>
          <Title level={1}>页面未找到</Title>
          <Paragraph>
            你访问的地址可能已变更，或者当前内容尚未上线。可以先返回首页，或者继续浏览产品体系与 ARC ENGINE。
          </Paragraph>
        </div>

        <div className="not-found-actions">
          <Link to="/" className="ant-btn ant-btn-primary ant-btn-lg button-link">
            返回首页
          </Link>
          <Link to="/products" className="ant-btn ant-btn-default ant-btn-lg button-link">
            查看产品体系
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

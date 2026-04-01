import { Segmented, Typography } from 'antd';
import { useState } from 'react';
import SiteLayout from '../layouts/SiteLayout';
import {
  productCategories,
  productHardwareHero,
  productHardwareItems,
  productSoftwareHero,
  productSoftwareItems,
  type ProductCategoryKey,
} from '../data/products';

const { Title, Paragraph, Text } = Typography;

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategoryKey>('hardware');
  const activeMeta = productCategories.find((item) => item.key === activeCategory) ?? productCategories[0];

  return (
    <SiteLayout
      title="产品体系 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技产品体系中的硬件端口与软件端口。"
      hero={
        <section className="doc-products-hero">
          <div className="doc-products-hero-media">
            {activeCategory === 'hardware' ? (
              <video
                src={productHardwareHero.video}
                poster={productHardwareHero.fallbackImage}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <img src={productSoftwareHero.image} alt={productSoftwareHero.title} />
            )}
          </div>
          <div className="doc-products-hero-overlay" />
          <div className="doc-products-hero-shell">
            <div className="doc-products-hero-top">
              <div className="doc-products-hero-copy">
                <Text className="doc-products-hero-tag">{activeCategory === 'hardware' ? productHardwareHero.tag : productSoftwareHero.tag}</Text>
                <Title>{activeCategory === 'hardware' ? productHardwareHero.title : productSoftwareHero.title}</Title>
                <Paragraph>
                  {activeCategory === 'hardware' ? productHardwareHero.description : productSoftwareHero.description}
                </Paragraph>
              </div>
              <div className="doc-products-switcher">
                <Text className="panel-label">产品体系菜单</Text>
                <Segmented
                  block
                  className="doc-products-segmented"
                  value={activeCategory}
                  options={productCategories.map((item) => ({
                    label: item.label,
                    value: item.key,
                  }))}
                  onChange={(value) => setActiveCategory(value as ProductCategoryKey)}
                />
                <Text className="doc-products-switcher-title">{activeMeta.title}</Text>
                <Paragraph>{activeMeta.description}</Paragraph>
              </div>
            </div>

            <div className="doc-products-preview-rail">
              {activeCategory === 'hardware'
                ? productHardwareItems.map((item) => (
                    <a key={item.key} href={`#${item.key}`} className="doc-products-preview-card">
                      <span>{item.shortLabel}</span>
                      <strong>{item.name}</strong>
                      <em>{item.role}</em>
                    </a>
                  ))
                : productSoftwareItems.map((item) => (
                    <article key={item.title} className="doc-products-preview-card">
                      <span>{item.shortLabel}</span>
                      <strong>{item.title}</strong>
                      <em>{item.label}</em>
                    </article>
                  ))}
            </div>
          </div>
        </section>
      }
    >
      {activeCategory === 'hardware' ? (
        <section className="page-section doc-products-stage">
          <div className="section-heading">
            <Text className="news-page-kicker">Hardware</Text>
            <Title level={2}>三款硬件终端各自承担不同现场角色</Title>
            <Paragraph>从边缘算力中枢到高性能执行终端，再到空海协同救援艇，硬件矩阵共同形成完整作业闭环。</Paragraph>
          </div>
          <div className="doc-product-row-list">
            {productHardwareItems.map((item, index) => (
              <article
                key={item.key}
                id={item.key}
                className={`doc-product-row${index % 2 === 1 ? ' is-reverse' : ''}`}
              >
                <div className="doc-product-row-media">
                  <img src={item.image} alt={item.imageAlt} style={{ objectPosition: item.imagePosition }} />
                </div>
                <div className="doc-product-row-copy">
                  <Text className="panel-label">{item.role}</Text>
                  <Title level={2}>{item.name}</Title>
                  <div className="doc-product-row-point">
                    <strong>一句话定位</strong>
                    <p>{item.positioning}</p>
                  </div>
                  <div className="doc-product-row-point">
                    <strong>核心卖点</strong>
                    <p>{item.value}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="page-section doc-products-stage">
          <div className="section-heading">
            <Text className="news-page-kicker">Software</Text>
            <Title level={2}>软件端口统一收敛到 ARC ENGINE 系统页</Title>
            <Paragraph>软件页先以系统结构方式承接 ARC ENGINE 与 ARC Inside 的关系，让产品体系里的软件端口和系统页形成顺滑连接。</Paragraph>
          </div>
          <div className="doc-software-grid">
            {productSoftwareItems.map((item) => (
              <article key={item.title} className="doc-software-card">
                <Text className="panel-label">{item.label}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </article>
            ))}
          </div>
        </section>
      )}
    </SiteLayout>
  );
}

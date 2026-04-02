import type { CSSProperties } from "react";
import { Typography } from "antd";
import SiteLayout from "../layouts/SiteLayout";
import { productDetails, productHero } from "../data/products";

const { Title, Paragraph, Text } = Typography;

export default function ProductsPage() {
  return (
    <SiteLayout
      title="产品体系 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技三款硬件终端如何分别承担任务决策、日常执行与水域响应角色。"
      hero={
        <section className="products-cinema-hero">
          <div className="products-cinema-media">
            <video
              className="products-cinema-video"
              src={productHero.video}
              poster={productHero.poster}
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="products-cinema-overlay" />
            <div className="products-cinema-ambient" />
          </div>
          <div className="products-cinema-copy">
            <Title className="products-cinema-title">{productHero.title}</Title>
            <Text className="products-cinema-subtitle">
              {productHero.description}
            </Text>
          </div>
        </section>
      }
    >
      <section className="page-section">
        <div className="products-detail-grid">
          {productDetails.map((item) => (
            <article
              key={item.key}
              className={`products-detail-card products-detail-card-${item.key}`}
            >
              <div
                className="products-detail-media"
                style={
                  {
                    "--product-media-position": item.imagePosition,
                  } as CSSProperties
                }
              >
                <img src={item.image} alt={item.imageAlt} />
                <div className="products-detail-media-overlay" />
              </div>

              <div className="products-detail-content">
                <div className="products-detail-card-top">
                  <Text className="products-detail-tag">{item.tag}</Text>
                  <Title level={3}>{item.name}</Title>
                  <Paragraph className="products-detail-role">
                    {item.role}
                  </Paragraph>
                  <Paragraph className="products-detail-summary">
                    {item.summary}
                  </Paragraph>
                </div>

                <div className="products-detail-block">
                  <Text className="products-detail-label">硬件参数</Text>
                  <div className="products-detail-spec-grid">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="products-detail-spec">
                        <span>{spec.label}</span>
                        <strong>{spec.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="products-detail-meta">
                  <div className="products-detail-panel">
                    <Text className="products-detail-label">AI 能力</Text>
                    <ul>
                      {item.aiCapabilities.map((capability) => (
                        <li key={capability}>{capability}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="products-detail-panel">
                    <Text className="products-detail-label">应用场景</Text>
                    <div className="products-detail-scene-list">
                      {item.applications.map((scene) => (
                        <span key={scene}>{scene}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

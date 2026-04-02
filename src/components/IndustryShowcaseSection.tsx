import { Typography } from "antd";
import { homeIndustryService } from "../data/home";

const { Title, Paragraph, Text } = Typography;

interface IndustryShowcaseSectionProps {
  className?: string;
}

export default function IndustryShowcaseSection({
  className,
}: IndustryShowcaseSectionProps) {
  const sectionClassName = [
    "section-block",
    "industry-showcase-section",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div className="industry-showcase-heading">
        <Text className="industry-showcase-kicker">
          {homeIndustryService.kicker}
        </Text>
        <Title level={2}>{homeIndustryService.title}</Title>
        <Paragraph className="industry-showcase-lead section-lead-copy">
          {homeIndustryService.description}
        </Paragraph>
        <div className="industry-showcase-stats" aria-label="行业服务关键数据">
          {homeIndustryService.stats.map((stat) => (
            <span key={stat} className="industry-showcase-stat">
              {stat}
            </span>
          ))}
        </div>
      </div>
      <div className="industry-showcase-stage">
        <div
          className="industry-showcase-shape industry-showcase-shape-left"
          aria-hidden="true"
        />
        <div
          className="industry-showcase-shape industry-showcase-shape-center"
          aria-hidden="true"
        />
        <div
          className="industry-showcase-shape industry-showcase-shape-right"
          aria-hidden="true"
        />
        <div className="industry-showcase-watermark" aria-hidden="true">
          INDUSTRY MATRIX
        </div>
        <div className="industry-showcase-grid">
          {homeIndustryService.cards.map((card) => (
            <article
              key={card.key}
              className={`industry-showcase-card industry-showcase-card-${card.key}`}
            >
              <div className="industry-showcase-card-visual">
                <img
                  className="industry-showcase-card-image"
                  src={card.image}
                  alt={card.imageAlt}
                  style={{ objectPosition: card.imagePosition }}
                />
                <span className="industry-showcase-card-code">{card.code}</span>
                <span className="industry-showcase-card-scene">
                  {card.scene}
                </span>
                <div
                  className="industry-showcase-card-visual-glow"
                  aria-hidden="true"
                />
              </div>
              <div className="industry-showcase-card-copy">
                <Text className="industry-showcase-card-kicker">
                  {card.titleEn}
                </Text>
                <Title level={3}>{card.title}</Title>
                <Paragraph>{card.summary}</Paragraph>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  homeCapabilities,
  homeCapabilityIntro,
  homeHardwareMatrix,
  homeHero,
  homeIndustryService,
  homeNews,
  homeWhatWeDo,
} from '../data/home';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

export default function HomePage() {
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [whatWeDoSlideIndex, setWhatWeDoSlideIndex] = useState(0);
  const [newsSlideIndex, setNewsSlideIndex] = useState(0);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) {
      return;
    }

    const handleLoaded = () => setHeroVideoReady(true);

    if (video.readyState >= 2) {
      setHeroVideoReady(true);
    }

    video.addEventListener('loadeddata', handleLoaded);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
    };
  }, []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setWhatWeDoSlideIndex((current) => (current + 1) % homeWhatWeDo.slides.length);
    }, 4600);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setNewsSlideIndex((current) => (current + 1) % homeNews.items.length);
    }, 5000);

    return () => {
      window.clearInterval(rotation);
    };
  }, []);

  return (
    <SiteLayout
      title="Navlyn 航链科技 | 开启飞行智能体时代"
      description="Navlyn 航链科技以 ARC ENGINE 为核心，提供飞行智能体系统、硬件终端与行业解决方案，服务测绘、矿业、工程与应急救援场景。"
      contentClassName="page-shell-home"
      hero={
        <section id="home" className={`hero-section${heroVideoReady ? ' is-video-ready' : ''}`}>
          <div className={`hero-media-fallback${heroVideoReady ? ' is-hidden' : ''}`} aria-hidden="true">
            <img className="hero-fallback-poster" src="/media/commander-x1.jpg" alt="" />
            <div className="hero-fallback-float hero-fallback-float-left">
              <img src="/media/scout-s1.png" alt="" />
            </div>
            <div className="hero-fallback-float hero-fallback-float-right">
              <img src="/media/seal-usv.jpg" alt="" />
            </div>
          </div>
          <video
            ref={heroVideoRef}
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/commander-x1.jpg"
            onLoadedData={() => setHeroVideoReady(true)}
          >
            <source src="/media/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-ambient" />
          <div className="hero-overlay" />
          <div className="hero-grid">
              <div className="hero-copy">
              <Title className="hero-title-en">{homeHero.titleEn}</Title>
              <Text className="hero-title-zh">{homeHero.titleZh}</Text>
              <Text className="hero-title-sub">{homeHero.subtitle}</Text>
              <div className="hero-actions">
                <Link className="hero-cta-primary" to="/products">
                  <span>探索产品</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link className="hero-cta-secondary" to="/about">
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
    >
      <section className="section-block what-we-do-section">
        <div className="what-we-do-media">
          <div className="what-we-do-carousel-shell">
              <div className="what-we-do-carousel">
              {homeWhatWeDo.slides.map((slide, index) => (
                <div
                  key={slide.image}
                  className={`what-we-do-slide${index === whatWeDoSlideIndex ? ' is-active' : ''}`}
                  aria-hidden={index === whatWeDoSlideIndex ? 'false' : 'true'}
                >
                  <img src={slide.image} alt={slide.alt} style={{ objectPosition: slide.imagePosition }} />
                </div>
              ))}
              <div className="what-we-do-carousel-overlay" />
              <div className="what-we-do-copy">
                <div className="what-we-do-header">
                  <Text className="what-we-do-kicker">{homeWhatWeDo.kicker}</Text>
                  <Title level={2}>{homeWhatWeDo.title}</Title>
                </div>
                <div className="what-we-do-body">
                  {homeWhatWeDo.paragraphs.map((paragraph) => (
                    <Paragraph key={paragraph} className="section-lead-copy">
                      {paragraph}
                    </Paragraph>
                  ))}
                </div>
              </div>
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-left" aria-hidden="true" />
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-right" aria-hidden="true" />
              <div className="what-we-do-carousel-controls" aria-label="我们做什么图片切换">
                {homeWhatWeDo.slides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    className={`what-we-do-carousel-dot${index === whatWeDoSlideIndex ? ' is-active' : ''}`}
                    onClick={() => setWhatWeDoSlideIndex(index)}
                    aria-label={`查看第 ${index + 1} 张图片`}
                    aria-pressed={index === whatWeDoSlideIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block industry-showcase-section">
        <div className="industry-showcase-heading">
          <Text className="industry-showcase-kicker">{homeIndustryService.kicker}</Text>
          <Title level={2}>{homeIndustryService.title}</Title>
          <Paragraph className="industry-showcase-lead section-lead-copy">{homeIndustryService.description}</Paragraph>
          <div className="industry-showcase-stats" aria-label="行业服务关键数据">
            {homeIndustryService.stats.map((stat) => (
              <span key={stat} className="industry-showcase-stat">
                {stat}
              </span>
            ))}
          </div>
        </div>
        <div className="industry-showcase-stage">
          <div className="industry-showcase-shape industry-showcase-shape-left" aria-hidden="true" />
          <div className="industry-showcase-shape industry-showcase-shape-center" aria-hidden="true" />
          <div className="industry-showcase-shape industry-showcase-shape-right" aria-hidden="true" />
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
                  <span className="industry-showcase-card-scene">{card.scene}</span>
                  <div className="industry-showcase-card-visual-glow" aria-hidden="true" />
                </div>
                <div className="industry-showcase-card-copy">
                  <Text className="industry-showcase-card-kicker">{card.titleEn}</Text>
                  <Title level={3}>{card.title}</Title>
                  <Paragraph>{card.summary}</Paragraph>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block capability-section">
        <div className="capability-heading">
          <Text className="capability-kicker">Core Capabilities</Text>
          <Title level={2}>王牌能力</Title>
          <Paragraph className="capability-lead section-lead-copy">{homeCapabilityIntro}</Paragraph>
        </div>
        <div className="capability-grid capability-grid-tech">
{homeCapabilities.map((item, index) => (
            <article key={item.title} className={`capability-card capability-card-tech capability-card-tech-${index + 1}`}>
              <div className="capability-card-tech-visual">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="capability-card-tech-overlay" />
                <div className="capability-card-tech-glow" aria-hidden="true" />
              </div>
              <div className="capability-card-tech-content">
                <div className="capability-card-tech-header">
                  <div className="capability-card-tech-icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {item.icon === 'arc-engine' && (
                        <>
                          <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="16" cy="16" r="4" fill="currentColor" />
                          <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <path d="M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                      {item.icon === 'hardware' && (
                        <>
                          <rect x="6" y="10" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M11 6v4M21 6v4M6 17h6M20 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          <circle cx="10" cy="17" r="1.5" fill="currentColor" />
                          <circle cx="14" cy="17" r="1.5" fill="currentColor" />
                        </>
                      )}
                      {item.icon === 'swarm' && (
                        <>
                          <circle cx="16" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="8" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="24" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M14 11.5l-4 8M18 11.5l4 8M10 22h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                      {item.icon === 'delivery' && (
                        <>
                          <path d="M6 26l4-6h12l4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 20V8a2 2 0 012-2h4a2 2 0 012 2v12" stroke="currentColor" strokeWidth="1.5" />
                          <circle cx="16" cy="14" r="2" fill="currentColor" />
                          <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="capability-card-tech-meta">
                    <Text className="capability-card-tech-eyebrow">{item.eyebrow}</Text>
                    <Title level={3} className="capability-card-tech-title">{item.title}</Title>
                  </div>
                  <div className="capability-card-tech-stats">
                    <span className="capability-card-tech-stats-value">{item.stats.value}</span>
                    <span className="capability-card-tech-stats-label">{item.stats.label}</span>
                  </div>
                </div>
                <Paragraph className="capability-card-tech-desc">{item.description}</Paragraph>
                <div className="capability-card-tech-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="capability-card-tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block product-entry-section">
        <div className="product-entry-heading">
          <Text className="product-entry-kicker">{homeHardwareMatrix.kicker}</Text>
          <Title level={2}>{homeHardwareMatrix.title}</Title>
          <Paragraph className="product-entry-lead">{homeHardwareMatrix.lead}</Paragraph>
        </div>
        <div className="product-entry-cta-wrapper">
          <Link className="product-entry-link product-entry-cta" to={homeHardwareMatrix.ctaTo}>
            {homeHardwareMatrix.ctaLabel}
          </Link>
        </div>
        
        {/* Hardware Matrix - Tech Style */}
        <div className="product-hardware-tech-section">
          <div className="product-hardware-tech-sidebar">
            <Text className="product-hardware-tech-kicker">{homeHardwareMatrix.hardwareKicker}</Text>
            <Title level={3} className="product-hardware-tech-title">{homeHardwareMatrix.hardwareHeading}</Title>
            <Paragraph className="product-hardware-tech-desc">{homeHardwareMatrix.hardwareDescription}</Paragraph>
          </div>
          <div className="product-hardware-tech-grid">
            {homeHardwareMatrix.items.map((item, index) => (
              <Link 
                key={item.key} 
                className={`product-hardware-tech-card product-hardware-tech-card-${index + 1}`} 
                to="/products"
              >
                <div className="product-hardware-tech-visual">
                  <img 
                    src={item.image} 
                    alt={item.imageAlt} 
                    style={{ objectPosition: item.imagePosition }} 
                  />
                  <div className="product-hardware-tech-overlay" />
                  <div className="product-hardware-tech-glow" aria-hidden="true" />
                  <div className="product-hardware-tech-corner product-hardware-tech-corner-tl" />
                  <div className="product-hardware-tech-corner product-hardware-tech-corner-br" />
                </div>
                <div className="product-hardware-tech-content">
                  <div className="product-hardware-tech-badge">
                    {index === 0 ? '旗舰' : index === 1 ? '作业' : '水面'}
                  </div>
                  <div className="product-hardware-tech-info">
                    <Text className="product-hardware-tech-label">
                      {index === 0 ? 'Commander Series' : index === 1 ? 'Scout Series' : 'Seal Series'}
                    </Text>
                    <Title level={3} className="product-hardware-tech-name">{item.title}</Title>
                    <Paragraph className="product-hardware-tech-spec">{item.description}</Paragraph>
                  </div>
                  <div className="product-hardware-tech-action">
                    <span className="product-hardware-tech-cta">
                      查看详情
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Software Section - ARC ENGINE (简洁版) */}
        <div className="product-software-tech-section">
          <div className="product-software-tech-sidebar">
            <Text className="product-software-tech-kicker">{homeHardwareMatrix.software.kicker}</Text>
            <Title level={3} className="product-software-tech-title">{homeHardwareMatrix.software.title}</Title>
          </div>
          <Link className="product-software-tech-card" to="/arc-os">
            <div className="product-software-tech-bg" aria-hidden="true">
              <img 
                src={homeHardwareMatrix.software.image} 
                alt="" 
                style={{ objectPosition: homeHardwareMatrix.software.imagePosition }} 
              />
              <div className="product-software-tech-bg-overlay" />
              <div className="product-software-tech-grid-lines" />
              <div className="product-software-tech-orb product-software-tech-orb-1" />
              <div className="product-software-tech-orb product-software-tech-orb-2" />
            </div>
            <div className="product-software-tech-shell">
              <div className="product-software-tech-content">
                <div className="product-software-tech-main">
                  <Title level={2} className="product-software-tech-heading">低空智能操作系统</Title>
                  <Paragraph className="product-software-tech-text">围绕任务理解、系统治理与多终端协同，构成航链科技低空智能体系中的软件中枢。</Paragraph>
                </div>
              </div>
            </div>
          </Link>
        </div>
        
        
      </section>

      <section className="section-block news-section">
        <div className="news-heading">
          <Text className="news-kicker">{homeNews.kicker}</Text>
          <Title level={2}>{homeNews.title}</Title>
          <Paragraph className="section-lead-copy">{homeNews.description}</Paragraph>
          <Link className="product-entry-link news-link" to={homeNews.ctaTo}>
            {homeNews.ctaLabel}
          </Link>
        </div>
        <div className="news-carousel">
          <div className="news-carousel-track">
            {homeNews.items.map((item, index) => (
              <a
                key={item.title}
                className={`news-carousel-slide${index === newsSlideIndex ? ' is-active' : ''}`}
                href={item.to}
                target="_blank"
                rel="noreferrer"
                aria-hidden={index === newsSlideIndex ? 'false' : 'true'}
              >
                <div className="news-carousel-media">
                  <img src={item.image} alt={item.alt} />
                  <div className="news-carousel-overlay" />
                  <div className="news-carousel-glow" />
                </div>
                <div className="news-carousel-content">
                  <div className="news-carousel-meta">
                    <span className="news-carousel-tag">{item.tag}</span>
                    <span className="news-carousel-date">{item.meta.split('·')[0].trim()}</span>
                  </div>
                  <Title level={3} className="news-carousel-title">{item.title}</Title>
                  <Paragraph className="news-carousel-summary">{item.summary}</Paragraph>
                  <div className="news-carousel-footer">
                    <div className="news-carousel-source">
                      <svg className="news-carousel-icon" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="8" cy="8" r="2" fill="currentColor"/>
                      </svg>
                      <span>{item.source}</span>
                    </div>
                    <span className="news-carousel-cta">
                      查看详情
                      <svg viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="news-carousel-controls">
            {homeNews.items.map((item, index) => (
              <button
                key={item.title}
                type="button"
                className={`news-carousel-dot${index === newsSlideIndex ? ' is-active' : ''}`}
                onClick={() => setNewsSlideIndex(index)}
                aria-label={`查看第 ${index + 1} 条报道`}
                aria-pressed={index === newsSlideIndex}
              />
            ))}
          </div>
        </div>
      </section>

    </SiteLayout>
  );
}

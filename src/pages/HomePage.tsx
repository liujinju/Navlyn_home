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
              <div className="what-we-do-scroll-hint" aria-hidden="true">
                <span>向下滑动</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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

      <section className="section-block industry-service-section">
        <div className="industry-service-media">
          <div className="industry-service-shell">
            <div className="industry-service-stage">
              <img src={homeIndustryService.image} alt={homeIndustryService.imageAlt} />
              <div className="industry-service-copy">
                <div className="industry-service-header">
                  <Text className="industry-service-kicker">{homeIndustryService.kicker}</Text>
                  <Title level={2}>{homeIndustryService.title}</Title>
                </div>
                <div className="industry-service-body">
                  {homeIndustryService.paragraphs.map((paragraph) => (
                    <Paragraph key={paragraph} className="section-lead-copy">
                      {paragraph}
                    </Paragraph>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block capability-section">
        <div className="capability-heading">
          <Text className="capability-kicker">Core Capabilities</Text>
          <Title level={2}>王牌能力</Title>
          <Paragraph className="capability-lead section-lead-copy">{homeCapabilityIntro}</Paragraph>
        </div>
        <div className="capability-grid">
          {homeCapabilities.map((item) => (
            <article key={item.title} className="capability-card capability-card-visual">
              <div className="capability-card-media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="capability-card-overlay" />
              </div>
              <div className="capability-card-copy">
                <Text className="capability-card-eyebrow">{item.eyebrow}</Text>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
                <Text className="capability-card-note">{item.note}</Text>
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
          <Link className="product-entry-link product-entry-cta" to={homeHardwareMatrix.ctaTo}>
            {homeHardwareMatrix.ctaLabel}
          </Link>
        </div>
        <div className="product-entry-grid product-entry-grid-redesigned">
          <section className="product-entry-cluster product-entry-cluster-hardware">
            <div className="product-entry-cluster-head">
              <Text className="product-entry-group">{homeHardwareMatrix.hardwareKicker}</Text>
              <Title level={3}>{homeHardwareMatrix.hardwareHeading}</Title>
              <Paragraph>{homeHardwareMatrix.hardwareDescription}</Paragraph>
            </div>
            <div className="product-hardware-grid">
              <Link className="product-hardware-card product-hardware-card-featured" to="/products">
                <div className="product-hardware-copy">
                  <Text className="product-entry-group">旗舰终端</Text>
                  <Title level={3}>{homeHardwareMatrix.items[0].title}</Title>
                  <Paragraph>{homeHardwareMatrix.items[0].description}</Paragraph>
                </div>
                <div className="product-hardware-media">
                  <img
                    src={homeHardwareMatrix.items[0].image}
                    alt={homeHardwareMatrix.items[0].imageAlt}
                    style={{ objectPosition: homeHardwareMatrix.items[0].imagePosition }}
                  />
                </div>
              </Link>

              <div className="product-hardware-side">
                {homeHardwareMatrix.items.slice(1).map((item) => (
                  <Link key={item.key} className="product-hardware-card product-hardware-card-secondary" to="/products">
                    <div className="product-hardware-copy">
                      <Title level={3}>{item.title}</Title>
                      <Paragraph>{item.description}</Paragraph>
                    </div>
                    <div className="product-hardware-media">
                      <img src={item.image} alt={item.imageAlt} style={{ objectPosition: item.imagePosition }} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="product-entry-cluster product-entry-cluster-software">
            <div className="product-entry-cluster-head">
              <Text className="product-entry-group">{homeHardwareMatrix.software.kicker}</Text>
              <Title level={3}>{homeHardwareMatrix.software.heading}</Title>
              <Paragraph>以 ARC ENGINE 为软件中枢，贯通任务理解、系统治理与多终端协同，让低空作业从遥控执行走向意图驱动。</Paragraph>
            </div>
            <Link className="product-software-card" to="/arc-os">
              <div className="product-software-copy">
                <Text className="product-entry-group">{homeHardwareMatrix.software.title}</Text>
                <Title level={3}>{homeHardwareMatrix.software.description}</Title>
                <Paragraph className="product-software-summary">{homeHardwareMatrix.software.summary}</Paragraph>
              </div>
              <div className="product-software-media">
                <img
                  src={homeHardwareMatrix.software.image}
                  alt={homeHardwareMatrix.software.imageAlt}
                  style={{ objectPosition: homeHardwareMatrix.software.imagePosition }}
                />
              </div>
            </Link>
          </section>
        </div>
      </section>

      <section className="section-block news-section">
        <div className="news-heading">
          <Text className="news-kicker">{homeNews.kicker}</Text>
          <Title level={2}>{homeNews.title}</Title>
          <Paragraph>{homeNews.description}</Paragraph>
          <Link className="product-entry-link news-link" to={homeNews.ctaTo}>
            {homeNews.ctaLabel}
          </Link>
        </div>
        <div className="news-list">
          {homeNews.items.map((item) => (
            <a
              key={item.title}
              className={`news-list-item${item.featured ? ' is-featured' : ''}`}
              href={item.to}
              target="_blank"
              rel="noreferrer"
            >
              <div className="news-list-media">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="news-list-copy">
                <div className="news-list-meta-row">
                  <Text className="news-card-tag">{item.tag}</Text>
                  <Text className="news-card-meta">{item.meta}</Text>
                </div>
                <Title level={3}>{item.title}</Title>
                <Paragraph>{item.summary}</Paragraph>
                <div className="news-card-footer">
                  <Text className="news-card-source">{item.source}</Text>
                  <span className="news-card-action">阅读原文</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

    </SiteLayout>
  );
}

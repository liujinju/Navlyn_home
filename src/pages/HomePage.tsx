import { Typography } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Title, Paragraph, Text } = Typography;

const capabilityItems = [
  {
    eyebrow: 'System Intelligence',
    title: 'ARC ENGINE 低空智能操作系统',
    description:
      '自主研发 L4 级端侧智能平台，实现任务意图理解、自动规划、全域治理，被誉为低空经济的“安卓系统”。',
    note: '任务理解 · 自动规划 · 全域治理',
    image: '/media/capability-arc-os-1.jpg',
    imageAlt: 'ARC OS system capability',
    imagePosition: 'center 38%',
  },
  {
    eyebrow: 'Hardware + AI',
    title: '软硬件双核驱动',
    description:
      '自研空海一体硬件矩阵与 AI 中枢深度融合，硬件标准化、软件持续进化，达成“硬件折旧，软件增值”。',
    note: '硬件标准化 · 软件持续进化',
    image: '/media/capability-arc-os-2.jpg',
    imageAlt: 'Navlyn hardware and AI integration',
    imagePosition: '64% center',
  },
  {
    eyebrow: 'Secure Swarm',
    title: '群体智能与安全可控',
    description:
      '支持多机与空海联动，最多可调度 200 台设备协同作业；主权级权限治理与主动安全防护，满足关键行业合规要求。',
    note: '多机协同 · 主动安全 · 权限治理',
    image: '/media/capability-swarm-security.png',
    imageAlt: 'Navlyn swarm and secure collaboration',
    imagePosition: '62% 32%',
  },
  {
    eyebrow: 'Field Delivery',
    title: '全场景工程交付能力',
    description:
      '从厘米级精密测绘到 24 小时无人巡检，从极端环境作业到应急救援，提供可落地、可复盘、可规模化的系统能力。',
    note: '实地项目 · 全球交付 · 可规模化落地',
    image: '/media/capability-delivery.png',
    imageAlt: 'Navlyn engineering delivery capability',
    imagePosition: 'center center',
  },
];

const hardwareMatrixItems = [
  {
    key: 'commander',
    title: '指挥官 Commander X1',
    description: '边缘算力与任务决策中心',
    image: '/media/commander-x1-product.jpg',
    imageAlt: 'Commander X1',
    imagePosition: 'center 58%',
  },
  {
    key: 'scout',
    title: '尖兵 Scout S1',
    description: '高性价比多功能作业机',
    image: '/media/scout-s1.png',
    imageAlt: 'Scout S1',
    imagePosition: 'center center',
  },
  {
    key: 'seal',
    title: '海豹 Seal S1',
    description: '自主水面无人救生艇',
    image: '/media/seal-usv.jpg',
    imageAlt: 'Seal S1',
    imagePosition: 'center center',
  },
];

const softwareSystemItem = {
  title: 'ARC ENGINE',
  description: '低空智能操作系统',
  summary:
    '围绕任务理解、系统治理与多终端协同，构成航链科技低空智能体系中的软件中枢。',
  image: '/media/product-entry-arc-os.jpg',
  imageAlt: 'ARC OS software system',
  imagePosition: 'center center',
};

const whatWeDoSlides = [
  {
    image: '/media/what-we-do-1.png',
    alt: '航链科技业务与团队展示',
    imagePosition: 'center center',
  },
  {
    image: '/media/what-we-do-2.png',
    alt: '航链科技低空智能场景展示',
    imagePosition: 'center center',
  },
];

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
      setWhatWeDoSlideIndex((current) => (current + 1) % whatWeDoSlides.length);
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
              <Title className="hero-title-en">Enabling Intelligent Airspace Capabilities</Title>
              <Text className="hero-title-zh">开启飞行智能</Text>
              <Text className="hero-title-sub">去飞手化｜安全可控｜群体协同</Text>
            </div>
          </div>
        </section>
      }
    >
      <section className="section-block what-we-do-section">
        <div className="what-we-do-media">
          <div className="what-we-do-carousel-shell">
            <div className="what-we-do-carousel">
              {whatWeDoSlides.map((slide, index) => (
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
                  <Text className="what-we-do-kicker">What We Do</Text>
                  <Title level={2}>我们做什么</Title>
                </div>
                <div className="what-we-do-body">
                  <Paragraph className="section-lead-copy">
                    航链科技（Navlyn）2025 年 8 月成立于中国浙江，承袭法国 Innotech-drone 工业无人机与精密测绘技术积淀，
                  </Paragraph>
                  <Paragraph className="section-lead-copy">
                    以低空经济 + 人工智能为核心定位，通过 AI 深度赋能硬件，打造具备高度自主意识的飞行智能体。
                  </Paragraph>
                  <Paragraph className="section-lead-copy">
                    我们提供从硬件终端、ARC ENGINE 智能操作系统到行业解决方案的全链路低空智能服务，
                  </Paragraph>
                  <Paragraph className="section-lead-copy">
                    让作业从“遥控执行”走向“意图决策”，推动全球低空经济迈入智能化 3.0 时代。
                  </Paragraph>
                </div>
              </div>
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-left" aria-hidden="true" />
              <div className="what-we-do-carousel-orb what-we-do-carousel-orb-right" aria-hidden="true" />
              <div className="what-we-do-carousel-controls" aria-label="我们做什么图片切换">
                {whatWeDoSlides.map((slide, index) => (
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
              <img src="/media/industry-service-bp-page-12.png" alt="行业服务案例展示" />
              <div className="industry-service-copy">
                <div className="industry-service-header">
                  <Text className="industry-service-kicker">Industry Services</Text>
                  <Title level={2}>行业服务</Title>
                </div>
                <div className="industry-service-body">
                  <Paragraph className="section-lead-copy">
                    航链科技以全场景解决方案，服务测绘、建筑与能源、矿业资源、生态林业、公路铁路巡检、安防、应急救援七大领域，覆盖全球四大洲，落地
                    200+ 实地项目，累计飞行里程超 400 万公里。
                  </Paragraph>
                  <Paragraph className="section-lead-copy">已成为多国政府、世界 500 强企业的低空智能合作伙伴。</Paragraph>
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
          <Paragraph className="capability-lead section-lead-copy">
            从系统中枢、软硬件协同到群体安全与工程交付，航链科技把低空能力沉淀为可复用、可规模化的系统能力。
          </Paragraph>
        </div>
        <div className="capability-grid">
          {capabilityItems.map((item) => (
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
          <Text className="product-entry-kicker">Product Gateways</Text>
          <Title level={2}>产品入口</Title>
          <Paragraph className="product-entry-lead">
            从空海一体硬件终端到 ARC ENGINE 智能中枢，航链科技构建完整的低空智能产品体系。
          </Paragraph>
          <Link className="product-entry-link product-entry-cta" to="/contact">
            立即预约体验
          </Link>
        </div>
        <div className="product-entry-grid product-entry-grid-redesigned">
          <section className="product-entry-cluster product-entry-cluster-hardware">
            <div className="product-entry-cluster-head">
              <Text className="product-entry-group">Core Hardware Matrix</Text>
              <Title level={3}>核心硬件矩阵</Title>
              <Paragraph>
                覆盖任务决策、空中执行与水面搜救三类终端，面向多场景部署形成完整的现场执行能力。
              </Paragraph>
            </div>
            <div className="product-hardware-grid">
              <Link className="product-hardware-card product-hardware-card-featured" to="/products">
                <div className="product-hardware-copy">
                  <Text className="product-entry-group">旗舰终端</Text>
                  <Title level={3}>{hardwareMatrixItems[0].title}</Title>
                  <Paragraph>{hardwareMatrixItems[0].description}</Paragraph>
                </div>
                <div className="product-hardware-media">
                  <img
                    src={hardwareMatrixItems[0].image}
                    alt={hardwareMatrixItems[0].imageAlt}
                    style={{ objectPosition: hardwareMatrixItems[0].imagePosition }}
                  />
                </div>
              </Link>

              <div className="product-hardware-side">
                {hardwareMatrixItems.slice(1).map((item) => (
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
              <Text className="product-entry-group">Core Software System</Text>
              <Title level={3}>核心软件系统</Title>
              <Paragraph>
                以 ARC ENGINE 为软件中枢，贯通任务理解、系统治理与多终端协同，让低空作业从遥控执行走向意图驱动。
              </Paragraph>
            </div>
            <Link className="product-software-card" to="/arc-os">
              <div className="product-software-copy">
                <Text className="product-entry-group">ARC ENGINE</Text>
                <Title level={3}>{softwareSystemItem.description}</Title>
                <Paragraph className="product-software-summary">{softwareSystemItem.summary}</Paragraph>
              </div>
              <div className="product-software-media">
                <img
                  src={softwareSystemItem.image}
                  alt={softwareSystemItem.imageAlt}
                  style={{ objectPosition: softwareSystemItem.imagePosition }}
                />
              </div>
            </Link>
          </section>
        </div>
      </section>

    </SiteLayout>
  );
}

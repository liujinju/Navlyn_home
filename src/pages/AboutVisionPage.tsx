import { Typography } from 'antd';
import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import SiteLayout from '../layouts/SiteLayout';
import { aboutHighlight, aboutMilestones } from '../data/site';
import { aboutSubpages } from '../data/subpages';

const { Title, Paragraph, Text } = Typography;

const visionPillars = [
  {
    title: '品牌愿景',
    description: '让飞行智能体从概念走向真实业务现场，成为低空经济的新型基础能力。',
  },
  {
    title: '系统方向',
    description: '用 ARC ENGINE 串起硬件终端、任务理解、执行编排与持续学习闭环。',
  },
  {
    title: '国际合作',
    description: '承袭法国工业无人机与精密测绘积累，继续构建面向全球的交付网络与合作基础。',
  },
];

export default function AboutVisionPage() {
  return (
    <SiteLayout
      title="公司愿景 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技的品牌愿景、核心表达与阶段性里程碑。"
      hero={
        <ImmersivePageHero
          prefix="about-page-hero"
          media={<img src="/media/about-team-collab.jpg" alt="Navlyn company vision" />}
          tag="Company Vision"
          title="以飞行智能体系统推动低空能力进入真正可规模化的时代"
          description="围绕品牌愿景、系统能力与国际合作基础，建立 Navlyn 在低空智能领域的长期表达与发展方向。"
        />
      }
    >
      <section className="page-section doc-story-stage">
        <SubpageTabNav items={aboutSubpages} />
        <div className="section-heading">
          <Text className="news-page-kicker">Vision</Text>
          <Title level={2}>{aboutHighlight.title}</Title>
          <Paragraph>{aboutHighlight.description}</Paragraph>
        </div>
        <div className="doc-vision-pillars">
          {visionPillars.map((item) => (
            <article key={item.title} className="doc-vision-pillar">
              <Title level={3}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </article>
          ))}
        </div>
        <div className="doc-story-grid">
          {aboutMilestones.map((item) => (
            <article key={item} className="doc-story-card">
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

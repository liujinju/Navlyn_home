import { Typography } from "antd";
import SiteLayout from "../layouts/SiteLayout";

const { Title, Paragraph, Text } = Typography;

const arcKeywords = [
  {
    label: "Autonomous",
    value: "全时自主",
    description:
      "从任务理解到执行编排，系统尽可能把重复操作转化为自动化工作流。",
  },
  {
    label: "Reliable",
    value: "极致可靠",
    description:
      "围绕权限治理、安全边界与系统稳定性，把复杂场景下的执行风险压到可控范围。",
  },
  {
    label: "Collaborative",
    value: "群体协同",
    description:
      "把空中终端、水面终端与现场操作统一编排，让系统能力真正落到多域任务里。",
  },
];

export default function ArcPage() {
  return (
    <SiteLayout
      title="ARC ENGINE | Navlyn 航链科技"
      description="查看 NAVLYN ARC 如何重塑低空作业的大脑，并通过 Learning Loop 持续进化。"
      hero={
        <section className="arc-hero">
          <div className="arc-hero-media">
            <img src="/media/arc-engine-01.jpg" alt="NAVLYN ARC" />
          </div>
          <div className="arc-hero-overlay" />
          <div className="arc-hero-copy">
            <Title level={1} className="arc-hero-title">
              NAVLYN ARC：重塑低空作业的"大脑"
            </Title>
            <Text className="arc-hero-subtitle">
              从"遥控执行"进化至"意图决策"。基于 AI
              驱动的自主飞行架构，让每一架无人机拥有专业飞手的直觉。
            </Text>
          </div>
          <div className="arc-hero-feature">
            <img
              src="/media/arc-engine-02.jpg"
              alt="Voice Control"
              className="arc-hero-feature-image"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                Voice &amp; Command Control
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                语音指令，代替复杂人工
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                无需复杂操作，通过简单指令即可让无人机理解意图，自主规划飞行路线。
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src="/media/arc-engine-03.jpg"
              alt="Voice Control"
              className="arc-hero-feature-image"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                {" "}
                Muti-domain Flexibility
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                跨域协同，灵活调度
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                一个人就能轻松掌控一整队无人机，让它们像团队一样配合工作。
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src="/media/arc-engine-04.jpg"
              alt="Voice Control"
              className="arc-hero-feature-image"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                Secure Access Control
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                权限分明，操作合规
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                内置严格的安全审批流程，只有获得授权的人才能操作，防止任何违规飞行
                。
              </Paragraph>
            </div>
          </div>
          <div className="arc-hero-feature">
            <img
              src="/media/arc-engine-05.jpg"
              alt="Voice Control"
              className="arc-hero-feature-image"
            />
            <div className="arc-hero-feature-copy">
              <Text className="arc-hero-feature-label">
                Quantify Progress Scale Success
              </Text>
              <Title level={2} className="arc-hero-feature-title">
                量化进步大脑，快速迭代经验
              </Title>
              <Paragraph className="arc-hero-feature-desc">
                根据历史作业数据，系统能帮你优化下一次的任务规划，让作业效率持续翻倍。用数据评价飞行好坏，不再靠感觉。成功的经验可以快速打包，复制到其他行业。
                Our system optimizes mission planning based on historical data, driving a continuous cycle of efficiency. We replace intuition with deterministic analytics to evaluate flight performance. Capture elite mission protocols and replicate them across global operational sectors instantly.
              </Paragraph>
            </div>
          </div>
        </section>
      }
    ></SiteLayout>
  );
}

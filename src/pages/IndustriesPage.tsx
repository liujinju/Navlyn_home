import IndustryShowcaseSection from "../components/IndustryShowcaseSection";
import SiteLayout from "../layouts/SiteLayout";

export default function IndustriesPage() {
  return (
    <SiteLayout
      title="行业应用 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技围绕农业、矿业、能源、建筑、海岸救援与巡检六大方向构建的低空智能行业服务体系。"
    >
      <IndustryShowcaseSection className="industry-showcase-section-page" />
    </SiteLayout>
  );
}

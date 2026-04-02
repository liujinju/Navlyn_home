/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-27 20:42:48
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-02 10:58:34
 * @FilePath: /Navlyn_home/src/pages/AboutPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useRef, useState } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import SiteLayout from "../layouts/SiteLayout";

const { Paragraph } = Typography;

export default function AboutPage() {
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.readyState >= 2) setVideoReady(true);
    const handleLoaded = () => setVideoReady(true);
    video.addEventListener("loadeddata", handleLoaded);
    return () => video.removeEventListener("loadeddata", handleLoaded);
  }, []);

  return (
    <SiteLayout
      title="关于我们 | Navlyn 航链科技"
      description="查看 Navlyn 航链科技关于公司愿景、新闻报道与职业招聘的二级入口。"
      hero={
        <section className="about-hero">
          <div className="about-hero-media">
            <video
              ref={videoRef}
              className="about-hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster="/media/about-team-collab.jpg"
              onLoadedData={() => setVideoReady(true)}
            >
              <source src="/media/about.mp4" type="video/mp4" />
            </video>
          </div>
        </section>
      }
    >
      <section className="page-section about-content">
        <div className="about-content-wrapper">
          <Paragraph className="about-content-text">
            浙江航链科技有限公司是一家聚焦低空智能装备与行业解决方案的科技企业。公司源自法国
            Innotech
            的技术与国际化基础，相关产品与方案已在海外多个国家和地区建立分销网络，并在巡检、测绘、安防、应急等多个场景形成落地案例，部分项目已成为国际行业中具有代表性的经典应用。
          </Paragraph>
          <Paragraph className="about-content-text">
            在此基础上，航链科技依托中国成熟的制造与供应链体系，进一步推动低空装备的本地化研发、快速迭代与规模化交付。公司不仅聚焦复合翼无人机、无人船等核心装备，也积极推动低空智能操作系统开发，形成"智能硬件
            + 操作系统 + 场景方案"的整体能力。
          </Paragraph>
          <Paragraph className="about-content-text">
            未来，航链科技将以产业链主的角色，持续整合更多无人机、低空基础设施及相关智能制造企业，在人工智能与机器人智能能力的赋能下，推动低空应用从单一设备走向系统化、协同化和规模化升级，目前正处于全面拓展与加速落地阶段。
          </Paragraph>
        </div>
      </section>
    </SiteLayout>
  );
}

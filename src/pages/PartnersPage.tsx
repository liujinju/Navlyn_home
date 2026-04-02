/*
 * @Author: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @Date: 2026-03-27 20:44:53
 * @LastEditors: Icon oncwnuEuU001JU72QF0Wv2zwAqd0@git.weixin.qq.com
 * @LastEditTime: 2026-04-02 10:42:44
 * @FilePath: /Navlyn_home/src/pages/PartnersPage.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import SiteLayout from '../layouts/SiteLayout';

const { Paragraph } = Typography;

export default function PartnersPage() {
  return (
    <SiteLayout
      title="客户与合作 | Navlyn 航链科技"
      description="查看 Navlyn 客户与合作页面下的合作伙伴与全球经销商入口。"
      hero={
        <section className="partners-hero">
          <div className="partners-hero-media">
            <img src="/media/partners-01.jpg" alt="Partners" />
          </div>
          <div className="partners-hero-overlay" />
          <div className="partners-hero-copy">
            <h1 className="partners-hero-title">链接世界，航向未来</h1>
            <p className="partners-hero-subtitle">每一处航迹，都有我们的伙伴。</p>
          </div>
        </section>
      }
    >
      <section className="page-section partners-content">
        <div className="partners-content-wrapper">
          <Paragraph className="partners-content-text">
            "航链"不仅是技术的链接，更是全球信任的链接。我们在多哥感受非洲的生机，在马来西亚见证东盟的速度，在德国、比利时严谨的工业氛围中砥砺前行。
          </Paragraph>
          <Paragraph className="partners-content-text">
            无论您身处澳大利亚的广袤海岸，还是沙特阿拉伯的能源基地，Navlyn 官方授权代理商均可为您提供最及时的专业咨询与技术支撑。
          </Paragraph>
          <div className="partners-content-cta">
            <Link to="/contact" className="partners-cta-button">
              联系我们
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

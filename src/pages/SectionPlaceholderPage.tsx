import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import UpdatePageState from '../components/UpdatePageState';
import type { SubpageLinkItem } from '../data/subpages';
import SiteLayout from '../layouts/SiteLayout';

interface SectionPlaceholderPageProps {
  pageTitle: string;
  seoTitle: string;
  seoDescription: string;
  heroTag: string;
  heroTitle: string;
  heroDescription: string;
  media?: string;
  subpages?: SubpageLinkItem[];
}

export default function SectionPlaceholderPage({
  pageTitle,
  seoTitle,
  seoDescription,
  heroTag,
  heroTitle,
  heroDescription,
  media = '/media/about-team-collab.jpg',
  subpages,
}: SectionPlaceholderPageProps) {
  return (
    <SiteLayout
      title={seoTitle}
      description={seoDescription}
      hero={
        <ImmersivePageHero
          prefix="simple-subpage-hero"
          media={<img src={media} alt={pageTitle} />}
          tag={heroTag}
          title={heroTitle}
          description={heroDescription}
        />
      }
    >
      <section className="page-section doc-placeholder-stage">
        {subpages?.length ? <SubpageTabNav items={subpages} /> : null}
        <UpdatePageState
          kicker={heroTag}
          title={pageTitle}
          description="当前页面框架已建立，具体资料、图文内容与交互信息将根据后续素材继续补充。"
        />
      </section>
    </SiteLayout>
  );
}

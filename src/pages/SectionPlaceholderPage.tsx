import ImmersivePageHero from '../components/ImmersivePageHero';
import SubpageTabNav from '../components/SubpageTabNav';
import UpdatePageState from '../components/UpdatePageState';
import type { SubpageLinkItem } from '../data/subpages';
import { useI18n } from '../i18n/I18nProvider';
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
  const { page } = useI18n();

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
          description={page.common.placeholderDescription}
        />
      </section>
    </SiteLayout>
  );
}

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { knowledgeSubpages, partnerSubpages } from './data/subpages';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ArcPage = lazy(() => import('./pages/ArcPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const KnowledgeBasePage = lazy(() => import('./pages/KnowledgeBasePage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const PartnersAlliancesPage = lazy(() => import('./pages/PartnersAlliancesPage'));
const PartnersDistributorsPage = lazy(() => import('./pages/PartnersDistributorsPage'));
const SectionPlaceholderPage = lazy(() => import('./pages/SectionPlaceholderPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AboutVisionPage = lazy(() => import('./pages/AboutVisionPage'));
const AboutNewsPage = lazy(() => import('./pages/AboutNewsPage'));
const AboutCareersPage = lazy(() => import('./pages/AboutCareersPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
  return (
    <Suspense
      fallback={
        <div className="route-loader" aria-live="polite" aria-busy="true">
          <div className="route-loader-orb" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/arc-os" element={<ArcPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route
          path="/knowledge-base/research"
          element={
            <SectionPlaceholderPage
              pageTitle="科研文章"
              seoTitle="科研文章 | Navlyn 航链科技"
              seoDescription="知识库科研文章页正在更新。"
              heroTag="Knowledge Base"
              heroTitle="科研文章"
              heroDescription="围绕系统原理、任务理解与智能调度的文章页框架已经建立。"
              media="/media/arc-module-10.jpg"
              subpages={knowledgeSubpages}
            />
          }
        />
        <Route
          path="/knowledge-base/cases"
          element={
            <SectionPlaceholderPage
              pageTitle="成功案例"
              seoTitle="成功案例 | Navlyn 航链科技"
              seoDescription="知识库成功案例页正在更新。"
              heroTag="Knowledge Base"
              heroTitle="成功案例"
              heroDescription="围绕项目交付、场景落地与复盘方法的案例页框架已经建立。"
              media="/media/company-news-feature.jpg"
              subpages={knowledgeSubpages}
            />
          }
        />
        <Route
          path="/knowledge-base/updates"
          element={
            <SectionPlaceholderPage
              pageTitle="行业动态"
              seoTitle="行业动态 | Navlyn 航链科技"
              seoDescription="知识库行业动态页正在更新。"
              heroTag="Knowledge Base"
              heroTitle="行业动态"
              heroDescription="围绕低空经济、政策与行业实践的动态页框架已经建立。"
              media="/media/company-news-collab.jpg"
              subpages={knowledgeSubpages}
            />
          }
        />
        <Route
          path="/knowledge-base/downloads"
          element={
            <SectionPlaceholderPage
              pageTitle="资料下载"
              seoTitle="资料下载 | Navlyn 航链科技"
              seoDescription="知识库资料下载页正在更新。"
              heroTag="Knowledge Base"
              heroTitle="资料下载"
              heroDescription="围绕品牌资料、系统手册与产品说明的下载页框架已经建立。"
              media="/media/about-team-collab.jpg"
              subpages={knowledgeSubpages}
            />
          }
        />
        <Route
          path="/knowledge-base/help"
          element={
            <SectionPlaceholderPage
              pageTitle="帮助中心"
              seoTitle="帮助中心 | Navlyn 航链科技"
              seoDescription="知识库帮助中心页正在更新。"
              heroTag="Knowledge Base"
              heroTitle="帮助中心"
              heroDescription="围绕常见问题、部署说明与使用答疑的帮助页框架已经建立。"
              media="/media/arc-module-09.jpg"
              subpages={knowledgeSubpages}
            />
          }
        />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/partners/alliances" element={<PartnersAlliancesPage />} />
        <Route path="/partners/distributors" element={<PartnersDistributorsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/vision" element={<AboutVisionPage />} />
        <Route path="/about/news" element={<AboutNewsPage />} />
        <Route path="/about/careers" element={<AboutCareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

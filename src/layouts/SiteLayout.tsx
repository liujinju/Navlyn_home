import { Button, Drawer, Dropdown, Layout, Menu, Space, Typography } from 'antd';
import type { MenuProps } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { PropsWithChildren, ReactNode } from 'react';
import Seo from '../components/Seo';
import { footerNavGroups, footerSummary, siteNavItems } from '../data/site';

const { Header, Content, Footer } = Layout;
const { Paragraph, Text } = Typography;

interface SiteLayoutProps extends PropsWithChildren {
  title: string;
  description: string;
  hero?: ReactNode;
  showFooter?: boolean;
  contentClassName?: string;
}

export default function SiteLayout({
  title,
  description,
  hero,
  children,
  showFooter = true,
  contentClassName,
}: SiteLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeNavPath =
    siteNavItems.find(
      (item) => item.path === location.pathname || (item.path !== '/' && location.pathname.startsWith(`${item.path}/`)),
    )?.path ?? location.pathname;

  const menuItems: MenuProps['items'] = siteNavItems.map((item) => ({
    key: item.path,
    icon: item.icon,
    label: <Link to={item.path}>{item.label}</Link>,
  }));

  const languageItems: MenuProps['items'] = [
    { key: 'zh', label: '中文' },
    { key: 'en', label: 'English' },
    { key: 'fr', label: 'Français' },
    { key: 'es', label: 'Español' },
  ];

  return (
    <Layout className="site-shell">
      <Seo title={title} description={description} />
      <Header className="site-header">
        <Link to="/" className="brand-mark">
          <img src="/media/logo-white.png" alt="Navlyn 航链科技" />
        </Link>
        <Menu
          className="desktop-menu"
          mode="horizontal"
          selectedKeys={[activeNavPath]}
          items={menuItems}
          overflowedIndicator={null}
        />
        <Space size="middle" className="header-actions-desktop">
          <Dropdown menu={{ items: languageItems }} trigger={['click']} placement="bottomRight">
            <Button type="default" ghost className="header-language-button">
              <span className="language-flag-icon" aria-hidden="true" />
              <span>语言</span>
              <DownOutlined />
            </Button>
          </Dropdown>
          <Button type="default" ghost className="header-account-button" onClick={() => navigate('/register')}>
            注册
          </Button>
          <Button type="default" ghost className="header-account-button" onClick={() => navigate('/login')}>
            登录
          </Button>
          <Button type="primary" className="header-account-button is-primary" onClick={() => navigate('/profile')}>
            个人中心
          </Button>
        </Space>
        <div className="header-actions-mobile">
          <Button
            className="mobile-menu-trigger"
            type="default"
            ghost
            icon={<MenuOutlined />}
            onClick={() => setMobileNavOpen(true)}
            aria-label="打开导航菜单"
          />
        </div>
      </Header>
      <Drawer
        title="Navlyn"
        placement="right"
        width={320}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        rootClassName="mobile-nav-drawer"
      >
        <Menu
          mode="inline"
          selectedKeys={[activeNavPath]}
          items={menuItems}
          onClick={() => setMobileNavOpen(false)}
        />
        <div className="mobile-nav-actions">
          <Dropdown menu={{ items: languageItems }} trigger={['click']} placement="bottomRight">
            <Button block type="default" ghost className="header-language-button mobile-language-button">
              <span className="language-flag-icon" aria-hidden="true" />
              <span>语言</span>
              <DownOutlined />
            </Button>
          </Dropdown>
          <Button
            block
            type="default"
            ghost
            className="header-account-button"
            onClick={() => {
              setMobileNavOpen(false);
              navigate('/register');
            }}
          >
            注册
          </Button>
          <Button
            block
            type="default"
            ghost
            className="header-account-button"
            onClick={() => {
              setMobileNavOpen(false);
              navigate('/login');
            }}
          >
            登录
          </Button>
          <Button
            block
            type="primary"
            className="header-account-button is-primary"
            onClick={() => {
              setMobileNavOpen(false);
              navigate('/profile');
            }}
          >
            个人中心
          </Button>
        </div>
      </Drawer>
      <Content>
        {hero}
        {children ? <div className={`page-shell${contentClassName ? ` ${contentClassName}` : ''}`}>{children}</div> : null}
      </Content>
      {showFooter ? (
        <Footer className="site-footer">
          <div className="site-footer-inner">
            <div className="site-footer-topbar">
              <div className="site-footer-brand">
                <img src="/media/logo-white.png" alt="Navlyn 航链科技" />
                <div className="site-footer-brand-copy">
                  <Text className="site-footer-brand-name">Navlyn 航链科技</Text>
                  <Paragraph>{footerSummary}</Paragraph>
                </div>
              </div>
              <Button type="primary" onClick={() => navigate('/partners')}>
                客户与合作
              </Button>
            </div>

            <div className="site-footer-grid">
              {footerNavGroups.map((group) => (
                <div key={group.title} className="site-footer-group">
                  <Text className="site-footer-group-title">{group.title}</Text>
                  <div className="site-footer-links">
                    {group.items.map((item) =>
                      item.path ? (
                        <Link key={item.label} className="site-footer-link" to={item.path}>
                          {item.label}
                        </Link>
                      ) : (
                        <span key={item.label} className="site-footer-link is-static">
                          {item.label}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="site-footer-bottom">
              <Text>© 2026 Navlyn. All rights reserved.</Text>
            </div>
          </div>
        </Footer>
      ) : null}
    </Layout>
  );
}

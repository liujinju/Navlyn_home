import { Typography } from 'antd';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

interface HeroAction {
  label: string;
  href?: string;
  to?: string;
  primary?: boolean;
}

interface HeroNavItem {
  label: string;
  title: string;
  href: string;
  featured?: boolean;
}

interface ImmersivePageHeroProps {
  prefix: string;
  media: ReactNode;
  tag: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  navItems?: HeroNavItem[];
  extra?: ReactNode;
}

function renderHeroAction(action: HeroAction) {
  const className = `route-hero-action${action.primary ? ' is-primary' : ''}`;

  if (action.to) {
    return (
      <Link key={action.label} to={action.to} className={className}>
        {action.label}
      </Link>
    );
  }

  return (
    <a key={action.label} href={action.href} className={className}>
      {action.label}
    </a>
  );
}

export default function ImmersivePageHero({
  prefix,
  media,
  tag,
  title,
  description,
  actions,
  navItems,
  extra,
}: ImmersivePageHeroProps) {
  return (
    <section className={prefix}>
      <div className={`${prefix}-media`}>{media}</div>
      <div className={`${prefix}-overlay`} />
      <div className={`${prefix}-shell`}>
        <div className={`${prefix}-copy`}>
          <Text className={`${prefix}-tag`}>{tag}</Text>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
          {actions?.length ? <div className="route-hero-actions">{actions.map(renderHeroAction)}</div> : null}
        </div>

        {navItems?.length ? (
          <div className={`${prefix}-nav`}>
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={`${item.label}-${item.title}`}
                  to={item.href}
                  className={`${prefix}-link${item.featured ? ` ${prefix}-link-featured` : ''}`}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </Link>
              ) : (
                <a
                  key={`${item.label}-${item.title}`}
                  href={item.href}
                  className={`${prefix}-link${item.featured ? ` ${prefix}-link-featured` : ''}`}
                >
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </a>
              ),
            )}
          </div>
        ) : null}

        {extra}
      </div>
    </section>
  );
}

import { Link, useLocation } from 'react-router-dom';
import type { SubpageLinkItem } from '../data/subpages';

interface SubpageTabNavProps {
  items: SubpageLinkItem[];
}

export default function SubpageTabNav({ items }: SubpageTabNavProps) {
  const location = useLocation();

  return (
    <nav className="doc-subpage-tabs" aria-label="子页面导航">
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`doc-subpage-tab${isActive ? ' is-active' : ''}`}
          >
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}


import { Link } from 'react-router-dom';
import { header_links } from '../../data/links';

export const TopNavigation = () => {
  return (
    <nav>
      <ul className="hidden xl:flex items-center gap-10 ">
        {header_links.map(link => (
          <Link to={`${link.href}`} key={link.id} className="li-item header-link">
              {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

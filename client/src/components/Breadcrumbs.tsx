import { Link, useLocation } from 'react-router-dom';

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-100 py-2 px-4 shadow-md w-full">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <li key={to} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="text-gray-500">{decodeURIComponent(value)}</span>
                ) : (
                  <Link to={to} className="text-blue-600 hover:underline">
                    {decodeURIComponent(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

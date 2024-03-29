import { Link, RouteObject } from 'react-router-dom';

function onClickScrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function mapLinks(routes: Array<RouteObject>, className: string, prefix?: string) {
    return routes.map(({ id, path }) => {
        return (
            <Link
                key={id}
                className={className}
                to={prefix ? `${prefix}/${path}` : `/${path}`}
                onClick={onClickScrollTop}
            >
                {id}
            </Link>
        );
    });
}

export { onClickScrollTop, mapLinks };

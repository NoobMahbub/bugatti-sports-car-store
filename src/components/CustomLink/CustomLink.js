import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? '#964B00' : 'black', textDecoration: "none", marginLeft: '18px', borderBlockEnd: match ? '3px solid #964B00' : '3px solid #dcdcde', padding: '5px',
                    gap: '1rem',
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
}

export default CustomLink;
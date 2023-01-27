
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <nav>
                <div className='menu'>
                    <Link to='/' >Home</Link>
                    <Link to='/converter'>Converter</Link>
                </div>
            </nav>
            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
};

export default Layout;
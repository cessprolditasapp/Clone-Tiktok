import Header from '~/components/Layout/Header';
import SideBar from '~/components/Layout/Sidebar';

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className="Container">
                <SideBar />
                <div className="Content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;

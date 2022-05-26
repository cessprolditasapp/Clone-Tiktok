import Home from '~/pages/Home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Profile from '~/pages/profile';
import Search from '~/pages/search';
import routeConfig from '~/config/routes';

import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: routeConfig.home, component: Home },
    { path: routeConfig.following, component: Following },
    { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routeConfig.profile, component: Profile },
    { path: routeConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

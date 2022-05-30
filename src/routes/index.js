import Home from '~/pages/Home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Profile from '~/pages/profile';
import Search from '~/pages/search';

import config from '~/config'

import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

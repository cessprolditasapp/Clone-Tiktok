import Home from '~/pages/Home';
import Following from '~/pages/following';
import Upload from '~/pages/upload';
import Profile from '~/pages/profile';
import Search from '~/pages/search';

import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/@:nickname', component: Profile },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

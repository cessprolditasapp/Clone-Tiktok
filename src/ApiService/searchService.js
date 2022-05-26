import * as request from '~/utils/request';

export const Search = async (q, type = 'less') => {
    try {
        const user = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return user.data;
    } catch (error) {
        console.log(error);
    }
};

import * as httpRequest from '~/utils/httpRequest';

export const Search = async (q, type = 'less') => {
    try {
        const user = await httpRequest.get('users/search', {
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

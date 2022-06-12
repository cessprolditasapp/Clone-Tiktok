import classNames from 'classnames/bind';
import PropTypes from 'prop-types'


import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate });
    return (
        <Button onClick={onClick} to={data.path} className={classes} text lefticon={data.icon}>
            {data.title} {data.language}
        </Button>
    );
}

MenuItem.propTypes={
    data:PropTypes.object,
    obClick:PropTypes.func
}
export default MenuItem;

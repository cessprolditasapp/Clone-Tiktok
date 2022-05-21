import classNames  from 'classnames/bind'

import styles from './Menu.module.scss'

import Button from '~/components/Button'

const cx = classNames.bind(styles)

function MenuItem({data,onClick}) {
    return ( 
        <Button onClick={onClick} to={data.path} className={cx('menu-item')} text lefticon={data.icon}>
            {data.title} {data.language}
        </Button>

    );
}

export default MenuItem;
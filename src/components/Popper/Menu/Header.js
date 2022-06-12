import classNames from 'classnames/bind';
import { BsChevronLeft } from '@react-icons/all-files/bs/BsChevronLeft';
import PropTypes from 'prop-types'


import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <BsChevronLeft />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}
Header.propTypes={
    title:PropTypes.string,
    onBack:PropTypes.func
}
export default Header;

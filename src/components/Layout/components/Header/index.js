import { BsXCircleFill } from '@react-icons/all-files/bs/BsXCircleFill';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <div className={cx('search')}>
                    <input className={cx('search-input')} placeholder="Search account and video" spellCheck={false} />
                    <button className={cx('clear')}>
                        <BsXCircleFill />
                    </button>
                    <AiOutlineLoading3Quarters className={cx('loading')} />
                    <span className={cx('separate-line')}></span>
                    <button className={cx('search-btn')}>
                        <BsSearch />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;

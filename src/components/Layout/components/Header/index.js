import { BsXCircleFill } from '@react-icons/all-files/bs/BsXCircleFill';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            className={cx('search-input')}
                            placeholder="Search account and video"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <BsXCircleFill />
                        </button>
                        <AiOutlineLoading3Quarters className={cx('loading')} />
                        <span className={cx('separate-line')}></span>
                        <button className={cx('search-btn')}>
                            <BsSearch />
                        </button>
                    </div>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;

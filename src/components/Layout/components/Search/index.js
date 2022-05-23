import { BsXCircleFill } from '@react-icons/all-files/bs/BsXCircleFill';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/Hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((user) => {
                setSearchResult(user.data);
                setLoading(false);
            });
    }, [debounced]);

    const handleClear = () => (setSearchValue(''), inputRef.current.focus(), setSearchResult([]));

    const handleHideResult = () => setShowResult(false);
    return (
        <TippyHeadless
            visible={showResult && searchResult.length > 0}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        {searchResult.map((result) => (
                            <AccountItem
                                onClick={() => {
                                    setSearchResult([]);
                                }}
                                key={result.id}
                                data={result}
                            />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    className={cx('search-input')}
                    ref={inputRef}
                    placeholder="Search account and video"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <BsXCircleFill />
                    </button>
                )}

                {loading && <AiOutlineLoading3Quarters className={cx('loading')} />}
                <span className={cx('separate-line')}></span>
                <button className={cx('search-btn')}>
                    <BsSearch />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;

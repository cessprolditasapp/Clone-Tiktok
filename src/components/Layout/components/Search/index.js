import { BsXCircleFill } from '@react-icons/all-files/bs/BsXCircleFill';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import TippyHeadless from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
// import axios from 'axios';

import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/Hooks';
// import request from '~/utils/request';

import * as searchService from '~/ApiService/searchService';

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
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.Search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        // request
        // request.get('users/search', {
        //     params: {
        //         q: debounced,
        //         type: 'less',
        //     },
        // })
        // .then((user) => {
        //     setSearchResult(user.data);
        //     setLoading(false);
        // });
    }, [debounced]);

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

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
                    onChange={(e) => handleChange(e)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <BsXCircleFill />
                    </button>
                )}

                {loading && <AiOutlineLoading3Quarters className={cx('loading')} />}
                <span className={cx('separate-line')}></span>
                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                    <BsSearch />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;

import { BsXCircleFill } from '@react-icons/all-files/bs/BsXCircleFill';
import { BsSearch } from '@react-icons/all-files/bs/BsSearch';
import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';
import { AiOutlineLoading3Quarters } from '@react-icons/all-files/ai/AiOutlineLoading3Quarters';
import { BsThreeDotsVertical } from '@react-icons/all-files/bs/BsThreeDotsVertical';
import { IoEarthOutline } from '@react-icons/all-files/io5/IoEarthOutline';
import { AiOutlineQuestionCircle } from '@react-icons/all-files/ai/AiOutlineQuestionCircle';
import { RiKeyboardBoxLine } from '@react-icons/all-files/ri/RiKeyboardBoxLine';
import { BiMessageAltMinus } from '@react-icons/all-files/bi/BiMessageAltMinus';
import { IoPaperPlaneOutline } from '@react-icons/all-files/io5/IoPaperPlaneOutline';
import { BiUser } from '@react-icons/all-files/bi/BiUser';
import { BsGearWide } from '@react-icons/all-files/bs/BsGearWide';
import { ImCoinDollar } from '@react-icons/all-files/im/ImCoinDollar';
import { FiLogIn } from '@react-icons/all-files/fi/FiLogIn';






import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import Tippy2 from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <IoEarthOutline />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'vie',
                    language: 'Tiếng Việt',
                    type: 'languague',
                },
                {
                    code: 'eng',
                    language: 'English',
                    type: 'languague',
                },
            ],
        },
    },
    {
        icon: <AiOutlineQuestionCircle />,
        title: 'Feedback and help',
        path: '/feedback',
    },
    {
        icon: <RiKeyboardBoxLine />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
            default:
        }
    };

    const currentUser = true;

    const userMenu = [
        {
            icon: <BiUser />,
            title: 'View profile',
            path: '/profile',
        },
        {
            icon: <ImCoinDollar />,
            title: 'Get coins',
            path: '/coin',
        },
        {
            icon: <BsGearWide />,
            title: 'Settings',
            path: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FiLogIn />,
            title: 'Log out',
            path: '/logout',
            separate:true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <TippyHeadless
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
                </TippyHeadless>
                <div className={cx('actions')}>
                    <Button outline grey lefticon={<AiOutlinePlus />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <IoPaperPlaneOutline />
                                </button>
                            </Tippy>
                            <Tippy2 placement="bottom" content="Inbox">
                                <button className={cx('action-btn')}>
                                    <BiMessageAltMinus />
                                </button>
                            </Tippy2>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                alt=""
                                src="https://www.themarysue.com/wp-content/uploads/2022/02/yamato-one-piece-1-1200x675.png"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <BsThreeDotsVertical />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

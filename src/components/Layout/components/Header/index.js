import { AiOutlinePlus } from '@react-icons/all-files/ai/AiOutlinePlus';
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

import Tippy from '@tippyjs/react';
import Tippy2 from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

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
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />
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
                            <Image
                                className={cx('user-avatar')}
                                alt=""
                                src="https://www.themarysue.com/wp-content/uploads/2022/02/yamato-one-piece-1-1200x675.png"
                                fallBack="https://play-lh.googleusercontent.com/2kdv4gGWKchMkThhxMYlWlkSouhx6BP50X1b7O7_Yl78fFCitAe3t4hLACuCyC9tsJA"
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

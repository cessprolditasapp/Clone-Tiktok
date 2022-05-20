import classNames from 'classnames/bind';
import { AiFillCheckCircle } from '@react-icons/all-files/ai/AiFillCheckCircle';

import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://www.themarysue.com/wp-content/uploads/2022/02/yamato-one-piece-1-1200x675.png"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    sippyhy
                    <AiFillCheckCircle className={cx('check')} />
                </p>
                <span className={cx('user-name')}>SippyHy</span>
            </div>
        </div>
    );
}

export default AccountItem;

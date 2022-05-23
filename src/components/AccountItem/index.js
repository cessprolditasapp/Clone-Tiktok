import classNames from 'classnames/bind';
import { AiFillCheckCircle } from '@react-icons/all-files/ai/AiFillCheckCircle';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/@${data.nickname}`} onClick={onClick} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt="" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    {data.nickname}
                    {data.tick && <AiFillCheckCircle className={cx('check')} />}
                </p>
                <span className={cx('user-name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

export default AccountItem;

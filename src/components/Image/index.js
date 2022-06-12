import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Image.module.scss';
import images from '~/assets/images';


const cx = classNames.bind(styles);

function Image({ src, alt, className, fallBack: newFallBack = images.avatar, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(newFallBack);
    };

    return (
        <img
            className={cx('wrapper', className)}
            {...props}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
        />
    );
}
export default forwardRef(Image);

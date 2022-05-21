import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    primary,
    outline,
    small,
    large,
    grey,
    round,
    text,
    disabled,
    lefticon,
    to,
    href,
    onClick,
    children,
    className,
    ...restProps
}) {
    let Comp = 'button';

    const props = {
        onClick,
        lefticon,
        ...restProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props.key;
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        grey,
        disabled,
        round,
        text,
    });
    return (
        <Comp className={classes} {...props}>
            {lefticon && <span className={cx('icon')}>{lefticon}</span>}
            <span className={cx('content')}>{children}</span>
        </Comp>
    );
}

export default Button;

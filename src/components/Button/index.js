import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({ primary, outline, small, large, grey, round, disabled, to, href, onClick, children, ...restProps }) {
    let Comp = 'button';

    const props = {
        onClick,
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
        primary,
        outline,
        small,
        large,
        grey,
        disabled,
        round,
    });
    return (
        <Comp className={classes} {...props}>
            <span className={cx('content')}>{children}</span>
        </Comp>
    );
}

export default Button;

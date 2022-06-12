import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    primary =false,
    outline =false,
    small =false,
    large =false,
    grey =false,
    round =false,
    text =false,
    disabled =false,
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

Button.propTypes={
    primary:PropTypes.bool,
    outline:PropTypes.bool,
    small:PropTypes.bool,
    large:PropTypes.bool,
    grey:PropTypes.bool,
    round:PropTypes.bool,
    text:PropTypes.bool,
    disabled:PropTypes.bool,
    lefticon:PropTypes.node,
    to:PropTypes.string,
    href:PropTypes.string,
    onClick:PropTypes.func,
    children:PropTypes.node.isRequired,
    className:PropTypes.string
}

export default Button;

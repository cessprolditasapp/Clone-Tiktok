import classNames from 'classnames/bind'
import styles from './Pooper.module.scss'


const cx = classNames.bind(styles)
function Wrapper({children,className}) {
    return ( 
        <div  className={cx('wrapper', className)}>
            {children}
        </div>
     );
}

export default Wrapper;
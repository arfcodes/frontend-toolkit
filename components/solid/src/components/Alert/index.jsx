/**
 * components/Alert/index.jsx
 */
import { createSignal, onMount } from 'solid-js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  checkCircle,
  exclamation,
  informationCircle,
  minusCircle,
  x,
} from 'solid-heroicons/solid';
import Icon from '../Icon';

const AlertIcon = ({ variant }) => {
  if (variant === 'default') {
    return <Icon path={informationCircle} />;
  }
  if (variant === 'success') {
    return <Icon path={checkCircle} />;
  }
  if (variant === 'danger') {
    return <Icon path={minusCircle} />;
  }
  if (variant === 'warning') {
    return <Icon path={exclamation} />;
  }
  if (variant === 'info') {
    return <Icon path={informationCircle} />;
  }
  return null;
};

AlertIcon.propTypes = {
  variant: PropTypes.oneOf(['default', 'success', 'danger', 'warning', 'info']),
};

const Alert = (props) => {
  const {
    className,
    variant,
    children,
    hideIcon,
    multipleLine,
    buttonClose,
    autoClose,
    autoCloseDelay,
  } = props;

  const [isShow, setIsShow] = createSignal(true);

  onMount(() => {
    if (autoClose) {
      const delay = autoCloseDelay || 5000;
      setTimeout(() => {
        setIsShow(false);
      }, delay);
    }
  }, []);

  return (
    <div
      className={classNames('alert', `alert--${variant}`, className)}
      data-state={isShow() ? 'shown' : 'hidden'}
    >
      <div className="alert__inner">
        {!hideIcon && (
          <div className="alert__icon">
            <span className="icon--svg">
              <AlertIcon variant={variant || 'success'} />
            </span>
          </div>
        )}
        <div className="alert__content">
          {multipleLine ? <>{children}</> : <p>{children}</p>}
        </div>
        {buttonClose && (
          <div className="alert__close">
            <button type="button" onClick={() => setIsShow(false)}>
              <span className="icon--svg">
                <Icon path={x} viewBox="0 0 20 20" />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['default', 'success', 'danger', 'warning', 'info']),
  hideIcon: PropTypes.bool,
  multipleLine: PropTypes.bool,
  buttonClose: PropTypes.bool,
  autoClose: PropTypes.bool,
  autoCloseDelay: PropTypes.number,
};

export default Alert;

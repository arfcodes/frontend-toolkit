/**
 * components/Alert/index.jsx
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IoWarning,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoRemoveCircle,
  IoClose,
} from 'react-icons/io5';

const variantIcon = {
  default: IoInformationCircle,
  success: IoCheckmarkCircle,
  warning: IoWarning,
  danger: IoRemoveCircle,
  info: IoInformationCircle,
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

  const [isShow, setIsShow] = useState(true);
  const Icon = variantIcon[variant];

  useEffect(() => {
    if (autoClose) {
      setTimeout(() => {
        setIsShow(false);
      }, autoCloseDelay);
    }
  }, []);

  return (
    <div
      className={classNames('alert', `alert--${variant}`, className)}
      data-state={isShow ? 'shown' : 'hidden'}
    >
      <div className="alert__inner">
        {!hideIcon && (
          <div className="alert__icon">
            <Icon />
          </div>
        )}
        <div className="alert__content">
          {multipleLine ? <>{children}</> : <p>{children}</p>}
        </div>
        {buttonClose && (
          <div className="alert__close">
            <button type="button" onClick={() => setIsShow(false)}>
              <IoClose />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Alert.defaultProps = {
  variant: 'success',
  buttonClose: false,
  autoClose: false,
  autoCloseDelay: 5000,
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

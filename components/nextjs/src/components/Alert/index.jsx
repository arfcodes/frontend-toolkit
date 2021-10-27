/**
 * components/Alert/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  IoWarning,
  IoInformationCircle,
  IoCheckmarkCircle,
  IoRemoveCircle,
} from 'react-icons/io5';

const variantIcon = {
  default: IoInformationCircle,
  success: IoCheckmarkCircle,
  warning: IoWarning,
  danger: IoRemoveCircle,
  info: IoInformationCircle,
};

const Alert = ({ className, variant, children, hideIcon, multipleLine }) => {
  const Icon = variantIcon[variant];

  return (
    <div className={classNames('alert', `alert--${variant}`, className)}>
      <div className="alert__inner">
        {!hideIcon && (
          <div className="alert__icon">
            <Icon />
          </div>
        )}
        <div className="alert__content">
          {multipleLine ? <>{children}</> : <p>{children}</p>}
        </div>
      </div>
    </div>
  );
};

Alert.defaultProps = {
  variant: 'success',
};

Alert.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOf(['default', 'success', 'danger', 'warning', 'info']),
  hideIcon: PropTypes.bool,
  multipleLine: PropTypes.bool,
};

export default Alert;

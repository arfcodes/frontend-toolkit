/**
 * components/Layout/Cover.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cover = ({ header, footer, children, center, className, ...others }) => (
  <div
    className={classNames('cover', center ? 'center' : '', className)}
    {...others}
  >
    {header && <div className="cover__header">{header}</div>}
    <div className="cover__main">{children}</div>
    {footer && <div className="cover__footer">{footer}</div>}
  </div>
);

Cover.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  center: PropTypes.bool,
  className: PropTypes.string,
};

export default Cover;

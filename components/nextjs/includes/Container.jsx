/**
 * components/Layout/Container.js
 */
// import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, size, fluid, className, ...others }) => {
  let rootClass = 'container';
  if (fluid) {
    if (fluid === 'both') {
      rootClass = 'container container--full';
    } else {
      rootClass = `container--fluid-${fluid}`;
    }
  }

  let sizeClass = '';
  if (!fluid || (fluid && fluid !== 'both')) {
    sizeClass = `container--${size}`;
  }

  return (
    <div className={classNames(rootClass, sizeClass, className)} {...others}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  size: 'md',
};

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  fluid: PropTypes.oneOf(['left', 'right', 'both']),
  className: PropTypes.string,
};

export default Container;

/**
 * components/Layout/Cluster.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cluster = ({ noSpace, className, children, ...others }) => (
  <div
    className={classNames(
      'cluster',
      noSpace ? 'cluster--no-space' : '',
      className,
    )}
    {...others}
  >
    {children}
  </div>
);

Cluster.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noSpace: PropTypes.bool,
};

export default Cluster;

/**
 * components/Link/index.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink } from 'react-router-dom';

const Link = ({ children, path, className, ...others }) => (
  <ReactLink className={className} to={path} {...others}>
    {children}
  </ReactLink>
);

Link.propTypes = {
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Link;

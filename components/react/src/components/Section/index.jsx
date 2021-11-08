/**
 * components/Section/index.jsx
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Base from './Base';

const Section = (props) => {
  const { children, title, titleClassName, ...others } = props;

  return (
    <Base {...others}>
      <h2 className={classNames('section__title', titleClassName)}>{title}</h2>
      <div className="section__main">{children}</div>
    </Base>
  );
};

Section.defaultProps = {
  space: 'md',
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  bgOpacity: PropTypes.number,
  bgClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  space: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  title: PropTypes.string,
  titleClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  containerSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default Section;

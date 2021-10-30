/**
 * components/Title/Core.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = (props) => {
  const { as, size, className, children, uppercase, center, ...others } = props;
  const TitleTag = as;

  return (
    <TitleTag
      className={classNames(
        'title',
        `title--${size}`,
        uppercase && 'title--uppercase',
        center && 'title--center',
        className,
      )}
      {...others}
    >
      {children}
    </TitleTag>
  );
};

Title.defaultProps = {
  size: 'md',
  as: 'h2',
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  uppercase: PropTypes.bool,
  center: PropTypes.bool,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Title;

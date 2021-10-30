/**
 * components/Title/Core.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = (props) => {
  const { as, size, className, children, uppercase, center, ...others } = props;

  const compProps = {
    className: classNames(
      'title',
      `title--${size || 'md'}`,
      uppercase && 'title--uppercase',
      center && 'title--center',
      className,
    ),
    ...others,
  };

  if (as === 'h1') {
    return <h1 {...compProps}>{children}</h1>;
  }
  if (as === 'h3') {
    return <h3 {...compProps}>{children}</h3>;
  }
  if (as === 'h4') {
    return <h4 {...compProps}>{children}</h4>;
  }
  if (as === 'h5') {
    return <h5 {...compProps}>{children}</h5>;
  }
  if (as === 'h6') {
    return <h6 {...compProps}>{children}</h6>;
  }
  return <h2 {...compProps}>{children}</h2>;
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

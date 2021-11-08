/**
 * components/Section/Base.jsx
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from '../Layout/Container';

const SectionBase = (props) => {
  const {
    className,
    children,
    space,
    bg,
    bgClassName,
    bgOpacity,
    containerSize,
  } = props;

  const classes = ['section'];
  if (space) {
    if (typeof space === 'string') {
      classes.push(`space--${space}`);
    } else if (Array.isArray(space)) {
      if (typeof space[0] !== 'undefined') {
        classes.push(`space-t--${space[0]}`);
      }
      if (typeof space[1] !== 'undefined') {
        classes.push(`space-b--${space[1]}`);
      }
    }
  } else {
    classes.push('space--md');
  }

  return (
    <div className={classNames(classes, className)}>
      {bg && (
        <div
          className={classNames('section__bg', bgClassName)}
          style={{ backgroundImage: `url(${bg})`, opacity: bgOpacity || 1 }}
        ></div>
      )}
      <div className="section__inner">
        {containerSize ? (
          <Container size={containerSize}>{children}</Container>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

SectionBase.propTypes = {
  children: PropTypes.node.isRequired,
  bg: PropTypes.string,
  bgOpacity: PropTypes.number,
  bgClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  space: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  containerSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};

export default SectionBase;

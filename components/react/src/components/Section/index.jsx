/**
 * components/Section/index.jsx
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Container from '../Layout/Container';

const Section = (props) => {
  const {
    className,
    children,
    space,
    bg,
    bgClassName,
    bgOpacity,
    title,
    titleClassName,
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

  // Get section content
  const getContent = () => {
    if (title) {
      return (
        <>
          <h2 className={classNames('section__title', titleClassName)}>
            {title}
          </h2>
          <div className="section__main">{children}</div>
        </>
      );
    }
    return <>{children}</>;
  };

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
          <Container size={containerSize}>{getContent()}</Container>
        ) : (
          <>{getContent()}</>
        )}
      </div>
    </div>
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

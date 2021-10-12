/**
 * components/Layout/Sidebar.js
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Sidebar = ({
  main,
  content,
  children,
  size,
  reverse,
  className,
  ...others
}) => {
  let sizeClass = '';
  if (size) {
    sizeClass = `sidebar--${size}`;
  }

  return (
    <div
      className={classNames(
        'sidebar',
        sizeClass,
        reverse ? 'sidebar--reverse' : '',
        className,
      )}
      {...others}
    >
      <div className="sidebar__inner">
        {main && content ? (
          <>
            <div className="sidebar__main">{main}</div>
            <div className="sidebar__content">{content}</div>
          </>
        ) : (
          <>{children}</>
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  children: PropTypes.node,
  main: PropTypes.node,
  content: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  reverse: PropTypes.bool,
  className: PropTypes.string,
};

export default Sidebar;

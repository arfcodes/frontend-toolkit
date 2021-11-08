/**
 * components/Cta.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Base from './Base';

const Cta = (props) => {
  const { className, children, header, title, subtitle, action, ...others } =
    props;

  const getHeader = () => {
    if (title || subtitle) {
      return (
        <div className="cta__header">
          <h2 className="cta__title title title--md">{title}</h2>
          <h3 className="cta__subtitle title title--xs">{subtitle}</h3>
        </div>
      );
    }
    if (header) {
      return <div className="cta__header">{header}</div>;
    }
    return null;
  };

  return (
    <Base {...others}>
      {getHeader()}
      <div className="cta__body">{children}</div>
      {action && <div className="cta__action">{action}</div>}
    </Base>
  );
};

Cta.defaultProps = {
  vAlign: 'middle',
  textAlign: 'left',
  thumbnailColSize: 6,
};

Cta.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  header: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnailColSize: PropTypes.number,
  thumbnailPosition: PropTypes.oneOf(['left', 'right']),
  action: PropTypes.node,
};

export default Cta;

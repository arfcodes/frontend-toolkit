/**
 * components/Layout/Frame.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Frame = ({ aspectRatio, children, className, ...others }) => (
  <div
    className={classNames('frame', `frame--${aspectRatio}`, className)}
    {...others}
  >
    {children}
  </div>
);

Frame.propTypes = {
  children: PropTypes.node,
  aspectRatio: PropTypes.oneOf(['16-9', '3-2', '4-3', 'square']),
  className: PropTypes.string,
};

export default Frame;

/**
 * components/Layout/Switcher.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Switcher = ({
  columnSize,
  noSpace,
  noSpaceX,
  className,
  children,
  ...others
}) => (
  <div
    className={classNames(
      'switcher',
      `switcher--${columnSize}`,
      noSpace ? 'switcher--no-space' : '',
      noSpaceX ? 'switcher--no-space-x' : '',
      className,
    )}
    {...others}
  >
    <div className="switcher__inner">{children}</div>
  </div>
);

Switcher.defaultProps = {
  columnSize: '33',
};

Switcher.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columnSize: PropTypes.oneOf(['25', '33', '50']),
  noSpace: PropTypes.bool,
  noSpaceX: PropTypes.bool,
};

export default Switcher;

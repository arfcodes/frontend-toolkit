/**
 * components/Title/index.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TitleCore from './Core';

const Title = (props) => {
  const { className, children, ...others } = props;

  return (
    <TitleCore
      className={classNames('title--with-icon', className)}
      {...others}
    >
      <span className="title__deco">
        <span />
      </span>
      <span className="title__content">{children}</span>
    </TitleCore>
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

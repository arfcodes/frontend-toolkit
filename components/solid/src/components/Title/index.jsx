/**
 * components/Title/index.js
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TitleCore from './Core';

const Title = (props) => {
  const { icon, className, children, ...others } = props;

  return (
    <TitleCore
      className={classNames(icon && 'title--with-icon', className)}
      {...others}
    >
      {icon ? (
        <>
          <span className="title__icon">
            {typeof icon === 'string' ? <img src={icon} alt="" /> : <>{icon}</>}
          </span>
          <span className="title__content">{children}</span>
        </>
      ) : (
        <>{children}</>
      )}
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
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
};

export default Title;

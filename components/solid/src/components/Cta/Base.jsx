/**
 * components/Cta/Base.jsx
 */
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CtaBase = (props) => {
  const {
    className,
    children,
    vAlign,
    textAlign,
    thumbnail,
    thumbnailColSize,
    thumbnailPosition,
    ...others
  } = props;

  const colSize = thumbnailColSize || 6;

  // Get thumbnail
  const getThumbnail = () => {
    if (!thumbnail) {
      return null;
    }
    return (
      <div className={classNames('cta__thumbnail', `col--${colSize}`)}>
        {typeof thumbnail === 'string' ? (
          <img src={thumbnail} alt="" />
        ) : (
          <>{thumbnail}</>
        )}
      </div>
    );
  };

  return (
    <div
      className={classNames(
        'cta',
        `cta--v-align--${vAlign || 'middle'}`,
        thumbnail ? `cta--thumbnail-${thumbnailPosition || 'left'}` : '',
        className,
      )}
      {...others}
    >
      <div className="cta__inner">
        {thumbnail ? (
          <div className="cta__main row gap--2xl">
            {getThumbnail()}
            <div
              className={classNames(
                'cta__content',
                `cta__content--${textAlign}`,
                `col--${12 - colSize}`,
              )}
            >
              {children}
            </div>
          </div>
        ) : (
          <div className="cta__main">
            <div
              className={classNames(
                'cta__content',
                `cta__content--${textAlign || 'left'}`,
              )}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CtaBase.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnailColSize: PropTypes.number,
  thumbnailPosition: PropTypes.oneOf(['left', 'right']),
};

export default CtaBase;

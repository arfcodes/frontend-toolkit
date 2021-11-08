/**
 * components/Cta/WithSection.js
 */
import React from 'react';
import PropTypes from 'prop-types';

import Section from '../Section/Base';
import Base from './index';

const CtaWithSection = ({ className, children, sectionProps, ...others }) => (
  <Section {...sectionProps}>
    <Base {...others}>{children}</Base>
  </Section>
);

CtaWithSection.defaultProps = {
  vAlign: 'middle',
  textAlign: 'left',
};

CtaWithSection.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  header: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node,
  thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  thumbnailColSize: PropTypes.number,
  thumbnailPosition: PropTypes.oneOf(['left', 'right']),
  sectionProps: PropTypes.object,
};

export default CtaWithSection;

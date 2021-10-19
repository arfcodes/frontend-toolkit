/**
 * components/Link/index.js
 */
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import React, { Children } from 'react';

const Link = ({ children, ...others }) => {
  const { href, as } = others;
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const className =
    asPath === href || asPath === as
      ? `${childClassName} active`.trim()
      : childClassName;

  return (
    <NextLink {...others}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </NextLink>
  );
};

Link.propTypes = {
  children: PropTypes.node,
};

export default Link;

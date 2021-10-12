/**
 * Demo Button Default
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@components/Layout';
import Button from '@components/Button';

const IconSearch = () => (
  <i>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"></path>
    </svg>
  </i>
);

const IconArrow = () => (
  <i>
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <polyline points="14 6 20 12 14 18"></polyline>
    </svg>
  </i>
);

const sizes = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'];
const RenderButtons = ({ variant, icon, iconPosition }) => (
  <div className="cluster cluster--center">
    <div className="cluster__row">
      {sizes.map((size) => (
        <div className="cluster__column" key={`btn-${variant}-${size}`}>
          <Button
            path="#"
            isLinkOutside
            variant={variant}
            size={size}
            label="Load More"
            className="button--default"
            icon={icon}
            iconPosition={iconPosition}
          />
        </div>
      ))}
    </div>
  </div>
);

RenderButtons.propTypes = {
  variant: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
};

const RenderBlockButtons = ({ variant }) => (
  <div className="col">
    {sizes.map((size) => (
      <>
        <div className="item" key={`btn-block-${variant}-${size}`}>
          <Button
            path="#"
            isLinkOutside
            variant={variant}
            size={size}
            label="Load More"
            className="button--default"
            isBlock
          />
        </div>
        <br />
      </>
    ))}
  </div>
);

RenderBlockButtons.propTypes = {
  variant: PropTypes.string,
};

const ButtonDefault = () => (
  <div className="d-button">
    <Container size="xl">
      <h1>Button Default</h1>
      <br />
      <h3>&lt;Button variant=&quot;primary&quot;&gt;</h3>
      <RenderButtons variant="primary" />
      <br />
      <h3>&lt;Button variant=&quot;secondary&quot;&gt;</h3>
      <RenderButtons variant="secondary" />
      <br />
      <h3>&lt;Button variant=&quot;success&quot;&gt;</h3>
      <RenderButtons variant="success" />
      <br />
      <h3>&lt;Button variant=&quot;danger&quot;&gt;</h3>
      <RenderButtons variant="danger" />
      <br />
      <h3>&lt;Button variant=&quot;warning&quot;&gt;</h3>
      <RenderButtons variant="warning" />
      <br />
      <h3>&lt;Button variant=&quot;info&quot;&gt;</h3>
      <RenderButtons variant="info" />
      <br />
      <h3>&lt;Button variant=&quot;grey&quot;&gt;</h3>
      <RenderButtons variant="grey" />
      <br />
      <h3>&lt;Button variant=&quot;black&quot;&gt;</h3>
      <RenderButtons variant="black" />
      <br />
      <h3>&lt;Button variant=&quot;white&quot;&gt;</h3>
      <div className="d-block bg--black">
        <RenderButtons variant="white" />
      </div>
      <br />
      <br />

      <h2>Button With Icon</h2>
      <RenderButtons variant="primary" icon={<IconArrow />} />
      <br />
      <RenderButtons
        variant="primary"
        icon={<IconSearch />}
        iconPosition="left"
      />
    </Container>
    <br />
    <br />
    <Container size="xs">
      <h2>Button Block</h2>
      <br />
      <h3>&lt;Button variant=&quot;primary&quot;&gt;</h3>
      <RenderBlockButtons variant="primary" />
      <br />
      <h3>&lt;Button variant=&quot;secondary&quot;&gt;</h3>
      <RenderBlockButtons variant="secondary" />
      <br />
      <h3>&lt;Button variant=&quot;success&quot;&gt;</h3>
      <RenderBlockButtons variant="success" />
      <br />
      <h3>&lt;Button variant=&quot;danger&quot;&gt;</h3>
      <RenderBlockButtons variant="danger" />
      <br />
      <h3>&lt;Button variant=&quot;warning&quot;&gt;</h3>
      <RenderBlockButtons variant="warning" />
      <br />
      <h3>&lt;Button variant=&quot;info&quot;&gt;</h3>
      <RenderBlockButtons variant="info" />
      <br />
      <h3>&lt;Button variant=&quot;grey&quot;&gt;</h3>
      <RenderBlockButtons variant="grey" />
      <br />
      <h3>&lt;Button variant=&quot;black&quot;&gt;</h3>
      <RenderBlockButtons variant="black" />
      <br />
      <h3>&lt;Button variant=&quot;white&quot;&gt;</h3>
      <div className="d-block bg--black">
        <RenderBlockButtons variant="white" />
      </div>
      <br />
    </Container>
  </div>
);

export default ButtonDefault;

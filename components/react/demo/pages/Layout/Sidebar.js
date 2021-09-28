/**
 * Demo Layout Sidebar
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Short, Long } from '@demo/includes/SampleContent';
import { Sidebar, Container } from '@components/Layout';

const SidebarSample = ({ size }) => (
  <>
    <Container fluid="both">
      <h2>&lt;Sidebar size=&quot;{size}&quot;&gt;</h2>
      <Sidebar
        size={size}
        main={
          <div className="d-block bg--primary text--white">
            <Short />
          </div>
        }
        content={
          <div className="d-block bg--danger text--white">
            <Long />
          </div>
        }
      />
    </Container>
    <br />
    <br />
    <br />
    <br />
  </>
);

SidebarSample.defaultProps = {
  size: 'md',
};

SidebarSample.propTypes = {
  size: PropTypes.string,
};

const LayoutSidebar = () => (
  <div className="d-layout">
    <Container fluid="both">
      <h1>Sidebar Demo</h1>
      <div className="d-block bg--primary text--white">
        <Short />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <SidebarSample />
    <SidebarSample size="xl" />
    <SidebarSample size="lg" />
    <SidebarSample size="md" />
    <SidebarSample size="sm" />
    <SidebarSample size="xs" />
    <SidebarSample size="no-space" />
    <SidebarSample size="no-space-x" />
  </div>
);

export default LayoutSidebar;

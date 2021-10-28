/**
 * Demo Alert Default
 */
import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '@components/Layout';
import Alert from '@components/Alert';

const AlertDefault = () => (
  <div className="d-alert">
    <Container size="xl">
      <h1>Alert Default</h1>
      <br />
      <h3>&lt;Alert variant=&quot;default&quot;&gt;</h3>
      <Alert variant="default" className="alert--default">
        This is alert default
      </Alert>
      <br />
      <h3>&lt;Alert variant=&quot;success&quot;&gt;</h3>
      <Alert variant="success" className="alert--default">
        This is alert success
      </Alert>
      <br />
      <h3>&lt;Alert variant=&quot;danger&quot;&gt;</h3>
      <Alert variant="danger" className="alert--default">
        This is alert danger
      </Alert>
      <br />
      <h3>&lt;Alert variant=&quot;warning&quot;&gt;</h3>
      <Alert variant="warning" className="alert--default">
        This is alert warning
      </Alert>
      <br />
      <h3>&lt;Alert variant=&quot;info&quot;&gt;</h3>
      <Alert variant="info" className="alert--default">
        This is alert info
      </Alert>
      <br />
      <h3>Hide Icon</h3>
      <Alert variant="danger" className="alert--default" hideIcon>
        This is alert with no icon
      </Alert>
      <br />
      <h3>With Close button</h3>
      <Alert variant="danger" className="alert--default" buttonClose>
        This is alert with close button
      </Alert>
      <br />
      <h3>With Auto Close</h3>
      <Alert variant="danger" className="alert--default" autoClose>
        This is alert with auto close
      </Alert>
      <br />
      <br />
      <br />
    </Container>
  </div>
);

export default AlertDefault;

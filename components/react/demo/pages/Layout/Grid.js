/**
 * Demo Layout Grid
 */
import React from 'react';
// import { Short } from '@demo/includes/SampleContent';
import { Container } from '@components/Layout';

const LayoutGrid = () => (
  <div className="p-layout-grid">
    <Container size="md">
      <h1>Grid Demo</h1>
      <br />
      <br />

      <div className="row gap--md">
        <div className="col--1">
          <div className="d-block bg--primary text--white">.col--1</div>
        </div>
        <div className="col--11">
          <div className="d-block bg--primary text--white">.col--11</div>
        </div>
      </div>
      <br />

      <div className="row gap--md">
        <div className="col--2">
          <div className="d-block bg--primary text--white">.col--2</div>
        </div>
        <div className="col--10">
          <div className="d-block bg--primary text--white">.col--10</div>
        </div>
      </div>
      <br />

      <div className="row gap--md">
        <div className="col--3">
          <div className="d-block bg--primary text--white">.col--3</div>
        </div>
        <div className="col--9">
          <div className="d-block bg--primary text--white">.col--9</div>
        </div>
      </div>
      <br />

      <div className="row gap--md">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--md">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--md">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h2>.gap--xs</h2>
      <br />
      <div className="row gap--xs">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--xs">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--xs">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />

      <h2>.gap--sm</h2>
      <br />
      <div className="row gap--sm">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--sm">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--sm">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />

      <h2>.gap--lg</h2>
      <br />
      <div className="row gap--lg">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--lg">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--lg">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />

      <h2>.gap--xl</h2>
      <br />
      <div className="row gap--xl">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--xl">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--xl">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />

      <h2>.gap--2xl</h2>
      <br />
      <div className="row gap--2xl">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--2xl">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--2xl">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
      <br />
      <br />

      <h2>.gap--3xl</h2>
      <br />
      <div className="row gap--3xl">
        <div className="col--4">
          <div className="d-block bg--primary text--white">.col--4</div>
        </div>
        <div className="col--8">
          <div className="d-block bg--primary text--white">.col--8</div>
        </div>
      </div>
      <br />

      <div className="row gap--3xl">
        <div className="col--5">
          <div className="d-block bg--primary text--white">.col--5</div>
        </div>
        <div className="col--7">
          <div className="d-block bg--primary text--white">.col--7</div>
        </div>
      </div>
      <br />

      <div className="row gap--3xl">
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
        <div className="col--6">
          <div className="d-block bg--primary text--white">.col--6</div>
        </div>
      </div>
    </Container>
    <br />
    <br />
    <br />
  </div>
);

export default LayoutGrid;

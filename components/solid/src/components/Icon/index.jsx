/**
 * components/Icon/index.jsx
 */
import { Icon as SolidIcon } from 'solid-heroicons';
import PropTypes from 'prop-types';

const Icon = ({ path }) => <SolidIcon path={path} viewBox="0 0 20 20" />;

Icon.propTypes = {
  path: PropTypes.string.isRequired,
};

export default Icon;

/**
 * components/Spinner/Pulse.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import Base from './Base';

const SpinnerPulse = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-pulse" />
  </Base>
);

export default SpinnerPulse;

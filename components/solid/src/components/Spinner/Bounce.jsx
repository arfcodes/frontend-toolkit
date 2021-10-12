/**
 * components/Spinner/Bounce.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import Base from './Base';

const SpinnerBounce = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-bounce">
      <div className="sk-bounce-dot"></div>
      <div className="sk-bounce-dot"></div>
    </div>
  </Base>
);

export default SpinnerBounce;

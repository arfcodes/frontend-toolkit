/**
 * components/Spinner/Fold.js
 *
 * Use Spinkit (https://github.com/tobiasahlin/SpinKit)
 */
import Base from './Base';

const SpinnerFold = (props) => (
  <Base {...props}>
    <div className="spinner__main sk-fold">
      <div className="sk-fold-cube"></div>
      <div className="sk-fold-cube"></div>
      <div className="sk-fold-cube"></div>
      <div className="sk-fold-cube"></div>
    </div>
  </Base>
);

export default SpinnerFold;

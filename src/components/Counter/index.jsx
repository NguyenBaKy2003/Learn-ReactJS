import { useState } from "react";
import PropTypes from "prop-types";
Counter.propTypes = {};
function Counter(props) {
  let [count, setCount] = useState(0);
  return (
    <div>
      <p> {count}</p>
      <button onClick={() => setCount((x) => x + 1)}>Count</button>
    </div>
  );
}
export default Counter;

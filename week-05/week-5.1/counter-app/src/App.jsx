import { useState } from 'react';
import PropTypes from 'prop-types'
import './App.css'

function CustomButton(props) {

  // function onClickHandler() {    // dont know why but this was also running
  //   setCount(count + 1)
  // }

  function onClickHandler() {
    props.setCount(props.count + 1)
  }

  return <button onClick={onClickHandler }>
  Counter {props.count}
  </button>
}

CustomButton.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )


}

export default App

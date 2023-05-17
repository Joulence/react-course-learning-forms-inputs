import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameValid) {
      console.log('Name input is valid!');
    }
  }, [enteredNameValid]);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    
    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSumbissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameValid(false);
      return;
    }
    setEnteredNameValid(true);

    console.log(enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE DOM
    setEnteredName('');
  };

  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

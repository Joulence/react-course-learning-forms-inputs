import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameValid, setEnteredNameValid] = useState(true);

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSumbissionHandler = (event) => {
    event.preventDefault();

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

  const nameInputClasses = enteredNameValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={formSumbissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      {!enteredNameValid && <p className="error-text">Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

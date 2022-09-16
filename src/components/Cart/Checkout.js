import classes from "./Checkout.module.css"
import {useRef, useState} from "react";

const Checkout = (props) => {

    const isEmpty = (value) => { return value.trim() === '' }
    const isFiveChars = (value) => { return value.trim.length === 5}

    const [formInputsValidity, setFromInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true,
    })

    const confirmHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInput.current.value;
        const enteredStreet = nameInput.current.value;
        const enteredCity = nameInput.current.value;
        const enteredPostalCode = nameInput.current.value;

        const nameIsValid = !isEmpty(enteredName)
        const streetIsValid = !isEmpty(enteredStreet)
        const cityIsValid = !isEmpty(enteredCity)
        const postalCodeIsValid = isFiveChars(enteredPostalCode)

        const formIsValid = nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid

        if (!formIsValid) {
            return;
        }
    }

    const nameInput = useRef();
    const streetInput = useRef();
    const cityInput = useRef();
    const postalCodeInput = useRef();

    return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={classes.control}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" ref={nameInput} />
        </div>
        <div className={classes.control}>
            <label htmlFor="street">Street:</label>
            <input type="text" id="street" ref={streetInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="city">City:</label>
            <input type="text" id="city" ref={cityInput}/>
        </div>
        <div className={classes.control}>
            <label htmlFor="postal">Postal Code:</label>
            <input type="text" id="postal" ref={postalCodeInput}/>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit} type='submit'>Confirm</button>
        </div>

    </form>
)}

export default Checkout;
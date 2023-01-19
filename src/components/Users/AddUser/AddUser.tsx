import { FormEvent, useState } from "react";
import { Error } from "../../../models/Error.model";
import { User } from "../../../models/User.model";
import Button from "../../UI/Button/Button";

import Card from "../../UI/Card/Card";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
import classes from "./AddUser.module.css";

interface Props {
    onAddUser: (user: User) => void;
}

export default function AddUser(props: Props) {

    const [enteredUsername, setEnteredUsername] = useState<string>("");
    const [enteredAge, setAge] = useState<number>(0);
    const [error, setError] = useState<Error | undefined>(undefined);

    const addUserHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // if (isUsernameValid() || isAgeValid()) {
        //     setError(new Error("Invalid input", "Please enter a valid name and age (non-empty values)."));
        //     return;
        // }

        if (isUsernameValid()) {
            setError(new Error("Invalid username", "Please enter a valid username."));
            return;
        }

        if (isAgeValid()) {
            setError(new Error("Invalid age", "Please enter a valid age (age > 0)."));
            return;
        }

        props.onAddUser(new User(Math.random().toString(), enteredUsername, enteredAge));

        setEnteredUsername("");
        setAge(0);
    };

    const usernameChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredUsername(event.currentTarget.value);
    }

    const ageChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setAge(parseInt(event.currentTarget.value));
    }

    const isUsernameValid = () => {
        return enteredUsername.trim().length === 0;
    }

    const isAgeValid = () => {
        return (enteredAge < 1 || enteredAge === 0);
    }


    const closeErrorModalHandler = () => {
        setError(undefined);
    }


    return (
        <div>
            {error !== undefined && <ErrorModal title={error.title} message={error.message} onCloseErrorModal={closeErrorModalHandler}></ErrorModal>}
            <Card className={classes.form}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};
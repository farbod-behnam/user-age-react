import { User } from "../../../models/User.model";

import Card from "../../UI/Card/Card";
import classes from "./UsersList.module.css";

interface Props {
    users: User[];
}

export default function UsersList(props: Props) {

    if (props.users.length === 0)
        return <Card className={classes.users}><p>No user is added yet.</p></Card>

    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => (
                    <li key={user.id}>
                        {user.username} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}
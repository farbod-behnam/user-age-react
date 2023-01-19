import { ReactNode } from "react";
import classes from "./Card.module.css";

interface Props {
    children: ReactNode;
    className: string;
}

export default function Card(props: Props) {

    return (
        <div className={classes.card + " " + props.className}>
        {/* // <div className={`${classes.card} ${props.children}`}> */}
            {props.children}
        </div>
    );
};
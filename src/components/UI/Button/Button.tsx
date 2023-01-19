import { ComponentPropsWithoutRef, ReactNode } from "react";

import classes from "./Button.module.css";

interface Props extends ComponentPropsWithoutRef<"button"> {
    children: ReactNode;
}

export default function Button(props: Props) {

    return (
        <button className={classes.button} type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </button>
    );
}
import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

interface PropsErrorModal {
    title: string;
    message: string;
    onCloseErrorModal: () => void;
}

interface PropsModalOverlay {
    title: string;
    message: string;
    onCloseErrorModal: () => void;
}

interface PropsDiv {
    onCloseErrorModal: () => void;
}

function Backdrop(props: PropsDiv) {
    return <div className={classes.backdrop} onClick={props.onCloseErrorModal}></div>;
}

function ModalOverlay(props: PropsModalOverlay) {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onCloseErrorModal}>Okay</Button>
            </footer>
        </Card>
    );
}

export default function ErrorModal(props: PropsErrorModal) {

    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onCloseErrorModal={props.onCloseErrorModal}/>,
                document.getElementById("backdrop-root")!
            )}
            {ReactDOM.createPortal(
                <ModalOverlay title={props.title} message={props.message} onCloseErrorModal={props.onCloseErrorModal}/>,
                document.getElementById("overlay-root")!
            )}
        </Fragment>
    );
}
import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

interface Props {
    title: string;
    message: string;
    onCloseErrorModal: () => void;
}

export default function ErrorModal(props: Props) {

    return (
        <div>
            <div className={classes.backdrop} onClick={props.onCloseErrorModal}></div>
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
        </div>
    );
}
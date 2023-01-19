import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Wrapper(props: Props) {
    return <>{props.children}</>
}
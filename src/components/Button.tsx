import { MouseEvent } from "react";

interface BProps {
    text: string
    onClick: () => void
}

const ButtonComponent = ({ text, onClick }: BProps) => {
    const handleMouseEvent = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick();
    }

    return <button onClick={handleMouseEvent}>{text}</button>
}

export default ButtonComponent;
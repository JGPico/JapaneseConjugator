import './Card.css'

interface CProps {
    jword: string
    lastChar: string
    onClick: () => void
    disabled?: boolean
}

const Card = ({ jword, lastChar, onClick, disabled }: CProps) => {

    let cssClass;

    if (jword == lastChar) {
        cssClass = "letter-button-highlight";
    } else {
        cssClass = "letter-button-default";
    }

    return (
        <div className="card">
            <button className={cssClass} onClick={onClick} disabled={disabled}>{jword}</button>
        </div>
    )
}

export default Card;
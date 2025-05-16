interface CProps {
    jword: string
    type: string
    lastChar: string
    onClick: () => void
}

const Card = ({ jword, type, lastChar, onClick }: CProps) => {

    let cssClass;

    if (jword == lastChar) {
        cssClass = "letter-button-highlight";
    } else {
        cssClass = "letter-button-default";
    }

    return (
        <div className="card">
            <button className={cssClass} onClick={onClick}>{jword}</button>
        </div>
    )
}

export default Card;
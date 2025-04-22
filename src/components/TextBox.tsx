interface TProps {
    text: string
    lastChar: string
}

const Card = ({ text, lastChar }: TProps) => {

    const cssClass = `text-box-${lastChar}`;

    return (
        <div className="text-box">
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default Card;
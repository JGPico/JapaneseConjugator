interface TProps {
    text: string
    lastChar: string
}

const Card = ({ text, lastChar }: TProps) => {

    return (
        <div className="text-box">
            <p className={lastChar}>{text}</p>
        </div>
    )
}

export default Card;
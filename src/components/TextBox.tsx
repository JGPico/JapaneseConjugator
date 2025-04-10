interface TProps {
    text: string
}

const Card = ({ text }: TProps) => {

    return (
        <div className="text-box">
            <p>{text}</p>
        </div>
    )
}

export default Card;
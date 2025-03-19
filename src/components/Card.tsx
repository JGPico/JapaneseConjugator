interface CProps {
    jword: string
}

const Card = ({ jword }: CProps) => {
    return (
        <div className="card">
            <p className="word-font">{jword}</p>
        </div>
    )
}

export default Card;
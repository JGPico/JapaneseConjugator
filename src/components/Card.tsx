interface CProps {
    jword: string
}

const Card = ({ jword }: CProps) => {
    return (
        <div className="card">
            <h6>{jword}</h6>
        </div>
    )
}

export default Card;
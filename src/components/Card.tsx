interface CProps {
    jword: string
    type: string
    onClick: () => void
}

const Card = ({ jword, type, onClick }: CProps) => {

    return (
        <div className="card">
            <button onClick={onClick}>{jword}</button>
        </div>
    )
}

export default Card;
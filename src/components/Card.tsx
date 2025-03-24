interface CProps {
    jword: string
    onClick: () => void
}

const Card = ({ jword, onClick }: CProps) => {

    return (
        <div className="card">
            <button onClick={onClick}>{jword}</button>
        </div>
    )
}

export default Card;
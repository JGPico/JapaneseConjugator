const Card = ({ image, onClick }) => {
    return (
        <div className="card">
            <image alt="" src={image} onClick={onClick}></image>
        </div>
    )
}

export default Card;
interface CProps {
    jchar: string
}

const WordDisplay = ({ jchar }: CProps) => {
    return (
        <div className="display">
            <p>{jchar}</p>
        </div>
    )
}

export default WordDisplay;
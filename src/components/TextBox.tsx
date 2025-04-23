import useArray from "../utilities/arraySelectHook"

interface TProps {
    text: string
    lastChar: string
}

const Card = ({ text, lastChar }: TProps) => {

    const subConjArr = useArray(lastChar)
    const cssClass = `text-box-${subConjArr}`;

    return (
        <div className="text-box">
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default Card;
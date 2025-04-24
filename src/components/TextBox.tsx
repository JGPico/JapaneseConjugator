import useArray from "../utilities/arraySelectHook"

interface TProps {
    text: string
    lastChar: string
}

const Card = ({ text, lastChar }: TProps) => {

    const subConjArr = useArray(lastChar)
    // how do I use this sub array to style some of the text boxes?
    // if text is in subConjArr, style with according to style-x. x is conjる, etc
    const cssClass = `text-box-${lastChar}`;

    return (
        <div className="text-box">
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default Card;
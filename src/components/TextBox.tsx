import useArray from "../utilities/arraySelectHook"

interface TProps {
    text: string
    lastChar: string
}

const Card = ({ text, lastChar }: TProps) => {

    let cssClass;
    const subConjArr = useArray(lastChar)
    // how do I use this sub array to style some of the text boxes?
    // if text is in subConjArr, style according to style-x. x is conjる, etc
    if (subConjArr.includes(text)) {
        cssClass = `text-box-${lastChar}`;
    } else {
        cssClass = "text-box";
    }

    return (
        <div className="text-box">
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default Card;
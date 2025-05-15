import useArray from "../utilities/arraySelectHook"

interface TProps {
    text: string
    type: string
    lastChar: string
}

const Card = ({ text, type, lastChar }: TProps) => {

    let cssClass;
    const subConjArr = useArray(lastChar)

    // the text box styles need to light up differently based on the type of verb; ichidan, godan or irregular
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
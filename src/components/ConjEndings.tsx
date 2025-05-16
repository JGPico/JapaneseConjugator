import giveConjugation from "../utilities/arraySelectHook"

interface TProps {
    text: string
    type: string
    lastChar: string
}

const ConjEndings = ({ text, type, lastChar }: TProps) => {

    let cssClass;
    const subConjArr = giveConjugation(lastChar, type)

    // the text box styles need to light up differently based on the type of verb; ichidan, godan or irregular
    if (subConjArr.conjArr.includes(text)) {
        cssClass = `text-box-${subConjArr.conjCSSTag}`;
    } else {
        cssClass = "text-box";
    }

    return (
        <div className="text-box">
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default ConjEndings;
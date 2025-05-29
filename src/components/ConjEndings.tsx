import giveConjugation from "../utilities/arraySelectHook"

interface TProps {
    text: string
    type: string
    lastChar: string
    onHover: (text: string) => void
    onLeave: () => void
}

const ConjEndings = ({ text, type, lastChar, onHover, onLeave }: TProps) => {

    let cssClass;
    const subConjArr = giveConjugation(lastChar, type)

    // the text box styles need to light up differently based on the type of verb; ichidan, godan or irregular
    if (subConjArr.conjArr.includes(text)) {
        cssClass = `text-box-${subConjArr.conjCSSTag}`;
    } else {
        cssClass = "text-box";
    }

    return (
        <div className="text-box"
            onMouseEnter={() => onHover(text)}
            onMouseLeave={onLeave}>
            <p className={cssClass}>{text}</p>
        </div>
    )
}

export default ConjEndings;
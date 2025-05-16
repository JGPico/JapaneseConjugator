
function giveConjugation(lastChar: string, activeVerbType: string) {
    // given the last character (lastChar) return an array that contains the conjugations for that last character
    const conjIchiう = ["こと", "の", "て", "た"]
    const conjIchiあ = ["ないで", "なかった", "ない"]
    const conjListBig = [
        "ます", "ました", "ません", "ませんでした",
        "る", "ましょう",
        "たい", "たかった", "たくない", "たくなかった",
        "られなかった", "られない", "られた", "られる",
        "られます", "られました", "られません", "られませんでした",
        "う", "よう"
    ]
    const conjListComplete = conjListBig.concat(conjIchiう, conjIchiあ)

    // if ichidan: return a set of conjArrs based on last char 
    // else godan ' '

    if (activeVerbType == "ichidan") {

        switch (lastChar) {
            case "る":
            case "う":
            case "く":
            case "ぐ":
            case "す":
            case "つ":
            case "ぬ":
            case "ぶ":
            case "む":
                return { conjArr: conjIchiう, conjCSSTag: "conjIchiう" }
                break;
            case "あ":
            case "か":
            case "が":
            case "さ":
            case "た":
            case "な":
            case "ば":
            case "ま":
            case "ら":
                return { conjArr: conjIchiあ, conjCSSTag: "conjIchiあ" }
                break;
            default:
                return { conjArr: conjListComplete, conjCSSTag: "complete" };
        }

    } else { // activeVerbType is godan

        switch (lastChar) { //TODO make the logic in this switch case correspond to godan conjugations
            case "る":
                return { conjArr: conjIchiう, conjCSSTag: "conjIchiう" }
                break;
            case "た":
                return { conjArr: conjIchiあ, conjCSSTag: "conjIchiあ" }
                break;
            default:
                return { conjArr: conjListComplete, conjCSSTag: "complete" };
        }

    }

}

export default giveConjugation;

function giveConjugation(lastChar: string, activeVerbType: string) {
    // given the last character (lastChar) return an array that contains the conjugations for that last character
    const conjIchiう = ["こと", "の", "て", "た"]
    const conjIchiあ = ["ないで", "なかった", "ない"]
    const conjIchiい = ["ます", "ました", "ません", "ませんでした", "ましょう", "たい", "たかった", "たくない", "たくなかった"]
    const conjIchiえ = ["ます", "ました", "ません", "ませんでした", "なかった", "ない", "る", "た"]
    const conjListComplete = [
        "ます", "ました", "ません", "ませんでした",
        "なかった", "ない", "る", "ましょう",
        "たい", "たかった", "たくない", "たくなかった",
        "られなかった", "られない", "られた", "られる",
        "られます", "られました", "られません", "られませんでした",
        "う", "よう", "こと", "の",
        "て", "た", "ないで",
    ]

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
            case "い":
            case "き":
            case "ぎ":
            case "し":
            case "ち":
            case "に":
            case "び":
            case "み":
            case "り":
                return { conjArr: conjIchiい, conjCSSTag: "conjIchiい" }
                break;
            case "え":
            case "け":
            case "げ":
            case "せ":
            case "て":
            case "ね":
            case "べ":
            case "め":
            case "れ":
                return { conjArr: conjIchiえ, conjCSSTag: "conjIchiえ" }
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
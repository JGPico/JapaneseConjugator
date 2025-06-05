
function giveConjugation(lastChar: string, activeVerbType: string) {
    // given the last character (lastChar) return an array that contains the conjugations for that last character
    const conjう = ["こと", "の", "て", "た"]
    const conjGoあ = ["ないで", "なかった", "ない"]
    const conjGoい = ["ます", "ました", "ません", "ませんでした", "ましょう", "たい", "たかった", "たくない", "たくなかった"]
    const conjGoえ = ["ます", "ました", "ません", "ませんでした", "なかった", "ない", "る", "た"]
    const conjGoお = ["う"]
    const conjIchiAll = [
        "ます", "ました", "ません", "ませんでした",
        "なかった", "ない", "る", "ましょう",
        "たい", "たかった", "たくない", "たくなかった",
        "られなかった", "られない", "られた", "られる",
        "られます", "られました", "られません", "られませんでした",
        "う", "よう", "ないで",
    ]
    const complete = [
        "ます", "ました", "ません", "ませんでした",
        "なかった", "ない", "る", "ましょう",
        "たい", "たかった", "たくない", "たくなかった",
        "られなかった", "られない", "られた", "られる",
        "られます", "られました", "られません", "られませんでした",
        "う", "よう", "こと", "の",
        "て", "た", "ないで",
    ]

    // if godan: return a set of conjArrs based on last char 
    // else ichidan ' '

    if (activeVerbType == "godan") {

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
                return { conjArr: conjう, conjCSSTag: "conjう" }
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
                return { conjArr: conjGoあ, conjCSSTag: "conjGoあ" }
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
                return { conjArr: conjGoい, conjCSSTag: "conjGoい" }
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
                return { conjArr: conjGoえ, conjCSSTag: "conjGoえ" }
                break;
            case "お":
            case "こ":
            case "ご":
            case "そ":
            case "と":
            case "の":
            case "ぼ":
            case "も":
            case "ろ":
                return { conjArr: conjGoお, conjCSSTag: "conjGoお" }
                break;
            default:
                return { conjArr: complete, conjCSSTag: "complete" }
        }

    } else { // activeVerbType is ichidan

        switch (lastChar) { //TODO make the logic in this switch case correspond to ichidan conjugations
            case "る":
                return { conjArr: conjう, conjCSSTag: "conjう" }
                break;
            default:
                return { conjArr: conjIchiAll, conjCSSTag: "conjIchiAll" };
        }

    }

}

export default giveConjugation;
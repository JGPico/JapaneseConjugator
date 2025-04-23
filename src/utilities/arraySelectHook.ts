
function useArray(desiredArr: string) {
    console.log(desiredArr);
    const conjる = ["こと", "の", "て", "た"]
    const conjないで = ["ないで"]
    const conjListBig = [
        "ます", "ました", "ません", "ませんでした",
        "なかった", "ない", "る", "ましょう",
        "たい", "たかった", "たくない", "たくなかった",
        "られなかった", "られない", "られた", "られる",
        "られます", "られました", "られません", "られませんでした",
        "う", "よう"
    ]
    const conjListComplete = conjListBig.concat(conjる, conjないで)

    switch (desiredArr) {
        case "る":
            return conjる
            break;
        case "た":
            return conjないで
            break;
        default:
            return conjListComplete;
    }

}

export default useArray;
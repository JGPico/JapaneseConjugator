// Build Array of words and assign id
const wordList = ["レモン", "ライム", "泳ぐ", "食べる", "守る", "読む", "寝る", "飲む"];

const genWordArray = () => {
    return [...wordList].map((jword) => ({ jword, id: Math.random() }))
}

export default genWordArray;
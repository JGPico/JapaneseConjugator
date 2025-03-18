// Build Array of words and assign id
const wordList = ["レモン", "ライム"];

const genWordArray = () => {
    return [...wordList].map((jword) => ({ jword, id: Math.random() }))
}

export default genWordArray;
// Build Array of words and assign id
const genWordArray = (input: any[]) => {
    return [...input].map((jword) => ({ jword, id: Math.random() }))
}

export default genWordArray;
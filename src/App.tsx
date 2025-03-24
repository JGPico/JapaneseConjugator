import './App.css'
import Card from './components/Card'
import WordDisplay from './components/WordDisplay';
import genWordArray from './utilities/wordArrayGen'

function App() {

  const wordList = ["レモン", "ライム", "泳ぐ", "食べる", "守る", "読む", "寝る", "飲む"];
  const charList = ["あ", "え", "い", "お", "う", "さ", "せ", "し", "そ", "す"];
  const displayList = ["l", "e", "m"];

  const wordArray = genWordArray(wordList);
  const charArray = genWordArray(charList);

  // This needs a function to add to and remove from on button press instead
  const displayArray = genWordArray(displayList)

  const handleClick = () => {
    console.log(`display[0]: ${displayList[0]}`)
    return null;
  }

  document.body.style = 'background: lightgray;';

  return (
    <>

      <h1>Japanese Conjugator</h1>

      <div className="grid-display">
        {displayArray.map((char) => {
          const { jword, id } = char
          return (
            <WordDisplay
              key={id}
              jchar={jword}></WordDisplay>
          )
        })}
      </div>

      <div className="grid-letters">
        {charArray.map((char) => {
          const { jword, id } = char
          return (
            <Card
              key={id}
              jword={jword}
              onClick={() => { handleClick() }}></Card>
          )
        })}
      </div>

      <div className="grid-verbs">
        {wordArray.map((word) => {
          const { jword, id } = word
          return (
            <Card
              key={id}
              jword={jword}
              onClick={() => { handleClick() }}></Card>
          )
        })}

      </div>

    </>
  )
}

export default App

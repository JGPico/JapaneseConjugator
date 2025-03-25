import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import WordDisplay from './components/WordDisplay';
import ButtonComponent from './components/Button';
import genWordArray from './utilities/wordArrayGen'

function App() {

  const wordList = ["レモン", "ライム", "泳ぐ", "食べる", "守る", "読む", "寝る", "飲む"];
  const charList = ["あ", "え", "い", "お", "う", "さ", "せ", "し", "そ", "す"];
  const [displayArray, setDisplayArray] = useState(genWordArray(["L", "M", "N"]));

  const wordArray = genWordArray(wordList);
  const charArray = genWordArray(charList);

  // This needs a function to add to and remove from on button press instead

  const handleClickLetter = (j: string) => {
    setDisplayArray([...displayArray, { jword: j, id: Math.random() }])
  }

  const handleClickWord = (j: string) => {
    setDisplayArray([]);
    const tempArr = [];
    for (const char of j) {
      tempArr.push({ jword: char, id: Math.random() })
    }
    setDisplayArray([...displayArray, ...tempArr])
  }

  document.body.style = 'background: lightgray;';

  return (
    <>

      <h1>Japanese Conjugator</h1>
      <ButtonComponent text="Clear Display" onClick={() => { setDisplayArray(genWordArray([])) }}></ButtonComponent>

      <div className="grid-display">
        {displayArray.length > 0 ? displayArray.map((char) => {
          const { jword, id } = char
          return (
            <WordDisplay
              key={id}
              jchar={jword}></WordDisplay>
          )
        }) : <WordDisplay key={1} jchar={". . ."}></WordDisplay>}
      </div>

      <div className="grid-letters">
        {charArray.map((char) => {
          const { jword, id } = char
          return (
            <Card
              key={id}
              jword={jword}
              onClick={() => { handleClickLetter(jword) }}></Card>
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
              onClick={() => { handleClickWord(jword) }}></Card>
          )
        })}

      </div>

    </>
  )
}

export default App

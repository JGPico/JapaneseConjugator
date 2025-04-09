import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import WordDisplay from './components/WordDisplay';
import ButtonComponent from './components/Button';
import genWordArray from './utilities/wordArrayGen'

function App() {

  interface charObj {
    id: number;
    jword: string;
  }

  const wordList = ["レモン", "ライム", "泳ぐ", "食べる", "守る", "読む", "寝る", "飲む"];
  const charList = [
    "あ", "か", "が", "さ", "た", "な", "ば", "ま", "ら",
    "い", "き", "ぎ", "し", "ち", "に", "び", "み", "り",
    "う", "く", "ぐ", "す", "つ", "ぬ", "ぶ", "む", "る",
    "え", "け", "げ", "せ", "て", "ね", "べ", "め", "れ",
    "お", "ご", "ご", "そ", "と", "の", "ぼ", "も", "ろ",
    "や", "ゆ", "よ", "わ", "を", "ん"];
  const [displayArray, setDisplayArray] = useState<charObj[]>([]);

  const wordArray = genWordArray(wordList);
  const charArray = genWordArray(charList);

  // functions **************
  const handleClear = () => {
    setDisplayArray(genWordArray([]));
  }

  const handleClickLetter = (j: string) => {
    setDisplayArray([...displayArray, { jword: j, id: Math.random() }])
  }

  const handleClickWord = (j: string) => {
    const tempArr = [];
    for (const char of j) {
      tempArr.push({ jword: char, id: Math.random() })
    }
    setDisplayArray([...tempArr])
  }
  // functions ***************

  document.body.style = 'background:var(--backgroundgreen)';

  return (
    <>

      <h1 className="light-font">Japanese Conjugator</h1>
      <ButtonComponent text="Clear Display" onClick={() => handleClear()}></ButtonComponent>

      <div className="wrapper">

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

        <div className="placard">
          <p>form</p>
          <p>form1</p>
          <p>form2</p>
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
                onClick={() => { handleClickWord(jword); }}></Card>
            )
          })}

        </div>

        <div className="grid-conjugation">
          {["lemon", "egg", "squid"].map((conj) => {
            // add key to component
            return (
              <p>{conj}</p>
            )
          })}
        </div>

      </div>

    </>
  )
}

export default App

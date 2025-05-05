import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import WordDisplay from './components/WordDisplay';
import ButtonComponent from './components/Button';
import TextBox from './components/TextBox';
import genWordArray from './utilities/wordArrayGen'
import useArray from './utilities/arraySelectHook';

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

  const conjListComplete = useArray("complete")
  const [displayArray, setDisplayArray] = useState<charObj[]>([]);

  const [lastChar, setLastChar] = useState("empty");
  const wordArray = genWordArray(wordList);
  const charArray = genWordArray(charList);
  const conjArray = genWordArray(conjListComplete);

  // functions **************

  const activateChar = (inputLastChar: string) => {

    switch (inputLastChar) {
      case "る":
        console.log("ends in る");
        setLastChar("る");
        break;
      case "た":
        setLastChar("た");
        break;
      default:
        console.log("default");
        setLastChar("empty");
    }
  }

  const handleClear = () => {
    setDisplayArray(genWordArray([]));
    setLastChar("empty");
  }

  const handleClickLetter = (j: string) => {
    const newArr = [...displayArray].slice(0, -1);
    newArr.push({ jword: j, id: Math.random() });

    activateChar(newArr.slice(-1)[0].jword);
    setDisplayArray([...newArr]);
  }

  const handleClickWord = (j: string) => {
    const tempArr = [];
    for (const char of j) {
      tempArr.push({ jword: char, id: Math.random() })
    }
    activateChar(tempArr.slice(-1)[0].jword);
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
          <p>form1</p>
          <p>form2</p>
          <p>form3</p>
          <p>form4</p>
          <p>form5</p>
          <p className="invisible"></p>
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
          {conjArray.map((conj) => {
            const { jword, id } = conj
            return (
              <TextBox key={id} text={jword} lastChar={lastChar}></TextBox>
            )
          })}
        </div>

      </div>

    </>
  )
}

export default App

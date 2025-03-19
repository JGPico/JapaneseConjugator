import './App.css'
import Card from './components/Card'
import genWordArray from './utilities/wordArrayGen'

function App() {

  const wordArray = genWordArray();
  document.body.style = 'background: lightgray;';

  return (
    <>

      <h1>Japanese Conjugator</h1>
      <div className="grid">
        {wordArray.map((word) => {
          const { jword, id } = word
          console.log(`mapped: ${word}`)
          return (
            <Card
              key={id}
              jword={jword}></Card>
          )
        })}

      </div>

    </>
  )
}

export default App

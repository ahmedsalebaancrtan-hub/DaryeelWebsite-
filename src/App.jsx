import { useState } from "react"
import { winterNeeds } from "./data/WinterNeeds"
import WinterList from "./components/WinterList"

function App() {
  const [needs, setNeeds] = useState(winterNeeds)

  return (
    <main className="board">
      <h1>
        Daryeel winter Warmth
      </h1>

      <p className="board-intro">
        Tracker {needs.length} winter needs this season
      </p>

        <WinterList list={needs} />
       <footer className="board-footer">
          <p>
          An educational classroom prototype created in support of{" "}
          <a
            href="https://daryeelyouth.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daryeel Youth
          </a>
          . Not an official Daryeel product — all campaign data is fictional.
        </p>
        </footer>
    </main>
  )

}


export default App
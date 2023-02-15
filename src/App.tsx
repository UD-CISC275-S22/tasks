import React from "react";
import "./App.css";
import creature from "./assets/creature.png";

function App(): JSX.Element {
    return (
        <>
            <h1>Mikaylla Website</h1>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScriptS
                </header>
                <div>
                    <h1>Hello World</h1>
                    <img src="./assets/images/baby.png" alt="Baby" />
                </div>
                ;
                <p>
                    Hello World Edit <code>src/App.tsx</code> and save. This
                    page will automatically reload. Hello World
                </p>
            </div>
        </>
    );
}

export default App;

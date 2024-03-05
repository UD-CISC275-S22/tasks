import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <><div className="App">
            <header className="App-header">
                Hello World. Ricky Kiamilev. UD CISC275 with React Hooks and
                TypeScript
                    <Row>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    height: "100px",
                                    width: "100px"
                                }}
                            >
                                Box 1
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    backgroundColor: "red",
                                    height: "100px",
                                    width: "100px"
                                }}
                            >
                                Box 2
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div><hr></hr><Counter></Counter><hr /><RevealAnswer></RevealAnswer><hr /><StartAttempt></StartAttempt><hr /><TwoDice></TwoDice><hr /><ChangeType></ChangeType><hr /><CycleHoliday></CycleHoliday></>
        </div>
    );
}

export default App;

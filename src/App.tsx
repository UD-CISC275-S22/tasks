import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

export function App(): JSX.Element {
    return <h1>CISC275 Hello World HTML</h1>;


    return <div>
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pcworld.com%2Fwp-content%2Fuploads%2F2023%2F07%2Fdell-g2723h-1.jpg%3Fquality%3D50%26strip%3Dall%26w%3D1024&tbnid=RKILh1veEncHjM&vet=12ahUKEwihsdWsz7WBAxUUFlkFHStWDpwQMygQegUIARCVAQ..i&imgrefurl=https%3A%2F%2Fwww.pcworld.com%2Farticle%2F1787245%2Fbest-budget-monitors.html&docid=wZ_EhPiYRkO6wM&w=1024&h=682&q=computer&client=safari&ved=2ahUKEwihsdWsz7WBAxUUFlkFHStWDpwQMygQegUIARCVAQ" alt="pic" />
    </div>;
    
    return <div>
    <ol>
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
    </ol>
    </div>;

    return <div>
            <Button>Log Hello World</Button>
        </div>



    return <div>
            <Button onClick={() => console.log("Hello World!")}>
                Click Me
            </Button>
        </div>;

    return <div>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <Col>Column</Col>
                </Row>
            </Container>
        </div>;

    return <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>;

    return <div>
        <Button> Log Hello World</Button>
    </div>

    return <div>
        <Button onClick={ () => console.log("Hello World!")}>Log Hello World</Button>
    </div>;

    return <div>
        <Container>
            <Row>
                <Col>
                <div className="sq"></div>
            
                
                </Col>
                <Col>
                <div className="sq"></div>
                
                
                </Col>
            </Row>
        </Container>
    </div>;
}

export default App;

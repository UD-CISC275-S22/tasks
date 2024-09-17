import React from "react";
import "./App.css";
import { Button, Col, Row, Container } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    UD CISC275 with React Hooks and TypeScript - RYAN CORTES AND
                    Hello World
                </header>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.
                </p>
                <p></p>
                <div>
                    <Button
                        onClick={() => {
                            console.log("Hello World!");
                        }}
                    >
                        Log Hello World
                    </Button>
                </div>
                <h1>My Favorite Things</h1>
                <div>
                    <ol>
                        <li>Food</li>
                        <li>Video Games</li>
                        <li>Cooking</li>
                    </ol>
                </div>
            </div>
            <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAACAwAEBQEGB//EADcQAAICAQMCBQIEBQMEAwAAAAECAAMRBBIhBTETIkFRYQYyFCNxwUKBkaGxUmLRM+Hw8RUkQ//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAICAwACAgMAAwEAAAAAAAABAhEDEiExQRMyBCJRFGFxBf/aAAwDAQACEQMRAD8A84sasWIxZxGFjBDAgLGL3gINFh7ZxTGrEBFXEYBOCEIAdhATmIYgBzE7iSdBiAgE5iFmQkQAXiCRGGcPIhYhWJwiMIgkQsBLQTGsIsiFgLIgERhgGFjFmARGNAMYCmEBhGGLaMaYs95J095IDHKsYqwlWNVYA0AiRoSEgjQsBULVI0LxOgQ1EQgQsNVhhcxipAAAsLbGhIQURjoRsMmwyxt4hIvGYUKiuEJk8JvaXAvxOEQodFE1YkCGXCvxCppa1wla72PosVBVlHZBZPib6dB1b8nw1HyZ1ug3j/8ASon4JlaMejPNlD7QCh9puanpeo04y6bh7rzKRVcZktUPT+maajBNR9pfIEW/HaINUUTS3tANJl0mLLrntAeqKRqMU9Z9pokrFttMLDUzSvvJLjKme0kdhqdUjEINK4t4kV8tAlsu1kZj+JTB7GGlmWjFZcTBh4Erb9sLxCRFYWWkHMcBKdbmWK2JIAOIwTLVNFlp8iM36CaOn6SpbOou2/7F7yvd1Q0VfhtN5XCjzfvM7/5QuAK7TY3diOQsTnFHVDBfk9I3TtGyhR5fktEv0VwM02oy/MwD1WzT6d7rkYgLkMTNrpXU6dVpBdptQlqsPMFb7TCORP0XLAqKt9L6d9tveKHJ5l/XN+Jo8Qti1AeOPNMtWjtHLki4Oi5TpzfYETuTz8Caraurp9BWlUG0eYzGbWHR6QsjA2v2GO0yNTe12gIawuzfcTFLLXg6MWG1sz0z9cVqEZMlmGYka+4uq3tsJ7cgTM02ntFWdOQAowvuPkRDfTStra9XqtbqWcMGCF/2j2kzSonp6NSwdssPjdMrrdC1agWVrtWwZx7GWupdW6T0/SAa99hI2gDkkTMXqOk6p08fgNYdV+GwHZhhsHtkS+0YZIqimTFOwnX7mJfMzs5giRiA5E4O0W2YWOyE8xbGQnmAxhY7IZIpm5kjFYsAmNRSIFZ5lgEYisVBDOJKvvnVcEYkBAPEGBZ25xD2gD5iUf3js+piEEnfEY7CutrGPlQZMTW/mzEdZcDp9hz3wMQLxpOSs5Sz9R0dlqO6l8gbe4E0ugaXQ9I6crdQuVdxzudsE/E8n0TqB09tlZBNZHOIf1gx1RqZSAiDyge0Ix/ameg+R4e6z03qlb1UmqxXHIB4PwYzpOj0vTw9VfgqoP2keafP/o3XJo3sQkBnIPeeg6n1xNXqUXQWHbQR41i9ifaKSpgraLf1B1BdJq6L9G7YDkOnoY9Stih6/sYZX9J47qdtp1CWMxKk5np/p29L+jJ/rR2T94Iz/IgnD/gfUkvdA2nQuQvYDPExNDqsUWVOSOSD8T3/AEqkUaV9S4IZhtT955DrHT6xqrba8qSc49MxShXSsOS40x1fU3qq3K21QO+ewidP9TaV62KW17wD93cyjp8MjpZxkYmDZoxotStWorzVv8tnwfQysdS4xtdHda6nX1Fwj27wTgevPxPSfQSabSdN1qsSLrmAKuuCMZ4/zKXQuiVfjVvZUZNu9T6Z7gy7pNJqatTZqNVajF84CnPJmk24qkZzVJtjbGG4++YBGVzG2VgeYGKPA+JmmcTAXvAtYA945SJXtVSc+0Y0KY55iy3pG5GIB2jkxFJIrFxn1khYU8zsYVEEcDGOY0KxWaF2nocuUOGz/Kcq0x29sGZLJFqy5/jyi6ZUTT2lcgZhJUzEgZyO81dMNmVYYEdpq6jY2AMSHmotfjWrMfY54AheHYB3m+mjr35C5zK2o0bByK1OJUMykTk/GlAzqkbGDB1nT7dbpLaK/wDqNyme2ZpppmGAyY+Ze0+jYMGJwPeW5quMUMclLwePH0/q+m6VrdQ1TO3BWvJx/OUE034rUAOCGRWDZ7Fcf84n0XqNaLoyh7nmeKtwlzr238ZlR47Z3wqfGV9N0lKdHqbqwGuQgqB3IzFANS66GoEBOXJ9WPfMt0326Qs+RkggSrpgxuZ/4mOTk95eSVrhbhqz3PRPpvRdX6RZTq185IKsD2IgnpadLtXQ6aoImewJOfnmN+mepilVXd/I+k9RZ4VlqawhdyJwfmLHUonJmUm6MzXOiULQo8yDE81r33ZBHM1NfeDexbu3MytUqXKSmQ3uIsjvg4qjz+v8jHwzz6wNKPxpajUbSncMwyQZa1ujZSTg7m5yvMr6fSut6PWTnOT7SEjU3Pp36e1dOrRRqFXT5yU3f+YlnqVR0+rtrIxhu02OhMK6suwaw9/iD9S6RrtQlqKAXXv7zWXMdtnNkUpukeeY5EW/2YEtWaY1od3eVQV34PtMlJPwYSg48YjBA+Yuz7cyw5TcBCrrpuJDHAg5UrFGDk6Rml8Tq/mHao5jtbp0pfCc5iK38JgfUQU7jsh6ayqR1tO6+kkY73ucgcTslZHRbxq+Ieow+WORLJYvls4USjTg97APmPrbwyMtuGc4HOZm4r0dEZS8+h3mZAeTjtLtI8FQXVvMJXp1RKtmskD2Ebp76mYhi+PVTzmYyfpo68WHzJOxranwxlCYdeqZ/wDqDmL1GnTxF2thPUmE6VFsNf5OwxCoqFIhfNKfUXF1Krp8Eckwq9RubBYATO1d1KVpQpYOR5WxwY/pNL6q7F2diDJOIseNyfAy5NeNdGdVuK1nHPE8nqCGYb19e09H1WxBu3gHmebvtpc8Aj5zOx/YmHgrPQdrY/lBqRh5icf5lnxEKEE8ReoevYnJGee0fSjS6beytkMcehM9IOrFqRSW7jmeFq1fmBTgfvL+j1Rs1BGewElXF8CSTR6Cy3xDkcCJfB4MlaZrUqCf0itR4jHAaus9sdzKZiBYWrAJAes5PPcSFl8jY+5eJQt1TV6jwbQSgGSf2h6q7OkDIfNWwII9owPR9Luas8Dv7y71wvaKPDcK6jIz6zF6TZctyjblM849JudcT8inUp5QvB3f2hO3iaQQajO2Zb3o52sMtjmKFKmwHYoJHHzBpspWwtcRz/aAzeO6+HeB6KDxmcnY8KVTWz6zpqpYHemW9DKh0yIQcnEOuy38Qdy4Kj19DC1dTMVswcD7gst5FF6kPHcdkJ1GLU2ooGD3lZNNtJdxkAy7hWQlsgKc4iLtUzVrUq5XuSIoy5SKljV2/ID3qrYAx8SSvZkt2J/SSPSI1ln/AAOp6CNxUqAcADuDOKo8berkV/I5lau4VYOoRFAPA7yzp7qbNJY/hrljyGYjiHU+G3xrVlht685Kq3t6yyjIlQVR5/8AUe8Ci0+B5lTGPKF4wJ25aabSVIYFQQH82JnPr4h418SbvyOAssz4Tg5wfMeB8Tj1WIm4gN34XmcN1feyvwxj1Xg/07RtNyJiqvlcnBHvEly6Cc05VtQNKtcV8rBgOVbjE3dJ/wDU0wrLAt3yPaY/jNav4d1OWGS7cHI7CP3sqPXnlQASTmdGCSbsxyYnDjZldXLOxx2J7zCtrasM2OB6zb6hzwu4TJ6i4XSNtbmXHrKfImaNTuYjPacvYvaibuFEpCwKTnvGJcH1SEdiJtqZ7GlXphtGOJKLPw+t25yWGJa+6o+mBx+swb9QRqFYnnODIj1mkuI91o7s0hTnHrNXS1VOB5Rz8TynStWt9Spu5X+Gel6XcdwGeI1x9MWrXDy/WN9OtvqYY2kbW9xKR1BKKqnG3gzV+sayvUEION6fvMeugkeKCcAwapgvB6XodzM3nPPfE9XqGW7pdyEnIUN/SeH6bdtuUqcAie009qt0+yx8YCHce0pNUyXFvh51jpyrgH80dwfWDTpluXBIRV5J7w7FoS0mpd/lyWbtK724LKHB3Y4B4zOOU/14aQwS3R17PAd9zgqON3edcWjTJ4TF0bs6Zzj5EzNfbYxFQBKDvkdxLNXUbgqVrhMLn2H6SZbOqRusMYLsuh2PbSyszE8YOYi0u7eW1cnntjEbdY9pDagKCy44UjP9YtUqJHmI8vGTwfiFvwPHHHFN30LxHGAuCPf3khLYpUBFAA45Mkm/9FOP9ZlWuPCRnQb1ODn294ylmXBPY9iPQRdYbdgc/wBpb0jBFWv8PWwBwSy5M66pHDu8jqTK2stsas7XO7+HHpHG4sF2gqxXPb1/n3lnUBvCCtp/yy3B9R+sSlFf3Lkspwu7iSmmOaa5djla5dKoesFgnHmzn4/WSvUMcN7Z3D14geAzHLH145wBGPV+WMtgg4YY4IPzJSS4PK3Np1RYq11ddOLy9oDcheD/AFj9Lq3vvstXS2IhUYJB80qLSFfHhpgjA2jiNqtFK7NpBbBxn/Eb4uCjk7UgNZdYx2sm0n4mB1G0Y8KskkcnjM9KAH5sZTgn+L09oinTUU3m22oXZJO08Yz/ANpUHXWXKSf6o8fTo21Gi1F1RZrkYYrHqvrj3M5RoNYlqs+nuHY/YePfM9rdoaamRtKgq3E8+m7j/iO0lZtuwbWT/czAgepwP6SvmpN+hNdS9mMuj1jVArS+Mczzms0rfidrbkUsoPHucT6Fr3vpKpXqPGrbjBPGJnNpNzB9gVXPl3HPaZ4csn0rPJR57PMaAW6LWILCQTlTz3nrunai3PA+0czOOl8QsVXD57n+KXtN+JqtR9gNfBY5A5mk5X0whN+CfWNZs0mjvC+ZWIY+wx6zL0DAU2Bl3V7SfkTd1Bt1W2m8Jgk4z7f+pXp0ihGe01rjJQ+8JZI10a2b4ZujHhuws9ftInpNJq9/SdRWQSNhGR7jExVr/M+Qv+JZ0Wptqd6CMLau0tjgZ74/vEn0W1pgjFhZl5znj1I9YkhM7inA7cdsSWZ3PtLD3xFMGXO7kMOcH0ilG0RDJpLYdZWo2jaA3+32ilcfcAAM48o7QWsNnIOMg8/ygMc4wQAoxgn+0cVSoMk95OVUMs1ju3NmSDg5le4phmJPHYYkLDaWI838RPYe0V4yFdwwTnvnjMYvViy23h8k+vM7GK6KOU3E9+ZId/hVR9sYi2GtTUvY8k+sYjsG2k428wRqQyIo4I9oN6E5sUOF/SQpNvpesUk4s0q7UFi+bhvvyZSsAV2DMcZwD/iLpQOd7MeeJZepOE5P6mSoKLNMmWWWN0c85rO8/cckCFhwo3fpx7fM4G2WeGDx2+YfmVkBfKq2Rn1hRKarrDVLRlB7cH1xGC4A1tjcFBGcTtep/MbIUcED0i0VmHmcLtGR6yknRE9U+OxldlR8q1nvlSPUe0lVi5AbC59hn+sBK6A+7DZzkcxt2+3aoCKAecD0kSbSLgkx6Wb69zt4jht2xx90rGwpkorBnX0HHePDaXeqtZ8YAgsi12layDjnk+kzhKEnSNsqy43s+AoWQMjL5XBzu9/QRNeoc1bbKgMdgO0u02pazC0IEz3PeKuFKDbW+T6bhNVS4jnk91u/IoaoMTlTtIySPT4hUailFDFWQoeQfMHX2gjatxwABjn9YAIz5sBPfEqULVMzjPV2G4Yu7faW82CewI7QA+KdocbW757iGK/H3MxxgcMsCqgXW7lRyFGAPWS1r5LitnwFQi4Luckgn0ho3JsKlRnGG+JHrsR8PVsqP2lh+8TaAGLLbu99vYRxe3UPJi+Pz0OwZXKnHc59ZXfy7Dgc8HHp8xq2BlUMfMO2PSceyurnGQT75mjtGSSfkUqFidpJPGRjtOKF3EuBWF7g/wAQ+IYesjIO4+nMrkh2VdpJ+O6xNWioyjF+LLYs6fdSA9Kru7Ejt8yrp20ewo4LlWwSeB/KK1PiJYzGtlXPAAziAhJU7Uz6KJmsdJ/sbyzxtPULUV6cWflWeX25MkUTtwCgzOzdKkcr67RFO0nEY+rueoVlvKPadkmL8ncklBgoSAACYwswYNk5kkmjOIYp53estFiaQD8SSTORtj+rGpQjixmySBkcxR8iqV9e87JHbMZcQ5gFpLDvI53oc8cdxJJH6Kj9kwdMipWXCjcp4Jl3QUpazu+SQuZJJjBKzac5Sq2LNa+MBjiBYoDqw75kkmvsxfgO2lDpBZzuiaQGsFZ+08mSSQ27NIxVHNcop1BVMgAAgQqbrKqLyrchgMn9JJIZPoafjpf5BFvst053tkFe0p0qGt2HsZJJOD6s1/8AQSWRJDFpRad/JbPcyvqgBavyMmSSOLewskI/EnRXHlbj1kqsZHO045zJJNl1HFH0E9j+Go3HDZJixyoz6GSSC4VLycu4YfpJJJKBn//Z"
                alt="I cheated using an URL right now I'm sorry :("
            />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    width: 240,
                                    height: 120,
                                    backgroundColor: "red",
                                }}
                            ></div>
                        </Col>
                        <div
                            style={{
                                width: 240,
                                height: 120,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;

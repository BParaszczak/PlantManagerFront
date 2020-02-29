import React from 'react';


function FirstComponent() {
    return (
        <p className="random-text">Some short text to test our first component.
        </p>
    )
}

export default FirstComponent; //przy eksporcie jednej rzeczy,jeśli więcej to:
// export { mojaFunkcja, FirstComponent };
//trzeba to też importować w odp. miejscu - index.js - stosując tę samą składnię
import React, {Suspense} from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import GlobalStyles, {Container} from "./GStyles";
import Loader from "./Components/Loader/Loader";

const loadingMarkup = (
    <Container>
        <Loader/>
    </Container>
)
const root = ReactDOM.createRoot(document.getElementById("cat"));

root.render(
    <Suspense fallback={loadingMarkup}>
        <React.StrictMode>
            <GlobalStyles/>
            <App />
        </React.StrictMode>
    </Suspense>
)


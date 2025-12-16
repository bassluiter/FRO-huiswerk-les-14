import './ErrorPage.css'
import {NavLink} from "react-router-dom";

function ErrorPage() {
    return (
        <body>
            <main>
                <h1>Error 404 pagina niet gevonden! terug naar <NavLink to="/">homepage</NavLink></h1>
            </main>
        </body>

    );
}

export default ErrorPage;
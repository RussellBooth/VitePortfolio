import { useRouteError } from "react-router-dom";
import '../styles/pages.css';

export default function ErrorPage() {
    const err = useRouteError();
    console.error(err);

    return (
        <div id='error-page'>
            <h1>Oh-no...</h1>
            <p>There has an occurance of an unexpected error.</p>
            <p>
                <i>{err.statusTExt || err.message}</i>
            </p>
        </div>
    );
}
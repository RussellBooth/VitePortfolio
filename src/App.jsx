import { Outlet, Link } from 'react-router-dom';
import Nav from './components/NavTabs';
import './styles/pages.css';
import './styles/footer.css';
function App() {

    return(
        <>
            <Nav />
            <main className='mx-3'>
                <Outlet />
            </main>
            <footer className="footer">
                <Link to="https://github.com/RussellBooth">Find me on GitHub</Link>
            </footer>
        </>
    )
}

export default App;
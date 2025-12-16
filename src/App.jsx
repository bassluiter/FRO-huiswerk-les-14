import './App.css'
import logo from './assets/logo-white.png'
import Home from "./pages/Home/Home.jsx";
import AllPosts from "./pages/allPosts/AllPosts.jsx";
import NewPost from "./pages/NewPost/NewPost.jsx";
import Post from "./pages/Post/Post.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import {Routes, Route, Navigate} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
    const isLoggedin = true;

    return (
        // <div className="page-container">
        //     <img src={logo} alt="Company logo"/>
        //     <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        // </div>
        <>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/alle-posts"} element={<AllPosts />} />
                <Route path={"/nieuwe-post"} element={<NewPost />} />
                <Route path={"/post/:id"} element={ isLoggedin === true ? <Post /> : <Navigate to="/"/> } />
                <Route path={"*"} element={<ErrorPage />} />
            </Routes>
        </>


    )
}

export default App

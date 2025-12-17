import './NewPost.css'
import PageHeader from "../../components/pageheader/PageHeader.jsx";
import { useState } from "react";
import readTime from "../../helpers/readTime.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



function NewPost() {
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [blogData, setBlogData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

        function handleSubmit(e) {

        e.preventDefault();
        setError(false)
        setLoading(true)
            try {
            setBlogData({
                title: title,
                subtitle: subTitle,
                content: text,
                author: name,
                created: new Date().toISOString(),
                readTime: readTime(text),
                comments: 0,
                shares: 0,
            });
        }

        catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setTitle("");
            setSubTitle("");
            setName("");
            setText("");
            }
        }
    useEffect(() => {

        if (Object.keys(blogData).length > 0) {
            console.log("Blogdata gevuld:", blogData);
            setLoading(false);
            navigate("/gelukt");
        }
    }, [blogData, navigate]);

    return (
        <>
            <PageHeader
                headerText="Post toevoegen" bgClr="bg-clr-plat"
            />
            <main className="outer-form">
                <form className="inner-form" action="" onSubmit={handleSubmit}>

                    {error && <h3 className="form-error">Fout opgetreden! voer het nogmaals in</h3>}

                    <label htmlFor="form-title">Titel</label>
                    <input
                        type="text"
                        id="form-title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={loading === true}
                    />


                    <label htmlFor="form-subtitle">Subtitel</label>
                    <input
                        type="text"
                        id="form-subtitle"
                        required
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        disabled={loading === true}
                    />


                    <label htmlFor="form-name">Naam en Achternaam</label>
                    <input
                        type="text"
                        id="form-name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading === true}
                    />


                    <label htmlFor="form-text">Blogpost</label>
                    <textarea
                        id="form-text"
                        minLength="300"
                        maxLength="2000"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        disabled={loading === true}
                    ></textarea>


                    <button type="submit" disabled={loading === true}>Toevoegen</button>
                </form>
            </main>
        </>


    );
}

export default NewPost;
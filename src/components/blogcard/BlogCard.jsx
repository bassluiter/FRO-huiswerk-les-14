import './BlogCard.css'
import {Link} from "react-router-dom";

function BlogCard({key, id, title, author, shares, comments}) {

    return (
        <article key={key}>
            <header className="blog-title-wrapper">
                <Link to={`/post/${id}`} className="link-style-reset">
                    <h2>{title}</h2>
                </Link>
                <address className="author">({author})</address>
            </header>
            <p>{comments} reacties – {shares} keer gedeeld</p>
        </article>
    )
}

export default BlogCard
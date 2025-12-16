import './AllPosts.css'
import dataSet from "../../constants/data.json";
import {Link} from "react-router-dom";

function AllPosts() {

    const numberOfPost = dataSet.length;

    return (
        <main className="outer-container">

            <div className="inner">
                <h1>Bekijk alle {numberOfPost} post op het platform</h1>
                {dataSet.map(data => (

                    <Link to={`/post/${data.id}`} className="link-style-reset">
                        <article key={data.id} >
                        <span className="blog-title-wrapper">
                            <h2>{data.title}</h2>
                            <h4 className="author">({data.author})</h4>
                        </span>
                            <p>{data.comments} reacties - {data.shares} keer gedeeld</p>
                        </article>
                    </Link>



                ))}

            </div>

        </main>
    );
}

export default AllPosts;
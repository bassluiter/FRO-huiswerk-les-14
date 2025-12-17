

import './AllPosts.css'
import dataSet from "../../constants/data.json";
import PageHeader from "../../components/pageheader/PageHeader.jsx";
import BlogCard from "../../components/blogcard/BlogCard.jsx";

function AllPosts() {
    const numberOfPost = dataSet.length;

    return (
        <>
            <PageHeader headerText={`Bekijk alle ${numberOfPost} posts op het platform`} bgClr="bg-clr-plat"/>
            <main className="outer-all-post">
                <div className="inner-all-post">
                    {dataSet.map(data => (
                        <BlogCard
                            id={data.id}
                            key={data.id}
                            title={data.title}
                            author={data.author}
                            shares={data.shares}
                            comments={data.comments}
                        />

                        // <article key={data.id}>
                        //     <header className="blog-title-wrapper">
                        //         <Link to={`/post/${data.id}`} className="link-style-reset">
                        //             <h2>{data.title}</h2>
                        //         </Link>
                        //         <address className="author">({data.author})</address>
                        //     </header>
                        //     <p>{data.comments} reacties – {data.shares} keer gedeeld</p>
                        // </article>

                    ))}
                </div>
            </main>
        </>

    );
}

export default AllPosts;
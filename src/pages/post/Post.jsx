import './Post.css'
import {Link, useParams} from "react-router-dom"
import dataSet from "../../constants/data.json";
import timeLogo from "../../assets/time.png"
import arrowLeft from "../../assets/arrow-left.png"
import convertToDutchDate from "../../helpers/convertToDutchDate.js";


function Post() {

    const { id } = useParams();
    const index = Number(id) - 1;


    console.log( convertToDutchDate(dataSet[index].created) )


    return (


        <main className="outer-post">
            <article key={dataSet[index].id} className="inner-post">
                <h1>{dataSet[index].title}</h1>
                <h2>{dataSet[index].subtitle}</h2>
                <p>Geschreven door {dataSet[index].author} op {convertToDutchDate(dataSet[index].created)    }</p>
                <span className="read-time-wrapper">
                        <img src={timeLogo} alt=""/>
                        <p>{dataSet[index].readTime} minuten lezen</p>
                    </span>
                <p>{dataSet[index].content}</p>
                <p>{dataSet[index].comments} reacties – {dataSet[index].shares} keer gedeeld</p>
                <Link to={`/alle-posts`} className="link-style-reset back-to-allpost">
                    <img src={arrowLeft} alt="left arrow symbol"/>
                    <p>Terug naar overzicht pagina</p>
                </Link>
                <p className="blog-number">Dit is blogpost nr {id}</p>
            </article>
        </main>
    );
}

export default Post;



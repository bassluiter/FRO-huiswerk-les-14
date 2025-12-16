import './Post.css'
import { useParams } from "react-router-dom"
import dataSet from "../../constants/data.json";

function Post() {

    const { id } = useParams()

    return (


        <main>
            <h3>dit is blog: {id}</h3>
                <article key={dataSet[Number(id - 1)].id}>
                    <h1>{dataSet[Number(id - 1)].title}</h1>
                    <h2>{dataSet[Number(id - 1)].subtitle}</h2>
                    <p>{dataSet[Number(id - 1)].content}</p>
                    <time dateTime={dataSet[Number(id - 1)].created}>
                        Aangemaakt op: {new Date(dataSet[Number(id - 1)].created).toLocaleDateString()}
                    </time>
                </article>
        </main>
    );
}

export default Post;



import './Home.css'
import dataSet from '../../constants/data.json';
import logo from '../../assets/logo-white.png'


function Home() {

    console.log(dataSet);

    return (
        <>
            <section className="page-container">
                <img src={logo} alt="Company logo"/>
            </section>

            <section className="home-section-2">
                <h1>Bij blogventure geloven wij in de kracht van woorden<span className="asterix">*</span></h1>
            </section>
        </>
    );
}

export default Home;
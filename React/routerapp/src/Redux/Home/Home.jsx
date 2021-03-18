import React from 'react';
import Bg1 from '../Assets/Bg1.jpg';

let Home = () => {
    return (
        <>
            <div className="home-page">
                {/* <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img className="home-bg w-100" src={Bg1} alt="./" />
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner">
                                <h2>Welcome To </h2>
                                <h1>aCoder</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Home;
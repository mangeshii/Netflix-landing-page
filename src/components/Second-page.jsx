import "./SecondPage.scss";
import netflix_tv from "../Images/netflix-tv.png";
const SecondPage = () => {
    return (
        <>
        <div className="second-page container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-10 col-lg-8 col-11 col-sm-10 col-xs-10 mx-auto my-5 ">
                    <div className="row sec">
                        <div className="text col-md-6 pt-5 pt-lg-0 order-1 order-sm-1 d-flex justify-content-center flex-column">
                            <h2>Enjoy on your TV.</h2>
                            <h4>
                                Watch on smart TVs, PlayStation, Xbox,
                                Chromecast, Apple TV, Blu-ray players and more.
                            </h4>
                        </div>
                            <div className="image col-md-6 pt-5 pt-lg-0 order-2 order-sm-1 ">
                            <img
                                className="img-fluid"
                                src={netflix_tv}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hr-line"></div>
        </>
    );
};
export default SecondPage;

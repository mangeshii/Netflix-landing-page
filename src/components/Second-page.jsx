import "./SecondPage.scss";
import netflix_tv from "../Images/netflix-tv.png";
const SecondPage = () => {
    return (
        <>
            <div className="second-page container-fluid d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-8 mx-auto my-5">
                        <div className="row sec">
                            <div className="text col-md-6  pt-5 pt-lg-0 order-1 order-sm-1 d-flex justify-content-center flex-column">
                                <h1>Enjoy on your TV.</h1>
                                <h4>
                                    Watch on smart TVs, PlayStation, Xbox,
                                    Chromecast, Apple TV, Blu-ray players and
                                    more.
                                </h4>
                            </div>
                            <div className="image col-md-6 col-xs-12 pt-5 pt-sm-0 pt-lg-0 order-2 order-sm-1">
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

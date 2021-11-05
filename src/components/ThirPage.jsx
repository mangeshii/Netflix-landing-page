import "./ThirdPage.scss";
import netflix_downloads from "../Images/netflix-downloads.jpg";
const ThirdPage = () => {
    return (
        <div className="third-page container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-8 my-5 mx-auto">
                    <div className="row">
                        <div className="text col-md-6 pt-5 pt-lg-0 order-md-2 order-xs-2 d-flex justify-content-center flex-column">
                            <h1>Download your shows to watch offline.</h1>
                            <h4>
                            Save your favourites easily and always have something to watch.
                            </h4>
                        </div>
                        <div className="image col-md-6 pt-5 pt-lg-0 order-2 order-sm-1">
                            <img
                                className="img-fluid"
                                src={netflix_downloads}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ThirdPage;

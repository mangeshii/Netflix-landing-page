import "./FourthPage.scss";
import netflix_everyone from "../Images/netflix-watch-everyone.png";

const FourthPage = () => {
    return (
        <div className="fourth-page container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-sm-1 d-flex justify-content-center flex-column">
                            <h1>Watch everywhere.</h1>
                            <h4>
                                Stream unlimited movies and TV shows on your
                                phone, tablet, laptop, and TV.
                            </h4>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-sm-2">
                            <img
                                className="img-fluid"
                                src={netflix_everyone}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FourthPage;

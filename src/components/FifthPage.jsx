import "./FifthPage.scss";
import netflix_children from "../Images/netflix.children.png";

const FifthPage = () => {
    return (
        <div className="fifth-page container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-10 col-lg-8 col-11 col-sm-10 col-xs-10 mx-auto my-5">
                    <div className="row">
                        <div className="text col-md-6 pt-5 pt-lg-0 order-1 order-md-2 d-flex justify-content-center flex-column">
                            <h2>Create profiles for children.</h2>
                            <h4>
                            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </h4>
                        </div>
                        <div className="image col-md-6 pt-5 pt-lg-0 order-2 order-sm-1">
                            <img
                                className="img-fluid"
                                src={netflix_children}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FifthPage;

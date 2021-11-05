import "./FifthPage.scss";
import netflix_children from "../Images/netflix.children.png";

const FifthPage = () => {
    return (
        <div className="fifth-page container-fluid d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-1 order-md-2 d-flex justify-content-center flex-column">
                            <h1>Create profiles for children.</h1>
                            <h4>
                            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                            </h4>
                        </div>
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-sm-1">
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
import "./MainPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Second-page"
import SecondPage from "../components/Second-page";

const MainPage = () => {
    return (
        <>
            <div className="container-fluid main-page d-flex justify-content-center align-items-center">
                <div className="cont">

                <div className="title">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h5>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h5>

                    <form className="form col-lg-10">
                        <div className="email">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                            />
                            <button className="bg-danger">Get Started</button>
                        </div>
                    </form>
                </div>
                </div>

            </div>
            <SecondPage/>
        </>
    );
};
export default MainPage;

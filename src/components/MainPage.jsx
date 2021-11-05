import "./MainPage.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Second-page";
import SecondPage from "../components/Second-page";
import ThirdPage from "./ThirPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import FAQPage from "./FAQPage"
import Footer from "./Footer";
const MainPage = () => {
    return (
        <>
            <div className="main-page container-fluid d-flex justify-content-center align-items-center text-align-center">
                <div className="main-container d-flex flex-column justify-content-center align-items-center text-align-center">
                    <h1>
                        Unlimited movies, TV <br />
                        shows and more.
                    </h1>
                    <h3>Watch anywhere. Cancel anytime.</h3>
                    <h5>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h5>
                    <form className="form ">
                        <div className="email row">
                            <input
                                className="col-md-9 col-xs-12 col-sm-12"
                                type="email"
                                name="email"
                                placeholder="Email address"
                            />
                            <button className="bg-danger col-xs-12 col-md-3 col-sm-4 ">
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="hr-line"></div>
            <SecondPage />

            <ThirdPage />
            <div className="hr-line"></div>
            <FourthPage />
            <div className="hr-line"></div>
            <FifthPage />
            <div className="hr-line"></div>
            <FAQPage/>
            <div className="hr-line"></div>
            <Footer/>

        </>
    );
};
export default MainPage;

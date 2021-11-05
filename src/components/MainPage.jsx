import "./MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
    return (
        <div className="container-fluid main-page d-flex justify-content-center align-items-center">
            <div className="title">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h5>Ready to watch? Enter your email to create or restart your membership.</h5>

                <form className="form">
                    <div className="email">
                        <input type="email" name="email" placeholder="Email address"/>
                        <button className="bg-danger">Get Started</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default MainPage;

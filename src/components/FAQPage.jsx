import "./FAQPage.scss";
import Questions from "./FaqData";
import { useState } from "react";
import Accordian from "./Accordian";

const FAQPage = () => {
    const [data, setData] = useState(Questions);
    return (
        <>
            <section>
                <h1 className="faq-header">Frequently Asked Questions</h1>
                <div className="faqs container-fluid">
                    <div className="ques row">
                        {data.map((element) => {
                            return <Accordian keys={element.id} {...element} />;
                        })}
                    </div>
                </div>
                <div className="emailaddr col-md-5">
                    <h2>
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </h2>
                    <form className="form">
                        <div className="email row">
                            <input
                                className="col-md-9 col-xs-12 col-sm-12"
                                type="email"
                                name="email"
                                placeholder="Email address"
                            />
                            <button className="bg-danger col-xs-4 col-md-3  col-4">
                                Get Started &gt;{" "}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};
export default FAQPage;

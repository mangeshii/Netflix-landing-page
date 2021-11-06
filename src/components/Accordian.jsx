import { useState } from "react";
import "./FAQPage.scss";

const Accordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="faq-cont col-md-7">
                <div className="questions" onClick={() => setShow(!show)}>
                    <h1>{question}</h1>
                    {show ? <h1>-</h1> : <h1> +</h1>}
                </div>
                <div className="answers">{show && <h1>{answer}</h1>}</div>
            </div>
        </>
    );
};
export default Accordian;

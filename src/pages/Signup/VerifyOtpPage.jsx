import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signuppage.css"
import bg1 from "../../assets/bg1.png";
import youthopia_logo from "../../assets/youthopia-logo.png";

function VerifyOtpPage() {
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email; // Retrieve email from the previous page

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/api/verify-otp",
                { userOtp: otp, email }
            );
            alert(response.data.message);
            navigate("/"); // Redirect to HomePage after successful OTP verification
        } catch (error) {
            setError(error.response?.data?.message || "OTP verification failed.");
        }
    };

    return (
        <>
            <div className="main">
                <div className="background">
                    <img src={bg1} alt="bg-page" className="bgimage" />
                </div>
                <div className="bordernp">
                    <div>
                        <img src={youthopia_logo} alt="logo" id="logo" />
                    </div>
                    <h2> Welcome </h2>
                    <h3>Login to continue</h3>
                    <form onSubmit={handleVerifyOtp}>
                        <div>
                            <p>
                                <input
                                    id="text"
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                            </p>
                        </div>

                        <button id="Next" type="submit">Verify OTP</button>
                        {error && <p>{error}</p>}
                    </form>
                </div>

            </div>
        </>

    );
}

export default VerifyOtpPage;

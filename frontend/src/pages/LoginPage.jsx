import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("/api/auth/login", {
                username,
                password,
            });
            setMessage(response.data); // 로그인 성공 메시지
        } catch (error) {
            setMessage("로그인 실패: " + error.response?.data || "서버 오류");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        사용자 이름:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                            required
                        />
                    </label>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        비밀번호:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                            required
                        />
                    </label>
                </div>
                <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
                    로그인
                </button>
            </form>
            {message && <p style={{ marginTop: "15px", color: "red" }}>{message}</p>}
        </div>
    );
};

export default LoginPage;

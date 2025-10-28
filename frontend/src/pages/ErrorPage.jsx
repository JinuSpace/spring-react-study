import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();
    const state = location.state || { status: 500, message: "알 수 없는 오류" };

    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
            <h1>에러 발생</h1>
            <p>Status: {state.status}</p>
            <p>{state.message}</p>
        </div>
    );
}

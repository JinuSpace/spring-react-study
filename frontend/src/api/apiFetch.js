export async function apiFetch(url, options = {}) {
    const res = await fetch(url, { ...options, credentials: "include" });

    if (res.status === 401) {
        // 로그인 필요
        window.location.href = "/login";
        return;
    }

    if (!res.ok) {
        const err = await res.json().catch(() => ({
            status: res.status,
            message: "Unknown error"
        }));
        // 공통 에러 페이지로 이동
        window.location.href = "/error";
        // or use react-router navigate("/error", { state: err });
        return;
    }

    return res.json();
}

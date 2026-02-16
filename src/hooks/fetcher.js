export const fetcher = async (url) => {
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

"use client";

import { useEffect, useState } from "react";

const GetDataOnScroll = () => {
    const [cursor, setCursor] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const limit = 25;

    const fetchData = async () => {
        if (loading || !hasMore) return;

        setLoading(true);

        const url = cursor
            ? `https://oss.exercisedb.dev/api/v1/exercises?limit=${limit}&after=${cursor}`
            : `https://oss.exercisedb.dev/api/v1/exercises?limit=${limit}`;

        const res = await fetch(url);
        const result = await res.json();

        if (!result.data || !Array.isArray(result.data)) {
            setLoading(false);
            return;
        }

        setData(prev => [...prev, ...result.data]);

        const lastItem = result.data[result.data.length - 1];
        setCursor(lastItem.exerciseId);

        setHasMore(result.meta?.hasNextPage);

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.offsetHeight - 100
            ) {
                fetchData();
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [loading, hasMore]);

    return { data, loading, hasMore };
};

export default GetDataOnScroll;



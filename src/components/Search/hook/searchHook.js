"use client"

import { useState, useRef } from "react";

export function searchHook() {
    const timerRef = useRef(null);

    const [value, setValue] = useState("");
    const [exercise, setExercise] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    const bodyParts = [
        "Back",
        "Cardio",
        "Chest",
        "Lower Arms",
        "Lower Legs",
        "Neck",
        "Shoulders",
        "Upper Arms",
        "Upper Legs",
        "Waist"
    ];

    const fetchData = async (parts) => {
        if (!parts.length) {
            setExercise([]);
            return;
        }

        setIsFetch(false);

        const query = parts.map(p => encodeURIComponent(p)).join(',');

        const res = await fetch(
            `https://oss.exercisedb.dev/api/v1/exercises/bodyparts?bodyParts=${query}&limit=10`
        );

        const { data } = await res.json();

        setExercise(data);
        setIsFetch(true);
    };

    const handleSearch = (e) => {
        const val = e.target.value;
        setValue(val);

        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {

            if (!val.trim()) {
                setExercise([]);
                return;
            }

            const filteredParts = bodyParts.filter(part =>
                part.toLowerCase().includes(val.toLowerCase())
            );

            fetchData(filteredParts);

        }, 500);
    };

    return {
        value,
        exercise,
        isFetch,
        handleSearch
    };
}
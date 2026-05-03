"use client"

import { useState, useRef } from "react";

export function searchHook() {


    const muscleMap = {
        abs: "waist",
        abdominal: "waist",
        core: "waist",

        chest: "chest",
        pectorals: "chest",

        shoulders: "shoulders",
        delts: "shoulders",

        biceps: "upper arms",
        triceps: "upper arms",
        forearms: "lower arms",

        quads: "upper legs",
        hamstrings: "upper legs",
        glutes: "upper legs",

        calves: "lower legs",

        traps: "back",
        lats: "back",
        back: "back"
    };



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
        const val = e.target.value.toLowerCase().trim();
        setValue(val);

        clearTimeout(timerRef.current);

        timerRef.current = setTimeout(() => {

            if (!val) {
                setExercise([]);
                return;
            }

            const mapped = muscleMap[val];

            if (mapped) {
                fetchData([mapped]);
                return;
            }

            const filteredParts = bodyParts.filter(part =>
                part.toLowerCase().includes(val)
            );

            if (filteredParts.length) {
                fetchData(filteredParts);
                return;
            }

            fetchMuscleData(val);

        }, 500);
    };


    const fetchMuscleData = async (muscle) => {
        setIsFetch(false);

        const res = await fetch(
            `https://oss.exercisedb.dev/api/v1/exercises/muscles?targetMuscles=${muscle}&limit=10`
        );

        const { data } = await res.json();

        setExercise(data);
        setIsFetch(true);
    };

    return {
        value,
        exercise,
        isFetch,
        handleSearch
    };
}
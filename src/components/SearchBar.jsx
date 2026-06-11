/* eslint-disable react/prop-types */
import storeItems from "../json/presentation.json"
import { useState } from "react"

export function SearchBar({ setResults }) {
    const [input, setInput] = useState("")

    const fetchData = (value) => {
        const result = storeItems.filter((item) => {
            return value && item && item.name && item.name.toLocaleLowerCase().includes(value)
        })
        setResults(result)
    };


    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div style={{ height: "29.8px", borderWidth: "1px", borderStyle: "solid", borderColor: "#0D6EFD", borderRadius: "5px", padding: "3px", paddingTop: "0px" }}>
            <img style={{ height: "15px", padding: "0 5px", border: "none" }} src="../../imgs/searchIcon.svg" alt="searchIcon" />
            <input style={{ border: "none" }} type="search" placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}
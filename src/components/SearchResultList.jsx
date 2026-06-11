/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "../css/SearchResult.css"

export const SearchResultList = ({ results }) => {
    return (
        <div className="searchResultContainer">
            {results.map((result) => {
                return (
                    <Link className="searchResult" to="/Product" state={{ updateId: result.id, updateImg: result.imgUrl, updateColor: result.color }} key={result.id}>
                        <div>{result.name}</div>
                        <img src={result.imgUrl} style={{ height: "30px", width: "30px", display: "flex", justifySelf: "end", backgroundColor: "transparent" }} />
                    </Link>
                )
            })}
        </div >
    )
}

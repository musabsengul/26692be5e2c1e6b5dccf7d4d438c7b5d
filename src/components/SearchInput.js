import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SearchInput = ({onChange}) => {
    return (
        <div className="flex justify-between border border-slate-300 rounded-lg items-center w-96 px-2">
            <input onChange={(e)=>onChange(e.target.value)} className="flex-grow search--input py-2"/>
            <FontAwesomeIcon icon="search" className="text-slate-300"/>
        </div>
    )
}

export default SearchInput;

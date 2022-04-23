import React, {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SearchInput = ({onChange, loader}) => {
    const timer = useRef();
    const onSearch = (text) => {

        clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            onChange(text)
        }, 500);

    };
    return (
        <div className="flex justify-between border border-slate-300 rounded-lg items-center w-96 px-2">
            <input placeholder="Search" onChange={(e) => onSearch(e.target.value)}
                   className="flex-grow search--input py-2"/>
            <FontAwesomeIcon icon="search" className="text-slate-300"/>
        </div>
    )
}

export default SearchInput;

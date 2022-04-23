import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Pagination = ({productPerPage, totalProducts, paginate, currentPage}) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="mr-8 py-8">
            <ul className="flex space-x-2 items-center justify-end font-bold text-slate-500 text-lg">
                {currentPage !== 1 &&
                    <FontAwesomeIcon icon="angle-left" className="cursor-pointer"
                                     onClick={() => paginate(currentPage - 1)}/>
                }
                {pageNumbers.map((number, index) => (
                    <li onClick={() => paginate(number)} key={index}
                        className={`page-number--${currentPage === number ? "active" : "passive"}`}>
                        {number}
                    </li>
                ))}
                {
                    pageNumbers.length !== currentPage &&
                    <FontAwesomeIcon icon="angle-right" className="cursor-pointer"
                                     onClick={() => paginate(currentPage + 1)}/>
                }
            </ul>
        </div>
    )
}
export default Pagination;

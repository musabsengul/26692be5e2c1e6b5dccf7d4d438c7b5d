import React from "react";

const Pagination = ({productPerPage, totalProducts, paginate, currentPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="flex space-x-2 items-center justify-end">
                {pageNumbers.map((number, index) => (
                    <li onClick={() => paginate(number)} key={index}
                        className={currentPage === number ? "font-bold text-lg cursor-pointer" : "cursor-pointer"}>
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Pagination;

import React from "react";

const Pagination = ({productPerPage, totalProducts, paginate, currentPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="mr-4">
            <ul className="flex space-x-2 items-center justify-end text-lg">
                {currentPage !== 1 &&
                    <li className="cursor-pointer" onClick={()=>paginate(currentPage-1)}>{"<"}</li>
                }
                {pageNumbers.map((number, index) => (
                    <li onClick={() => paginate(number)} key={index}
                        className={currentPage === number ? "text-slate-700  cursor-pointer bg-slate-700 text-white px-1 py-0.5" : "cursor-pointer py-0.5 px-1"}>
                        {number}
                    </li>
                ))}
                {
                    pageNumbers.length !== currentPage &&
                    <li className="cursor-pointer"  onClick={()=>paginate(currentPage+1)}>{">"}</li>
                }
            </ul>
        </div>
    )
}
export default Pagination;

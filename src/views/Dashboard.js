import React, {useEffect, useRef, useState} from "react";
import {constant} from "../config/constant";
import useGet from "../hook/useGet";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Product from "../components/Product";
import Loader from "../components/Loader";

function Dashboard() {
    const {data: products, loading} = useGet({url: constant.API_URL, responseSrc: "products"})
    const [filteredProducts, setFilteredProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [currentProducts, setCurrentProducts] = useState([])
    const [textSearch, setTextSearch] = useState(null)
    const productsPerPage = 10
    const loader = useRef()

    useEffect(() => {
        if (loading) {
            loader.current.show()
        } else {
            loader.current.hide()
        }
    }, [loading])

    useEffect(() => {
        let strCurrentPage = sessionStorage.getItem("currentPage")
        if (JSON.parse(strCurrentPage)) {
            setCurrentPage(Number(strCurrentPage))
        }
    }, [])

    useEffect(() => {
        loader.current.show()
        let list = products.filter((product) => {
            const q = textSearch
                ? textSearch.toLowerCase()
                : null;

            return q ? product.title.toLowerCase().includes(q) : product;
        })
        if (list.length > 10) {
            const indexOfLastProduct = currentPage * productsPerPage
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage
            const _data = list.slice(indexOfFirstProduct, indexOfLastProduct)
            setFilteredProducts(list)
            setCurrentProducts(_data)
        } else {
            setFilteredProducts(list)
            setCurrentProducts(list)
        }
        loader.current.hide()
    }, [products, currentPage, textSearch])


    const paginate = (number) => {
        sessionStorage.setItem("currentPage", JSON.stringify(number))
        setCurrentPage(number)
    }
    return (
        <div className="h-full w-full relative">
            <Loader ref={loader}/>
            <div className="flex flex-col overflow-hidden">
                <div className="w-full h-16 fixed bg-white shadow ">
                    <div className="flex justify-center items-center text-center my-3">
                        <SearchInput onChange={setTextSearch}/>
                    </div>
                </div>
                {
                    currentProducts.length > 0
                        ? <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto pt-24">
                            {
                                currentProducts.map((item) => (
                                    <Product item={item} key={item.id}/>
                                ))

                            }
                        </div>
                        : !loading &&
                        <div className="mt-40 w-full flex items-center justify-center">
                            No results could be found
                        </div>
                }
                {
                    filteredProducts.length > 10 &&
                    <Pagination
                        productPerPage={productsPerPage}
                        totalProducts={filteredProducts.length}
                        paginate={paginate}
                        currentPage={currentPage}
                    />
                }
            </div>
        </div>
    );
}

export default Dashboard;

import {useEffect, useState} from "react";
import {constant} from "../class/constant";
import useGet from "../hook/useGet";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Product from "../components/Product";

function Dashboard () {
    const {data: products, loading} = useGet({url: constant.API_URL, responseSrc: "products"})
    const [filteredProducts, setFilteredProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)
    const [currentProducts, setCurrentProducts] = useState([])
    const [textSearch, setTextSearch] = useState(null)

    const paginate = (number) => setCurrentPage(number)

    useEffect(() => {
        filter()
    }, [products, currentPage, textSearch])

    const filter = () => {
        let list = products.filter((product) => {
            const q = textSearch
                ? textSearch.toLowerCase()
                : null;

            return q ? product.title.toLowerCase().includes(q) : product;
        })
        const indexOfLastProduct = currentPage * productsPerPage
        const indexOfFirstProduct = indexOfLastProduct - productsPerPage
        const _data = list.slice(indexOfFirstProduct, indexOfLastProduct)
        setFilteredProducts(list)
        setCurrentProducts(_data)

    }

    return (
        <div className="flex flex-col w-full h-full p-2 overflow-hidden">
            <div className="flex justify-center items-center h-24 text-center mb-7">
                <SearchInput onChange={setTextSearch}/>
            </div>
            <div className="h-full overflow-auto flex-col">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
                    {
                        currentProducts.map((item) => (
                            <div className="flex items-center justify-center col-span-2 md:col-span-1 relative" key={item.id}>
                                <Product item={item}/>
                            </div>
                        ))
                    }
                </div>
                <Pagination
                    productPerPage={productsPerPage}
                    totalProducts={filteredProducts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>

        </div>
    );
}

export default Dashboard ;

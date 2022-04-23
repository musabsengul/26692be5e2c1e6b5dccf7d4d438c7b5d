import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {helpers} from "../class/helpers";
import $axios from "../plugins/axios";
import {constant} from "../class/constant";

const ProductDetail = () => {
    const [product, setProduct] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        $axios(constant.API_URL)
            .then((response) => {
                setProduct(response.products.find((product) => product.id === Number(id)))
            })

    }, [])
    useEffect(() => {
        console.log("product", product)
    }, [product])
    return product && (
        <div className="w-full h-full flex flex-col items-center lg:flex-row lg:mx-4 p-2">
            <div className="flex flex-col items-center p-2 h-full h-120 cursor-pointer">
                <div
                    className="p-4 border border-slate-300 h-100 w-100">
                    <img className="h-full w-full" src={product.image.src}/>
                </div>
            </div>
            <div className="">

            </div>
        </div>

    )
}

export default ProductDetail;

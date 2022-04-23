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

    return product && (
        <div className="flex flex-col lg:flex-row mt-40 lg:mt-0 mx-auto container h-full items-center">
            <div className="flex flex-col items-center justify-center">
                <img src={product.image.src} style={{maxWidth: "70%"}}/>
            </div>
            <div className="p-4 mt-12 lg:p-0 lg:mt-0 w-full">
                <div className="item--header">{product.title}</div>
                <div className="item--vendor">{product.vendor} </div>
                <div
                    className="item--price text-green-500 mb-3.5"> {helpers.formatCurrency.format(product.variants[0].price)}</div>

                <div className="mt-12 space-x-1.5">
                    {product.variants.map((item, index) => (
                        <span key={index}
                              className={index === 0 ? "py-0.5 px-1 border border-slate-700 rounded text-sm text-slate-700 cursor-pointer" : "py-0.5 cursor-pointer px-1 border border-slate-300 rounded text-sm text-slate-500"}>{item.title}</span>
                    ))}
                </div>

                <div className="mt-12">
                    <button className="p-2 rounded bg-green-500 text-white">
                        Sepete Ekle
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail;

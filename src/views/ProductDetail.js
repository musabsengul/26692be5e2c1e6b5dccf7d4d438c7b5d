import React, {useContext, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {helpers} from "../utils/helpers";
import LoadingBlock from "../components/LoadingBlock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {AppContext} from "../plugins/contexts";

const ProductDetail = () => {
    const {products} = useContext(AppContext)
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setProduct(products.find((product) => product.id === Number(id)))
        setLoading(false)
    }, [id,products])

    const goBack = () => {
        navigate("/")
    }

    return product && (
        <div className="w-full h-full flex items-center justify-center">
            <LoadingBlock loading={loading}/>
            <div className="flex flex-col container h-full">
                <div className="text-left my-12 text-2xl">
                    <FontAwesomeIcon icon="arrow-left" className="cursor-pointer" onClick={goBack}/>
                </div>
                <div className="flex flex-col w-full lg:flex-row mt-40 lg:mt-0 mx-auto items-center">
                    <div className="flex flex-col items-center justify-center">
                        <img src={product.image.src} style={{maxWidth: "70%"}} alt={product.title}/>
                    </div>
                    <div className="p-4 mt-12 lg:p-0 lg:mt-0 w-full">
                        <div className="product--detail--title">{product.title}</div>
                        <div className="product--detail--vendor">{product.vendor} </div>
                        <div className="product--detail--vendor ">
                            {helpers.formatCurrency.format(product.variants[0].price)}
                        </div>
                        <div className="mt-12 space-x-1.5">
                            {product.variants.map((item, index) => (
                                <span
                                    key={index}
                                    className={`variant--${index === 0 ? "active" : "passive"}`}>
                                {item.title}
                            </span>
                            ))}
                        </div>
                        <div className="mt-4" dangerouslySetInnerHTML={{__html: product.body_html}}/>
                        <div className="mt-12">
                            <button className="p-2 rounded bg-green-500 text-white">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;

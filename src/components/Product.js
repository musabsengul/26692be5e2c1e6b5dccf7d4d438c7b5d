import React, {useState} from "react";
import {helpers} from "../class/helpers";
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center p-2  cursor-pointer"
             onClick={()=>navigate(`/product-detail/${item.id}`)}>
            <div
                className="flex items-center justify-center">
                <img src={item.image.src} style={{maxWidth:"50%"}}/>
            </div>
            <div className="my-2 flex text-center flex-col">
                <div className="text-lg font-bold">
                    {item.title}
                </div>
                <div>
                    {item.vendor}
                </div>
                <div className="text-green-500 font-bold">
                    {helpers.formatCurrency.format(item.variants[0].price)}
                </div>
            </div>
        </div>
    )
}
export default Product;
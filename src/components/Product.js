import React, {useState} from "react";
import {helpers} from "../class/helpers";
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center p-2 h-full h-120 w-100 cursor-pointer"
             onClick={()=>navigate(`/product-detail/${item.id}`)}>
            <div
                className="p-4 border border-slate-300 h-100 w-100">
                <img className="h-full w-full"  src={item.image.src}/>
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

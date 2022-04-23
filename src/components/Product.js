import React from "react";
import {helpers} from "../utils/helpers";
import {useNavigate} from 'react-router-dom';

const Product = ({item}) => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center col-span-2 md:col-span-1">
            <div className="h-full flex flex-col justify-between items-center p-2  cursor-pointer"
                 onClick={() => navigate(`/product-detail/${item.id}`)}>
                <div
                    className="flex items-center justify-center">
                    <img src={item.image.src} style={{maxWidth: "50%"}} alt={item.title}/>
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
        </div>
    )
}
export default Product;

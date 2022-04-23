import React, {forwardRef, useImperativeHandle, useState} from "react";

import LoadingSvg from "../assets/images/loading.svg"

const Loader = forwardRef((props, ref) => {
    const [loading, setLoading] = useState(false)

    useImperativeHandle(ref, () => ({
        show: () => setLoading(true),
        hide: () => setLoading(false)
    }));

    return loading && (
        <div
            className="absolute left-0 top-0 z-50 w-full h-full flex items-center justify-center bg-white bg-opacity-75"
        >
            <img src={LoadingSvg} className="h-4" alt="loading"/>
        </div>
    )
})
export default Loader;

import { useState } from "react"



const PopupComment = (props) => {

    return (
        <div className="mx-auto w-[100%] bg-red-500">
            <div className=" bg-slate-300 w-[60%] h-[90vh] fixed top-2  z-40">
                <div className="w-10 h-10 bg-black " onClick={() => props.setPopupComment(false)}></div>
            </div>
        </div>
    )
}
export default PopupComment
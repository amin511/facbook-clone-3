
import React, { useEffect, useRef, useState } from "react"
import dataCommentaire from "./dataCommentaire"
import { motion } from "framer-motion";

export default function () {
    const inputComm = useRef(null);
    const [showComment, setShowComment] = useState(true)
    const outputComment = dataCommentaire.map((item) => {
        return (<div key={item.id} className="  bg-slate-200 p-2 flex items-center mt-1 rounded-2xl">
            <img src="../../../public/images/fblogo.svg" className="userImg" /> {item.context}
        </div>)
    })
    const [comment, setComment] = useState({
        id: dataCommentaire.length,
        context: "",
    })
    function handleChange(event) {
        const value = event.target.value
        setComment((prev) => {
            return { ...prev, id: dataCommentaire.length + 1, context: value }
        })
    }
    function sumbitComment() {
        dataCommentaire.push(comment);
        setComment((prev) => {
            return ({ ...prev, context: "" })
        })
    }

    return (
        <div className="mt-5">
            <div className="flex">
                <input type="text"
                    className="input"
                    placeholder="Commentaire"
                    value={comment.context}
                    onChange={handleChange}
                />
                <button className="bg-blue-500 rounded-3xl p-2"
                    onClick={sumbitComment}
                    ref={inputComm}
                >Send</button>
            </div>

            <button
                className="bg-blue-500 rounded-2xl p-3"
                onClick={() => {
                    setShowComment(!showComment)
                }}>
                {showComment ? "hide" : "show"}
            </button>
            {
                showComment &&
                <motion.div className="w-[70%] rounded-xl overflow-hidden"
                    layout
                    initial={{ width: 0 }}
                    animate={{ width: '100%', }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 100, ease: "linear", }}>
                    {outputComment}
                </motion.div>
            }
        </div>
    )
}
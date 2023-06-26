import React, { useContext, useRef, useState } from "react"
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineLike } from "react-icons/ai"
import { FaLaughSquint } from "react-icons/Fa"
import { FiDelete } from "react-icons/fi"
import { TiDelete } from "react-icons/ti"
import haha from "../../../../../public/images/svg/haha-1991060.svg"
import Like from "../../../../../public/images/svg/like-1991059.svg"
import Love from "../../../../../public/images/svg/love-1991064.svg"

import Comment from "./Comment"
import { motion, AnimatePresence, easeIn } from "framer-motion";
import { userCurrent } from "../../../../App"
import { db } from "../../firebase/config"
import { doc, deleteDoc, Timestamp } from "firebase/firestore"
import { data } from "autoprefixer"
import PopupComment from "./popup-comment"



const Post = (props) => {
    const [popupComment, setPopupComment] = useState(false)

    const userData = useContext(userCurrent)
    const dataPost = props.dataPost;
    const [emogiShow, setEmogiShow] = useState({
        nameEmogi: "j'adore",
        iconEmogi: Love
    })

    const [isShown, setShowEmojies] = useState(false)
    function changeEmogi(name, icon) {
        setEmogiShow((prev) => {
            return { ...prev, nameEmogi: name, iconEmogi: icon }
        })
        setShowEmojies(false)
    }

    const deletePost = async () => {

        await deleteDoc(doc(db, "posts", dataPost.idPost)).catch((e) => {
            console.log(e.message)
        })

    }

    return (
        <div className="middleBox pt-5 px-5 mt-10 flex flex-col justify-between">
            {/* information post  */}
            <header className="flex justify-between items-center ">
                <div className="flex items-center">
                    <img src={dataPost.userImage} className="userImg mr-2" />
                    <div>
                        <p className="lowercase" >{dataPost.namePoster}</p>
                        <p className="text-xs font-mono">{dataPost.datePost}</p>
                    </div>
                </div>
                {/* delete */}
                <button className=" icon" onClick={deletePost}><TiDelete /></button>
            </header>
            {/* text post */}
            <div className="pt-3 mx-3 break-words tracking-wider text-lg" >
                <p>{dataPost.textPost}</p>
            </div>

            {/* image post  */}
            <div className="w-full mt-2" >
                <img src={dataPost.imgPost}
                    className="object-fill mx-auto " />
            </div>
            {/* nombre reaction and comment */}
            <div className="flex justify-between" >
                <div className="flex items-center gap-2 text-xl ">

                </div>
                <div>
                    <p>comment {dataPost.nombreComment}</p>
                </div>
            </div>
            <hr />
            <section className="flex  space-x-4 text-center items-center   border-black  ">
                {/* reaction comment partage */}
                <div className="flex gap-2 items-center flex-1 p-3 relative hover:bg-gray-200 rounded-xl text-center "
                    onMouseOver={() => { setShowEmojies(true) }}
                    onMouseOut={
                        () => {
                            setTimeout(
                                () => {
                                    setShowEmojies(false)
                                }, 4000)
                        }}>
                    <img src={emogiShow.iconEmogi}
                    />

                    <p>{emogiShow.nameEmogi}</p>
                    <AnimatePresence>
                        {isShown && (
                            <motion.div
                                key="modal"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 2, y: -40 }}
                                exit={{ opacity: [1, 0], y: 10 }}
                                transition={{ duration: 0.3, type: "spiring" }}
                                className="flex bg-slate-100 rounded-2xl  p-3 absolute left-0 space-x-[2px] "
                            >
                                <img src={Like} onClick={() => changeEmogi("j'aime", Like)} className="emoji " />
                                <img src={Love} onClick={() => changeEmogi("j'adore", Love)} className="emoji " />
                                <img src={haha} onClick={() => changeEmogi("Haha", haha)} className="emoji " />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className=" flex-1  rounded-xl p-2 hover:bg-gray-200   border-gray-200 text-center"
                    onClick={() => { setPopupComment(true) }} >
                    Comment
                </div>
                <div className=" flex-1  p-2 hover:bg-gray-200 rounded-xl  ">
                    Partager
                </div>
            </section>
            {popupComment && <PopupComment setPopupComment={setPopupComment} />}
        </div>
    )
}

export default Post
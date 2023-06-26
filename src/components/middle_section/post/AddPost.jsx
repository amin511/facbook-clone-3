import React, { useContext, useState } from "react";
import Post from "./post"
import { TbPhoto } from "react-icons/tb"
import { RiVideoAddFill } from "react-icons/ri"
import { userCurrent } from "../../../../App";
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
const AddPost = (props) => {

    const userData = useContext(userCurrent);
    const [onInputImg, setOnInputImg] = useState(false);
    const [imgPost, setImgPost] = useState("");
    const [textPost, setTextPost] = useState("");

    return (
        <>
            {/* { add post } */}
            <section className="flex flex-col middleBox p-4">
                <div className=" flex items-center justify-between">
                    <img src={userData.userImage} className="object-cover userImg" />
                    <input
                        value={textPost}
                        className=" input w-[70%]"
                        placeholder="Quoi de neuf ... ?"
                        onChange={(e) => setTextPost(e.target.value)}
                    />
                    <button className=" bg-fb-btnBlue py-2 px-3 rounded-2xl" onClick={() => {
                        props.addNewPost(textPost, imgPost)
                        setImgPost("");
                        setTextPost("");
                    }
                    }>
                        Publier
                    </button>
                </div>
                <hr className="w-[100%] my-3" />
                <div className="grid grid-cols-2  " >

                    <div className="flex items-center  space-x-2 mx-auto">
                        <i className="text-red-500 text-4xl"><RiVideoAddFill /></i>
                        <p>Video en direct</p>
                    </div>

                    <label htmlFor="inputFile">
                        <div className="flex items-center space-x-2 mx-auto cursor-pointer hover:bg-slate-200  rounded-xl p-1 " onClick={setOnInputImg}>
                            <i className="text-green-500 text-4xl"><TbPhoto /></i>
                            <p>Photo / video</p>
                        </div>
                    </label>

                    <input type="file" id="inputFile" className="hidden" onChange={(e) => {
                        const file = e.target.files[0]
                        const fullRef = ref(storage, `imagesPost/${file.name}`)
                        uploadBytes(fullRef, file).then((snapshot) => {
                            getDownloadURL(fullRef).then((url) => {
                                setImgPost(url)
                            })
                        })
                    }} />

                    {/* result */}
                    {imgPost != "" && <div className="col-span-2 mx-auto w-[90%] mt-10">
                        <p className="p-2 border-2  mx-3 break-words tracking-wider text-lg ">{textPost}</p>
                        <img src={imgPost} className="w-[80%]" />
                    </div>}
                </div>
            </section>
            {/* fin add post  */}
        </>
    )
}
export default AddPost
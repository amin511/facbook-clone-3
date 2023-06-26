import React from "react"

const Stories = (props) => {
    return (
        <>
            <div className="relative inline-block   h-[210px]   rounded-xl bg-cover bg-no-repeat story hover:scale-105 transition duration-300">
                <div className="absolute bottom-2 text-sm font-bold text-white p-2" >username</div>
                <img src={props.story.phtopProfil} className="absolute userImg border-fb-btnBlue border-[5px] top-1 left-1" />
                <img src={props.story.imgStory} className="object-cover h-full rounded-xl w-[130px] " />
            </div>
        </>
    )
}
export default Stories
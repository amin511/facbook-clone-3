import React, { useState } from "react";
import dataStories from "./dataStories";
import Story from "./story"
import Carousel from 'nuka-carousel'

export default function Stories() {
    const [onstory, setOnStory] = useState(true)
    const stories = dataStories.map(
        (story) => {
            return (
                <Story
                    key={story.id}
                    story={{ ...story }}
                />)

        })
    const style = "p-4 border-b-4 border-fb-btnBlue animate  "

    return (
        <section className=" middleBox mt-8 pt-0 ">
            <div className="grid grid-cols-2 text-center text-fb-btnBlue font-bold border-b ">
                <div onClick={() => setOnStory(true)}
                    className={onstory ? style : "p-4"}>
                    Stories
                </div>

                <div className={!onstory ? style : "p-4"} onClick={() => setOnStory(false)}>
                    Reels
                </div>

            </div>
            {onstory ?
                <Carousel alignItems="left" slidesToShow={3} withoutControls={true} cellSpacing={10} className="p-4">
                    {stories}
                </Carousel>
                :
                <div>Reels</div>
            }
        </section>
    )
}




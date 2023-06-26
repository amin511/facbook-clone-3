
import { BsMessenger } from "react-icons/bs"
import Racourcis from "./Racourcis"
import { dataRacoursic } from "./dataRacoursics"
import { nanoid } from "nanoid"


const Left = () => {

    const Buttons = dataRacoursic.map(
        (item) => <Racourcis key={nanoid()} data={{ ...item }} />
    )
    return (
        <div>
            <div className="fixed h-[100vh] overflow-y-scroll hidden lg:block ">
                {Buttons}
            </div>
        </div>
    )
}

export default Left
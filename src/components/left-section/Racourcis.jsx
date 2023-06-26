
import { BsMessenger } from "react-icons/bs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons'
const Racourcis = (props) => {
    return (
        <div className=" scroll flex items-center gap-2 font-[600] tracking-wide text-lg w-full p-3 hover:bg-slate-200 rounded-xl ease-in-out transition duration-[0.3s] cursor-pointer ">
            <FontAwesomeIcon icon={faUserGroup} style={{ "--fa-primary-color": "#4e1f51", "--fa-secondary-color": "#511f3a", "--fa-secondary-opacity": "1", }} />{props.data.name}
        </div>
    )
}

export default Racourcis
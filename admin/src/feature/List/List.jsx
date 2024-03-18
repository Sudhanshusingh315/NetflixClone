import './list.css'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
export default function List(){
    return(
        <>
        <div className="listBar">
            <p>1</p>
            <div className='idOfTheList'>537483784137482</div>
            <div className='nameOftheList'>Most Awesome Horor Movie</div>
            <div className='myIcons'>
                <div className='editList'>
                    <MdEdit />
                </div>
                <div className='deletList'>
                    <MdDelete />
                </div>
            </div>
        </div>
        </>
    )
}
import React, {useState} from 'react';
import {TValue} from "../../Types/Child";
import {delMenuREC, upDateModalREC} from "../../Store/Reducer/ActionCreators/Menu";
import {useAppDispatch, useAppSelector} from "../../Hooks";
import Modal from "./Modal";
import {fetchOrderREC} from "../../Store/Reducer/ActionCreators/Order";


interface IModalState  {
    el: TValue
}
const MenuCard = ({el}: IModalState) => {
    const dispatch = useAppDispatch()
    const deleteMenu = (id: any) => dispatch(delMenuREC(id))
    const [modal,setModal] = useState<boolean>(true)


    const postOrder = () => {
        dispatch(fetchOrderREC(el))
    }


    return (
            <div className="w-[330px] flex flex-col justify-between items-center h-[555px]">
                <img width={300} src={el.image} alt=""/>
                <div className="flex items-center py-3 justify-between w-[300px]">
                    <h1 className="pt-2">{el.title}</h1>
                    <h2 className="py-2">{el.description}</h2>
                </div>
                <div className="flex items-center justify-between w-[300px]">
                    <button onClick={() => deleteMenu(el.id)} className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>
                    <button onClick={postOrder} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                        Buy now
                    </button>
                </div>
                <Modal el={el} key={el.id} setModal={setModal} modal={modal}/>
            </div>
    );
};

export default MenuCard;
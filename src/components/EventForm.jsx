import React, { useContext } from "react";
import { useState } from "react";
import { CREATE_EVENT } from "../actions";
import { AppContext } from "../context/AppContext";

export const EventForm = () => {
const {state, dispatch} = useContext(AppContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addEvent = e => {
        e.preventDefault();

        dispatch({
            type: CREATE_EVENT,
            title,
            body
        })        

        setTitle('')
        setBody('')
    }

    const addDisable = title === ''

    return (
        <div>
            <form className="mx-3">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">タイトル</label>
                        <input value={title} onChange={e => {setTitle(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="title"/>
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            メモ
                        </label>
                        <input value={body} onChange={e => {setBody(e.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="memo" />
                    </div>
                </div>
                <button onClick={addEvent} disabled={addDisable} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50">追加</button>
            </form>
        </div>
    )
}
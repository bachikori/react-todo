import { useContext } from "react"
import { ALL_DELETE_EVENT } from "../actions";
import { AppContext } from "../context/AppContext"
import { Event } from './Event'


export const Events = () => {
    const {state, dispatch} = useContext(AppContext);

    const deleteAllEvents = () => {
        const result = window.confirm(`全て(${state.length}つ)のイベントを削除しますか？`)
        if (result) {
            dispatch({
                type: ALL_DELETE_EVENT
            })
        }
    }

    return (
        <div className="mx-3">
            <h1 className="mt-3 text-3xl">イベント項目</h1>
            <div className="flex justify-end">
            <button onClick={deleteAllEvents} disabled={state.length === 0} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded disabled:opacity-50">全てのイベントを削除</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="w-1/12">ID</th>
                        <th className="w-5/12">タイトル</th>
                        <th className="w-6/12">メモ</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (<Event key={index} event={event} />))}
                </tbody>
            </table>
        </div>
    )
}
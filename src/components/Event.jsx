import { useContext } from "react"
import { DELETE_EVENT } from "../actions"
import { AppContext } from "../context/AppContext"

export const Event = ({event}) => {
    const {dispatch} = useContext(AppContext)

    const deleteEvent = () => {

        const result = window.confirm(`${event.title}を削除しますか？`)
        if (result) {
            dispatch({
                type: DELETE_EVENT,
                id: event.id
            })
        }
    }

    return (
        <tr>
            <td className="border px-4 py-2">{event.id}</td>
            <td className="border px-4 py-2">{event.title}</td>
            <td className="border px-4 py-2">{event.body}</td>
            <td><button onClick={deleteEvent} className="w-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">削除</button></td>
        </tr>
    )
}
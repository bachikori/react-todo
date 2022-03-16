import React from "react";
import { EventForm } from "./EventForm";
import {AppContext} from '../context/AppContext'
import reducer from '../reducers/events'
import { useReducer } from "react";
import { Events } from "./Events";
import { useState } from "react";

export const App = () => {
    const [style, setStyle] = useState()

    const change = (key, e) => {
        // console.log([key])
        setStyle({...style, [key]: e.target.value})
        console.log(style)
    }

    const initialState = []
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider value={{state, dispatch}}>
        <div style={style}>
            <div className="text-5xl text-center mb-8">Todoリスト</div>
            <div className="flex justify-end mx-3 mb-6">
                文字色
            <input onChange={(e) => change('color', e)} className="border" />
                背景色
            <input onChange={(e) => change('background', e)} className="border" />
            </div>
            <EventForm />
            <Events />
        </div>
        </AppContext.Provider>
    )
}
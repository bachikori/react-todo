import React from "react";
import { EventForm } from "./EventForm";
import {AppContext} from '../context/AppContext'
import reducer from '../reducers/events'
import { useReducer } from "react";
import { Events } from "./Events";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {
    const appState = localStorage.getItem('appStore')
    const appStyle = localStorage.getItem('appStyle')
    
    const [style, setStyle] = useState(() => {
        if (appStyle) {
            const parse = JSON.parse(appStyle)
            return parse
        }
    })
    
    const change = (key, e) => {
        setStyle({...style, [key]: e.target.value})
    }
    
    const initialState = appState ? JSON.parse(appState) : []
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        localStorage.setItem('appStore', JSON.stringify(state))
        localStorage.setItem('appStyle', JSON.stringify(style))
    }, [state, style])

    const colorReset = () => {
        setStyle()
    }

    return(
        <AppContext.Provider value={{state, dispatch}}>
        <div style={style}>
            <div className="text-5xl text-center mb-8">Todoリスト</div>
            <div className="flex justify-end mb-2 mx-3">
            <button onClick={colorReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">リセット</button>
            </div>
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
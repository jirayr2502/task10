import { useContext } from "react"
import { Context } from "../lib/Context"
import { ActionTypes, FilterTypes } from "../lib/Types"

export const Filter = () => {
    const context = useContext(Context)
    if(!context){
        throw new Error('sadsad')
    }
   
    const {state,dispatch} = context

    return <div>
        <div className="select-wrapper">
            <p>{state.curentFilter} filter is used</p>
            <select value={state.curentFilter} onChange={event => dispatch({type:ActionTypes.SetFilter,payload:event.target.value})}>
                <option value={FilterTypes.All}>all</option>
                <option value={FilterTypes.Ballet}>ballet</option>
                <option value={FilterTypes.Opera}>opera</option>
            </select>
        </div>
    </div>
}
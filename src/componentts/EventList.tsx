import { useContext, useEffect } from "react"
import { Context } from "../lib/Context"
import { deleteEvent, getEvents } from "../lib/Api"
import { ActionTypes, IEvent } from "../lib/Types"
import { Event } from "./Event"

export const EventList = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('Errroooorr')
    }

    const { state, dispatch } = context

    useEffect(() => {
        getEvents(state.curentFilter)
            .then(response => {
                dispatch({ type: ActionTypes.SetEvent, payload: response })
            })
    }, [state.curentFilter])

    function handleDelete(id:IEvent['id']){
        deleteEvent(id )
        .then(response => {
            if(response){
                dispatch({type:ActionTypes.RemoveEvent, payload:id})
            }
        })
    }

    return <>
        <div className="list">
            {state.events.map(event =>
                <Event
                    key={event.id}
                    event={event}
                    onDelete={handleDelete}
                />
            )}
        </div>
    </>
}
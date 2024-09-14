import React from "react"
import { IEvent } from "../lib/Types"

interface IProps {
    event: IEvent,
    onDelete:Function
}

export const Event: React.FC<IProps> = ({ event,onDelete }) => {

    return <div>
        <img src={event.cover} />
        <p>{event.title}</p>
        <p>{event.date}</p>
        <strong>{event.type}</strong>
        <p>{event.composer}</p>
        <button onClick={() => onDelete(event.id)}>Delete</button>
    </div>
}
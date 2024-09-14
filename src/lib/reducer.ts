import { deleteEvent } from "./Api"
import { Action, ActionTypes, FilterTypes, IEvent, IState } from "./Types"

export const reducer = (state: IState, action: Action): IState => {
    switch (action.type) {
        case ActionTypes.SetEvent:
            return {
                ...state,
                events: action.payload as IEvent[]
            }

        case ActionTypes.SetFilter:
            return {
                ...state,
                curentFilter: action.payload as FilterTypes
            }
        case ActionTypes.RemoveEvent:
            deleteEvent(action.payload as IEvent['id'])
            return {
                ...state,
                events: state.events.filter((event) => event.id != action.payload)
            }

        default:
            return state
    }
}
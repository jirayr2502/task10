import { FilterTypes, type IState } from "./Types";

export const InitialState: IState = {
    events: [],
    curentFilter: FilterTypes.All
}
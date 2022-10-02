import { boardTypes } from "./board"

export interface projectTypes {
    id: String
    name: String
    idBoards: Array<boardTypes>
}
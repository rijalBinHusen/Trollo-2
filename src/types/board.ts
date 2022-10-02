import { cardTypes } from "./card"

export interface boardTypes {
    id: String
    name: String
    cards: Array<cardTypes>
    idBoard: String
}
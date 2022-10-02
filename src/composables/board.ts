import { boardTypes } from "../types/board";
import { getAllData, write, deleteDocument } from './indexxeddb'
import { generateId } from './idGenerator'

export let lists:boardTypes[] = []

export const getAllBoard = async () => {
    if(!lists.length) {
        let allBoard = await getAllData('Board')
        if(allBoard.length) {
            lists = allBoard
        }
    }
}

export const createBoard = async (name: string, idBoard: string) => {
    let id = generateId('Board')
    let record:boardTypes = { id, name, idBoard, cards: [] }
    let res = await write('Board', id, record)
    lists = [ ...lists, res.data ]
    return true
}


export const deleteBoard = async function (idBoard: string) {
    lists = lists.filter((val) => val.id !== idBoard)
    await deleteDocument('Board', { id: idBoard})
    return
}
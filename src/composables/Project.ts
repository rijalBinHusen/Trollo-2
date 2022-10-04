import { getAllData, write, deleteDocument } from './indexxeddb'
import { generateId } from './idGenerator'
import { projectTypes } from '../types/project'

export let lists:projectTypes[] = []

export const getallProjects = async (idProjects: Array<String>) => {
    await getAllData('Projects')
            .then((res: { data: projectTypes[] }) => lists = res.data)
}

export const createProject = async (name: string) => {
    let id = generateId('Projects')
    let record:projectTypes = { id, name, idBoards: [] }
    let res = await write('Projects', id, record)
    lists = [ ...lists, res.data ]
    return id
}


export const deleteBoard = async function (idProject: string) {
    lists = lists.filter((val) => val.id !== idProject)
    await deleteDocument('Projects', { id: idProject})
    return
}
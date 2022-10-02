import { getAllData, write, deleteDocument } from './indexxeddb'
import { generateId } from './idGenerator'
import { projectTypes } from '../types/project'
import { addProject } from './folder'

export let lists:projectTypes[] = []

export const getallProjects = async () => {
    if(!lists.length) {
        let allProjects = await getAllData('Projects')
        if(allProjects.length) {
            lists = allProjects
        }
    }
}

export const createProject = async (name: string) => {
    let id = generateId('Projects')
    let record:projectTypes = { id, name, idBoards: [] }
    let res = await write('Projects', id, record)
    // await addProject()
    lists = [ ...lists, res.data ]
    return id
}


export const deleteBoard = async function (idProject: string) {
    lists = lists.filter((val) => val.id !== idProject)
    await deleteDocument('Projects', { id: idProject})
    return
}
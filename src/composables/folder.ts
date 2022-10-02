import { getAllData, write, deleteDocument, updateDocument } from './indexxeddb'
import folderTypes from '../types/folder'
import { generateId } from './idGenerator'

export let lists:folderTypes[] = []

export const getAllFolder = async () => {
    if(!lists.length) {
        let allFolder = await getAllData('folder')
        if(allFolder.length) {
            lists = allFolder
        } else {
            await createFolder('Archived')
            await createFolder('All board')
        }
    }
}

export const createFolder = async (name: string) => {
    let id = generateId('folder')
    let record = { id, name, href: `#${name.replaceAll(' ', '')}` }
    let res = await write('folder', id, record)
    lists = [ ...lists, res.data ]
    return true
}


export const deleteFolder = async function (idFolder: string) {
    lists = lists.filter((val) => val.id !== idFolder)
    await deleteDocument('folder', { id: idFolder})
    return
}

export async function addProject (idFolder: String, idProject: String) {
    let objToUpdate = Array<String>();
    lists = lists.map((rec) => {
        if(rec.id === idFolder) {
            objToUpdate = [...rec?.projects, idProject]
            rec.projects.push(idProject)
        }
        return rec
    })
    await updateDocument('Folder', idFolder, { projects: objToUpdate })
    return
}

export async function updateFolder (idFolder: String, objToUpdate: folderTypes) {
    lists = lists.map((rec) => {
        if(rec.id === idFolder) {
            return { ...rec, ...objToUpdate  }
        }
        return rec
    })
    await updateDocument('Folder', idFolder, objToUpdate)
    return
}
import { getAllData, write } from './indexxeddb'
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
    await write('folder', id, record).then((res:any) => {
        lists.push(res.data)
    })
    return true
}
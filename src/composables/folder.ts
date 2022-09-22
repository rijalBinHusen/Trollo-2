import { getAllData } from './indexxeddb'
import folderTypes from '../types/folder'

export let lists:folderTypes[] = []

export const getAllFolder = async () => {
    if(!lists.length) {
        let allFolder = await getAllData('folder')
        if(lists.length && allFolder) {
            lists.concat(allFolder)
        } else {
            lists.push(    
                {id: '1', name: 'Archive', href: "#archive"},
                {id: '2', name: 'All board', href: "#allBoard"}
            )
        }
    }
}
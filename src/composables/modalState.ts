import { ref } from "vue";
import { createTerm } from "../types/creteTerm";

export const whatCreate = ref<createTerm>('Folder')
export const isShow = ref(false)
export const idParent = ref('')

export function idFolder () {
    if(isCreateProject()) {
        return idParent.value
    } 
    return 'noId'
}

export function isCreateFolder() {
    return whatCreate.value == 'Folder'
}
export function isCreateBoard () {
    return whatCreate.value == 'Board'
}

export function isCreateCard () {
    return whatCreate.value == 'Card'
}

export function isCreateProject () {
    return whatCreate.value == 'Project'
}
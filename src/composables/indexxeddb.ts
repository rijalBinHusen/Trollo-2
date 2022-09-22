import Localbase from 'localbase'

let db = new Localbase('trollo-2')


export const write = (store: string, document: string, value: object) => {
    //store = namastore, document = "namaKey" value: { obj: toInput } }
    return db.collection(store.toLowerCase()).doc(document).set(value);
  }

export const getStoreWithKey = (nameStore: string) => {
  return db.collection(nameStore).get({ keys: true });
}

export const getAllData = function (nameStore: string) {
  return db.collection(nameStore.toLocaleLowerCase()).get();
}


export const deleteDocument = async function (store: string, criteria: object) {
  db.collection(store.toLowerCase()).doc(criteria).delete();
}
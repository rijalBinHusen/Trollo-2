import "fake-indexeddb/auto"
import Localbase from 'localbase'
import { describe, it, expect } from 'vitest'

let db = new Localbase('trollo-2')


describe("We can store a record to indexeddb and retrieve the record", () => {
    it("Should retrieve a record from indexeddb", async () => {
        // initialize object that we would to store
            const record = { id: 1, name: 'Bill', age: 47 }
        // waiting proses store object to indexeddb
            await db.collection('users').add(record)
        // find the object from indexeddb by id
            const getData = await db.collection('users').doc({ id: 1 }).get()
        // expecting data that we got match with original record
            expect(getData).toMatchObject(record)
        })
    })
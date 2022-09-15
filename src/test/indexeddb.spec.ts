import "fake-indexeddb/auto"
import Localbase from 'localbase'
import { describe, it, expect } from 'vitest'

let db = new Localbase('trollo-2')


describe("We can store a record to indexeddb and retrieve the record", () => {
    it("Should retrieve a record from indexeddb", async () => {
            const record = { id: 1, name: 'Bill', age: 47 }
            await db.collection('users').add(record)
            const getData = await db.collection('users').doc({ id: 1 }).get()
            expect(getData).toMatchObject(record)
        })
    })
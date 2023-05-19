const todo = {
    store: 'todo',
    storeConfig: {keyPath: 'id', autoIncrement: true},
    storeSchema: [
        {
            name: 'title',
            keypath: 'title',
            options: {
                unique: false
            }
        },
        {
            name: 'createdAt',
            keypath: 'createdAt',
            options: {
                unique: false
            }
        },
        {
            name: 'done',
            keypath: 'done',
            options: {
                unique: false
            }
        }
    ]
}

export const schema = [
    todo
]
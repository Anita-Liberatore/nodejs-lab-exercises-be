'use strict'

  module.exports = {
    brand: brandModel()
  }
  
  function brandModel () {
    const db = {
      1: { id: 1, name: 'Ferrari' },
      2: { id: 2, name: 'Algida' },
      3: { id: 3, name: 'Nestlé' },
      4: { id: 4, name: 'Ikea' },
      5: { id: 5, name: 'Varner' }
    }
  
    return {
      uid,
      create,
      read,
      update,
      del
    }
  
    function uid () {
      return Object.keys(db)
        .sort((a, b) => a - b)
        .map(Number)
        .filter((n) => !isNaN(n))
        .pop() + 1 + ''
    }
  
    function create (id, data, cb) {
      if (db.hasOwnProperty(id)) {
        const err = Error('resource exists')
        err.code = 'E_RESOURCE_EXISTS'
        setImmediate(() => cb(err))
        return
      }
      db[id] = data
      setImmediate(() => cb(null, id))
    }
  
    function read (id, cb) {
      if (id === 'cd67') {
        setImmediate(() => cb(Error('unknown')))
        return
      }
      if (!(db.hasOwnProperty(id))) {
        const err = Error('not found')
        err.code = 'E_NOT_FOUND'
        setImmediate(() => cb(err))
        return
      }
      setImmediate(() => cb(null, db[id]))
    }
  
    function update (id, data, cb) {
      if (!(db.hasOwnProperty(id))) {
        const err = Error('not found')
        err.code = 'E_NOT_FOUND'
        setImmediate(() => cb(err))
        return
      }
      db[id] = data
      setImmediate(() => cb())
    }
  
    function del (id, cb) {
      if (!(db.hasOwnProperty(id))) {
        const err = Error('not found')
        err.code = 'E_NOT_FOUND'
        setImmediate(() => cb(err))
        return
      }
      delete db[id]
      setImmediate(() => cb())
    }
  }
    

var Connection = require('tedious').Connection
var Request = require('tedious').Request
var q = require('q')

export function mssqlTestConnection (config) {
  var result = []
  var deferred = q.defer() // create a promise
  var connection = new Connection(config)
  connection.on('connect', function (err) {
    if (err) {
      deferred.resolve(err)
    } else {
      var request = new Request('sp_databases', function (err, rowCount) {
        if (err) {
          deferred.resolve(err)
        } else {
          deferred.resolve(result) // resolve promise
        }
      })
      request.on('doneInProc', function (rowCount, more, rows) {
        rows.forEach(columns => {
          var rowObject = {}
          columns.forEach(column => {
            rowObject[column.metadata.colName] = column.value
          })
          result.push(rowObject)
        })
      })
      connection.execSql(request)
    }
  }
  )
  return deferred.promise // return the promise for future
}

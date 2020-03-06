function versionFromTimestamp (timestamp) {
  let pubDate = new Date(parseInt(timestamp))
  let month = pubDate.getMonth() + 1

  if (month < 10) {
    month = '0' + month
  }

  let day = pubDate.getDate()

  if (day < 10) {
    day = '0' + day
  }

  let version = pubDate.getFullYear() + '' + month + '' + day

  return version
}

describe('1', function () {
  it('2', function () {
    console.log(versionFromTimestamp(1604160000000))
  })
})

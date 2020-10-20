// Takes an array of URLs, and generates a tree with their directory label as the key
// and the URL as the value
// e.g ["abc/123", "abc/246", "def/678", "ghi/000"]
// becomes:
// {
//   abc: ["{urlStub}123", "{urlStub}246"]
//   def: ["{urlStub}678"]
//   ghi: ["{urlStub}000"]
// }

import awsConfig from "../aws-config"
export default function (urlArr) {
  let urlTree = {}

  urlArr.forEach(({ key }) => {
    if (key) {
      const splitKey = key.split("/")
      if (!urlTree[splitKey[0]]) {
        urlTree[splitKey[0]] = []
      }
      urlTree[splitKey[0]].push(awsConfig.urlStub + key)
    }
  })

  return urlTree
}

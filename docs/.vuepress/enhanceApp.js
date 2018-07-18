var path = require('path');

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  // AUTO SIDEBARING
  //
  // for every sidebar rule that ends with a dot,
  // list its childs pages names in the first sidebar group,
  // and create a duplicated rule for every existing child page
  //
  // allows for /foo/ index with a sidebar,
  // and /foo/bar, /foo/baz etc. with another sidebar

  let sidebar = siteData.themeConfig.locales['/'].sidebar
  for(let rule in sidebar) {
    if (!rule.match(/\.$/)) continue
    let parent = path.dirname(rule)
    let childsNames = getChildsPagesNames(siteData.pages, parent)

    // populate the children property of the first sidebar group of the rule
    sidebar[rule].find(e => e instanceof Object && e.children).children = childsNames
    
    // create duplicated page-specific rules
    siteData.themeConfig.locales['/'].sidebar = Object.assign(
      pagesRules(childsNames, parent + path.sep, sidebar[rule]),
      siteData.themeConfig.locales['/'].sidebar
    )
  }
}
function getChildsPagesNames(pages, parent) {
  let filtered = pages.filter(p => path.dirname(p.path) == parent)
  filtered = sortPages(filtered)
  return filtered.map(p => path.basename(p.path, '.html'))
}
function sortPages(pages, key = 'order') {
  return pages.sort((a,b) => {
    a = a.frontmatter && a.frontmatter[key] ? a.frontmatter[key] : 9999
    b = b.frontmatter && b.frontmatter[key] ? b.frontmatter[key] : 9999
    return a < b ? -1 : a > b ? 1 : 0;
  })
}
function pagesRules(pagesNames, root, sidebarModel) {
  var newRules = {}
  pagesNames.forEach(name => {
    newRules[root+name] = sidebarModel
  })
  return newRules
}
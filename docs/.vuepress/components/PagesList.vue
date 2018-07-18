<template>
  <ul class="pages-list">
    <li v-for="page in pages">
      {{ "—".repeat(depth(page.path)) }} 
      <router-link :to="page.path" class="sidebar-link">
          {{ page.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    match: {
      default: '',
      type: String
    },
    sort: {
      default: null,
      type: String
    },
    useRootIndex: {
      default: false,
      type: Boolean
    },
  },
  computed: {
    pages: function() {
      console.log(this)
      let pages = this.$site.pages.filter(p => p.path.match(this.match))
      if (!this.sort) return pages
      return pages.sort((a,b) => {
        a = a.frontmatter && a.frontmatter[this.sort] ? a.frontmatter[this.sort] : 9999
        b = b.frontmatter && b.frontmatter[this.sort] ? b.frontmatter[this.sort] : 9999
        return a < b ? -1 : a > b ? 1 : 0;
      })
    },
    initialDepth: function() {
      return this.match ? this.match.split('/').length - 1 : 2
    },
  },
  methods: {
    depth: function(path) {
      path = this.useRootIndex ? path.replace(/(.)\/$/,'$1') : path
      return path.split('/').length - this.initialDepth
    },
  },
}
</script>

<style>
.pages-list {
    list-style: none;
    padding: 1em 0;
    border: 1px solid #eee;
}
.pages-list li {
    padding: .25em 1em;
}
.pages-list .sidebar-link {
    display: inline;
    padding: 0;
    border: 0;
}
</style>

<template>
  <table class="plugin-list" v-if="sortedPages.length">
    <tr>
      <th v-for="(name, key) in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
          {{ name }}
          <span class="arrow" :class="sortKey == key && sortAsc ? 'asc' : 'dsc'">
          </span>
        </th>
    </tr>
    <tr v-for="page in sortedPages">
      <td v-for="(name, key) in columns">
        <router-link
          v-if="key == 'name'"
          :to="page.path">
          {{ page.frontmatter.plugin[key] }}
        </router-link>
        <template v-else>
        {{ page.frontmatter.plugin[key] }}
        </template>
      </td>
    </tr>
  </table>
  <p v-else>No plugin found</p>
</template>

<script>
export default {
  props: {
    columns: {
      default: {name: 'Plugin', desc: 'Description', date: 'Creation'},
      type: Object
    },
    tag: {
      default: null,
      type: String
    }
  },
  data: function () {
    return {
      sortKey: 'date',
      sortAsc: false
    }
  },
  computed: {
    pluginsPages: function() {
      return this.$site.pages.filter(p => p.frontmatter.plugin && this.isTagged(p))
    },
    sortedPages: function() {
      let pages = this.pluginsPages.sort((a,b) => {
          a = a.frontmatter.plugin[this.sortKey]
          b = b.frontmatter.plugin[this.sortKey]
          return a < b ? -1 : (a > b ? 1 : 0)
        })
      return this.sortAsc ? pages : pages.reverse()
    },
  },
  methods: {
    sortBy: function (key) {
      if(this.sortKey == key) {
        this.sortAsc = !this.sortAsc
      } else {
        this.sortKey = key
        this.sortAsc = true
      }
    },
    isTagged: function (page) {
      if (!this.tag) return true;
      return page.frontmatter.plugin.tags
          && page.frontmatter.plugin.tags.includes(this.tag)
    }
  }
}
</script>

<style scoped>
table {
  display: table;
  width: 100%;
}
th {
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
th.active .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0;
  border: 4px solid transparent;
  border-color: #555 transparent
}
.arrow.asc {
  border-top: none;
}
.arrow.dsc {
  border-bottom: none;
}
</style>

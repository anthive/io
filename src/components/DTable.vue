<template>
<v-layout row wrap>
  <v-data-table hide-actions :loading="loading" :headers="columns" :items="items">
    <template slot="headers" slot-scope="props">
      <th v-for="(column, index) in props.headers" :class="dataTableClasses(column)" :key="index" @click="doSort(column)">
        {{ column.text }}
        <v-icon small v-if="column.sortable">arrow_upward</v-icon>
      </th>
    </template>
    <template slot="items" slot-scope="props">
      <td v-for="(column, index) in columns" :key="index" v-html="getColumnData(props.item, column)"></td>
    </template>
  </v-data-table>
  <div class="text-xs-center pt-2">
      <v-pagination @input="changePage($event)" v-model="pagination.page" :length="pages"></v-pagination>
    </div>
</v-layout>
</template>

<script>
export default {
  name: "DTable",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    url: {
      type: String,
      default: "https://search.anthive.io/_search"
    }
  },
  computed: {
    getPagination() {
      console.log(this.pagination.sort);
      return {
        sort: this.pagination.sort,
        size: this.pagination.size,
        from: this.pagination.from
      };
    }
  },
  methods: {
    log(m) {
      console.log(m);
    },
    changePage(e) {
      if (e == 1) {
        this.pagination.from = 0;
      } else if (e == 2) {
        this.pagination.from = this.pagination.size;
      } else {
        this.pagination.from = this.pagination.size * e - this.pagination.size;
      }
      this.getData("get", this.url + "/", {
        params: { ...this.getPagination }
      });
    },
    doSort(e) {
      if (!e.sortable) return;
      if (!this.desc) {
        this.desc = true;
        this.pagination.sort = `${e.value}:desc`;
      } else {
        this.desc = false;
        this.pagination.sort = `${e.value}:asc`;
      }
      this.getData("get", this.url + "/", {
        params: {
          ...this.getPagination
        }
      });
    },
    dataTableClasses(column) {
      console.log(
        column.value,
        column.value == (this.pagination.sort != null)
          ? this.pagination.sort.split(":")[0]
            ? "active"
            : ""
          : ""
      );
      let name = "";
      if (this.pagination.sort != null)
        name = this.pagination.sort.split(":")[0];
      return [
        "column",
        column.sortable ? "sortable" : "",
        this.desc ? "desc" : "asc",
        column.value == name ? "active" : ""
      ];
    },
    getColumnData(row, field) {
      let [l1, l2] = field.value.split(".");
      let value = row[l1];
      let tag = null;
      if (l2) {
        value = row[l1] ? row[l1][l2] : "-";
      }
      return value;
    },
    async getData(type, ...params) {
      try {
        this.loading = true;
        const response = await this.$axios[type](...params);
        if (response.data.hits.hits.length > 0) {
          let arr = [];
          this.pages = this.pagination.totalPages = Math.ceil(
            response.data.hits.total / this.pagination.size
          );
          response.data.hits.hits.forEach(el => {
            arr.push({ id: el._id, ...el._source });
          });
          this.$set(this, "items", arr);
        }
        this.hasError = false;
      } catch (error) {
        this.errorsSend = error.response.data;
        this.hasError = true;
      } finally {
        this.loading = false;
      }
    }
  },
  data: () => ({
    loading: false,
    sorting: {},
    errorsSend: null,
    hasError: false,
    desc: false,
    pages: 20,
    isLoading: false,
    pagination: {
      size: 20,
      page: 1,
      sort: null,
      from: 0
    },
    items: []
  }),
  created() {
    this.getData("get", this.url, {
      params: {
        ...this.getPagination
      }
    });
  }
};
</script>

<style>
</style>
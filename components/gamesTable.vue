<template lang="pug">
  #games-table
    v-data-table(
      hide-actions
      :loading="loading"
      :headers="columns"
      :items="items"
      class="text-xs-center"
    )
      template(slot="headers" slot-scope="props")
        th(
          v-for="(column, index) in props.headers"
          :class="dataTableClasses(column)"
          :key="index"
          @click="doSort(column)"
          class="pr-2"
        ) {{ column.text }}
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort =='asc'"
          ) arrow_upward
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort == 'desc'"
          ) arrow_downward

      template(slot="items" slot-scope="props")
        td(
          v-for="(column, index) in columns"
          :key="index"
          v-html="getColumnData(props.item, column)"
        )

    v-toolbar(flat)
      v-pagination(
        @input="changePage($event)"
        v-model="currentPage"
        :length="pages"
        total-visible="10"
        class="mx-auto"
        color="orange darken-3"
      )
</template>

<script>
import userService from "@/services/User";
import searchService from "@/services/Search";

export default {
  name: "gamesTable",
  props: {
    PageSize: {
      type: Number,
      required: true,
      default: () => 10
    },
    Filters: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data: () => ({
    us: userService,
    loading: false,
    pages: 0,
    currentPage: 1,
    sort:[],

    desc: false,
    columns: [
      {
        text: "Players",
        align: "left",
        value: "players"
      },
      {
        text: "Ticks",
        align: "left",
        sortable: true,
        value: "Age"
      },
      {
        text: "Wealth",
        align: "right",
        sortable: true,
        sort: "desc",
        value: "Wealth"
      },
      {
        text: "Date",
        align: "right",
        sortable: true,
        value: "Played"
      }
    ],
    items: []
  }),

  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.loadGames();
    },

    doSort(field) {
      if (!field.sortable) return;

      function nextValue(value) {
        if (value == null) {
          return "asc";
        } else if (value == "asc"){
          return "desc";
        } else if (value == "desc"){
          return null;
        }
      }

      this.sort = [];
      field.sort = nextValue(field.sort);
      this.columns.forEach(col => {
        if (col.sort != null){
          let sr = {};
          sr[col.value] = col.sort;
          this.sort.push(sr);
        }
      });

      this.loadGames();
    },

    dataTableClasses(column) {
      // console.log(
      //   column.value,
      //   column.value == (this.pagination.sort != null)
      //     ? this.pagination.sort.split(":")[0]
      //       ? "active"
      //       : ""
      //     : ""
      // );
      let name = "";
      // if (this.pagination.sort != null)
      //   name = this.pagination.sort.split(":")[0];
      return [
        "column",
        column.sortable ? "sortable" : "",
        this.desc ? "desc" : "asc",
        column.value == name ? "active" : ""
      ];
    },

    //READY
    getColumnData(data, field) {
      let value = '';
      switch (field.value) {
        case 'Age':
          value = data._source.Age
          break;
        case 'Played':
          value = this.us.timeAgo(data._source.Played)+"<br>by "+
            data._source.Author
          break;
        case 'Wealth':
          value = data._source.Wealth
          break;
      }
      return value;
    },

    async loadGames(){
      this.loading = true;

      const filter = [{ "term":  { "Players.Username": "kezlya"}}];
      searchService.searchGames(this.sort, this.currentPage, this.PageSize, filter).then(games =>{
        if (games != null) {
          this.pages = Math.ceil(games.total/this.PageSize);
          this.items = games.hits;
        }
        this.loading = false;
      });
    }





  },

  created() {
    this.loadGames();
  }
};
</script>

<style></style>

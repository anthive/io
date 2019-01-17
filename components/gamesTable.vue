<template lang="pug">
  #games-table
    //- .test-chip.my-5
    //-   userInfo(
    //-     username="kezlya"
    //-     photo="https://avatars0.githubusercontent.com/u/2000153?s=50&v=4"
    //-     lang="https://anthive.io/skins/lang/go.png"
    //-     version="v.63"
    //-     skin=""
    //-     hive=""
    //-     score="2019"
    //-   )
    h3(class="headline mt-1 mb-3") User games 
      span(class="grey--text") ({{ totalGames }})
    v-data-table(
      hide-actions
      :loading="loading"
      :headers="columns"
      :items="items"
      class="text-xs-center"
    )
      template(slot="headers" slot-scope="props")
        th(class="text-xs-left") Players
        th(
          v-for="(column, index) in props.headers"
          :class="dataTableClasses(column)"
          :key="index"
          @click="doSort(column)"
        ) {{ column.text }}
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort =='desc'"
          ) arrow_upward
          v-icon(
            small
            v-if="(column.hasOwnProperty('sort')) && column.sort == 'asc'"
          ) arrow_downward

      template(slot="items" slot-scope="props")
        tr(@click="openGame(props.item)" style="cursor: pointer;")
          td
            v-layout(
              v-for="(player, pIndex) in props.item._source.Players"
              :key="player.id"
              align-center
              class="my-3"
            )
              span.mr-4.grey--text {{ pIndex+1 }}
              userInfo(
                :username="player.Username"
                :photo="us.photoUrl(player.Username,50)"
                :lang="us.langUrl(player.Lang)"
                :version="player.Version"
                :skin="us.skinUrl(player.Skin)"
                hive=""
                :score="player.Wealth"
              )
              //- v-chip(
              //-   v-for="(player, pIndex) in props.item._source.Players"
              //-   :key="player.id"
              //-   class="my-1"
              //- )
              //-   v-avatar
              //-     img(:src="us.photoUrl(player.Username,50)")
              //-   v-avatar
              //-     img(:src="us.langUrl(player.Lang)")
              //-   v-avatar
              //-     img(:src="us.skinUrl(player.Skin)")
              //-   v-avatar(color="#F0DAB8") v.{{ player.Version }}
              //-   b {{ player.Username }}
              //-   span &nbsp;&nbsp;&nbsp;{{player.Wealth}}
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
import userInfo from "@/components/UserInfo";
import userService from "@/services/User";
import searchService from "@/services/Search";

export default {
  name: "gamesTable",
  components: {
    userInfo
  },
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
    totalGames: 0,
    currentPage: 1,
    sort:[],
    columns: [
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
  created() {
    this.preapareSort()
    this.loadGames();
  },
  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
      this.loadGames();
    },

    doSort(field) {
      if (!field.sortable) return;

      if (field.sort == null) {
        field.sort = "asc";
      } else if (field.sort == "asc"){
        field.sort = "desc";
      } else if (field.sort == "desc"){
        field.sort = null;
      }

      this.preapareSort()
      this.loadGames();
    },

    preapareSort(){
      this.sort = [];
      this.columns.forEach(col => {
        if (col.sort != null){
          let sr = {};
          sr[col.value] = col.sort;
          this.sort.push(sr);
        }
      });
    },

    dataTableClasses(column) {
      return [
        "column",
        column.sortable ? "sortable" : "",
        //column.sort != null ? "desc" : "asc",
        column.sort != null ? "active" : ""
      ];
    },

    openGame(data){
       this.$router.push("/game/?id="+data._id+"&v="+data._source.Version);
    },

    //READY
    getColumnData(data, field) {
      let value = '';
      switch (field.value) {
        case 'Age':
          value = data._source.Age
          break;
        case 'Played':
          value = this.us.timeAgo(data._source.Played)+"<br><span class='grey--text'>by "+
            data._source.Author+"</span>"
          break;
        case 'Wealth':
          value = data._source.Wealth
          break;
      }
      return value;
    },

    async loadGames(){
      this.loading = true;
      searchService.searchGames(this.sort, this.currentPage, this.PageSize, this.Filters).then(games =>{
        if (games != null) {
          this.pages = Math.ceil(games.total/this.PageSize);
          this.totalGames = games.total;
          this.items = games.hits;
        }
        this.loading = false;
      });
    }
  }
};
</script>

<style></style>

<template>
  <div>
    <b-row>
      <b-colxx xxs="12">
        <piaf-breadcrumb :heading="$t('menu.default')"/>
        <div class="separator mb-5"></div>
      </b-colxx>
    </b-row>
    <template v-if="isLoad">
    <b-row>
      <b-colxx xl="8" lg="12">
        <div class="icon-cards-row">
          <swiper :options="swiperIconsOption" ref="swiperIcons" >
            <swiper-slide>
              <icon-card :title="'Total Users'" icon="iconsmind-Mens" :value=statistics.totalUsers />
            </swiper-slide>
            <swiper-slide>
              <icon-card :title="'Registered Customers'" icon="iconsmind-Environmental" :value=statistics.totalCustomers />
            </swiper-slide>
            <swiper-slide>
              <icon-card :title="'Sales count'" icon="iconsmind-Coins" :value=statistics.totalSales />
            </swiper-slide>
            <swiper-slide>
              <icon-card :title="'Products'" icon="iconsmind-Handshake" :value=statistics.totalProducts />
            </swiper-slide>
          </swiper>
          <resize-observer @notify="handleSwipersResize"/>
          </div>
          <b-row>
            <b-colxx md="6" class="mb-4">
              <b-card v-if="lineChartData.labels.length>0" :title="'Product Received'">
                <b-refresh-button @click="refreshButtonClick"/>
                <div class="dashboard-line-chart">
                  <line-shadow-chart :data="lineChartData" :height="300"/>
                </div>
              </b-card>
            </b-colxx>
            <b-colxx md=6 class="mb-4">
              <b-card v-if="customerTrendChart.labels.length>0" :title="'Customer Registration'">
                <b-refresh-button @click="refreshButtonClick"/>
                <div class="dashboard-line-chart">
                  <customer-line-shadow-chart :data="customerTrendChart" :height="300"/>
                </div>
              </b-card>
            </b-colxx>
          </b-row>

      </b-colxx>

      <b-colxx lg="12" xl="4" class="mb-4">
        <b-row>
          <b-col>
            <b-card :title="'Recent Joined'">
              <vue-perfect-scrollbar class="scroll" style="height: 182px;" :settings="{ suppressScrollX: true, wheelPropagation: false }">
              <vuetable :data = "users"
                        :apiMode="false"
                        :fields="userFields"
                        :per-page="7"
              ></vuetable>
              <!--<vuetable-pagination-bootstrap ref="pagination"-->
              <!--@vuetable-pagination:change-page="onChangePage"-->
              <!--&gt;</vuetable-pagination-bootstrap>-->
              </vue-perfect-scrollbar>
            </b-card>
          </b-col>

        </b-row>
      </b-colxx>
    </b-row>
    </template>
    <template v-else>
      <div class="loading"></div>
    </template>

  </div>
</template>
<script>
var moment = require('moment')
import { ResizeObserver } from 'vue-resize'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import dashApi from '../../../api/dashboard'
import userApi from '../../../api/user'


import { CalendarView, CalendarViewHeader, CalendarMathMixin} from "vue-simple-calendar";

import Vuetable from 'vuetable-2/src/components/Vuetable'
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
import VuetablePaginationBootstrap from 'components/Common/VuetablePaginationBootstrap'

import draggable from "vuedraggable"

import vSelect from "vue-select";

import IconCard from 'components/Cards/IconCard'
import GradientCard from 'components/Cards/GradientCard'
import GradientWithRadialProgressCard from 'components/Cards/GradientWithRadialProgressCard'
import SmallLineChartCard from 'components/Cards/SmallLineChartCard'

import LineShadowChart from "components/Charts/LineShadow";
import CustomerLineShadowChart from "components/Charts/CustomerLineShadow";


import LogList from 'components/Listing/LogList';
import ListWithUserItem from 'components/Listing/ListWithUserItem';
import TwoColumnList from 'components/Listing/TwoColumnList';
import TopRatedSlideItem from 'components/Listing/TopRatedSlideItem';

import logs from "data/logs"
import products from "data/products"
import tickets from "data/tickets"
import profileStatuses from "data/profileStatuses"
import cakes from "data/cakes"
import { ThemeColors } from "utils";
const colors = ThemeColors();

export default  {
  components: {
      IconCard,
      GradientCard,
      swiper,
      swiperSlide,
      ResizeObserver,
      LineShadowChart,
      CustomerLineShadowChart,

    LogList,
    ListWithUserItem,
    CalendarView,
    CalendarViewHeader,
    Vuetable,
    VuetablePagination,
    VuetablePaginationBootstrap,
    TwoColumnList,
    draggable,
    GradientWithRadialProgressCard,
    vSelect,
    SmallLineChartCard,
    TopRatedSlideItem
  },
  mixins: [CalendarMathMixin],
  data() {
      return {
          isLoad:false,
          statistics:{
          },
          users:[],
          associations:[],
          userFields:[{
              name:'fullName',
              sortField: 'fullName',
              title:'Full Name',
              titleClass:'',
              dataClass:'list-item-heading'
          },{
              name:'phone',
              sortField: 'phone',
              title:'Phone',
              titleClass:'',
              dataClass:'text-muted'
          },
          {
                  name:'createdAt',
                  sortField: 'createdAt',
                  title:'Date Created',
                  titleClass:'',
                  dataClass:'text-muted'
              }],
          swiperIconsOption: {
              slidesPerView: 4,
              breakpoints: {
                  0: { slidesPerView: 1 },
                  320: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  1800: { slidesPerView: 3 }
              }
          },
          customerTrendChart:{
              labels: [],
              datasets: [
                  {
                      label: "",
                      data: [],
                      borderColor: colors.themeColor1,
                      pointBackgroundColor: colors.foregroundColor,
                      pointBorderColor: colors.themeColor1,
                      pointHoverBackgroundColor: colors.themeColor1,
                      pointHoverBorderColor: colors.foregroundColor,
                      pointRadius: 6,
                      pointBorderWidth: 2,
                      pointHoverRadius: 8,
                      fill: false
                  }
              ]
          },
        lineChartData:{
            labels: [],
            datasets: [
                {
                    label: "",
                    data: [],
                    borderColor: colors.themeColor1,
                    pointBackgroundColor: colors.foregroundColor,
                    pointBorderColor: colors.themeColor1,
                    pointHoverBackgroundColor: colors.themeColor1,
                    pointHoverBorderColor: colors.foregroundColor,
                    pointRadius: 6,
                    pointBorderWidth: 2,
                    pointHoverRadius: 8,
                    fill: false
                }
            ]
        },
        products,
        logs,
        tickets,
      bestsellers:{
        apiUrl:"http://api.crealeaf.com/cakes/fordatatable",
        fields:[{
            name:'title',
            sortField: 'title',
            title:'Name',
            titleClass:'',
            dataClass:'list-item-heading'
          },{
            name:'sales',
            sortField: 'sales',
            title:'Sales',
            titleClass:'',
            dataClass:'text-muted'
          },{
            name:'stock',
            sortField: 'stock',
            title:'Stock',
            titleClass:'',
            dataClass:'text-muted'
          },{
            name:'category',
            sortField: 'category',
            title:'Category',
            titleClass:'',
            dataClass:'text-muted'
          }]
      },
      profileStatuses,
      cakes,
      selectData: [
        { label: "Chocolate", value: "chocolate" },
        { label: "Vanilla", value: "vanilla" },
        { label: "Strawberry", value: "strawberry" },
        { label: "Caramel", value: "caramel" },
        { label: "Cookies and Cream", value: "cookiescream" },
        { label: "Peppermint", value: "peppermint" }
      ],
      swiperTopRatedOption: {
          slidesPerView: 1,
          breakpoints: {
             0: {slidesPerView:1},
            480: {slidesPerView:1},
            992: {slidesPerView:2}
          }
        },
      }
    },
    mounted(){
       this.loadItems();

    },
    methods: {
        loadItems(){
            this.isLoad = false
            dashApi.statistics('')
                .then((res) => {
                    userApi.list(`?sortBy=createdAt&sortOrder=DESC&skip=0&limit=3`)
                        .then((userRes) => {
                            let userData = [];
                            for(let i=0; i< userRes.data.users.length; i++){
                                let user = userRes.data.users[i]
                                user.createdAt = moment(user.createdAt).format("MMM Do YY");
                                userData.push(user)
                            }
                            if(res.data.productTrend.length>0){
                                for(var i=0;i<res.data.productTrend.length;i++){
                                    this.lineChartData.datasets[0].data.push(res.data.productTrend[i].count)
                                    this.lineChartData.labels.push(moment(res.data.productTrend[i].date).format('dddd'))
                                }
                            }
                            if(res.data.customerTrend.length>0){
                                for(var i=0;i<res.data.customerTrend.length;i++){
                                    this.customerTrendChart.datasets[0].data.push(res.data.customerTrend[i].count)
                                    this.customerTrendChart.labels.push(moment(res.data.customerTrend[i].date).format('dddd'))
                                }
                            }
                            this.associations = res.data.thresholdOrders;
                            this.users = userData;
                            this.statistics = res.data
                            this.isLoad = true;
                            setTimeout(() => {
                                this.handleSwipersResize()
                            }, 50);
                        })
                })
        },

      refreshButtonClick(){
        console.log("refreshButtonClick")
      },
      handleSwipersResize () {
          if(this.$refs.swiperIcons !== undefined)this.$refs.swiperIcons.update()
        if(this.$refs.swiperTopRated !== undefined)this.$refs.swiperTopRated.update()
      },
      thisMonth(d, h, m) {
      const t = new Date();
      return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0);
      },
      onClickDay(d) {
        console.log(`You clicked: ${d.toLocaleDateString()}`);
      },
      onClickEvent(e) {
        console.log(`You clicked: ${e.title}`);
      },
      setShowDate(d) {
        this.calendar.showDate = d;
      },
      onDropDate(event, date) {
        console.log(`You dropped ${event.id} on ${date.toLocaleDateString()}`);

        const eLength = this.dayDiff(event.startDate, date);
        event.originalEvent.startDate = this.addDays(event.startDate, eLength);
        event.originalEvent.endDate = this.addDays(event.endDate, eLength);
      },

      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      }

    },
  
   
  
};
</script>

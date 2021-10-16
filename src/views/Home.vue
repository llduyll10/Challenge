<template>
  <div id="Home">

    <!-- Group header -->
    <div class="group-header">
        <p class="title">Available balance</p>
        <div class="cover">
            <div class="left">
                <div class="money-container">
                    <span class="money-icon">S$</span>
                    <div class="price">3,000</div>
                </div>
            </div>
            <div class="right">
                <div class="btn-new-card">
                    <div>
                        <img width="16" height="16" src="/img/icon-plus.svg" alt="IconPlus">
                        <span>New card</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End group header -->

    <!-- Group Menu -->
    <div class="group-menu mt-40px">
        <ul>
            <li class="active">My debit cards</li>
            <li >All company cards</li>
        </ul>
    </div>
    <!-- End Group Menu -->

    <!-- Group Content -->
    <div class="group-content">
        <div class="row">
            <!-- left -->
            <div class="col-12 col-md-6 ct-left">
                <div class="debit-card-cover">
                    <div class="position-relative">
                        <div class="eye-show">
                                <img width="16" height="16"  src="/img/Eye.svg" alt="icon" class="img-eye">
                                <span>Show card number</span>
                        </div>
                        <div class="debit-card">
                            <div class="logo d-flex">
                                <img src="/img/Aspire-Logo.svg" alt="icon">
                            </div>
                            <div>
                                <h4>Mark Henry</h4>
                                <div class="number-container">
                                    <div class="item">
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                    </div>
                                    <div class="item">
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                    </div>
                                    <div class="item">
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                        <span>•</span>
                                    </div>
                                    <div class="year">
                                        2020
                                    </div>
                                </div>
                                <div class="date-container">
                                    <span class="date">Thru: 12/20</span>
                                    <span>CVV: ***</span>
                                </div>
                            </div>
                            <div class="ft-card">
                                <img src="/img/Visa-Logo.svg" alt="icon" class="img-logo">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="action d-none-sm">
                    <div class="cover-action">
                        <ul>
                            <li v-for="(item,idx) in listAction" :key="idx">
                                <img :src="item.img" :alt="item.name">
                                <p>{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- right -->
            <div class="col-12 col-md-6 ct-right">
                <div class="action d-block-sm ">
                    <div class="cover-action">
                        <ul>
                            <li v-for="(item,idx) in listAction" :key="idx">
                                <img :src="item.img" :alt="item.name">
                                <p>{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="cover-item-mobile">
                    <div class="item-action">
                        <div>
                            <img width="24" height="24" src="/img/item-card-detail.svg" alt="">
                            <span class="title">Card details</span>
                        </div>
                        <img src="/img/icon-arrow-down.svg" alt="">
                    </div>
                    <div class="group-child-item mt-24px">
                        <div class="item-action ">
                            <div>
                                <img width="24" height="24" src="/img/icon-transctions.svg" alt="">
                                <span class="title">Recent transactions</span>
                            </div>
                            <img src="/img/icon-arrow-up.svg" alt="">
                        </div>
                        <div class="item-child-action" v-for="(item, index) in listChildAction" :key="index">
                            <div class="cover-child d-flex">
                                <div class="logo-child" :class="item.bgc">
                                    <img width="16" height="16" :src="item.img" alt="">
                                </div>
                                <div class="cover-item-right">
                                    <div class="name-child">
                                        <p class="name">Hamleys</p>
                                        <p class="price">
                                            + S$ 150
                                            <img class="ml-10px mb-5px" width="6" height="12" src="/img/icon-next.svg" alt="">
                                        </p>
                                    </div>
                                    <p class="date">20 May 2020</p>
                                    <div class="d-flex">
                                        <div class="icon-card">
                                            <img src="/img/icon-card-finance.svg" />
                                        </div>
                                        <p class="text-card">Refund on debit card</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Group Content -->

  </div>
</template>
<script>
export default {
  name: "LikeItem",
  data(){
      return{
          listAction:[
              {
                name:'Freeze card',
                img:'/img/action-freeze.svg'
              },
              {
                name:'Set spend limit',
                img:'/img/action-limit.svg'
              },
              {
                name:'Add to GPay',
                img:'/img/action-gg.svg'
              },
              {
                name:'Replace card',
                img:'/img/action-replace.svg'
              },
              {
                name:'Cancel card',
                img:'/img/action-cancel.svg'
              }
          ],
          listChildAction:[
              {
                  img:'/img/icon-storage.svg',
                  bgc:'blue'
              },
              {
                  img:'/img/icon-flights.svg',
                  bgc:'green'
              },
              {
                  img:'/img/iconmegaphone.svg',
                  bgc:'pink'
              },
              {
                  img:'/img/icon-storage.svg',
                  bgc:'blue'
              },

          ]
      }
  },
  computed: {
    listDataLike() {
      return this.$store.getters.listDataLike;
    },
  },
  methods: {
    unlikeData(item) {
      this.$store.dispatch("unlikeData", item);
    },
  },
};
</script>
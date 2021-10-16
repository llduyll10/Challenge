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
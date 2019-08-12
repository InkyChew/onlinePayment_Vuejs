<template lang='pug'>
  .container-fulid
    .row.prog.my-auto
      .col-2
      .col-10.my-auto.d-flex.justify-content-center
        div.circle.active.text-center 1
        div.line.my-auto
        div(:class="{ active : page }").circle.text-center 2
        div.line.my-auto
        div(:class="{ active : getPageId==='finish' }").circle.text-center 3
    .row.mx-auto.d-flex.justify-content-center
      template(v-if="getPageId === 'finish'")
        OrderFinish
      template(v-else)
        Order
      .right
        router-view
    .background
</template>

<script>
import Order from '@/components/order.vue'
import OrderFinish from '@/components/orderFinish.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Order,
    OrderFinish
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getPageId: 'getPageId'
    }),
    page () {
      const page = this.$route.path
      const step2 = page !== '/'
      return step2
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
$green1: #DEFFF2
$green2: #8DEFCB
$green3: #36B996
$gray1: #F3F3F3
$gray2: #D8D8D8
$gray3: #AFAFAF
$gray4: #4B4B4B
h1
  font-size: 20px
h2
  font-size: 18px
  margin-bottom: 14px
h3
  font-size: 16px
  margin-bottom: 0px
  color: #5E5E5E
h4
  font-size: 14px
.btn-primary
  font-size: 14px
  background-color: $green3
  border: none
  &:hover
    background-color: $green2
  &:active
    background-color: $green2
.btn-secondary
  font-size: 14px
  margin-top: 24px
  background-color: $gray4
.prog
  padding-top: 40px
  padding-bottom: 40px
  .circle
    width: 40px
    height: 40px
    background-color: $gray1
    color: white
    font-size: 20px
    border-radius: 50%
    padding-top: 3px
  .active
    background-color: $green2
  .line
    width: 130px
    height: 2px
    background-color: $gray2
.left
  width: 234px
  height: 281px
.order
  width: 234px
  height: 281px
  background-color: $gray1
  label
    margin-bottom: 19px
.right
  z-index: 1
  .main
    width: 628px
    height: 680px
    background-color: white
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
    .title
      padding-top: 30px
      padding-bottom: 50px
      h1
        position: relative
        .highlight
          background-color: #B5FFE4
          width: 225px
          height: 17px
          position: absolute
          right: 200px
          bottom: -7px
          z-index: -1
  .button
    padding-top: 50px
    padding-right: 50px
.background
  position: fixed
  z-index: -1
  bottom: 0
  width: 100%
  height: 180px
  background-image: url('../assets/image/footer-background.svg')
  background-size: 50px
  background-color: $green1
  background-repeat: repeat
</style>

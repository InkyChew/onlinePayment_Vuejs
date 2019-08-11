<template lang='pug'>
  .main.text-center
    .title
      h1 STEP1. 選擇付款方式
        .highlight
    .menu
      template(v-for="(pay, index) in payment")
        router-link(
          :to="pay.link"
        )
          button.btn-card.mx-2.my-2(@mouseover="changeImgColor(index)")
            img.card-img-top.mx-auto(
              ref="image"
              :src='pay.src'
              alt='Card image cap'
              style='width: 69px'
            )
            p {{ pay.name }}
    .button.d-flex.justify-content-end
      button.btn.btn-primary(type='button') 下一步
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'choosePayment',
  data () {
    return {
      pageId: 'choosePayment',
      payment: [
        {
          name: '信用卡/金融卡',
          src: require('@/assets/image/credit-card.svg'),
          link: '/credit'
        },
        {
          name: '銀聯卡',
          src: require('@/assets/image/unionpay.svg'),
          link: '/unionpay'
        },
        {
          name: '超商付款',
          src: require('@/assets/image/shop.svg'),
          link: '/cvStore'
        },
        {
          name: 'Web ATM',
          src: require('@/assets/image/web-atm.svg'),
          link: '/web'
        },
        {
          name: 'ATM 轉帳',
          src: require('@/assets/image/atm.svg'),
          link: '/ATM'
        }
      ]
    }
  },
  methods: {
    ...mapActions(
      {
        setPageId: 'setPageId'
      }
    ),
    initData () {
      this.setPageId(this.pageId)
    },
    changeImgColor (index) {
      const image = this.$refs.image
      const src = image[index].attributes.src.value
      // src.setAttribute('class', 'fillter: grayscale(100%)')
      console.log(src)
    }
  },
  mounted () {
    this.initData()
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
.btn-card
  background-color: $gray1
  border: none
  width: 161px
  height: 139px
  &:hover
    background-color: $green3
    color: white
</style>

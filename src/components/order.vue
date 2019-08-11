<template lang='pug'>
  #order
    .left.none
      #move(:class="{ orderActive : isShow }")
        .order.px-4.py-4
          h2 訂單資訊
          h3 商品名稱：
          label Iphone XR 手機殼 x1
          h3 訂單編號：
          label 17485739
          h3 訂單金額：
          label NT$ 600
        button.btn.btn-secondary(type='button') 返回商店
      button#menu.btn.px-0(
        @click="showOrder"
      )
        p 訂單資訊
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    showOrder () {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style lang='sass'>
@media (max-width: 992px)
  .left.none
    width: 0
    height: 0
  #move
    display: none
    &.orderActive
      display: block
      position: absolute
      z-index: 2
      left: 0px
  #menu
    position: absolute
    left: -59px
    display: block
    height: 150px
    p
      writing-mode: vertical-rl
@media (min-width: 992px)
  #menu
    display: none
</style>

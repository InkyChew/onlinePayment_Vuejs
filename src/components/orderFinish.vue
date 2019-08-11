<template lang='pug'>
  .left
    #move.hide.d-flex.flex-row-reverse(ref="order")
      .order.px-4.py-4
        h2 訂單資訊
        h3 商品名稱：
        label Iphone XR 手機殼 x1
        h3 訂單編號：
        label 17485739
        h3 訂單金額：
        label NT$ 600
      .finishLabel.px-4.d-flex.align-items-end.flex-column
        .my-auto.d-flex.align-items-end.flex-column
          i.fas.fa-slash
          h1.my-0.py-4 Finish
          i.fas.fa-slash.fa-flip-horizontal
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
  .finishLabel
    height: 281px
  .left
    position: relative
  #move.hide
    position: absolute
    left: 70px
    transition: all 3s
    &:hover
      position: absolute
      left: -100px
</style>

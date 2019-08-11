<template lang='pug'>
  .main
    .title.text-center
      h1 您的訂單已完成付款！
        .highlight
    .menu.text-center
      .circle.mx-auto
        img(src='@/assets/image/finish.svg')
      label.notice 稍後將寄送訂單詳細資訊至您的E-mail
      .button.d-flex.justify-content-center
        router-link(
          :to="'/'"
        )
          button.btn.btn-primary(type='button') 返回首頁
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'credit',
  data () {
    return {
      pageId: 'finish'
    }
  },
  methods: {
    ...mapActions({
      setPageId: 'setPageId'
    }),
    initData () {
      this.setPageId(this.pageId)
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang='sass'>
.main
  .title
    padding-bottom: 20px
  .button
    padding-left: 50px
    padding-top: 30px
.menu
  padding-left: 82px
  padding-right: 82px
  font-size: 14px
  .circle
    width: 146px
    height: 146px
    background-color: #8DEFCB
    border-radius: 50%
    img
      width: 146px
      height: 146px
  .notice
    padding-top: 64px
  .detail
    font-size: 24px
    padding-bottom: 32px
</style>

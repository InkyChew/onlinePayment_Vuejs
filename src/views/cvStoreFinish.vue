<template lang='pug'>
  .main
    .title.text-center
      h1 您的訂單已成立！
        .highlight
    .menu
      div
        label 付款超商：
        br
        label.detail {{ getCvStore }}便利商店
      div
        label 付款代碼：
        br
        label.detail HSD6DSK2349
      div
        label 付款期限：（三天後到期）
        br
        label.detail {{ today }}
      div
        label *請至您選擇之超商店內機台輸入代碼進行繳費，逾期訂單自動作廢
    .button.d-flex.justify-content-end
      router-link(
        :to="'/'"
      )
        button.btn.btn-primary(type='button') 返回首頁
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import dayjs from 'dayjs'

export default {
  name: 'credit',
  data () {
    return {
      pageId: 'finish',
      today: ''
    }
  },
  computed: {
    ...mapGetters({
      getCvStore: 'getCvStore'
    })
  },
  methods: {
    ...mapActions(
      {
        setPageId: 'setPageId'
      }
    ),
    initData () {
      this.setPageId(this.pageId)
      this.today = dayjs().add(3, 'day').format('YYYY-MM-DD HH:mm:ss')
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
    padding-top: 30px
.button
  padding-left: 50px
.menu
  padding-left: 82px
  padding-right: 82px
  font-size: 14px
  label
    padding-bottom: 0
  .detail
    font-size: 24px
    padding-bottom: 32px
</style>

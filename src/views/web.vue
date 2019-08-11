<template lang='pug'>
  .main
    .title.text-center
      h1 STEP2. 填寫付款資訊
        .highlight
      template(v-if="page === '/web'")
        label Web ATM
      template(v-else)
        label ATM 轉帳
    .menu
      form
        .form-group
          label(for='inputState') 付款銀行：
          .col-6.px-0
            select#inputState.form-control
              option(selected='') 付款銀行
              option(v-for="bank in banks") {{ bank }}
          .col-12.px-0
            ol
              li 請準備晶片金融卡 + 晶片讀卡機，我們將引導您至指定金融機構之網路ATM進行交易手續。
              li 持對應機構之金融卡可享免跨行轉帳手續費，若無以上金融機構發行之金融卡，可自由選擇其一金融機構進行後續交易流程
        .form-group
          .col-6.px-0
            label(for='exampleInputEmail1') 付款人信箱：
            input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp', placeholder='')
        .form-check
          input#exampleCheck1.form-check-input(type='checkbox')
          label.form-check-label(for='exampleCheck1') 請再次確認「訂單資訊」與「付款資訊」，付款完成後將方送通知信至您的E-mail信箱
          label.form-text.text-muted 第三方支付金流平台服務條款

    .button.d-flex.justify-content-between
      router-link(
        :to="'/'"
      )
        button.btn.btn-primary(type='button') 回上一步
      router-link(
        :to="'/finish'"
      )
        button.btn.btn-primary(type='button') 確認付款
</template>

<script>
export default {
  name: 'credit',
  data () {
    return {
      banks: [
        '臺灣銀行',
        '臺灣土地銀行',
        '合作金庫商業銀行',
        '第一商業銀行',
        '華南商業銀行',
        '彰化商業銀行',
        '上海商業儲蓄銀行',
        '台北富邦商業銀行',
        '國泰世華商業銀行',
        '高雄銀行',
        '兆豐國際商業銀行',
        '花旗（台灣）商業銀行',
        '王道商業銀行',
        '臺灣中小企業銀行',
        '渣打國際商業銀行',
        '台中商業銀行',
        '京城商業銀行',
        '滙豐（台灣）商業銀行',
        '瑞興商業銀行',
        '華泰商業銀行',
        '臺灣新光商業銀行',
        '陽信商業銀行',
        '板信商業銀行',
        '三信商業銀行',
        '聯邦商業銀行',
        '遠東國際商業銀行',
        '元大商業銀行',
        '永豐商業銀行',
        '玉山商業銀行',
        '凱基商業銀行',
        '星展（台灣）商業銀行',
        '台新國際商業銀行',
        '日盛國際商業銀行',
        '安泰商業銀行',
        '中國信託商業銀行'
      ]
    }
  },
  computed: {
    page () {
      return this.$route.path
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
ol
  padding-left: 15px
  li
    padding-top: 10px
.main
  .title
    padding-bottom: 20px
  .button
    padding-top: 30px
.button
  padding-left: 50px
.menu
  padding-left: 50px
  padding-right: 50px
  font-size: 14px
</style>

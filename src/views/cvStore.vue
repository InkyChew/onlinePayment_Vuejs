<template lang='pug'>
  .main
    .title.text-center
      h1 STEP2. 填寫付款資訊
        .highlight
      label 超商付款
    .menu
      form
        .form-group
          label 付款超商：
          .col-6.px-0
            select(v-model="cvStore" @change='submit').form-control
              option 7-11
              option 全家
              option 萊爾富
        .form-group
          .col-6.px-0
            label 付款人信箱：
            input.form-control(type='email', aria-describedby='emailHelp', placeholder='')
        .form-check
          input.form-check-input(type='checkbox')
          label.form-check-label 請再次確認「訂單資訊」與「付款資訊」，付款完成後將寄送通知信至您的E-mail信箱
          label.form-text.text-muted 第三方支付金流平台服務條款

    .button.d-flex.justify-content-between
      router-link(
        :to="'/'"
      )
        button.btn.btn-primary(type='button') 回上一步
      router-link(
        :to="'/cvStoreFinish'"
      )
        button.btn.btn-primary(type='button') 確認付款
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'credit',
  data () {
    return {
      cvStore: ''
    }
  },
  methods: {
    ...mapActions({
      setCvStore: 'setCvStore'
    }),
    submit () {
      this.setCvStore(this.cvStore)
    }
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
  padding-left: 50px
  padding-right: 50px
  font-size: 14px
</style>

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
            select(v-model="formData.cvStore" @change='submit').form-control
              option(disabled :value="''") 付款超商
              option 7-11
              option 全家
              option 萊爾富
        .form-group
          .col-6.px-0
            label 付款人信箱：
            input.form-control(type='email', v-model="formData.email")
        .form-check
          input.form-check-input(type='checkbox', v-model="formData.checked")
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
      isInvalid: false,
      formData: {
        cvStore: '',
        email: '',
        checked: false
      }
    }
  },
  watch: {
    formData: {
      handler(val) {
        if (val.cvStore === '') {
          this.isInvalid = true
          // alert("請選擇「付款超商」後再送出，謝謝!")
        } else if (val.email !== '') {
          const emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
          this.isInvalid = true
          // alert('email格式不正確，請確認後再送出，謝謝!')
        } else if (val.checked === false) {
          this.isInvalid = true
          // alert('請再次確認「訂單資訊」與「付款資訊」，並勾選欄位後再送出，謝謝!')
        }
      },
      deep: true
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

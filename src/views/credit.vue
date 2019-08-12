<template lang='pug'>
  .main
    .title.text-center
      h1 STEP2. 填寫付款資訊
        .highlight
      template(v-if="page === '/credit'")
        label 信用卡/金融卡
      template(v-else="page")
        label 銀聯卡
    .menu
      form
        .form-group
          .form-check.form-check-inline
            input.form-check-input(type='radio', name='payRule', value='once' v-model="payRule")
            label.form-check-label 一次付款
          .form-check.form-check-inline
            input.form-check-input(type='radio', name='payRule', value='divide' v-model="payRule")
            label.form-check-label 分期付款
        .form-group
          label 信用卡號：
          .row
            .col-2
              input.form-control(type='text', v-model="formData.c1", maxlength='4', @keyup="next($event, 'c2')")
            label.align-self-end —
            .col-2
              input.form-control(ref='c2', type='text', v-model="formData.c2", maxlength='4', @keyup="next($event, 'c3')")
            label.align-self-end —
            .col-2
              input.form-control.px-0(ref='c3', type='password', v-model="formData.c3", maxlength='4', @keyup="next($event, 'c4')")
            label.align-self-end —
            .col-2
              input.form-control(ref='c4', type='text', v-model="formData.c4", maxlength='4', placeholder='')
            .col.px-0.my-auto
              img(src='@/assets/image/visa.svg')
              img(src='@/assets/image/mastercard.svg')
              img(src='@/assets/image/jcb.svg')
        .form-group
          label 有效月年：
          .row.d-flex.flex-row
            .col-3
              select(v-model="formData.month").form-control
                option(disabled :value="''") 月
                template(v-for="m in 12")
                  option {{ m }}
            label.align-self-end /
            .col-3
              select(v-model="formData.year").form-control.col
                option(disabled :value="''") 年
                template(v-for="y in 10")
                  option {{ 2019 + y - 1}}
        .form-group
          label 背面末三碼：
          .row.d-flex.flex-row
            .col-3
              input.form-control(type='text', v-model="formData.back3", maxlength='3', @keyup="next($event, 'email')")
            .col.my-auto.px-0
              img(src='@/assets/image/back-three.svg')
        .form-group
          .col-6.px-0
            label 付款人信箱：
            input.form-control(type='email', ref='email', v-model='formData.email')
        .form-check
          input.form-check-input(type='checkbox' v-model='formData.checked')
          label.form-check-label.red 請再次確認「訂單資訊」與「付款資訊」，付款完成後將方送通知信至您的E-mail信箱
          label.form-text.text-muted 第三方支付金流平台服務條款

    .button.d-flex.justify-content-between
      router-link(
        :to="'/'"
      )
        button.btn.btn-primary(type='button') 回上一步
      //- router-link(
      //-   :to="'/finish'"
      //- )
        //- button.btn.btn-primary(type='button') 確認付款
      button.btn.btn-primary(type='button' @click='validate') 確認付款
</template>

<script>
export default {
  name: 'credit',
  data () {
    return {
      payRule: 'once',
      formData: {
        email: '',
        c1: '',
        c2: '',
        c3: '',
        c4: '',
        back3: '',
        month: '',
        year: '',
        checked: false
      }
    }
  },
  computed: {
    page () {
      return this.$route.path
    }
  },
  methods: {
    next (e, next) {
      const curLength = e.target.value.length
      const nextTarget = this.$refs[next]
      console.log(e)
      if (curLength === e.target.maxLength) {
        nextTarget.focus()
      }
    },
    validate () { // 送出表單前驗證
      const all = document.getElementsByClassName('form-control')
      console.log(all)
      const { email, c1, c2, c3, c4, back3, month, year, checked } = this.formData

      if (email === '' || c1 === '' || c2 === '' || c3 === '' || c4 === '' || back3 === '') {
        for (var i = 0; i < all.length; i++) {
          all[i].style.borderColor = 'red'
        }
        alert('欄位不得為空白，請確認後再送出，謝謝!')
      } else {
        const emailReg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
        if (!emailReg.test(this.formData.email)) {
          all[7].style.borderColor = 'red'
          alert('email格式不正確，請確認後再送出，謝謝!')
        } else if (month === '' || year === '') {
          all[4].style.borderColor = 'red'
          all[5].style.borderColor = 'red'
          alert('請選擇有效月/年後再送出，謝謝!')
        } else if (checked === false) {
          const red = document.getElementsByClassName('red')
          red[0].style.color = 'red'
          alert('請再次確認「訂單資訊」與「付款資訊」，並勾選欄位後再送出，謝謝!')
        } else {
          this.$router.push({ path: 'finish' })
        }
      }
    }
  }
}
</script>

<style lang='sass'>
img
  width: 41.4px
  height: 25px
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
.red
  border-color: red
</style>

import Payment from './utils/payment'

if (window.PaymentRequest) {
  const paymentAmount = document.createElement('input')
  const paymentSubmit = document.createElement('button')

  paymentAmount.classList.add('js-payment-amount')
  paymentSubmit.textContent = 'Pay'

  document.querySelector('body').appendChild(paymentAmount)
  document.querySelector('body').appendChild(paymentSubmit)

  paymentSubmit.addEventListener('click', () => new Payment(paymentAmount.value))
} else {
  const warn = document.createElement('div')
  const link = document.createElement('a')
  const body = document.querySelector('body')
  link.href = 'https://web-payment-apis.appspot.com/'
  link.textContent = 'Maybe you will try apple pay?'
  warn.textContent = 'No support'
  body.appendChild(warn)
  body.appendChild(link)
}

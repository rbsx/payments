export default class Payment {
  constructor(value, currency = 'RUB', supportedMethods = ['basic-card']) {
    this.value = value
    this.currency = currency
    this.supportedMethods = supportedMethods

    this.init()
  }
  init() {
    const { paymentMethods, paymentDetails, options } = this.configure()

    const payment = new PaymentRequest(
      paymentMethods,
      paymentDetails,
      options
    )

    payment
      .show()
      .then(res => console.log(res))
      .catch(err => console.log('Error: ', err))
  }
  configure(
    value = this.value,
    currency = this.currency,
    supportedMethods = this.supportedMethods
  ) {
    const paymentMethods = [
      {
        supportedMethods
      }
    ]
    const paymentDetails = {
      total: {
        label: 'Diz maney',
        amount: {
          currency,
          value
        }
      },
      displayItems: [
        {
          label: 'Discount',
          amount: {
            currency,
            value: -5
          }
        }
      ]
    }
    const options = {
      requestPayerName: true,
      requestPayerEmail: true
    }

    return { paymentMethods, paymentDetails, options }
  }
}

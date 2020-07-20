/**
 * Formats cents to pretty/plain dollars
 *
 * @param  amount
 * @return string
 */
export default {
  data() {
    return {
      flatPickrConfig: {
        enableTime: true,
        altInput: true,
        altFormat: 'j M, Y \\a\\t G:i K'
      },
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '$',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  }
}

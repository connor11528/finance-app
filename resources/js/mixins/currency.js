/**
 * Formats cents to pretty/plain dollars
 *
 * @param  amount
 * @return string
 */
export default {
  methods: {
    prettyFormat: function (amount) {
      const sign = Math.sign(amount);
      const isPositive = (sign === 0 || sign === 1);
      let formatted = parseFloat(amount.toString().replace('-', '')).toFixed(2).split('.');

      return {
        value: `
          $${formatted[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}.
          <span>${formatted[1]}</span>`,
        sign: isPositive ? 'positive' : 'negative'
      };
    },

    plainFormat: function (amount) {
      return parseFloat(amount).toFixed(2);
    }
  }
}

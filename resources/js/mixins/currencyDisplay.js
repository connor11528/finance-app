/**
 * Formats cents to pretty dollars
 *
 * @param  amount
 * @return string
 */
export default {
  methods: {
    prettyFormat: function(amount) {
      let formatted = (amount / 100).toFixed(2);
      let spanned = formatted.split('.');

      return `$${spanned[0]}.<span>${spanned[1]}</span>`;
    },

    plainFormat: function(amount) {
      return (amount / 100).toFixed(2);
    }
  }
}

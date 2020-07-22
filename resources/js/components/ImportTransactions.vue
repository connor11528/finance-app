<template>
  <div id="modal-import-transactions" class="uk-modal-container" uk-modal="container: .balance-menu">
    <div class="uk-modal-dialog">
      <form @submit.prevent="importTransactions">
        <div class="uk-modal-header">
          <h6 class="uk-modal-title">Import Balance Entries</h6>
        </div>

        <div class="uk-modal-body">
          <div class="uk-margin">
            <div class="file-input-box" uk-form-custom>
              <span v-text="fileName"></span>
              <input type="file" @change="attachFile" v-if="status">
              <span class="uk-link">Select File</span>
            </div>
          </div>

          <form-errors :error-bag="errorBag"></form-errors>
        </div>

        <div class="uk-modal-footer">
          <div class="uk-button-group uk-flex uk-flex-right">
            <button class="uk-button uk-button-large uk-button-light-blue uk-modal-close" type="button">Cancel</button>
            <button class="uk-button uk-button-large uk-button-primary uk-margin-left" type="submit">Import</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import FormErrors from './FormErrors'

  export default {
    data() {
      return  {
        status: false,
        errorBag: null,
        fileName: 'No File Selected',
        file: 0
      }
    },

    components: {FormErrors},

    methods: {
      importTransactions() {
        let formData = new FormData();

        formData.append('import', this.file);

        this.$http.post('import', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(({data}) => {
          UIkit.modal('#modal-import-transactions').hide();

          this.$emit('transaction-import', {
            rows: data.rows
          });
        })
        .catch(({response}) => {
          this.errorBag = response
        })
      },

      attachFile(event) {
        const fileData = event.target.files[0];

        this.fileName = fileData.name;

        this.file = fileData;
      },
    },

    mounted() {
      UIkit.util.on(this.$el, 'hidden', () => {
        this.errorBag = null;

        this.fileName = 'No File Selected';

        this.file = 0;

        this.status = false;
      });

      UIkit.util.on(this.$el, 'beforeshow', () => {
        this.status = true;
      });
    }
  }
</script>

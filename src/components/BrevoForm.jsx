export default function BrevoForm() {
  return (
    <div className="sib-form" style={{ textAlign: 'center', backgroundColor: 'transparent' }}>
      <div id="sib-form-container" className="sib-form-container">
        {/* Message d'erreur */}
        <div
          id="error-message"
          className="sib-form-message-panel"
          style={{
            fontFamily: 'Helvetica, sans-serif',
            fontSize: '16px',
            textAlign: 'left',
            color: '#661d1d',
            backgroundColor: '#ffeded',
            borderColor: '#ff4949',
            borderRadius: '3px',
            maxWidth: '540px',
          }}
        >
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <span className="sib-form-message-panel__inner-text">
              Nous n'avons pas pu confirmer votre inscription.
            </span>
          </div>
        </div>

        <div></div>

        {/* Message de succès */}
        <div
          id="success-message"
          className="sib-form-message-panel"
          style={{
            fontFamily: 'Helvetica, sans-serif',
            fontSize: '16px',
            textAlign: 'left',
            color: '#085229',
            backgroundColor: '#e7faf0',
            borderColor: '#13ce66',
            borderRadius: '3px',
            maxWidth: '540px',
          }}
        >
          <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
            <span className="sib-form-message-panel__inner-text">
              Votre inscription est confirmée.
            </span>
          </div>
        </div>

        <div></div>

        {/* Formulaire */}
        <div
          id="sib-container"
          className="sib-container--large sib-container--vertical"
          style={{
            maxWidth: '540px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'transparent',
            borderWidth: '0px',
            borderRadius: '21px',
            direction: 'ltr',
            padding: '8px',
          }}
        >
          <form
            id="sib-form"
            method="POST"
            action="https://0fbf6b70.sibforms.com/serve/MUIFAFItc5BdmrJrOYaF3cqZtlUP432pxrFilK_e8xHGInn2k3fvxo00ljwWUsW9DuTsfJvh0rGBfNhFjMZUtlYTqQ3bezkvRU9psGJKbxlPNOjVfr9FpAO2G6-8RvzreUAHzhfkRMwey34dNqdWqlABfwOrLMIVfO81zt3eUVhDzgy9FCmg4DrLNaeBMeDvhFkyziMnijZFj_itqw=="
            data-type="subscription"
          >
            <div style={{ padding: '8px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div className="entry__field">
                      <input
                        className="input"
                        maxLength="200"
                        type="text"
                        id="PRENOM"
                        name="PRENOM"
                        autoComplete="off"
                        placeholder="PRENOM"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '16px',
                          border: '1px solid #c0ccda',
                          borderRadius: '4px',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '8px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div className="entry__field">
                      <input
                        className="input"
                        type="email"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="EMAIL"
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: '16px',
                          border: '1px solid #c0ccda',
                          borderRadius: '4px',
                          backgroundColor: '#ffffff',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '8px 0' }}>
              <div className="sib-form-block" style={{ textAlign: 'center' }}>
                <button
                  className="sib-form-block__button sib-form-block__button-with-loader"
                  style={{
                    fontFamily: 'Palatino Linotype, serif',
                    fontSize: '23px',
                    fontWeight: 700,
                    textAlign: 'center',
                    color: '#FFFFFF',
                    backgroundColor: '#1a9f80',
                    borderWidth: '0px',
                    borderRadius: '4px',
                    padding: '14px 32px',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                  form="sib-form"
                  type="submit"
                >
                  Recevoir mon guide gratuit
                </button>
              </div>
            </div>

            <input type="text" name="email_address_check" defaultValue="" className="input--hidden" style={{ display: 'none' }} />
            <input type="hidden" name="locale" value="fr" />
          </form>
        </div>
      </div>
    </div>
  )
}

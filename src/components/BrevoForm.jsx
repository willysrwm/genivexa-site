import { useEffect } from 'react'

export default function BrevoForm() {
  useEffect(() => {
    // Injecter le CSS de Brevo dans le head
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css'
    document.head.appendChild(link)

    // Injecter les variables de traduction Brevo
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Veuillez choisir un code pays'
    window.LOCALE = 'fr'
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer."
    window.REQUIRED_ERROR_MESSAGE = "Vous devez renseigner ce champ. "
    window.GENERIC_INVALID_MESSAGE = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer."
    window.INVALID_NUMBER = "Les informations que vous avez fournies ne sont pas valides. Veuillez vérifier le format du champ et réessayer."
    window.INVALID_DATE = "Veuillez saisir une date valide"
    window.REQUIRED_MULTISELECT_MESSAGE = 'Veuillez choisir au moins une option'
    window.translation = {
      common: {
        selectedList: '{quantity} liste sélectionnée',
        selectedLists: '{quantity} listes sélectionnées',
        selectedOption: '{quantity} sélectionné',
        selectedOptions: '{quantity} sélectionnés',
      }
    }
    window.AUTOHIDE = false

    // Injecter le script principal Brevo
    const script = document.createElement('script')
    script.src = 'https://sibforms.com/forms/end-form/build/main.js'
    script.defer = true
    document.body.appendChild(script)

    // Nettoyage quand le composant est démonté
    return () => {
      if (link.parentNode) link.parentNode.removeChild(link)
      if (script.parentNode) script.parentNode.removeChild(script)
    }
  }, [])

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
            backgroundColor: 'rgba(191,215,116,0.91)',
            borderWidth: '2px',
            borderStyle: 'dashed',
            borderColor: '#4e6275',
            borderRadius: '21px',
            direction: 'ltr',
            padding: '16px',
          }}
        >
          <form
            id="sib-form"
            method="POST"
            action="https://0fbf6b70.sibforms.com/serve/MUIFAluEbssuonv2HY8YTwdSnA2JkPwGvwWFVcCTkeuS7u50lOIRTPppef9KIyjcTJuWkWraRu__LZFbr3SNlVnNj5J3ctef1VEl_Pig9rnaciXGfBg5LbQbLZkkLW_gCn7fobtOCFVvsfLISiS9sIzsOnHdGoOJS3wOtp1DQN84ScbtEohhAYB9BJ7rWy1osr4NOUmEosQBY9Rew=="
            data-type="subscription"
          >
            <div style={{ padding: '8px 0' }}>
              <div className="sib-input sib-form-block">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <label
                      className="entry__label"
                      style={{
                        fontWeight: 700,
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: '16px',
                        color: '#3c4858',
                        display: 'block',
                      }}
                      htmlFor="PRENOM"
                    >
                      Entrez votre PRENOM
                    </label>
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
                    <label
                      className="entry__label"
                      style={{
                        fontWeight: 700,
                        textAlign: 'left',
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: '16px',
                        color: '#3c4858',
                        display: 'block',
                      }}
                      htmlFor="EMAIL"
                    >
                      Votre EMAIL
                    </label>
                    <div className="entry__field">
                      <input
                        className="input"
                        type="text"
                        id="EMAIL"
                        name="EMAIL"
                        autoComplete="off"
                        placeholder="EMAIL"
                        required
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
                    fontFamily: 'Baskerville, serif',
                    fontSize: '21px',
                    fontWeight: 700,
                    textAlign: 'center',
                    color: '#FFFFFF',
                    backgroundColor: '#1cecb8',
                    borderWidth: '0px',
                    borderRadius: '14px',
                    padding: '12px 24px',
                    cursor: 'pointer',
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

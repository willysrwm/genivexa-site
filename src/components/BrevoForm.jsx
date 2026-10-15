import { useState } from 'react'

export default function BrevoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Détecter quand le formulaire est soumis avec succès
  const handleSubmit = () => {
    setTimeout(() => {
      const successMsg = document.getElementById('success-message')
      if (successMsg && successMsg.style.display !== 'none') {
        setIsSubmitted(true)
      }
    }, 500)
  }

  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      {/* Message de succès (affiché après soumission) */}
      <div
        id="success-message"
        className="sib-form-message-panel"
        style={{
          display: 'none',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '15px',
          textAlign: 'center',
          color: '#065f46',
          backgroundColor: '#ecfdf5',
          border: '1px solid #10b981',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>✅</span>
          <span style={{ fontWeight: '600' }}>
            Inscription confirmée ! Vérifiez votre boîte mail pour recevoir votre guide.
          </span>
        </div>
      </div>

      {/* Message d'erreur (affiché en cas de problème) */}
      <div
        id="error-message"
        className="sib-form-message-panel"
        style={{
          display: 'none',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '15px',
          textAlign: 'center',
          color: '#991b1b',
          backgroundColor: '#fef2f2',
          border: '1px solid #ef4444',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>⚠️</span>
          <span style={{ fontWeight: '600' }}>
            Oups ! Une erreur est survenue. Veuillez réessayer.
          </span>
        </div>
      </div>

      {/* Formulaire Brevo */}
      <div id="sib-form-container" className="sib-form-container">
        <div id="sib-container">
          <form
            id="sib-form"
            method="POST"
            action="https://0fbf6b70.sibforms.com/serve/MUIFAFItc5BdmrJrOYaF3cqZtlUP432pxrFilK_e8xHGInn2k3fvxo00ljwWUsW9DuTsfJvh0rGBfNhFjMZUtlYTqQ3bezkvRU9psGJKbxlPNOjVfr9FpAO2G6-8RvzreUAHzhfkRMwey34dNqdWqlABfwOrLMIVfO81zt3eUVhDzgy9FCmg4DrLNaeBMeDvhFkyziMnijZFj_itqw=="
            data-type="subscription"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            {/* Champ PRENOM */}
            <div>
              <label
                htmlFor="PRENOM"
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '8px',
                  textAlign: 'left',
                }}
              >
                Votre prénom
              </label>
              <input
                id="PRENOM"
                name="PRENOM"
                type="text"
                maxLength="200"
                autoComplete="off"
                placeholder="Ex : Willys"
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  fontSize: '16px',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#1f2937',
                  backgroundColor: '#ffffff',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#06b6d4'
                  e.target.style.boxShadow = '0 0 0 4px rgba(6, 182, 212, 0.15)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'transparent'
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>

            {/* Champ EMAIL */}
            <div>
              <label
                htmlFor="EMAIL"
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '8px',
                  textAlign: 'left',
                }}
              >
                Votre email
              </label>
              <input
                id="EMAIL"
                name="EMAIL"
                type="email"
                autoComplete="off"
                placeholder="Ex : vous@exemple.com"
                required
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  fontSize: '16px',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#1f2937',
                  backgroundColor: '#ffffff',
                  border: '2px solid transparent',
                  borderRadius: '12px',
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#06b6d4'
                  e.target.style.boxShadow = '0 0 0 4px rgba(6, 182, 212, 0.15)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'transparent'
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
              />
            </div>

            {/* Bouton de soumission */}
            <button
              type="submit"
              form="sib-form"
              style={{
                width: '100%',
                padding: '16px 24px',
                fontSize: '17px',
                fontWeight: '700',
                fontFamily: 'Poppins, sans-serif',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #10b981 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(6, 182, 212, 0.35)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)'
                e.target.style.boxShadow = '0 10px 28px rgba(6, 182, 212, 0.5)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.35)'
              }}
            >
              🎁 Recevoir mon guide gratuit
            </button>

            {/* Champs cachés obligatoires pour Brevo */}
            <input
              type="text"
              name="email_address_check"
              defaultValue=""
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />
            <input type="hidden" name="locale" value="fr" />
          </form>
        </div>
      </div>

      {/* Mention de confidentialité */}
      <p
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '13px',
          color: 'rgba(255, 255, 255, 0.75)',
          textAlign: 'center',
          marginTop: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}
      >
        🔒 Vos données sont sécurisées. Désabonnement en 1 clic.
      </p>
    </div>
  )
}

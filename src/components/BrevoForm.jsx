import { useState } from 'react'

export default function BrevoForm() {
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const BREVO_URL = "https://0fbf6b70.sibforms.com/serve/MUIFAFItc5BdmrJrOYaF3cqZtlUP432pxrFilK_e8xHGInn2k3fvxo00ljwWUsW9DuTsfJvh0rGBfNhFjMZUtlYTqQ3bezkvRU9psGJKbxlPNOjVfr9FpAO2G6-8RvzreUAHzhfkRMwey34dNqdWqlABfwOrLMIVfO81zt3eUVhDzgy9FCmg4DrLNaeBMeDvhFkyziMnijZFj_itqw=="

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validation basique
    if (!prenom.trim() || !email.trim()) {
      setStatus('error')
      setErrorMessage('Veuillez remplir tous les champs.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage('Veuillez saisir une adresse email valide.')
      return
    }

    try {
      const formData = new FormData()
      formData.append('PRENOM', prenom)
      formData.append('EMAIL', email)
      formData.append('email_address_check', '')
      formData.append('locale', 'fr')

      await fetch(BREVO_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Nécessaire car Brevo n'autorise pas CORS
      })

      // Avec no-cors, on ne peut pas lire la réponse, mais on suppose le succès
      setStatus('success')
      setPrenom('')
      setEmail('')

      // Reset après 8 secondes
      setTimeout(() => setStatus('idle'), 8000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  // État : succès
  if (status === 'success') {
    return (
      <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '16px',
            textAlign: 'center',
            color: '#065f46',
            backgroundColor: '#ecfdf5',
            border: '2px solid #10b981',
            borderRadius: '16px',
            padding: '32px 24px',
            boxShadow: '0 10px 30px rgba(16, 185, 129, 0.2)',
            animation: 'fadeIn 0.4s ease',
          }}
        >
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>✅</div>
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '12px',
              color: '#065f46',
            }}
          >
            Inscription confirmée !
          </h3>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#047857' }}>
            Merci pour votre inscription. Vérifiez votre boîte mail pour recevoir
            votre guide <strong>"10 Prompts ChatGPT pour Freelances"</strong>.
          </p>
          <p style={{ fontSize: '13px', marginTop: '16px', color: '#059669' }}>
            💡 Pensez à vérifier vos spams si vous ne voyez pas l'email.
          </p>
        </div>
      </div>
    )
  }

  // Formulaire (idle ou error)
  return (
    <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      {/* Message d'erreur */}
      {status === 'error' && (
        <div
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '14px',
            textAlign: 'center',
            color: '#991b1b',
            backgroundColor: '#fef2f2',
            border: '1px solid #ef4444',
            borderRadius: '12px',
            padding: '12px 16px',
            marginBottom: '16px',
          }}
        >
          ⚠️ {errorMessage}
        </div>
      )}

      <form
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
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Bouton */}
        <button
          type="submit"
          disabled={status === 'loading'}
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
            cursor: status === 'loading' ? 'wait' : 'pointer',
            boxShadow: '0 6px 20px rgba(6, 182, 212, 0.35)',
            transition: 'all 0.3s ease',
            letterSpacing: '0.3px',
            opacity: status === 'loading' ? 0.7 : 1,
          }}
          onMouseEnter={(e) => {
            if (status !== 'loading') {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 10px 28px rgba(6, 182, 212, 0.5)'
            }
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 6px 20px rgba(6, 182, 212, 0.35)'
          }}
        >
          {status === 'loading' ? '⏳ Envoi en cours...' : '🎁 Recevoir mon guide gratuit'}
        </button>
      </form>

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

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}

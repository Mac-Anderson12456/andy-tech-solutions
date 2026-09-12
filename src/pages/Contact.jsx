import { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import StatusPill from '../components/StatusPill'
import { WhatsAppIcon } from '../components/icons/BrandIcons'
import { contact } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

const SERVICE_OPTIONS = [
  { en: 'Computer Maintenance', fr: 'Maintenance informatique' },
  { en: 'Computer Troubleshooting', fr: 'Dépannage informatique' },
  { en: 'Networking', fr: 'Réseau' },
  { en: 'Router Installation', fr: 'Installation de routeur' },
  { en: 'Wi-Fi Setup', fr: 'Configuration Wi-Fi' },
  { en: 'CCTV Installation', fr: 'Installation de vidéosurveillance' },
  { en: 'CCTV Troubleshooting', fr: 'Dépannage de vidéosurveillance' },
  { en: 'Starlink Installation', fr: 'Installation Starlink' },
  { en: 'Starlink Troubleshooting', fr: 'Dépannage Starlink' },
  { en: 'Solar Installation', fr: 'Installation solaire' },
  { en: 'Solar Maintenance', fr: 'Maintenance solaire' },
  { en: 'Website Development', fr: 'Développement de site web' },
  { en: 'UI/UX Design', fr: 'Design UI/UX' },
  { en: 'Other', fr: 'Autre' },
]
const SERVICE_VALUES = SERVICE_OPTIONS.map((o) => o.en)

const CONTACT_METHODS = [
  { en: 'Phone Call', fr: 'Appel téléphonique' },
  { en: 'WhatsApp', fr: 'WhatsApp' },
  { en: 'Email', fr: 'E-mail' },
]

const initialForm = {
  fullName: '',
  phone: '',
  email: '',
  location: '',
  service: '',
  description: '',
  preferredContact: '',
  preferredDate: '',
  additionalInfo: '',
  // honeypot field, real users never fill this in
  company: '',
}

function useQueryService() {
  const { search } = useLocation()
  return useMemo(() => {
    const value = new URLSearchParams(search).get('service') || ''
    return SERVICE_VALUES.includes(value) ? value : ''
  }, [search])
}

function Field({ id, label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-volt-dark">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'w-full rounded-lg border border-ink/15 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-light focus:border-wire focus:outline-none'
const errorInputClass = 'border-red-400'

const copy = {
  en: {
    seoTitle: 'Contact',
    seoDescription:
      'Request a service from Andy TecH Solutions: computer repair, networking, CCTV, Starlink, solar, or web development.',
    pill: 'Get in touch',
    title: 'Request a Service',
    intro: "Tell us what's going on and how to reach you. We'll follow up to confirm details and schedule a visit or call.",
    fullName: 'Full Name',
    phone: 'Phone Number',
    email: 'Email',
    location: 'Location',
    locationPlaceholder: 'Neighborhood / town',
    serviceRequired: 'Service Required',
    selectService: 'Select a service',
    description: 'Problem / Requirement Description',
    preferredContact: 'Preferred Contact Method',
    noPreference: 'No preference',
    preferredDate: 'Preferred Date',
    additionalInfo: 'Additional Information',
    submit: 'Submit Service Request',
    submitNote: 'Submitting opens your email app with the details pre-filled, addressed to Andy TecH Solutions.',
    successTitle: 'Request ready to send',
    successText:
      'Your email app should now open with the request filled in. Press send there to complete it. If nothing opened, use WhatsApp or the phone number opposite instead.',
    submitAnother: 'Submit another request',
    otherWays: 'Other ways to reach us',
    call: 'Call',
    whatsapp: 'WhatsApp',
    email_: 'Email',
    serviceArea: 'Service Area',
    hours: 'Hours',
    followTitle: 'Follow along',
    followText: 'Updates and behind-the-scenes work on our social pages.',
    addPhone: 'Add phone number',
    addWhatsapp: 'Add WhatsApp number',
    addEmail: 'Add email address',
    addServiceArea: 'Add service area',
    addHours: 'Add business hours',
    errFullName: 'Please enter your full name.',
    errPhone: 'Please enter a phone number.',
    errPhoneInvalid: 'Please enter a valid phone number.',
    errEmail: 'Please enter an email address.',
    errEmailInvalid: 'Please enter a valid email address.',
    errLocation: 'Please enter your location.',
    errService: 'Please select a service.',
    errDescription: 'Please describe what you need help with.',
    notSpecified: 'Not specified',
    emailFullName: 'Full Name',
    emailPhone: 'Phone',
    emailEmail: 'Email',
    emailLocation: 'Location',
    emailService: 'Service Required',
    emailPreferredContact: 'Preferred Contact Method',
    emailPreferredDate: 'Preferred Date',
    emailDescription: 'Problem / Requirement Description:',
    emailAdditional: 'Additional Information:',
    emailSubject: 'Service Request',
  },
  fr: {
    seoTitle: 'Contact',
    seoDescription:
      'Demandez un service à Andy TecH Solutions : réparation informatique, réseau, vidéosurveillance, Starlink, solaire ou développement web.',
    pill: 'Contactez-nous',
    title: 'Demander un service',
    intro: 'Dites-nous ce qui se passe et comment vous joindre. Nous vous recontacterons pour confirmer les détails et planifier une visite ou un appel.',
    fullName: 'Nom complet',
    phone: 'Numéro de téléphone',
    email: 'E-mail',
    location: 'Lieu',
    locationPlaceholder: 'Quartier / ville',
    serviceRequired: 'Service demandé',
    selectService: 'Choisir un service',
    description: 'Description du problème / besoin',
    preferredContact: 'Moyen de contact préféré',
    noPreference: 'Aucune préférence',
    preferredDate: 'Date souhaitée',
    additionalInfo: 'Informations complémentaires',
    submit: 'Envoyer la demande',
    submitNote: 'En soumettant, votre application e-mail s\'ouvrira avec les détails pré-remplis, adressés à Andy TecH Solutions.',
    successTitle: 'Demande prête à être envoyée',
    successText:
      "Votre application e-mail devrait maintenant s'ouvrir avec la demande pré-remplie. Cliquez sur envoyer pour finaliser. Si rien ne s'est ouvert, utilisez WhatsApp ou le numéro de téléphone ci-contre.",
    submitAnother: 'Envoyer une autre demande',
    otherWays: 'Autres moyens de nous contacter',
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    email_: 'E-mail',
    serviceArea: 'Zone desservie',
    hours: 'Horaires',
    followTitle: 'Suivez-nous',
    followText: 'Actualités et coulisses de notre travail sur nos pages sociales.',
    addPhone: 'Ajouter un numéro de téléphone',
    addWhatsapp: 'Ajouter un numéro WhatsApp',
    addEmail: 'Ajouter une adresse e-mail',
    addServiceArea: 'Ajouter une zone desservie',
    addHours: 'Ajouter des horaires',
    errFullName: 'Veuillez indiquer votre nom complet.',
    errPhone: 'Veuillez indiquer un numéro de téléphone.',
    errPhoneInvalid: 'Veuillez indiquer un numéro de téléphone valide.',
    errEmail: 'Veuillez indiquer une adresse e-mail.',
    errEmailInvalid: 'Veuillez indiquer une adresse e-mail valide.',
    errLocation: 'Veuillez indiquer votre lieu.',
    errService: 'Veuillez choisir un service.',
    errDescription: "Veuillez décrire ce dont vous avez besoin.",
    notSpecified: 'Non précisé',
    emailFullName: 'Nom complet',
    emailPhone: 'Téléphone',
    emailEmail: 'E-mail',
    emailLocation: 'Lieu',
    emailService: 'Service demandé',
    emailPreferredContact: 'Moyen de contact préféré',
    emailPreferredDate: 'Date souhaitée',
    emailDescription: 'Description du problème / besoin :',
    emailAdditional: 'Informations complémentaires :',
    emailSubject: 'Demande de service',
  },
}

export default function Contact() {
  const { language } = useLanguage()
  const c = copy[language]
  const preselectedService = useQueryService()
  const [form, setForm] = useState({ ...initialForm, service: preselectedService })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.fullName.trim()) next.fullName = c.errFullName
    if (!form.phone.trim()) next.phone = c.errPhone
    else if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim())) next.phone = c.errPhoneInvalid
    if (!form.email.trim()) next.email = c.errEmail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) next.email = c.errEmailInvalid
    if (!form.location.trim()) next.location = c.errLocation
    if (!form.service) next.service = c.errService
    if (!form.description.trim()) next.description = c.errDescription
    return next
  }

  const buildEmailBody = () =>
    [
      `${c.emailFullName}: ${form.fullName}`,
      `${c.emailPhone}: ${form.phone}`,
      `${c.emailEmail}: ${form.email}`,
      `${c.emailLocation}: ${form.location}`,
      `${c.emailService}: ${form.service}`,
      `${c.emailPreferredContact}: ${form.preferredContact || c.notSpecified}`,
      `${c.emailPreferredDate}: ${form.preferredDate || c.notSpecified}`,
      '',
      c.emailDescription,
      form.description,
      '',
      form.additionalInfo ? `${c.emailAdditional}\n${form.additionalInfo}` : '',
    ].join('\n')

  const handleSubmit = (e) => {
    e.preventDefault()

    // honeypot: silently drop likely bot submissions without revealing why
    if (form.company) {
      setStatus('success')
      return
    }

    const validation = validate()
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    const to = contact.email || ''
    const subject = encodeURIComponent(`${c.emailSubject}: ${form.service} (${form.fullName})`)
    const body = encodeURIComponent(buildEmailBody())
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`

    setStatus('success')
  }

  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`
    : null

  return (
    <>
      <SEO title={c.seoTitle} description={c.seoDescription} path="/contact" />

      <section className="border-b border-ink/8 bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 lg:py-20">
          <StatusPill className="mx-auto w-fit" tone="volt">
            {c.pill}
          </StatusPill>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {c.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate">{c.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:py-24">
        {/* FORM */}
        <div className="rounded-2xl border border-ink/8 bg-white p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-signal" strokeWidth={1.5} />
              <h2 className="font-display text-xl font-semibold text-ink">{c.successTitle}</h2>
              <p className="max-w-sm text-sm text-slate">{c.successText}</p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm)
                  setStatus('idle')
                }}
                className="mt-2 text-sm font-semibold text-wire-dark hover:text-ink"
              >
                {c.submitAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* honeypot, hidden from real users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update('company')}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="fullName" label={c.fullName} required error={errors.fullName}>
                  <input
                    id="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={update('fullName')}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`${inputClass} ${errors.fullName ? errorInputClass : ''}`}
                    autoComplete="name"
                  />
                </Field>
                <Field id="phone" label={c.phone} required error={errors.phone}>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                    className={`${inputClass} ${errors.phone ? errorInputClass : ''}`}
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="email" label={c.email} required error={errors.email}>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
                    autoComplete="email"
                  />
                </Field>
                <Field id="location" label={c.location} required error={errors.location}>
                  <input
                    id="location"
                    type="text"
                    placeholder={c.locationPlaceholder}
                    value={form.location}
                    onChange={update('location')}
                    aria-invalid={!!errors.location}
                    aria-describedby={errors.location ? 'location-error' : undefined}
                    className={`${inputClass} ${errors.location ? errorInputClass : ''}`}
                    autoComplete="address-level2"
                  />
                </Field>
              </div>

              <Field id="service" label={c.serviceRequired} required error={errors.service}>
                <select
                  id="service"
                  value={form.service}
                  onChange={update('service')}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                  className={`${inputClass} ${errors.service ? errorInputClass : ''}`}
                >
                  <option value="" disabled>
                    {c.selectService}
                  </option>
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt.en} value={opt.en}>
                      {opt[language]}
                    </option>
                  ))}
                </select>
              </Field>

              <Field id="description" label={c.description} required error={errors.description}>
                <textarea
                  id="description"
                  rows={4}
                  value={form.description}
                  onChange={update('description')}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'description-error' : undefined}
                  className={`${inputClass} resize-y ${errors.description ? errorInputClass : ''}`}
                />
              </Field>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field id="preferredContact" label={c.preferredContact}>
                  <select
                    id="preferredContact"
                    value={form.preferredContact}
                    onChange={update('preferredContact')}
                    className={inputClass}
                  >
                    <option value="">{c.noPreference}</option>
                    {CONTACT_METHODS.map((m) => (
                      <option key={m.en} value={m.en}>
                        {m[language]}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="preferredDate" label={c.preferredDate}>
                  <input
                    id="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={update('preferredDate')}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field id="additionalInfo" label={c.additionalInfo}>
                <textarea
                  id="additionalInfo"
                  rows={3}
                  value={form.additionalInfo}
                  onChange={update('additionalInfo')}
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-volt-dark px-6 py-3 font-semibold text-white transition-colors hover:brightness-110"
              >
                {c.submit}
              </button>
              <p className="text-xs text-slate">{c.submitNote}</p>
            </form>
          )}
        </div>

        {/* CONTACT CHANNELS */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-ink/8 bg-white p-6">
            <h2 className="font-display font-semibold text-ink">{c.otherWays}</h2>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-wire" strokeWidth={1.8} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate">{c.call}</p>
                  {contact.phone ? (
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-medium text-ink hover:text-wire-dark"
                    >
                      {contact.phone}
                    </a>
                  ) : (
                    <p className="text-sm italic text-slate">[{c.addPhone}]</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <WhatsAppIcon className="mt-0.5 h-5 w-5 text-signal-dark" />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate">{c.whatsapp}</p>
                  {whatsappHref ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-ink hover:text-signal-dark"
                    >
                      {contact.whatsapp}
                    </a>
                  ) : (
                    <p className="text-sm italic text-slate">[{c.addWhatsapp}]</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-volt-dark" strokeWidth={1.8} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate">{c.email_}</p>
                  {contact.email ? (
                    <a href={`mailto:${contact.email}`} className="text-sm font-medium text-ink hover:text-volt-dark">
                      {contact.email}
                    </a>
                  ) : (
                    <p className="text-sm italic text-slate">[{c.addEmail}]</p>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-slate" strokeWidth={1.8} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate">{c.serviceArea}</p>
                  <p className="text-sm font-medium text-ink">
                    {contact.address || <span className="italic text-slate">[{c.addServiceArea}]</span>}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-slate" strokeWidth={1.8} />
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate">{c.hours}</p>
                  <p className="text-sm font-medium text-ink">
                    {contact.hours ? contact.hours[language] : <span className="italic text-slate">[{c.addHours}]</span>}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-ink p-6 text-paper">
            <h3 className="font-display font-semibold">{c.followTitle}</h3>
            <p className="mt-1 text-sm text-paper/70">{c.followText}</p>
          </div>
        </aside>
      </section>
    </>
  )
}

import { Clock, MapPin, Navigation, Phone } from 'lucide-react'
import Button from './Button'
import SectionHeading from './SectionHeading'
import { contact, mapLocation } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'

const copy = {
  en: {
    eyebrow: 'Find us',
    title: 'Our service area: Molyko Stadium, Buea',
    intro:
      'We work around Molyko, Buea. The pin on the map marks Molyko Stadium. Call or message us on WhatsApp to arrange a visit.',
    area: 'Service area',
    hours: 'Hours',
    directions: 'Get directions',
    call: 'Call us',
    mapTitle: 'Map showing Molyko Stadium, Buea',
  },
  fr: {
    eyebrow: 'Nous trouver',
    title: 'Notre zone de service : Molyko Stadium, Buea',
    intro:
      'Nous intervenons autour de Molyko, à Buea. Le repère sur la carte indique le stade de Molyko. Appelez-nous ou écrivez-nous sur WhatsApp pour organiser une visite.',
    area: 'Zone desservie',
    hours: 'Horaires',
    directions: 'Itinéraire',
    call: 'Appeler',
    mapTitle: 'Carte montrant le stade de Molyko, Buea',
  },
}

export default function LocationMap() {
  const { language } = useLanguage()
  const c = copy[language]
  const { lat, lon } = mapLocation
  const d = 0.005
  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${(lon - d).toFixed(5)}%2C${(lat - d).toFixed(5)}%2C${(lon + d).toFixed(5)}%2C${(lat + d).toFixed(5)}&layer=mapnik&marker=${lat}%2C${lon}`
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}`

  return (
    <section className="border-t border-ink/8 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow={c.eyebrow} title={c.title} description={c.intro} />
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-wire" strokeWidth={1.8} />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate">{c.area}</p>
                <p className="text-sm font-medium text-ink">{contact.address}</p>
              </div>
            </li>
            {contact.hours && (
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-slate" strokeWidth={1.8} />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-slate">{c.hours}</p>
                  <p className="text-sm font-medium text-ink">{contact.hours[language]}</p>
                </div>
              </li>
            )}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button href={directionsHref} target="_blank" rel="noopener noreferrer" variant="primary">
              <Navigation className="h-4 w-4" /> {c.directions}
            </Button>
            {contact.phone && (
              <Button href={`tel:${contact.phone.replace(/\s+/g, '')}`} variant="outline">
                <Phone className="h-4 w-4" /> {c.call}
              </Button>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim shadow-sm">
          <iframe
            title={c.mapTitle}
            src={embedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-72 w-full sm:h-96"
          />
        </div>
      </div>
    </section>
  )
}

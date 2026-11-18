import SEO from '../components/SEO'
import Button from '../components/Button'
import { LogoMark } from '../components/Logo'

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" />
      <section className="mx-auto flex max-w-xl flex-col items-center gap-5 px-5 py-24 text-center sm:px-8">
        <LogoMark className="h-20" />
        <h1 className="font-display text-3xl font-semibold text-ink">Page not found</h1>
        <p className="text-slate">
          The page you're looking for doesn't exist or may have moved.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </section>
    </>
  )
}

import { useRouter } from 'next/router'
import { Children, useEffect, useState } from 'react'

const STEP_QUERY_KEY = 'step'

const useFunnel = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(
    router.query[STEP_QUERY_KEY] || '',
  )

  useEffect(() => {
    if (router.query[STEP_QUERY_KEY] !== currentStep) {
      setCurrentStep(router.query[STEP_QUERY_KEY] || '')
    }
  }, [router.query, router.query[STEP_QUERY_KEY], currentStep])

  const setStep = (newStep) => {
    setCurrentStep(newStep)
    const nextUrl = new URL(window.location.href)
    nextUrl.searchParams.set(STEP_QUERY_KEY, newStep)
    router.push(nextUrl.href, undefined, { shallow: true })
  }

  const Step = ({ name, children }) =>
    currentStep === name ? <>{children}</> : null

  const Funnel = ({ children }) =>
    Children.toArray(children).find(
      (step) => step.props.name === currentStep,
    ) || null

  Funnel.Step = Step

  return [Funnel, setStep]
}

export default useFunnel

import Step1 from '@/components/steps/Step1'
import Step2 from '@/components/steps/Step2'
import Step3 from '@/components/steps/Step3'
import useFunnel from '@/hooks/useFunnel'

const PrayerPage = () => {
  const [CustomFunnel, setStep] = useFunnel()

  return (
    <>
      <CustomFunnel>
        <CustomFunnel.Step name="1">
          <Step1 onNext={() => setStep('2')} />
        </CustomFunnel.Step>
        <CustomFunnel.Step name="2">
          <Step2 onPrev={() => setStep('1')} onNext={() => setStep('3')} />
        </CustomFunnel.Step>
        <CustomFunnel.Step name="3">
          <Step3 onPrev={() => setStep('2')} />
        </CustomFunnel.Step>
      </CustomFunnel>
    </>
  )
}

export default PrayerPage

const Step2 = ({ onPrev, onNext }) => {
  return (
    <>
      <h1>Step2</h1>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </>
  )
}

export default Step2

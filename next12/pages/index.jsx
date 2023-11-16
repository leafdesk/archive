const RootPage = () => {
  return <></>
}

export default RootPage

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/home',
      permanent: true,
    },
  }
}

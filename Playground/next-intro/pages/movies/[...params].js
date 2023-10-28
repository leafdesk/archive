import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

const Detail = ({ params }) => {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(title);

  return (
    <>
      <Seo title={title} />
      <h4>{title}</h4>
    </>
  );
};

const getServerSideProps = ({ params: { params } }) => {
  return {
    props: {
      params,
    },
  };
};

export default Detail;
export { getServerSideProps };

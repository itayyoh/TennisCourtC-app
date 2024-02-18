import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To TennisCourtClub',
  description: 'Ultimate Tennis Gear',
  keywords: 'rackets,tennis,tennisrackets,balls',
};

export default Meta;

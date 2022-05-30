import PropTypes from 'prop-types';

const FlexBox = ({ children, alignItems, justifyContent }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </div>
  );
};

FlexBox.propTypes = {
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default FlexBox;

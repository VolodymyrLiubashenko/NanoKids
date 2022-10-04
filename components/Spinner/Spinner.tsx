import {StyledDotsWrapper, StyledDot} from './Spinner.styled';

const Spinner = () => {
  return (
    <StyledDotsWrapper>
      <StyledDot
        animate={{
          rotate: -360,
          transition: {repeat: Infinity, duration: 0.5, ease: 'linear'},
          opacity: 0,
        }}
      />
      <StyledDot
        animate={{
          rotate: -360,
          transition: {
            repeat: Infinity,
            duration: 0.5,
            ease: 'linear',
            delay: 0.1,
          },
          opacity: 0,
        }}
      />
      <StyledDot
        animate={{
          rotate: -360,
          transition: {
            repeat: Infinity,
            duration: 0.5,
            ease: 'linear',
            delay: 0.05,
          },
          opacity: 0,
        }}
      />
    </StyledDotsWrapper>
  );
};

export default Spinner;

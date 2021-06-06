import React from 'react';
import styled from '@emotion/styled';

const Loading: React.FC = () => {
  return <StyledLoading className='border w-5 h-5' />;
};
Loading.displayName = 'Loading';

const StyledLoading = styled.div`
  display: inline-block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default Loading;

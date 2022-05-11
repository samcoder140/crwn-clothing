import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 15px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

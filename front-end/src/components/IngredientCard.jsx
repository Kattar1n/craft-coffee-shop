import { Link } from "react-router";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIngredientCard = styled.div`
  color: #3e2723;
  width: 300px;
  height: 400px;
  background: #f5f0e6;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  transition: 300ms ease;

  &:hover {
    background: #f0e5d8;
  }
`;

const StyledName = styled.span`
  text-align: center;
  margin: 10px auto;
  font-size: 24px;
  font-weight: bold;
`;
const StyledImage = styled.div`
  margin: 10px;
  min-height: 200px;
  min-width: 280px;
  background-image: url(${(props) => props.$picture});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const StyledInfo = styled.div`
  margin: 10px auto;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 14px;
  text-align: start;
`;

const InStock = styled.span`
  font-size: 20px;
  color: #8e9775;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NotInStock = styled.span`
  font-size: 20px;
  color: #b76e37;
  font-weight: bold;
`;

const IngredientCard = ({
  id,
  name,
  price,
  description,
  picture,
  isInStock,
}) => {
  return (
    <StyledLink to={`/ingredients/${id}`}>
      <StyledIngredientCard>
        <StyledName>
          {name} <br />
          <StyledImage $picture={picture}></StyledImage>
        </StyledName>
        <StyledInfo>
          <span>აღწერა: {description}</span>
          {(!!isInStock && (
            <InStock>
              <span>მარაგშია</span>
              <span>{price}</span>
            </InStock>
          )) || <NotInStock>არ არის მარაგში</NotInStock>}
        </StyledInfo>
      </StyledIngredientCard>
    </StyledLink>
  );
};

export default IngredientCard;

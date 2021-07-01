import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Spinner from 'components/Spinner';
import Recipe from 'components/Recipe';
import useRecipes from 'hooks/useRecipes';

const Page = styled.div`
  margin-bottom: 2rem;
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Heading = styled.h1`
  text-align: center;
`;

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const { loading } = useRecipes();

  return loading ? (
    <Spinner />
  ) : (
    <Page>
      <Heading>Recipes</Heading>
      <Wrapper>
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.contentId}
              contentId={recipe.contentId}
              title={recipe.title}
              imageList={recipe.imageList}
            />
          );
        })}
      </Wrapper>
    </Page>
  );
};

export default Recipes;

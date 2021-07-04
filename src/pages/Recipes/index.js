import React from 'react';
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
  const { loading, recipes } = useRecipes();

  return loading ? (
    <Spinner data-testid="loading" />
  ) : (
    <Page>
      <Heading data-testid="title">Recipes</Heading>
      <Wrapper data-testid="recipe-list">
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

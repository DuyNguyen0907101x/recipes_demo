import React from 'react';
import { render, screen } from '@testing-library/react';
import Recipe from './index';
import { recipeMock } from 'data/recipe.mock';

describe('Recipe Component', () => {
  it('should render the recipe detail', () => {
    render(
      <Recipe
        contentId={recipeMock.contentId}
        title={recipeMock.title}
        imageList={recipeMock.imageList}
      />
    );

    const titleElement = screen.getByTestId('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toEqual(recipeMock.title);

    const imageElement = screen.getByTestId('image');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute(
      'src',
      recipeMock.imageList.landscape32small2x.url
    );
  });
});

import { render, screen, act } from 'utils/test-utils';
import useRecipes from './useRecipes';

const MockComponent = () => {
  const { loading, recipes } = useRecipes();

  return loading ? (
    <div data-testid="loading">loading</div>
  ) : (
    <div data-testid="content">content</div>
  );
};

describe('useRecipes hook', () => {
  it('should render loading icon after mounted', () => {
    render(<MockComponent />);
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.getByTestId('loading').textContent).toEqual('loading');
  });

  it('should fetch and display the recipe list', async () => {
    jest.useFakeTimers();
    const mockFetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve({ contents: [{}] }),
      })
    );

    await act(async () => {
      render(<MockComponent />);
    });

    await act(async () => {
      jest.runAllTimers();
    });
    expect(mockFetchSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
  });
});

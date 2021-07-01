import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchRecipesSuccess } from 'reducers/recipes';

const useRecipes = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchRecipes = async () => {
    setLoading(true);

    const response = await fetch('/data/recipes.json', {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    const data = await response.json();

    // simulate the time waiting for response
    setTimeout(() => {
      setLoading(false);
      dispatch(fetchRecipesSuccess(data.contents));
    }, 2000);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return {
    loading,
  };
};

export default useRecipes;

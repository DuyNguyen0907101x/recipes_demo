import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FadeStyled } from './Fade.styles';

// copied from internet tutorial. needs to find more refined way to do animation on mount/unmounting
const Fade = ({ show, children }) => {
  const [shouldRender, setShouldRender] = useState(show);

  useEffect(() => {
    if (show) {
      setShouldRender(true);
    }
  }, [show]);

  const handleFadeout = () => {
    if (!show) {
      setShouldRender(false);
    }
  };

  return (
    shouldRender && (
      <FadeStyled show={show} onAnimationEnd={handleFadeout}>
        {children}
      </FadeStyled>
    )
  );
};

Fade.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Fade;

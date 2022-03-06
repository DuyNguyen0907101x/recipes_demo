import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  TreeContainer,
  TreeItem as TreeItemStyled,
  TreeTitle,
} from './TreeItem.styles';
import Fade from 'components/Fade';

// need to improve: detect depth level of children
// if it is required to have different styling/elements for bullet dots/title, this solution fails

const TreeItem = ({ id, name, children }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = children && children.length > 0 ? 1 : 0;

  const handleClick = () => {
    if (hasChildren) {
      setExpanded(!expanded);
    }
  };

  return (
    <TreeItemStyled>
      <TreeTitle
        expandable={hasChildren}
        expanded={expanded ? 1 : 0}
        onClick={handleClick}
      >
        {name}
      </TreeTitle>

      {hasChildren ? (
        <Fade show={expanded}>
          <TreeContainer>
            {children.map((child) => (
              <TreeItem key={child.id} {...child} />
            ))}
          </TreeContainer>
        </Fade>
      ) : null}
    </TreeItemStyled>
  );
};

TreeItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default TreeItem;

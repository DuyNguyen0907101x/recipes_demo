import React, { useState, useEffect } from 'react';
import { fetchData } from './data';
import TreeItem from 'components/TreeItem';

// Test of Jordy
const Tree = () => {
  const [tree, setTree] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setTree(data);
    });
  }, []);

  return (
    tree &&
    tree.length > 0 && (
      <ul>
        {tree.map((treeItem) => (
          <TreeItem key={treeItem.id} {...treeItem} />
        ))}
      </ul>
    )
  );
};

export default Tree;

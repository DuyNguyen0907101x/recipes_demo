import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: inline-block;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  margin: 8px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 100%;
  vertical-align: middle;
  transition: transform 0.5s ease;
`;

const ImgOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(123, 123, 123, 0.5);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 9999;
`;

const ImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  &:hover ${ImgOverlay} {
    opacity: 1;
  }

  &:hover ${Img} {
    transform: scale(1.1);
  }
`;

const Description = styled.div`
  overflow: auto;
`;

const Title = styled.h4`
  text-transform: uppercase;
  text-align: center;
  color: #7b7373;
  margin: 0;
  padding: 1rem 1.25rem 2.25rem;
  font-size: 1rem;
`;

const Recipe = ({ contentId, title, imageList }) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <ImgOverlay />
        <Img data-testid="image" src={imageList.landscape32small2x.url} />
      </ImgWrapper>
      <Description>
        <Title data-testid="title">{title}</Title>
      </Description>
    </Wrapper>
  );
};

Recipe.propTypes = {
  contentId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageList: PropTypes.object,
};

export default Recipe;

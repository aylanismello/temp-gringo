import styled from 'styled-components';
import React from 'react';
import Link from 'gatsby-link';

const PostPreviewsStyle = styled.div`
  /* border: 1px solid pink; */

  /* default here is the largest, widest screen */
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 25px;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoint.tabletWide}) {
    grid-template-columns: 47% 47%;
    grid-gap: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 2rem 2rem;
    grid-template-columns: 98%;
    grid-gap: 25px;
  }
`;

const PostPreviewStyle = styled.div`
  /* border: 1px solid green; */
  font-family: ${props => props.theme.fontSubheader};
  line-height: 1.4;
  &:hover {
    cursor: pointer;
  }

  .PostPreviewTag {
    color: #324fca;
    font-size: 15px;
    font-weight: 600;
  }

  .PostPreviewTitle {
    font-size: 16px;
    font-weight: 800;
  }

  .PostPreviewHeroImg {
    width: 100%;
    max-height: 300px;
  }
`;

const PostPreviewImg = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 150px;
`;

const PostPreview = ({ title, heroImg, mainTag }) => (
  <PostPreviewStyle>
    {/* <img src={heroImg} className="PostPreviewHeroImg" /> */}
    <PostPreviewImg src={heroImg} className="PostPreviewImg" />
    <div className="PostPreviewTag"> {mainTag.toUpperCase()} </div>
    <div className="PostPreviewTitle">{title}</div>
  </PostPreviewStyle>
);

const PostPreviews = ({ posts }) => {
  return (
    <PostPreviewsStyle>
      {posts.map((post) => (
        <Link to={`/blog/${post.slug}`}>
          <PostPreview
            title={post.title}
            heroImg={post.heroImage && post.heroImage.sizes.src}
            mainTag={(post.tags && post.tags[0]) ? post.tags[0] : ''}
          />
        </Link>
      ))}
    </PostPreviewsStyle>
  );
};

export default PostPreviews;

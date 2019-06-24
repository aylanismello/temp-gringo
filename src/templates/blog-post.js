import React from "react";
import styled from "styled-components";
import { DiscussionEmbed } from "disqus-react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Base from "../layouts/base";
import Hero from "../components/hero";

const PostContent = styled.div`
  /* border: 1px solid black; */
  padding: 0.5rem 0.5rem;
  font-family: ${props => props.theme.fontPost};
  font-size: 1.5rem;
  line-height: 1.4;
  /* so default will be <= props.theme.breakpoint.mobile.XS / 380px */

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    /* border: 1px solid red; */
    padding: 0.5rem 0.7rem;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    /* border: 1px solid violet; */
    padding: 1.5rem 25px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    /* border: 1px solid aqua; */
    /* padding: 1rem 1.5rem; */
    padding: 1.5rem 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    /* border: 1px solid brown; */
    padding: 1.5rem 160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    /* border: 1px solid orange; */
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    /* border: 1px solid yellow; */
    padding: 1.5rem 350px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    /* border: 1px solid green; */
    padding: 1.5rem 480px;
  }
`;

const PostTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid aqua; */

  padding: 15px 40px;

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    padding: 15px 43px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 15px 95px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 15px 98px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 15px 100px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tabletWide}) {
    padding: 15px 175px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    padding: 15px 275px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    padding: 15px 425px;
  }
`;

const PostTitle = styled.span`
  font-family: ${props => props.theme.fontSubheader};
  font-size: 30px;
  font-weight: 600;
  padding: 1rem;
  /* border: 1px solid red; */
`;

const PostTagsContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  padding: 10px 10px;

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 10px 95px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 10px 98px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 10px 100px;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileXS}) {
    padding: 10px 0;
    display: block;
  }
`;

const PostTags = styled.div`
  /* border: 1px solid red; */
  div:not(:last-child) {
    margin-right: 20px;
  }
`;

const PostTag = styled.div`
  display: inline-block;
  font-family: ${props => props.theme.fontSubheader};
  font-size: 14px;
  border: 1px solid gray;
  border-radius: 100px;
  padding: 10px 15px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${props => props.theme.breakpoint.mobileXS}) {
    /* border:  10px solid yellow; */
    /* padding: 5px 10px; */
    font-size: 14px;
    padding: 5px 10px;
  }
`;

const PostText = styled.div`
  line-height: 1.6;

  img {
    max-width: 100%;
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
  }

  blockquote {
    font-size: 1.1em;
    width: 75%;
    margin: 22px auto;
    font-family: ${props => props.theme.fontSubheader};
    font-style: italic;
    color: #555555;
    border-left: 8px solid #78c0a8;
    line-height: 1.6;
    position: relative;
    background: #ededed;
    padding: 1.2rem;
  }

  /* blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 1.5em 10px;
    padding: 0.5em 10px;
  }
  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: 0.1em;
    margin-right: 0.25em;
    vertical-align: -0.4em;
  }
  blockquote p {
    display: inline;
  } */
`;

class BlogPostTemplate extends React.Component {
  render() {
    const { location } = this.props;

    const post = get(this.props, "data.contentfulBlogPost");
    const country = post.place && post.place.country;
    const { tags } = post;

    const disqusShortname = "intlgringo";
    const disqusConfig = {
      identifier: post.id,
      title: post.title
    };

    return (
      <Base location={location}>
        <div className="Post">
          <PostTagsContainer className="PostTagsContainer">
            <PostTags className="PostTags">
              {tags.map(tag => (
                <PostTag>{tag}</PostTag>
              ))}
              {/* <PostTag> 
                TAgs dude
              </PostTag> */}
            </PostTags>
          </PostTagsContainer>
          <PostTitleContainer className="PostTitleContainer">
            <PostTitle className="PostTitle">{post.title}</PostTitle>
          </PostTitleContainer>
          <Hero className="Hero" src={post.heroImage.sizes.src} />
          <PostContent>
            <PostText
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html
              }}
            />
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </PostContent>
        </div>
      </Base>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  # https://www.contentful.com/developers/docs/concepts/data-model/
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      tags
      place {
        country {
          name
          flag
        }
        coordinates {
          lat
          lon
        }
        city
      }
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

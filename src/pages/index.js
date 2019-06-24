import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import get from "lodash/get";
import MainContent from "../layouts/main_content";
import Base from "../layouts/base";
import PostPreviews from "../components/post_previews";
import AylanStats from "../components/aylan_stats";

const AylanPic = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 15px;
  position: relative;
  /* padding: 5px 20px; */
  /* padding: 0 30px; */
`;

const AylanEmoji = styled.div`
  /* font-size: 7rem;
  position: absolute;
  bottom: -90px;
  right: 50px; */
`;

const AylanDescription = styled.div``;

const AylanBio = styled.div`
  /* http://grid.malven.co/ */
  display: grid;
  grid-template-columns: 40% auto;
  padding-top: 2rem;
  grid-template-rows: auto;
  grid-gap: 50px;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoint.mobileM}) {
    grid-template-columns: auto;
    justify-items: center;
  }
`;

class Index extends React.Component {
  render() {
    const { location } = this.props;
    // const { title, description, keywords } = get(
    //   this,
    //   'props.data.site.siteMetadata'
    // );

    const posts = get(this, "props.data.allContentfulBlogPost.edges");
    const places = get(this, "props.data.allContentfulPlace.edges");
    const countries = get(this, "props.data.allContentfulCountry.edges");

    return (
      <Base location={location}>
        <div className="Index">
          <MainContent className="PageContent">
            <AylanBio className="AylanBio">
              <AylanPic
                src="https://res.cloudinary.com/burncartel/image/upload/c_scale,q_65,w_600/v1561276078/aylan_1_pai.jpg"
                className="AylanPic"
              />

              <AylanDescription className="AylanDescription">
                Hi. My name is Aylan Mello and I travel the world so{" "}
                <span style={{ fontStyle: "italic" }}>
                  {" "}
                  you don’t have to.{" "}
                </span>
                <br />
                <br />
                Or maybe… I will be the final push. That last push you needed to
                quit your office job and join the Digital Nomads and Backpackers
                I find myself amongst these days.
                <br />
                <br />
                So welcome to Internationally Gringo - where you fit in
                everywhere and nowhere. And since you asked -
                <a
                  href="https://super.abril.com.br/mundo-estranho/por-que-estrangeiro-e-chamado-de-gringo/"
                  target="_blank"
                >
                  {" "}
                  “gringo” is Brazilian slang for foreigner.{" "}
                </a>
              </AylanDescription>
              {/* <AylanEmoji className="AylanEmoji">
                👋
              </AylanEmoji> */}
              {/* </div> */}
            </AylanBio>

            <AylanStats
              numCities={places.length}
              numCountries={countries.length}
            />

            <PostPreviews
              className="PostPreviews"
              posts={posts.map(p => p.node)}
              data={[
                "Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)",
                "6 months in Southeast Asia, but Vietnam still shocks",
                "The Good, the Bad, and the South of Thailand",
                "Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)",
                "6 months in Southeast Asia, but Vietnam still shocks",
                "The Good, the Bad, and the South of Thailand",
                "Traveling spontaneously in an archipelago (thoughts on adjusting to the Philippines)",
                "6 months in Southeast Asia, but Vietnam still shocks",
                "The Good, the Bad, and the South of Thailand"
              ]}
            />
          </MainContent>
        </div>
      </Base>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPlace {
      edges {
        node {
          city
          country {
            name
          }
        }
      }
    }
    allContentfulCountry {
      edges {
        node {
          name
        }
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes {
              src
            }
          }
        }
      }
    }
  }
`;

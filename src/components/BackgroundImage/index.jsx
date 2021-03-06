import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GlobalContext } from "../../pages"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, children }) => {
  const { setBackgroundIsLoaded } = useContext(GlobalContext)
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "backgrounds/deskPhoto.webp" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      fadeIn="soft"
      critical={true}
      loading="eager"
      onLoad={() => {
        setBackgroundIsLoaded(true)
      }}
    >
      {children}
    </BackgroundImage>
  )
}

export default BackgroundSection

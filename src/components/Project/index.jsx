import React, { useState } from "react"
import GitHubIcon from "@material-ui/icons/Github"
import { useSpring, animated } from "react-spring"
import classNames from "classnames"
import navigator from "../../js/navigator"
import imageInfo from "../../json/imageInfo.json"
import DemoLineNYT from "../DemoLineNYT"
import DemoLineSnippets from "../DemoLineSnippets"
import SlideAnimation from "../SlideAnimation"
import Images from "../../images"

const images = [...Images]

const Project = ({ props, index }) => {
  const [mouseIn, hoverChange] = useState(false)
  const hoverAnimation = useSpring({
    opacity: mouseIn ? 0.9 : 0,
    transform: mouseIn ? "scale(1, 1)" : "scale(0.2,0.2)",
  })
  return (
    <animated.div style={props} className="hiddenImage" key={index}>
      <div className="projectOpaqueBackground">
        <div className="repoImageWrapper">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={imageInfo[index].deployLink}
          >
            <img
              onMouseEnter={() => hoverChange(true)}
              onMouseLeave={() => hoverChange(false)}
              className="repoImages"
              src={images[index]}
              alt={imageInfo[index].appName}
            />
            {/* {!navigator() ? (
              <SlideAnimation
                index={index}
                imageInfo={imageInfo}
                hoverChange={hoverChange}
                hoverAnimation={hoverAnimation}
                animated={animated}
              />
            ) : (
              <div />
            )} */}
          </a>
        </div>
        <div className="repoUrlDiv">
          <a
            id="noDecoration"
            target="_blank"
            rel="noopener noreferrer"
            href={imageInfo[index].deployLink}
          >
            <span
              className={classNames("repoUrlLinks", {
                repoUrlLinksHover: !navigator(),
              })}
            >
              {imageInfo[index].appName}
            </span>
          </a>
          <span id="paddingDivider">|</span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={imageInfo[index].repoLink}
          >
            <span
              className={classNames("repoUrlLinks", {
                repoUrlLinksHover: !navigator(),
              })}
            >
              <GitHubIcon />
            </span>
          </a>
          <div className="shortBio">{imageInfo[index].shortBio}</div>
        </div>
        {/* <div>
          <br />
          {imageInfo[index].appName === "Best Seller Searcher" && (
            <DemoLineNYT />
          )}
          {imageInfo[index].appName === "Snippets." && <DemoLineSnippets />}
        </div> */}
      </div>
    </animated.div>
  )
}

export default Project
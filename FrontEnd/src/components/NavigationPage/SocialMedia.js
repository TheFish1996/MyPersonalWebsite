import '../../styles/NavigationPage/SocialMedia.css';
import React, {useState, useEffect} from "react";
import {
    Row,
    Col,
  } from "reactstrap";
import {Link} from 'react-router-dom'

const github = require("../../img/github.svg")
const githubreverse = require("../../img/githubreverse.svg")
const linkedin = require("../../img/linkedin.svg")
const linkedinreverse = require("../../img/linkedinreverse.svg")
const resume = require("../../img/resume.svg")
const resumereverse = require("../../img/resumereverse.svg")
const email = require("../../img/email.svg")
const emailreverse = require("../../img/emailreverse.svg")
const pdf = require("../../img/Resume.pdf")

function SocialMedia(props){

    const [githubAnimation, setgithubAnimation] = useState("")
    const [linkedInAnimation, setLinkedInAnimation] = useState("")
    const [resumeAnimation, setResumeAnimation] = useState("")
    const [emailAnimation, setEmailAnimation] = useState("")

    function creategithubAnimation(val){
        if(val === 1) setgithubAnimation("navigationPageGithubForward")
        if(val === 2){
          setgithubAnimation("navigationPageGithubBack")
          setTimeout(() => {
            setgithubAnimation("")
          }, 150)
        }  
      }

    function createLinkedInAnimation(val){
        if(val === 1) setLinkedInAnimation("navigationPageGithubForward")
        if(val === 2){
            setLinkedInAnimation("navigationPageGithubBack")
          setTimeout(() => {
            setLinkedInAnimation("")
          }, 150)
        }  
    }

    function createResumeAnimation(val){
        if(val === 1) setResumeAnimation("navigationPageGithubForward")
        if(val === 2){
            setResumeAnimation("navigationPageGithubBack")
          setTimeout(() => {
            setResumeAnimation("")
          }, 150)
        }  
    }

    function createEmailAnimation(val){
        if(val === 1) setEmailAnimation("navigationPageGithubForward")
        if(val === 2){
            setEmailAnimation("navigationPageGithubBack")
          setTimeout(() => {
            setEmailAnimation("")
          }, 150)
        }  
    }


    return (
        <Col className={"navigationPageSocialMedia"} xl="4">
            <div className="navigationPageGithub">
                <a target="_blank" href="https://github.com/TheFish1996">
                    <svg width="75px" height="75px">
                        <circle className={githubAnimation}cx="50px" cy="50px" r="2px" />
                        <image xlinkHref={githubAnimation === "" ? github : githubreverse} onMouseEnter={() => {creategithubAnimation(1)}} onMouseLeave={() => {creategithubAnimation(2)}} fill="white" x="37px" y="38px"  height="25px" width="25px"/>
                    </svg>
                </a>
            </div>
            <div className="navigationPageGithub">
                <a target="_blank" href="https://www.linkedin.com/in/jonathan-fishkin-966737160/">
                    <svg width="75px" height="75px">
                        <circle className={linkedInAnimation}cx="50px" cy="50px" r="2px" />
                        <image xlinkHref={linkedInAnimation === "" ? linkedin : linkedinreverse} onMouseEnter={() => {createLinkedInAnimation(1)}} onMouseLeave={() => {createLinkedInAnimation(2)}} fill="white" x="37px" y="38px"  height="25px" width="25px"/>
                    </svg>
                </a>
            </div>
            <div className="navigationPageGithub">
                <a target="_blank" href={pdf}>
                    <svg width="75px" height="75px">
                        <circle className={resumeAnimation}cx="50px" cy="50px" r="2px" />
                        <image xlinkHref={resumeAnimation === "" ? resume : resumereverse} onMouseEnter={() => {createResumeAnimation(1)}} onMouseLeave={() => {createResumeAnimation(2)}} fill="white" x="37px" y="38px"  height="25px" width="25px"/>
                    </svg>
                </a>
            </div>
            <div className="navigationPageGithub">
                <a target="_blank" href={pdf}>
                    <svg width="75px" height="75px">
                        <circle className={emailAnimation}cx="50px" cy="50px" r="2px" />
                        <image xlinkHref={emailAnimation === "" ? email : emailreverse} onMouseEnter={() => {createEmailAnimation(1)}} onMouseLeave={() => {createEmailAnimation(2)}} fill="white" x="37px" y="38px"  height="25px" width="25px"/>
                    </svg>
                </a>
            </div>     
        </Col>
    )
}

export default SocialMedia
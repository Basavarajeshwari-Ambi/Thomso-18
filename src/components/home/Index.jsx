import React from 'react';

import ScrollFunction from './functions/Scroll';
import './css/style.css';

let scrollInit = false;

export default class HomeIndex extends React.Component{
    constructor(){
        super();
        this.state = {
        };
    }

    componentDidMount() {
        scrollInit = false;
        setTimeout( () => this.initScorll(), 100 );
        let check = setInterval( () => {
            this.initScorll(check)
        }, 1000)
    }

    initScorll = check => {
        if (window.ScrollMagic && window.ScrollMagic.Scene && window.TimelineMax && window.TweenMax && window.Power0 && window.Power3 && window.Power1 && window.Sine && !scrollInit) {
            if (check) {
                clearInterval(check)
            }
            scrollInit = true
            ScrollFunction();
        }
    }

    render(){
        return(
            <div>
                {/* <!-- Main web 1 --> */}
                <div className="mainfirst" id="main parallaxscene">
                    <div className="mainfirst1" datadepth="0.6">   
                        <div className="mainnavbarcontainer">
                            <div className="mainnavhome">
                                <div className="home-navbar-logo">
                                    {/* <img src="./thomso logo-01.png" alt=""> */}
                                </div>
                                <div className="homenavbarctos">
                                        <div className="toggle">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>	
                                        </div>
                                    {/* <!-- <a className="mainregisterlogin" href="#">Register/Login</a> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="containermaincontent">
                            <div className="leftsidebar">
                                <div className="leftsidebarcontent ">
                                    {/* <!-- <a href="#" className="leftsidebarevents" onmouseover="float" >Events</a> --> */}
                                    <a href="#" className="leftsidebarevents">Events</a>
                                </div>
                                <div className="leftsidebarcontent">
                                    <a href="#" className="leftsidebarpronites">Pronites</a>
                                </div>
                                <div className="leftsidebarcontent">
                                    <a href="#" className="leftsidebarsponsors">Sponsors</a>
                                </div>
                                <div className="leftsidebarcontent">
                                    <a href="#" id="aboutuspagerevealer" className="leftsidebarcontactus">
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                            <div className="centreimage" id="centreimagetrans">
                                {/* <img src="./thomsomain.png" alt=""> */}
                            </div>
                            <div className="rightsidebar">
                                <div className="rightsidebarcontent">
                                    <a href="#">Register/Login</a>
                                </div>
                                <div className="rightsidebarcontent">
                                    <a href="#">Why Thomso</a>
                                </div>
                                <div className="rightsidebarcontent">
                                    <a href="#">Zonals</a>
                                </div>
                                <div className="rightsidebarcontent">
                                    <a>Follow And Share</a>
                                </div>            
                            </div>
                            <div className="mobileviewoptions-parent">
                                <div className="mobileviewoptions" id="mobopid">
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Register/Login</a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Events</a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Pronites </a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Sponsors</a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Zonals</a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Why Thomso</a>
                                        </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Contact Us</a>
                                    </div>
                                    <div className="mobileviewoptionscontent">
                                        <a href="#" target="_blank" rel="noopener noreferrer">Follow & Share</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
                {/* <!-- Main web 2 --> */}
                <div className="mainsecond" >
                        <div className="maincontainersecond">
                            <div className="maincontainersecondleft"></div>
                            <div className="maincontainersecondright" id="aboutuspagemove">
                                <h1 id="aboutus">About Us</h1>
                                <h4>
                                    Thomso , the Annual Cultural Festival of IIT Roorkee is a majestic three days cultural fest,recognised as one of the greatest pomp youth festivals of India.Thomso
                                    encompasses lavish history , splendid culture and a profoundly rich heritage of IIT Roorkee. Recognising this event of gigantic proportions ,
                                    the Government proclaimed Thomso as the "Annual Youth Festival Of Uttarakhand " in 2005. Thomso has acquired the credentials of being the largest cultural fest of Northern India
                                    by playing host to a multitude of talented scholars and media moguls in an annual celebration of culture and intellect. Thomso now celebrates its 36th year with this 
                                    year's theme being "Siezed by Stardust".
                                </h4>
                            </div>
                        </div>
                        <div className="secondpagebottom">
                            <div className="secondpagebottomrect" id="pagereveal">
                                <div className="secondbottomrectleft">
                                    <h1 id="numberchange1">4000</h1>
                                    <h3>Footfall</h3>
                                </div>
                                <div className="secondbottomrectright">
                                    {/* <img src="./foot svg-01.svg" alt=""> */}
                                </div>
                            </div>
                            <div className="secondpagebottomrect">
                                <div className="secondbottomrectleft">
                                    <h1 id="numberchange2">1000</h1>
                                    <h3 >Colleges</h3>
                                </div>
                                <div className="secondbottomrectright">
                                    {/* <img src="./college svg-01.svg" alt=""> */}
                                </div>
                        </div>
                            <div className="secondpagebottomrect">
                                <div className="secondbottomrectleft">
                                    <h1 id="trigger2" >40</h1>
                                    <h3>Events</h3>
                                </div>
                                <div className="secondbottomrectright">
                                    {/* <img src="./events svg-01.svg" alt=""> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Main web 3 --> */}
                    <div className="mainthirdpagecontainer" >
                        {/* <!-- First page pseudo --> */}
                        {/* <!-- First page --> */}
                        <div className="mainthirdinternalcontainer" id="litfestanimationtrigger">
                            <div className="splitsvgcont1">
                                <svg version="1.1" className="splitlit" x="0px" y="0px" width="612px" height="792px" viewBox="0 0 612 792" enableBackground="new 0 0 612 792">
                                    <g>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="450.397,438.752 341.321,490.775 336.055,402.83 
                                            335.322,390.833 356.143,399.503 424.965,428.146 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="417.224,630.045 215.79,629.816 283.259,568.193"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="215.443,629.816 192.605,629.777 194.733,577.443"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="362.26,134.238 310.971,13.276 325.027,13.276 "/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="399.963,237.396 311.05,159.747 311.05,158.393 
                                            362.26,134.238 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="416.609,286.09 311.127,270.528 311.127,269.755 
                                            399.963,237.396 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="475.173,379.764 392.258,379.49 416.609,286.09 	"/>
                                        <polygon className="gon" fill="#3A7ABA" points="416.609,286.09 311.164,341.558 311.127,270.528 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="362.26,134.238 311.05,158.393 310.971,13.276 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="399.963,237.396 311.127,269.755 311.05,159.747 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="278.383,392.459 172.322,467.127 137.563,379.84 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="299.594,28.376 275.52,151.115 286.897,12.58 
                                            299.479,12.699 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="301.878,341.521 254.229,279.818 300.831,198.224 
                                            300.831,200.354 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="254.229,279.818 137.563,379.84 192.18,285.856 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="300.831,198.224 254.229,279.818 192.18,285.856 
                                            299.709,199.112 300.792,198.224 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="300.792,198.224 299.709,199.112 192.18,285.856 
                                            235.688,176.779 255.39,183.67 293.825,196.21 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="300.792,198.224 293.825,196.21 255.39,183.67 
                                            235.688,176.779 235.879,176.277 239.598,164.354 275.52,151.115 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="286.897,12.58 275.52,151.115 239.598,164.354 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="300.831,195.206 300.831,198.224 300.792,198.224 
                                            275.52,151.115 299.594,28.376 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="301.878,341.521 300.177,342.72 278.383,357.121 
                                            254.229,279.818 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#282828" points="301.878,341.521 300.33,342.911 300.177,342.72 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="306.367,407.748 194.733,577.443 172.322,467.127 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="278.383,357.121 278.383,392.459 137.563,379.84 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="278.383,357.121 137.563,379.84 254.229,279.818 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="306.367,407.748 172.322,467.127 278.383,392.459 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="416.609,286.09 335.322,390.833 335.289,357.121 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="416.609,286.09 335.289,357.121 311.164,341.558 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="416.609,286.09 392.258,379.49 335.322,390.833 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="450.397,438.752 424.965,428.146 356.143,399.503 
                                            335.322,390.833 392.258,379.49 404.107,391.532 432.707,420.715 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="341.321,490.775 306.367,407.748 335.322,390.833 
                                            336.055,402.83 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="341.321,490.775 194.733,577.443 306.367,407.748 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="421.293,547.096 283.259,568.193 341.321,490.775 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="341.321,490.775 283.259,568.193 194.733,577.443 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="283.259,568.193 215.79,629.816 215.443,629.816 
                                            194.733,577.443 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#282828" points="215.79,629.816 215.52,630.045 215.443,629.816 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="421.293,547.096 417.224,630.045 283.259,568.193 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="450.397,438.752 421.293,547.096 341.321,490.775 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="475.173,379.764 450.397,438.752 432.707,420.715 
                                            404.107,391.532 392.258,379.49 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="210.178,713.813 136.827,779.42 175.535,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="322.544,779.42 136.827,779.42 236.81,743.848 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="244.552,677.039 236.81,743.848 210.178,713.813 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="370.817,721.555 236.81,743.848 244.552,677.039 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="313.762,643.051 244.552,677.039 175.535,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="434.878,643.051 370.817,721.555 313.762,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="473.587,779.42 421.293,716.25 434.878,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="473.587,779.42 405.188,779.42 413.781,745.746 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="405.188,779.42 322.544,779.42 370.817,721.555 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="421.293,716.25 413.781,745.746 370.817,721.555 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="236.81,743.848 136.827,779.42 210.178,713.813 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="244.552,677.039 210.178,713.813 175.535,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="370.817,721.555 322.544,779.42 236.81,743.848 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#41B6C4" points="370.817,721.555 244.552,677.039 313.762,643.051 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#1F91C0" points="434.878,643.051 421.293,716.25 370.817,721.555 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#80CDBB" points="413.781,745.746 405.188,779.42 370.817,721.555 	"/>
                                        <polygon className="gon" fillRule="evenodd" clipRule="evenodd" fill="#3A7ABA" points="473.587,779.42 413.781,745.746 421.293,716.25 	"/>
                                    </g>
                                </svg>
                                    
                            </div>
                            <div className="thomsomainattractions" id="m3move">
                                <svg version="1.1" x="0px" y="0px" width="609.333px" height="212.171px" viewBox="0 0 609.333 212.171" enableBackground="new 0 0 609.333 212.171">
                                    <g id="Layer_3" display="none">
                                    </g>
                                    <g id="bg">
                                    </g>
                                    <g id="Layer_2">
                                    </g>
                                    <g id="team_page">
                                    </g>
                                    <g id="footer">
                                    </g>
                                    <g id="pronites">
                                    </g>
                                    <g id="main_attractions">
                                        <path fill="#fff"  d="M147.142,114.696c0.2,0.4,0.2,0.8,0,1.2c-0.4,0.933-0.867,1.666-1.4,2.2c-0.666,0.666-1.434,1-2.299,1
                                            c-2.268,0-4.234-1.2-5.9-3.6c-1.467-2.134-2.801-5.333-4-9.6c-2.2-7.8-3.301-17.2-3.301-28.2c0-2.6,0.166-5.283,0.5-8.05
                                            c0.334-2.766,0.566-5.65,0.701-8.65v-0.2c-0.535,3.4-1.268,6.917-2.201,10.55c-0.934,3.634-1.867,7.717-2.799,12.25
                                            c-0.535,2.067-0.984,3.85-1.351,5.35c-0.367,1.5-0.75,2.917-1.149,4.25c-0.4,1.334-0.885,2.7-1.451,4.1s-1.316,3-2.25,4.8
                                            c-0.533,1.134-1.117,2.1-1.75,2.9c-0.634,0.8-1.25,1.467-1.85,2c-1.4,1.268-2.734,1.9-4,1.9c-1.6,0-3.135-0.633-4.6-1.9
                                            c-1.268-1.065-2.467-2.732-3.6-5c-1.068-2.133-1.9-4.7-2.5-7.7c-0.601-3-1.135-6.7-1.601-11.1v-0.1c-0.935-7.4-1.935-15-3-22.8
                                            c-0.067,0.067-0.101,0.134-0.101,0.2c0,0.067-0.017,0.135-0.049,0.2c-0.035,0.067-0.051,0.134-0.051,0.2
                                            c-0.534,1.4-1.117,3.067-1.75,5c-0.635,1.934-1.316,4.167-2.05,6.7c-0.734,2.067-1.417,4.05-2.05,5.95
                                            c-0.635,1.9-1.25,3.717-1.85,5.45c-0.468,1.334-0.885,2.617-1.25,3.85c-0.367,1.234-0.718,2.45-1.051,3.65
                                            c-0.4,1.667-0.816,3.234-1.25,4.7c-0.434,1.467-0.55,2.967-0.35,4.5c0.199,1.467,0.5,2.685,0.9,3.65
                                            c0.399,0.967,0.832,1.85,1.299,2.65c0.266,0.535,0.467,1.1,0.601,1.7c0.133,0.6,0.116,1.1-0.05,1.5
                                            c-0.168,0.4-0.551,0.65-1.15,0.75s-1.5-0.15-2.699-0.75c-0.668-0.333-1.268-0.8-1.801-1.4c-0.534-0.6-1-1.25-1.4-1.95
                                            c-0.399-0.7-0.717-1.383-0.949-2.05c-0.234-0.666-0.418-1.266-0.551-1.8c-0.533-1.933-0.634-4.05-0.299-6.35
                                            c0.332-2.3,0.865-4.783,1.6-7.45c0.133-0.533,0.4-1.366,0.8-2.5c0.399-1.133,0.8-2.315,1.2-3.55c0.4-1.233,0.8-2.366,1.199-3.4
                                            c0.4-1.033,0.666-1.75,0.801-2.15c0.666-1.733,1.3-3.516,1.9-5.35c0.6-1.833,1.165-3.715,1.699-5.65
                                            c1.865-6.2,3.25-11.833,4.15-16.9c0.9-5.065,1.35-9.565,1.35-13.5c0-2,0.365-3.565,1.1-4.7c0.934-1.266,2.201-1.9,3.801-1.9
                                            c1.933,0,4.565,1.267,7.9,3.8c0.532,0.334,0.665,0.867,0.399,1.6c-0.134,0.334-0.267,0.834-0.399,1.5
                                            c-0.135,0.667-0.25,1.617-0.351,2.85c-0.101,1.234-0.185,2.785-0.25,4.65c-0.067,1.867-0.101,4.135-0.101,6.8
                                            c0,6.067,0.201,11.817,0.601,17.25c0.399,5.434,0.933,10.55,1.601,15.35c0.399,2.867,0.732,5.3,1,7.3
                                            c0.266,2,0.665,3.935,1.199,5.8c0.266,0.867,0.7,1.685,1.301,2.45c0.6,0.767,1.165,1.185,1.699,1.25
                                            c0.333-0.266,0.65-0.583,0.95-0.95c0.3-0.365,0.665-0.9,1.101-1.6c0.432-0.7,0.915-1.616,1.449-2.75
                                            c0.865-1.866,1.615-4.1,2.25-6.7c0.633-2.6,1.416-5.733,2.35-9.4c1.666-6.666,3-12.766,4-18.3c1-5.533,1.967-10.633,2.9-15.3
                                            c0.066-0.933,0.115-1.716,0.15-2.35c0.033-0.633,0.05-1.2,0.05-1.7s0-0.983,0-1.45c0-0.466,0-1.033,0-1.7c0-0.8,0.05-1.5,0.149-2.1
                                            c0.101-0.6,0.217-1.166,0.351-1.7c0.133-0.4,0.399-0.916,0.8-1.55c0.4-0.633,0.934-0.95,1.6-0.95c2.066,0,3.766,0.134,5.101,0.4
                                            c0.933,0.134,1.716,0.285,2.351,0.45c0.633,0.167,1.215,0.384,1.75,0.65c0.799,0.4,1.35,0.867,1.649,1.4
                                            c0.3,0.535,0.483,0.967,0.55,1.3c0,0.4-0.034,0.667-0.1,0.8c-0.135,0.2-0.301,0.717-0.5,1.55c-0.2,0.834-0.467,2.285-0.801,4.35
                                            c-0.267,1.667-0.533,3.617-0.799,5.85c-0.268,2.234-0.568,4.75-0.9,7.55c-1.2,11.334-1.801,20.4-1.801,27.2
                                            c0,10.534,0.701,18.2,2.101,23c1.333,4.4,3.3,6.966,5.899,7.7C146.708,114.029,147.007,114.296,147.142,114.696z M223.883,75.651
                                            c-0.63-0.3-1.08-0.45-1.35-0.45c-0.931,0-1.61,0.45-2.05,1.35c-0.431,0.9-0.78,1.91-1.051,3.05c-0.46,2-1,4.1-1.6,6.3
                                            s-1.26,4.46-2,6.8c-0.73,2.2-1.4,3.96-2,5.3c-0.6,1.33-1.1,2.36-1.5,3.1c-0.4,0.73-0.71,1.21-0.95,1.45
                                            c-0.229,0.23-0.38,0.38-0.45,0.45c-0.06,0-0.18-0.12-0.35-0.35c-0.16-0.24-0.35-0.7-0.55-1.4c-0.2-0.7-0.36-1.72-0.5-3.05
                                            c-0.13-1.34-0.2-3.1-0.2-5.3c0-1.74,0.1-3.62,0.3-5.65c0.2-2.04,0.47-4.25,0.8-6.65c0.471-2.74,0.771-4.57,0.9-5.5
                                            c0.14-0.94,0.24-1.47,0.3-1.6v-0.3c0-1-0.43-2.02-1.3-3.05c-0.86-1.04-2.7-1.65-5.5-1.85c-0.33,0-0.63,0.1-0.9,0.3
                                            c-1.199,0.73-1.899,2.86-2.1,6.4c-0.4,4.66-1.6,10.1-3.6,16.3c-0.33,0.86-0.66,1.96-1,3.3c-0.33,1.33-0.761,2.96-1.301,4.9v0.1
                                            c-0.199-0.87-0.3-2.44-0.3-4.7c0-0.4,0.021-1.04,0.05-1.9c0.04-0.87,0.051-1.97,0.051-3.3c0.069-1.34,0.1-2.54,0.1-3.6v-2.7
                                            c0-0.54,0.07-1.07,0.2-1.6c0.14-0.54,0.3-1.14,0.5-1.8c0.34-1.2,0.54-1.95,0.6-2.25c0.07-0.3,0.101-0.52,0.101-0.65
                                            c0-1-0.301-1.8-0.9-2.4c-0.6-0.6-1.46-0.9-2.6-0.9c-2.061,0-3.4,0.86-4,2.6c-0.131,0.26-0.25,0.68-0.351,1.25
                                            c-0.08,0.43-0.16,1.12-0.25,2.08c-0.52,1.82-1.02,3.41-1.5,4.77c-0.53,1.53-0.96,2.83-1.3,3.9c-1,3.2-1.89,5.7-2.7,7.5
                                            c-0.8,1.8-1.26,2.9-1.39,3.3c-0.67,1.73-1.2,2.88-1.61,3.45c-0.39,0.56-0.66,0.88-0.8,0.95c-0.39-0.07-0.71-0.34-0.95-0.8
                                            c-0.229-0.47-0.39-1.02-0.5-1.65c-0.09-0.64-0.16-1.25-0.189-1.85c-0.04-0.6-0.061-1.07-0.061-1.4c0-2,0.09-3.89,0.25-5.65
                                            c0.17-1.77,0.45-3.72,0.86-5.85c0.33-1.54,0.609-3,0.84-4.4c0.24-1.4,0.42-2.37,0.55-2.9c0-0.14,0.061-0.4,0.16-0.8
                                            c0.09-0.4,0.21-0.84,0.34-1.3c0.141-0.47,0.25-0.9,0.36-1.3c0.09-0.4,0.14-0.7,0.14-0.9c0-0.4-0.25-0.87-0.75-1.4
                                            c-0.5-0.54-1.68-0.97-3.55-1.3c-1-0.2-1.75-0.34-2.25-0.4c-0.5-0.07-0.84-0.04-1.04,0.1c-0.21,0.13-0.3,0.36-0.3,0.7v1.5
                                            c0,0.66-0.07,1.98-0.2,3.95c-0.06,0.82-0.13,1.75-0.229,2.79l-1.271,3.56c-0.4,1.2-0.92,2.91-1.55,5.15
                                            c-0.641,2.23-1.62,4.71-2.95,7.45c-0.67,1.33-1.22,2.41-1.65,3.25c-0.439,0.83-0.79,1.46-1.05,1.9c-0.27,0.43-0.47,0.73-0.6,0.9
                                            c-0.141,0.16-0.24,0.25-0.3,0.25c-0.07-0.07-0.19-0.22-0.351-0.45c-0.17-0.24-0.39-0.72-0.649-1.45c-0.54-1.8-0.74-3.6-0.601-5.4
                                            c0.13-1,0.25-2.04,0.351-3.1c0.1-1.07,0.21-2.07,0.35-3c0.13-0.67,0.28-1.34,0.45-2c0.16-0.67,0.35-1.3,0.55-1.9
                                            c0.13-0.27,0.11-0.5-0.05-0.7c-0.17-0.2-0.351-0.37-0.55-0.5c-0.271-0.14-0.54-0.24-0.801-0.3c-0.199-0.14-0.39-0.25-0.55-0.35
                                            c-0.17-0.1-0.39-0.19-0.649-0.25c-0.271-0.07-0.5-0.19-0.7-0.35c-0.2-0.17-0.44-0.25-0.7-0.25c-0.14,0-0.3-0.02-0.5-0.05
                                            c-0.2-0.04-0.37-0.05-0.5-0.05h-0.55c-0.24,0-0.45,0.13-0.65,0.4c-0.2,0.26-0.25,0.5-0.149,0.7c0.1,0.2,0.109,0.56,0.05,1.1
                                            c-0.07,0.53-0.141,1.03-0.2,1.5c-0.07,0.46-0.17,0.96-0.3,1.5c-0.34,1.73-0.601,3.43-0.8,5.1c-0.2,1.66-0.67,3.46-1.4,5.4
                                            c-0.74,2.13-1.4,3.76-2,4.9c-0.6,1.13-1.04,1.7-1.3,1.7c-0.141,0-0.37-0.09-0.7-0.25c-0.34-0.17-0.57-0.39-0.7-0.65
                                            c-0.47-0.94-0.7-1.94-0.7-3c0-3.4,0.2-6.7,0.601-9.9c0.53-2.67,1.229-5.54,2.1-8.6c0.86-3.07,1.53-5.24,2-6.5
                                            c0.46-1.27,0.8-2.07,1-2.4c0.86,0.13,1.53,0.78,2,1.95c0.46,1.16,0.8,2.55,1,4.15c0.061,0.46,0.21,0.75,0.45,0.85
                                            c0.23,0.1,0.5,0.1,0.8,0s0.561-0.25,0.8-0.45c0.23-0.2,0.41-0.37,0.551-0.5c0.26-0.4,0.529-1.04,0.8-1.9
                                            c0.26-0.87,0.229-2.37-0.101-4.5c-0.14-0.94-0.489-1.84-1.05-2.7c-0.569-0.87-1.24-1.62-2-2.25c-0.77-0.64-1.59-1.14-2.45-1.5
                                            c-0.869-0.37-1.67-0.55-2.399-0.55c-1,0-1.851,0.45-2.55,1.35c-0.7,0.9-1.29,1.78-1.75,2.65c-0.341,0.66-0.7,1.53-1.101,2.6
                                            c-0.399,1.06-0.819,2.23-1.25,3.5c-0.439,1.26-0.84,2.53-1.2,3.8c-0.369,1.26-0.689,2.43-0.949,3.5c-0.4,1.93-0.74,3.75-1,5.45
                                            c-0.271,1.7-0.44,3.18-0.5,4.45c-0.2,7.86,0.899,13.03,3.3,15.5c1.26,1.13,2.66,1.7,4.2,1.7c3.13,0,5.56-2.4,7.3-7.2
                                            c0.26,0.53,0.51,0.98,0.75,1.35c0.229,0.36,0.45,0.71,0.649,1.05c1.2,1.73,2.86,2.6,5,2.6c1.131,0,2.08-0.47,2.851-1.4
                                            c0.76-0.94,1.41-1.87,1.95-2.8c0.659-1.2,1.43-2.7,2.3-4.5c0.1-0.2,0.189-0.4,0.28-0.61c0.079,0.95,0.22,1.84,0.42,2.66
                                            c0.33,1.36,0.8,2.61,1.39,3.75c0.94,1.53,1.92,2.53,2.96,3c1.03,0.46,1.98,0.7,2.84,0.7c2.54,0,4.67-1.87,6.41-5.6
                                            c0.33-0.67,0.78-1.85,1.34-3.55c0.57-1.7,1.32-4.05,2.25-7.05c0-0.01,0.01-0.02,0.01-0.03c0.021,0.61,0.051,1.22,0.091,1.83
                                            c0.069,1.33,0.14,2.68,0.199,4.05c0.07,1.36,0.141,2.71,0.2,4.05v0.1c0.2,1.26,0.521,2.26,0.95,3c0.44,0.73,0.92,1.3,1.45,1.7
                                            c0.54,0.4,1.09,0.66,1.649,0.8c0.57,0.13,1.051,0.2,1.45,0.2c0.8,0,1.49-0.24,2.05-0.7c0.57-0.47,1.021-1.02,1.351-1.65
                                            c0.34-0.64,0.6-1.27,0.8-1.9c0.2-0.64,0.37-1.12,0.5-1.45c0.67-2.47,1.27-4.72,1.8-6.75c0.54-2.04,1-3.89,1.4-5.55
                                            c0.14,2.33,0.29,4.3,0.45,5.9c0.17,1.6,0.35,2.86,0.55,3.8c1,5.86,3.27,8.8,6.8,8.8c1.67,0,3.3-1.54,4.9-4.6
                                            c1.47-2.87,3.04-6.87,4.699-12c2.601-7.8,3.9-12.8,3.9-15C224.833,76.801,224.523,75.951,223.883,75.651z M182.633,58.301
                                            c-0.859-0.94-2.09-1.4-3.689-1.4c-0.94,0-2,0.53-3.2,1.6c-1.07,1.06-1.61,2.16-1.61,3.3c0,1.33,0.54,2.63,1.61,3.9
                                            c1,1.33,2.359,2,4.09,2c0.27,0,0.64-0.05,1.11-0.15c0.46-0.1,0.93-0.34,1.39-0.7c0.47-0.37,0.86-0.92,1.16-1.65
                                            c0.3-0.74,0.45-1.7,0.45-2.9C183.943,60.561,183.503,59.231,182.633,58.301z M301.436,111.196c0,0.133-0.034,0.35-0.1,0.65
                                            c-0.067,0.3-0.218,0.6-0.45,0.9c-0.234,0.3-0.584,0.566-1.05,0.8c-0.468,0.233-1.101,0.35-1.9,0.35c-0.667,0-1.35-0.067-2.05-0.2
                                            c-0.7-0.134-1.518-0.334-2.45-0.6c-0.334-0.134-0.567-0.3-0.7-0.5c-0.467-0.534-0.899-1.2-1.3-2c-0.399-0.8-0.834-1.733-1.3-2.8
                                            c-2.067-4.933-4.135-11.8-6.2-20.6c-2.2,0.334-4.517,0.534-6.95,0.6c-2.434,0.067-5.017,0.167-7.75,0.3
                                            c-2.734,0.134-4.984,0.267-6.75,0.4c-1.767,0.135-3.084,0.234-3.949,0.3c-1.535,2.534-2.95,5.1-4.25,7.7
                                            c-1.301,2.6-2.75,5.2-4.351,7.8c0,0.067-0.034,0.1-0.1,0.1c-2.534,3.8-5.135,6.732-7.8,8.8c-1.335,1-2.885,1.716-4.65,2.15
                                            c-1.768,0.433-3.484-0.017-5.15-1.35c-1.199-0.934-1.717-1.7-1.55-2.3c0.166-0.6,0.733-1.2,1.7-1.8c0.966-0.6,2.15-1.316,3.55-2.15
                                            c1.4-0.833,2.766-1.982,4.101-3.45c1.399-1.6,2.949-3.75,4.649-6.45c1.7-2.7,3.383-5.416,5.05-8.15h-2c-1.199,0-2.134-0.2-2.8-0.6
                                            c-0.935-0.533-1.399-1.333-1.399-2.4c0-0.133,0.05-0.35,0.149-0.65c0.101-0.3,0.351-0.583,0.75-0.85c0.2-0.065,0.5-0.166,0.9-0.3
                                            c0.665-0.2,1.5-0.4,2.5-0.6c0.466-0.066,0.85-0.15,1.149-0.25c0.301-0.1,0.601-0.2,0.9-0.3c0.3-0.1,0.7-0.2,1.2-0.3
                                            s1.25-0.216,2.25-0.35c1.933-3.266,4.016-7.25,6.25-11.95c2.232-4.7,4.516-10.083,6.85-16.15c1.133-2.865,2.183-5.433,3.15-7.7
                                            c0.966-2.266,1.716-4.266,2.25-6c0.732-2.133,1.2-3.65,1.399-4.55c0.2-0.9,0.301-1.516,0.301-1.85c0-0.066-0.018-0.116-0.051-0.15
                                            c-0.034-0.033-0.05-0.083-0.05-0.15c-0.267-0.465-0.399-0.933-0.399-1.4c0-1.2,0.6-2,1.8-2.4c0.6-0.333,1.665-0.5,3.2-0.5
                                            c1.266,0,3.065,0.767,5.399,2.3c1.333,0.935,2.283,1.7,2.851,2.3c0.565,0.6,0.85,1.2,0.85,1.8c0,1.467-0.1,2.7-0.3,3.7
                                            c-0.067,0.334-0.117,0.6-0.15,0.8c-0.034,0.2-0.05,0.367-0.05,0.5v0.4c0,5.267,0.4,11.134,1.2,17.6
                                            c0.8,6.467,2.032,13.534,3.7,21.2c1.266,6.134,2.482,11.434,3.649,15.9c1.166,4.467,2.283,8.1,3.351,10.9
                                            c0.199,0.534,0.5,0.967,0.899,1.3c0.866,0.6,1.433,1.067,1.7,1.4C301.336,110.596,301.436,110.862,301.436,111.196z
                                                M282.735,81.696c-0.134-0.666-0.3-1.65-0.5-2.95c-0.199-1.3-0.467-3.016-0.8-5.15c-2.2-13.133-3.5-21.866-3.899-26.2v-0.1
                                            c0-0.466-0.018-0.916-0.051-1.35c-0.034-0.433-0.084-0.883-0.149-1.35c-0.734,1.734-1.667,4.035-2.8,6.9
                                            c-1.135,2.867-2.468,6.334-4,10.4c-1.668,4.534-3.218,8.467-4.65,11.8c-1.435,3.334-2.75,6.167-3.95,8.5L282.735,81.696z
                                                M504.523,94.051c-0.4-2.04-1.07-4.52-2-7.45c-0.87-2.8-1.521-5.2-1.95-7.2c-0.431-2-0.65-3.67-0.65-5c0-0.67,0.17-1.67,0.5-3
                                            c0.271-1,0.43-1.67,0.5-2c0.07-0.34,0.101-0.57,0.101-0.7c0-0.27-0.051-0.59-0.15-0.95c-0.1-0.37-0.3-0.74-0.6-1.1
                                            c-0.301-0.37-0.771-0.69-1.4-0.95c-0.63-0.27-1.45-0.4-2.45-0.4c-1.33,0-2.37,0.38-3.1,1.15c-0.73,0.76-1.101,1.81-1.101,3.15
                                            c0,2.26-0.1,4.41-0.3,6.45c-0.2,2.03-0.57,3.95-1.1,5.75c-0.46,1.8-0.931,3.63-1.4,5.5c-0.02,0.09-0.04,0.17-0.06,0.26
                                            c-0.021,0.04-0.03,0.09-0.04,0.13c-0.471,1.63-0.971,3.3-1.5,5.01c-0.73,2.2-1.4,3.96-2,5.3c-0.601,1.33-1.101,2.36-1.5,3.1
                                            c-0.4,0.73-0.721,1.21-0.95,1.45c-0.23,0.23-0.38,0.38-0.45,0.45c-0.07,0-0.18-0.12-0.35-0.35c-0.17-0.24-0.351-0.7-0.55-1.4
                                            c-0.2-0.7-0.37-1.72-0.5-3.05c-0.131-1.34-0.2-3.1-0.2-5.3c0-1.74,0.1-3.62,0.3-5.65c0.2-2.04,0.47-4.25,0.8-6.65
                                            c0.47-2.74,0.771-4.57,0.9-5.5c0.13-0.94,0.229-1.47,0.3-1.6v-0.3c0-1-0.43-2.02-1.3-3.05c-0.87-1.04-2.7-1.65-5.5-1.85
                                            c-0.33,0-0.63,0.1-0.9,0.3c-1.2,0.73-1.899,2.86-2.1,6.4c-0.4,4.66-1.601,10.1-3.601,16.3c-0.33,0.86-0.67,1.96-1,3.3
                                            c-0.33,1.33-0.77,2.96-1.3,4.9v0.1c-0.2-0.87-0.3-2.44-0.3-4.7c0-0.4,0.02-1.04,0.05-1.9c0.03-0.87,0.05-1.97,0.05-3.3
                                            c0.07-1.34,0.101-2.54,0.101-3.6v-2.7c0-0.54,0.069-1.07,0.2-1.6c0.13-0.54,0.3-1.14,0.5-1.8c0.329-1.2,0.529-1.95,0.6-2.25
                                            c0.07-0.3,0.1-0.52,0.1-0.65c0-1-0.3-1.8-0.899-2.4c-0.601-0.6-1.471-0.9-2.601-0.9c-2.069,0-3.399,0.86-4,2.6
                                            c-0.13,0.26-0.25,0.68-0.35,1.25c-0.1,0.56-0.22,1.58-0.35,3.05c0,0.18,0.06,0.38,0.159,0.62c-0.229,0.92-0.43,1.67-0.609,2.23
                                            c-0.36,1.16-0.61,1.95-0.75,2.35c-0.73,1.53-1.48,2.46-2.25,2.8c-0.76,0.33-1.45,0.5-2.05,0.5c-0.46,0-0.86-0.14-1.2-0.4
                                            c0-2.87-0.03-5.24-0.101-7.1c-0.06-1.87-0.13-3.35-0.189-4.45c-0.07-1.1-0.16-1.92-0.25-2.45c-0.101-0.54-0.19-0.94-0.25-1.2
                                            c-0.73-2.07-2.26-3.94-4.58-5.6c-2.32-1.74-4.51-2.6-6.57-2.6c-0.399,0-0.83,0.05-1.29,0.15c-0.47,0.1-0.93,0.31-1.39,0.65
                                            c-0.47,0.33-0.91,0.8-1.351,1.4c-0.43,0.6-0.739,1.4-0.939,2.4c-0.33,1.33-0.57,2.3-0.7,2.9s-0.229,1.03-0.3,1.3
                                            c-0.4,0.4-0.66,1.1-0.79,2.1v0.07c-0.07,0.1-0.14,0.21-0.19,0.33c-0.21,0.4-0.369,0.81-0.5,1.25c-0.14,0.43-0.239,0.78-0.31,1.05
                                            c-0.59,2.13-1.16,3.96-1.69,5.5c-0.54,1.53-0.97,2.83-1.31,3.9c-1,3.2-1.9,5.7-2.69,7.5c-0.81,1.8-1.27,2.9-1.399,3.3
                                            c-0.67,1.73-1.2,2.88-1.601,3.45c-0.399,0.56-0.67,0.88-0.81,0.95c-0.4-0.07-0.71-0.34-0.94-0.8c-0.239-0.47-0.399-1.02-0.5-1.65
                                            c-0.1-0.64-0.17-1.25-0.21-1.85c-0.029-0.6-0.04-1.07-0.04-1.4c0-2,0.08-3.89,0.25-5.65c0.16-1.77,0.44-3.72,0.851-5.85
                                            c0.33-1.54,0.609-3,0.84-4.4c0.24-1.4,0.42-2.37,0.56-2.9c0-0.14,0.04-0.4,0.15-0.8c0.1-0.4,0.21-0.84,0.35-1.3
                                            c0.131-0.47,0.25-0.9,0.351-1.3c0.09-0.4,0.149-0.7,0.149-0.9c0-0.4-0.25-0.87-0.75-1.4c-0.5-0.54-1.689-0.97-3.56-1.3
                                            c-1-0.2-1.75-0.34-2.25-0.4c-0.5-0.07-0.84-0.04-1.04,0.1c-0.21,0.13-0.3,0.36-0.3,0.7v1.5c0,0.53-0.05,1.49-0.13,2.88
                                            c0,0,0,0,0,0.01c-0.13,0.44-0.28,0.95-0.471,1.51c-0.199,0.6-0.399,1.33-0.6,2.2c-0.87,3.66-1.72,6.88-2.55,9.65
                                            c-0.84,2.76-1.62,5.05-2.351,6.85c-0.54,1.13-0.989,2-1.35,2.6c-0.37,0.6-0.69,1.06-0.95,1.4c-0.27,0.33-0.54,0.56-0.8,0.7
                                            c-0.14,0-0.39-0.34-0.75-1c-0.37-0.67-0.65-2.07-0.85-4.2c-0.07-0.74-0.12-2.09-0.15-4.05c-0.04-1.97-0.05-4.55-0.05-7.75
                                            c0-0.14,0.01-0.4,0.05-0.8c0.03-0.4,0.1-1.07,0.2-2c0.1-0.94,0.21-2.2,0.35-3.8c0.13-1.6,0.33-3.67,0.601-6.2
                                            c0.33-3,0.58-5.52,0.75-7.55c0.159-2.04,0.31-3.52,0.449-4.45l3.101-0.2c0.729,0,1.6-0.04,2.6-0.1c1-0.07,2.26-0.27,3.8-0.6
                                            c0.221-0.04,0.44-0.08,0.65-0.12c-0.77,0.91-1.15,1.85-1.15,2.82c0,1.33,0.53,2.63,1.601,3.9c1,1.33,2.359,2,4.09,2
                                            c0.27,0,0.64-0.05,1.1-0.15c0.471-0.1,0.94-0.34,1.4-0.7c0.47-0.37,0.85-0.92,1.16-1.65c0.3-0.74,0.439-1.7,0.439-2.9
                                            c0-1.74-0.43-3.07-1.29-4c-0.55-0.59-1.229-0.99-2.069-1.2c0.109-0.21,0.17-0.45,0.17-0.7v-0.7c0-0.87-0.47-1.37-1.4-1.5
                                            c-1.6-0.07-2.84-0.12-3.7-0.15c-0.869-0.04-1.59-0.07-2.149-0.1c-0.57-0.04-1.101-0.07-1.601-0.1c-0.5-0.04-1.189-0.05-2.05-0.05
                                            c-0.939,0-1.54-0.02-1.8-0.05c-0.27-0.04-0.44-0.07-0.5-0.1c-0.07-0.04-0.15-0.05-0.25-0.05h-0.85c0.199-0.94,0.38-1.79,0.55-2.55
                                            c0.16-0.77,0.31-1.52,0.45-2.25v-2.6c0-0.47-0.2-0.87-0.601-1.2c-2.2-1.4-3.899-2.1-5.1-2.1c-1.141,0-1.97,0.53-2.5,1.6
                                            c-0.07,0.2-0.101,0.5-0.101,0.9l0.5,1.7c-0.069,1.4-0.14,2.63-0.199,3.7c-0.07,1.06-0.141,1.96-0.2,2.7
                                            c-0.601,0.06-1.09,0.11-1.45,0.15c-0.37,0.03-0.69,0.06-0.95,0.1c-0.27,0.03-0.54,0.06-0.8,0.1c-0.27,0.03-0.6,0.08-1,0.15
                                            c-1.34,0.26-2.12,0.65-2.35,1.15c-0.24,0.5-0.351,0.85-0.351,1.05c0,0.33,0.11,0.75,0.351,1.25c0.229,0.5,0.81,0.91,1.75,1.25
                                            c0.529,0.2,0.899,0.4,1.1,0.6c0.2,0.2,0.36,0.33,0.5,0.4c0.2,0.13,0.56,0.28,1.1,0.45c0.53,0.16,1.101,0.18,1.7,0.05
                                            c-0.93,8.36-1.6,14.9-2.03,19.62c0,0.01-0.01,0.02-0.01,0.02c-0.16,0.58-0.35,1.37-0.56,2.36c-1.141,4.93-2.3,8.83-3.5,11.7
                                            c-1.2,2.86-2.351,5.05-3.45,6.55s-2.07,2.46-2.9,2.9c-0.84,0.43-1.449,0.65-1.85,0.65c-0.34,0-0.65-0.17-0.95-0.5
                                            c-0.3-0.34-0.55-0.7-0.75-1.1c-0.67-1.34-1-3.07-1-5.2c0-9.27,1.101-15.67,3.3-19.2c0.46,0.53,1.16,0.8,2.101,0.8
                                            c0.33,0,0.85-0.3,1.55-0.9s1.25-1.64,1.65-3.1c0.199-0.67,0.21-1.45,0.05-2.35c-0.17-0.9-0.62-1.82-1.351-2.75
                                            c-0.739-0.94-1.369-1.5-1.899-1.7c-0.54-0.2-1.17-0.3-1.9-0.3c-2.8,0-5.24,3.06-7.3,9.2c-0.34,1-0.64,1.99-0.92,2.98
                                            c0,0,0,0.01-0.01,0.02l-1.57,4.4c-0.4,1.2-0.92,2.91-1.55,5.15c-0.641,2.23-1.62,4.71-2.95,7.45c-0.67,1.33-1.22,2.41-1.65,3.25
                                            c-0.439,0.83-0.79,1.46-1.05,1.9c-0.27,0.43-0.47,0.73-0.6,0.9c-0.141,0.16-0.24,0.25-0.3,0.25c-0.07-0.07-0.19-0.22-0.351-0.45
                                            c-0.17-0.24-0.39-0.72-0.649-1.45c-0.54-1.8-0.74-3.6-0.601-5.4c0.13-1,0.25-2.04,0.351-3.1c0.1-1.07,0.21-2.07,0.35-3
                                            c0.13-0.67,0.28-1.34,0.45-2c0.16-0.67,0.35-1.3,0.55-1.9c0.13-0.27,0.11-0.5-0.05-0.7c-0.17-0.2-0.351-0.37-0.55-0.5
                                            c-0.271-0.14-0.54-0.24-0.801-0.3c-0.199-0.14-0.39-0.25-0.55-0.35c-0.17-0.1-0.39-0.19-0.649-0.25c-0.271-0.07-0.5-0.19-0.7-0.35
                                            c-0.2-0.17-0.44-0.25-0.7-0.25c-0.14,0-0.3-0.02-0.5-0.05c-0.2-0.04-0.37-0.05-0.5-0.05h-0.55c-0.24,0-0.45,0.13-0.65,0.4
                                            c-0.2,0.26-0.25,0.5-0.149,0.7c0.1,0.2,0.109,0.56,0.05,1.1c-0.07,0.53-0.141,1.03-0.2,1.5c-0.07,0.46-0.17,0.96-0.3,1.5
                                            c-0.34,1.73-0.601,3.43-0.8,5.1c-0.2,1.66-0.67,3.46-1.4,5.4c-0.74,2.13-1.4,3.76-2,4.9c-0.6,1.13-1.04,1.7-1.3,1.7
                                            c-0.141,0-0.37-0.09-0.7-0.25c-0.34-0.17-0.57-0.39-0.7-0.65c-0.47-0.94-0.7-1.94-0.7-3c0-3.4,0.2-6.7,0.601-9.9
                                            c0.53-2.67,1.229-5.54,2.1-8.6c0.86-3.07,1.53-5.24,2-6.5c0.46-1.27,0.8-2.07,1-2.4c0.86,0.13,1.53,0.78,2,1.95
                                            c0.46,1.16,0.8,2.55,1,4.15c0.061,0.46,0.21,0.75,0.45,0.85c0.23,0.1,0.5,0.1,0.8,0s0.561-0.25,0.8-0.45
                                            c0.23-0.2,0.41-0.37,0.551-0.5c0.26-0.4,0.529-1.04,0.8-1.9c0.26-0.87,0.229-2.37-0.101-4.5c-0.14-0.94-0.489-1.84-1.05-2.7
                                            c-0.569-0.87-1.24-1.62-2-2.25c-0.77-0.64-1.59-1.14-2.45-1.5c-0.869-0.37-1.67-0.55-2.399-0.55c-1,0-1.851,0.45-2.55,1.35
                                            c-0.7,0.9-1.29,1.78-1.75,2.65c-0.341,0.66-0.7,1.53-1.101,2.6c-0.359,0.94-0.729,1.97-1.109,3.08
                                            c-0.04,0.14-0.091,0.28-0.141,0.42c-0.03,0.07-0.05,0.15-0.069,0.22c-0.421,1.19-0.79,2.38-1.131,3.58
                                            c-0.369,1.26-0.689,2.43-0.949,3.5c-0.36,1.75-0.681,3.42-0.92,4.98c-0.011,0.01-0.011,0.02-0.011,0.03
                                            c-0.439,1.38-0.93,2.84-1.47,4.39c-0.73,2.06-1.35,3.75-1.85,5.05c-0.5,1.3-0.931,2.33-1.301,3.1c-0.369,0.76-0.67,1.3-0.899,1.6
                                            c-0.23,0.3-0.38,0.48-0.45,0.55c-0.33,0-0.67-0.2-1-0.6c-0.33-0.4-0.5-1.4-0.5-3c0-0.4,0.02-0.8,0.05-1.2s0.08-0.9,0.15-1.5
                                            c0.069-0.6,0.149-1.37,0.25-2.3c0.1-0.94,0.22-2.1,0.35-3.5c0.2-2,0.37-3.64,0.5-4.9c0.13-1.27,0.22-2.27,0.25-3
                                            c0.03-0.74,0.07-1.29,0.101-1.65c0.029-0.37,0.05-0.62,0.05-0.75c0-2.74-1.8-4.97-5.4-6.7c-1.47-0.74-2.43-1.27-2.899-1.6
                                            c-0.471-0.34-0.73-0.57-0.801-0.7v-1.1c0-0.47,0.07-1.17,0.2-2.1c0.2-1.67,0.271-2.84,0.2-3.5c-0.07-1-0.25-1.82-0.55-2.45
                                            c-0.3-0.64-0.63-1.12-1-1.45c-0.37-0.34-0.75-0.55-1.15-0.65c-0.399-0.1-0.729-0.15-1-0.15c-0.47,0-0.95,0.1-1.45,0.3
                                            c-0.5,0.2-0.949,0.55-1.35,1.05s-0.73,1.18-1,2.05c-0.27,0.86-0.4,2-0.4,3.4c0,1.26,0.33,2.7,1,4.3c0.33,0.93,0.53,1.65,0.601,2.15
                                            c0.069,0.5,0.1,0.81,0.1,0.95c0,1.07-0.12,2.31-0.37,3.74c-0.14,0.48-0.29,1.04-0.43,1.66c-0.87,3.66-1.72,6.88-2.55,9.65
                                            c-0.83,2.76-1.62,5.05-2.351,6.85c-0.529,1.13-0.979,2-1.35,2.6c-0.37,0.6-0.68,1.06-0.95,1.4c-0.27,0.33-0.53,0.56-0.8,0.7
                                            c-0.13,0-0.38-0.34-0.75-1c-0.37-0.67-0.65-2.07-0.85-4.2c-0.07-0.74-0.12-2.09-0.15-4.05c-0.03-1.97-0.05-4.55-0.05-7.75
                                            c0-0.14,0.02-0.4,0.05-0.8s0.1-1.07,0.2-2c0.1-0.94,0.22-2.2,0.35-3.8c0.13-1.6,0.33-3.67,0.601-6.2c0.33-3,0.58-5.52,0.75-7.55
                                            c0.17-2.04,0.319-3.52,0.449-4.45l3.101-0.2c0.729,0,1.6-0.04,2.6-0.1c1-0.07,2.271-0.27,3.8-0.6c2.33-0.4,3.83-0.74,4.5-1
                                            c0.67-0.27,1.101-0.54,1.301-0.8c0.199-0.27,0.3-0.57,0.3-0.9v-0.7c0-0.87-0.47-1.37-1.4-1.5c-1.6-0.07-2.83-0.12-3.7-0.15
                                            c-0.869-0.04-1.58-0.07-2.149-0.1c-0.57-0.04-1.101-0.07-1.601-0.1c-0.5-0.04-1.18-0.05-2.05-0.05c-0.93,0-1.53-0.02-1.8-0.05
                                            c-0.27-0.04-0.43-0.07-0.5-0.1c-0.07-0.04-0.15-0.05-0.25-0.05h-0.85c0.199-0.94,0.38-1.79,0.55-2.55
                                            c0.17-0.77,0.319-1.52,0.45-2.25v-2.6c0-0.47-0.2-0.87-0.601-1.2c-2.2-1.4-3.899-2.1-5.1-2.1c-1.13,0-1.97,0.53-2.5,1.6
                                            c-0.07,0.2-0.101,0.5-0.101,0.9l0.5,1.7c-0.069,1.4-0.13,2.63-0.199,3.7c-0.07,1.06-0.131,1.96-0.2,2.7
                                            c-0.601,0.06-1.08,0.11-1.45,0.15c-0.37,0.03-0.68,0.06-0.95,0.1c-0.229,0.03-0.45,0.05-0.67,0.08c-0.46-0.02-1.03-0.03-1.729-0.03
                                            c-0.931,0-1.53-0.02-1.801-0.05c-0.26-0.04-0.43-0.07-0.5-0.1c-0.06-0.04-0.149-0.05-0.25-0.05h-0.85c0.2-0.94,0.38-1.79,0.55-2.55
                                            c0.17-0.77,0.32-1.52,0.45-2.25v-2.6c0-0.47-0.2-0.87-0.6-1.2c-2.2-1.4-3.9-2.1-5.101-2.1c-1.13,0-1.96,0.53-2.5,1.6
                                            c-0.06,0.2-0.1,0.5-0.1,0.9l0.5,1.7c-0.07,1.4-0.13,2.63-0.2,3.7c-0.06,1.06-0.13,1.96-0.2,2.7c-0.6,0.06-1.08,0.11-1.45,0.15
                                            c-0.359,0.03-0.68,0.06-0.949,0.1c-0.271,0.03-0.53,0.06-0.801,0.1c-0.26,0.03-0.6,0.08-1,0.15c-1.33,0.26-2.109,0.65-2.35,1.15
                                            c-0.23,0.5-0.35,0.85-0.35,1.05c0,0.33,0.119,0.75,0.35,1.25c0.24,0.5,0.82,0.91,1.75,1.25c0.54,0.2,0.9,0.4,1.1,0.6
                                            c0.2,0.2,0.37,0.33,0.5,0.4c0.2,0.13,0.57,0.28,1.101,0.45c0.54,0.16,1.1,0.18,1.7,0.05c-0.931,8.46-1.61,15.06-2.051,19.8
                                            c-0.43,4.73-0.649,7.93-0.649,9.6c0,5.13,0.67,9.43,2,12.9c1.54,3.86,3.569,5.8,6.1,5.8c1.8,0,3.521-1.22,5.15-3.65
                                            c1-1.48,2.01-3.47,3.04-5.95c0.29,1.36,0.66,2.63,1.109,3.8c1.53,3.86,3.57,5.8,6.101,5.8c1.8,0,3.52-1.22,5.149-3.65
                                            c1.631-2.44,3.32-6.22,5.051-11.35c1.33-4,2.3-7.29,2.899-9.85c0.28-1.2,0.49-2.26,0.65-3.17c0.14-0.62,0.26-1.18,0.35-1.68
                                            c1.2,0.8,1.931,1.45,2.2,1.95s0.4,0.81,0.4,0.95v16.3c0.13,2.46,0.319,4.2,0.55,5.2c0.229,1,0.479,1.66,0.75,2
                                            c1.729,3.06,3.97,4.6,6.7,4.6c0.47,0,0.979-0.17,1.55-0.5c0.569-0.34,1.2-1.04,1.899-2.1c0.53-0.81,1.11-1.88,1.73-3.23
                                            c0.54,2.58,1.42,4.49,2.62,5.73c1.26,1.13,2.66,1.7,4.2,1.7c3.13,0,5.56-2.4,7.3-7.2c0.26,0.53,0.51,0.98,0.75,1.35
                                            c0.229,0.36,0.45,0.71,0.649,1.05c1.2,1.73,2.86,2.6,5,2.6c1.131,0,2.08-0.47,2.851-1.4c0.76-0.94,1.41-1.87,1.95-2.8
                                            c0.659-1.2,1.43-2.7,2.3-4.5c0.16-0.33,0.31-0.66,0.46-1.01c0.41,2.4,1.09,4.43,2.04,6.11c1.8,3.2,4.399,4.8,7.8,4.8
                                            c2.8,0,5.2-1.94,7.2-5.8c0.93-1.6,1.859-3.8,2.8-6.6c0.28-0.86,0.58-1.77,0.88-2.75c0.311,2.81,0.89,5.29,1.72,7.45
                                            c1.53,3.86,3.561,5.8,6.101,5.8c1.8,0,3.51-1.22,5.149-3.65c0.86-1.29,1.74-2.95,2.631-5c0.069,0.97,0.21,1.87,0.409,2.7
                                            c0.341,1.36,0.811,2.61,1.4,3.75c0.94,1.53,1.92,2.53,2.96,3c1.03,0.46,1.98,0.7,2.85,0.7c2.53,0,4.66-1.87,6.4-5.6
                                            c0.33-0.67,0.78-1.85,1.35-3.55c0.41-1.23,0.91-2.8,1.521-4.72c0.22,4.07,0.89,7.26,2.01,9.57c1.53,3.2,3.88,4.8,7.07,4.8
                                            c2.58,0,4.74-1.4,6.46-4.2c0.399-0.67,0.83-1.57,1.3-2.7c0.46-1.14,0.99-2.57,1.59-4.3v-0.2c0.2-0.8,0.38-1.55,0.55-2.25
                                            c0.16-0.7,0.311-1.39,0.44-2.05c0.94,0.33,1.57,0.55,1.9,0.65c0.34,0.1,0.6,0.15,0.8,0.15c2.02,0,3.779-0.83,5.279-2.48
                                            c0.021,0.82,0.061,1.65,0.12,2.48c0.07,1.33,0.13,2.68,0.2,4.05c0.07,1.36,0.13,2.71,0.2,4.05v0.1c0.2,1.26,0.52,2.26,0.95,3
                                            c0.43,0.73,0.92,1.3,1.45,1.7c0.529,0.4,1.079,0.66,1.649,0.8c0.57,0.13,1.05,0.2,1.45,0.2c0.8,0,1.479-0.24,2.05-0.7
                                            c0.57-0.47,1.021-1.02,1.351-1.65c0.329-0.64,0.6-1.27,0.8-1.9c0.2-0.64,0.37-1.12,0.5-1.45c0.67-2.47,1.27-4.72,1.8-6.75
                                            c0.53-2.04,1-3.89,1.4-5.55c0.13,2.33,0.279,4.3,0.449,5.9c0.17,1.6,0.351,2.86,0.551,3.8c1,5.86,3.27,8.8,6.8,8.8
                                            c1.67,0,3.3-1.54,4.899-4.6c0.011-0.02,0.021-0.05,0.03-0.07c0.33,0.89,0.92,1.78,1.771,2.67c2,2.2,4.27,3.3,6.8,3.3
                                            c2.399,0,4.43-1.24,6.1-3.7c1.47-2.14,2.2-4.94,2.2-8.4C505.123,97.731,504.923,96.081,504.523,94.051z M315.583,80.001
                                            c-0.1,1.16-0.2,2.23-0.28,3.2c-0.649,2.61-1.29,4.96-1.92,7.05c-0.83,2.76-1.609,5.05-2.35,6.85c-0.53,1.13-0.98,2-1.351,2.6
                                            c-0.359,0.6-0.68,1.06-0.949,1.4c-0.271,0.33-0.53,0.56-0.801,0.7c-0.13,0-0.38-0.34-0.75-1c-0.359-0.67-0.649-2.07-0.85-4.2
                                            c-0.06-0.74-0.12-2.09-0.15-4.05c-0.029-1.97-0.05-4.55-0.05-7.75c0-0.14,0.021-0.4,0.05-0.8c0.03-0.4,0.101-1.07,0.2-2
                                            c0.101-0.94,0.22-2.2,0.351-3.8c0.14-1.6,0.34-3.67,0.6-6.2c0.34-3,0.59-5.52,0.75-7.55c0.17-2.04,0.32-3.52,0.45-4.45l3.1-0.2
                                            c0.74,0,1.601-0.04,2.601-0.1c0.159-0.01,0.34-0.03,0.52-0.05c0.03,0.02,0.05,0.04,0.08,0.05c0.2,0.13,0.57,0.28,1.1,0.45
                                            c0.53,0.16,1.101,0.18,1.7,0.05C316.703,68.661,316.013,75.261,315.583,80.001z M447.673,95.551c-0.3,1.23-0.95,2.95-1.95,5.15
                                            c-0.6,1.26-1.05,2.11-1.35,2.55c-0.3,0.43-0.51,0.71-0.65,0.85c-0.659-0.07-1.199-0.45-1.6-1.15c-0.4-0.7-0.71-1.57-0.95-2.6
                                            c-0.229-1.04-0.38-2.12-0.45-3.25c-0.06-1.14-0.1-2.17-0.1-3.1c0-1.54,0.14-3.35,0.4-5.45c0.27-2.1,0.67-4.55,1.199-7.35
                                            c0.341-1.8,0.65-3.27,0.95-4.4c0.3-1.14,0.57-2.02,0.8-2.65c0.24-0.64,0.44-1.09,0.601-1.35c0.17-0.27,0.29-0.44,0.35-0.5
                                            c0.54,0,0.97,0.15,1.3,0.45c0.341,0.3,0.5,0.91,0.5,1.85v0.85c0,0.36-0.029,0.81-0.1,1.35c-0.13,0.53-0.2,1-0.2,1.4v1.1
                                            c0,0.33,0.05,0.9,0.15,1.7c0.1,0.8,0.35,2.26,0.75,4.4c0.27,1.53,0.47,2.93,0.6,4.2c0.141,1.26,0.2,2.36,0.2,3.3
                                            C448.123,93.431,447.973,94.311,447.673,95.551z M497.423,103.901c-0.399,0.73-0.82,1.18-1.25,1.35
                                            c-0.43,0.16-0.82,0.25-1.149,0.25c-0.801,0-1.671-0.97-2.601-2.9c-0.07-1.34-0.37-2.15-0.899-2.45c-0.351-0.2-0.66-0.33-0.921-0.39
                                            c0.73-1.87,1.48-3.97,2.25-6.33c0,0,0-0.01,0.011-0.02c0.09-0.11,0.18-0.24,0.26-0.36c0.33-0.5,0.6-1.02,0.8-1.55
                                            c0.2-0.54,0.37-0.94,0.5-1.2v-0.1c0.271-0.8,0.5-1.62,0.7-2.45c0.2-0.84,0.43-1.65,0.7-2.45c0.13,0.4,0.25,0.81,0.35,1.25
                                            c0.101,0.43,0.22,0.81,0.351,1.15v0.1c1.329,4.6,2,8.2,2,10.8C498.523,100.801,498.153,102.561,497.423,103.901z M17.794,159.564
                                            c-2.68,0.668-4.311,3.382-3.643,6.061c0.668,2.68,3.383,4.311,6.062,3.643l0.034-0.009c0,0,0.553-0.138,1.623-0.404
                                            c1.066-0.258,2.65-0.64,4.716-1.14c4.151-0.99,10.269-2.397,18.084-4.086c7.812-1.703,17.329-3.651,28.271-5.783
                                            c10.949-2.092,23.32-4.387,36.863-6.628c13.531-2.311,28.242-4.504,43.818-6.732c15.592-2.095,32.049-4.241,49.124-6.011
                                            c17.064-1.889,34.743-3.38,52.722-4.744c4.494-0.336,9.012-0.578,13.541-0.874c4.531-0.263,9.072-0.608,13.629-0.808
                                            c4.556-0.208,9.121-0.419,13.691-0.628l6.857-0.315l6.865-0.199c4.578-0.13,9.155-0.26,13.729-0.39l3.43-0.097l3.428-0.034
                                            c2.285-0.022,4.567-0.045,6.849-0.067c4.562-0.044,9.115-0.088,13.654-0.132c4.539,0.043,9.065,0.087,13.573,0.131
                                            c4.508,0.066,9.001,0.047,13.467,0.182c4.467,0.141,8.911,0.28,13.328,0.418c8.84,0.192,17.554,0.746,26.132,1.2
                                            c8.585,0.371,16.995,1.159,25.241,1.777c8.254,0.553,16.287,1.512,24.123,2.307c1.958,0.206,3.903,0.408,5.834,0.61
                                            c1.933,0.197,3.851,0.393,5.744,0.666c3.793,0.503,7.528,0.999,11.201,1.486c3.674,0.487,7.286,0.966,10.832,1.436
                                            c3.536,0.528,6.994,1.127,10.389,1.67c3.393,0.553,6.715,1.095,9.963,1.625c1.624,0.265,3.229,0.527,4.814,0.786
                                            c1.585,0.262,3.136,0.601,4.676,0.893c6.151,1.206,11.985,2.35,17.469,3.425c1.369,0.277,2.725,0.515,4.043,0.812
                                            c1.316,0.306,2.611,0.606,3.883,0.901c2.543,0.59,4.994,1.159,7.35,1.706c4.713,1.093,9.041,2.098,12.95,3.005
                                            c15.496,4.202,24.351,6.603,24.351,6.603s-8.815-2.552-24.242-7.019c-3.896-0.974-8.209-2.053-12.905-3.227
                                            c-2.349-0.588-4.792-1.199-7.328-1.833c-1.268-0.317-2.559-0.64-3.872-0.968c-1.314-0.319-2.666-0.581-4.032-0.881
                                            c-5.472-1.17-11.294-2.415-17.433-3.728c-1.537-0.318-3.085-0.684-4.668-0.974c-1.583-0.286-3.186-0.576-4.808-0.869
                                            c-3.243-0.586-6.562-1.185-9.951-1.797c-3.391-0.602-6.846-1.262-10.381-1.85c-3.544-0.532-7.153-1.073-10.826-1.624
                                            c-3.673-0.551-7.408-1.112-11.201-1.681c-1.895-0.306-3.813-0.534-5.745-0.766c-1.932-0.234-3.877-0.472-5.837-0.71
                                            c-7.839-0.93-15.88-2.029-24.143-2.724c-8.255-0.76-16.68-1.694-25.279-2.213c-8.594-0.602-17.328-1.306-26.189-1.649
                                            c-4.429-0.215-8.884-0.43-13.362-0.647c-4.479-0.211-8.984-0.269-13.506-0.412c-4.523-0.121-9.063-0.242-13.618-0.363
                                            c-4.555-0.034-9.124-0.067-13.701-0.101c-2.29-0.017-4.581-0.034-6.874-0.05l-3.441-0.024l-3.442,0.04
                                            c-4.592,0.051-9.188,0.104-13.784,0.155l-6.894,0.083l-6.888,0.199c-4.592,0.132-9.178,0.265-13.754,0.397
                                            c-4.578,0.122-9.141,0.391-13.693,0.578c-4.551,0.219-9.093,0.385-13.61,0.646c-18.069,1.061-35.85,2.256-53.017,3.862
                                            c-17.181,1.486-33.746,3.359-49.447,5.198c-15.686,1.971-30.508,3.923-44.15,6.015c-13.652,2.021-26.132,4.118-37.186,6.035
                                            c-11.047,1.958-20.664,3.756-28.57,5.339c-7.909,1.57-14.111,2.886-18.344,3.819c-2.124,0.475-3.752,0.839-4.85,1.084
                                            c-1.091,0.252-1.654,0.383-1.654,0.383C17.857,159.549,17.813,159.56,17.794,159.564z M49.995,184.429
                                            c0.023-0.008,0.046-0.016,0.068-0.025c2.59-0.962,3.908-3.839,2.946-6.429c-0.962-2.589-3.84-3.908-6.429-2.946
                                            c0,0-0.5,0.186-1.467,0.545c-0.137,0.053-0.281,0.109-0.434,0.17c-0.176,0.071-0.313,0.121-0.712,0.305l-0.204,0.101
                                            c-0.123,0.064-0.245,0.133-0.365,0.206c-0.275,0.168-0.543,0.369-0.787,0.591c0.929-1.725-3.359,3.287-0.492,6.866
                                            c0.592,1.258,3.758,1.999,3.52,1.801c0.169,0.011,0.339,0.014,0.509,0.01l0.337-0.02l0.15-0.016l0.24-0.033l0.278-0.048
                                            c0.225-0.048,0.458-0.099,0.702-0.151c0.734-0.186,1.584-0.402,2.547-0.646c3.658-0.958,9.021-2.363,15.849-4.152
                                            c13.639-3.5,33.194-8.263,56.843-13.204c23.645-4.946,51.381-10.065,81.281-14.414c29.895-4.361,61.953-7.938,94.122-10.082
                                            c32.166-2.166,64.438-2.874,94.667-2.04c30.229,0.803,58.398,3.168,82.399,6.315c24.009,3.122,43.839,6.989,57.63,10.057
                                            c6.897,1.531,12.292,2.85,15.964,3.771c3.668,0.941,5.624,1.442,5.624,1.442s-1.946-0.539-5.596-1.55
                                            c-3.654-0.993-9.023-2.416-15.895-4.082c-13.739-3.336-33.515-7.592-57.511-11.185c-23.986-3.619-52.186-6.538-82.5-7.93
                                            c-30.313-1.423-62.724-1.34-95.069,0.209c-32.348,1.529-64.625,4.499-94.756,8.301c-30.135,3.789-58.123,8.396-82.008,12.912
                                            c-23.887,4.511-43.675,8.925-57.484,12.187c-6.881,1.661-12.287,2.966-15.974,3.856c-0.876,0.205-1.651,0.385-2.319,0.542
                                            c-0.109,0.021-0.215,0.042-0.314,0.062c-0.025,0.005,0.016-0.004,0.035-0.006l0.12-0.017l0.091-0.009l0.277-0.016
                                            c0.15-0.004,0.301,0,0.449,0.011c-0.259-0.195,2.89,0.534,3.463,1.787c2.867,3.561-1.412,8.552-0.465,6.819
                                            c-0.229,0.21-0.48,0.399-0.74,0.557c-0.086,0.054-0.174,0.104-0.264,0.15l-0.102,0.051c-0.122,0.057,0.008,0,0.088-0.027
                                            c0.104-0.039,0.201-0.074,0.293-0.108c0.873-0.305,1.323-0.462,1.323-0.462L49.995,184.429z"/>
                                    </g>
                                    <g id="about_us">
                                    </g>
                                    <g id="landing">
                                    </g>
                                </svg>
                            </div>
                                
                            <div className="mainattractioninternal attraction1" id="litfestsvgtrigger">
                                    <div className="mainattractioninternalsvgcontainer">
                                        <svg version="1.1" x="0px" y="0px" width="251.333px" height="93.333px" viewBox="0 0 251.333 93.333" enableBackground="new 0 0 251.333 93.333">
                                            <g id="Layer_3" display="none">
                                            </g>
                                            <g id="bg">
                                            </g>
                                            <g id="Layer_2">
                                            </g>
                                            <g id="team_page">
                                            </g>
                                            <g id="footer">
                                            </g>
                                            <g id="pronites">
                                            </g>
                                            <g id="main_attractions">
                                                <g>
                                                    <g>
                                            <path fill="none" d="M46.149,31.543c-0.48-0.879-1.262-1.42-2.342-1.62c-0.238-0.04-0.5-0.06-0.779-0.06
                                                c-0.801,0-1.539,0.24-2.221,0.72c-0.809,0.56-1.309,1.3-1.5,2.221c-0.119,0.36-0.18,0.699-0.18,1.02c0,0.68,0.201,1.26,0.6,1.74
                                                c0.521,0.72,1.262,1.16,2.221,1.32c0.279,0.04,0.541,0.06,0.779,0.06c0.682,0,1.32-0.18,1.922-0.54
                                                c0.869-0.48,1.479-1.28,1.799-2.4c0.08-0.28,0.121-0.58,0.121-0.9C46.569,32.583,46.419,32.063,46.149,31.543z"/>
                                            <path id="litfestsvg" fill="none" stroke="#fff" strokeWidth="3" d="M225.669,44.322c-0.131-0.64-0.471-1.16-1.031-1.56c-0.559-0.4-1.158-0.54-1.799-0.42
                                                c-0.641,0.12-1.16,0.46-1.561,1.02c0,0.04-0.02,0.1-0.061,0.18l-0.049,0.06v0.12c-0.09,0.08-0.15,0.16-0.189,0.24
                                                c-0.08,0.2-0.191,0.38-0.33,0.54c-0.141,0.16-0.291,0.4-0.451,0.72c-0.16,0.28-0.34,0.57-0.529,0.87
                                                c-0.211,0.3-0.451,0.63-0.73,0.99c-0.24,0.36-0.52,0.74-0.84,1.14c-0.32,0.4-0.68,0.84-1.08,1.32c-0.35,0.4-0.75,0.84-1.17,1.32
                                                s-0.91,0.96-1.471,1.44c-1,1-2.139,2-3.42,3c-1.32,1-2.74,1.98-4.26,2.94c-0.799,0.44-1.629,0.9-2.49,1.38
                                                c-0.859,0.48-1.75,0.92-2.67,1.32c-0.959,0.4-1.92,0.79-2.869,1.17c-0.971,0.38-1.99,0.75-3.07,1.11
                                                c-1.039,0.32-2.109,0.63-3.211,0.93c-1.1,0.3-2.209,0.57-3.328,0.81c-1.16,0.28-2.342,0.52-3.541,0.72
                                                c-1.189,0.2-2.42,0.38-3.66,0.54c-2.439,0.32-4.959,0.54-7.561,0.66c-2.6,0.12-5.229,0.17-7.879,0.15
                                                c-2.67-0.02-5.359-0.13-8.08-0.33c-5.4-0.4-10.881-1.06-16.439-1.98c-2.762-0.48-5.5-1-8.221-1.56
                                                c-0.961-0.24-1.939-0.46-2.93-0.66l-0.25,1.2c-0.24,1.08-0.48,2.06-0.721,2.94c-0.68,2.4-1.299,3.6-1.859,3.6
                                                c-0.721,0-1.301-1.72-1.74-5.16c-0.16-1.2-0.301-2.58-0.42-4.14c-0.041-0.6-0.061-1.24-0.061-1.92l-0.119-1.44
                                                c-0.121-1.16-0.18-2.5-0.18-4.02c0-1.8,0.08-3.88,0.238-6.24c0.16-2.24,0.5-5.9,1.031-10.98c0.35-0.04,0.709-0.06,1.08-0.06h0.23
                                                c1.119,0.08,2.119,0.56,3,1.44c0.199,0.24,0.42,0.36,0.658,0.36c0.201,0,0.422-0.12,0.66-0.36c0.24-0.2,0.371-0.42,0.371-0.66
                                                c0-0.2-0.131-0.42-0.371-0.66c-1.279-1.32-2.818-1.98-4.619-1.98c-0.279,0-0.541,0.02-0.779,0.06c0.08-0.88,0.34-2.5,0.779-4.86
                                                v-0.24c0-0.24-0.1-0.44-0.301-0.6c-0.08-0.08-0.199-0.18-0.359-0.3c-0.119-0.04-0.24-0.1-0.35-0.18
                                                c-0.49-0.2-0.951-0.36-1.391-0.48c-0.279-0.04-0.529-0.06-0.779-0.06c-0.48,0-0.9,0.1-1.25,0.3
                                                c-0.531,0.28-0.871,0.74-1.031,1.38v0.06c-0.08,0.28-0.139,0.52-0.18,0.72c-0.08,0.32-0.139,0.62-0.18,0.9
                                                c-0.109,0.68-0.24,1.32-0.359,1.92c-0.121,0.44-0.32,1.44-0.6,3c-0.561,0.12-1.07,0.18-1.561,0.18c-0.189,0-0.42-0.02-0.66-0.06
                                                c-0.869-0.16-1.66-0.72-2.34-1.68c-0.189-0.32-0.43-0.48-0.721-0.48c-0.15,0-0.34,0.06-0.539,0.18c-0.32,0.24-0.48,0.5-0.48,0.78
                                                c0,0.16,0.07,0.34,0.18,0.54c1.201,1.72,2.74,2.58,4.621,2.58c0.398,0,0.799-0.04,1.199-0.12c-0.57,3.74-0.939,7.27-1.1,10.59
                                                c0,0.01,0,0.01,0,0.01c-1.211,5.58-3.641,11.53-7.301,17.84c0.24-2.08,0.34-3.94,0.301-5.58c0-2.44-1.43-5.64-4.32-9.6
                                                l-0.84-1.14l-0.77-1.08c-0.611-0.8-1.07-1.48-1.391-2.04c-0.92-1.44-1.381-2.66-1.381-3.66c0-1.6,1.381-2.4,4.141-2.4h0.359
                                                c0.561,0,0.871-0.3,0.9-0.9v-0.06c0-0.6-0.289-0.9-0.9-0.9h-0.539c-2.359,0-4.301,0.38-5.82,1.14c-2.16,1.08-3.24,2.86-3.24,5.34
                                                c0,0.58,0.07,1.17,0.201,1.78c-0.111,0.66-0.24,1.28-0.371,1.88c-0.359,1.92-0.799,3.62-1.32,5.1c-1.639,2.8-3.459,4.2-5.459,4.2
                                                c-1.92,0-3.25-0.58-3.961-1.73c-0.719-0.88-1.219-1.95-1.5-3.22c-0.24-1.04-0.4-2.11-0.479-3.23c2.18-0.16,3.93-0.65,5.229-1.49
                                                c1.59-1.07,2.381-2.64,2.381-4.71c0-1.67-0.66-3.1-1.971-4.3c-1.32-1.23-2.85-1.84-4.561-1.84c-2.078,0-3.76,0.83-5.049,2.51
                                                c-1,1.24-1.65,2.84-1.961,4.82l-0.01,0.01c-0.57,0.69-1.209,1.1-1.93,1.24c-0.189,0.04-0.4,0.06-0.6,0.06
                                                c-0.4,0-0.859-0.06-1.371-0.18c-0.33-0.04-0.709-0.12-1.139-0.24c-0.25-0.12-0.58-0.24-1.02-0.36
                                                c-0.16-3.56-0.24-7.14-0.24-10.74v-3.3l0.049-0.54v-0.66c0-0.48,0.031-0.96,0.061-1.44c0.08-1.32,0.18-2.5,0.311-3.54
                                                c0.309-2.92,0.809-4.68,1.5-5.28c0.189-0.12,0.389-0.18,0.59-0.18c0.119,0,0.25-0.02,0.359-0.06c0.561,0.32,0.84,1.06,0.84,2.22
                                                c0,0.44-0.049,0.92-0.18,1.44c-0.08,0.2-0.109,0.44-0.109,0.72c0,0.2,0.029,0.4,0.109,0.6c0.131,0.48,0.311,0.82,0.551,1.02
                                                c0.148,0.12,0.309,0.18,0.469,0.18s0.301-0.06,0.42-0.18c0.291-0.2,0.48-0.52,0.611-0.96c0.238-0.92,0.35-1.86,0.35-2.82
                                                c0-1.56-0.32-2.94-0.961-4.14c-0.68-1.2-1.5-1.8-2.459-1.8c-0.83,0-1.59,0.28-2.27,0.84c-1.371,1.08-2.451,3.22-3.24,6.42
                                                c-0.32,1.24-0.58,2.64-0.791,4.2c-0.16,1.2-0.32,2.54-0.469,4.02c-0.4,4.2-0.631,8.52-0.66,12.96h-0.07
                                                c-1.67,0.12-3.111,0.8-4.32,2.04c-0.24,0.24-0.35,0.5-0.35,0.78c0.029,0.32,0.16,0.6,0.35,0.84c0.24,0.2,0.5,0.3,0.779,0.3
                                                c0.33,0,0.611-0.12,0.85-0.36c0.791-0.8,1.711-1.26,2.762-1.38l0.029,1.6c-0.98,4.89-2.01,9.15-3.1,12.8
                                                c-0.16,0.76-0.32,1.52-0.471,2.28c-0.24,1.08-0.48,2.06-0.721,2.94c-0.68,2.4-1.309,3.6-1.859,3.6c-0.719,0-1.299-1.72-1.74-5.16
                                                c-0.16-1.2-0.299-2.58-0.42-4.14c-0.039-0.6-0.059-1.24-0.059-1.92c-0.051-0.48-0.08-0.96-0.121-1.44
                                                c-0.119-1.16-0.189-2.5-0.189-4.02c0-1.8,0.08-3.88,0.25-6.24c0.16-2.24,0.5-5.9,1.02-10.98c0.359-0.04,0.721-0.06,1.08-0.06
                                                h0.23c1.129,0.08,2.129,0.56,3,1.44c0.209,0.24,0.42,0.36,0.67,0.36c0.199,0,0.42-0.12,0.66-0.36c0.24-0.2,0.359-0.42,0.359-0.66
                                                c0-0.2-0.119-0.42-0.359-0.66c-1.281-1.32-2.83-1.98-4.621-1.98c-0.289,0-0.539,0.02-0.789,0.06c0.08-0.88,0.34-2.5,0.789-4.86
                                                v-0.24c0-0.24-0.109-0.44-0.299-0.6c-0.08-0.08-0.201-0.18-0.361-0.3c-0.129-0.04-0.24-0.1-0.359-0.18
                                                c-0.48-0.2-0.939-0.36-1.381-0.48c-0.279-0.04-0.539-0.06-0.779-0.06c-0.48,0-0.9,0.1-1.26,0.3c-0.52,0.28-0.859,0.74-1.02,1.38
                                                v0.06c-0.08,0.28-0.15,0.52-0.18,0.72c-0.08,0.32-0.15,0.62-0.182,0.9c-0.119,0.68-0.238,1.32-0.359,1.92
                                                c-0.119,0.44-0.32,1.44-0.609,3c-0.561,0.12-1.07,0.18-1.551,0.18c-0.199,0-0.42-0.02-0.66-0.06c-0.879-0.16-1.66-0.72-2.34-1.68
                                                c-0.199-0.32-0.439-0.48-0.719-0.48c-0.16,0-0.342,0.06-0.541,0.18c-0.32,0.24-0.48,0.5-0.48,0.78c0,0.16,0.061,0.34,0.18,0.54
                                                c1.191,1.72,2.74,2.58,4.611,2.58c0.41,0,0.811-0.04,1.209-0.12c-0.389,2.55-0.689,5.01-0.898,7.37c0,0.04,0,0.09-0.012,0.13
                                                c-0.6,4.7-1.379,8.22-2.33,10.56c-0.318,0.8-1.199,1.3-2.639,1.5c-0.721-0.04-1.23-0.29-1.5-0.75c-0.281-0.46-0.48-1.08-0.6-1.86
                                                c-0.121-0.78-0.182-1.21-0.182-1.29l-0.18-1.92l-0.24-1.92c-0.16-1.44-0.359-2.7-0.6-3.78c-0.119-0.52-0.27-0.98-0.42-1.38
                                                c-0.16-0.52-0.35-1-0.539-1.44c-0.521-1.04-1.201-1.68-2.041-1.92c-0.199-0.08-0.449-0.12-0.719-0.12
                                                c-0.361,0-0.762,0.12-1.201,0.36c-0.359,0.24-0.689,0.52-0.959,0.84c-0.721,0.8-1.08,1.72-1.08,2.76v0.54
                                                c0,0.12,0.029,0.26,0.119,0.42c0.041,0.07,0.07,0.15,0.109,0.23c-0.689,4.95-1.51,8.85-2.449,11.71
                                                c-0.721,2.24-1.48,3.36-2.279,3.36c-0.682,0-1.26-0.9-1.74-2.7c-0.68-2.36-1.221-5.4-1.621-9.12
                                                c-0.279-3.04-0.139-6.72,0.42-11.04v-0.78c0.602-0.92,1.16-1.94,1.682-3.06c1.68-3.24,2.818-6.52,3.42-9.84
                                                c0.158-0.64,0.27-1.26,0.359-1.86c0.039-0.56,0.061-1.1,0.061-1.62v-0.48c-0.041-1.68-0.48-2.82-1.32-3.42
                                                c-0.361-0.28-0.781-0.42-1.26-0.42c-3.121,0-5.5,3.88-7.141,11.64c-0.561,2.84-1,5.98-1.32,9.42c-0.16,1.36-0.279,2.7-0.359,4.02
                                                c-0.041,1.12-0.08,1.98-0.121,2.58v4.56c0.041,0.76,0.08,1.44,0.121,2.04c0.039,0.84,0.1,1.64,0.18,2.4
                                                c0.24,2,0.57,3.72,1.02,5.16c1.201,4.08,3.26,6.12,6.18,6.12c1.4,0,2.641-0.68,3.721-2.04c0.84-1.04,1.561-2.44,2.16-4.2
                                                c0.551-1.7,1.061-3.72,1.529-6.06c0.01,0.1,0.021,0.2,0.031,0.3l0.059,0.6l0.061,0.54c0.199,1.08,0.42,1.96,0.66,2.64
                                                c0.32,0.88,0.881,1.77,1.68,2.67c0.801,0.9,2.66,1.37,5.58,1.41c2.23-0.16,3.93-1.22,5.07-3.18c0.199-0.35,0.391-0.7,0.561-1.06
                                                c0.629,13.35,2.889,20.02,6.789,20.02c1.26,0,2.41-1.1,3.471-3.29c0.549,0.35,1.17,0.53,1.859,0.53c1.211,0,2.291-0.28,3.24-0.84
                                                c1.32-0.84,2.34-2.22,3.07-4.14c0.549-1.41,0.949-3.12,1.189-5.16c0.24-2.08,0.371-4.44,0.371-7.08c0-1.68-0.061-4.02-0.191-7.02
                                                l-0.119-1.44c1.359,0.44,2.5,0.66,3.42,0.66c0.359,0,0.699-0.02,1.02-0.06c0.451-0.08,0.871-0.22,1.27-0.42v0.09
                                                c0,3.59,0.98,6.58,2.961,8.97c1.58,2,4.33,3.1,8.25,3.3c3.24-0.13,5.66-1.37,7.27-3.72c0.99-1.56,1.75-3.48,2.279-5.76
                                                c0.021-0.1,0.051-0.2,0.07-0.31c0.641,1.03,1.531,2.26,2.691,3.67l1.68,1.92c0.59,0.72,1.049,1.34,1.369,1.86
                                                c0.92,1.36,1.361,3.22,1.32,5.58c-0.039,2.36-0.6,4.32-1.68,5.88l-0.66,0.84c-0.199,0.32-0.381,0.6-0.529,0.84
                                                c-0.691,0.92-1.061,1.87-1.121,2.85s0.041,1.62,0.311,1.92c0.25,0.3,0.539,0.51,0.859,0.63c3.68,0.64,7.311-3.2,10.891-11.52
                                                c1.619-3.76,2.93-7.16,3.949-10.2c0.01,0.12,0.031,0.24,0.041,0.36c0.559,14.04,2.84,21.06,6.84,21.06
                                                c2.32,0,4.279-3.74,5.879-11.22c0.32,0.04,0.641,0.1,0.961,0.18c2.721,0.56,5.48,1.06,8.279,1.5c2.801,0.44,5.57,0.84,8.311,1.2
                                                c2.74,0.36,5.51,0.66,8.32,0.9c5.469,0.4,10.891,0.52,16.25,0.36c2.641-0.08,5.219-0.26,7.75-0.54
                                                c1.27-0.12,2.529-0.28,3.77-0.48s2.461-0.42,3.66-0.66c1.24-0.2,2.43-0.45,3.57-0.75c1.141-0.3,2.27-0.59,3.391-0.87
                                                c1.119-0.36,2.199-0.72,3.238-1.08c1.041-0.36,2.061-0.74,3.061-1.14s1.971-0.82,2.91-1.26c0.939-0.44,1.85-0.9,2.73-1.38
                                                c0.84-0.48,1.66-0.97,2.459-1.47c0.801-0.5,1.561-1.01,2.291-1.53c1.51-1,2.83-2.01,3.949-3.03c1.121-1.02,2.121-2.01,3-2.97
                                                c0.92-0.88,1.689-1.71,2.311-2.49c0.619-0.78,1.129-1.45,1.529-2.01c0.441-0.6,0.76-1.04,0.961-1.32c0-0.12,0.061-0.24,0.18-0.36
                                                l0.07-0.06C225.638,45.563,225.778,44.962,225.669,44.322z M32.468,25.123c0-0.2,0.021-0.38,0.061-0.54
                                                c0.041-0.24,0.1-0.48,0.18-0.72c0.121-0.52,0.221-1.02,0.301-1.5c0.439-1.16,0.9-1.86,1.379-2.1h0.061
                                                c0.041,0.16,0.061,0.42,0.061,0.78c0,0.44-0.02,0.94-0.061,1.5c-0.039,0.4-0.1,0.82-0.18,1.26c-0.08,0.32-0.141,0.6-0.18,0.84
                                                c-0.52,2.28-1.301,4.6-2.34,6.96C31.868,29.083,32.108,26.922,32.468,25.123z M68.759,58.123c0,2.44-0.061,4.56-0.18,6.36v0.66
                                                c-0.041,0.32-0.061,0.62-0.061,0.9c-0.08,0.8-0.189,1.52-0.35,2.16c-0.359,1.88-0.859,2.94-1.5,3.18
                                                c-0.09,0.04-0.18,0.06-0.311,0.06c-0.109,0-0.24,0.04-0.359,0.12c-0.189-0.08-0.35-0.16-0.48-0.24
                                                c-0.061-0.05-0.119-0.11-0.16-0.16c0.711-2.02,1.371-4.61,1.971-7.76c0.49-1.94,0.959-3.96,1.43-6.04V58.123z M86.278,42.522
                                                c0.439-1.32,1.15-1.98,2.141-1.98c0.709,0,1.359,0.42,1.949,1.26c0.561,0.8,0.84,1.56,0.84,2.28c0,1.4-0.6,2.42-1.789,3.06
                                                c-0.91,0.52-2.131,0.84-3.67,0.96C85.749,45.542,85.919,43.683,86.278,42.522z"/>
                                        </g>
                                    </g>
                                </g>
                                <g id="about_us">
                                </g>
                                <g id="landing">
                                </g>
                            </svg>
                        </div>
                        <div className="mainattractioninternaltextcontainer" id="pagethirdsecondpagerevealtrigger" >
                            <p id="litfestsvgtext">
                                A plethora of events under banner of literati for quenching thirst of professional writers,eloquent poets and literature lovers.The Litfest brings together a seminal array of writers , authors , columnists , cartoonists , publishers , lyricists and our dear readers.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- second page --> */}
                <div className="mainthirdinternalcontainer"id="workshopssvgtrigger" >
                    <div className="splitsvgcont1 workgoncont" >
                        <svg version="1.1" className="splitlit" x="0px" y="0px"width="612px" height="792px" viewBox="0 0 612 792" enableBackground="new 0 0 612 792">
                            <g>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="295.322,78.412 249.482,101.096 255.13,39.817 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="389.251,50.405 337.701,111.921 335.247,35.945 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="454.729,93.348 405.724,106.508 389.251,50.405 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="187.997,69.008 169.128,116.858 126.421,131.646 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="157.298,170.092 99.452,192.303 126.421,131.646 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="295.322,78.412 251.936,154.33 249.482,101.096 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="337.701,111.921 251.936,154.33 295.322,78.412 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="405.724,106.508 375.646,187.337 337.701,111.921 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="174.54,210.018 92.915,263.227 99.452,192.303 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="498.264,153.561 435.299,161.222 454.729,93.348 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="163.835,269.051 163.568,270.501 105.159,318.204 
                                    92.915,263.227 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="163.862,273.28 131.805,371.854 105.159,318.204 
                                    163.568,270.501 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000000" strokeMiterlimit="10" points="163.862,273.28 
                                    163.568,270.501 163.835,269.051 165.194,269.17 164.899,270.055 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="478.182,381.64 432.252,453.772 407.203,379.099 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="309.608,540.16 198.969,540.16 271.159,487.044 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="271.159,487.044 198.969,540.16 192.493,484.294 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="271.159,432.807 192.493,484.294 166.525,428.898 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="173.564,368.244 166.525,428.898 131.805,371.854 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000000" strokeMiterlimit="10" points="249.305,375.491 
                                    246.819,377.086 245.52,374.159 247.411,374.809 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="415.428,500.767 411.757,540.16 338.679,484.294 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="432.252,453.772 415.428,500.767 384.52,453.772 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="508.999,305.311 478.182,381.64 441.716,325.865 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="519.085,224.452 453.545,216.438 498.264,153.561 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="335.247,35.945 295.322,78.412 255.13,39.817 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="337.701,111.921 295.322,78.412 335.247,35.945 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="405.724,106.508 337.701,111.921 389.251,50.405 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="454.729,93.348 435.299,161.222 405.724,106.508 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="498.264,153.561 453.545,216.438 435.299,161.222 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="519.085,224.452 508.999,305.311 457.479,265.233 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="508.999,305.311 441.716,325.865 457.479,265.233 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="478.182,381.64 407.203,379.099 441.716,325.865 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="432.252,453.772 384.52,453.772 407.203,379.099 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="411.757,540.16 309.608,540.16 338.679,484.294 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="338.679,484.294 309.608,540.16 271.159,487.044 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="415.428,500.767 338.679,484.294 384.52,453.772 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="519.085,224.452 457.479,265.233 453.545,216.438 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="255.13,39.817 249.482,101.096 187.997,69.008 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="249.482,101.096 169.128,116.858 187.997,69.008 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="169.128,116.858 157.298,170.092 126.421,131.646 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="174.54,210.018 99.452,192.303 157.298,170.092 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="174.54,210.018 163.835,269.051 92.915,263.227 	"/>
                                
                                    <line fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000000" strokeMiterlimit="10" x1="165.194" y1="269.17" x2="163.568" y2="270.501"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="214.969,253.671 173.564,368.244 163.862,273.28 
                                    164.899,270.055 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="173.564,368.244 131.805,371.854 163.862,273.28 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="271.661,280.498 247.411,374.809 245.52,374.159 
                                    214.969,253.671 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="407.203,379.099 384.52,453.772 338.205,406.691 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="338.205,406.691 271.159,487.044 271.159,432.807 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="384.52,453.772 338.679,484.294 338.205,406.691 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="338.679,484.294 271.159,487.044 338.205,406.691 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="245.52,374.159 166.525,428.898 173.564,368.244 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="271.159,432.807 271.159,487.044 192.493,484.294 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="441.716,325.865 407.203,379.099 348.794,310.958 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="348.794,310.958 338.205,406.691 249.305,375.491 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="338.205,406.691 271.159,432.807 246.819,377.086 
                                    249.305,375.491 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="375.646,187.337 251.936,154.33 337.701,111.921 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="375.646,187.337 360.385,231.698 267.699,206.561 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="453.545,216.438 375.646,187.337 435.299,161.222 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="457.479,265.233 348.794,310.958 360.385,231.698 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="457.479,265.233 360.385,231.698 453.545,216.438 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="251.936,154.33 174.54,210.018 157.298,170.092 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="164.899,270.055 165.194,269.17 163.835,269.051 
                                    174.54,210.018 214.969,253.671 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="245.52,374.159 173.564,368.244 214.969,253.671 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="271.159,432.807 166.525,428.898 245.52,374.159 
                                    246.819,377.086 	"/>
                                
                                    <line fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000000" strokeMiterlimit="10" x1="164.899" y1="270.055" x2="163.568" y2="270.501"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="249.482,101.096 157.298,170.092 169.128,116.858 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="251.936,154.33 157.298,170.092 249.482,101.096 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="267.699,206.561 214.969,253.671 251.936,154.33 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="251.936,154.33 214.969,253.671 174.54,210.018 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="435.299,161.222 375.646,187.337 405.724,106.508 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="375.646,187.337 267.699,206.561 251.936,154.33 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="360.385,231.698 271.661,280.498 267.699,206.561 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="453.545,216.438 360.385,231.698 375.646,187.337 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="360.385,231.698 348.794,310.958 271.661,280.498 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="271.661,280.498 214.969,253.671 267.699,206.561 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="348.794,310.958 249.305,375.491 247.411,374.809 
                                    271.661,280.498 	"/>
                                
                                    <line fillRule="evenodd" clipRule="evenodd" fill="none" stroke="#000000" strokeMiterlimit="10" x1="247.411" y1="374.809" x2="246.819" y2="377.086"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="407.203,379.099 338.205,406.691 348.794,310.958 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="457.479,265.233 441.716,325.865 348.794,310.958 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="256.728,587.836 201.513,576.772 214.614,564.944 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="292.424,564.589 256.728,587.836 214.614,564.944 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="307.213,606.97 214.614,607.265 256.728,587.836 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="341.371,564.352 307.213,606.97 292.424,564.589 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="398.479,606.674 307.213,606.97 341.371,564.352 
                                    341.931,564.352 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="411.433,579.111 411.017,594.727 398.479,606.674 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="411.433,579.111 342.821,564.352 398.329,564.089 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="223.102,660.413 214.614,674.161 201.04,660.709 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="259.33,674.017 214.614,674.161 223.102,660.413 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="254.364,652.575 201.513,643.644 214.614,631.841 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="285.208,631.518 254.364,652.575 214.614,631.841 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="336.962,631.28 303.456,673.866 285.208,631.518 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="345.716,673.746 303.456,673.866 336.962,631.28 
                                    337.258,631.28 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="377.804,631.075 346.044,673.746 345.716,673.746 
                                    337.258,631.28 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="398.479,673.574 346.044,673.746 377.804,631.075 
                                    377.895,631.075 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="411.433,646.008 411.017,661.594 398.479,673.574 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="411.433,646.008 378.073,631.075 398.329,630.985 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="288.729,699.123 249.363,729.113 239.367,699.48 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="289.289,699.123 271.159,747.745 249.363,729.113 
                                    288.729,699.123 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="330.603,698.799 301.59,722.279 301.385,722.459 
                                    289.819,699.094 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="301.565,722.842 301.565,722.87 300.735,756.055 
                                    271.159,747.745 301.385,722.459 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="334.951,750.375 300.735,756.055 301.565,722.87 
                                    301.59,722.903 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="362.633,729.973 334.951,750.375 331.964,698.799 
                                    332.883,698.799 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="372.511,698.501 362.633,729.973 332.883,698.799 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="307.213,606.97 256.728,587.836 292.424,564.589 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#E21F26" points="411.433,579.111 398.479,606.674 341.931,564.352 
                                    342.821,564.352 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="214.614,607.265 201.04,593.809 201.513,576.772 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="256.728,587.836 214.614,607.265 201.513,576.772 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="303.456,673.866 254.364,652.575 285.208,631.518 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="411.433,646.008 398.479,673.574 377.895,631.075 
                                    378.073,631.075 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#B11F29" points="223.102,660.413 201.04,660.709 201.513,643.644 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F68D40" points="261.282,674.017 259.33,674.017 223.102,660.413 
                                    254.364,652.575 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="254.364,652.575 223.102,660.413 201.513,643.644 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FED978" points="303.456,673.866 261.282,674.017 254.364,652.575 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#FBB14E" points="301.385,722.459 271.159,747.745 289.289,699.123 
                                    289.819,699.094 	"/>
                                <polygon className="workgon"fillRule="evenodd" clipRule="evenodd" fill="#F05232" points="334.951,750.375 301.59,722.903 301.565,722.87 
                                    301.565,722.842 301.59,722.279 330.603,698.799 331.964,698.799 	"/>
                            </g>
                        </svg>
                    </div>
                    <div className="mainattractioninternal attraction2" id="workshoptrigger2">
                        <div className="mainattractioninternalsvgcontainer">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 3403 446.825" enableBackground="new 0 0 3403 446.825">
                                <g>
                                    <g>
                                        <path id="workshopssvg" fill="none" stroke="#FFF" strokeWidth="8"   d="M2479.736,199.1h-0.92c-2.654,0-4.186,1.326-4.594,3.983c-4.493,33.076-17.867,68.811-40.123,107.2
                                            c1.223-10.618,1.734-20.114,1.529-28.485c0-12.457-7.352-28.789-22.051-49.004l-4.291-5.818l-3.98-5.513
                                            c-3.063-4.087-5.411-7.558-7.045-10.419c-4.697-7.348-7.046-13.579-7.046-18.686c0-8.164,7.046-12.247,21.136-12.247h1.836
                                            c2.859,0,4.392-1.53,4.596-4.593v-0.309c0-3.061-1.532-4.596-4.596-4.596h-2.756c-12.047,0-21.951,1.943-29.71,5.823
                                            c-11.026,5.513-16.538,14.595-16.538,27.259c0,3.164,0.406,6.33,1.174,9.596v0.055c-3.624,9.95-10.517,19.447-20.778,28.635
                                            c-5.919,5.105-12.763,10.11-20.521,15.006c6.332-13.68,9.497-27.867,9.497-42.573c0-10.818-1.738-19.807-5.207-26.95
                                            c-4.494-9.392-11.539-14.088-21.134-14.088c-8.577,0-17.152,3.265-25.729,9.801c-7.759,5.713-14.088,12.657-18.99,20.828
                                            c-5.307-14.502-11.332-21.75-18.069-21.75h-0.308c-1.635,0-3.471,0.613-5.513,1.839c-1.636,1.018-3.166,2.349-4.593,3.979
                                            c-3.473,4.086-5.209,8.683-5.209,13.787v2.145c0.205,0.813,0.408,1.426,0.612,1.834c1.124,2.094,2.194,4.441,3.218,7.1
                                            c-0.205,1.221-0.463,2.447-0.768,3.619c-1.429,5.514-3.163,10.418-5.209,14.706c-5.307,11.437-12.353,17.149-21.131,17.149
                                            c-1.84,0-3.575-0.1-5.207-0.305c1.02-5.513,1.531-11.132,1.531-16.845c0-4.496-0.307-9.089-0.918-13.784
                                            c-0.818-5.922-1.941-12.866-3.37-20.828c-3.88-20.419-9.75-32.567-17.663-36.447l-0.306-0.309
                                            c-0.204-1.227-0.511-2.348-0.919-3.369c-2.043-6.122-5.412-10.818-10.108-14.089c-4.033-2.652-8.524-3.982-13.425-3.982
                                            c-11.588,0-20.624,9.597-27.156,28.79c-4.646,13.732-7.404,28.693-8.222,44.771c-3.011,21.85-5.87,37.313-8.573,46.507
                                            c-3.064,10.409-4.953,17.199-5.669,20.369c-0.714,3.161-1.58,6.581-2.603,10.26c-3.064,11.437-5.412,17.149-7.045,17.149
                                            c-1.021-1.227-1.941-5.514-2.756-12.862c-0.408-2.861-0.715-5.922-0.92-9.192c-0.205-1.222-0.409-2.343-0.612-3.364v-2.448
                                            c-0.815-8.988-1.43-17.159-1.837-24.507l-0.614-7.967l-0.61-8.266v-3.061l-0.307-3.37c-0.205-2.657-0.408-5.104-0.613-7.353
                                            c-0.613-5.923-1.633-11.027-3.063-15.314c-3.676-11.841-10.158-17.764-19.553-17.764c-7.094,0-14.038,7.35-20.727,22.051
                                            c-2.245,5.104-4.389,11.027-6.43,17.762c-0.817,2.248-1.633,4.801-2.451,7.657c-0.203,1.026-0.511,2.044-0.92,3.065l-0.305,1.531
                                            l-0.305,1.226c-2.401,9.188-4.341,18.071-5.771,26.651c-0.611-1.436-1.226-3.171-1.837-5.209c-0.205-0.614-0.41-1.332-0.614-2.144
                                            c-0.203-0.614-0.307-1.122-0.307-1.531c-1.784-7.966-3.42-18.38-4.847-31.247c-1.584-17.148-2.402-33.381-2.402-48.695v-7.353
                                            c3.269-3.267,6.434-7.453,9.494-12.558c2.453-4.287,4.801-9.083,7.048-14.397c0.408-1.427,0.917-2.857,1.53-4.288
                                            c0.817-1.834,1.432-3.778,1.837-5.817c1.636-4.697,2.757-9.089,3.37-13.172c0.613-3.265,0.92-6.127,0.92-8.579
                                            c0-6.735-1.839-11.127-5.514-13.166c-1.431-0.818-3.064-1.226-4.9-1.226c-13.887,0-24.301,13.58-31.242,40.734
                                            c-2.45,9.801-4.391,20.728-5.82,32.772c-0.611,4.696-1.121,9.396-1.53,14.093c-0.204,3.878-0.409,7.353-0.613,10.415v23.38
                                            c-6.382,27.463-18.53,56.611-36.448,87.494c1.225-10.618,1.737-20.114,1.533-28.485c0-12.457-7.352-28.789-22.056-49.004
                                            l-4.288-5.818l-3.98-5.513c-3.063-4.087-5.41-7.558-7.046-10.419c-4.696-7.348-7.044-13.579-7.044-18.686
                                            c0-8.164,7.044-12.247,21.135-12.247h1.837c2.859,0,4.392-1.53,4.593-4.593v-0.309c0-3.061-1.53-4.596-4.593-4.596h-2.757
                                            c-12.047,0-21.949,1.943-29.709,5.823c-11.027,5.513-16.541,14.595-16.541,27.259c0,2.651,0.257,5.413,0.871,8.164
                                            c0,0,0,0.051,0,0.105c-3.625,23.84-7.658,43.391-12.202,58.811c-0.409,3.879-0.92,7.447-1.532,10.719
                                            c-1.021,4.49-1.94,8.778-2.755,12.861c-2.044,10.006-4.29,20.728-6.739,32.164c-1.226,2.039-2.91-1.685-5.053-11.182
                                            c-2.145-9.497-7.71-30.783-16.694-63.865c-0.817-1.835-1.429-3.365-1.839-4.592l-3.98-7.656
                                            c-2.859-6.332-6.635-9.802-11.334-10.415h-1.53c-0.817,0-1.633,0.101-2.451,0.31c2.451-8.58,4.901-15.934,7.353-22.055
                                            c0.203-0.408,0.408-0.918,0.612-1.535l0.921-1.834c0.813-1.635,1.631-3.166,2.449-4.597c2.041-3.878,3.673-5.923,4.9-6.122
                                            c2.245,0,4.082,0.918,5.512,2.752c1.021,1.635,2.043,3.778,3.063,6.436c0.41,1.63,1.328,2.757,2.756,3.365
                                            c0.818,0.617,1.738,0.922,2.758,0.922c0.409,0,0.92-0.104,1.533-0.305c1.428-0.617,2.553-1.635,3.367-3.064
                                            c0.408-0.817,0.613-1.631,0.613-2.448c0-0.618-0.102-1.226-0.307-1.84c-3.472-11.641-10.006-17.458-19.602-17.458
                                            c-3.881,0-7.657,2.348-11.334,7.045c-1.428,1.635-2.758,3.777-3.98,6.43c-0.818,1.636-1.738,3.574-2.758,5.823
                                            c-4.084,9.188-7.963,21.336-11.639,36.447l-0.611,1.839l-0.307,0.607c-2.451,10.828-4.594,21.342-6.434,31.552
                                            c-0.61-1.635-1.224-3.475-1.838-5.513c-0.204-0.614-0.408-1.332-0.613-2.144c-0.204-0.614-0.306-1.122-0.306-1.531
                                            c-1.837-7.966-3.367-18.38-4.595-31.247c-1.836-17.148-2.756-33.381-2.756-48.695l2.451-7.049
                                            c1.838-3.266,6.278-13.42,13.324-30.469c7.045-17.055,11.18-28.696,12.403-34.922c1.226-6.227,2.245-13.375,3.063-21.441
                                            c0.818-8.067-0.715-14.138-4.593-18.226c-1.431-1.63-3.166-2.552-5.207-2.751c-15.314-1.431-27.77,16.64-37.369,54.208
                                            c-4.492,21.855-7.146,39.563-7.962,53.142c-0.817,13.58-1.276,22.105-1.378,25.574c-0.103,3.475-0.155,7.148-0.155,11.027v11.641
                                            l0.204,5.209v0.051c-0.204,1.021-0.355,1.993-0.51,3.011c-2.041,12.048-4.083,23.071-6.125,33.081
                                            c-6.739,34.916-12.25,52.374-16.541,52.374c-9.188,0-14.496-19.602-15.926-58.805c-0.408-6.739-0.612-13.988-0.612-21.751
                                            c0-5.104,0.104-10.413,0.308-15.927c0.201-4.696,0.405-9.392,0.609-14.089c0.205-1.635,0.309-3.27,0.309-4.899
                                            c0-1.228,0.101-2.249,0.305-3.067c0-0.607-0.102-1.324-0.305-2.143c-0.613-1.426-1.736-2.344-3.369-2.752
                                            c-0.611-0.209-1.43-0.309-2.453-0.309h-2.143l-3.674,0.612l-3.371,0.923c-8.777,1.425-15.928,2.344-21.441,2.752
                                            c-2.245,0.204-4.286,0.309-6.123,0.309c-2.655,0-5.105-0.204-7.352-0.613c-3.676-0.613-6.74-2.145-9.189-4.596
                                            c-1.633-2.039-4.033-4.901-7.196-8.575c-3.165-3.674-4.748-2.094-4.748,4.746c0,6.845,4.389,11.999,13.171,15.47
                                            c0.613,0.459,1.326,0.816,2.196,1.121c-0.563,4.083-1.276,7.962-2.196,11.74c-1.432,5.514-3.166,10.418-5.207,14.706
                                            c-5.31,11.437-12.354,17.149-21.135,17.149c-1.838,0-3.572-0.1-5.207-0.305c1.022-5.513,1.533-11.132,1.533-16.845
                                            c0-4.496-0.307-9.089-0.92-13.784c-0.818-5.922-1.939-12.866-3.37-20.828c-3.829-20.419-9.749-32.567-17.663-36.447l-0.307-0.309
                                            c-0.204-1.227-0.508-2.348-0.916-3.369c-2.041-6.122-5.413-10.818-10.059-14.089c-4.084-2.652-8.574-3.982-13.425-3.982
                                            c-11.641,0-20.674,9.597-27.157,28.79c-4.748,13.888-7.504,28.943-8.27,45.229c-0.409,0.972-0.818,1.939-1.227,2.856
                                            c-2.451,5.923-5.003,11.027-7.658,15.314c-6.941,11.845-14.395,17.768-22.357,17.768c-3.064,0-5.82-0.41-8.271-1.227
                                            c1.839-5.713,3.165-11.635,3.982-17.763c1.224-7.144,1.838-13.784,1.838-19.905c0-8.172-1.838-15.215-5.564-21.137
                                            c-3.269-5.514-7.3-8.885-12.048-10.11c-1.02-0.199-2.043-0.305-3.061-0.305c-3.525,0-6.484,1.53-8.986,4.591
                                            c-3.473,4.697-5.258,12.05-5.258,22.056c0,6.944,0.51,13.271,1.531,18.993c2.859,12.657,8.168,22.049,15.928,28.177
                                            c-4.289,31.854-8.627,48.087-13.02,48.7c-4.39,0.612-7.859-6.536-10.514-21.441c-2.654-14.906-4.646-28.077-6.078-39.514
                                            c-1.018-5.104-1.529-9.8-1.529-14.087c0.205-5.514,1.125-9.702,2.757-12.558c0.204-0.409,0.308-0.813,0.308-1.223
                                            c0-1.026-0.614-1.839-1.838-2.451l-3.627-1.84c-1.428-0.613-2.652-1.122-3.674-1.531c-2.654-0.816-4.953-1.226-6.994-1.226
                                            c-0.614,0-1.223,0.104-1.837,0.309c-3.42,0.409-6.278,1.938-8.475,4.597c-2.655,3.261-3.981,8.265-3.981,15.006
                                            c0,2.65,0.204,5.514,0.613,8.574c0.406,2.453,0.611,5.717,0.611,9.801l0.306,1.226v6.741c0,3.061-0.101,6.121-0.306,9.188
                                            c-0.409,8.17-1.326,14.905-2.757,20.214c-6.329-1.021-11.435-6.635-15.314-16.844c-1.429-3.884-2.655-8.171-3.675-12.867
                                            c-0.817-3.675-1.43-8.475-1.837-14.397c-0.409-8.166-0.613-16.536-0.613-25.115v-7.348c0.204-13.48,1.225-24.099,3.063-31.855
                                            c0.202-1.426,0.305-2.453,0.305-3.062c0-2.249-0.714-4.188-2.144-5.822c-4.901-6.331-9.698-10-14.396-11.027
                                            c-0.612-0.199-1.329-0.305-2.143-0.305c-4.901,0-8.477,3.884-10.722,11.641c-2.654,8.575-3.98,21.745-3.98,39.513v5.204
                                            c0,4.492,0.101,9.089,0.305,13.785c-1.429-0.204-3.061-0.514-4.901-0.923c-13.884-2.856-27.975-5.409-42.267-7.658
                                            c-14.295-2.242-28.433-4.286-42.421-6.121c-13.988-1.84-28.126-3.369-42.421-4.597c-27.975-2.043-55.643-2.651-83.005-1.834
                                            c-13.477,0.409-26.646,1.326-39.512,2.751c-6.533,0.619-12.967,1.432-19.295,2.453c-6.33,1.021-12.557,2.144-18.684,3.371
                                            c-6.332,1.016-12.406,2.293-18.224,3.827c-5.821,1.531-11.588,3.013-17.306,4.442c-5.719,1.84-11.232,3.674-16.542,5.509
                                            c-5.31,1.845-10.514,3.779-15.618,5.822c-5.104,2.044-10.057,4.188-14.855,6.432c-4.799,2.247-9.445,4.597-13.938,7.049
                                            c-4.288,2.448-8.473,4.945-12.558,7.497c-4.084,2.553-7.964,5.16-11.64,7.817c-7.76,5.104-14.496,10.26-20.215,15.464
                                            c-5.717,5.205-10.822,10.26-15.314,15.165c-4.695,4.487-8.626,8.724-11.793,12.708c-3.162,3.982-5.767,7.402-7.809,10.264
                                            c-2.246,3.061-3.881,5.305-4.9,6.735c0,0.613-0.307,1.226-0.92,1.839l-0.306,0.305c-2.042,2.856-2.758,5.922-2.145,9.188
                                            c0.614,3.271,2.349,5.922,5.207,7.966s5.923,2.757,9.188,2.145c3.269-0.614,5.923-2.349,7.964-5.204
                                            c0-0.211,0.104-0.514,0.308-0.923l0.306-0.305v-0.612c0.408-0.409,0.716-0.818,0.919-1.228c0.409-1.021,0.97-1.938,1.687-2.757
                                            c0.713-0.816,1.48-2.043,2.295-3.674c0.817-1.431,1.736-2.91,2.758-4.441c1.021-1.536,2.245-3.215,3.676-5.055
                                            c1.224-1.834,2.655-3.779,4.287-5.818c1.632-2.043,3.473-4.292,5.514-6.74c1.836-2.038,3.829-4.287,5.973-6.734
                                            c2.143-2.453,4.646-4.906,7.504-7.354c5.105-5.104,10.924-10.209,17.458-15.314c6.739-5.104,13.987-10.104,21.747-15.01
                                            c4.084-2.244,8.319-4.597,12.711-7.045c4.391-2.447,8.934-4.695,13.631-6.734c4.899-2.044,9.801-4.038,14.7-5.973
                                            c4.899-1.943,10.108-3.828,15.622-5.668c5.309-1.635,10.77-3.215,16.387-4.751c5.614-1.53,11.279-2.906,16.998-4.132
                                            c5.922-1.432,11.945-2.657,18.07-3.675c6.125-1.022,12.354-1.943,18.686-2.757c12.455-1.635,25.32-2.756,38.59-3.37
                                            c13.273-0.612,26.698-0.867,40.277-0.763c13.58,0.1,27.313,0.658,41.195,1.68c27.569,2.045,55.543,5.41,83.926,10.11
                                            c14.088,2.448,28.076,5.105,41.961,7.962c2.858,0.817,5.514,1.535,7.963,2.144c0.613,6.535,1.021,11.745,1.227,15.624
                                            c1.02,5.104,2.246,9.899,3.675,14.396c1.837,5.918,3.88,11.227,6.127,15.922c5.919,11.846,13.171,18.994,21.744,21.441
                                            c2.042,0.614,4.188,0.923,6.435,0.923c10.414-3.884,17.662-11.026,21.744-21.446c11.437,34.308,19.299,51.915,23.586,52.838
                                            c4.287,0.922,8.779,1.171,13.477,0.764c8.574-2.448,15.621-28.891,21.133-79.324c3.473,1.226,7.148,1.834,11.027,1.834
                                            c10.617,0,20.111-6.431,28.484-19.293c1.021-1.432,1.992-2.961,2.963-4.547c1.173,13.989,4.593,26.392,10.156,37.32
                                            c7.963,15.314,18.021,22.971,30.22,22.971c9.956,0,18.329-3.778,25.017-11.336c5.919-6.332,10.311-14.905,13.118-25.724
                                            c2.45,0.409,4.798,0.608,7.044,0.608l3.063-0.304c10.619-1.228,19.094-7.962,25.423-20.216c2.654-4.9,4.798-10.618,6.433-17.154
                                            c1.225-4.236,2.246-8.879,3.012-13.934c1.275,0.101,2.602,0.15,4.033,0.15c2.041,0,4.185-0.1,6.43-0.305
                                            c2.859-0.204,5.924-0.513,9.191-0.922c-0.613,4.292-1.328,9.905-2.146,16.85c-0.611,5.514-0.918,11.332-0.918,17.459
                                            c0,3.469,0.104,7.148,0.307,11.027c0.408,19.601,3.572,39.711,9.495,60.34c5.921,20.619,15.11,30.934,27.564,30.934
                                            c10.415,0,19.196-13.989,26.343-41.961c2.859-10.469,5.615-22.414,8.217-35.889c0.104,0.764,0.258,1.481,0.36,2.193
                                            c3.674,20.828,9.188,33.286,16.538,37.369c2.041,1.222,3.98,1.84,5.819,1.84c3.471,0,6.943-1.84,10.415-5.514
                                            c2.654-2.861,4.797-6.74,6.43-11.641c1.227-3.674,2.145-7.961,2.758-12.867c1.022-5.514,2.041-11.026,3.063-16.54
                                            c5.719,25.115,11.536,47.479,17.459,67.081c7.555,26.342,15.111,39.513,22.665,39.513h0.919
                                            c5.921-0.409,11.332-7.149,16.233-20.222l1.839-4.895c8.574-24.098,14.906-54.926,18.988-92.5
                                            c1.276-5.209,2.502-10.772,3.624-16.646c3.218,5.21,7.759,11.387,13.53,18.485l8.574,9.801c3.064,3.675,5.412,6.84,7.045,9.492
                                            c4.697,6.943,6.943,16.441,6.739,28.485s-3.063,22.054-8.577,30.016l-3.37,4.292c-1.02,1.631-1.938,3.061-2.754,4.287
                                            c-3.473,4.696-5.362,9.542-5.669,14.547s0.205,8.271,1.533,9.801c1.326,1.53,2.808,2.603,4.439,3.216
                                            c18.786,3.265,37.316-16.337,55.593-58.811c8.729-20.314,15.773-38.64,21.082-54.822c0.612,5.818,1.378,11.231,2.349,16.231
                                            c3.676,20.828,9.189,33.286,16.54,37.369c1.633,1.022,3.37,1.531,5.206,1.531c6.075,0,10.977-3.575,14.6-10.719
                                            c1.432-2.861,2.654-6.127,3.677-9.801c0.815-3.066,1.429-6.127,1.837-9.193c1.432-9.188,3.42-18.684,6.074-28.484
                                            c3.268-12.249,6.74-22.354,10.365-30.32c0.713,0.613,1.174,1.531,1.428,2.757c0.408,0.813,0.613,1.84,0.613,3.062l1.225,14.093
                                            l0.919,14.089l0.306,3.061l0.309,3.679c0.204,2.856,0.408,6.735,0.611,11.636c1.02,12.861,2.194,23.993,3.625,33.385
                                            c4.032,25.934,10.82,39.309,20.316,40.126h0.611c6.688,0,13.224-6.84,19.553-20.523c3.062-4.492,5.921-11.84,8.576-22.05
                                            c1.02-4.088,2.042-8.375,3.063-12.867c0.611-3.469,2.501-11.281,5.666-23.43c0.613-2.349,1.225-4.95,1.89-7.862
                                            c1.583,5.514,3.674,10.769,6.177,15.675c7.912,15.314,18.019,22.971,30.221,22.971c9.955,0,18.326-3.778,25.013-11.336
                                            c5.923-6.332,10.263-14.905,13.122-25.724c2.449,0.409,4.797,0.608,7.043,0.608l3.063-0.304
                                            c10.616-1.228,19.091-7.962,25.423-20.216c1.427-2.652,2.756-5.563,3.828-8.729c0.561,1.784,1.122,3.674,1.683,5.668
                                            c3.063,12.453,5.41,25.828,7.046,40.121c1.633,12.861,2.451,24.706,2.451,35.528c0,11.028,1.121,25.37,3.367,43.037
                                            c2.247,17.658,10.617,26.491,25.117,26.491c5.104,0,8.984-3.37,11.639-10.109c1.021-2.448,1.836-5.304,2.449-8.574
                                            c0.41-2.652,0.715-5.105,0.92-7.349v-0.618c0-1.222-0.51-2.243-1.533-3.062c-0.814-1.017-1.939-1.529-3.367-1.529
                                            c-2.859,0-4.291,1.431-4.291,4.286l-0.305,2.758v2.757c-0.205,2.247-0.508,4.188-0.918,5.817
                                            c-0.818,4.287-2.654,6.436-5.514,6.436c-3.063,0-5.104-9.293-6.127-27.872c-0.204-3.679,0.205-9.7,1.227-18.071
                                            c1.02-8.369,1.633-20.115,1.838-35.226c0.204-2.855,0.305-5.612,0.305-8.271c0-2.855-0.101-5.713-0.305-8.574v-6.74
                                            c0-1.834-0.103-3.674-0.307-5.514c-0.205-7.756-1.02-15.922-2.451-24.502c-0.204-1.221-0.408-2.348-0.613-3.365
                                            c-0.406-1.436-0.713-2.961-0.917-4.596c-0.817-3.68-1.635-7.148-2.45-10.414c4.9-13.475,12.148-20.215,21.746-20.215
                                            c6.127,0,10.516,3.569,13.171,10.718c1.021,2.652,1.837,5.823,2.45,9.497c0.408,2.856,0.612,5.817,0.612,8.879
                                            c0,7.558-0.817,15.419-2.45,23.59c-1.635,9.393-3.881,16.641-6.739,21.746l-4.595,2.143l-4.286,2.144
                                            c-2.655,1.427-3.981,3.266-3.981,5.515c0,0.408,0.1,0.816,0.305,1.226c0.613,2.448,2.552,3.675,5.818,3.675
                                            c8.782,0,16.85-4.188,24.199-12.559c15.314-7.762,27.975-16.032,37.98-24.811c8.27-7.404,14.65-15.161,19.09-23.276
                                            c0.359,0.713,0.715,1.425,1.124,2.144c3.269,5.922,8.475,13.271,15.622,22.055l8.574,9.801c3.063,3.675,5.41,6.84,7.047,9.492
                                            c4.695,6.943,6.94,16.441,6.736,28.485c-0.205,12.044-3.064,22.054-8.578,30.016l-3.367,4.292
                                            c-1.021,1.631-1.941,3.061-2.755,4.287c-3.473,4.696-5.362,9.542-5.67,14.547c-0.304,5.005,0.204,8.271,1.534,9.801
                                            c1.325,1.53,2.807,2.603,4.441,3.216c18.783,3.265,37.314-16.337,55.59-58.811c18.275-42.469,29.047-76.06,32.314-100.766
                                            c0.203-0.408,0.306-0.817,0.306-1.226C2484.022,200.635,2482.596,199.309,2479.736,199.1z M2021.525,145.498
                                            c1.174-9.595,2.81-17.253,4.851-22.971c0.204-0.817,0.409-1.531,0.614-2.143c0.355-1.018,0.865-1.94,1.479-2.753
                                            c1.02-2.247,2.144-3.678,3.367-4.292v1.531c0,1.021-0.101,2.248-0.306,3.679c0,0.817-0.104,1.635-0.307,2.447
                                            c0,0.614-0.103,1.227-0.305,1.84c-1.021,6.332-3.064,13.171-6.076,20.519c-1.225,3.27-2.603,6.332-4.235,9.193L2021.525,145.498z
                                                M1796.098,133.25c1.225-10.21,3.266-20.216,6.125-30.016l3.369-7.658c1.838-3.879,2.961-5.209,3.371-3.983
                                            c0.405,1.221,0.201,4.392-0.613,9.496c-0.204,1.426-0.408,2.552-0.613,3.371c-2.041,10.817-5.412,22.662-10.107,35.523
                                            C1795.383,145.708,1794.872,143.459,1796.098,133.25z M1510.33,241.673c-4.494-4.696-7.658-11.431-9.496-20.21
                                            c-1.225-4.905-1.838-10.11-1.838-15.624c0-7.148,0.92-12.253,2.757-15.314c0.818-1.834,1.94-2.756,3.37-2.756
                                            c0.611,0,1.225,0.204,1.838,0.613c2.041,1.226,3.877,3.878,5.514,7.965c1.632,4.288,2.449,9.184,2.449,14.697
                                            C1514.924,220.236,1513.392,230.446,1510.33,241.673z M1625.801,261.893c-1.226,2.856-2.451,5.409-3.676,7.657
                                            c-3.268,5.922-7.145,8.884-11.641,8.884c-7.963,0-14.189-5.823-18.632-17.464c-3.521-10.005-5.257-22.563-5.257-37.673
                                            c0-14.496,1.379-28.894,4.084-43.186c3.215-15.724,7.146-23.585,11.842-23.585c0.613,0,1.432,0.508,2.449,1.535
                                            c1.023,0.813,1.738,1.629,2.146,2.447c-4.494,2.448-8.065,7.553-10.72,15.314c-2.451,7.144-3.677,15.209-3.677,24.193
                                            c0,13.071,3.268,24.508,9.801,34.308c6.74,9.801,15.212,16.641,25.421,20.519C1627.333,257.501,1626.617,259.849,1625.801,261.893
                                            z M1629.783,245.353c-7.963-3.471-14.602-9.193-19.908-17.154c-5.105-7.962-7.657-17.354-7.657-28.182
                                            c0-6.531,0.814-12.145,2.45-16.84c2.245-5.723,5.207-8.579,8.881-8.579c0.817,0,1.53,0.204,2.144,0.612
                                            c2.45,1.022,4.696,4.083,6.739,9.188c1.429,3.676,2.758,8.172,3.98,13.475c2.859,10.828,4.288,21.955,4.288,33.392
                                            C1630.7,235.96,1630.394,240.655,1629.783,245.353z M2188.454,261.893c-1.226,2.856-2.45,5.409-3.677,7.657
                                            c-3.266,5.922-7.146,8.884-11.639,8.884c-7.963,0-14.191-5.823-18.631-17.464c-3.521-10.005-5.259-22.563-5.259-37.673
                                            c0-14.496,1.378-28.894,4.084-43.186c3.216-15.724,7.147-23.585,11.843-23.585c0.613,0,1.429,0.508,2.45,1.535
                                            c1.022,0.813,1.735,1.629,2.144,2.447c-4.491,2.448-8.066,7.553-10.721,15.314c-2.45,7.144-3.674,15.209-3.674,24.193
                                            c0,13.071,3.268,24.508,9.801,34.308c6.738,9.801,15.213,16.641,25.422,20.519
                                            C2189.984,257.501,2189.271,259.849,2188.454,261.893z M2192.435,245.353c-7.964-3.471-14.599-9.193-19.909-17.154
                                            c-5.104-7.962-7.656-17.354-7.656-28.182c0-6.531,0.816-12.145,2.451-16.84c2.245-5.723,5.205-8.579,8.883-8.579
                                            c0.816,0,1.531,0.204,2.145,0.612c2.449,1.022,4.695,4.083,6.736,9.188c1.432,3.676,2.758,8.172,3.983,13.475
                                            c2.856,10.828,4.288,21.955,4.288,33.392C2193.355,235.96,2193.049,240.655,2192.435,245.353z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="mainattractioninternaltextcontainer">
                            <p id="workshoptext">To transform passive listening into interactive learning. Thomso organises workshops where knowledgeable personalities share their insightful experiences and conduct comprehensive sessions for students.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Third page --> */}
                <div className="mainthirdinternalcontainer" id="zonalssvgtrigger">
                    <div className="splitsvgcont1 zonalgoncont">
                        <svg version="1.1" className="splitlit" x="0px" y="0px" width="841.89px" height="595.276px" viewBox="0 0 841.89 595.276" enableBackground="new 0 0 841.89 595.276">
                            <g>
                                <polygon className="zongon" fill="#238B45" points="225.876,149.98 198.805,146.542 216.195,139.817 	"/>
                                <polygon className="zongon" fill="#005A32" points="225.876,149.98 189.568,170.249 198.805,146.542 	"/>
                                <polygon className="zongon" fill="#238B45" points="225.876,149.98 221.45,177.284 189.568,170.249 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="221.45,177.284 179.598,209.495 189.568,170.249 	"/>
                                <polygon className="zongon" fill="#005A32" points="221.45,177.284 203.577,219.89 179.598,209.495 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="203.577,219.89 198.127,235.87 179.598,209.495 	"/>
                                <polygon className="zongon" fill="#74C476" points="179.598,209.495 175.56,226.594 155.097,212.953 	"/>
                                <polygon className="zongon" fill="#238B45" points="155.097,212.953 152.391,236.508 131.176,232.836 	"/>
                                <polygon className="zongon" fill="#74C476" points="140.16,258.902 121.921,264.002 131.176,232.836 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="145.823,282.688 129.38,294.396 121.921,264.002 	"/>
                                <polygon className="zongon" fill="#74C476" points="145.823,282.688 144.934,308.696 129.38,294.396 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="162.306,291.943 159.309,310.763 144.934,308.696 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="166.768,400.574 157.881,402.951 154.769,370.915 	"/>
                                <polygon className="zongon" fill="#74C476" points="171.02,360.421 154.769,370.915 156.992,341.602 	"/>
                                <polygon className="zongon" fill="#238B45" points="171.02,360.421 166.768,400.574 154.769,370.915 	"/>
                                <polygon className="zongon" fill="#74C476" points="181.009,303.228 177.163,325.237 159.309,310.763 	"/>
                                <polygon className="zongon" fill="#238B45" points="177.163,325.237 156.992,341.602 159.309,310.763 	"/>
                                <polygon className="zongon" fill="#238B45" points="187.078,272.893 162.306,291.943 171.465,246.826 	"/>
                                <polygon className="zongon" fill="#238B45" points="204.351,281.257 181.009,303.228 187.078,272.893 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="224.813,261.993 204.351,281.257 213.82,249.241 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="225.798,239.425 213.82,249.241 203.577,219.89 	"/>
                                <polygon className="zongon" fill="#74C476" points="213.82,249.241 198.127,235.87 203.577,219.89 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="256,272.119 224.813,261.993 237.102,250.979 	"/>
                                <polygon className="zongon" fill="#74C476" points="264.095,309.256 224.813,261.993 256,272.119 	"/>
                                <polygon className="zongon" fill="#238B45" points="291.128,309.256 264.095,309.256 256,272.119 270.356,288.175 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="309.02,350.317 264.095,309.256 291.128,309.256 	"/>
                                <polygon className="zongon" fill="#74C476" points="333.812,343.225 309.02,350.317 291.128,309.256 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="353.56,370.875 309.02,350.317 333.812,343.225 	"/>
                                <polygon className="zongon" fill="#238B45" points="405.537,371.531 353.56,370.875 364.726,349.332 	"/>
                                <polygon className="zongon" fill="#74C476" points="405.537,371.531 364.726,349.332 395.313,345.447 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="431.796,354.877 405.537,371.531 395.313,345.447 	"/>
                                <polygon className="zongon" fill="#238B45" points="431.796,354.877 395.313,345.447 426.482,344.751 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="259.593,233.01 237.102,250.979 225.798,239.425 	"/>
                                <polygon className="zongon" fill="#74C476" points="269.468,207.813 259.593,233.01 225.798,239.425 	"/>
                                <polygon className="zongon" fill="#238B45" points="305.483,206.382 259.593,233.01 269.468,207.813 	"/>
                                <polygon className="zongon" fill="#005A32" points="324.342,179.061 305.483,206.382 269.468,207.813 	"/>
                                <polygon className="zongon" fill="#238B45" points="353.287,187.175 305.483,206.382 324.342,179.061 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="368.455,163.988 353.287,187.175 324.342,179.061 	"/>
                                <polygon className="zongon" fill="#74C476" points="412.821,173.382 353.287,187.175 368.455,163.988 	"/>
                                <polygon className="zongon" fill="#238B45" points="437.32,152.203 412.821,173.382 368.455,163.988 	"/>
                                <polygon className="zongon" fill="#74C476" points="474.188,171.159 412.821,173.382 437.32,152.203 	"/>
                                <polygon className="zongon" fill="#005A32" points="491.617,153.187 474.188,171.159 437.32,152.203 	"/>
                                <polygon className="zongon" fill="#238B45" points="528.389,184.839 474.188,171.159 491.617,153.187 	"/>
                                <polygon className="zongon" fill="#74C476" points="535.229,161.767 528.389,184.839 491.617,153.187 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="554.396,196.064 528.389,184.839 535.229,161.767 	"/>
                                <polygon className="zongon" fill="#74C476" points="598.063,186.424 554.396,196.064 535.229,161.767 579.708,178.849 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="598.063,186.424 583.496,208.645 554.396,196.064 	"/>
                                <polygon className="zongon" fill="#005A32" points="596.112,230.42 596.112,230.459 583.571,225.881 583.496,208.645 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="583.571,225.881 568.54,235.521 557.313,214.77 	"/>
                                <polygon className="zongon" fill="#238B45" points="557.313,214.77 551.268,235.153 537.395,218.729 	"/>
                                <polygon className="zongon" fill="#238B45" points="539.284,248.004 523.208,234.072 537.395,218.729 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="539.284,248.004 518.532,260.506 523.208,234.072 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="537.488,264.446 526.979,287.229 518.532,260.506 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="542.686,277.201 526.979,287.229 537.488,264.446 	"/>
                                <polygon className="zongon" fill="#238B45" points="552,286.512 547.693,304.85 526.979,287.229 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="572.442,308.714 547.693,304.85 552,286.512 	"/>
                                <polygon className="zongon" fill="#238B45" points="572.442,308.714 552,286.512 566.491,289.45 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="592.73,293.489 589.388,322.609 572.442,308.714 	"/>
                                <polygon className="zongon" fill="#74C476" points="589.388,322.609 562.996,337.872 572.442,308.714 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="589.388,322.609 578.703,374.547 562.996,337.872 	"/>
                                <polygon className="zongon" fill="#74C476" points="578.703,374.547 555.305,361.56 562.996,337.872 	"/>
                                <polygon className="zongon" fill="#238B45" points="578.703,374.547 565.411,385.639 564.83,385.231 555.305,361.56 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="564.83,385.231 553.218,377.253 555.305,361.56 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="594.588,277.201 592.73,293.489 578.318,285.276 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="597.426,252.409 594.588,277.201 580.462,267.598 	"/>
                                <polygon className="zongon" fill="#238B45" points="597.426,252.409 580.462,267.598 583.032,246.38 	"/>
                                <polygon className="zongon" fill="#238B45" points="618.723,194.944 595.165,214.421 598.063,186.424 	"/>
                                <polygon className="zongon" fill="#005A32" points="618.723,194.944 617.775,225.145 595.165,214.421 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="627.746,229.725 616.635,247.095 617.775,225.145 	"/>
                                <polygon className="zongon" fill="#238B45" points="631.126,274.649 616.635,247.095 627.746,229.725 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="631.126,274.649 614.566,286.552 616.635,247.095 	"/>
                                <polygon className="zongon" fill="#74C476" points="631.126,274.649 626.817,320.676 614.566,286.552 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="626.817,320.676 602.102,344.442 614.566,286.552 	"/>
                                <polygon className="zongon" fill="#238B45" points="626.817,320.676 619.145,363.165 602.102,344.442 	"/>
                                <polygon className="zongon" fill="#74C476" points="619.145,363.165 591.67,376.498 602.102,344.442 	"/>
                                <polygon className="zongon" fill="#238B45" points="619.145,363.165 614.488,389.001 591.67,376.517 591.67,376.498 	"/>
                                <polygon className="zongon" fill="#74C476" points="614.488,389.001 603.573,406.138 586.142,393.463 	"/>
                                <polygon className="zongon" fill="#238B45" points="603.573,406.138 590.142,404.788 586.142,393.463 	"/>
                                <polygon className="zongon" fill="#74C476" points="646.177,207.098 627.746,229.725 618.723,194.944 621.715,196.18 	"/>
                                <polygon className="zongon" fill="#238B45" points="662.813,244.448 627.746,229.725 646.177,207.098 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="665.866,213.377 662.813,244.448 646.177,207.098 	"/>
                                <polygon className="zongon" fill="#74C476" points="681.112,244.448 662.813,244.448 665.866,213.377 	"/>
                                <polygon className="zongon" fill="#74C476" points="694.117,220.084 665.866,213.377 681.422,211.966 	"/>
                                <polygon className="zongon" fill="#005A32" points="694.117,220.084 694.117,235.481 681.112,244.448 	"/>
                                <polygon className="zongon" fill="#74C476" points="598.075,152.58 593.977,138.918 605.302,140.851 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="598.075,152.58 605.302,140.851 611.31,151.595 	"/>
                                <polygon className="zongon" fill="#005A32" points="607.525,161.988 598.075,152.58 611.31,151.595 	"/>
                                <polygon className="zongon" fill="#238B45" points="596.701,166.26 598.075,152.58 607.525,161.988 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="596.701,166.26 585.496,159.38 598.075,152.58 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="585.496,159.38 584.84,146.704 598.075,152.58 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="598.075,152.58 584.84,146.704 593.977,138.918 	"/>
                                <polygon className="zongon" fill="#238B45" points="297.002,268.988 273.64,286.958 272.096,273.798 	"/>
                                <polygon className="zongon" fill="#74C476" points="297.002,268.988 296.77,269.413 283.999,292.464 273.64,286.958 	"/>
                                <polygon className="zongon" fill="#238B45" points="298.857,288.967 283.999,292.464 296.77,269.413 297.042,269.471 	"/>
                                <polygon className="zongon" fill="#74C476" points="318.7,273.549 298.857,288.967 297.042,269.471 	"/>
                                <polygon className="zongon" fill="#282828" points="296.77,269.413 297.002,268.988 297.042,269.471 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="344.884,239.695 343.317,253.992 337.638,272.987 329.501,242.902 	"/>
                                <polygon className="zongon" fill="#74C476" points="344.884,239.695 329.501,242.902 342.584,232.932 341.249,237.203 	"/>
                                <polygon className="zongon" fill="#238B45" points="342.584,232.932 329.501,242.902 339.163,224.953 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="339.163,224.953 329.501,242.902 326.448,221.59 	"/>
                                <polygon className="zongon" fill="#238B45" points="329.501,242.902 302.586,232.951 326.448,221.59 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="329.501,242.902 317.696,244.97 302.586,232.951 	"/>
                                <polygon className="zongon" fill="#238B45" points="302.586,232.951 302.449,257.782 278.761,257.782 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="339.607,284.137 321.985,290.766 318.7,273.549 	"/>
                                <polygon className="zongon" fill="#238B45" points="339.607,284.137 335.049,299.944 321.985,290.766 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="350.024,300.31 335.049,299.944 339.607,284.137 	"/>
                                <polygon className="zongon" fill="#74C476" points="350.024,300.31 339.607,284.137 349.733,284.87 	"/>
                                <polygon className="zongon" fill="#238B45" points="364.726,291.015 350.024,300.31 349.733,284.87 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="364.726,291.015 349.733,284.87 357.208,280.041 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="382.947,268.988 357.208,280.041 368.187,253.221 368.398,253.026 	"/>
                                <polygon className="zongon" fill="#238B45" points="382.947,268.988 380.92,290.841 364.726,291.015 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="404.956,273.509 404.665,273.723 380.92,290.841 382.947,268.988 	"/>
                                <polygon className="zongon" fill="#238B45" points="388.396,257.782 368.398,253.026 387.739,233.743 	"/>
                                <polygon className="zongon" fill="#74C476" points="411.663,221.707 403.643,244.97 387.739,233.743 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="424.973,224.586 415.447,242.902 411.663,221.707 	"/>
                                <polygon className="zongon" fill="#238B45" points="428.935,232.604 415.447,242.902 424.973,224.586 	"/>
                                <polygon className="zongon" fill="#74C476" points="431.06,239.676 415.447,242.902 428.935,232.604 427.562,237.203 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="431.06,239.676 430.46,251.887 415.447,242.902 	"/>
                                <polygon className="zongon" fill="#74C476" points="424.396,269.626 424.414,269.896 424.377,269.896 424.335,269.779 415.447,242.902 430.46,251.887 
                                        "/>
                                <polygon className="zongon" fill="#41AB5D" points="424.897,282.688 404.993,273.878 404.975,273.664 424.396,269.974 424.377,269.896 
                                    424.414,269.896 	"/>
                                <line fill="#282828" x1="424.396" y1="269.974" x2="424.331" y2="269.786"/>
                                <polygon className="zongon" fill="#41AB5D" points="424.396,269.974 403.314,255.655 415.447,242.902 	"/>
                                <polygon className="zongon" fill="#74C476" points="424.396,269.974 404.975,273.664 404.956,273.509 403.314,255.655 	"/>
                                <polygon className="zongon" fill="#238B45" points="424.897,282.688 406.696,287.478 404.993,273.878 	"/>
                                <polygon className="zongon" fill="#74C476" points="424.897,282.688 417.169,298.589 406.696,287.478 	"/>
                                <polygon className="zongon" fill="#74C476" points="433.012,285.528 433.012,301.103 417.169,298.589 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="446.382,294.898 433.012,301.103 442.925,280.427 	"/>
                                <polygon className="zongon" fill="#74C476" points="460.7,296.851 446.382,294.898 442.925,280.427 	"/>
                                <polygon className="zongon" fill="#238B45" points="470.422,276.775 442.925,280.427 448.412,258.379 	"/>
                                <polygon className="zongon" fill="#74C476" points="478.517,260.099 470.422,276.775 448.412,258.379 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="478.517,260.099 448.412,258.379 451.466,246.09 	"/>
                                <polygon className="zongon" fill="#74C476" points="472.796,240.082 451.466,246.09 455.757,219.33 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="471.347,215.426 455.757,219.33 459.968,215.831 	"/>
                                <polygon className="zongon" fill="#74C476" points="475.328,221.184 472.876,239.522 472.758,239.58 471.347,215.426 	"/>
                                <polygon className="zongon" fill="#282828" points="472.876,239.522 472.837,239.829 472.837,239.85 472.796,240.082 472.777,239.656 472.758,239.58 	
                                    "/>
                                <polygon className="zongon" fill="#41AB5D" points="496.005,229.145 478.517,260.099 472.876,239.984 473.434,239.271 	"/>
                                <polygon className="zongon" fill="#74C476" points="496.005,229.145 473.434,239.271 486.631,222.478 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="504.195,214.517 496.005,229.145 486.631,222.478 	"/>
                                <polygon className="zongon" fill="#74C476" points="516.66,219.909 496.005,229.145 504.195,214.517 	"/>
                                <polygon className="zongon" fill="#238B45" points="516.66,219.909 505.704,242.708 496.005,229.145 	"/>
                                <polygon className="zongon" fill="#74C476" points="519.85,231.812 505.704,242.708 516.66,219.909 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="519.85,231.812 515.596,242.15 505.704,242.708 	"/>
                                <polygon className="zongon" fill="#238B45" points="559.461,444.918 534.764,456.358 532.254,448.628 	"/>
                                <polygon className="zongon" fill="#74C476" points="584.425,421.983 559.461,444.918 532.254,448.628 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="600.015,426.158 559.461,444.918 584.425,421.983 	"/>
                                <polygon className="zongon" fill="#74C476" points="609.39,411.916 600.015,426.158 584.425,421.983 	"/>
                                <polygon className="zongon" fill="#238B45" points="632.361,415.511 600.015,426.158 609.39,411.916 609.39,411.898 609.408,411.898 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="647.569,396.496 632.361,415.511 609.408,411.898 	"/>
                                <polygon className="zongon" fill="#74C476" points="662.544,410.313 632.361,415.511 647.569,396.496 	"/>
                                <polygon className="zongon" fill="#238B45" points="685.713,388.593 662.544,410.313 647.569,396.496 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="708.84,417.173 688.03,414.12 662.544,410.313 685.713,388.593 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="717.033,394.625 708.84,417.173 685.713,388.593 	"/>
                                <polygon className="zongon" fill="#005A32" points="719.969,409.867 708.84,417.173 717.033,394.625 	"/>
                                <polygon className="zongon" fill="#238B45" points="198.127,235.87 175.56,226.594 179.598,209.495 	"/>
                                <polygon className="zongon" fill="#005A32" points="175.56,226.594 152.391,236.508 155.097,212.953 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="152.391,236.508 140.16,258.902 131.176,232.836 	"/>
                                <polygon className="zongon" fill="#238B45" points="145.823,282.688 121.921,264.002 140.16,258.902 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="162.306,291.943 144.934,308.696 145.823,282.688 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="181.009,303.228 159.309,310.763 162.306,291.943 	"/>
                                <polygon className="zongon" fill="#74C476" points="187.078,272.893 181.009,303.228 162.306,291.943 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="177.163,325.237 171.02,360.421 156.992,341.602 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="198.127,235.87 171.465,246.826 175.56,226.594 	"/>
                                <polygon className="zongon" fill="#A1D99B" points="198.127,235.87 187.078,272.893 171.465,246.826 	"/>
                                <polygon className="zongon" fill="#74C476" points="213.82,249.241 204.351,281.257 187.078,272.893 	"/>
                                <polygon className="zongon" fill="#238B45" points="225.798,239.425 224.813,261.993 213.82,249.241 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="598.063,186.424 595.165,214.421 583.496,208.645 	"/>
                                <polygon className="zongon" fill="#238B45" points="627.746,229.725 617.775,225.145 618.723,194.944 	"/>
                                <polygon className="zongon" fill="#74C476" points="237.102,250.979 224.813,261.993 225.798,239.425 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="614.488,389.001 586.142,393.463 591.652,376.517 591.67,376.517 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="694.117,220.084 681.112,244.448 665.866,213.377 	"/>
                                <polygon className="zongon" fill="#74C476" points="596.112,230.42 583.496,208.645 595.165,214.421 	"/>
                                <polyline fill="#282828" points="596.112,230.42 596.132,230.459 596.112,230.459 	"/>
                                <polygon className="zongon" fill="#238B45" points="583.571,225.881 583.032,246.38 568.54,235.521 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="568.54,235.521 551.268,235.153 557.313,214.77 	"/>
                                <polygon className="zongon" fill="#74C476" points="551.268,235.153 539.284,248.004 537.395,218.729 	"/>
                                <polygon className="zongon" fill="#238B45" points="539.284,248.004 537.488,264.446 518.532,260.506 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="552,286.512 526.979,287.229 542.686,277.201 542.882,277.702 	"/>
                                <polygon className="zongon" fill="#74C476" points="578.318,285.276 572.442,308.714 566.491,289.45 	"/>
                                <polygon className="zongon" fill="#238B45" points="592.73,293.489 572.442,308.714 578.318,285.276 	"/>
                                <polygon className="zongon" fill="#74C476" points="597.426,252.409 583.032,246.38 596.112,230.477 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="596.112,230.459 596.112,230.477 583.032,246.38 583.571,225.881 	"/>
                                <line fill="#282828" x1="596.132" y1="230.459" x2="596.112" y2="230.477"/>
                                <polygon className="zongon" fill="#74C476" points="594.588,277.201 578.318,285.276 580.462,267.598 	"/>
                                <polygon className="zongon" fill="#74C476" points="364.726,349.332 353.56,370.875 333.812,343.225 	"/>
                                <polygon className="zongon" fill="#74C476" points="317.696,244.97 302.449,257.782 302.586,232.951 	"/>
                                <polygon className="zongon" fill="#74C476" points="302.449,257.782 272.096,273.798 278.761,257.782 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="302.449,257.782 297.002,268.988 272.096,273.798 	"/>
                                <polygon className="zongon" fill="#74C476" points="337.638,272.987 317.078,255.946 329.501,242.902 	"/>
                                <polygon className="zongon" fill="#238B45" points="318.7,273.549 297.042,269.471 297.002,268.988 317.078,255.946 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="337.638,272.987 318.7,273.549 317.078,255.946 	"/>
                                <polygon className="zongon" fill="#74C476" points="339.607,284.137 318.7,273.549 337.638,272.987 	"/>
                                <polygon className="zongon" fill="#74C476" points="382.947,268.988 364.726,291.015 357.208,280.041 	"/>
                                <polygon className="zongon" fill="#74C476" points="388.396,257.782 382.947,268.988 368.398,253.026 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="403.643,244.97 388.396,257.782 387.739,233.743 	"/>
                                <polygon className="zongon" fill="#238B45" points="415.447,242.902 403.643,244.97 411.663,221.707 	"/>
                                <polygon className="zongon" fill="#238B45" points="404.956,273.509 382.947,268.988 403.023,255.946 403.314,255.655 	"/>
                                <polyline fill="#282828" points="404.975,273.664 404.665,273.723 404.993,273.878 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="433.012,285.528 417.169,298.589 424.897,282.688 	"/>
                                <polygon className="zongon" fill="#238B45" points="442.925,280.427 433.012,301.103 433.012,285.528 	"/>
                                <polygon className="zongon" fill="#41AB5D" points="470.422,276.775 460.7,296.851 442.925,280.427 	"/>
                                <polygon className="zongon" fill="#238B45" points="478.517,260.099 451.466,246.09 472.796,240.082 472.876,239.984 	"/>
                                <polygon className="zongon" fill="#238B45" points="472.796,240.082 455.757,219.33 471.347,215.426 472.758,239.58 472.777,239.656 	"/>
                                <polyline fill="#282828" points="472.876,239.984 472.837,239.85 472.837,239.829 472.777,239.656 	"/>
                                <line fill="#282828" x1="473.434" y1="239.271" x2="472.876" y2="239.522"/>
                            </g>
                        </svg>
                    </div>    
                    <div className="mainattractioninternal attraction1" id="zonalstrigger">
                        <div className="mainattractioninternalsvgcontainer">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 3403 446.825" enableBackground="new 0 0 3403 446.825">
                                <g>
                                    <g>
                                        <path id="zonalssvg" fill="none" strokeWidth="8" stroke="#FFF"   d="M2260.631,202.129c-0.613-3.27-2.398-5.92-5.26-7.965c-2.855-2.043-5.922-2.756-9.186-2.145
                                            c-3.268,0.613-5.924,2.349-7.912,5.155c0,0.259-0.156,0.563-0.359,0.972l-0.256,0.256v0.662c-0.457,0.408-0.766,0.817-0.971,1.227
                                            c-0.404,1.022-0.967,1.939-1.682,2.758c-0.717,0.816-1.479,2.043-2.246,3.673c-0.818,1.432-1.785,2.911-2.758,4.442
                                            c-1.072,1.48-2.297,3.215-3.729,5.054c-1.172,1.786-2.652,3.78-4.287,5.819c-1.631,2.039-3.469,4.236-5.514,6.738
                                            c-1.785,2.039-3.828,4.289-5.973,6.686c-2.145,2.504-4.646,4.955-7.502,7.403c-5.105,5.104-10.924,10.209-17.459,15.315
                                            c-6.74,5.104-13.988,10.104-21.695,15.01c-4.133,2.244-8.369,4.542-12.762,7.038c-4.393,2.403-8.934,4.702-13.58,6.69
                                            c-4.9,2.094-9.801,4.088-14.701,5.973c-4.9,1.994-10.16,3.829-15.674,5.719c-5.309,1.634-10.768,3.164-16.387,4.695
                                            c-5.611,1.581-11.281,2.962-16.998,4.188c-5.918,1.381-11.945,2.602-18.072,3.674c-6.072,1.023-12.354,1.89-18.629,2.756
                                            c-12.508,1.582-25.369,2.758-38.645,3.372c-13.271,0.611-26.697,0.866-40.227,0.761c-13.629-0.149-27.363-0.713-41.246-1.685
                                            c-27.568-2.038-55.541-5.458-83.922-10.104c-14.092-2.448-28.076-5.106-41.965-7.962c-4.492-1.021-9.082-2.045-13.783-3.115
                                            h-0.559c-3.32,6.38-6.691,12.459-10.16,18.43c1.275-10.618,1.734-20.115,1.531-28.485c0-12.458-7.299-28.845-22-49.059
                                            l-4.344-5.769l-3.928-5.514c-3.115-4.082-5.463-7.557-7.043-10.414c-4.752-7.354-7.1-13.58-7.1-18.734
                                            c0-8.115,7.1-12.197,21.188-12.197h1.785c2.91,0,4.391-1.586,4.596-4.598v-0.309c0-3.11-1.48-4.593-4.596-4.593h-2.758
                                            c-12.043,0-21.949,1.94-29.656,5.769c-11.076,5.514-16.59,14.651-16.59,27.309c0,2.354,0.203,4.752,0.662,7.149
                                            c0,0.051,0,0.051,0,0.051c-3.369,23.739-7.404,42.573-11.994,56.51c-3.68,11.437-7.559,17.149-11.641,17.149
                                            c-3.471,0-6.432-4.592-8.883-13.777c-3.471-12.051-6.229-27.619-8.271-46.557c-1.426-15.52-0.713-34.305,2.145-56.358v-4.033
                                            c3.064-4.646,5.922-9.851,8.578-15.569c8.576-16.54,14.393-33.281,17.459-50.23c0.818-3.27,1.432-6.431,1.84-9.496
                                            c0.199-2.857,0.305-5.617,0.305-8.32V81.14c-0.205-8.624-2.453-14.392-6.742-17.458c-1.834-1.426-3.977-2.143-6.43-2.143
                                            c-15.928,0-28.076,19.811-36.447,59.422c-2.861,14.498-5.104,30.53-6.738,48.088c-0.818,6.94-1.432,13.784-1.84,20.471
                                            c-0.205,5.772-0.41,10.158-0.613,13.168v16.746c-3.471,19.447-8.471,36.807-15.006,52.071
                                            c-7.912,18.683-13.072,27.971-15.314,27.971c-3.828,0-6.076-6.485-6.586-19.603c-0.508-13.016-1.072-26.694-1.686-41.042
                                            c0-6.072,0.205-13.425,0.613-22.004v-1.834l0.359-2.145c0-1.89,0.1-3.47,0.305-4.899v-2.504c0-2.806-0.205-4.746-0.664-5.768
                                            c-0.816-3.271-4.186-5.613-10.055-7.045c-2.453-0.408-4.801-0.613-7.043-0.613c-2.658,0-4.955,0.51-6.74,1.482
                                            c-11.027-11.184-22.613-16.796-34.611-16.796h-0.305c-12.713,0-22.359,5.769-29.1,17.409c-5.514,9.541-8.27,21.236-8.27,35.12
                                            c0,0.972,0,1.94,0.049,2.856c0,0.049,0,0.104,0,0.104c-2.961,17.764-6.021,32.928-9.236,45.536
                                            c-5.309,21.286-9.957,31.905-13.785,31.905c-3.266,0-5.309-6.79-6.127-20.217c-0.254-4.49-0.457-11.334-0.613-20.574
                                            c2.658-41.81,3.779-69.578,3.371-83.257c-0.459-18.583-5-29.202-13.783-31.854c-4.135-1.275-8.73,0.613-13.781,5.514
                                            c-1.838,2.043-3.982,4.491-6.436,7.297c-0.611,0.869-1.324,2.094-2.143,3.73c-0.818,0.818-1.686,1.783-2.447,3.062
                                            c-7.15,11.026-13.172,26.49-18.072,46.352c-4.9,19.96-8.27,33.281-10.109,39.972l-0.918-8.885
                                            c-1.84-15.314-4.082-27.309-6.738-36.092c-0.818-2.244-1.531-4.338-2.145-6.121c-1.072-2.503-2.145-4.597-3.369-6.434
                                            c-3.063-4.695-6.637-7.096-10.719-7.096c-2.658,0-5.514,1.07-8.574,3.113c-2.453,1.63-4.598,3.774-6.438,6.431
                                            c-0.459,0.614-0.611,1.432-0.611,2.448c0,0.564,0.152,1.332,0.611,2.145c0.664,1.275,1.332,2.762,1.939,4.392
                                            c-0.402,2.148-0.867,4.292-1.375,6.331c-1.432,5.514-3.166,10.414-5.154,14.703c-5.359,11.434-12.408,17.151-21.137,17.151
                                            c-1.836,0-3.57-0.104-5.205-0.358c1.021-5.514,1.529-11.076,1.529-16.793c0-4.494-0.305-9.084-0.916-13.836
                                            c-0.818-5.868-1.939-12.811-3.371-20.827c-3.877-20.365-9.75-32.519-17.713-36.397l-0.309-0.309
                                            c-0.205-1.223-0.508-2.344-0.916-3.365c-2.045-6.127-5.359-10.822-10.057-14.094c-4.086-2.65-8.523-3.977-13.424-3.977
                                            c-11.592,0-20.68,9.595-27.16,28.737c-5.055,14.907-7.861,31.089-8.375,48.651c-2.855,7.298-7.299,16.027-13.32,26.133
                                            c-3.469,6.076-7.656,12.867-12.557,20.219c-1.84,2.653-3.879,5.613-6.129,8.828l-1.225,2.145l-1.529,1.89
                                            c-1.023,1.636-1.842,2.86-2.449,3.624l-7.658,11.691c-1.43-1.022-2.961-1.939-4.596-2.758c-2.656-1.275-5.514-1.889-8.574-1.889
                                            c-3.271,0-6.23,0.768-8.883,2.192c1.225-11.634,6.635-29.601,16.23-53.904l5.822-14.702l0.918-2.143l0.918-2.758
                                            c0.816-2.038,1.529-4.033,2.143-5.816c1.637-4.498,2.453-8.066,2.453-10.774v-0.611c0-0.36-0.105-0.868-0.309-1.481
                                            c-0.41-1.43-1.426-2.348-3.061-2.756c-0.818-0.205-1.635-0.311-2.453-0.311h-2.143l-3.676,0.617l-3.674,0.918
                                            c-8.783,1.428-15.928,2.349-21.441,2.758c-2.043,0.205-4.082,0.255-6.127,0.255c-2.652,0-5-0.149-7.043-0.613
                                            c-5.719-0.563-9.803-2.145-12.254-4.542c-1.631-2.045-4.033-1.48-7.193,1.686c-3.166,3.16-0.465,6.48,8.115,9.949
                                            c5.105,2.045,11.332,3.065,18.684,3.065c2.039,0,4.184-0.104,6.432-0.304c2.652-0.209,5.311-0.408,7.961-0.617l-3.369,7.303
                                            c-5.105,10.056-9.951,23.381-14.547,40.021c-4.596,16.646-7.094,26.696-7.504,30.171c-0.408,2.248-0.613,4.393-0.613,6.381
                                            c0,6.178,1.531,10.464,4.594,12.916c2.043,1.172,4.291,1.786,6.738,1.786c1.021,0,2.145-0.099,3.371-0.255
                                            c2.855-0.465,6.127-1.74,9.801-3.983l0.309-0.31c2.652-2.855,5.816-4.287,9.492-4.287c2.861,0,5.514,0.818,7.965,2.453
                                            c-9.396,13.835-16.645,25.523-21.75,34.867c-1.426,2.502-2.553,4.646-3.365,6.43c-1.43,2.912-2.656,5.514-3.678,8.017
                                            c-2.447,6.28-3.676,11.794-3.676,16.54c0,6.482,2.654,11.487,7.963,14.955c3.678,2.045,7.557,3.112,11.641,3.112
                                            c2.043,0,4.287-0.354,6.738-0.968c7.35-1.634,13.377-5.922,18.072-12.811c5.309-8.016,7.961-18.535,7.961-31.547
                                            c0-17.357-2.652-30.324-7.961-38.904l9.188-13.525c0.613-0.764,1.531-2.145,2.756-3.932l1.531-2.195l1.227-2.143
                                            c2.447-3.42,4.592-6.586,6.432-9.443c5.104-7.762,9.496-14.706,13.17-20.827c1.736-2.911,3.32-5.772,4.746-8.476
                                            c1.381,12.813,4.646,24.299,9.906,34.458c7.912,15.315,17.967,22.972,30.219,22.972c9.957,0,18.277-3.729,25.016-11.281
                                            c5.867-6.331,10.26-14.906,13.117-25.729c2.453,0.409,4.752,0.613,7.045,0.613l3.064-0.357
                                            c10.563-1.173,19.039-7.914,25.42-20.217c1.43-2.703,2.756-5.612,3.883-8.834c1.123,5.874,2.039,12.613,2.857,20.22
                                            c1.021,7.962,1.684,16.485,2.143,25.726c0.41,2.656,0.613,5.104,0.613,7.301c0,1.073,1.277,1.892,3.984,2.498
                                            c2.193,0.619,4.898,0.922,7.961,0.922h0.611c3.676,0,6.791-0.406,9.498-1.275c3.266-0.764,5.514-1.988,6.736-3.625V283.6
                                            c0.152-0.201,0.357-0.511,0.611-0.969c2.25-7.91,5.514-19.756,9.957-35.529c4.391-15.674,9.342-31.088,14.854-46.197
                                            c5.516-13.072,8.322-19.602,8.576-19.602c0.613,0.408,1.072,1.934,1.531,4.541c0.152,0.867,0.309,1.889,0.309,3.117v2.142
                                            c0,5.714-0.613,13.067-1.84,22.001c-0.613,37.418-0.818,57.733-0.613,61.004c0.613,8.37,1.686,15.518,3.369,21.436
                                            c4.646,16.081,13.988,24.148,27.873,24.148c6.943,0,13.016-5.105,18.381-15.316c1.834-3.672,3.469-7.805,4.9-12.557
                                            c0.607-1.784,1.121-3.623,1.529-5.457c0.205-0.62,0.41-1.432,0.613-2.455l0.305-0.916l0.309-0.973
                                            c1.68-6.127,3.266-12.967,4.846-20.469c0.359,1.172,0.768,2.35,1.227,3.42c5.922,13.629,15.469,20.418,28.486,20.418
                                            c6.176,0,12.148-2.094,18.07-6.38c4.695-3.267,8.779-6.226,12.303-8.933c3.674,24.961,8.016,41.706,13.172,50.23
                                            c5.254,9.236,10.414,13.523,15.314,12.916c9.342,1.783,19.242-12.1,29.656-41.656c4.85-13.785,9.242-27.209,13.172-40.279
                                            c1.225,9.143,2.859,17.053,4.898,23.688c6.127,20.878,16.641,31.293,31.547,31.293c7.148,0,13.48-3.47,18.994-10.415
                                            c4.287-5.31,7.961-12.453,11.027-21.492c3.471-10.666,6.635-23.838,9.492-39.508c3.215,5.207,7.762,11.382,13.529,18.426
                                            l8.523,9.803c3.063,3.624,5.41,6.84,7.045,9.492c4.695,6.949,6.943,16.439,6.791,28.484c-0.256,11.999-3.117,22.004-8.631,30.02
                                            l-3.314,4.289c-1.072,1.586-1.994,3.011-2.758,4.286c-3.523,4.696-5.412,9.492-5.717,14.497c-0.305,5.055,0.203,8.27,1.529,9.852
                                            c1.326,1.535,2.809,2.605,4.441,3.219c18.58,3.216,36.857-16.08,54.877-57.887c1.785,0.354,3.729,0.762,5.768,1.17
                                            c13.885,2.857,27.979,5.41,42.32,7.658c14.242,2.299,28.385,4.287,42.369,6.178c13.988,1.834,28.131,3.369,42.473,4.597
                                            c27.922,1.988,55.59,2.649,82.953,1.784c13.475-0.41,26.646-1.326,39.563-2.758c6.482-0.611,12.918-1.43,19.244-2.398
                                            c6.33-1.07,12.563-2.144,18.684-3.369c6.332-1.072,12.457-2.348,18.227-3.828c5.816-1.531,11.586-3.063,17.305-4.443
                                            c5.717-1.889,11.23-3.672,16.539-5.562c5.311-1.79,10.52-3.726,15.674-5.769c5.055-2.043,10.006-4.188,14.801-6.431
                                            c4.801-2.247,9.447-4.597,13.939-7.099c4.285-2.398,8.475-4.9,12.557-7.502c4.082-2.503,7.961-5.107,11.691-7.813
                                            c7.705-5.056,14.447-10.26,20.215-15.414c5.668-5.261,10.771-10.26,15.314-15.215c4.645-4.438,8.574-8.729,11.738-12.663
                                            c3.166-3.979,5.768-7.398,7.863-10.31c2.193-3.012,3.828-5.255,4.85-6.684c0-0.614,0.305-1.228,0.918-1.842l0.357-0.307
                                            C2260.477,208.457,2261.244,205.396,2260.631,202.129z M1663.93,102.891c0-1.021,0.1-1.94,0.305-2.756
                                            c0.205-1.278,0.508-2.503,0.918-3.68c0.613-2.652,1.127-5.254,1.535-7.658c2.242-5.916,4.592-9.492,7.043-10.768h0.305
                                            c0.203,0.867,0.309,2.145,0.309,4.033c0,2.248-0.105,4.801-0.309,7.656c-0.203,2.041-0.508,4.184-0.918,6.383
                                            c-0.408,1.684-0.717,3.115-0.916,4.285c-2.658,11.691-6.641,23.537-11.949,35.529
                                            C1660.865,123.105,1662.09,112.078,1663.93,102.891z M1211.287,337.762c0,10.414-1.74,19.039-5.211,25.73
                                            c-3.061,5.513-6.943,9.34-11.641,11.385c-2.039,0.764-3.977,1.172-5.816,1.172c-2.045,0-3.984-0.459-5.818-1.53
                                            c-3.475-1.636-5.211-4.188-5.211-7.657v-0.256c0.205-3.673,1.637-8.474,4.289-14.396c0.818-2.094,1.84-4.286,3.066-6.789
                                            l1.529-2.398c0.205-0.816,0.613-1.535,1.227-2.143c4.695-8.834,11.127-19.244,19.293-31.242
                                            c2.861,6.895,4.293,15.108,4.293,24.502V337.762z M1319.096,265.223c-1.223,2.863-2.447,5.414-3.723,7.657
                                            c-3.217,5.923-7.15,8.885-11.592,8.885c-7.961,0-14.188-5.823-18.68-17.46c-3.475-10.004-5.209-22.563-5.209-37.678
                                            c0-14.495,1.326-28.889,4.033-43.18c3.215-15.725,7.197-23.586,11.895-23.586c0.613,0,1.375,0.509,2.453,1.531
                                            c0.967,0.816,1.68,1.634,2.143,2.452c-4.547,2.448-8.121,7.552-10.773,15.313c-2.396,7.146-3.623,15.21-3.623,24.144
                                            c0,13.116,3.215,24.502,9.801,34.353c6.738,9.803,15.158,16.646,25.424,20.525
                                            C1320.631,260.836,1319.863,263.179,1319.096,265.223z M1323.029,248.633c-7.912-3.42-14.602-9.188-19.855-17.1
                                            c-5.16-8.016-7.658-17.358-7.658-28.231c0-6.485,0.762-12.099,2.447-16.796c2.248-5.718,5.211-8.572,8.885-8.572
                                            c0.762,0,1.529,0.197,2.143,0.607c2.447,1.026,4.697,4.088,6.74,9.191c1.375,3.676,2.758,8.166,3.979,13.425
                                            c2.861,10.874,4.287,22.001,4.287,33.438C1323.996,239.291,1323.691,243.986,1323.029,248.633z M1558.006,226.273
                                            c-0.465,5.973-1.176,13.631-2.145,22.971l-0.309,1.277l-0.664,0.867c-0.203,1.275-0.457,2.145-0.867,2.758
                                            c-0.611,2.299-1.381,4.137-2.143,5.514c-2.504,4.545-5.465,6.789-8.885,6.789c-4.492,0-8.523-3.471-11.943-10.414
                                            c-1.48-2.502-2.707-5.26-3.674-8.271c-0.867-2.451-1.432-4.645-1.84-6.43c-0.205-5.105-0.305-10.309-0.305-15.674
                                            c0-2.398,0.15-5.358,0.559-8.833c0.613-4.337,1.43-8.166,2.502-11.636c2.807-9.596,6.74-14.447,11.641-14.447
                                            c4.082,0,8.012,1.48,11.945,4.289c2.602,2.093,5.662,5.053,9.188,8.933C1559.584,211.314,1558.619,218.771,1558.006,226.273z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="mainattractioninternaltextcontainer">
                            <p id="zonalstext">'Karwaan'-the Zonals of Thomso, IIT Roorkee are on initiative to connect Thomso to regions across the length and breadth of the country. Thomso carries out its 'Talent Hunt' at several cities to providethe college students and the cultural societies an opportunity to enter the finals of highly diverse and competitive events of Thomso.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Fourth page --> */}
                <div className="mainthirdinternalcontainer" id="onlineeventssvgtrigger">
                    <div className="mainattractioninternal attraction2" id="onlinetrigger" >
                        <div className="mainattractioninternalsvgcontainer">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 3403 446.825" enableBackground="new 0 0 3403 446.825">
                                <g>
                                    <g>
                                        <path  d="M1621.663,144.52c-2.449-4.49-6.43-7.246-11.943-8.27c-1.227-0.203-2.551-0.303-3.982-0.303
                                            c-4.082,0-7.861,1.221-11.332,3.674c-4.086,2.859-6.638,6.635-7.657,11.336c-0.613,1.834-0.919,3.57-0.919,5.203
                                            c0,3.471,1.021,6.432,3.063,8.885c2.654,3.674,6.431,5.924,11.333,6.734c1.43,0.205,2.754,0.305,3.98,0.305
                                            c3.473,0,6.738-0.918,9.802-2.752c4.491-2.451,7.555-6.535,9.19-12.254c0.405-1.426,0.609-2.961,0.609-4.596
                                            C1623.808,149.831,1623.095,147.18,1621.663,144.52z"/>
                                        <path id="onlinesvg" fill="none" strokeWidth="7" stroke="#FFF" d="M1904.064,212.215c-0.817-1.227-2.044-1.943-3.677-2.148h-0.92c-1.223,0-2.347,0.305-3.367,0.922
                                            c-1.227,1.016-1.941,2.244-2.146,3.676c-0.406,3.059-0.813,6.021-1.223,8.877c-0.613,3.883-1.328,7.557-2.145,11.027
                                            c-1.836,9.801-4.085,18.484-6.739,26.037c-8.37,14.293-17.663,21.441-27.872,21.441c-9.801,0-16.539-2.961-20.216-8.834
                                            c-3.673-4.441-6.226-9.951-7.655-16.436c-1.226-5.258-2.043-10.771-2.451-16.436c11.129-0.818,20.063-3.371,26.75-7.607
                                            c8.115-5.516,12.148-13.529,12.148-24.1c0-8.523-3.369-15.822-10.107-21.893c-6.736-6.283-14.496-9.449-23.277-9.449
                                            c-10.619,0-19.193,4.293-25.729,12.818c-7.556,9.391-11.332,22.916-11.332,40.629c0,2.811,0.103,5.563,0.356,8.221
                                            c0,0.055,0,0.055,0,0.104c-3.011,18.629-6.177,34.457-9.546,47.574c-5.309,21.236-9.903,31.854-13.781,31.854
                                            c-3.269,0-5.311-6.734-6.127-20.213c-0.205-4.492-0.408-11.338-0.613-20.52c2.654-41.865,3.778-69.633,3.369-83.313
                                            c-0.408-18.586-5.003-29.203-13.783-31.855c-4.084-1.225-8.678,0.613-13.782,5.514c-1.839,2.045-3.982,4.492-6.433,7.348
                                            c-0.613,0.818-1.326,2.045-2.145,3.68c-0.818,0.818-1.632,1.836-2.449,3.061c-7.146,11.027-13.172,26.496-18.072,46.402
                                            c-4.899,19.91-8.27,33.23-10.107,39.971l-0.92-8.881c-1.836-15.316-4.082-27.359-6.736-36.145
                                            c-0.817-2.242-1.531-4.287-2.144-6.121c-1.022-2.453-2.145-4.598-3.37-6.432c-3.064-4.695-6.636-7.049-10.721-7.049
                                            c-2.654,0-5.512,1.021-8.574,3.066c-2.451,1.629-4.595,3.773-6.434,6.43c-0.408,0.613-0.611,1.432-0.611,2.449
                                            c0,0.617,0.203,1.33,0.611,2.145c0.205,0.406,0.461,0.869,0.664,1.33c-3.013,22.104-6.789,38.799-11.383,50.125
                                            c-1.635,4.088-6.127,6.639-13.478,7.658c-3.677-0.201-6.228-1.477-7.657-3.83c-1.43-2.342-2.451-5.512-3.063-9.49
                                            c-0.613-3.984-0.921-6.178-0.921-6.586l-0.917-9.801l-1.227-9.801c-0.814-7.354-1.837-13.785-3.063-19.299
                                            c-0.611-2.652-1.326-5.006-2.144-7.045c-0.816-2.656-1.735-5.104-2.759-7.352c-2.654-5.305-6.122-8.574-10.412-9.801
                                            c-1.02-0.41-2.246-0.607-3.675-0.607c-1.837,0-3.88,0.607-6.126,1.834c-1.838,1.227-3.471,2.652-4.9,4.285
                                            c-3.674,4.09-5.514,8.785-5.514,14.09v2.762c0,0.609,0.203,1.326,0.612,2.145c0.204,0.354,0.356,0.764,0.561,1.17
                                            c-3.521,25.271-7.706,45.182-12.505,59.777c-3.676,11.438-7.555,17.154-11.641,17.154c-3.47,0-6.431-4.596-8.881-13.785
                                            c-3.473-12.043-6.229-27.566-8.27-46.555c-1.43-15.52-0.717-34.303,2.143-56.359v-3.977c3.063-4.697,5.922-9.904,8.577-15.623
                                            c8.575-16.541,14.396-33.281,17.458-50.23c0.818-3.271,1.43-6.432,1.837-9.496c0.204-2.857,0.308-5.615,0.308-8.271v-2.449
                                            c-0.205-8.578-2.451-14.396-6.738-17.461c-1.838-1.426-3.984-2.145-6.434-2.145c-15.925,0-28.076,19.811-36.446,59.424
                                            c-2.858,14.496-5.104,30.527-6.739,48.086c-0.815,6.939-1.429,13.783-1.838,20.52c-0.205,5.723-0.409,10.111-0.613,13.17v23.281
                                            c0.104,1.684,0.154,3.266,0.257,4.797v0.049c-2.961,18.33-6.127,33.949-9.443,46.916c-5.31,21.236-9.903,31.854-13.785,31.854
                                            c-3.269,0-5.31-6.734-6.124-20.213c-0.204-4.492-0.408-11.338-0.613-20.52c2.655-41.865,3.777-69.633,3.37-83.313
                                            c-0.409-18.586-5.005-29.203-13.784-31.855c-4.082-1.225-8.679,0.613-13.783,5.514c-1.838,2.045-3.98,4.492-6.431,7.348
                                            c-0.614,0.818-1.329,2.045-2.145,3.68c-0.817,0.818-1.635,1.836-2.45,3.061c-7.149,11.027-13.171,26.496-18.07,46.402
                                            c-4.9,19.91-8.271,33.23-10.108,39.971l-0.919-8.881c-1.838-15.316-4.084-27.359-6.738-36.145
                                            c-0.818-2.242-1.533-4.287-2.143-6.121c-1.023-2.453-2.146-4.598-3.371-6.432c-3.063-4.695-6.638-7.049-10.72-7.049
                                            c-2.655,0-5.515,1.021-8.577,3.066c-2.451,1.629-4.594,3.773-6.432,6.43c-0.408,0.613-0.613,1.432-0.613,2.449
                                            c0,0.617,0.205,1.33,0.613,2.145c0.663,1.275,1.326,2.76,1.938,4.395c-0.407,2.145-0.817,4.287-1.325,6.326
                                            c-1.431,5.514-3.166,10.416-5.207,14.701c-5.309,11.438-12.354,17.154-21.135,17.154c-1.838,0-3.573-0.105-5.207-0.303
                                            c1.021-5.514,1.53-11.133,1.53-16.852c0-4.49-0.304-9.082-0.917-13.777c-0.766-5.924-1.889-12.869-3.318-20.83
                                            c-3.88-20.418-9.803-32.572-17.713-36.449l-0.309-0.311c-0.204-1.221-0.51-2.344-0.917-3.365
                                            c-2.043-6.127-5.41-10.822-10.058-14.094c-4.082-2.652-8.576-3.979-13.424-3.979c-11.589,0-20.678,9.598-27.16,28.791
                                            c-5.715,16.541-8.574,34.611-8.574,54.215l-3.676-0.613c-13.885-2.857-27.975-5.41-42.268-7.658
                                            c-14.296-2.248-28.436-4.287-42.422-6.127c-13.988-1.834-28.129-3.369-42.421-4.59c-27.975-2.045-55.642-2.66-83.005-1.842
                                            c-13.476,0.41-26.646,1.326-39.51,2.758c-6.535,0.611-12.967,1.43-19.297,2.449c-6.33,1.025-12.561,2.148-18.684,3.369
                                            c-6.331,1.025-12.405,2.301-18.227,3.828c-5.817,1.535-11.586,3.012-17.303,4.447c-5.719,1.834-11.231,3.668-16.541,5.514
                                            c-5.31,1.834-10.517,3.773-15.621,5.813c-5.105,2.043-10.055,4.188-14.853,6.436c-4.799,2.246-9.446,4.592-13.937,7.043
                                            c-4.29,2.453-8.475,4.955-12.559,7.508s-7.963,5.156-11.641,7.809c-7.759,5.104-14.496,10.258-20.214,15.467
                                            c-5.718,5.205-10.823,10.26-15.315,15.16c-4.695,4.492-8.626,8.73-11.792,12.713c-3.165,3.979-5.768,7.396-7.81,10.26
                                            c-2.245,3.061-3.881,5.309-4.9,6.738c0,0.609-0.307,1.229-0.918,1.834l-0.309,0.311c-2.041,2.857-2.756,5.924-2.143,9.189
                                            c0.613,3.264,2.348,5.92,5.206,7.961c2.858,2.043,5.923,2.76,9.188,2.143c3.268-0.607,5.923-2.344,7.964-5.205
                                            c0-0.203,0.103-0.508,0.307-0.916l0.307-0.311v-0.607c0.409-0.408,0.715-0.818,0.919-1.227c0.407-1.023,0.971-1.943,1.684-2.762
                                            c0.714-0.813,1.479-2.039,2.297-3.668c0.818-1.438,1.736-2.912,2.758-4.447c1.021-1.527,2.246-3.211,3.676-5.051
                                            c1.225-1.84,2.652-3.777,4.289-5.816c1.631-2.045,3.468-4.293,5.513-6.74c1.837-2.045,3.828-4.289,5.972-6.74
                                            c2.145-2.453,4.646-4.9,7.504-7.35c5.104-5.104,10.924-10.209,17.459-15.313c6.738-5.107,13.986-10.109,21.746-15.012
                                            c4.082-2.248,8.32-4.59,12.713-7.045c4.389-2.451,8.934-4.695,13.629-6.738c4.899-2.045,9.801-4.033,14.701-5.973
                                            s10.107-3.83,15.621-5.664c5.31-1.633,10.771-3.219,16.387-4.75c5.615-1.531,11.281-2.906,16.998-4.133
                                            c5.921-1.432,11.945-2.656,18.072-3.68c6.125-1.016,12.354-1.939,18.682-2.75c12.455-1.637,25.32-2.762,38.594-3.371
                                            c13.272-0.619,26.697-0.867,40.277-0.768c13.579,0.1,27.311,0.664,41.193,1.684c27.568,2.045,55.543,5.414,83.924,10.111
                                            c14.092,2.447,28.076,5.105,41.963,7.963c2.245,0.611,4.287,1.121,6.127,1.527c1.224,13.891,4.695,26.244,10.414,37.061
                                            c7.911,15.316,17.967,22.973,30.168,22.973c10.006,0,18.327-3.779,25.066-11.332c5.869-6.332,10.259-14.904,13.118-25.727
                                            c2.399,0.406,4.748,0.611,6.993,0.611l3.064-0.305c10.617-1.225,19.089-7.965,25.421-20.219c1.479-2.752,2.806-5.713,3.931-8.984
                                            c1.072,5.875,1.992,12.664,2.807,20.32c1.021,7.963,1.737,16.541,2.143,25.723c0.41,2.658,0.614,5.105,0.614,7.355
                                            c0,1.02,1.328,1.838,3.983,2.451c2.246,0.613,4.9,0.918,7.961,0.918h0.613c3.678,0,6.842-0.41,9.494-1.221
                                            c3.268-0.818,5.514-2.045,6.74-3.68v-0.311c0.205-0.197,0.41-0.508,0.613-0.916c2.246-7.961,5.563-19.807,9.953-35.529
                                            c4.389-15.719,9.342-31.137,14.855-46.248c5.514-13.07,8.373-19.6,8.577-19.6c0.611,0.406,1.122,1.938,1.53,4.59
                                            c0.205,0.818,0.307,1.84,0.307,3.064v2.145c0,5.715-0.613,13.066-1.837,22.055c-0.614,37.363-0.818,57.678-0.614,60.947
                                            c0.614,8.377,1.736,15.521,3.367,21.443c4.7,16.125,13.99,24.191,27.876,24.191c6.94,0,13.065-5.104,18.375-15.313
                                            c1.84-3.676,3.473-7.857,4.899-12.555c0.614-1.838,1.125-3.678,1.535-5.512c0.203-0.619,0.407-1.432,0.611-2.453l0.305-0.918
                                            l0.307-0.916c1.48-5.465,2.961-11.389,4.34-17.922c0.766,3.932,1.685,7.553,2.707,10.871c6.125,20.83,16.64,31.242,31.547,31.242
                                            c7.145,0,13.477-3.471,18.99-10.412c4.287-5.311,7.963-12.453,11.025-21.438c2.809-8.684,5.41-18.893,7.861-30.838
                                            c0,0.457,0.053,0.973,0.102,1.43l0.307,3.066l0.307,2.754c1.023,5.512,2.145,10.008,3.369,13.479
                                            c1.635,4.49,4.494,9.031,8.576,13.629c4.086,4.596,13.58,6.994,28.484,7.197c11.436-0.814,20.063-6.23,25.883-16.23
                                            c4.799-8.275,8.219-17.457,10.107-27.566c0.508,3.42,0.971,7.092,1.379,11.025c1.02,7.963,1.736,16.541,2.144,25.723
                                            c0.409,2.658,0.614,5.105,0.614,7.355c0,1.02,1.324,1.838,3.98,2.451c2.245,0.613,4.899,0.918,7.963,0.918h0.613
                                            c3.674,0,6.84-0.41,9.494-1.221c3.268-0.818,5.514-2.045,6.738-3.68v-0.311c0.204-0.197,0.408-0.508,0.613-0.916
                                            c2.246-7.961,5.563-19.807,9.955-35.529c4.389-15.719,9.34-31.137,14.853-46.248c5.514-13.07,8.372-19.6,8.577-19.6
                                            c0.613,0.406,1.121,1.938,1.531,4.59c0.204,0.818,0.307,1.84,0.307,3.064v2.145c0,5.715-0.613,13.066-1.838,22.055
                                            c-0.613,37.363-0.818,57.678-0.613,60.947c0.613,8.377,1.734,15.521,3.371,21.443c4.695,16.125,13.985,24.191,27.871,24.191
                                            c6.942,0,13.068-5.104,18.379-15.313c1.837-3.676,3.469-7.857,4.9-12.555c0.613-1.838,1.121-3.678,1.529-5.512
                                            c0.205-0.619,0.41-1.432,0.613-2.453l0.308-0.918l0.306-0.916c2.296-8.377,4.492-18.027,6.483-28.795
                                            c2.349,5.203,5.36,10.004,8.983,14.447c8.065,10.16,22.104,15.773,42.114,16.795c16.54-0.613,28.894-6.945,37.063-18.99
                                            c5.104-7.965,8.982-17.766,11.637-29.402c2.041-8.17,3.779-17.666,5.208-28.484v-1.227
                                            C1905.289,214.049,1904.88,213.028,1904.064,212.215z M1551.833,111.749c0-1.021,0.099-1.939,0.303-2.758
                                            c0.205-1.225,0.511-2.451,0.92-3.672c0.613-2.658,1.125-5.211,1.531-7.658c2.248-5.922,4.596-9.496,7.045-10.723h0.308
                                            c0.201,0.818,0.305,2.145,0.305,3.982c0,2.25-0.104,4.801-0.305,7.658c-0.204,2.039-0.511,4.188-0.921,6.434
                                            c-0.408,1.633-0.715,3.063-0.919,4.289c-2.654,11.635-6.636,23.48-11.944,35.525
                                            C1548.769,131.963,1549.991,120.936,1551.833,111.749z M1341.104,274.081c-1.225,2.861-2.451,5.416-3.676,7.658
                                            c-3.268,5.924-7.147,8.883-11.64,8.883c-7.964,0-14.14-5.822-18.632-17.457c-3.472-10.004-5.26-22.563-5.26-37.674
                                            c0-14.502,1.379-28.895,4.086-43.188c3.216-15.723,7.146-23.584,11.842-23.584c0.613,0,1.432,0.508,2.451,1.531
                                            c1.021,0.818,1.736,1.635,2.143,2.451c-4.491,2.447-8.063,7.553-10.717,15.316c-2.451,7.143-3.678,15.209-3.678,24.197
                                            c0,13.066,3.269,24.496,9.801,34.299c6.74,9.799,15.212,16.646,25.423,20.523C1342.634,269.694,1341.922,272.036,1341.104,274.081
                                            z M1345.087,257.542c-7.964-3.471-14.602-9.189-19.91-17.15c-5.105-7.967-7.658-17.359-7.658-28.176
                                            c0-6.539,0.818-12.154,2.45-16.85c2.245-5.719,5.208-8.576,8.884-8.576c0.817,0,1.529,0.205,2.144,0.609
                                            c2.45,1.027,4.695,4.088,6.737,9.193c1.431,3.674,2.757,8.164,3.984,13.475c2.858,10.822,4.286,21.949,4.286,33.385
                                            C1346.004,248.147,1345.698,252.846,1345.087,257.542z M1828.104,200.569c2.194-6.734,5.818-10.104,10.873-10.104
                                            c3.625,0,6.993,2.143,10.006,6.436c2.807,4.078,4.234,7.961,4.234,11.637c0,7.146-3.01,12.352-9.084,15.623
                                            c-4.646,2.652-10.926,4.285-18.787,4.895C1825.347,215.991,1826.266,206.491,1828.104,200.569z"/>
                                        <path id="onlinesvg1" fill="none" strokeWidth="7" stroke="#FFF" d="M2601.178,211.292h-0.917c-2.654,0-4.188,1.328-4.595,3.984c-4.494,33.076-17.866,68.811-40.126,107.203
                                            c1.227-10.621,1.738-20.117,1.533-28.488c0-12.455-7.352-28.793-22.054-49.004l-4.288-5.82l-3.98-5.514
                                            c-3.063-4.084-5.411-7.559-7.047-10.416c-4.695-7.352-7.043-13.574-7.043-18.678c0-8.172,7.043-12.256,21.133-12.256h1.838
                                            c2.859,0,4.39-1.535,4.594-4.596v-0.309c0-3.061-1.53-4.592-4.594-4.592h-2.757c-12.046,0-21.95,1.939-29.709,5.818
                                            c-11.028,5.514-16.542,14.602-16.542,27.26c0,3.727,0.564,7.557,1.637,11.436c-5.261,26.801-10.773,50.031-16.645,69.732
                                            c-0.816,3.879-1.631,7.756-2.449,11.641c-1.223,5.514-2.45,10.514-3.674,15.01c-3.472,12.25-6.639,18.375-9.498,18.375
                                            c-3.672,0-6.635-8.783-8.881-26.342c-0.816-6.127-1.532-13.17-2.143-21.137c-0.205-3.061-0.307-6.326-0.307-9.801l-0.613-7.35
                                            c-0.613-5.922-0.92-12.762-0.92-20.518c0-9.193,0.409-19.811,1.227-31.855c0.818-11.436,2.552-30.121,5.207-56.055
                                            c1.837-0.197,3.674-0.303,5.513-0.303h1.226c5.718,0.408,10.822,2.857,15.313,7.354c1.023,1.221,2.145,1.834,3.371,1.834
                                            c1.02,0,2.143-0.613,3.37-1.834c1.224-1.025,1.837-2.145,1.837-3.371c0-1.02-0.613-2.143-1.837-3.369
                                            c-6.536-6.74-14.397-10.109-23.585-10.109c-1.432,0-2.757,0.1-3.982,0.309c0.408-4.496,1.737-12.762,3.982-24.811v-1.229
                                            c0-1.221-0.512-2.246-1.533-3.059c-0.406-0.408-1.02-0.924-1.837-1.531c-0.612-0.211-1.224-0.514-1.837-0.916
                                            c-2.451-1.027-4.799-1.846-7.044-2.455c-1.431-0.203-2.757-0.307-3.983-0.307c-2.45,0-4.594,0.512-6.432,1.535
                                            c-2.654,1.424-4.391,3.777-5.206,7.039v0.309c-0.408,1.432-0.716,2.652-0.921,3.678c-0.408,1.631-0.715,3.162-0.919,4.594
                                            c-0.61,3.475-1.224,6.734-1.837,9.799c-0.613,2.248-1.633,7.354-3.063,15.316c-2.859,0.611-5.514,0.92-7.964,0.92
                                            c-1.021,0-2.145-0.104-3.368-0.309c-4.492-0.816-8.475-3.68-11.947-8.574c-1.019-1.635-2.246-2.453-3.674-2.453
                                            c-0.817,0-1.734,0.311-2.758,0.918c-1.631,1.227-2.449,2.553-2.449,3.984c0,0.816,0.307,1.738,0.919,2.756
                                            c6.125,8.783,13.986,13.17,23.583,13.17c2.044,0,4.086-0.203,6.127-0.613c-3.317,21.592-5.309,41.811-5.869,60.695
                                            c-3.064,19.092-6.332,35.275-9.752,48.65c-5.309,21.236-9.903,31.854-13.784,31.854c-3.265,0-5.307-6.734-6.124-20.213
                                            c-0.204-4.492-0.408-11.338-0.613-20.52c2.654-41.865,3.778-69.633,3.369-83.313c-0.408-18.586-5.001-29.203-13.783-31.855
                                            c-4.084-1.225-8.677,0.613-13.782,5.514c-1.839,2.045-3.983,4.492-6.433,7.348c-0.613,0.818-1.326,2.045-2.144,3.68
                                            c-0.817,0.818-1.633,1.836-2.451,3.061c-7.146,11.027-13.17,26.496-18.071,46.402c-4.9,19.91-8.27,33.23-10.106,39.971
                                            l-0.921-8.881c-1.836-15.316-4.082-27.359-6.736-36.145c-0.818-2.242-1.53-4.287-2.145-6.121
                                            c-1.021-2.453-2.144-4.598-3.369-6.432c-3.063-4.695-6.635-7.049-10.721-7.049c-2.654,0-5.514,1.021-8.575,3.066
                                            c-2.45,1.629-4.597,3.773-6.433,6.43c-0.409,0.613-0.613,1.432-0.613,2.449c0,0.617,0.204,1.33,0.613,2.145
                                            c0.358,0.717,0.715,1.436,1.07,2.246c-0.151,1.123-0.305,2.199-0.457,3.266c-0.613,3.883-1.328,7.557-2.145,11.027
                                            c-1.838,9.801-4.084,18.484-6.739,26.037c-8.369,14.293-17.662,21.441-27.872,21.441c-9.801,0-16.539-2.961-20.215-8.834
                                            c-3.674-4.441-6.227-9.951-7.656-16.436c-1.226-5.258-2.043-10.771-2.451-16.436c11.129-0.818,20.063-3.371,26.75-7.607
                                            c8.115-5.516,12.149-13.529,12.149-24.1c0-8.523-3.37-15.822-10.108-21.893c-6.736-6.283-14.496-9.449-23.277-9.449
                                            c-10.618,0-19.192,4.293-25.729,12.818c-6.84,8.523-10.618,20.469-11.229,35.832c-0.257,0.613-0.511,1.275-0.715,1.889
                                            c-2.45,5.918-5.003,11.023-7.657,15.316c-7.146,11.838-14.6,17.762-22.358,17.762c-2.858,0-5.616-0.41-8.271-1.225
                                            c3.47-12.307,5.207-23.023,5.207-32.262c0-11.639-2.042-20.98-6.127-27.922c-3.675-6.125-8.066-9.242-13.172-9.242
                                            c-4.285,0-7.758,1.939-10.413,5.873c-3.266,4.49-4.899,10.514-4.899,18.121c0,10.006,1.123,18.938,3.369,26.695
                                            c3.063,10.01,7.658,17.613,13.783,22.719l0.918,0.613c-1.837,4.695-3.775,9.291-5.817,13.783
                                            c-2.655,5.717-5.411,10.617-8.271,14.701c-6.332-1.021-11.436-6.635-15.314-16.846c-1.635-3.674-2.961-7.961-3.984-12.865
                                            c-0.813-3.676-1.428-7.25-1.836-10.721c-2.041-5.561-3.063-14.242-3.063-26.135v-9.496c0.204-18.631,1.124-33.486,2.757-44.564
                                            c0.204-1.635,0.307-2.961,0.307-3.982c0-3.266-0.613-5.924-1.836-7.963c-4.697-9.037-9.293-14.242-13.785-15.674
                                            c-0.818-0.203-1.531-0.303-2.144-0.303c-4.696,0-8.169,5.408-10.415,16.232c-2.449,11.436-3.674,28.992-3.674,52.684v9.49
                                            c0.05,2.354,0.101,4.596,0.153,6.74c-0.308,1.785-0.664,3.52-1.073,5.205c-1.836,9.801-4.084,18.484-6.736,26.037
                                            c-8.373,14.293-17.666,21.441-27.875,21.441c-9.801,0-16.539-2.961-20.215-8.834c-3.674-4.441-6.227-9.951-7.657-16.436
                                            c-1.224-5.258-2.041-10.771-2.45-16.436c11.129-0.818,20.063-3.371,26.75-7.607c8.116-5.516,12.148-13.529,12.148-24.1
                                            c0-8.523-3.369-15.822-10.106-21.893c-6.737-6.283-14.497-9.449-23.278-9.449c-10.619,0-19.193,4.293-25.729,12.818
                                            c-7.555,9.391-11.331,22.916-11.331,40.629c0,18.324,5.052,33.59,15.159,45.844c8.017,10.16,22.055,15.773,42.115,16.795
                                            c16.541-0.613,28.894-6.945,37.063-18.99c2.348-3.678,4.438-7.707,6.278-12.203c0.05,0.309,0.103,0.564,0.153,0.869
                                            c1.021,5.104,2.143,9.904,3.369,14.395c2.041,5.924,4.185,11.232,6.43,15.93c5.924,11.84,13.172,18.988,21.749,21.441
                                            c2.041,0.607,4.185,0.916,6.431,0.916c0.818,0,1.533-0.098,2.145-0.309c6.738-3.67,13.17-10.41,19.296-20.209
                                            c4.901-7.762,9.188-16.641,12.866-26.652c3.267,1.229,6.94,1.84,11.026,1.84c10.411,0,19.908-6.33,28.483-18.988
                                            c1.173-1.791,2.346-3.68,3.422-5.668c2.041,11.838,6.685,22.105,13.884,30.834c8.013,10.16,22.052,15.773,42.114,16.795
                                            c16.541-0.613,28.895-6.945,37.063-18.99c4.9-7.656,8.678-16.998,11.281-28.025c0.662,4.49,1.326,9.492,1.887,14.855
                                            c1.022,7.963,1.737,16.541,2.146,25.723c0.406,2.658,0.61,5.105,0.61,7.355c0,1.02,1.329,1.838,3.983,2.451
                                            c2.246,0.613,4.9,0.918,7.964,0.918h0.61c3.676,0,6.843-0.41,9.498-1.221c3.264-0.818,5.514-2.045,6.736-3.68v-0.311
                                            c0.204-0.197,0.408-0.508,0.613-0.916c2.245-7.961,5.564-19.807,9.953-35.529c4.392-15.719,9.342-31.137,14.855-46.248
                                            c5.514-13.07,8.373-19.6,8.577-19.6c0.612,0.406,1.122,1.938,1.53,4.59c0.204,0.818,0.307,1.84,0.307,3.064v2.145
                                            c0,5.715-0.613,13.066-1.837,22.055c-0.614,37.363-0.817,57.678-0.614,60.947c0.614,8.377,1.736,15.521,3.371,21.443
                                            c4.695,16.125,13.984,24.191,27.871,24.191c6.943,0,13.07-5.104,18.379-15.313c1.837-3.676,3.469-7.857,4.9-12.555
                                            c0.61-1.838,1.121-3.678,1.531-5.512c0.204-0.619,0.408-1.432,0.613-2.453l0.305-0.918l0.308-0.916
                                            c0.765-2.912,1.58-5.922,2.295-9.094c3.779,61.826,15.212,92.703,34.152,92.703c12.863,0,23.585-22.457,32.161-67.379
                                            c5.053-20.115,9.902-41.656,14.496-64.727c3.318,5.459,8.066,12.043,14.293,19.701l4.291,4.9l4.286,4.9
                                            c3.063,3.678,5.411,6.84,7.044,9.496c4.695,6.945,6.944,16.438,6.74,28.48c-0.203,12.053-3.063,22.053-8.576,30.021l-3.371,4.287
                                            c-1.019,1.635-1.939,3.061-2.756,4.285c-3.471,4.697-5.359,9.547-5.666,14.549c-0.308,5.006,0.204,8.275,1.533,9.801
                                            c1.326,1.533,2.807,2.607,4.438,3.221c18.787,3.264,37.317-16.336,55.593-58.811c18.275-42.471,29.045-76.059,32.313-100.766
                                            c0.204-0.408,0.306-0.818,0.306-1.227C2605.466,212.823,2604.036,211.497,2601.178,211.292z M2001.413,200.569
                                            c2.246-6.734,5.869-10.104,10.926-10.104c3.623,0,6.99,2.143,10.004,6.436c2.807,4.078,4.238,7.961,4.238,11.637
                                            c0,7.146-3.014,12.352-9.089,15.623c-4.646,2.652-10.925,4.285-18.787,4.895C1998.705,215.991,1999.626,206.491,2001.413,200.569z
                                                M2139.6,224.161c0,8.98-1.53,18.883-4.595,29.705c-4.184-4.287-7.146-10.414-8.933-18.375
                                            c-1.787-6.332-2.704-13.275-2.704-20.826c0-4.494,0.814-8.068,2.396-10.725c1.228-2.447,2.811-3.674,4.799-3.674
                                            c2.4,0,4.441,1.939,6.024,5.816c1.992,4.289,3.012,10.012,3.012,17.154V224.161z M2216.122,200.569
                                            c2.245-6.734,5.869-10.104,10.922-10.104c3.627,0,6.995,2.143,10.008,6.436c2.807,4.078,4.235,7.961,4.235,11.637
                                            c0,7.146-3.011,12.352-9.085,15.623c-4.646,2.652-10.926,4.285-18.787,4.895C2213.415,215.991,2214.335,206.491,2216.122,200.569z
                                            "/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="mainattractioninternaltextcontainer">
                            <p id="onlineeventstext">A plethora of events under banner of literati for quenching thirst of professional writers,eloquent poets and literature lovers.The Litfest brings together a seminal array of writers , authors , columnists , cartoonists , publishers , lyricists and our dear readers.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Fifth page --> */}
                <div className="mainthirdinternalcontainer" id="carnivalsssvgtrigger">
                    <div className="splitsvgcont1 carnivalgoncont">
                        <svg version="1.1" className="splitlit" x="0px" y="0px" width="841.89px" height="595.276px" viewBox="0 0 841.89 595.276" enableBackground="new 0 0 841.89 595.276" >
                            <polygon className="carngon" fill="#FFF85F" points="463.135,469.63 422.585,488.7 421.965,488.7 414.745,469.63 "/>
                            <polygon className="carngon" fill="#FFF85F" points="426.165,69.8 414.205,82.43 422.315,62.52 "/>
                            <polygon className="carngon" fill="#FADD53" points="422.315,62.52 414.206,82.43 414.375,59.92 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="454.875,75.86 454.875,83.3 449.865,70.89 "/>
                            <polygon className="carngon" fill="#FD9534" points="449.865,70.891 437.925,75.931 426.165,69.8 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="454.875,83.3 444.925,89.38 437.925,75.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="444.925,89.38 426.025,89.4 437.925,75.93 "/>
                            <polygon className="carngon" fill="#FD9534" points="414.375,59.92 414.205,82.43 407.405,64.78 "/>
                            <polygon className="carngon" fill="#F4A934" points="414.205,82.431 405.565,104.471 406.025,94.59 407.405,64.781 "/>
                            <polygon className="carngon" fill="#F4A934" points="426.025,89.4 404.745,122.34 405.154,113.42 405.565,104.48 "/>
                            <polygon className="carngon" fill="#FFF85F" points="426.445,109.94 404.745,122.34 426.025,89.4 "/>
                            <polygon className="carngon" fill="#FFF85F" points="236.425,278.67 223.125,295.87 217.245,263.28 216.805,260.83 "/>
                            <polygon className="carngon" fill="#F7CB46" points="233.555,240.71 216.795,260.81 213.505,242.58 "/>
                            <polygon className="carngon" fill="#FCEB55" points="619.805,469.901 589.805,488.39 604.925,446.201 "/>
                            <polygon className="carngon" fill="#FD9534" points="604.985,445.96 604.805,446.06 561.095,437.6 594.395,411.081 "/>
                            <polygon className="carngon" fill="#FD9534" points="655.615,479.411 645.435,469.84 653.975,474.25 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="655.615,479.411 650.185,488.161 645.435,469.84 "/>
                            <polygon className="carngon" fill="#FFF85F" points="650.185,488.161 619.914,469.809 645.435,469.84 "/>
                            <polygon className="carngon" fill="#FADD53" points="589.915,488.3 551.745,488.39 569.255,466.43 "/>
                            <polygon className="carngon" fill="#FCEB55" points="561.095,437.6 551.745,488.39 539.555,469.629 "/>
                            <polygon className="carngon" fill="#FADD53" points="585.095,302.6 562.305,317.26 553.425,298.6 "/>
                            <polygon className="carngon" fill="#FADD53" points="600.245,305.941 596.255,332.81 585.095,302.6 "/>
                            <polygon className="carngon" fill="#FFF85F" points="607.425,266.931 600.245,305.941 585.095,302.599 "/>
                            <polygon className="carngon" fill="#FD9534" points="615.055,241.44 610.955,254.82 607.425,266.93 599.095,261.43 "/>
                            <polygon className="carngon" fill="#F7CB46" points="615.055,228.71 615.055,241.44 599.095,261.43 "/>
                            <polygon className="carngon" fill="#FCEB55" points="615.055,228.71 592.505,240.71 609.535,222.57 "/>
                            <polygon className="carngon" fill="#FD9534" points="581.705,220 509.555,221.28 536.915,210.57 561.434,215.73 561.445,215.73 561.455,215.74 
                                570.215,217.58 "/>
                            <polygon className="carngon" fill="#FFF85F" points="266.585,267.8 236.425,278.67 245.345,261.84 "/>
                            <polygon className="carngon" fill="#FFF85F" points="216.655,222.57 213.505,242.58 207.925,233.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="278.895,212.32 278.195,234.28 260.695,217.88 "/>
                            <polygon className="carngon" fill="#F4A934" points="508.405,433.89 477.715,442.43 498.965,433.21 "/>
                            <polygon className="carngon" fill="#FB561C" points="505.305,397.75 503.545,397.05 503.525,397.041 498.965,395.241 499.365,371.241 "/>
                            <polygon className="carngon" fill="#F4A934" points="539.555,469.63 492.495,488.3 494.235,457.89 "/>
                            <polygon className="carngon" fill="#FFF85F" points="494.235,457.89 492.495,488.3 492.485,488.531 463.135,469.63 "/>
                            <polygon className="carngon" fill="#F4A934" points="539.555,469.63 508.405,433.89 514.365,427.481 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="561.095,437.6 514.365,427.481 525.755,411.26 "/>
                            <polygon className="carngon" fill="#FCEB55" points="514.365,427.481 514.365,421.661 508.075,402.22 505.745,398.459 525.755,411.26 "/>
                            <polygon className="carngon" fill="#FD9534" points="557.755,402.22 525.755,411.26 518.755,379.7 "/>
                            <polygon className="carngon" fill="#FFF85F" points="561.095,437.6 525.755,411.26 557.755,402.22 "/>
                            <polygon className="carngon" fill="#FCEB55" points="594.125,379.701 594.125,409.191 557.755,402.22 "/>
                            <polygon className="carngon" fill="#FADD53" points="596.255,332.81 594.125,347.191 561.095,356.01 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="594.125,347.191 594.125,379.701 578.675,377.6 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="578.675,377.6 557.755,402.22 546.065,373.93 "/>
                            <polygon className="carngon" fill="#FD9534" points="546.065,373.93 518.754,379.701 518.754,358.93 "/>
                            <polygon className="carngon" fill="#FD9534" points="434.925,345.06 431.065,376.06 425.865,351.47 422.055,327.571 "/>
                            <polygon className="carngon" fill="#FD9534" points="457.355,352.93 455.175,380.571 431.065,376.071 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="540.425,313.93 518.755,317.26 516.755,289.77 "/>
                            <polygon className="carngon" fill="#F4A934" points="444.925,305.941 422.055,327.571 417.755,300.541 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="561.095,356.01 518.755,358.93 534.755,342.26 "/>
                            <polygon className="carngon" fill="#F4A934" points="534.755,342.26 494.234,338.151 518.755,317.26 "/>
                            <polygon className="carngon" fill="#FFF85F" points="609.535,222.57 552.865,235.12 581.705,220 604.075,221.47 "/>
                            <polygon className="carngon" fill="#FCEB55" points="536.915,210.57 509.555,221.28 501.515,195.48 521.975,204.2 521.985,204.2 "/>
                            <polygon className="carngon" fill="#F7CB46" points="501.515,195.48 477.715,204.43 456.895,189.521 "/>
                            <polygon className="carngon" fill="#FFF85F" points="501.515,195.48 456.895,189.521 471.365,175.771 491.204,188.74 491.215,188.74 "/>
                            <polygon className="carngon" fill="#F7CB46" points="471.365,175.77 433.235,167.91 443.245,149.76 459.385,164.69 459.395,164.69 "/>
                            <polygon className="carngon" fill="#F4A934" points="443.245,149.76 413.195,144.78 426.825,128.3 "/>
                            <polygon className="carngon" fill="#F4A934" points="426.825,128.3 404.745,122.34 426.445,109.94 "/>
                            <polygon className="carngon" fill="#F7CB46" points="413.195,144.78 398.075,162.8 404.745,122.34 "/>
                            <polygon className="carngon" fill="#FD9534" points="404.745,122.34 398.075,162.8 374.805,158.62 381.345,150.69 "/>
                            <polygon className="carngon" fill="#FD9534" points="374.805,158.621 365.255,193.09 344.955,183.13 360.075,170.72 "/>
                            <polygon className="carngon" fill="#F4A934" points="344.955,183.13 344.955,205.23 327.905,192.68 "/>
                            <polygon className="carngon" fill="#FADD53" points="344.955,205.23 309.585,202.95 327.905,192.68 "/>
                            <polygon className="carngon" fill="#FADD53" points="320.485,219.871 278.905,212.32 283.065,211.05 309.585,202.95 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="551.745,488.39 540.365,488.42 510.445,488.491 510.425,488.491 492.485,488.531 539.555,469.63 "/>
                            <polygon className="carngon" fill="#F7CB46" points="492.485,488.531 468.775,488.59 468.756,488.59 422.585,488.701 463.135,469.63 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="357.675,488.861 324.095,488.941 321.525,488.951 343.675,473.929 "/>
                            <polygon className="carngon" fill="#F7CB46" points="358.425,346.93 338.345,348.22 336.815,340.51 "/>
                            <polygon className="carngon" fill="#F7CB46" points="340.925,416.93 326.965,410.09 326.965,400.67 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="361.925,420.93 340.925,440.18 340.925,416.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="321.515,488.951 277.415,489.05 309.645,474.179 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="276.725,489.05 271.295,489.06 271.065,489.06 270.825,489.071 270.275,489.071 239.245,489.14 
                                266.585,477.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="321.515,458.18 309.645,474.18 289.215,462.68 "/>
                            <polygon className="carngon" fill="#FCEB55" points="258.095,383.93 227.495,395.111 227.615,385.441 227.765,373.75 "/>
                            <polygon className="carngon" fill="#FCEB55" points="242.445,419.18 223.285,423.12 223.525,421.51 227.495,395.111 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="235.175,437.93 217.395,442.361 223.285,423.12 "/>
                            <polygon className="carngon" fill="#FFF85F" points="240.175,455.18 206.815,461.01 217.395,442.361 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="260.425,452.18 224.175,475.35 240.175,455.18 "/>
                            <polygon className="carngon" fill="#F4A934" points="238.785,489.14 209.235,489.21 224.175,475.35 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="224.175,475.35 197.145,469.669 206.815,461.01 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="209.135,489.21 184.935,489.27 197.146,469.67 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="184.935,470.25 184.935,489.27 177.735,484.93 184.675,470.39 "/>
                            <polygon className="carngon" fill="#F4A934" points="389.865,411.281 388.935,414.991 379.565,437.929 379.555,437.929 361.925,420.929 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="258.095,356.14 227.775,372.89 227.945,359.68 228.055,350.611 "/>
                            <polygon className="carngon" fill="#FD9534" points="258.095,356.14 228.055,350.611 226.805,336.76 "/>
                            <polygon className="carngon" fill="#F7CB46" points="248.195,317.59 226.805,336.76 226.115,329.1 225.695,324.43 224.955,316.25 "/>
                            <polygon className="carngon" fill="#F4A934" points="291.425,291.76 271.425,318.93 258.095,299.26 "/>
                            <polygon className="carngon" fill="#F7CB46" points="258.095,299.26 224.955,316.25 224.425,310.31 224.385,309.81 224.325,309.14 223.125,295.87 "/>
                            <polygon className="carngon" fill="#FADD53" points="377.145,488.81 357.675,488.861 365.265,469.629 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="421.335,488.701 398.365,488.76 397.455,488.76 377.145,488.809 365.265,469.63 "/>
                            <polygon className="carngon" fill="#F7CB46" points="416.035,289.77 410.375,319.28 387.705,302.6 "/>
                            <polygon className="carngon" fill="#F7CB46" points="426.025,89.4 405.565,104.48 405.565,104.47 414.206,82.43 "/>
                            <polygon className="carngon" fill="#F4A934" points="426.165,69.8 426.025,89.4 414.205,82.43 "/>
                            <polygon className="carngon" fill="#FFF85F" points="454.875,83.3 437.925,75.93 449.865,70.89 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="437.925,75.931 426.025,89.4 426.165,69.8 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="260.695,217.88 233.555,240.71 216.655,222.57 241.755,219.9 "/>
                            <polygon className="carngon" fill="#FADD53" points="233.555,240.71 213.505,242.58 216.655,222.57 "/>
                            <polygon className="carngon" fill="#F7CB46" points="516.755,289.77 489.265,270.62 504.405,264.97 "/>
                            <polygon className="carngon" fill="#FFF85F" points="531.095,280.931 504.405,264.971 514.805,255.55 520.045,251.141 "/>
                            <polygon className="carngon" fill="#FADD53" points="557.625,270.621 531.095,280.93 542.025,259.28 "/>
                            <polygon className="carngon" fill="#F4A934" points="387.705,302.6 361.925,286.431 378.925,278.67 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="396.925,278.67 387.705,302.6 378.925,278.67 "/>
                            <polygon className="carngon" fill="#FFF85F" points="353.985,267.76 340.925,298.6 338.455,268.11 "/>
                            <polygon className="carngon" fill="#FFF85F" points="378.925,278.67 353.985,267.76 364.205,261.12 "/>
                            <polygon className="carngon" fill="#FCEB55" points="383.925,262.64 378.925,278.67 364.205,261.121 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="383.925,262.64 364.205,261.121 372.515,252.48 "/>
                            <polygon className="carngon" fill="#FD9534" points="383.925,262.64 372.515,252.48 379.705,248.94 "/>
                            <polygon className="carngon" fill="#FCEB55" points="387.705,252.78 383.925,262.64 379.705,248.94 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="396.845,261.831 383.925,262.641 387.705,252.78 "/>
                            <polygon className="carngon" fill="#FFF85F" points="414.195,267.581 396.925,278.67 396.845,261.831 "/>
                            <polygon className="carngon" fill="#F7CB46" points="416.035,289.77 396.925,278.67 414.195,267.58 "/>
                            <polygon className="carngon" fill="#FFF85F" points="431.065,280.931 414.194,267.581 430.265,261.57 "/>
                            <polygon className="carngon" fill="#FADD53" points="599.095,261.431 587.365,251.28 592.505,240.71 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="542.025,259.28 520.045,251.14 521.475,249.93 533.055,250.25 "/>
                            <polygon className="carngon" fill="#FCEB55" points="324.325,289.77 296.925,309.1 291.425,291.76 "/>
                            <polygon className="carngon" fill="#FADD53" points="340.925,298.601 324.325,289.771 338.455,268.11 "/>
                            <polygon className="carngon" fill="#F4A934" points="338.455,268.11 324.325,289.77 291.425,291.76 "/>
                            <polygon className="carngon" fill="#FFF85F" points="338.455,268.11 306.925,274.59 324.325,258.43 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="291.425,291.76 266.585,267.8 281.495,265.13 "/>
                            <polygon className="carngon" fill="#F7CB46" points="292.245,255.42 291.425,291.76 281.495,265.13 "/>
                            <polygon className="carngon" fill="#FFF85F" points="306.925,274.59 292.245,255.42 301.215,250.04 "/>
                            <polygon className="carngon" fill="#FADD53" points="315.575,250.69 306.925,274.59 301.215,250.04 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="324.325,258.431 306.925,274.59 315.575,250.69 "/>
                            <polygon className="carngon" fill="#FCEB55" points="278.195,234.28 233.555,240.71 260.695,217.88 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="320.485,219.871 278.195,234.28 278.895,212.32 278.905,212.32 "/>
                            <polygon className="carngon" fill="#FFF85F" points="344.955,205.23 320.485,219.87 309.585,202.95 "/>
                            <polygon className="carngon" fill="#FFF85F" points="365.255,193.09 344.955,205.23 344.955,183.13 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="398.075,162.8 396.245,164.99 380.405,179.35 374.805,158.62 "/>
                            <polygon className="carngon" fill="#FCEB55" points="426.825,128.3 413.195,144.78 404.745,122.34 "/>
                            <polygon className="carngon" fill="#FADD53" points="380.405,179.351 365.255,193.09 374.805,158.621 "/>
                            <polygon className="carngon" fill="#FCEB55" points="581.705,220 552.865,235.12 509.555,221.28 "/>
                            <polygon className="carngon" fill="#F7CB46" points="609.535,222.57 592.505,240.71 552.865,235.12 "/>
                            <polygon className="carngon" fill="#F4A934" points="615.055,228.71 599.095,261.43 592.505,240.71 "/>
                            <polygon className="carngon" fill="#FCEB55" points="443.245,149.76 433.235,167.91 413.195,144.78 "/>
                            <polygon className="carngon" fill="#F4A934" points="471.365,175.77 456.895,189.52 433.235,167.91 "/>
                            <polygon className="carngon" fill="#FD9534" points="509.555,221.28 477.715,204.43 501.515,195.48 "/>
                            <polygon className="carngon" fill="#FFF85F" points="599.095,261.431 573.755,280.931 573.175,265.88 "/>
                            <polygon className="carngon" fill="#F4A934" points="531.095,280.931 516.755,289.771 504.405,264.971 "/>
                            <polygon className="carngon" fill="#F7CB46" points="599.095,261.431 573.175,265.88 587.365,251.28 "/>
                            <polygon className="carngon" fill="#FD9534" points="542.025,259.28 531.095,280.93 520.045,251.14 "/>
                            <polygon className="carngon" fill="#FFF85F" points="516.755,289.77 492.495,298.6 489.265,270.62 "/>
                            <polygon className="carngon" fill="#FB561C" points="557.625,270.621 553.425,298.601 531.095,280.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="553.425,298.601 540.425,313.93 531.095,280.93 "/>
                            <polygon className="carngon" fill="#F4A934" points="585.095,302.6 553.425,298.6 573.755,280.931 "/>
                            <polygon className="carngon" fill="#FD9534" points="573.755,280.931 557.625,270.621 573.175,265.88 "/>
                            <polygon className="carngon" fill="#FFF85F" points="573.755,280.931 553.425,298.601 557.625,270.621 "/>
                            <polygon className="carngon" fill="#FD9534" points="607.425,266.931 573.755,280.931 599.095,261.431 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="607.425,266.931 585.095,302.599 573.755,280.931 "/>
                            <polygon className="carngon" fill="#FADD53" points="562.305,317.26 561.095,356.01 540.425,313.93 "/>
                            <polygon className="carngon" fill="#F4A934" points="561.095,356.01 534.755,342.26 540.425,313.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="540.425,313.93 516.755,289.77 531.095,280.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="562.305,317.26 540.425,313.93 553.425,298.6 "/>
                            <polygon className="carngon" fill="#FD9534" points="596.255,332.81 562.305,317.26 585.095,302.6 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="596.255,332.81 561.095,356.01 562.305,317.26 "/>
                            <polygon className="carngon" fill="#FFF85F" points="540.425,313.93 534.755,342.26 518.755,317.26 "/>
                            <polygon className="carngon" fill="#FCEB55" points="534.755,342.26 518.755,358.93 506.845,348.831 506.825,348.821 494.234,338.151 "/>
                            <polygon className="carngon" fill="#FFF85F" points="506.845,348.831 500.715,364.25 498.005,345.059 506.824,348.821 "/>
                            <polygon className="carngon" fill="#FFF85F" points="518.755,358.93 518.755,379.701 500.715,364.25 "/>
                            <polygon className="carngon" fill="#F7CB46" points="557.755,402.22 518.755,379.7 546.065,373.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="518.755,358.93 500.715,364.25 506.845,348.83 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="506.825,348.821 498.005,345.06 494.235,338.151 "/>
                            <polygon className="carngon" fill="#F7CB46" points="561.095,356.01 546.065,373.93 518.755,358.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="594.125,347.191 578.675,377.6 561.095,356.009 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="578.675,377.6 546.065,373.93 561.095,356.01 "/>
                            <polygon className="carngon" fill="#FD9534" points="594.125,379.701 557.755,402.22 578.675,377.599 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="594.395,411.081 561.095,437.6 557.755,402.22 594.124,409.19 594.124,410.18 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="492.495,376.071 474.005,395.241 482.345,372.161 "/>
                            <polygon className="carngon" fill="#F7CB46" points="482.345,372.161 457.355,352.93 477.715,348.571 "/>
                            <polygon className="carngon" fill="#FB561C" points="486.915,335.951 479.025,341.691 465.425,324.429 "/>
                            <polygon className="carngon" fill="#F4A934" points="479.025,341.691 477.715,348.571 465.425,324.43 "/>
                            <polygon className="carngon" fill="#F4A934" points="494.235,338.151 486.915,335.951 492.495,298.601 "/>
                            <polygon className="carngon" fill="#F4A934" points="518.755,379.701 499.365,371.241 500.715,364.25 "/>
                            <polygon className="carngon" fill="#F7CB46" points="525.755,411.26 499.365,371.24 518.755,379.7 "/>
                            <polygon className="carngon" fill="#FD9534" points="525.755,411.26 505.745,398.46 505.305,397.75 499.365,371.24 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="482.345,372.161 474.005,395.241 455.175,380.571 "/>
                            <polygon className="carngon" fill="#FFF85F" points="492.495,376.071 489.265,400.571 488.455,406.491 474.005,395.241 "/>
                            <polygon className="carngon" fill="#F7CB46" points="561.095,437.6 539.555,469.629 514.365,427.481 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="539.555,469.63 494.235,457.89 508.405,433.89 "/>
                            <polygon className="carngon" fill="#F4A934" points="569.255,466.43 551.745,488.39 561.095,437.6 "/>
                            <polygon className="carngon" fill="#F7CB46" points="650.185,488.161 627.435,488.21 627.425,488.21 589.945,488.3 589.914,488.3 619.914,469.809 "/>
                            <polygon className="carngon" fill="#F7CB46" points="604.805,446.06 569.255,466.43 561.095,437.6 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="605.035,446.111 589.915,488.299 569.255,466.429 604.805,446.06 "/>
                            <polygon className="carngon" fill="#F7CB46" points="508.405,433.89 494.235,457.89 477.715,442.43 "/>
                            <polygon className="carngon" fill="#FADD53" points="518.755,317.26 492.495,298.6 516.755,289.77 "/>
                            <polygon className="carngon" fill="#F7CB46" points="518.755,317.26 494.234,338.151 492.495,298.6 "/>
                            <polygon className="carngon" fill="#F4A934" points="482.345,372.161 455.175,380.571 457.355,352.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="455.175,380.571 439.095,408.389 435.095,395.111 431.065,376.071 "/>
                            <polygon className="carngon" fill="#FD9534" points="488.455,406.491 465.425,402.219 455.175,380.571 474.005,395.241 "/>
                            <polygon className="carngon" fill="#F4A934" points="465.425,324.43 457.355,352.93 434.925,345.06 "/>
                            <polygon className="carngon" fill="#FFF85F" points="477.715,348.571 457.355,352.929 465.425,324.429 "/>
                            <polygon className="carngon" fill="#F7CB46" points="457.355,352.93 431.065,376.071 431.065,376.06 434.925,345.06 "/>
                            <polygon className="carngon" fill="#FFF85F" points="492.495,298.601 486.915,335.951 465.425,324.43 "/>
                            <polygon className="carngon" fill="#FADD53" points="460.425,283.431 444.925,305.941 417.755,300.541 "/>
                            <polygon className="carngon" fill="#FFF85F" points="444.925,305.941 434.925,345.06 422.055,327.571 "/>
                            <polygon className="carngon" fill="#F4A934" points="460.425,283.431 417.755,300.541 417.745,300.541 417.745,300.531 431.065,280.931 "/>
                            <polygon className="carngon" fill="#FADD53" points="465.425,324.43 434.925,345.06 444.925,305.941 "/>
                            <polygon className="carngon" fill="#FD9534" points="492.495,298.601 465.425,324.43 444.925,305.94 "/>
                            <polygon className="carngon" fill="#FCEB55" points="492.495,298.601 444.925,305.94 460.425,283.43 "/>
                            <polygon className="carngon" fill="#F7CB46" points="492.495,298.601 460.425,283.43 489.265,270.621 "/>
                            <polygon className="carngon" fill="#FB561C" points="489.265,270.621 460.425,283.43 446.925,270.621 "/>
                            <polygon className="carngon" fill="#F7CB46" points="489.265,270.621 446.925,270.621 477.865,264.99 "/>
                            <polygon className="carngon" fill="#FFF85F" points="477.865,264.991 446.925,270.621 466.505,254.61 "/>
                            <polygon className="carngon" fill="#FADD53" points="460.425,283.431 431.065,280.931 446.925,270.621 "/>
                            <polygon className="carngon" fill="#FADD53" points="466.505,254.61 446.925,270.62 456.615,249.71 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="456.615,249.71 446.925,270.62 441.835,252.3 "/>
                            <polygon className="carngon" fill="#F4A934" points="446.925,270.621 430.265,261.57 441.835,252.3 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="446.925,270.621 431.065,280.93 430.265,261.57 "/>
                            <polygon className="carngon" fill="#FCEB55" points="431.065,280.931 416.035,289.771 414.194,267.581 "/>
                            <polygon className="carngon" fill="#F7CB46" points="245.345,261.84 236.425,278.67 235.635,251.41 "/>
                            <polygon className="carngon" fill="#FFF85F" points="235.635,251.411 216.805,260.82 216.795,260.82 216.795,260.811 233.555,240.71 "/>
                            <polygon className="carngon" fill="#FD9534" points="236.425,278.67 216.805,260.83 216.805,260.82 235.635,251.41 "/>
                            <polygon className="carngon" fill="#FADD53" points="266.585,267.8 223.125,295.87 236.425,278.67 "/>
                            <polygon className="carngon" fill="#FFF85F" points="291.425,291.76 258.095,299.26 266.585,267.8 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="266.585,267.8 258.095,299.26 223.125,295.87 "/>
                            <polygon className="carngon" fill="#FCEB55" points="338.455,268.11 291.425,291.76 306.925,274.59 "/>
                            <polygon className="carngon" fill="#FCEB55" points="271.425,318.93 248.195,317.59 224.955,316.25 258.095,299.26 "/>
                            <polygon className="carngon" fill="#F4A934" points="306.925,274.59 291.425,291.76 292.245,255.42 "/>
                            <polygon className="carngon" fill="#FFF85F" points="296.925,309.1 271.425,318.93 291.425,291.76 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="361.925,286.431 354.425,313 340.925,298.601 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="378.925,278.67 361.925,286.43 353.985,267.76 "/>
                            <polygon className="carngon" fill="#FADD53" points="291.425,330.93 269.425,335.97 271.425,318.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="269.425,335.97 258.095,356.14 226.805,336.76 "/>
                            <polygon className="carngon" fill="#FADD53" points="348.145,333.071 336.815,340.509 329.545,335.969 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="329.545,335.97 321.905,338.08 320.165,318.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="321.905,338.081 291.425,330.93 320.165,318.93 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="324.325,289.77 320.165,318.93 296.925,309.1 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="296.925,309.1 291.425,330.93 271.425,318.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="320.165,318.93 291.425,330.93 296.925,309.1 "/>
                            <polygon className="carngon" fill="#FFF85F" points="340.925,298.601 320.165,318.93 324.325,289.771 "/>
                            <polygon className="carngon" fill="#FCEB55" points="354.425,313 320.165,318.93 340.925,298.6 "/>
                            <polygon className="carngon" fill="#FADD53" points="361.925,286.431 340.925,298.601 353.985,267.76 "/>
                            <polygon className="carngon" fill="#FADD53" points="396.845,261.831 378.925,278.67 383.925,262.641 "/>
                            <polygon className="carngon" fill="#FD9534" points="396.925,278.67 378.925,278.67 396.845,261.83 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="416.035,289.77 387.705,302.6 396.925,278.67 "/>
                            <polygon className="carngon" fill="#F7CB46" points="387.705,302.6 354.425,313 361.925,286.431 "/>
                            <polygon className="carngon" fill="#FADD53" points="410.375,319.281 387.925,330.929 387.705,302.599 "/>
                            <polygon className="carngon" fill="#FCEB55" points="387.705,302.6 361.925,330.93 354.425,313 "/>
                            <polygon className="carngon" fill="#FFF85F" points="387.925,330.93 361.925,330.93 387.705,302.6 "/>
                            <polygon className="carngon" fill="#FADD53" points="301.495,370.93 299.425,391.25 279.005,381.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="301.495,422.76 276.925,405.43 299.425,391.25 "/>
                            <polygon className="carngon" fill="#FCEB55" points="301.495,422.76 284.175,425.68 276.925,405.43 "/>
                            <polygon className="carngon" fill="#FFF85F" points="302.115,427.321 284.175,425.679 301.495,422.759 "/>
                            <polygon className="carngon" fill="#F7CB46" points="307.675,433.89 284.175,425.68 302.115,427.321 "/>
                            <polygon className="carngon" fill="#F4A934" points="307.675,433.89 286.175,444.93 284.175,425.68 "/>
                            <polygon className="carngon" fill="#FFF85F" points="258.095,356.14 258.095,383.93 227.765,373.75 227.775,372.89 "/>
                            <polygon className="carngon" fill="#FFF85F" points="258.095,383.93 258.095,403.43 227.495,395.111 "/>
                            <polygon className="carngon" fill="#FADD53" points="279.005,381.93 258.095,383.93 266.585,370.16 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="266.585,370.161 258.095,383.93 258.095,356.139 "/>
                            <polygon className="carngon" fill="#FFF85F" points="291.425,354.6 279.005,381.93 266.585,370.161 "/>
                            <polygon className="carngon" fill="#F7CB46" points="309.645,399.491 301.495,422.76 299.425,391.25 "/>
                            <polygon className="carngon" fill="#F4A934" points="301.495,370.93 279.005,381.93 291.425,354.6 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="258.095,403.43 242.445,419.18 227.495,395.111 "/>
                            <polygon className="carngon" fill="#F7CB46" points="253.925,437.93 235.175,437.93 242.445,419.18 "/>
                            <polygon className="carngon" fill="#F4A934" points="240.175,455.18 217.395,442.361 235.175,437.93 "/>
                            <polygon className="carngon" fill="#F4A934" points="242.445,419.18 235.175,437.93 223.285,423.12 "/>
                            <polygon className="carngon" fill="#FCEB55" points="269.425,425.68 253.925,437.93 242.445,419.18 "/>
                            <polygon className="carngon" fill="#F7CB46" points="286.175,444.93 253.925,437.93 269.425,425.68 "/>
                            <polygon className="carngon" fill="#FADD53" points="269.425,425.68 242.445,419.18 258.095,403.43 "/>
                            <polygon className="carngon" fill="#FADD53" points="286.175,444.93 269.425,425.68 284.175,425.68 "/>
                            <polygon className="carngon" fill="#FFF85F" points="284.175,425.68 269.425,425.68 276.925,405.43 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="276.925,405.43 269.425,425.68 258.095,403.43 "/>
                            <polygon className="carngon" fill="#FFF85F" points="299.425,391.25 276.925,405.43 279.005,381.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="279.005,381.93 276.925,405.43 258.095,403.43 "/>
                            <polygon className="carngon" fill="#FCEB55" points="279.005,381.93 258.095,403.43 258.095,383.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="253.925,437.93 240.175,455.18 235.175,437.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="260.425,452.18 240.175,455.18 253.925,437.93 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="286.175,444.93 260.425,452.18 253.925,437.93 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="184.675,470.39 177.735,484.93 177.735,474.17 "/>
                            <polygon className="carngon" fill="#FCEB55" points="197.145,469.67 184.935,489.27 184.935,470.25 185.665,469.85 "/>
                            <polygon className="carngon" fill="#FADD53" points="224.175,475.35 209.235,489.209 209.135,489.209 197.145,469.669 "/>
                            <polygon className="carngon" fill="#FD9534" points="240.175,455.18 224.175,475.35 206.815,461.01 "/>
                            <polygon className="carngon" fill="#FADD53" points="249.545,470.68 238.995,489.14 238.785,489.14 224.175,475.35 "/>
                            <polygon className="carngon" fill="#FCEB55" points="266.585,477.93 239.245,489.14 238.995,489.14 249.545,470.68 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="266.585,477.93 249.545,470.68 260.425,452.18 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="309.645,474.18 277.415,489.05 277.025,489.05 289.215,462.68 "/>
                            <polygon className="carngon" fill="#F7CB46" points="289.215,462.68 260.425,452.18 286.175,444.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="260.425,452.18 249.545,470.68 224.175,475.35 "/>
                            <polygon className="carngon" fill="#FADD53" points="289.215,462.68 277.025,489.05 276.725,489.05 266.585,477.93 "/>
                            <polygon className="carngon" fill="#FD9534" points="289.215,462.68 266.585,477.93 260.425,452.18 "/>
                            <polygon className="carngon" fill="#F7CB46" points="335.315,450.93 321.515,458.18 314.235,434.741 "/>
                            <polygon className="carngon" fill="#FFF85F" points="307.675,433.89 289.215,462.68 286.175,444.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="321.515,458.18 307.675,433.89 314.235,434.741 "/>
                            <polygon className="carngon" fill="#FD9534" points="321.515,458.18 289.215,462.68 307.675,433.89 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="321.515,458.18 321.515,488.951 309.645,474.18 "/>
                            <polygon className="carngon" fill="#F7CB46" points="346.425,381.93 321.515,395.83 328.075,376.321 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="318.575,373.35 301.495,370.93 315.585,364.959 "/>
                            <polygon className="carngon" fill="#FFF85F" points="318.575,373.35 299.425,391.25 301.495,370.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="315.865,395.241 309.645,399.491 299.425,391.25 "/>
                            <polygon className="carngon" fill="#FADD53" points="318.575,373.35 315.865,395.241 299.425,391.25 "/>
                            <polygon className="carngon" fill="#F7CB46" points="321.515,395.831 315.865,395.241 318.575,373.35 "/>
                            <polygon className="carngon" fill="#F4A934" points="328.075,376.321 321.515,395.831 318.575,373.349 "/>
                            <polygon className="carngon" fill="#F4A934" points="346.425,381.93 328.075,376.321 335.835,367.441 "/>
                            <polygon className="carngon" fill="#FD9534" points="360.125,368.26 335.835,367.441 338.345,348.22 "/>
                            <polygon className="carngon" fill="#F4A934" points="358.425,346.93 336.815,340.51 348.145,333.071 348.155,333.071 "/>
                            <polygon className="carngon" fill="#F4A934" points="361.925,420.93 340.925,416.93 343.675,396.43 "/>
                            <polygon className="carngon" fill="#FFF85F" points="346.425,381.93 343.675,396.43 321.515,395.83 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="271.425,318.93 269.425,335.97 248.195,317.59 "/>
                            <polygon className="carngon" fill="#FFF85F" points="269.425,335.97 226.805,336.76 248.195,317.59 "/>
                            <polygon className="carngon" fill="#F4A934" points="321.905,338.081 318.205,344.73 291.425,330.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="318.205,344.731 291.425,354.6 291.425,330.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="354.425,313 329.545,335.97 320.165,318.93 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="361.925,330.93 348.155,333.071 348.145,333.071 329.545,335.97 354.425,313 "/>
                            <polygon className="carngon" fill="#FADD53" points="291.425,354.6 266.585,370.161 258.095,356.14 "/>
                            <polygon className="carngon" fill="#FCEB55" points="291.425,330.93 291.425,354.6 269.425,335.97 "/>
                            <polygon className="carngon" fill="#FFF85F" points="291.425,354.6 258.095,356.14 269.425,335.97 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="318.205,344.731 315.585,364.959 291.425,354.6 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="315.585,364.96 301.495,370.93 291.425,354.6 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="343.675,396.43 326.965,400.67 321.515,395.83 "/>
                            <polygon className="carngon" fill="#FCEB55" points="343.675,396.43 340.925,416.93 326.965,400.67 "/>
                            <polygon className="carngon" fill="#FCEB55" points="379.555,437.93 340.925,440.18 361.925,420.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="340.925,416.93 340.925,440.18 326.965,410.09 "/>
                            <polygon className="carngon" fill="#FADD53" points="343.675,473.93 321.525,488.951 321.515,488.951 321.515,458.18 "/>
                            <polygon className="carngon" fill="#FB561C" points="340.925,440.18 329.545,428.55 326.965,410.09 "/>
                            <polygon className="carngon" fill="#F4A934" points="343.675,473.93 321.515,458.18 335.315,450.93 "/>
                            <polygon className="carngon" fill="#FFF85F" points="360.675,452.18 343.675,473.93 335.315,450.93 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="361.085,451.871 360.675,452.18 335.315,450.93 340.925,440.18 "/>
                            <line fill="none" stroke="#000000" strokeMiterlimit="10" x1="361.615" y1="452.18" x2="361.085" y2="451.87"/>
                            <polygon className="carngon" fill="#FFF85F" points="335.315,450.93 314.235,434.741 320.745,428.861 "/>
                            <polygon className="carngon" fill="#F4A934" points="369.655,461.071 365.265,469.63 357.675,488.861 343.675,473.929 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="340.925,440.18 335.315,450.93 320.745,428.861 "/>
                            <polygon className="carngon" fill="#FD9534" points="340.925,440.18 320.745,428.861 329.545,428.55 "/>
                            <polygon className="carngon" fill="#F7CB46" points="329.545,428.55 320.745,428.861 326.965,410.09 "/>
                            <polygon className="carngon" fill="#F4A934" points="379.555,437.93 379.555,437.941 361.085,451.87 340.925,440.18 "/>
                            <polygon className="carngon" fill="#FADD53" points="369.655,461.06 369.655,461.071 343.675,473.93 360.675,452.18 "/>
                            <polygon className="carngon" fill="#F7CB46" points="379.555,437.941 371.875,456.741 369.665,461.06 369.655,461.06 360.675,452.18 361.085,451.871 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="494.235,457.89 463.135,469.63 477.715,442.43 "/>
                            <polygon className="carngon" fill="#F7CB46" points="499.365,371.241 489.265,400.571 492.495,376.071 "/>
                            <polygon className="carngon" fill="#FCEB55" points="499.365,371.241 498.965,395.241 489.265,400.571 "/>
                            <polygon className="carngon" fill="#FCEB55" points="460.425,428.691 445.215,428.75 439.095,408.39 "/>
                            <polygon className="carngon" fill="#FD9534" points="463.135,469.63 454.225,451.411 445.215,428.75 460.425,428.691 "/>
                            <polygon className="carngon" fill="#F7CB46" points="477.715,442.43 463.135,469.63 460.425,428.691 "/>
                            <polygon className="carngon" fill="#FD9534" points="431.065,280.931 417.746,300.531 416.035,289.771 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="383.425,352.93 358.715,347 361.925,330.93 "/>
                            <polygon className="carngon" fill="#FCEB55" points="387.925,330.93 383.425,352.93 361.925,330.93 "/>
                            <polygon className="carngon" fill="#F7CB46" points="404.555,347.02 404.085,347.669 383.425,352.93 387.925,330.93 "/>
                            <polygon className="carngon" fill="#F4A934" points="410.375,319.281 404.985,347.441 404.555,347.02 387.925,330.929 "/>
                            <polygon className="carngon" fill="#FCEB55" points="404.085,347.67 383.425,376.07 383.425,352.93 "/>
                            <polygon className="carngon" fill="#FADD53" points="404.985,347.441 402.205,361.919 395.585,388.411 383.425,376.071 404.085,347.669 "/>
                            <polygon className="carngon" fill="#FFF85F" points="383.425,352.93 360.125,368.26 358.425,348.43 358.715,347 "/>
                            <polygon className="carngon" fill="#F7CB46" points="383.425,352.93 383.425,376.071 360.125,368.26 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="383.425,376.071 367.265,395.241 346.425,381.929 "/>
                            <polygon className="carngon" fill="#FD9534" points="383.425,376.071 346.425,381.929 360.125,368.259 "/>
                            <polygon className="carngon" fill="#F7CB46" points="395.585,388.411 367.265,395.241 383.425,376.071 "/>
                            <polygon className="carngon" fill="#FFF85F" points="395.585,388.411 389.865,411.281 367.265,395.241 "/>
                            <polygon className="carngon" fill="#FF7C2E" points="389.865,411.281 361.925,420.929 367.265,395.241 "/>
                            <polygon className="carngon" fill="#F7CB46" points="367.265,395.241 361.925,420.929 343.675,396.429 "/>
                            <polygon className="carngon" fill="#F4A934" points="367.265,395.241 343.675,396.429 346.425,381.929 "/>
                            <polygon className="carngon" fill="#FFF85F" points="360.125,368.26 346.425,381.93 335.835,367.441 "/>
                            <polygon className="carngon" fill="#FADD53" points="360.125,368.26 338.345,348.22 358.425,346.93 358.715,347 358.425,348.43 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="361.925,330.93 358.715,347 358.425,346.93 348.155,333.071 "/>
                            <polygon className="carngon" fill="#F7CB46" points="421.825,488.781 421.195,488.781 365.125,469.71 414.605,469.71 "/>
                            <polygon className="carngon" fill="#FADD53" points="465.425,402.22 439.095,408.39 455.175,380.571 "/>
                            <polygon className="carngon" fill="#F4A934" points="492.085,419.231 465.425,402.22 488.455,406.491 "/>
                            <polygon className="carngon" fill="#FD9534" points="498.965,433.21 477.715,442.43 492.085,419.231 "/>
                            <polygon className="carngon" fill="#F6BF3E" points="492.085,419.231 477.715,442.43 460.425,428.691 "/>
                            <polygon className="carngon" fill="#FADD53" points="492.085,419.231 460.425,428.691 465.425,402.22 "/>
                            <polygon className="carngon" fill="#F7CB46" points="465.425,402.22 460.425,428.691 439.095,408.39 "/>
                        </svg>
                    </div>
                    <div className="mainattractioninternal attraction1" id="carnivalstrigger">
                        <div className="mainattractioninternalsvgcontainer">
                            <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 3403 446.825" enableBackground="new 0 0 3403 446.825">
                                <g>
                                    <g>
                                        <path fill="#010101" d="M1534.009,155.595c-2.451-4.49-6.43-7.248-11.943-8.271c-1.227-0.201-2.553-0.307-3.982-0.307
                                            c-4.084,0-7.863,1.176-11.332,3.68c-4.084,2.861-6.635,6.635-7.656,11.281c-0.615,1.889-0.924,3.623-0.924,5.258
                                            c0,3.471,1.021,6.432,3.066,8.883c2.652,3.676,6.43,5.924,11.332,6.688c1.43,0.254,2.756,0.354,3.982,0.354
                                            c3.469,0,6.74-0.969,9.801-2.752c4.492-2.453,7.553-6.535,9.188-12.254c0.408-1.426,0.613-2.963,0.613-4.646
                                            C1536.153,160.906,1535.44,158.253,1534.009,155.595z"/>
                                        <path id="carnivalssvg"  fill="none" strokeWidth="8" stroke="#FFF" d="M2366.505,199.65c-0.613-3.215-2.348-5.873-5.211-7.912c-2.855-2.037-5.916-2.754-9.188-2.143
                                            c-3.264,0.613-5.971,2.348-7.961,5.154c0,0.256-0.154,0.563-0.309,0.973l-0.305,0.303v0.613c-0.408,0.41-0.768,0.818-0.918,1.229
                                            c-0.406,1.016-0.971,1.939-1.684,2.75c-0.768,0.818-1.48,2.043-2.299,3.68c-0.816,1.426-1.734,2.912-2.756,4.443
                                            c-1.021,1.529-2.299,3.215-3.674,5.049c-1.227,1.791-2.658,3.777-4.293,5.822c-1.631,2.045-3.471,4.287-5.514,6.74
                                            c-1.834,2.039-3.828,4.285-5.973,6.686c-2.143,2.502-4.641,4.9-7.502,7.402c-5.105,5.105-10.924,10.209-17.459,15.314
                                            c-6.738,5.105-13.988,10.055-21.744,14.957c-4.084,2.297-8.32,4.645-12.713,7.096c-4.441,2.449-8.934,4.697-13.629,6.686
                                            c-4.9,2.094-9.801,4.084-14.701,5.975c-4.9,1.988-10.109,3.828-15.623,5.717c-5.359,1.635-10.77,3.217-16.387,4.695
                                            c-5.613,1.586-11.332,2.961-17,4.188c-5.916,1.426-11.945,2.652-18.07,3.676c-6.123,1.02-12.404,1.938-18.68,2.756
                                            c-12.459,1.637-25.32,2.758-38.596,3.371c-13.271,0.607-26.697,0.867-40.275,0.713c-13.58-0.051-27.314-0.613-41.197-1.633
                                            c-27.563-2.043-55.539-5.412-83.92-10.109c-14.094-2.502-28.078-5.104-41.967-7.965c-4.746-1.018-9.49-2.039-14.393-3.063
                                            c-3.883,10.008-7.811,15.006-11.641,15.006c-3.469,0-6.43-4.59-8.883-13.779c-3.471-12.049-6.225-27.617-8.27-46.555
                                            c-1.426-15.521-0.713-34.305,2.143-56.359v-4.033c3.066-4.645,5.924-9.85,8.58-15.568c8.574-16.541,14.393-33.281,17.459-50.229
                                            c0.816-3.273,1.375-6.432,1.834-9.498c0.154-2.855,0.309-5.617,0.309-8.32v-2.402c-0.205-8.625-2.453-14.393-6.74-17.459
                                            c-1.834-1.426-3.982-2.143-6.432-2.143c-15.926,0-28.074,19.811-36.445,59.422c-2.861,14.498-5.105,30.529-6.74,48.09
                                            c-0.818,6.938-1.48,13.781-1.84,20.467c-0.203,5.773-0.457,10.16-0.613,13.17v16.592c-3.469,19.502-8.469,36.91-15.006,52.225
                                            c-7.965,18.686-13.07,27.973-15.313,27.973c-3.881,0-6.078-6.486-6.586-19.602c-0.514-13.018-1.072-26.697-1.686-41.045
                                            c0-6.07,0.205-13.424,0.613-22.004v-1.834l0.303-2.145c0-1.889,0.105-3.469,0.311-4.9v-2.502c0-2.807-0.205-4.746-0.613-5.768
                                            c-0.816-3.271-4.188-5.613-10.109-7.043c-2.449-0.408-4.797-0.613-7.045-0.613c-2.652,0-4.9,0.508-6.74,1.48
                                            c-11.021-11.182-22.563-16.797-34.605-16.797h-0.311c-12.656,0-22.357,5.77-29.094,17.41c-3.369,5.816-5.717,12.502-6.994,19.961
                                            c-0.055,0.047-0.055,0.047-0.055,0.098c-0.662,1.637-1.275,3.271-1.834,4.797c-2.453,5.924-5.006,11.027-7.656,15.314
                                            c-7.148,11.844-14.604,17.717-22.359,17.717c-2.861,0-5.617-0.359-8.27-1.225c3.469-12.254,5.203-23.023,5.203-32.211
                                            c0-11.689-2.039-20.982-6.127-27.977c-3.674-6.127-8.061-9.189-13.166-9.189c-4.291,0-7.762,1.939-10.414,5.824
                                            c-3.27,4.486-4.9,10.563-4.9,18.115c0,10.063,1.121,18.945,3.365,26.701c3.066,10.063,7.658,17.613,13.785,22.719l0.916,0.662
                                            c-1.834,4.695-3.773,9.291-5.816,13.785c-2.652,5.717-5.41,10.617-8.271,14.699c-6.332-1.02-11.436-6.635-15.314-16.844
                                            c-1.629-3.674-2.961-8.016-3.977-12.916c-0.818-3.676-1.432-7.25-1.842-10.721c-2.043-5.512-3.064-14.246-3.064-26.084v-9.547
                                            c0.203-18.635,1.127-33.436,2.756-44.514c0.205-1.637,0.309-2.963,0.309-3.982c0-3.266-0.611-5.975-1.838-8.018
                                            c-4.697-8.982-9.287-14.188-13.785-15.619c-0.813-0.203-1.529-0.303-2.143-0.303c-4.697,0-8.166,5.408-10.416,16.23
                                            c-2.445,11.436-3.674,28.996-3.674,52.684v9.443c0.051,1.529,0.051,3.059,0.105,4.545c0,0.049,0,0.049,0,0.1
                                            c-2.756,18.275-6.176,32.365-10.209,42.266c-1.635,4.086-6.127,6.641-13.48,7.656c-3.674-0.199-6.227-1.475-7.656-3.826
                                            c-1.426-2.346-2.449-5.516-3.063-9.492c-0.611-4.035-0.916-6.178-0.916-6.588l-0.922-9.799l-1.227-9.801
                                            c-0.814-7.404-1.836-13.785-3.061-19.299c-0.613-2.652-1.326-5.006-2.145-7.043c-0.818-2.658-1.734-5.105-2.758-7.404
                                            c-2.65-5.254-6.125-8.523-10.412-9.801c-1.023-0.359-2.25-0.611-3.674-0.611c-1.84,0-3.879,0.611-6.127,1.889
                                            c-1.84,1.225-3.471,2.652-4.902,4.236c-3.674,4.139-5.514,8.834-5.514,14.088v2.758c0,0.613,0.205,1.381,0.613,2.197
                                            c0.764,1.428,1.482,3.211,2.145,5.355c-3.779,25.273-7.707,46.102-11.945,62.588c-5.309,21.287-9.904,31.904-13.783,31.904
                                            c-3.266,0-5.309-6.789-6.127-20.215c-0.205-4.49-0.408-11.334-0.613-20.574c2.656-41.811,3.779-69.578,3.369-83.256
                                            c-0.408-18.586-5-29.203-13.783-31.855c-4.082-1.275-8.674,0.613-13.779,5.514c-1.84,2.043-3.982,4.49-6.436,7.297
                                            c-0.613,0.869-1.326,2.096-2.143,3.73c-0.818,0.818-1.631,1.785-2.447,3.061c-7.15,11.027-13.172,26.49-18.072,46.352
                                            c-4.9,19.961-8.27,33.281-10.109,39.973l-0.918-8.883c-1.84-15.316-4.082-27.311-6.74-36.096
                                            c-0.816-2.242-1.531-4.336-2.143-6.119c-1.021-2.504-2.145-4.598-3.371-6.432c-3.061-4.697-6.635-7.1-10.719-7.1
                                            c-2.656,0-5.514,1.072-8.574,3.115c-2.453,1.631-4.596,3.773-6.436,6.432c-0.408,0.611-0.613,1.43-0.613,2.449
                                            c0,0.563,0.205,1.33,0.613,2.143c0.768,1.486,1.535,3.221,2.25,5.158v0.051l-0.105,0.613c0,0.818-0.1,1.736-0.305,2.756
                                            c-0.205,1.223-0.408,2.658-0.613,4.289c-0.818,3.883-1.531,7.961-2.143,12.248c-2.045,12.053-4.084,23.076-6.127,33.031
                                            c-6.736,34.916-12.25,52.375-16.541,52.375c-9.188,0-14.498-19.604-15.924-58.756c-0.408-6.789-0.613-13.988-0.613-21.744
                                            c0-5.105,0.1-10.414,0.305-15.93c0.205-4.695,0.41-9.395,0.613-14.092c0.203-1.631,0.305-3.266,0.305-4.896
                                            c0-1.225,0.104-2.248,0.309-3.115c0-0.613-0.105-1.277-0.309-2.094c-0.609-1.432-1.736-2.348-3.365-2.758
                                            c-0.613-0.203-1.432-0.307-2.453-0.307h-2.145l-3.674,0.617l-3.369,0.918c-8.779,1.426-15.928,2.346-21.441,2.756
                                            c-2.242,0.203-4.287,0.254-6.127,0.254c-2.652,0-5.104-0.148-7.348-0.613c-3.68-0.563-6.74-2.145-9.188-4.541
                                            c-1.637-2.043-4.033-4.9-7.199-8.574c-3.166-3.729-4.752-2.094-4.752,4.744c0,6.84,4.393,11.996,13.172,15.467
                                            c0.205,0.154,0.459,0.307,0.719,0.406c-3.475,24.402-9.139,45.744-16.951,64.07c-7.961,18.686-13.064,27.973-15.314,27.973
                                            c-3.877,0-6.076-6.486-6.584-19.602c-0.51-13.018-1.072-26.697-1.686-41.045c0-6.07,0.205-13.424,0.613-22.004v-1.834l0.305-2.145
                                            c0-1.889,0.104-3.469,0.309-4.9v-2.502c0-2.807-0.205-4.746-0.613-5.768c-0.818-3.271-4.188-5.613-10.109-7.043
                                            c-2.447-0.408-4.797-0.613-7.045-0.613c-2.652,0-4.9,0.508-6.734,1.48c-11.027-11.182-22.564-16.797-34.613-16.797h-0.305
                                            c-12.662,0-22.361,5.77-29.098,17.41c-1.48,2.551-2.756,5.203-3.777,8.064c-0.156,0.051-0.359,0.15-0.51,0.256
                                            c-1.227,1.021-1.943,2.246-2.148,3.623c-0.404,2.701-0.813,5.463-1.221,8.32c-0.613,3.625-1.332,7.352-2.145,11.027
                                            c-2.043,9.598-4.291,18.17-6.74,25.729c-7.557,21.645-16.541,32.463-26.955,32.463c-10.822,0-19.092-7.348-24.805-22.049
                                            c-2.045-5.514-3.779-11.846-5.211-18.988c-0.816-5.723-1.072-12.354-0.762-19.91c0.303-7.559,0.867-12.863,1.68-15.93
                                            c2.248-8.367,6.535-12.557,12.867-12.557h0.305c3.475,0,6.844,1.432,10.109,4.236c3.061,2.912,4.59,5.664,4.59,8.32
                                            c0,1.432-0.098,2.658-0.303,3.625v0.613c0,0.867,0.408,1.531,1.227,2.145c1.021,1.07,2.242,1.684,3.674,1.889h0.916
                                            c1.432,0,2.553-0.311,3.371-0.916c1.43-0.818,2.248-1.736,2.453-2.764c0.203-1.221,0.303-2.75,0.303-4.592
                                            c0-6.176-3.061-11.33-9.188-15.617c-6.535-4.287-14.904-6.484-25.115-6.484c-10.771,0-19.397,2.705-25.833,8.016
                                            c-5.868,4.695-9.646,10.922-11.227,18.678c-0.818,3.68-1.226,7.305-1.226,11.027c0,7.762,0.816,15.828,2.396,24.148
                                            c3.066,15.773,9.039,28.635,17.918,38.645c9.139,10.006,19.197,14.955,30.225,14.955c19.396,0,34.303-11.176,44.717-33.639
                                            c1.736-3.574,3.369-7.508,4.852-11.689c0.813,3.672,1.883,7.092,3.111,10.209c5.922,13.629,15.418,20.42,28.484,20.42
                                            c6.127,0,12.148-2.094,18.07-6.383c4.697-3.266,8.779-6.227,12.254-8.934c3.676,24.963,8.066,41.707,13.172,50.232
                                            c5.309,9.236,10.414,13.525,15.314,12.916c9.391,1.785,19.291-12.098,29.707-41.656c10.158-28.844,18.275-56.053,24.303-81.578
                                            c1.221,0.051,2.496,0.105,3.877,0.105c2.039,0,4.184-0.105,6.432-0.305c2.857-0.209,5.922-0.514,9.188-0.973
                                            c-0.613,4.289-1.326,9.957-2.145,16.846c-0.613,5.514-0.916,11.387-0.916,17.459c0,3.525,0.1,7.197,0.303,11.027
                                            c0.41,19.602,3.576,39.766,9.498,60.389c5.922,20.625,15.109,30.885,27.563,30.885c10.414,0,19.197-13.982,26.342-41.912
                                            c4.697-16.949,8.988-37.875,12.967-62.684c0.514,3.57,0.973,7.449,1.43,11.537c1.023,7.961,1.736,16.484,2.145,25.725
                                            c0.408,2.656,0.613,5.104,0.613,7.303c0,1.07,1.326,1.889,3.982,2.496c2.244,0.617,4.9,0.924,7.961,0.924h0.613
                                            c3.674,0,6.84-0.408,9.498-1.277c3.266-0.762,5.512-1.988,6.734-3.625v-0.309c0.205-0.199,0.408-0.508,0.613-0.967
                                            c2.248-7.91,5.563-19.756,9.955-35.529c4.393-15.674,9.342-31.086,14.855-46.197c5.514-13.07,8.371-19.602,8.576-19.602
                                            c0.611,0.408,1.121,1.936,1.529,4.541c0.205,0.869,0.309,1.889,0.309,3.115v2.145c0,5.713-0.613,13.066-1.838,22
                                            c-0.613,37.418-0.818,57.732-0.613,61.002c0.613,8.371,1.734,15.52,3.369,21.438c4.695,16.082,13.988,24.148,27.871,24.148
                                            c6.945,0,13.072-5.105,18.383-15.314c1.834-3.676,3.469-7.807,4.898-12.559c0.609-1.785,1.123-3.623,1.531-5.457
                                            c0.205-0.619,0.408-1.432,0.613-2.455l0.305-0.918l0.309-0.971c2.807-10.363,5.508-22.563,8.01-36.65l0.254,2.707l0.311,2.703
                                            c1.021,5.514,2.145,10.059,3.369,13.529c1.631,4.49,4.492,8.982,8.576,13.629c4.082,4.596,13.578,6.994,28.484,7.197
                                            c11.436-0.818,20.061-6.23,25.883-16.287c2.09-3.574,3.928-7.297,5.459-11.229c0.818,3.877,1.686,7.506,2.658,10.977
                                            c2.037,5.922,4.182,11.23,6.43,15.926c5.922,11.842,13.17,18.988,21.746,21.443c2.043,0.607,4.188,0.916,6.436,0.916
                                            c0.813,0,1.531-0.1,2.143-0.309c6.736-3.725,13.172-10.41,19.293-20.209c4.9-7.764,9.193-16.646,12.867-26.701
                                            c3.266,1.275,6.939,1.889,11.027,1.889c10.414,0,19.906-6.332,28.484-18.988c0.867-1.275,1.682-2.602,2.447-3.982
                                            c0.205,3.061,0.51,5.971,0.918,8.678c1.023,6.686,2.553,12.607,4.596,17.713c5.924,13.629,15.416,20.42,28.486,20.42
                                            c6.127,0,12.148-2.094,18.072-6.383c4.695-3.266,8.777-6.227,12.248-8.934c3.678,24.963,8.066,41.707,13.17,50.232
                                            c5.311,9.236,10.416,13.525,15.314,12.916c9.398,1.785,19.299-12.098,29.713-41.656c4.85-13.834,9.291-27.309,13.17-40.379
                                            c1.227,9.191,2.807,17.098,4.9,23.787c6.127,20.879,16.641,31.293,31.547,31.293c7.148,0,13.479-3.471,18.992-10.414
                                            c1.99-2.453,3.879-5.414,5.514-8.932c2.244,0.457,4.492,0.865,6.736,1.275c13.889,2.861,27.977,5.412,42.27,7.656
                                            c14.242,2.242,28.436,4.236,42.418,6.127c13.939,1.84,28.133,3.371,42.424,4.592c27.973,2.043,55.59,2.607,83.004,1.789
                                            c13.475-0.408,26.645-1.33,39.512-2.758c6.535-0.613,12.967-1.375,19.299-2.4c6.275-1.02,12.557-2.145,18.68-3.365
                                            c6.281-1.023,12.408-2.299,18.225-3.83c5.818-1.529,11.592-3.016,17.305-4.441c5.668-1.889,11.182-3.68,16.539-5.514
                                            c5.26-1.889,10.52-3.779,15.625-5.824c5.104-2.037,10.055-4.18,14.85-6.479c4.801-2.195,9.447-4.541,13.939-7.045
                                            c4.287-2.396,8.475-4.898,12.557-7.453c4.084-2.553,7.963-5.154,11.641-7.861c7.758-5.051,14.498-10.209,20.215-15.42
                                            c5.719-5.254,10.822-10.309,15.314-15.207c4.697-4.443,8.576-8.732,11.791-12.66c3.115-3.982,5.768-7.402,7.811-10.314
                                            c2.248-3.01,3.828-5.258,4.9-6.684c0-0.613,0.305-1.227,0.918-1.84l0.309-0.305C2366.351,206.031,2367.116,202.97,2366.505,199.65
                                            z M1860.21,122.826c0-1.023,0.1-1.941,0.305-2.758c0.203-1.277,0.457-2.504,0.916-3.68c0.613-2.652,1.127-5.254,1.531-7.658
                                            c2.248-5.916,4.596-9.49,7.049-10.768h0.305c0.203,0.869,0.303,2.145,0.303,4.033c0,2.248-0.1,4.801-0.303,7.658
                                            c-0.205,2.039-0.51,4.18-0.918,6.379c-0.408,1.686-0.768,3.117-0.922,4.287c-2.652,11.691-6.635,23.537-11.945,35.531
                                            C1857.144,143.039,1858.37,132.011,1860.21,122.826z M1196.782,246.207c-0.404,5.973-1.121,13.631-2.143,22.973l-0.305,1.275
                                            l-0.613,0.867c-0.205,1.277-0.51,2.145-0.916,2.758c-0.615,2.297-1.326,4.137-2.145,5.514c-2.453,4.545-5.414,6.789-8.885,6.789
                                            c-4.49,0-8.475-3.469-11.943-10.414c-1.432-2.502-2.656-5.258-3.68-8.27c-0.813-2.453-1.426-4.646-1.834-6.432
                                            c-0.205-5.105-0.309-10.309-0.309-15.674c0-2.398,0.203-5.359,0.613-8.834c0.611-4.336,1.43-8.166,2.451-11.637
                                            c2.857-9.594,6.736-14.445,11.641-14.445c4.084,0,8.061,1.482,11.945,4.287c2.652,2.094,5.717,5.055,9.188,8.934
                                            C1198.417,231.246,1197.396,238.705,1196.782,246.207z M1648.56,235.179c0,9.039-1.531,18.939-4.592,29.762
                                            c-4.188-4.289-7.199-10.414-8.984-18.381c-1.789-6.326-2.656-13.271-2.656-20.822c0-4.492,0.768-8.066,2.398-10.773
                                            c1.176-2.396,2.813-3.623,4.801-3.623c2.398,0,4.391,1.939,6.021,5.768c1.994,4.336,3.012,10.061,3.012,17.203V235.179z
                                                M1754.229,246.207c-0.408,5.973-1.121,13.631-2.143,22.973l-0.305,1.275l-0.613,0.867c-0.205,1.277-0.514,2.145-0.918,2.758
                                            c-0.613,2.297-1.33,4.137-2.148,5.514c-2.447,4.545-5.408,6.789-8.879,6.789c-4.49,0-8.475-3.469-11.943-10.414
                                            c-1.43-2.502-2.658-5.258-3.68-8.27c-0.818-2.453-1.426-4.646-1.834-6.432c-0.205-5.105-0.311-10.309-0.311-15.674
                                            c0-2.398,0.205-5.359,0.615-8.834c0.613-4.336,1.43-8.166,2.453-11.637c2.855-9.594,6.734-14.445,11.635-14.445
                                            c4.088,0,8.066,1.482,11.943,4.287c2.658,2.094,5.719,5.055,9.193,8.934C1755.866,231.246,1754.843,238.705,1754.229,246.207z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <div className="mainattractioninternaltextcontainer">
                            <p id="carnivaltext">A carnival exhilerates the fanatics with euphoria and ecstasy, Thomso carnival is no exception to the fact. With events ranging from Paintball to Body Zorbing , Human foosball to dodgeball, magic shows to boulevard games , it is the showstopper of Thomso for the whole three days.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Main web 4 --> */}
            {/* <!-- Main web 5 --> */}
            <div className="mainpage5">
                <div className="mainpage5-thomsologo">
                    {/* <img src="./thomso logo svg-01.svg" alt="" > */}
                </div>
                <div className="mainpagecontainer-outer">
                    <div className="mainpage5container-inner">
                        <h1>Contact</h1>
                        <div className="mainpage5container-inner-in">
                            <div className="mainpage5container-inner-in-left">
                                {/* <img src="./phone svg-01.svg" alt="" srcset=""> */}
                            </div>
                            <div className="mainpage5container-inner-in-right">
                                <h4>John Doe (John Doe)</h4>
                                <h4>43566237757</h4>
                                <br />
                                <h4>John Doe (John Doe)</h4>
                                <h4>43566237757</h4>
                            </div>
                        </div>
                    </div>
                    <div className="mainpage5container-inner">
                        <h1>Address</h1>
                        <div className="mainpage5container-inner-in">
                            <div className="mainpage5container-inner-in-left">
                                {/* <img src="./address svg-01.svg" alt="" srcset=""> */}
                            </div>
                            <div className="mainpage5container-inner-in-right">
                                <h4>THOMSO OFFICE</h4>
                                <h4> Multi Activity Centre</h4>
                                <h4>Indian Institute of Technology</h4> 
                                <h4>  Roorkee</h4>
                                <h4>646774373474</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
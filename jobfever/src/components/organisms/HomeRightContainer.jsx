import {StyledHomeRightContainer} from "./HomeRightContainer.styles";
import RightNavbar from "../molecules/RightNavbar";
import {StyledHomeTextSideContainer} from "../molecules/HomeTextSideContainer.styles";
import HomeHeader from "../atoms/HomeHeader";
import HomeSimpleText from "../atoms/HomeSimpleText";
import {StyledLoginAndRegisterButtonsContainer} from "../molecules/LoginAndRegisterButtonsContainer.styles";
import {StyledLink} from "../atoms/Link.styles";
import WhiteButton from "../atoms/WhiteButton";
import React from "react";
import SocialMediaButtons from "../molecules/SocialMediaButtons";

export default function HomeRightContainer() {
    return (
        <StyledHomeRightContainer>
            <RightNavbar/>
            <StyledHomeTextSideContainer>
                <HomeHeader/>
                <HomeSimpleText/>
            </StyledHomeTextSideContainer>
            <StyledLoginAndRegisterButtonsContainer>
                <StyledLink to='/candidate/login'>
                    <WhiteButton text={'LOGIN'}/>
                </StyledLink>
                <StyledLink to='/candidate/register'>
                    <WhiteButton text={'REGISTER'}/>
                </StyledLink>
            </StyledLoginAndRegisterButtonsContainer>
            <SocialMediaButtons/>
        </StyledHomeRightContainer>
    )
}
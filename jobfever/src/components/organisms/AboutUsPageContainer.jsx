import {
    StyledAboutsUsPageMainContainer,
    StyledAuthorInfoContainer,
    StyledImageContainer,
    StyledInfoRightContainer,
    StyledAuthorPersonalInfoContainer,
    StyledAboutUsPageText,
    StyledInfoContainerLeft, StyledAboutUsPageHeading
} from "./AboutUsPageContainer.styles";
import Adrian from "../../images/authors/Adrian.jpg"
import Monika from "../../images/authors/Monika.jpg"
import Karolina from "../../images/authors/Karolina.png"
import Grzegorz from "../../images/authors/Grzegorz.jpg"
import Piotr from "../../images/authors/Piotr.jpeg"

import linkedin from "../../images/languages/icons8-linkedin.svg";
import github from "../../images/languages/icons8-github.svg";
import {StyledContactPageHeading} from "./ContactPageContainer.styles";

export default function AboutUsPageContainer() {
    return (
        <StyledAboutsUsPageMainContainer>
            <StyledAboutUsPageHeading>Our team of developers</StyledAboutUsPageHeading>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Karolina}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Karolina Mazurczak</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="#">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="#">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Monika}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Monika Markulis</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="#">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="#">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Grzegorz}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Grzegorz Reizer</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="#">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="#">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Adrian}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Adrian Stelmaszczyk</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="#">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="#">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
            <StyledAuthorInfoContainer>
                <StyledInfoContainerLeft>
                    <StyledImageContainer imageUrl={Piotr}/>
                </StyledInfoContainerLeft>
                <StyledInfoRightContainer>
                    <StyledAuthorPersonalInfoContainer>
                        <StyledContactPageHeading>Piotr Petryka</StyledContactPageHeading>
                        <StyledAboutUsPageText>
                            <img src={linkedin} width="30px" height="30px" alt="linkedin"/>
                            <a href="#">Linkedin</a>
                        </StyledAboutUsPageText>
                        <StyledAboutUsPageText>
                            <img src={github} alt="github"/>
                            <a href="#">GitHub</a>
                        </StyledAboutUsPageText>
                    </StyledAuthorPersonalInfoContainer>
                </StyledInfoRightContainer>
            </StyledAuthorInfoContainer>
        </StyledAboutsUsPageMainContainer>
    );
}
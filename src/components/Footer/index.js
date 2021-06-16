import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    FooterText
} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Facebook" rel="noopener noreferrer">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Facebook" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" 
                            aria-label="Facebook" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            <FooterText>
                <p>Made by <a href="/">Adedotun Fatokun.</a> All rights reserved &copy; 2021.</p>
            </FooterText>
        </FooterContainer>
    )
}

export default Footer

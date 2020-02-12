import React from "react";
import styled from "styled-components";

const ParaWrapper = styled.p`
    color: honeydew;
    font-size: 1.5rem;
`;

const ParaTitle = styled.span`
    color: black;
    font-size: 2rem;
    font-weight: bold;
`
const CopyTag = styled.h6`
    font-size: 1rem;
    text-align: center;
`
const Footer = props => {
    return (
        <div>
            <ParaWrapper> <ParaTitle>Explanation:</ParaTitle> {props.explanation}</ParaWrapper>
            <CopyTag> Copyright: {props.copyright}</CopyTag>
        </div>
    );
};

export default Footer;
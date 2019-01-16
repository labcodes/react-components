import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  transform: rotate(${props => props.rotate ? props.rotate : 0}) scale(${props => props.scale ? props.scale : 1});
`;

const Path = styled.path`
  stroke: ${props => props.fill ? props.fill : "black"};
  stroke-width: ${props => props.strokeWidth ? props.strokeWidth : "0px"};
`;

const SvgWrapper = (props) => (
  <Svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
    {...props}
  >
    {props.children}
  </Svg>
);

export const CloseIcon = (props) => (
  <SvgWrapper {...props}>
    <Path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" {...props}/>
  </SvgWrapper>
);

export const BackIcon = () => (
  <SvgWrapper>
    <path d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"/>
  </SvgWrapper>
);
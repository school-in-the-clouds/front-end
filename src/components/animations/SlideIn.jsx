import React from 'react'
import { styled } from "styletron-react";

export default function SlideIn(props) {
  const SlideIn = styled("div", {
    animationDuration: props.duration || "3s",
    animationIterationCount: props.iterationCount || "infinite",
    animationName: {
      from: {
        marginLeft: props.name.from || "150px" 
      },
      to: {
        marginLeft: props.name.to || "0px"
      }
    }
  });
  return <SlideIn>This is animated.</SlideIn>;
};
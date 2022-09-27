import React, { useState } from "react";
import {
  StyledWrapper,
  StyledHeader,
  StyledImage,
  StyledButtonWrapper,
  StyledImageWrapper,
  StyledButton,
  StyledStatusSVG,
} from "./image-confirmation.style";

interface IImageStatus {
  buttonName: string;
  buttonColor: string;
  status: boolean;
  svgToShow: string;
}

const ImageStatusData: IImageStatus[] = [
  {
    buttonName: "Approve",
    buttonColor: "#4ac765",
    status: true,
    svgToShow: "/check.svg",
  },
  {
    buttonName: "Reject",
    buttonColor: "#fc0733",
    status: true,
    svgToShow: "/close.svg",
  },
  {
    buttonName: "Reset",
    buttonColor: "#1899D6",
    status: false,
    svgToShow: "",
  },
];

const ImageConfirmation = () => {
  const [imageStatus, setImageStatus] =
    useState<IImageStatus[]>(ImageStatusData);
  const [imageSvg, setImageSvg] = useState<string>("");
  const PageHeader = "PoC Approving Tool";

  const handleClick = (item: IImageStatus) => {
    let newArr = [...imageStatus];
    newArr.map((item) => {
      return (item.status = !item.status);
    });

    setImageStatus(newArr);
    setImageSvg(item.svgToShow);
  };

  const renderSVGTestId = (text: string) => {
    return `svg-${text.substring(1, text.indexOf("."))}`;
  };

  return (
    <>
      <StyledHeader>{PageHeader}</StyledHeader>
      <StyledWrapper>
        <StyledButtonWrapper>
          {imageStatus?.map(
            (item, index) =>
              item.status && (
                <StyledButton
                  key={index}
                  buttonColor={item.buttonColor}
                  onClick={() => handleClick(item)}
                  data-testid={`button-${item.buttonName}`}
                >
                  {item.buttonName}
                </StyledButton>
              )
          )}
        </StyledButtonWrapper>
        <StyledImageWrapper>
          {Boolean(imageSvg) && (
            <StyledStatusSVG
              src={imageSvg}
              alt="icon"
              data-testid={renderSVGTestId(imageSvg)}
            />
          )}
          <StyledImage
            src="/bgImage.jpeg"
            data-testid="image"
            alt="This is a test image"
          />
        </StyledImageWrapper>
      </StyledWrapper>
    </>
  );
};

export default ImageConfirmation;

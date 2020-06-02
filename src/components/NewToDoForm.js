import React, { Component } from "react";
import Styled from "styled-components";
import { StyledButtonForm } from "./StyledParagraph";
import { StyledTextInput } from "./StyledParagraph";
import { StyledContainerr } from "./StyledParagraph";

const NewToDoForm = ({ onChange, draft, onSubmit }) => (
  <StyledContainerr>
    <StyledTextInput type="text" onChange={onChange} value={draft} />
    <StyledButtonForm onClick={onSubmit}>Wielki Plus</StyledButtonForm>
  </StyledContainerr>
);

export default NewToDoForm;

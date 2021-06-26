import styled from "styled-components";
// import { typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers"
import { typeScale } from "../utils";


const BUTTON_MODIFIERS = {
  small: ({ props }) => `
    font-size: ${typeScale.helperText};
    padding: 8px;
  `,
  large: ({ props }) => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
      outline: 3px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }

    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  primaryButtonWarning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonWarning: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  error: ({ props }) => `
    background: none;
    color: ${{ props }.status.errorColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.errorColorHover};
      outline: 3px solid ${props.theme.status.errorColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.errorColorActive};
    }
  `,
  primaryButtonError: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonError: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
  `,
  success: ({ props }) => `
    background: none;
    color: ${props.theme.status.successColor};
    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
      outline: 3px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
      border: 2px solid transparent;
    }
    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  primaryButtonSuccess: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};
  `,
  secondaryButtonSuccess: ({ props }) => `
    border: 2px solid ${props.theme.status.warningColor};
  `
}

const Button = styled.button`
    border: none;
    border-radius: 2px;
    padding: 12px 24px;
    font-size: ${props => props.theme.paragraph};
    min-width: 100px;
    cursor: pointer;
    font-family: "Roboto Mono", monospace;
    transition : background-color 0.2s linear, color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme.primaryColorHover};
        color: ${props => props.theme.textColorOnPrimary};
    }
    &:focus{
        outline: 3px solid ${props => props.theme.primaryColorHover};
        outline-offet: 2px;
    }
    &:active{
        background-color: ${props => props.theme.primaryColorActive};
        border-color: ${props => props.theme.primaryColorActive};
        color: ${props => props.theme.textColorOnPrimary};   
    }
`;


export const PrimaryButton = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    color: white;

    &:disabled{
        background-color: ${props => props.theme.disabled};
        color: ${props => props.theme.textOnDisabled};
        cursor: not-allowed;
    }

    ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;


export const SecondaryButton = styled(Button)`
border: 2px solid ${props => props.theme.primaryColor};
background: none;
color: ${props => props.theme.primaryColor};

&:disabled{
    background-color: none;
    color: ${props => props.theme.disabled};
    border-color: ${props => props.theme.disabled};
    cursor: not-allowed;
}
${applyStyleModifiers(BUTTON_MODIFIERS)}

`;



export const TertiaryButton = styled(Button)`
background: none;
color: ${props => props.theme.primaryColor};

&:disabled{
    background-color: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
}
${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

// export default primaryButton;
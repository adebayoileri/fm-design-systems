import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./context";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

import "./storybook.css";
addParameters({
  backgrounds: {
    // .storybook/preview.js

    default: 'Default Theme',
    values: [
      { name: "Default Theme", value: "#ffffff" },
      { name: "Dark Theme", value: "#050449"}]

  }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y)
import { configure, addDecorator, addParameters} from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';


// Globally adding Decorators
addDecorator(withKnobs);
addDecorator(withA11y);

// Adding Docs
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

// Searches all files ending in "stories.js" to create the Storybook View
configure(require.context('../src/components', true, /\.stories\.(js|mdx)$/), module);
import { createVuetify, ThemeDefinition } from 'vuetify';
import 'vuetify/styles';

export const colors = {
  'grey-lighten-4': '#f00',
};

const light: ThemeDefinition = { colors };

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: { light },
  },
});

export default vuetify;

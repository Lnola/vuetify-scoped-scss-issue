# Vuetify Scoped SCSS Issue

### Description

Overriding the default theme (`grey-lighten-4` in this example) does not quite work when using scoped scss styles.

If the component has defined `<style scoped lang="scss">` the color will return to default.

The state of App.vue when you run the project as is currently:
![alt text](images/error.png)

How it should be:

![alt text](images/no-error.png)

### The issue

From the dev tools you can see that the generated scoped CSS (with the data-v-459d40f5) generates the color with the default values from the default theme instead of the theme provided in the `vuetify.ts` file.

HTML
![alt text](images/html.png)
CSS
![alt text](images/css.png)

### Running the project for yourself

```sh
$ npm i
$ npm run dev
```

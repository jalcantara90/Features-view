# Install and running app

To install the app dependencies open the terminal in project root folder and execute the next command

> npm install

When all the dependecies are installed, execute the next command to run the app

> npm run dev

When "Compiled successfully" appears in the terminal, open http://localhost:8080 to access to the application

# Considerations

In this test I used some libraries just to make my work easier, but we can improve the app performance removing them, now I'll explain it in detail:

- **React-icons**: I use this library to display icons in view, this is a light-weight library only sizes 1.2kb minified, check it in : https://bundlephobia.com/result?p=react-icons@3.8.0, anyway in this app, we only have three different icons, in this case we can create three components manualy with the svg code of the icons.

- **Styled-components**: This library is used to modularize the styles of components, I prefer to use it instead of className, it has 12.4kb minified size ( check it in: https://bundlephobia.com/result?p=styled-components@5.0.0 ), we can use CSS-in-Js instead of it.

- **RxJs**: I've installed this library to mock the Subscription data stream of Feature messures. If we connect the app with backend and change the logic of src/services/feature-metrics, we can delete it without consequences.
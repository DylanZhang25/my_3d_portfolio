/*
- This configuration file tells the build tool (e.g. Webpack) what to do with the CSS files when building your project. 
- When you run your project (usually by running a command like npm start or yarn start), this configuration file is read and the Tailwind CSS and Autoprefixer plugins are applied to your CSS code to generate the final CSS file.
- This final CSS file will contain all of the Tailwind CSS toolkits and will be automatically introduced into the project (usually in the project's entry file or HTML file).
 */

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

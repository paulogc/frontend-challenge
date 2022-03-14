# Instructions

## Dependencies
For this project I decided to add the following dependencies:

### Typescript
Recommended for large projects, help devs to keep the code more reliable and easier to refactor.

### Styled components
I used styled-components to write the styles. I find this approach a good way to keep styles organized,
it eliminates classes overlap, creates reusable styles and is simple to start.

### Redux
For the app state management, I decided to use redux, It's simple and well known tool.
redux-toolkit it's a tool set that help to eliminate some boilerplate during the configuration and development.

### React router
React router as router api. Allowing us to use dynamic routing (route as the app renders).

### React testing lib
For test implementation.

## Structure

### App
In this folder I kept all the tools setups, things that need to be read prior to the pages render, like Styling, Redux and Routes. Anything else that the project would need for example translations, would also be initialized here.

### Pages
Here is where I placed the route for each pages and the main components that each page will render. Under each subdirectory, there will be at least the a route and a index file.
We will also keep in the sub folders the components and hooks that are exclusive for that page.
The index file is where the components will be rendered, the route is were we define the path and the entry point for that page.
Each route is imported on the pages/routes file. This file is used at App for dynamic render all the routes.

### Domain
On the domain directory, is where we keep core files for each particular domain. In this case the domain Sig Up Form, is used by many pages, instead of keeping those in one page and all the other pages import from that, all the pages will import form that domain.
Many pages can import from a single domain and a Single page can import from many domains. For example, if we added a new feature that will use location on the forms, we would create a location domain.

#### Domain/data
Here is where we keep the domain data focused files, like the state management, types and api calls.

#### Domain/ui
Component and styles particular to that domain.

#### Domain/hooks
Hooks that define common behaviors between pages for that particular domain.

#### Domain/utils
Util functions like parsers and validations.

### Ui
Here is where all the core UI components that pages will use will be placed. These components doesn't below to a singular domain or page.
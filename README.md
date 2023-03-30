# Doctorama

This is a web application for Necktie built using Next.js, TypeScript, Framer Motion and Tailwind CSS.
The site is up and running here: https://doctorama-app.vercel.app/

## Installation

To install and run the application, follow these steps:

1. Clone the repository to your local machine.
1. Navigate to the root directory of the project.
1. Run `npm install` or `yarn` to install the necessary dependencies.
1. Run `cp .env.example .env.local`
1. Update the values in `.env.local`
1. Run `npm run dev` or `yarn dev` to start the development server.
1. Open your web browser and navigate to `http://localhost:3000`.

## Key Packages

This application was built using the following packages:

- Next.js
- Tailwind CSS
- Framer Motion

I shall go into more detail regarding these key packages below:

### Next.js

Next.js is a React framework that enables you to create full-stack web applications with Rust-based JS tooling. It has, in my opinion, excellent developer experience and build optimizations under the hood. It also works seamlessly with Vercel.

#### Benefits

- Not much set up needed, as toolings are already set in place.
- Built-in routing: Files are placed in the `pages` or `app` folder and the routes follow their names.
- Server-side rendering: Next.js does this out of the box. SSR optimizes the initial page load time for dynamic web apps.
- Automatic code splitting, reducing the amount of code that needs to be loaded on each page.
- Excellent TypeScript support and overall developer experience.
- API routes support, meaning I could proxy API calls to hide sensitive keys from the browser.
- First class support for React Server Components, which leads to smaller client-side bundle sizes and better performance.
- Has a marketplace of super helpful plugins (like Next-SEO and Next-Sitemap)

#### Drawbacks

- Next.js adds additional complexity to the project, which can make it harder to debug issues.
- Opinionated when it comes to routing, and you have to specify whether the component is server-side or client-side.
- Framework adds additional boilerplate code to your project, which can increase the size of the application.
- Locks you in to use some of their plugins such as next/image and next/link.


### Tailwind CSS

Tailwind CSS is a utility-first CSS framework that makes it easy to quickly add and edit styles directly inside the React Component as opposed to a separate file or object/method, through the use of utility classes. It is highly maintainable and lean, as unused styles are omitted from the bundle. It also works well with React as its seeemingly cluttered classes can be extracted into React Components.

#### Benefits

- Tailwind automatically removes all unused CSS when building, which leads to a tiny CSS production bundle.
- Comes with out of the box build scripts, PostCSS tooling, 
- Comes with out of the box palettes, sizing scales, media breakpoints, etc.
- Highly customizable, due to its styles being so low-level.
- Amazing documentation and community.
- Very easy to add and modify styles, without using an additional file or object/method (like other CSS-in-JS packages).
- API supports a lot of modified states like hover, groups, focus, and so on.
- Tailwind lets you build responsive designs right in your HTML rather than wrestle with complex media queries.
- Has a super helpful VS code extension, making it easy to write due to suggestions and auto-completion.
- Has a marketplace of super helpful plugins (like line-clamp and typography plugins)

#### Drawbacks

- Can lead to very messy code if left unchecked, cluttering the markup composition.
- Very limited support for CSS animations and transitions.
- Elements can be unclear due to lack of element naming, though this is fixable with structurally organized & clean code.
- Requires setup and has a bit of a learning curve.
- Lack of "separation of concerns" since styles are embedded in the markup (rather than in a separate file).
- No built-in support for several dynamic components like modals, selectors, and popovers.

### Framer Motion

Framer Motion is a motion library for React that makes it easy to power components with animations and transitions without touching the stylesheet or writing any scripts.

#### Benefits

- Easy to create basic transitions without much code.
- Comes with sensible defaults, like timings and effects for different transition types.
- Much like Tailwind CSS, styles can be added and edited quickly, directly in the React Component.
- It is declarative and intuitive. Developers don't need to interact with the DOM via selectors, refs or other kinds of error-prone wiring.

#### Drawbacks

- Opinionated and not as low-level / flexible as CSS transitions.
- Documentation and API is quite limited. Some of the more complex animations still require imperative programming.
- Lack of "separation of concerns" since styles are embedded in the markup (rather than in a separate file).
- Bundle size for the `motion` API can be big (29kb). That said, [there are ways to reduce the bundle size](https://www.framer.com/motion/guide-reduce-bundle-size/).

## Potential Improvements

If given more time, I would like to add the following types of tests, features and enhancements to the application:

### Testing Frameworks

- *Jest*: Test runner, provides various helper methods that help with unit testing. Used to test both client and server-side code.
- *React Testing Library*: Tests the behaviors of React Components independent of and/or in relation to user interactions. Good for unit and integration tests.
- *Cypress*: More operationally expensive than the previous 2 libraries, but much more comprehensive. Good for E2E testing and providing visual feedback/replays. Can be omitted from pre-commit hooks.
- *Storybook*: Not a test framework, but I would incorporate Storybook to sandbox components and manually test interactions.

### Enhancements

- Better error handling feedback.
- Incorporate Sentry for production monitoring and error reporting.
- Incorporate SEO.
- Optimize Google Lighthouse score.
- Incorporate Analytics and Pixel (using Segment or GTM).
- Better theme and typography.
- Separate style guide (UI package?) and Storybook.

### Features

- Add a footer and navigation menu.
- Multiple language selection with I18n (probably an MVP feature for the HK market).
- More detailed doctor profiles.
- Authentication for user details and booking history.
- Email confirmation after booking.
- More micro-animations and transitions!
- Maybe a map and review feature (since this is a doctor platform).


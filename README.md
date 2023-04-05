# Sudoku

This is a Sudoku application built using Next.js, TypeScript and Tailwind CSS.
The site is up and running here: https://mobbin-sudoku-app.vercel.app/

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

## Potential Improvements

If given more time, I would like to add the following features and enhancements to the application:

### Features
- Add a timer!
- Add authentication and leaderboard (timed sudoku!)
- Highlight the cell if it contains an invalid input, on input change.
- Add animations and transitions

### Enhancements
- Write tests, specifically to test the helper functions and components. I would use Jest and React Testing Library for these.
- Make the website more responsive.
- Better typings.
- Optimize load times (Google Lighthouse score)
- Incorporate analytics (GTM & Segment)
- Incorporate Sentry for production monitoring and error reporting.

# runway.team Technical Hire Take Home Assignment (Fullstack)

For this assignment, you’ll be creating:
A backend service/app that polls an iOS app’s App Store Connect RSS feed to fetch and store App Store reviews for a specific iOS app
A React app that calls an endpoint on the backend app to fetch and display new reviews from the last 48 hours

Your service should store data about the reviews it fetches for an app (something as simple as writing to an external file is perfectly fine). The app should be able to be stopped/restarted without losing its progress and state.

Reviews fetched and displayed should be ordered by newest first, and for each review the output should include the review content, author, score, and time the review was submitted.

You should be able to do all of this using the standard libraries of the language you’re building in. If you do use 3rd party libraries, just be able to justify their usage.

Think about how to support any number of apps, and how this would affect your design.

Some extra notes:

The assignment should take 2 - 3 hours to complete
Given our Golang backend it’s great if you want to work in Go, but if you’re more comfortable working in a different language for now, that’s totally fine! Just let us know.
Example RSS URL: https://itunes.apple.com/us/rss/customerreviews/id=595068606/sortBy=mostRecent/page=1/json
Feel free to change the appId in that RSS url to any app of your choosing. You can find the appId for any iOS app on the App Store by going to their App Store Preview and grabbing the “id” in the url: https://apps.apple.com/us/app/snapchat/id447188370
If you’re having issues getting recent reviews for apps from the RSS feed, feel free to increase the 48 hour time window

## Project

- [x]App stores review data
- [x] App can be stopped and restarted without losing any data
- [x] React app displays new reviews from the last 48 hours ( Displays all the data, few apps have 48 hours review, if more time would work on how to make this better)
- [x] React app reviews display required review data (review content, author, score, time submitted)

## Running App

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. In the repo root directory, run `yarn install` to gather all dependencies.

1. Then run `yarn start` which should start the React client at port 3000.

1. Then run `yarn run server` to start the server on port 4000

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- Using [axios](https://github.com/axios/axios) as the API client on the frontend
- The server is running on port 4000.

Thank you runway! 🙏

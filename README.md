# affinity
# Simple Poll

This is a simple poll application that allows users to vote for their favorite option among the provided choices.

## Getting Started

1. Clone this repository to your local machine.
2. Open the `index.html` file in a web browser.

## Usage

- The poll question and options can be configured by modifying the `question` and `options` variables in the `script.js` file.
- Users can select one option and click the "Vote" button to submit their vote.
- The vote submission logic can be implemented in the `submitVote` function.

==========
Technical Choices:

Used HTML, CSS, and JavaScript for the frontend to create a simple and lightweight poll widget.
Used vanilla JavaScript to avoid dependencies and keep the codebase simple.
Used local storage for data persistence to store the votes locally on the user's device.
Decisions Made:

Created a reusable renderPoll function to render the poll with configurable questions and options.
Used event delegation to handle the vote submission button click event.
Provided a basic styling to make the poll widget visually appealing and responsive.
Improvements:

Error handling and validation can be improved to provide better user feedback.
Add support for multiple polls on the same page with different configurations.
Implement server-side storage and authentication for more secure and reliable data storage.
Add animations and transitions to enhance the user experience.
Write unit tests to ensure the functionality works as expected in different scenarios.






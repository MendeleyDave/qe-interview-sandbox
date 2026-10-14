# Exercise 2: Download answer as PDF

## The feature

- Each AI answer in a conversation has a **Download** button. When clicked it shows a loading indicator, then a success tick, or an error icon if the download fails.
- The whole conversation can be exported as a PDF from the sidebar. While an export is running, **Rename** and **Delete** for that conversation are disabled.
- If the AI is still generating an answer when the user exports, an informational message says the answer is still in progress.
- Only one export can run at a time. Other export buttons are disabled until it finishes.
- The PDF filename is built from the conversation topic.

## Part A: Test strategy

The system has unit tests, API tests, UI tests that run against a **mocked backend**, and a small set of end-to-end tests that run against a **deployed staging environment**.

For this feature: **where should each piece of coverage go, and why?** What would you deliberately *not* test at each level?

## Part B: Review an AI-written UI test

A colleague asked AI to write Playwright tests for this feature and has raised them for review: [`download.spec.ts`](./download.spec.ts).

What feedback would you give? (You don't need to run this file.)

## Part C: Discussion

Your interviewer will describe a short team situation and ask how you would handle it.

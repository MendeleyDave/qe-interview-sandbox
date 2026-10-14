# QE Interview – Practical Exercises

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/MendeleyDave/qe-interview-sandbox)

Welcome! This session is practical and conversational. We're interested in **how you think**, not in perfect answers or speed. Please talk us through your reasoning as you go.

You're encouraged to use the **AI assistant we've provided**, just as you would at work. We'll ask how you used it: what you accepted, what you changed or rejected, and why.

The exercises use a fictional research assistant app. Scientists ask questions, an AI answers with references, and users can save, export and download their results.

---

## Exercise 1: Export to CSV (about 35 minutes)

Users can export their saved references to a spreadsheet (CSV file). A developer wrote `src/exportReferences.ts`, then asked an AI assistant to write the unit tests (`src/exportReferences.test.ts`) and review the code. **All the tests pass.**

The tests run automatically in the terminal. To run them yourself: `npm test`

### Your task

1. Review the module and the tests. Use AI if you want to.
2. Tell us what each test actually proves, and anything you would change in the code or the tests.
3. Read the developer's AI conversation in [`AI_CONVERSATION.md`](./AI_CONVERSATION.md). Would you rely on it? Why or why not?
4. Improve or add tests for the cases you think matter most, and explain your priorities.
5. Walk us through the final code and tests, including anything the AI wrote, and explain what each part does.

---

## Exercise 2: Download answer as PDF (about 30 minutes)

Your interviewer will move on to this when you're ready. See [`exercise-2/FEATURE.md`](./exercise-2/FEATURE.md).

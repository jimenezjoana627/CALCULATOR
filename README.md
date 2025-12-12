# Calculator

Vanilla JS four-function calculator with clear, delete, and equals actions.

## Features
- Add, subtract, multiply, divide; supports decimal input.
- `C` clears all input; `⌫` deletes the last digit.
- Live display updates as you type; chains operations by choosing an operator then the next value.

## Files
- `index.html` – layout and buttons.
- `style.css` – styling.
- `app.js` – input handling and operations.

## Installation / Setup
- No dependencies or build tools. Works offline.
- Optional: run a lightweight static server if you prefer (`npx serve .` from this folder).

## Run
1) Download/clone the project and open the `CALCULATOR` folder.
2) Open `index.html` in any modern browser (double-click is fine).
3) Click numbers/operators, use `=` to evaluate, `C` to clear, and `⌫` to delete the last digit.

## How It Works
- Button clicks append to a `currentInput` string until an operator is chosen.
- Operator stores the first value; `=` applies the operation to the second value and updates the display.
- State lives entirely in `app.js` with DOM updates to `#display`.

## Notes
- Division by zero yields `Infinity` per JavaScript rules.
- You can continue calculating with the displayed result without refreshing the page.

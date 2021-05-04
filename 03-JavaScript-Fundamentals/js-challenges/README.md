# \_nology JS challenges

This is the repository for \_nology JavaScript challenges.

## Getting started

Students should complete the challenges in their own cloned version of the challenges repository. All pushes to master will be restricted.

## Installation

```bash
npm install

OR

yarn install
```

## Running tests

### All tests

```bash
npm test

OR

yarn test
```

### Individual tests

You can run the tests individually. Do this by specifying the folder as an argument, example below.

```bash
npm test js1-types-and-control-flow

OR

yarn test js1-types-and-control-flow
```

You can also ommit the file name after the first -, example below.

```bash
npm test js1-

OR

yarn test js1-
```

### Run tests on save

You can "watch" the code so that tests run automatically on save the same you run the tests as above.

```bash
npm run test-watch js1-

OR

yarn test-watch js1-
```

### Unskipping tests

From `js2` onwards, most tests are skipped by default in order to make the output on the command line easier to understand. In order to make the tests run for the second function onwards, remove the `x` in front of `describe` as follows:

```js
xdescribe(() => {});
```

TO

```js
describe(() => {});
```

## Solution files

Example solution files are included for each challenge. Resist the urge the to look in these files if you can't come up with a solution yourself, it's always better to google, ask a fellow student or ask a coach.

## Concept

The tests in this repository are separated by concept and each concept has 9 tests divided into 4 levels: Foundation, Intermediate, Advanced and Expert.

The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
share it with the group!

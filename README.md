How to reproduce:
- `npm i`
- `npx tsc --noEmit` should give you an error as expected
- `npm i -D webpack-dev-server`
- now if you run `npx tsc --noEmit` the error is gone

Same happens for the package `@types/enzyme`:
- undo the changes in `package.json`
- `npm i -D @types/enzyme`
- `npx tsc --noEmit` has no errors either

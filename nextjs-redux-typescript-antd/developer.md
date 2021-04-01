# How we write code ( SCR-F | Structure Consistency Readability - Frontend )

I created this project to showcase the best way to write React Projects.
After 2 years of active development a wrote this project, to keep all
my code consistent throughout my projects.

The tech stack I use in this project is:

- Next.js
- Redux
- AntD
- Eslint
- Prettier
- Less
- Husky

## Application Stracture

├──**public** _(Images, fonts etc.)_
├──**src** _(The source code of the application, not the config files)_
├── **component** _(All the components, minimum logic)_
├── **Page1** _(Each page has each own folder in here)_
─ **Page1.tsx** _(The index file of the folder)_
─ **Component1.tsx** _(Component of the Page1.tsx)_
─ **Component2.tsx** _(Component of the Page1.tsx)_
├── **Shared** _(Search, Navbar, Button, Footer. Everything reusable goes in here)_
├── **Main** _(Usually it is a HOC every component is wrapped arround)_
├── **config** _(Configuration files, like vars, sms, etc)_
├── **pages** _(The pages of the application, API requests as well with getServerSideProps, getStaticProps, getStaticPaths etc)_
├── **store** _(All the redux stuff are in here)_
├── **actions** _(All the redux actions, all the application requests to APIs)_
├── **reducers** _(All the redux actions)_
─ **types.ts** _(All the redux types)_
─ **store.ts** _(Store index file)_
├── **styles** _(All the styles)_
─ **custom.less** _(AntD, custom variables file.)_
─ **variables.less** _(Every new veriable goes in here.)_
─ **global.less** _(Here you import all the other less files.)_
├── **types** _(All the types)_
├── **utils** _(Custom hooks, functions, special requests etc)_
─**.env.local** _(Enviroment variables)_
─**.eslintrc.js** _(Eslint configuration)_
─**.prettierrc.js** _(Prettier configuration)_
─**lint-staged.config.js** _(Lint Staged configuration)_
─**next.config.js** _(Next.js, webpack configuration etc)_
─**tsconfig..json** _(Typescript configuration)_

## How we write a component

`
import { FC, useEffect } from 'react'
import Main from '../Main/Main'

const Home: FC<{prop1: string}> = ({prop1}) => {
// no API requests here. only component logic:
// 1. State
// 2. Redux (All the API request are in redux, or in Pages)
// 3. All types(interfaces) are no types folder no types here
// 4. We don't want massive component neither super small as well.
// If the compoent is massive create a subcomponent, if the component
// is just a few lines put the code in the parent component.

const func1 = ({num1, num2}: IFunc1) => {
// ...code
}

useEffect(() => {
func1()
}, [prop1])

return <Main>home</Main>
}

export default Home
`

## How we write Redux

Write Redux code as you like. Yet try to use async functions,
and make all api request from redux and not your components.[^1]

[^1]: Also remember to put all types in the Types folder

## How we write css

Check out BEM for more information.
[BEM](http://getbem.com/naming/)

## Graphql

If you want to use Graphql I recommend using this package [graphql-request](https://www.npmjs.com/package/graphql-request)

## Important Things

- **DO NOT WRITE INLINE STYLING**
- **IMPORT ALL STYLES THROUGH GLOBAL.LESS**
- **REMEMBER BEM**
- **ONLY FETCH DATA IN PAGES**
- **MAKE ALL REQUESTS FROM REDUX**
- **ALL TYPES GO IN TYPES FOLDER**

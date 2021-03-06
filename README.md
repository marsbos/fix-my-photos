# fix-my-photos

## About the app

Fix-my-photo is a React application backed by a json-server api.

### What does it do?

Imagine, you have a collection of holiday photos but unfortunately some photos are 'broken'. But you're in luck, fix-my-photo is able to fix your broken photos!

### Running the app

1. First, install all the dependencies:

```
npm i or npm install
```

2. Then, run the 'dev' script

```
npm run dev
```

Webpack runs on port `9000` while json-server runs on port `3000`

## The process/timing

I started this assignment the weekend before this week's scheduled shipment to Acato and soon I had a great idea for an app. So I started working on it, but by the end of the day, I felt unhappy. I started all over again with a new idea (fix-my-photos). So, already I had some code I could re-use for this new project. That's the reason some commits could be done quite fast.
Most time was spent on two things:

- Creating a clean solid 'architecture' in which components have only one concern and are 'managed' by a container.
- Using and styling the Material-UI components. (because I am a bit of a perfectionist ;))

## Project setup

### Webpack

Usually 'create-react-app' for React apps will do just fine. For this project however, I wanted to setup everything from scratch. So I created webpack config files and configured integration with the json-server.

### JSON-Server

The json-server package is being used for our backend. So the app can do 'real' api requests.

### Scripts

In the package.json I defined a couple of scripts necessary for the project. The 'dev' is the main script; it makes sure both json-server and webpack will startup so you'll have a nice local development environment.

## Design decisions

### Libraries

- React
- Wretch for http wrapping/abstraction
- Ramda for the photoFilters

### State

While keeping the components as self-contained (stand-alone) as possible, I did not use any global state (management), but instead used local state and the principle of 'lifting state up'. This way components do not rely on any implemenation of statemanagement except React's built-in state hook.
Trying to keep component state as close as possible is also something I achieved, at least I think.
Immutable state/object is important as well, so it is supported in this app by ('manually', no lib) creating new objects/arrays each time the app needs to change data.

Furthermore, React's data flow is uni-directional by design so data flows only from parents to childs.

### Remote/Http layer

I already spent several hours (for a private project) trying to think of a solution for doing a fetch request and at the same time keeping track of its status. I came up with a custom hook 'useFetchWithProgress'. This hook, combined with the component 'ApiProgressWrapper' solves this issue, meaning you can trigger a request and the component will, depending on the loading status, show different elements (spinner,result component). During the assigment I kind of completed this solution and the project currently uses it as the http/fetch integration layer together with 'wretch', a tiny fetch wrapper library.

### UI

React functional components, Material-UI  
Material-UI has a lot of ready-to-use ui components for layout, input, etc.

### Routing

No routing required for this project.

## Improvements/not so happy about

- Filtering: The photo filter component is too tightly coupled to the domain (it uses props/keys of the photo domain model):

```
setFilterValue('failed')...
```

- I spent some time on creating a solution for tracking requests status: that part took a bit too long. On the other hand, I don't mind doing some extra work in the evening as it was part of my private projects already.

## Time spent

**Total**: about 2.5 days

1. Setting up project: 2 hours
2. Setting up architecture & design (including building fetch & status solution): 8 hours
3. Examining material ui components/icons/etc: 2 hours
4. Building components: 6 hours

I know I could have done it quite faster without all the styling etc, but I wanted to let you see I am also capable of doing some ui/styling stuff.

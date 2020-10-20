# fix-my-photos

## About the app

Fix-my-photo is a React application backed by a json-server api.

You have a collection of holiday photos but unfortunately some photos are 'broken'. But you're in luck, fix-my-photo is able to fix your broken photos!

## Design decisions

### State

While keeping the components as self-contained (stand-alone) as possible, I did not use any global state (management), but instead used local state and the principle of 'lifting state up'. This way components do not rely on any implemenation of statemanagement except React's built-in state hook.
Trying to keep component state as close as possible is also something I achieved, at least I think.
Immutable state/object is important as well, so it is supported in this app by ('manually', no lib) creating new objects/arrays each time the app needs to change data.

Furthermore, React's data flow is uni-directional by design so data flows only from parents to childs.

### Remote/Http layer

I already spent several hours (for a private project) trying to think of a solution for doing a fetch request and at the same time keeping track of its status. I came up with a custom hook 'useFetchWithProgress'. This hook, combined with the component 'ApiProgressWrapper' solves this issue, meaning you can trigger a request and the component will, depending on the loading status, show different elements (spinner,result component). During the assigment I kind of completed this solution and the project currently uses it as the http/fetch integration layer together with 'wretch', a tiny fetch wrapper library.

### UI

React functional components, Material-UI

### Routing

No routing required for this project.

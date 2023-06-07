import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/styled';
import { Favorites, ProfileSet, SignupBirth, SignupName, Job, Seniority } from './components/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Main from './Main/Main';
import Home from './Main/Home';
import Recommend from './Main/Recommend';
import Completed from './Main/Completed';
import Personal from './Personal/Personal';
import PersonalHome from './Personal/PersonalHome';
import { Tests } from './Personal/Tests';
import { ProjectDetail } from './Project/ProjectDetail';
import ProjectHome from './Project/ProjectHome';
import ChatHome from './Chat/ChatHome';
import { ChatList } from './Chat/ChatList';

const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'name',
        element: <SignupName />,
      },
      {
        path: 'birth',
        element: <SignupBirth />,
      },
      {
        path: 'job',
        element: <Job />,
      },
      {
        path: 'seniority',
        element: <Seniority />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'profile-set',
        element: <ProfileSet />,
      },
    ]
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Main />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'recommend',
        element: <Recommend />,
      },
      {
        path: 'completed',
        element: <Completed />,
      }
    ]
  },
  {
    path: '/personal',
    element: <PersonalHome />,
    children: [
      {
        path: '',
        element: <Personal />,
      },
      {
        path: ':id',
        element: <Tests />,
      },
    ]
  },
  {
    path: '/chat',
    element: <ChatHome />,
    children: [
      {
        path: '',
        element: <ChatList />
      },
    ]
  },
  {
    path: '/mypage',
    element: <h1>my page</h1>,
  },
  {
    path: '/project',
    element: <ProjectHome />,
    children: [
      {
        path: ':id',
        element: <ProjectDetail />,
      }
    ]
  }
]

const router = createBrowserRouter(routes, {basename: basename});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>  
  // </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

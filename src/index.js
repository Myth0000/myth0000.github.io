import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainTitleArea from './components/MainTitleArea';
import ProjectsPage from './components/ProjectsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainTitleArea />
    <ProjectsPage />
  </React.StrictMode>
);

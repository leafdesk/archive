import React from 'react';

const projectObjectArray = [
  {
    title: 'TodoList',
    startDate: 220317,
    pageUrl:
      'https://lsg001008.github.io/portfolio/projects/todo-list/TodoList.html',
  },
  {
    title: 'Progress Steps',
    startDate: 220324,
    pageUrl:
      'https://lsg001008.github.io/portfolio/projects/progress-steps/main.html',
  },
  {
    title: 'RWD: AppLab',
    startDate: 220330,
    pageUrl:
      'https://lsg001008.github.io/portfolio/projects/rwd-applab/main.html',
  },
];

const Project = ({ projectObject }) => {
  return (
    <li>
      <a href={projectObject.pageUrl}>
        <p>{projectObject.startDate}</p>
        <p>{projectObject.title}</p>
      </a>
    </li>
  );
};

const ProjectList = () => {
  return (
    <ul>
      {projectObjectArray.map((projectObject) => (
        <Project projectObject={projectObject} key={projectObject.startDate} />
      ))}
    </ul>
  );
};

export default ProjectList;

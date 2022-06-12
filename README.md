# glance - simplified work space

## Description - why

I love use all sorts of management tools, simply because I am kinda obsessed with the beauty of each tool has its core idea of how to solve problems.

When I was in my previous company as a marker, we always stored our projects by using gxxxxe drive, we didn't have a space for marketing specifically (something like confluence page, which each department can build its own knowledgebase), therefore, there were lots of scattered documents, let alone to update these files, as for budget planning, we ended up using different sheet to maintain our budget, that's why I want to build a simple and intuitive tool to just give it a try.

## Project Description

Tech stack:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

Third party package:

1. [react-select](https://react-select.com/home)
2. [tinyMCE](https://www.tiny.cloud/docs/tinymce/6/)
3. [scrollReaveal](https://scrollrevealjs.org/)
4. [react-chartjs-2](https://react-chartjs-2.js.org/)

## Features

### 1. Authentication

- By using firebase auth, this allow user to sign up and login.
  ![Landing-page](src/docs/Landing-page.png)

- Landing page with animation.

  ![Landing-page-gif](src/docs/landing-page.gif)

- User can click login button to switch page from signup to login
- User needs to upload a photo, if size of the photo is over 100kb, it will show warning.
  ![Signup](src/docs/sign-up.png)
- Login UI, user can click signup to switch page for signing up.
  ![Login](src/docs/login.png)

### 2. Dashboard

- Dashboard contains a doughnut chart, project list and a load more button.
- Projects are sorted by due date, the nearest date will be shown first.
  ![dashboard](src/docs/dashboard.png)

### 3. Sidebar

- Active background color based on its current page
- User photo and the display name

  ![sidebar](src/docs/sidebar.png)

### 4. Add project

- Here is a from which allow user to add subject, content, due date, stakeholder and assignees.
- I use tinymce as text editor.
- Storing data in localstorage one user click save.
- user can restore content by clicking restore.
- Once clicking submit, project will be shown on the dashboard and the page will be redirect to dashboard.

  ![addproject1](src/docs/addproject-1.png)

### 5. Budget planner

- This is a simple budget planner, user can change total budget accordingly.
- Once user adds expense, it will render on the dashboard and current page so the user can track every expense.
- All categories are listed out, including amount and for the duplicated category, it will sum up automatically, if the amount is over $ 1500, font color will be yellow.

  ![budget](src/docs/budget.png)

- User can only create project first and add budget to the project belongs to user, only user submit budget to relevant project, it will be shown when use click the project on dashboard.

  ![budget_project](src/docs/budget_project.png)

### Future update

1. User can reply in the comment section.
2. Single chatroom
3. Mention functionality and notification.

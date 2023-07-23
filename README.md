# InsightLnk - A MERN Stack Blogging App


## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Deployment](#deployment)
7. [Contributing](#contributing)
8. [License](#license)

## 1. Introduction

**Insightlnk** is a full-stack blogging application developed using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. It allows users to create, read, update, and delete blog posts. The app provides an intuitive and user-friendly interface for readers to browse through blog posts, and for authors to manage their posts.

## 2. Features

- User authentication: Users can sign up, log in, and log out to access different features based on their role (author or reader).
- Create and manage blog posts: Authors can create new blog posts, edit existing ones, and delete posts.
- View blog posts: Readers can view the list of blog posts and read the full content of each post.
- Search functionality: Users can search for specific blog posts based on keywords or tags.
- comment: Readers comment on blog posts, providing feedback to authors.
- Responsive design: The app is designed to be mobile-friendly and responsive across various devices.

## 3. Technologies Used

The Insightlnk blogging app was built using the following technologies:

- Frontend: 
  - React.js
  - HTML
  - CSS
  - JavaScript
  - Tailwind CSS

- Backend: 
  - Node.js
  - Express.js
  - MongoDB (Atlas)

- Deployment - Backend: Render (https://render.com)
- Deployment - Frontend: Vercel (https://vercel.com)

## 4. Installation

Follow these steps to set up the project locally:

1. Clone the repository: `git clone https://github.com/durvesh7k/insightlnk.git`
2. Change directory to the backend folder: `cd insightlnk/server`
3. Install backend dependencies: `npm install`
4. Change directory to the frontend folder: `cd ../client`
5. Install frontend dependencies: `npm install`

## 5. Usage

To run the app locally, follow these steps:

1. Start the backend server:
   - Change directory to the backend folder: `cd insightlnk/server`
   - Run the server: `npm start`

2. Start the frontend application:
   - Change directory to the frontend folder: `cd insightlnk/client`
   - Run the app: `npm start`

The app will be accessible at `http://localhost:3000` in your web browser.

## 6. Deployment

### Backend (Render)

To deploy the backend on Render:

1. Sign up for an account on Render (https://render.com) if you haven't already.
2. Create a new Web Service.
3. Connect the service to your GitHub repository (Insightlnk backend).
4. Set the build command: `npm install && npm run build`
5. Set the start command: `npm start`
6. Deploy the service.

### Frontend (Vercel)

To deploy the frontend on Vercel:

1. Sign up for an account on Vercel (https://vercel.com) if you haven't already.
2. Import the frontend repository (Insightlnk frontend).
3. Configure the build settings for the frontend (if needed).
4. Deploy the app.

## 7. Contributing

Contributions to Insightlnk are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or create a pull request in the GitHub repository.

## 8. License

The Insightlnk project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.


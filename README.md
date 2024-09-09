# Project Documentation for React Github User Search

The **React Github User Search** project is a React application designed to help users search for GitHub profiles and retrieve detailed information such as repositories, followers, and personal details. The application makes use of the powerful GitHub API to fetch real-time data, providing users with an engaging and informative experience.

## Key Features

### Main Components

1. **App Component**: The core of the application, responsible for managing global state, dark mode toggling, and passing down key props to child components.
   
2. **TopMenu Component**: A navigation bar that allows users to toggle between light and dark modes, enhancing the user experience with a modern and sleek design.

3. **UserSearch Component**: A search form where users can input a GitHub username to query the API. This component drives the application's main functionality by handling search inputs and submitting them.

4. **Results Component**: Displays the user's GitHub profile data, including name, username, bio, repositories, followers, and more. It retrieves this data dynamically from the GitHub API based on the user query.

### Key Functionalities

✅ **Dark Mode Toggle**: Allows users to switch between light and dark themes, enhancing the visual experience.
  
✅ **GitHub User Search**: The core functionality of the application, where users can input a GitHub username and retrieve real-time profile data directly from the GitHub API.

✅ **Dynamic User Data Display**: Once the data is fetched, the user's profile information is displayed, including the number of repositories, followers, following, location, blog, email, and more.

## Code Structure and Logic

- **useState**: Manages the state for user queries, user data, loading states, and errors, ensuring that the UI is responsive to changes.

- **useEffect**: Executes the API call when the `userQuery` state changes, ensuring that new profile data is fetched and displayed each time a search is conducted.

- **GitHub API Integration**: The application connects to the GitHub API using **axios** for HTTP requests. A secure token is used to authenticate the requests, ensuring that the application can handle a larger number of queries and access detailed user information.

## API Consumption

The **GitHub User Finder** application leverages the **GitHub API**, one of the most comprehensive and well-documented APIs in the developer world. The API provides real-time access to GitHub user data, which includes key information such as:

- **Profile Details**: Name, username, avatar, bio, and join date.
- **Repository Statistics**: The number of public repositories a user has created.
- **Follower Information**: The number of followers and people the user is following.
- **Additional Details**: Location, personal website, and email, when available.

This API integration is the foundation of the application's functionality, enabling users to search for any GitHub profile and instantly view the results. The ability to dynamically fetch and display such detailed information in real-time makes the **GitHub User Finder** a robust and powerful tool for developers and GitHub enthusiasts alike.

## Enhanced User Experience

By incorporating the GitHub API, the application provides users with up-to-the-minute information on GitHub profiles, offering a valuable and informative experience. The seamless interaction between the frontend and the API ensures that users receive the latest data directly from GitHub servers, elevating the overall utility and professionalism of the application.

## See it in practice

You can preview the application at the following link: https://reactusersearch.netlify.app/

or clone the repository to your computer and run 'npm install' and 'npm run dev' in the terminal to open it.

## Project Images

![image](https://github.com/user-attachments/assets/ef363c89-9ef1-4d0b-8ec0-8ef902d2e776)

![image](https://github.com/user-attachments/assets/0023b39b-0af6-4207-bcae-c80f9ea06125)


![image](https://github.com/user-attachments/assets/0407c3c5-968a-44de-8207-08c3b45078a3)

![image](https://github.com/user-attachments/assets/3590d207-fdc9-4207-ba59-67b937673882)


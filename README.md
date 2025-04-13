# React Profile Showcase (Built with Vite + Tailwind + Flowbite)

A responsive web application built using React and Vite that displays a collection of user profiles fetched from local JSON data. It features interactive profile cards and utilizes Flowbite components within a Tailwind CSS framework for styling and modal interactions.

---

**Live Demo:**

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_ID/deploy-status)](https://YOUR_NETLIFY_SITE_NAME.netlify.app/)

View the live deployed version here: **[https://YOUR_NETLIFY_SITE_NAME.netlify.app/](https://YOUR_NETLIFY_SITE_NAME.netlify.app/)**

*(Replace the badge ID and link above with your actual Netlify details. You can find the badge snippet in your Netlify site's settings under "Status badges")*

---

**Screenshot:**

![Project Screenshot](placeholder.png)
*(Replace `placeholder.png` with a path to an actual screenshot of your application. You can upload the image to your repository and link it.)*

---

## Features

* **Profile Display:** Fetches profile data from a local `data.json` file and displays it using card components.
* **Responsive Design:** Adapts gracefully to different screen sizes:
    * **Mobile:** Profile cards stack vertically for easy scrolling.
    * **Desktop:** Profile cards arrange horizontally in a row (or wrap if necessary).
* **Interactive Modals:** Clicking on a profile card opens a modal window (powered by Flowbite) displaying:
    * Larger profile avatar.
    * Detailed information including name, age, location, description, and hobbies.
* **Modern Tech Stack:** Built with Vite for a fast development experience and React for efficient UI rendering.
* **Utility-First Styling:** Leverages Tailwind CSS for rapid UI development and consistent styling.
* **Component-Based:** Uses reusable React components (`Profile`, `ProfileModal`, `Separator`).
* **Netlify Deployment:** Configured for easy and continuous deployment via Netlify.

---

## Technologies Used

* **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
* **[Vite](https://vitejs.dev/):** A next-generation frontend tooling providing a fast development server and optimized build process.
* **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.
* **[Flowbite](https://flowbite.com/):** UI component library built on top of Tailwind CSS. Used here primarily for the Modal component structure and styling.
    * _(Note: Ensure Flowbite's JavaScript is initialized if needed for specific interactions beyond basic CSS styling. See Flowbite documentation.)_
* **[Netlify](https://www.netlify.com/):** Platform for deploying modern web projects.

---

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd YOUR_REPO_NAME
    ```
3.  **Install dependencies:**
    *(Use the package manager you prefer)*
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  **Open your browser:**
    Navigate to `http://localhost:5173` (or the port specified in your console).

---

## Deployment

This project is set up for deployment on **Netlify**.

* The **`netlify.toml`** file configures the build process:
    * **Build Command:** `npm run build` (executes Vite's build process)
    * **Publish Directory:** `dist` (where Vite outputs the production files)
    * **Redirects:** Includes a redirect rule (`/* /index.html 200`) essential for Single Page Applications (SPAs) like this one, ensuring that direct navigation to routes or page refreshes work correctly on the deployed site.

* **To Deploy:**
    1.  Push your code to your GitHub repository.
    2.  Connect your GitHub repository to Netlify.
    3.  Configure the build settings (Netlify often detects Vite settings automatically, but they are explicitly set in `netlify.toml`).
    4.  Deploy! Netlify will automatically build and deploy your site upon pushes to the main branch.

---

## Project Structure (Simplified)
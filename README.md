# Promptopia
Promptopia is an open-source AI prompting tool for the modern world, designed to help users discover, create, and share creative prompts. With Promptopia, you have access to a comprehensive list of phenomenal prompts that you can immediately pass on to Chat GPT. This application is built using the Next.js framework and offers full-stack CRUD functionality.

![image](https://github.com/Valentina-Peralta/promptopia/assets/125395224/20741244-194e-4969-9120-7d09990c92a8)

## Features
- **User Authentication:** Promptopia supports authentication using NextAuth and Google authentication. Users can securely log in to the application using their Google accounts.
- **Browse and Search Prompts:** Once logged in, users can browse through a wide range of the best prompts available. The application provides search functionality to allow users to find prompts based on tags, usernames, or prompt content.
- **Copy and Edit Prompts:** For each prompt, users can easily copy the prompt content to their clipboard. If the user is the creator of a specific prompt, they also have the ability to edit or delete the prompt.

## Installation
To run Promptopia locally, follow these steps:

- Clone the repository:
git clone https://github.com/your-username/promptopia.git

- **Install the dependencies**:
  
cd promptopia
npm install

- **Set up environmental variables:**
  
  Create a **'.env'** file in the root directory.
  
  Add the following variables to the file:

GOOGLE_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=3whPterlgXyQVN8lLAtWvMudfy8SCZxvonFQT0AHUCc=

Replace **your-google-client-id**, **your-google-client-secret**, and **your-mongodb-uri** with your own values.


- **Start the app:**
  
npm run dev

## Technologies used:
- Next.js
- MongoDB and Mongoose
- Bcrypt
- NextAuth

  # Promptopia is built based on the JavaScriptMastery course, which provided the foundation for developing this application.



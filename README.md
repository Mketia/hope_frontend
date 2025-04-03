# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Hope for Children - Education Charity Platform

![Project Logo](/public/images/logo.png)

A web platform for Hope for Children charity organization that helps children return to school and build a better future through donations, sponsorships, and community support.

## Features

- **Donation System**: Secure online donations with multiple payment options
- **User Authentication**: Secure login/logout for donors and administrators
- **Blog Section**: Latest updates and success stories
- **Contact Form**: Direct communication with the organization
- **Newsletter Subscription**: Stay updated with our work
- **Responsive Design**: Works on all devices

## How It Works

### 1. User Authentication

- Users must log in to access donation features
- JWT tokens are used for secure authentication
- Session management with refresh tokens

### 2. Donation Process

```mermaid
sequenceDiagram
    User->>Frontend: Clicks "Donate Now"
    Frontend->>Backend: Sends donation data
    Backend->>Database: Stores donation record
    Backend->>Payment Gateway: Processes payment
    Payment Gateway-->>Backend: Payment confirmation
    Backend-->>Frontend: Success message
    Frontend-->>User: Displays confirmation
3. Contact System
Users can send messages via contact form

Automatic thank-you message appears after submission

Messages are stored in the database for follow-up

4. Newsletter Subscription
Users can subscribe with their email

Double opt-in system for verification

Regular updates sent to subscribers

Technologies Used
Frontend
React.js

React Router

Font Awesome

CSS3

Backend
Node.js

Express

JWT Authentication

RESTful API

Database
MongoDB

Installation
Clone the repository:

bash
Copy
git clone https://github.com/Mketia/hope-for-children.git
cd hope-for-children
Install dependencies:

bash
Copy
npm install
cd client
npm install
Set up environment variables:
Create a .env file in the root directory with:

Copy
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the application:

bash
Copy
npm run dev
Project Structure
Copy
hope-for-children/
├── client/               # Frontend React application
│   ├── public/           # Static files
│   └── src/              # React components
├── server/               # Backend API
│   ├── controllers/      # Route controllers
│   ├── models/           # Database models
│   └── routes/           # API routes
├── .env                  # Environment variables
└── README.md             # Project documentation
API Endpoints
Endpoint	Method	Description
/api/auth/login	POST	User login
/api/auth/logout	POST	User logout
/api/donations	POST	Create new donation
/api/contact	POST	Submit contact form
/api/newsletter	POST	Subscribe to newsletter
Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
Distributed under the MIT License. See LICENSE for more information
```

contact :k.mukakalis1@alustudent.com

# Hotel Booking Platform 🏨

## Purpose

This project is a modern and interactive Hotel Booking Platform designed to provide users with a seamless experience for discovering and booking hotel rooms. It features secure authentication, a user-friendly interface, and robust functionality for a trustworthy and engaging experience.

## Live URL 🌐

[Visit the Hotel Booking Platform](https://book-your-hotel-18c2b.web.app/)

## Key Features 📋

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Homepage**:
  - Interactive banner with slider, heading, description, and button.
  - Featured rooms with images, descriptions, and a "Book Now" button.
  - Embedded map showing the hotel's location.
  - Special offers and promotions displayed in a popup modal.
- **User Authentication**:
  - Secure login and registration with email/password and Google.
  - Validation for strong passwords with error feedback.
  - Toast notifications for successful login/register actions.
- **Rooms Page**:
  - Displays rooms from the database with filters for price range.
  - Redirects to detailed room pages upon clicking a room card.
- **Room Details Page**:
  - Detailed information with user reviews, a booking button, and a modal for booking summary and date selection.
  - Ensures only available rooms can be booked.
- **My Bookings Page**:
  - Displays booked rooms for the logged-in user with options to cancel, update dates, or leave reviews.
- **Review System**:
  - Allows users to post ratings and comments for rooms they booked.
  - Displays reviews sorted by timestamp (latest first).
- **Access Control**:
  - Only authenticated users can book rooms or post reviews.
- **Additional Features**:
  - JWT-based authentication for secure routes.
  - Booking cancellation allowed up to one day before the booking date.
  - Custom 404 Page with a fun design and "Back to Home" button.

## Technologies & Tools 🛠️

- **Frontend**: React.js, TailwindCSS, Framer Motion, React-Leaflet, React-Helmet
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase Authentication, JWT
- **Date Handling**: Moment.js
- **Other Packages**: SweetAlert, React Toastify

## Dependencies

- @lottiefiles/react-lottie-player
- axios
- firebase
- framer-motion
- leaflet
- localforage
- match-sorter
- moment
- react
- react-datepicker
- react-dom
- react-helmet
- react-hot-toast
- react-icons
- react-modal
- react-rating-stars-component
- react-router-dom
- react-slick
- slick-carousel
- sort-by

## Firebase Configuration

```js
const firebaseConfig = {
    apiKey: "Your_API_KEY",
    authDomain: "Your_AUTH_DOMAIN",
    projectId: "Your_PROJECT_ID",
    storageBucket: "Your_STORAGE_BUCKET",
    messagingSenderId: "Your_MESSAGING_SENDER_ID",
    appId: "Your_APP_ID",
};
```

## Installation Guide 🛠️

### Prerequisites

Ensure you have the following installed:

- Node.js (>=16.0)
- npm or yarn
- MongoDB (local or cloud)

### Steps to Run Locally

1. **Clone the Repository**

   ```sh
   git clone https://github.com/SudiptaRoy05/hotel-booking.git
   cd hotel-booking
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Run the Frontend**

   ```sh
   cd hotel-booking
   npm run dev
   ```

4. **Access the Application**
   Open `http://localhost:5173` in your browser.

## Contribution 🤝

If you’d like to contribute, please fork the repository and submit a pull request with your changes.


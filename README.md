# Discount PRO: A Coupon Collecting Application

**Discount PRO** is a user-friendly coupon collecting application designed to help users discover and utilize discount coupons for various e-commerce shops in Bangladesh. With features like user authentication, a brand-focused interface, and personalized coupon collections, Discount PRO simplifies the way users save money.

## Live Demo
[Live Application URL](#) *(https://spectacular-puppy-4974e7.netlify.app/)*

## Features

### 1. Authentication
- **Email & Password Login/Registration**: Secure authentication with password validation.
- **Google Social Login**: Simple and quick sign-in with Google.
- **Forgot Password**: Allows users to reset their passwords.

### 2. User Dashboard
- Welcome message with the user's name after login.
- Displays profile picture, name, and email.
- Provides options to update profile information.

### 3. Coupon Management
- Browse all coupons by brands.
- View coupon details like discount percentage, expiry date, and conditions.
- Copy coupon codes with a single click using `react-copy-to-clipboard`.
- Directly navigate to brand websites using the "Use Now" feature.

### 4. Dynamic Data
- Displays brands currently on sale.
- JSON-based data to showcase brand and coupon information.

### 5. Responsiveness
- Fully responsive design for mobile, tablet, and desktop devices.
- Smooth navigation and usability across all screen sizes.

### 6. Error Handling
- 404 Error page for invalid routes with a button to navigate back to the home page.

## Pages Overview

### 1. Home Page
- **Static Banner**: Slider featuring promotional images.
- **Top Brands Section**: Displays brand logos in a scrolling marquee.
- **Brands on Sale**: Highlights brands with active sales and coupons.
- **Additional Sections**: Dynamic or static sections for showcasing extra information.

### 2. Brands Page
- Search bar to filter brands.
- Cards displaying brand details (logo, rating, description).
- "View Coupons" button to navigate to brand-specific coupon details.

### 3. Coupon Details Page *(Private Route)*
- Shows a brand's logo, name, and rating.
- Grid layout to display all available coupons.
- Copy and use coupons with respective buttons.

### 4. My Profile Page *(Private Route)*
- Personalized page showing user details.
- Option to update profile information.

### 5. Authentication Pages
- **Login**: Login form with Google Social Login and forgot password option.
- **Register**: Registration form with password validation and toggle visibility.

### 6. Error Page
- Custom 404 error page with navigation back to the home route.

### Optional: About Us Page
- Details about the developer, skills, and other projects.

## JSON Data Structure

### Brands

```json
[
    {
        "_id": "1",
        "brand_name": "Brand A",
        "rating": 4.5,
        "description": "Leading e-commerce platform",
        "brand_logo": "https://example.com/logo.png",
        "coupons": [
            {
                "coupon_code": "SAVE20",
                "description": "20% off on all items",
                "expiry_date": "2024-12-31",
                "condition": "Minimum purchase of $50",
                "coupon_type": "Percentage"
            }
        ],
        "shop_link": "https://brand-a.com",
        "category": "Electronics",
        "isSaleOn": true
    }
]
```

## Technologies Used

### Frontend
- **React**: Framework for building a responsive UI.
- **Tailwind CSS**: For styling and responsive design.
- **React Fast Marquee**: For displaying scrolling brand logos.
- **React Copy to Clipboard**: For the "Copy Code" functionality.
- **AOS Animation Library**: Smooth animations for components.

### Backend
- **Firebase**: Authentication and data hosting.

## Installation Guide

### Clone the Repository

```bash
git clone https://github.com/your-repo/discount-pro.git
cd discount-pro
```

### Install Dependencies

```bash
npm install
```

### Set Environment Variables

Create a `.env` file in the root directory. Add your Firebase configuration:

```env
REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_APP_ID=your-app-id
```

### Run the Application

```bash
npm start
```

### Deploy the Application

Use platforms like Firebase Hosting, Netlify, or Surge to deploy the app.

## Deployment Checklist
- ✅ Ensure all routes work without errors on reload.
- ✅ Add domains for Firebase authorization.
- ✅ Test private routes and ensure smooth redirection.

## Key Notes
- **GitHub Commits**: Ensure at least 10 meaningful commits with descriptive messages.
- **Responsiveness**: Confirm design consistency across all devices.
- **Unique Design**: Use creative layouts and colors for a better user experience.

## Challenges Implemented
- **Password Validation**: Ensures secure passwords during registration.
- **Password Toggling**: Toggle visibility for password fields.
- **Update Profile**: Allows users to update their name and profile picture.
- **Animations**: Added smooth animations using Animate.css.

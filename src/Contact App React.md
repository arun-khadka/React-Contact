 # Contact Manager App with Firebase and React

This is a simple contact manager app built with React and Firebase. It allows users to add, view, and search for contacts.

## Prerequisites

To run this app, you will need the following:

- Node.js and npm installed
- A Firebase account
- A React development environment

## Setup

1. Clone the repository:

```
git clone https://github.com/your-username/contact-manager-app.git
```

2. Install the dependencies:

```
npm install
```

3. Create a `.env` file in the root directory of the project and add your Firebase configuration to it. You can get your Firebase configuration from the Firebase console.

```
REACT_APP_API_KEY=YOUR_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_APP_ID
```

4. Start the development server:

```
npm start
```

## App Overview

The app consists of the following components:

- `Navbar`: A simple navigation bar with a search bar and a button to add a new contact.
- `ContactCard`: A card that displays the details of a single contact.
- `NotFoundContact`: A message that is displayed when there are no contacts to show.
- `AddAndUpdateContact`: A modal that allows users to add or update a contact.

## Code Explanation

### `App.js`

The `App` component is the main component of the app. It handles the state of the app, such as the list of contacts and the search term. It also renders the other components of the app.

```javascript
import Navbar from './components/Navbar'
import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import {db} from "./config/firebase"
import AddAndUpdateContact from './components/AddAndUpdateContact'
import { ToastContainer } from 'react

Generated by [BlackboxAI](https://www.blackbox.ai)
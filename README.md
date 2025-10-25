# Redux Counter App

A modern React application demonstrating Redux state management with Redux Toolkit (RTK) and RTK Query. This app features a counter component with async operations and a posts list that interacts with an external API.

## 🚀 Features

- **Counter Component**: Increment/decrement counter with async operations
- **Posts Management**: Fetch and create posts using RTK Query
- **Modern Redux**: Built with Redux Toolkit for simplified state management
- **TypeScript**: Full type safety throughout the application
- **API Integration**: Connects to JSONPlaceholder API for demo data

## 🛠️ Technologies Used

- **React 19.2** - Modern React with latest features
- **TypeScript 4.9** - Type-safe JavaScript
- **Redux Toolkit 2.9** - Simplified Redux state management
- **RTK Query** - Powerful data fetching and caching
- **React Redux 9.2** - Official React bindings for Redux

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tomas-hruby/redux-counter.git
cd redux-counter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Counter.tsx          # Counter component with Redux state
│   └── PostsList.tsx        # Posts list with RTK Query
├── state/
│   ├── store.ts            # Redux store configuration
│   ├── counter/
│   │   └── counterSlice.ts # Counter slice with async actions
│   └── posts/
│       └── postsApiSlice.tsx # RTK Query API slice for posts
├── types/
│   └── Post.ts             # TypeScript type definitions
├── App.tsx                 # Main App component
└── index.tsx              # Application entry point
```

## ⚡ Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Key Components

### Counter Component
- Demonstrates Redux Toolkit slice usage
- Implements async increment/decrement operations
- Shows proper TypeScript integration with Redux

### Posts List Component
- Fetches posts from JSONPlaceholder API
- Implements post creation with RTK Query mutations
- Features loading states and error handling
- Demonstrates cache invalidation strategies

## 🎯 Redux Architecture

### Store Configuration
The store is configured with:
- Counter reducer for local state management
- Posts API slice for server state management
- RTK Query middleware for API caching

### State Management Patterns
- **RTK Slices**: For local application state (counter)
- **RTK Query**: For server state and API interactions (posts)
- **TypeScript Integration**: Fully typed actions and selectors

## 🌐 API Integration

The app integrates with [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for demo purposes:
- `GET /posts` - Fetch posts with pagination
- `POST /posts` - Create new posts (simulated)

## 🚀 Getting Started with Redux

This project is perfect for learning:
1. **Redux Toolkit basics** - See `counterSlice.ts`
2. **Async operations** - Check out async thunks in the counter
3. **RTK Query** - Explore the posts API slice
4. **TypeScript with Redux** - Full type safety examples

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📚 Learning Resources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [RTK Query Guide](https://redux-toolkit.js.org/rtk-query/overview)
- [React Redux Hooks](https://react-redux.js.org/api/hooks)
- [TypeScript with Redux](https://redux-toolkit.js.org/usage/usage-with-typescript)

---

Built with ❤️ using React and Redux Toolkit

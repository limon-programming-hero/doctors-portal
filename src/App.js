import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import { router } from './Router/Router';

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <MainLayout></MainLayout>
      </RouterProvider>
    </div>
  );
}

export default App;

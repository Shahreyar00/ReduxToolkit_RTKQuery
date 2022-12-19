import React from 'react';
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet,  } from "react-router-dom";
import PostsList from "./pages/PostsList";
import AddPostFrom from "./pages/AddPostForm";
import SinglePostPage from "./pages/SinglePostPage";
import EditPostForm from "./pages/EditPostForm";
import UserList from './pages/UserList';
import UserPage from './pages/UserPage';

const App = () => {
    const Layout = () => {
        return (
            <>
                <Header />
                <main>
                    <Outlet />
                </main>
            </>
        )
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element:<Layout />,
            children: [
                {
                    path:"/",
                    element:<PostsList />,
                },
                {
                    path:"/post",
                    element:<AddPostFrom />,
                },
                {
                    path:"/post/:postId",
                    element:<SinglePostPage />,
                },
                {
                    path:"/post/edit/:postId",
                    element:<EditPostForm />,
                },
                {
                    path:"/user",
                    element:<UserList />,
                },
                {
                    path:"/user/:userId",
                    element:<UserPage />,
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
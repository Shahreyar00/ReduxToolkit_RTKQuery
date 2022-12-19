import React from 'react'
import AddPostForm from './pages/AddPostForm'
import PostsList from './pages/PostsList'

const App = () => {
    return (
        <main className="App">
            <AddPostForm />
            <PostsList />
        </main>
    )
}

export default App
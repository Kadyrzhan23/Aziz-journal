import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Layout from "../components/layout/Layout.jsx";
import Posts from '../pages/posts/Posts.jsx'
import About from '../pages/about/About.jsx';
import Contacts from '../pages/contacts/Contacts.jsx';
import Post from "../pages/post/Post.jsx";
import NotFound from "../pages/notFountd/NotFound.jsx";
const router = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Posts />} />
            <Route path="post/:id" element={<Post />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    </Route>
))

export default router
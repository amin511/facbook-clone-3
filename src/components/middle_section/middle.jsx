import React, { useEffect, useState, useId } from "react";
import Stories from "./Stories-section/Stories";
import AddPost from "./post/AddPost"
import Post from "./post/post";
import Carousel from 'nuka-carousel'
import { dbPosts } from "./post/dbPost";
import { getDocs, collection, getDoc, addDoc, onSnapshot, QuerySnapshot, query, updateDoc, doc, setDoc } from "firebase/firestore"
import { storage } from "../firebase/config";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { db } from "../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { Timestamp } from "firebase/firestore";
import { nanoid } from "nanoid";
import PopupComment from "./post/popup-comment";



const Middle = () => {

    const url = 'https://unogsng.p.rapidapi.com/genres';
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/octet-stream',
            'X-RapidAPI-Key': '827417d2c6msh7c3046aaaaa4ac0p17ad76jsn9d540507cf87',
            'X-RapidAPI-Host': 'unogsng.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const get = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.text();

            } catch (error) {
                console.error(error);
            }
        }
        get()
    }

        , [])



    let id = nanoid()



    const [user] = useAuthState(auth)
    const [postsData, setPostsData] = useState([])



    // console.log("storage app ", storage)
    // const imageRef = ref(storage, "imagePosts/WIN_20221019_12_19_07_Pro.jpg")



    useEffect(() => {
        const q = query(
            collection(db, "posts")
        )
        const unsunscribe = onSnapshot(q, (QuerySnapshot) => {
            let postsReq = []
            QuerySnapshot.forEach((doc) => {
                postsReq.push({ ...doc.data(), id: doc.id })
            })
            setPostsData(postsReq)
        })
        return () => unsunscribe;
    }, [])

    const posts = postsData.map(post => {
        return (
            <Post
                key={post.id}
                dataPost={{ ...post }} />)
    })

    async function addNewPost(textPost, imgPost) {
        const id = nanoid()
        const currentDate = new Date()
        await setDoc(doc(db, "posts", id), {
            namePoster: user.displayName,
            userImage: user.photoURL,
            textPost: textPost,
            imgPost: imgPost,
            userId: user.uid,
            idPost: id,
            datePost: currentDate.toDateString()
        }).catch((e) => {
            console.log(e.message)
        })
    }
    return (
        <div>
            <section>
                <Stories />
            </section>
            <section className="mt-10">
                <AddPost addNewPost={addNewPost} />
            </section>
            <section>
                {posts}
            </section>
        </div>
    )
}
export default Middle
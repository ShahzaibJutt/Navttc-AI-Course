import { Post } from "../../components/post/post"
import './main.css';

export const Main = () => {
    const post = [
        {
            title: 'Hunza',
            createdDate: new Date(),
            userName: 'Danish',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        },
        {
            title: 'Maldives',
            createdDate: new Date(),
            userName: 'Umaid',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        },
        {
            title: 'Lahore',
            createdDate: new Date(),
            userName: 'Rahim',
            description: 'Lorem Ipsum',
            location: 'longitude & Latitude',
            image: undefined
        }
    ]
    return <>
    <div className="mainBody">
    {
        post.map(x => {
            return <Post
                data = { x }
            />
        })
    }
    </div>
    
    </>
}
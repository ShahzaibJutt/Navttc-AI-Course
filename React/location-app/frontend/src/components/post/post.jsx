import { Avatar } from "@mui/material";
import { Space } from "../space/space";
import './post.css';
export const Post = (data) => {
    const { 
        title, 
        image, 
        createdDate, 
        userName, 
        description, 
        location 
    } = data.data;

    console.log(data);


    return <>
    <div className="main">
        {/* Header of Post */}
        <div className="flex">
            <div className="m-r-10">
                {
                    image ? 
                    <img src={ image } alt="userImage" /> :
                    <Avatar />
                }
            </div>
            <h2>
              { userName }
            </h2>
        </div>
        {/* Image */}
        <div className="blackBox"></div>
        <Space />
        <div className="flex justify-between">
            <div>
                <h1  className="no-margin">
                    { title }
                </h1>
                <p className="no-margin">
                    {/* { createdDate} */}
                </p>
            </div>
            <div>
                <button className="m-r-10 editButton button">
                    Edit
                </button>
                <button className="deleteButton button">
                    Delete
                </button>
            </div>
        </div>
        {
            description &&
            <>
                <Space />
                <div className="flex">
                    <p>
                        { description }
                    </p>
                </div>    
            </>
        }
        
        <Space />
        <div className="flex">
            <h3 className="m-r-10">Location: </h3>
            <h3>{ location }</h3>
        </div>
    </div>
     
    </>
};

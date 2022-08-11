import { Avatar } from "@mui/material";
import './post.css'

export const Post = () => {
	const userName = 'Shahzaib';
	const userImage = 'image';
	return (
		<>
			<div className="main">
				<div>
					<div>
						userImage ? <img src={userImage} alt="userImage" /> : <Avatar />
					</div>
					<h2>
						{userName}
					</h2>
				</div>
			</div>
		</>
	)
}
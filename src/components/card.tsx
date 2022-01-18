import { useState, useEffect } from "react";
import { PostType } from "../interfaces";
import avatar from "../img/space-guy.jpg";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Card({ photo }: { photo: PostType }) {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLiked = () => setIsLiked(!isLiked);

  // Likes for photos should reset on date change
  useEffect(() => {
    setIsLiked(false);
  }, [photo])

  return (
    <div className="rounded overflow-hidden border w-full lg:w-6/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img src={avatar} alt="profilepic" />
          </div>
          <span className="pt-1 ml-2 font-bold text-sm">NASA APOD API</span>
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <img
        className="w-full bg-cover"
        src={photo.url}
        alt={`${photo.media_type} from NASA's Astronomy archives`}
      />
      <div className="px-3 pb-2">
        <div className="pt-2">
          {!isLiked && <FaRegHeart size={22} onClick={toggleLiked} />}
          {isLiked && (
            <FaHeart size={22} color="#d10d27" onClick={toggleLiked} />
          )}
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="font-medium mr-2">{photo.date}</span>
            {photo.explanation}
          </div>
        </div>
      </div>
    </div>
  );
}

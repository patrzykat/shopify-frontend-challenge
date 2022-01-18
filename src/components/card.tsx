import { PhotoType } from "../interfaces";
import avatar from "../img/space-guy.jpg";

export default function Card({ photo }: { photo: PhotoType }) {
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
      <img className="w-full bg-cover" src={photo.url} />
      <div className="px-3 pb-2">
        <div className="pt-2">
          <i className="far fa-heart cursor-pointer"></i>
          <span className="text-sm text-gray-400 font-medium">12 likes</span>
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

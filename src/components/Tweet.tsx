import Image from 'next/image'

interface TweetProps {
  username?: string;
  handle?: string;
  content?: string;
  avatar?: string;
  timestamp?: string;
  replies?: string;
  retweets?: string;
  likes?: string;
  views?: string;
  starvedMode?:boolean 
}
export default function Tweet({
  username="Rayj Bay Ter",
  handle="ragebaiter",
  content="*generated ragebait goes here* ",
  avatar,
  timestamp="1h",
  replies="500",
  retweets="5K",
  likes="2K",
  views="100K",
  starvedMode
}: TweetProps) {
  return (
    <div
      className={`bg-black transition-all text-white px-10 py-5 min-w-[35rem] max-w-[40rem]  rounded-lg border border-gray-800 ${
        starvedMode ? 'shadow-[0_0_25px_12px_rgba(200,28,28,0.7)]' : 'shadow-[0_0_25px_12px_rgba(0,20,40,0.7)]'
      }`}
    ><div className="flex items-start space-x-3">
        <Image
          src="/scheming.png"
          alt={`${username}'s avatar`}
          width={48}
          height={48}
          className=" object-contain border border-gray-700 h-14  w-14 -ml-1  rounded-full"
        />
        <div className="flex-1 ">
          <div className="flex items-center space-x-1">
            <span className="font-bold">{username}</span>
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{timestamp}</span>
          </div>
          <p className="mt-4 mb-5">{content}</p>
          <div className="flex justify-between text-gray-500 text-sm">
            <span>{replies} 💬</span>
            <span>{retweets} 🔁</span>
            <span>{likes} ❤️</span>
            <span>{views} 📊</span>
          </div>
        </div>
      </div>
    </div>
  )
}
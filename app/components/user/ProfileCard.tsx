import { IUser } from '@/app/types/User'
import UserImage from './UserImage';
import Icon from '../common/Icon';
import { MdLocationOn } from "react-icons/md"
import Link from 'next/link';
import { TbSquareRoundedCheckFilled } from "react-icons/tb"

interface ProfileCardProps {
  user: IUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <Link className='profile_card' href={`/users/${user.id}`}>
      <div className='flex'>
        <div className='w-16 h-16'>
          <UserImage user={user} size={50}/>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-2   items-center'>
            <h3 className='font-bold'>{user.name}, {user.age}</h3>
            <div>{user.isVerified && (<Icon icon={TbSquareRoundedCheckFilled} color="#1174c5"/>)}</div>
          </div>
          <div className='flex items-center gap-1'> 
            <Icon icon={MdLocationOn} color="black"/>
            <div className='text-gray-700'>{user.country}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProfileCard;


import './ProfileHeader.css'

const ProfileHeader = () => {
  return (
    <div className='ProfileHeader'>
        
        <ul className='list'>
            <li><a href='/'>Cart</a></li>
            <li><a href='/'>Orders</a></li>
            <li><a href='/'>Add Product</a></li>
        </ul>

    </div>
  )
}

export default ProfileHeader
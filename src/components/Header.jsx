import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-3 border-b-2'>
            <h1 className='text-4xl font-bold text-black-500'>Knowladge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
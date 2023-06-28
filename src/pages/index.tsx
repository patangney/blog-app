import { IoReorderThreeOutline } from 'react-icons/io5'
import { BsBell } from 'react-icons/bs'
import { FiEdit } from 'react-icons/fi'

const HomePage = () => {
  return (
    <div className='flex h-screen w-full flex-col'>
      <header className='flex h-20 w-full flex-row items-center justify-around bg-white border border-gray-200'>
        <div>
          <IoReorderThreeOutline className='text-4xl text-gray-600' />
        </div>
        <div className='text-xl font-thin'>Ultimate Blog Application</div>
        <div className='flex items-center space-x-2'>
          <div>
            <BsBell className='text-2xl' />
          </div>
          <div>
            <div className='w-5 h-5 bg-gray-600 rounded-full'></div>
          </div>
          <div>
            <button className='flex rounded items-center space-x-3 border border-gray-200 px-4 py-2'>
              <div>Write</div>
              <div>
                <FiEdit className='text-gray-600' />
              </div>
            </button>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-12'>        
        This is for main
      </div>
    </div>
  )
}

export default HomePage
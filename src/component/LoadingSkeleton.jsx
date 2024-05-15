import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const LoadingSkeleton = () => {
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-16 gap-10 lg:container lg:mx-auto'>
            <div className='w-[400px] mx-auto'>
            <Skeleton count={1} className='container mx-auto w-full h-[200px]' />
            <Skeleton count={3} className='container mx-auto w-full h-[50px]' />
            </div>
            <div className='w-[400px] mx-auto'>
            <Skeleton count={1} className='container mx-auto w-full h-[200px]' />
            <Skeleton count={3} className='container mx-auto w-full h-[50px]' />
            </div>
            <div className='w-[400px] mx-auto'>
            <Skeleton count={1} className='container mx-auto w-full h-[200px]' />
            <Skeleton count={3} className='container mx-auto w-full h-[50px]' />
            </div>
        </section>
    );
};

export default LoadingSkeleton;
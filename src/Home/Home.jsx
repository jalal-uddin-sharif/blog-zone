import Herro from "../component/Herro";
import Newsletter from "../component/Newsletter";
import RecentBlogs from "../component/RecentBlogs";
import {motion} from 'framer-motion'

const Home = () => {
    return (
        <motion.div variants={ { hidden:{opacity: 0}, show:{
            opacity: 1,
            transition:{
                staggerChildren: 0.25
            }
        } }} 
        initial= "hidden"
        animate= "show"
        >
            <Herro/>
            <RecentBlogs/>
            <Newsletter/>
        </motion.div>
    );
};

export default Home;
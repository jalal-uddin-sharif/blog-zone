import { Link } from 'react-router-dom';
import errorImg from '/404-v3.png' 
const Error = () => {
    return (
        <div className="flex h-screen flex-1 items-center justify-center">
        <div className="flex w-full max-w-2xl flex-col items-center px-6 text-center md:px-10">
          <img
            src={errorImg}
            alt="404"
            className="h-56"
          />
          <h2 className="mt-6 text-2xl font-semibold text-heading">
            The page your were looking for could not be found.
          </h2>
          <p className="mt-4 font-medium text-text">
            It seems this page is missing. Please check the URL or go home.
          </p>
          <Link
            to={'/'}
            className="mt-8 bg-blue-600 inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
};

export default Error;
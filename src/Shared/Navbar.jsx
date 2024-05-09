import { useState } from "react";
import Nav from '../component/Nav'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="h-40 bg-green-600">
        <div className="h-16 bg-white container mx-auto rounded-b-xl">
          <Nav/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

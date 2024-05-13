
import Swal from "sweetalert2";
import useAxiosSecure from "./useAxiosSecure";


const useAddWishlist = () => {
const myAxios = useAxiosSecure()
 const addData = async(listData) =>{
    const data = await myAxios.post("/wishlist", listData)
    console.log(data.data);
    if(data.data.insertedId){
      Swal.fire({
        icon: "success",
        title: "Added to wishlist",
        showConfirmButton: false,
        timer: 1500
      });
    }
 }
 return {addData};
}

export default useAddWishlist;
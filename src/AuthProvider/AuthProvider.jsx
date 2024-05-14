import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import useAxiosSecure from "../customHook/useAxiosSecure";
const myAxios = useAxiosSecure()

  
  export const AuthContext = createContext(null);
  const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {
        setUser(currentUser);
        const email = currentUser.reloadUserInfo
        console.log(currentUser);
        if(currentUser.reloadUserInfo){
          const {data} = await myAxios.post('/jwt', email)
          console.log(currentUser.reloadUserInfo.email);
          console.log(data);
        } 
        setLoading(false);
      });
      return () => {
        unSubscribe();
      };
    }, [user]);
  
    //google login
    const googleProvide = new GoogleAuthProvider();
    const googleLogin = (location, navigate) => {
      signInWithPopup(auth, googleProvide)
        .then(async(res) => {
          setUser(res.user);
          navigate(location?.state || "/");
          
          // console.log(data);
        })
        .catch((err) =>{
          //  console.log(err)
          });
    };
    //github login
    const githubProvider = new GithubAuthProvider();
    const githubLogin = (location, navigate) => {
      signInWithPopup(auth, githubProvider)
        .then((res) => {
          setUser(res.user);
          navigate(location?.state || "/");
        })
        .catch((err) => {
          // console.log(err)
        });
    };

    const logOut = async() => {
      const {data} = await myAxios.post('/logout')
      console.log(data);
       return signOut(auth)
      };
  
    const authInfo = {
      user,
      setUser,
      createUser,
      loginUser,
      loading,
      setLoading,
      googleLogin,
      githubLogin,
      logOut
    };
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { clearLocalStorage } from "../localstorage";
import { setupInterceptors } from "../services/api";

export default function InjectAxiosInterceptors() {
    const history = useHistory();

    function handleLogout() {
        clearLocalStorage();
        history.push("/");
    }
        
    
    useEffect(() => {
      setupInterceptors(handleLogout);
    }, [history]);
  
    // not rendering anything
    return null;
  }
  
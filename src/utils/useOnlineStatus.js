import { useState } from "react"


const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    addEventListener("online", () => {
        setOnlineStatus(true);
    })
    addEventListener("offline", () => {
        setOnlineStatus(false);
    })
    return onlineStatus;
}

export default useOnlineStatus;
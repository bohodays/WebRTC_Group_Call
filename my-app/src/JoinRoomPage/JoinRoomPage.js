import React, { useEffect } from "react";
import "./JoinRoomPage.css";
import { useLocation } from "react-router-dom";

const JoinRoomPage = () => {
  const search = useLocation().search;

  useEffect(() => {
    const isRoomHost = new URLSearchParams(search).get("host");
    if (isRoomHost) {
      // seeting in our redux store that user is host
    }
  }, []);

  return (
    <div className="join_room_page_container">
      <div className="join_room_page_panel"></div>
    </div>
  );
};

export default JoinRoomPage;

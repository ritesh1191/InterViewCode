import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Home() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const generateRoomId = (e) => {
    e.preventDefault();
    const id = uuid();
    setRoomId(id);
    toast.success("New Room ID Generated");
  };

  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error("Fill Both Fields");
      return;
    }

    // navigate
    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });

    toast.success("Joined Room Successfully");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-2 mb-5 bg-secondry rounded">
            <div className="card-body text-center bg-dark">
              <img
                className="img-fluid mx-auto d-block mb-2"
                src="/images/Logo.png"
                alt="Logo"
                style={{ maxWidth: "250px" }}
              />
              <h4 className="text-light">Enter Room ID</h4>

              <div className="form-group">
                <input
                  value={roomId}
                  onChange={(e) => {
                    setRoomId(e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                  placeholder="Room ID"
                />
              </div>

              <div className="form-group">
                <input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  className="form-control mb-2"
                  placeholder="UserName"
                />
              </div>

              <button
                className="btn btn-success btn-lg btn-block"
                onClick={joinRoom}
              >
                JOIN
              </button>

              <p className="mt-3 text-light">
                Don't Have a Room ID?{" "}
                <span
                  className="text-success p-2 text-decoration-underline"
                  style={{ cursor: "pointer" }}
                  onClick={generateRoomId}
                >
                  New Room
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

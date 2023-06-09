import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RouletteSpinnerOverlay } from 'react-spinner-overlay';
import profileImage from "./profileImage.png";
import dateFormat from "dateformat";

const Profile = () => {
  const host = "https://inotebook-api-30tl.onrender.com/";
  const [user, setUser] = useState({ name: "", email: "", date: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //API Call
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`${host}api/auth/getuser`, {
          method: "POST",
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });
        const json = await response.json();
        setUser({ name: json.name, email: json.email, date: json.date });
        setLoading(false);
      };
      fetchData();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container py-5 h-100">
      <RouletteSpinnerOverlay loading={loading} size ={50} color="#212529" overlayColor="rgb(255 255 255 / 40%)"/>
      <div className="row d-flex justify-content-center align-items-center h-150">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center" style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem", background: "linear-gradient(to right bottom, rgba(246, 211, 101, 1), rgba(253, 160, 133, 1))" }}>
                <img src={profileImage} alt="Avatar" className="img-fluid my-3" style={{ width: "120px" }} />
                <h5>{user.name}</h5>
                <p>iNotebook User</p>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                      <h6>Email</h6>
                      <p className="text-muted">{user.email}</p>
                  </div>
                  <div className="row pt-1">
                      <h6>Date Joined</h6>
                      <p className="text-muted">{dateFormat(user.date, "mmmm dS, yyyy")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

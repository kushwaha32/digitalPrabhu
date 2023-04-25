import profile_icon_1 from "../../img/profile_icon_1.svg";
import profile_icon_2 from "../../img/profile_icon_2.svg";
import profile_icon_3 from "../../img/profile_icon_3.svg";
import profile_icon_4 from "../../img/profile_icon_4.svg";
import folders from "../../img/folders.png"

const RatatingAnimation = ({type}) => {
    return(
        <div className={`content-rotating ${type}`}>
        <div className="profile-circle-wrapper circle-animation d-none d-sm-block">
          {/* Profile Inner */}
          <div className="profile-inner">
            {/* Profile Circle */}
            <div className="profile-circle circle-lg">
              <span
                className="profile-icon icon-1"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-1-img"
                  src={profile_icon_1}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-2"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-2-img"
                  src={profile_icon_2}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-3"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-3-img"
                  src={profile_icon_1}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-4"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-4-img"
                  src={profile_icon_2}
                  alt
                />
              </span>
            </div>
            {/* Profile Circle */}
            <div className="profile-circle circle-md">
              <span
                className="profile-icon icon-5"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-5-img"
                  src={profile_icon_3}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-6"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-6-img"
                  src={profile_icon_3}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-7"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-7-img"
                  src={profile_icon_3}
                  alt
                />
              </span>
            </div>
            {/* Profile Circle */}
            <div className="profile-circle circle-sm">
              <span
                className="profile-icon icon-8"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-8-img"
                  src={profile_icon_4}
                  alt
                />
              </span>
              <span
                className="profile-icon icon-9"
                style={{ display: "inline" }}
              >
                <img
                  className="icon-9-img"
                  src={profile_icon_4}
                  alt
                />
              </span>
            </div>
          </div>
          <img
            className="folder-img"
            src={folders}
            alt
          />
        </div>
      </div>
    )
}


export default RatatingAnimation;
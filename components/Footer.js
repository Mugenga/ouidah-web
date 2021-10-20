import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <div className="row">
              <div className="col-sm-12">
                <img
                  src="/logo_ville_ouidah.jpg"
                  alt="Logo Ville Ouidah"
                  className=""
                  style={{
                    width: "30%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-sm-12">
                <p className="text-3 custom-margin-sm">
                  Située au Sud-Ouest du Bénin, la Commune de Ouidah appartient
                  à l’ensemble géographique qu’il est convenu d’appeler « Zone
                  humide ». Elle jouit d’un climat soudanoguinéen, caractérisé
                  par deux saisons de pluie alternées de deux saisons sèches à
                  durées inégales.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <h3 className="text-6 text-blue custom-margin-sm">
                  {" "}
                  Visit Oudah{" "}
                </h3>
                <a
                  href="#"
                  className="text-5 custom-margin-sm"
                  style={{ color: "#5597D1" }}
                >
                  Office du Tourisme
                </a>
              </div>
              <div className="col-sm-6">
                <h3 className="text-6 text-blue custom-margin-sm">
                  {" "}
                  Demarches{" "}
                </h3>
                <a
                  href="#"
                  className="text-5 custom-margin-sm"
                  style={{ color: "#5597D1" }}
                >
                  Service en Ligne
                </a>
              </div>
              <div className="col-sm-12">
                <div class="input-group custom-margin-lg" style={{width: "90%"}}>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search this blog"
                  />
                  <div class="input-group-append">
                    <button class="button-md" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <h3 className="text-6 text-blue custom-margin-sm">
              {" "}
              Derniers Tweet{" "}
            </h3>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="DCBenin"
              options={{ height: 250 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

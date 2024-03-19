import ParentCardLayout from "../../layouts/ParentCardLayout";
import Fingerprint from "../../assets/json/Fingerprint.json";
import { useState } from "react";
import SesionHooks from "../../hooks/SesionHooks";
const Login = () => {
  const { getTokens, redirectIfLogged } = SesionHooks();
  redirectIfLogged();
  const [data, setData] = useState({ username: "", password: "" });
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getTokens(data);
  };
  return (
    <ParentCardLayout
      icon={Fingerprint}
      header="BitControl"
      title="Iniciar sesión"
      component={
        <>
          <article>
            <h4>Ingrese sus credenciales para empezar</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  Usuario <i className="bi bi-person-badge"></i>
                </label>
                <input
                  type="text"
                  className="form-control form-control-border"
                  id="username"
                  required
                  name="username"
                  placeholder="Ej. JohnDoe"
                  onInput={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  Contraseña <i className="bi bi-key-fill"></i>
                </label>
                <input
                  type="password"
                  className="form-control form-control-border"
                  required
                  name="password"
                  id="password"
                  onInput={handleInputChange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Entrar <i className="bi bi-box-arrow-in-right"></i>{" "}
              </button>
            </form>
          </article>
        </>
      }
    />
  );
};

export default Login;

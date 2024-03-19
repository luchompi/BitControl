import { generateTokens } from "../apis/auth.apis";
import sesionStore from "../store/SesionStore";
import { useNavigate } from "react-router-dom";
import { successMessage } from "../components/messages";
const SesionHooks = () => {
  const { isLogged, setTokens, alterLoading, logout } = sesionStore(
    (state) => state
  );
  const url = useNavigate();
  const redirectIfNotLogged = () => {
    !isLogged && url("/login");
  };
  const redirectIfLogged = () => {
    isLogged && url("/");
  };
  const getTokens = async (data) => {
    alterLoading(true);
    await generateTokens(data)
      .then((Response) => {
        setTokens(Response.data);
        successMessage("¡Bienvenido!", "Sesión iniciada correctamente.");
        url("/");
        alterLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        alterLoading(false);
      });
  };
  const finishSesion = () => {
    successMessage("¡Hasta luego!", "Sesión cerrada correctamente.");
    logout();
  };
  return {
    redirectIfNotLogged,
    redirectIfLogged,
    getTokens,
    finishSesion,
  };
};

export default SesionHooks;

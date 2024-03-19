import Forbidden from "../../assets/json/Forbidden.json";
import ParentCardLayout from "../../layouts/ParentCardLayout";
const Error403 = () => {
  return (
    <>
      <ParentCardLayout
        icon={Forbidden}
        header="403 - Acceso denegado"
        title="Acceso denegado"
        component={
          <article>
            <p>
              Usted ha sido redirigido a esta vista porque aparentemente no
              posee permisos para realizar esta acción. Esto puede deberse a dos
              motivos:
            </p>
            <ul>
              <li>
                1. Usted no ha iniciado sesión. Por favor, inicie sesión para
                continuar.
              </li>
              <li>
                2. Usted no posee los permisos necesarios para realizar esta
                acción.
              </li>
              <li>
                3. Por algun motivo, el servidor finalizó la sesión y la tarea
                no puede procesarse.
              </li>
            </ul>
            <p>
              Vuelva a iniciar sesión e intente de nuevo. En caso contrario
              póngase en contacto con el administrador para mayor información.
            </p>
          </article>
        }
      />
    </>
  );
};

export default Error403;

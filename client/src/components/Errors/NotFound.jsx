import ParentCardLayout from "../../layouts/ParentCardLayout";
import NotFound from "../../assets/json/NotFound.json";
const Error404 = () => {
  return (
    <>
      <ParentCardLayout
        title="404 Not Found"
        icon={NotFound}
        header="404 - Not Found"
        component={
          <article>
            <p>
              El recurso al que intenta acceder, no existe o fue removido. Por
              favor, vuelva al inicio o pruebe con alguna otra ruta.
            </p>
          </article>
        }
      />
    </>
  );
};

export default Error404;

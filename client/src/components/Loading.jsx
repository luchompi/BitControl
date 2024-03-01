import Server from "../assets/json/Server.json";
import ParentCardLayout from "../layouts/ParentCardLayout";

const Loading = () => {
  return (
    <ParentCardLayout
      icon={Server}
      title="Espere..."
      header="Cargando"
      component={
        <>
          <p>Espere mientras se realizan algunas tareas.</p>
        </>
      }
    />
  );
};

export default Loading;

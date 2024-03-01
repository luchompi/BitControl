import Server from "../assets/json/Server.json";
import ParentCardLayout from "../layouts/ParentCardLayout";

const Loading = () => {
  return (
    <div>
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
    </div>
  );
};

export default Loading;

import ParentCardLayout from "../../layouts/ParentCardLayout";
import Icon from "../../assets/json/Icon.json";
const Home = () => {
  return (
    <ParentCardLayout
      icon={Icon}
      header="BitControl"
      title="Bienvenido a BitControl"
      component={
        <>
          <p className="text-muted">Su sistema de inventario</p>
        </>
      }
    />
  );
};

export default Home;

import Tuc from "../assets/imgs/Tuc.png";

const Header = () => {
  return (
    <header className="bg-primary p-5">
      <div className="flex justify-around">
        <div className="flex space-x-5 items-center drop-shadow-xl">
          <img src={Tuc} className="w-16 rounded-md" alt="logo" />
          <p className="text-white">Editar medidas</p>
        </div>
        <div className="flex space-x-5 items-center">
          <p className="text-white">Nuevo proyecto</p>
          <select
            value="Guardar y salir"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Guardar y salir</option>
            <option>Salir sin guardar</option>
            <option>Guardar y continuar</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

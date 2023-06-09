import React from "react";
import Gerenciador from '../assets/gerenciador.png';
// icons
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { useAuth } from "../context/authContext";

const Login = () => {
  const { login } = useAuth();
  return (
    <div className="min-h-screen w-screen bg-primary dark:bg-dark-500 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <img
          src={Gerenciador}
          className="w-[400px] "
          alt="Gerenciador de tarefas"
        />
        <button
          type="button"
          onClick={login}
          className="bg-white dark:bg-dark-100 hover:bg-gray-300 hover:scale-110 transition-all py-2 px-4 flex items-center gap-2 rounded-lg font-medium"
        >
          <GoogleIcon />
          Entrar com o Google
        </button>
      </div>
    </div>
  );
};

export default Login;

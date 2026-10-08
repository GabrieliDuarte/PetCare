import React from 'react';

export function Login() {
  return (
    // Fundo da tela ocupando 100% da altura e centralizando o conteúdo
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F9F6]">
      
      {/* Container principal do formulário */}
      <div className="w-full max-w-sm px-6 flex flex-col items-center">
        
        {/* Logótipo */}
        <div className="flex items-center gap-2 mb-8">
          {/* Usando um emoji provisório de patinha, depois podes trocar por um ícone SVG */}
          <span className="text-[#FF7F50] text-xl">🐾</span>
          <h1 className="text-xl font-bold tracking-tight">
            <span className="text-[#4A7c59]">pet</span> <span className="text-[#FF7F50]">care</span>
          </h1>
        </div>

        {/* Título e Subtítulo */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Entrar na sua conta
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Acompanhe a rotina do seu pet.
        </p>

        {/* Formulário */}
        <form className="w-full flex flex-col gap-4">
          
          {/* Campo E-mail */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1 ml-1">E-mail</label>
            <input
              type="email"
              placeholder="voce@email.com"
              className="px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-[#4A7c59] focus:ring-1 focus:ring-[#4A7c59] placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Campo Senha */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1 ml-1">Senha</label>
            <input
              type="password"
              placeholder="Sua senha"
              className="px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-[#4A7c59] focus:ring-1 focus:ring-[#4A7c59] placeholder:text-gray-400 text-sm"
            />
          </div>

          {/* Esqueci minha senha */}
          <div className="flex justify-end mt-1">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Esqueci minha senha
            </a>
          </div>

          {/* Botão Entrar */}
          <button
            type="submit"
            className="w-full bg-[#8E9C98] hover:bg-[#7A8A86] text-white font-medium py-3 rounded-full mt-2 transition-colors"
          >
            Entrar
          </button>
        </form>

        {/* Rodapé - Cadastro */}
        <p className="text-xs text-gray-500 mt-8">
          Ainda não tem conta?{' '}
          <a href="#" className="text-[#4A7c59] font-semibold hover:underline">
            Cadastre seu pet
          </a>
        </p>
        
      </div>
    </div>
  );
}
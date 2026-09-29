import { FaPaw } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-gray-400 py-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Coluna 1: Logo e Descrição */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
            <FaPaw className="text-red-500" />
            <span>pet care</span>
          </div>
          <p className="text-sm leading-relaxed">
            Uma plataforma completa para a gestão da sua clínica veterinária, 
            integrando cuidados e praticidade para quem você ama.
          </p>
        </div>

        {/* Coluna 2: Produto */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Produto</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">App</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Empresa */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Empresa</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dicas pet care</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Trabalhe conosco</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Contato</h3>
          <ul className="space-y-3 text-sm">
            <li>contato@petcare.com.br</li>
            <li>(48) 99999-0000</li>
            <li>Florianópolis, SC</li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}
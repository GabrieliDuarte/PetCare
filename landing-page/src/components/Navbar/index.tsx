import { GrSchedule } from "react-icons/gr";
import { MdOutlinePets } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="px-5 md:px-20 py-6 flex items-center justify-between border-b border-b-[#ccc]">
      <div className="flex items-center gap-2">
        <MdOutlinePets size={24} color="#3F9271" />
        <h2 className="text-[20px] font-black text-[#153229]">pet</h2>
        <h2 className="text-[20px] font-black text-[#FF6B4A]">care</h2>
      </div>

      <nav>
        <ul className="flex items-center gap-5 md:gap-10">
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Início
            </a>
          </li>
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Funcionalidades
            </a>
          </li>
          <li>
            <a href="" className="text-xs md:text-base text-[#1F4136]">
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <a
        href=""
        className="hidden md:block bg-[#153229] text-white font-medium font-display text-sm px-6 py-2.5 rounded-full shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)]"
      >
        Agendar consulta
      </a>

      <div className="block md:hidden bg-[#153229] p-2 rounded-full">
        <a>
          <GrSchedule color="#fff" size={14} />
        </a>
      </div>
    </header>
  );
}

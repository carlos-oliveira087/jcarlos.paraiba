import { PiMapPinAreaFill } from "react-icons/pi";
import { FaAngleUp } from "react-icons/fa";


function Location() {


  return (

    <div className="flex justify-center items-center text-center bg-white rounded-t-3xl mt-16">

      <div>
        <div className="flex items-center justify-center text-secondary gap-3 mb-10">
          <h1 className="flex text-2xl font-arimo font-semibold mt-10">Onde estamos localizados</h1>
          <span className="text-3xl mt-10"><PiMapPinAreaFill /></span>
        </div>

        <div className="mx-5 max-w-[900px]">
          <img className="rounded-t-2xl" src="./assets/loja_jp.jpg"/>
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-12 mx-5 bg-secondary h-[340px] w-auto max-w-[900px]">
          <p className="text-white mb-4 font-arimo mx-4 text-2xl font-bold">João Pessoa</p>
          <p className="text-white mb-6 font-arimo mx-4 text-base">
            Av. Barão de Mamanguape, 642<br />Torre, 58040-330
          </p>
          <a href="https://maps.app.goo.gl/hdF2AHcxnKbymAEZ6" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl h-10 w-44 sm:w-72 sm:text-[17px]">
            Como chegar
          </a>
          <span className="text-white font-arimo italic m-3">Ou</span>
          <a href="tel:+558332245025" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl w-44 sm:w-72 sm:text-[17px]">
            (083) 3224-5025
          </a>
        </div>

        <div className="mx-5 max-w-[900px]">
          <img className="rounded-t-2xl" src="./assets/loja_cg.jpg" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center text-center rounded-b-2xl mb-16 mx-5 bg-secondary h-[340px] w-auto max-w-[900px]">
          <p className="text-white mb-4 font-arimo mx-4 text-2xl font-bold">Campina Grande</p>
          <p className="text-white mb-6 font-arimo mx-4 text-base">
            Av. Mal. Floriano Peixoto, 1175<br />Centro, 58400-165
          </p>
          <a href="https://maps.app.goo.gl/4bihX2UXLrBFp7hx5" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl w-44 sm:w-72 sm:text-[17px]">
            Como chegar
          </a>
          <span className="text-white font-arimo italic m-3">Ou</span>
          <a href="tel:+558330656335" className="bg-white text-secondary font-bold py-2 px-4 rounded-xl w-44 sm:w-72 sm:text-[17px]">
            (083) 3065-6335
          </a>
        </div>

        <div>
          <div className="flex flex-col text-secondary items-center text-center justify-center mb-16 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl"><FaAngleUp /></span>
            <span className="text-lg font-semibold font-arimo">Voltar ao topo</span>
          </div>

          <div className="flex-col flex justify-center items-center bg-secondary text-white mx-[25px] h-[77px] rounded-t-xl gap-2">
            <p className="text-[12px] font-normal font-arimo md:text-[15px]">&copy; 2024 J.Carlos Móveis - Todos os direitos reservados.</p>
            <p className="text-[12px] font-normal font-arimo md:text-[13px]">Criado por <a className="font-bold" target="_blank" href="https://www.linkedin.com/in/carlos-oliveira-98aa64288/">Carlos Oliveira</a></p>
          </div>

        </div>

      </div>

    </div> 
  );
}

export default Location;


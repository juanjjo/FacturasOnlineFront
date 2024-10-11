import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faCog } from '@fortawesome/free-solid-svg-icons';
{/* <i class="fas fa-cog"></i> */ }
export const Dashboard = () => {
  return (
    <>
      <div>
        <p className="text-center">¡Comienza a crear tu primera factura ahora!</p>
      </div>
      <div className="flex justify-center">
        <img src={"/assets/img/invoice/invoiceOneP.png"} alt="" className="w-auto h-auto md:w-[500px] md:h-[500px]"/>

      </div>
      {/* <div>
        <p className="text-center">¡Comienza a crear tu primera factura ahora!</p>
      </div>
      <div className="flex justify-center">

        <img src={"/assets/img/invoice/invoiceOneP.png"} alt="" />
      </div> */}

      {/* <a href="#">
          <FontAwesomeIcon className='text-black' icon={faCog} aria-hidden="true" />
        </a> */}
    </>
  )
}

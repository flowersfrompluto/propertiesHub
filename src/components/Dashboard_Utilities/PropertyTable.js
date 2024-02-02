import { TbTrashOff } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import property_img1 from "../../images/property_img1.jpg";
import property_img2 from "../../images/property_img2.jpg";
import property_img3 from "../../images/property_img3.png";
import { Link, useNavigate } from "react-router-dom";




export default function () {
  const navigate = useNavigate()
  return (
    <table id="properties-tables">
      <tr>
        <th>Property</th>
        <th>tenant</th>
        <th>Rent/lease</th>
        <th>Status</th>
        <th>action</th>
      </tr>

      <tr>
        <td>
          <div className="prperty-info">
            <div className="property-img">
              <img src={property_img1} alt="" />
            </div>
            <div className="property-dscp">
              <p className="property-name">Harrison Apartment</p>
              <p className="property-location">No. 32 Morrcco Rd</p>
              <div className="property-amount flex">
                <div className="property-price-icon"><HiMiniShoppingBag size={18}/></div>
                <p>₦ 1,500,000</p>
              </div>
            </div>
          </div>
        </td>
        <td>Aminu</td>

        <td>
          <div className="property-duration">
            <div className="rent-period">
              <MdOutlineCalendarMonth size={20} />
              <h4>2024/12/31</h4>
            </div>
            <p>Property leased until</p>
          </div>
        </td>

        <td>
          <div className="property-status">
            <div className="status">
              <IoCheckmarkCircleOutline />
              <p>verified</p>
            </div>
          </div>
        </td>

        <td>
          <div className="table-action-btn">
            <div className="action-btn read" title="view">
              <FaFileAlt size={15} />
            </div>

            <div className="action-btn edit" title="edit">
              <FaRegEdit />
            </div>

            <div className="action-btn delete" title="delete">
              <TbTrashOff size={15} />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="prperty-info">
            <div className="property-img">
              <img src={property_img2} alt="" />
            </div>
            <div className="property-dscp">
              <p className="property-name">Harrison Apartment</p>
              <p className="property-location">No. 32 Morrcco Rd</p>
              <div className="property-amount flex">
                <div className="property-price-icon"><HiMiniShoppingBag size={18}/></div>
                <p>₦ 1,500,000</p>
              </div>
            </div>
          </div>
        </td>
        <td>Aminu</td>

        <td>
          <div className="property-duration">
            <div className="rent-period">
              <MdOutlineCalendarMonth size={20} />
              <h4>2024/12/31</h4>
            </div>
            <p>Property leased until</p>
          </div>
        </td>

        <td>
          <div className="property-status">
            <div className="status">
              <IoCheckmarkCircleOutline />
              <p>verified</p>
            </div>
          </div>
        </td>

        <td>
          <div className="table-action-btn">
            <div className="action-btn read" title="view">
              <FaFileAlt size={15} />
            </div>

            <div className="action-btn edit" title="edit">
              <FaRegEdit />
            </div>

            <div className="action-btn delete" title="delete">
              <TbTrashOff size={15} />
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="prperty-info">
            <div className="property-img">
              <img src={property_img3} alt="" />
            </div>
            <div className="property-dscp">
              <p className="property-name">Harrison Apartment</p>
              <p className="property-location">No. 32 Morrcco Rd</p>
              <div className="property-amount flex">
                <div className="property-price-icon"><HiMiniShoppingBag size={18}/></div>
                <p>₦ 1,500,000</p>
              </div>
            </div>
          </div>
        </td>
        <td>Aminu</td>

        <td>
          <div className="property-duration">
            <div className="rent-period">
              <MdOutlineCalendarMonth size={20} />
              <h4>2024/12/31</h4>
            </div>
            <p>Property leased until</p>
          </div>
        </td>

        <td>
          <div className="property-status">
            <div className="status">
              <IoCheckmarkCircleOutline />
              <p>verified</p>
            </div>
          </div>
        </td>

        <td>
          <div className="table-action-btn">
            <div className="action-btn read" title="view" onClick={()=>{navigate("/admin-agent/single-property-admin")}}>
              <FaFileAlt size={15} />
            </div>

            <div className="action-btn edit" title="edit" onClick={()=>{navigate("/admin-agent/update-property-admin")}}>
             <FaRegEdit />
            </div>

            <div className="action-btn delete" title="delete">
              <TbTrashOff size={15} />
            </div>
          </div>
        </td>
      </tr>


    </table>
  );
}

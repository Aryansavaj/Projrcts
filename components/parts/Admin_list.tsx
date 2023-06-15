import React, { useState } from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";


interface AdminListProps {
  title: string;
  count: number;
  date: string;
  imageUrl: string;
}

const AdminList: React.FC<AdminListProps> = ({ title, count, date, imageUrl }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuOptions = ["Edit Details", "Preview", "Deleted"];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    
      <div className="admin_list flex justify-between items-center bg-white my-4 rounded-[26px] p-3">
        <div className="admin_list_content flex gap-4 items-center">
          <div className="admin_list_img overflow-hidden rounded-[16px]">
            <img src={imageUrl} alt="Admin Image" width="100%"/>
          </div>
          <div className="admin_list_detail flex flex-col gap-2">
            <h4 className="text-base form-text-color font-semibold">{title}</h4>
            <div className="admin_list_extra flex gap-2 items-center">
              <div className="admin_list_count font-medium text-[10px] text-707BA0 flex items-center bg-EDF5FE rounded-xl">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.10666 8.03768C8.03999 8.03102 7.95999 8.03102 7.88666 8.03768C6.29999 7.98435 5.03999 6.68435 5.03999 5.08435C5.03999 3.45102 6.35999 2.12435 7.99999 2.12435C9.63333 2.12435 10.96 3.45102 10.96 5.08435C10.9533 6.68435 9.69333 7.98435 8.10666 8.03768Z" stroke="#707BA0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4.77334 10.4977C3.16001 11.5777 3.16001 13.3377 4.77334 14.411C6.60667 15.6377 9.61334 15.6377 11.4467 14.411C13.06 13.331 13.06 11.571 11.4467 10.4977C9.62001 9.27768 6.61334 9.27768 4.77334 10.4977Z" stroke="#707BA0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>&nbsp;
                {count}</div>
              <div className="admin_list_date font-medium text-[10px] text-707BA0 flex items-center bg-EDF5FE rounded-xl">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.33333 2.12435V4.12435" stroke="#707BA0" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.6667 2.12435V4.12435" stroke="#707BA0" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.33333 6.85101H13.6667" stroke="#707BA0" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 6.45768V12.1243C14 14.1243 13 15.4577 10.6667 15.4577H5.33333C3 15.4577 2 14.1243 2 12.1243V6.45768C2 4.45768 3 3.12435 5.33333 3.12435H10.6667C13 3.12435 14 4.45768 14 6.45768Z" stroke="#707BA0" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.99698 9.92436H8.00297" stroke="#707BA0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.52955 9.92436H5.53553" stroke="#707BA0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.52955 11.9244H5.53553" stroke="#707BA0" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>&nbsp;
                {date}</div>
            </div>
          </div>
        </div>
        <div className={`admin_list_menu relative rounded-[25px] py-7 px-2 ${menuOpen ? 'open' : ''}`}>
          <div onClick={toggleMenu}>
            <BsThreeDotsVertical/>
          </div>
          {menuOpen && (
        <div className="menu-options absolute text-center right-100 p-4">
        {menuOptions.map((option, index) => (
          <div key={`option-${index}`}>{option}</div>
        ))}
      </div>
      )}
        </div>
      </div>
  );
};

export default AdminList;

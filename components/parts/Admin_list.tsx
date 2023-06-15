import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";


interface AdminListProps {
  title: string;
  count: number;
  date: string;
  imageUrl: string;
}

const AdminList: React.FC<AdminListProps> = ({ title, count, date, imageUrl }) => {
  return (
    
      <div className="admin_list flex justify-between items-center bg-white my-4 rounded-[26px] p-3">
        <div className="admin_list_content flex gap-4 items-center">
          <div className="admin_list_img overflow-hidden rounded-[16px]">
            <img src={imageUrl} alt="Admin Image" width="100%"/>
          </div>
          <div className="admin_list_detail">
            <h4 className="text-base form-text-color font-semibold">{title}</h4>
            <div className="admin_list_extra flex gap-4 items-center">
              <div className="admin_list_count font-medium text-[10px] text-707BA0">{count}</div>
              <div className="admin_list_date font-medium text-[10px] text-707BA0">{date}</div>
            </div>
          </div>
        </div>
        <div className="admin_list_menu rounded-[25px] py-7 px-2"><BsThreeDotsVertical/></div>
      </div>
  );
};

export default AdminList;

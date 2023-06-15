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
    
      <div className="admin_list flex justify-between items-center bg-white my-4 rounded-[26px]">
        <div className="admin_list_content flex justify-between items-center">
          <div className="admin_list_img flex justify-between items-center">
            <img src={imageUrl} alt="Admin Image" />
          </div>
          <div className="admin_list_detail">
            <h4>{title}</h4>
            <div className="admin_list_extra flex justify-between items-center">
              <div className="admin_list_count">{count}</div>
              <div className="admin_list_date">{date}</div>
            </div>
          </div>
        </div>
        <div className="admin_list_menu rounded-[25px] py-7 px-2"><BsThreeDotsVertical/></div>
      </div>
  );
};

export default AdminList;

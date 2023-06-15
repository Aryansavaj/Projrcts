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
    <div className="bg-base-200 p-6">
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
        <div className="admin_list_menu"><BsThreeDotsVertical/></div>
      </div>
    </div>
  );
};

export default AdminList;

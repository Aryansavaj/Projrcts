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
    <div className="admin_list">
      <div className="admin_list_content">
        <div className="admin_list_img">
          <img src={imageUrl} alt="Admin Image" />
        </div>
        <div className="admin_list_detail">
          <h4>{title}</h4>
          <div className="admin_list_extra">
            <div className="admin_list_count">{count}</div>
            <div className="admin_list_date">{date}</div>
          </div>
        </div>
      </div>
      <div className="admin_list_menu"><BsThreeDotsVertical/></div>
    </div>
  );
};

export default AdminList;

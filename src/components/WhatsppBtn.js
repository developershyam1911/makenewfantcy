"use client";
import "./whatsapp.css";
import { MdWhatsapp } from "react-icons/md";
const WhatsppBtn = () => {
  return (
    <div className="whatsapp-btn">
      <a href="https://wa.me/+917248664262" class="">
        <MdWhatsapp size={40} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsppBtn;

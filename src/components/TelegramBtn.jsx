"use client";
import "./whatsapp.css";
import { BsTelegram } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { RiTelegramLine } from "react-icons/ri";

const TelegramBtn = () => {
  return (
    <div className="telegram-btn">
      <a href="https://t.me/7248664262" class="">
        <RiTelegramLine size={50} className="text-white" />
      </a>
    </div>
  );
};

export default TelegramBtn;

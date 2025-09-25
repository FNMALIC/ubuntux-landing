import React from "react";
import { Shield, Users, Globe, Heart } from "lucide-react";

type Props = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  flex?: boolean;
  bgColor?: string;
  Color?: string;
};

const Features = () => {
  const Card = (props: Props) => {
    return (
      <div
        className={`${
          props.flex ? "flex-1" : "lg:flex-[none] flex-1"
        } p-8 pb-16 font-semibold rounded-xl shadow-md w-fit ${
          props.bgColor ? props.bgColor : "bg-[#fdfdfd]"
        } ${props.bgColor === "bg-[#003399]" && "text-white"} `}
      >
        <div className="mb-4">
          {props.icon}
        </div>
        <h3
          className={`${
            props.Color ? props.Color : "text-[#003399]"
          } text-3xl mb-3`}
        >
          {props.title}
        </h3>
        <p className="max-w-md text-lg">{props.description}</p>
      </div>
    );
  };

  const Data: Props[] = [
    {
      id: 1,
      title: "Trust & Security",
      description: "Bank-level security with transparent fees. Your money, your trust, our commitment.",
      icon: <Shield size={32} className="text-[#FF9900]" />
    },
    {
      id: 2,
      title: "Community First",
      description: "Built on Ubuntu philosophy - connecting African families and businesses worldwide.",
      icon: <Users size={32} className="text-[#003399]" />
    },
    {
      id: 3,
      title: "Global Reach",
      description: "Send money across Africa and beyond. Breaking borders, building bridges.",
      icon: <Globe size={32} className="text-[#FF9900]" />
    },
    {
      id: 4,
      title: "Empowerment",
      description: "Supporting dreams, enabling growth. Every transfer powers opportunity.",
      icon: <Heart size={32} className="text-[#003399]" />
    },
  ];

  return (
    <div className="py-16">
      <h2 className="text-center text-4xl font-semibold">
          Our <span className="text-[#FF9900]">Ubuntu Values</span>
      </h2>

      <p className="text-center font-semibold mb-8 mt-4 text-[#996137]">
          We are because we are - together we thrive
      </p>

      <div className="flex gap-3 md:flex-row flex-col items-center">
        <Card {...Data[0]} flex bgColor="bg-[#003399]" Color="text-[#FF9900]" />
        <Card {...Data[1]} />
      </div>

      <div className="flex gap-3 mt-3 md:flex-row flex-col-reverse items-center">
        <Card {...Data[2]} Color="text-[#FF9900]" />
        <Card {...Data[3]} flex bgColor="bg-[#FF9900]" Color="text-white" />
      </div>
    </div>
  );
};

export default Features;

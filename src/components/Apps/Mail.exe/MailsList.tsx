import { useState } from "react";

interface MessageProps {
    title?: string;
    from?: string;
    preview?: string;
    content?: string;
    hour?: string;
    active?: boolean;
    onClick?: () => void;
}

const Message = ({ title, preview, content, hour, from, active = false, onClick }: MessageProps) => {
    const [isActive, setIsActive] = useState(active);

    const handleClick = () => {
        setIsActive((prev) => !prev);
        if (onClick) {
            onClick();
        }
    };

    return (
        <div
            className={`message flex items-center pt-[15px] border-b border-gray-50 pl-6 pr-[30px] cursor-pointer ${
                isActive ? "bg-[#F2F2F2] border-l-4 border-l-[#005fb8]" : ""
            }`}
            onClick={handleClick}
        >
            <img
                className="rounded-[50%] mr-[20px] w-[40px] h-[40px]"
                src="https://img.freepik.com/psd-gratuit/illustration-3d-avatar-ligne_23-2151303048.jpg?"
                alt="Avatar"
            />
            <div className="content">
                <div className="flex justify-between mb-[10px]">
                    <h3
                        className={`font-semibold text-xl ${
                            isActive ? "text-[#005fb8]" : ""
                        }`}
                    >
                        {from}
                    </h3>
                    <p className="opacity-70">{hour}</p>
                </div>
                <h4 className="font-semibold text-l mb-[5px]">{title}</h4>
                <p className="overflow-hidden text-ellipsis whitespace-normal max-h-[3rem] leading-[1.5rem] mb-[15px] opacity-80">
                    {preview}
                </p>
            </div>
        </div>
    );
};

export default Message;

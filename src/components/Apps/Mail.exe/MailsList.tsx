interface MessageProps {
    title?: string;
    from?: string;
    emailFrom?: string;
    to?: string;
    emailTo?: string;
    preview?: string;
    content?: string;
    hour?: string;
    active?: boolean;
    onClick?: (
        content: string,
        from: string,
        emailFrom: string,
        to: string,
        emailTo: string,
        title: string,
        hour: string,
        isActive: boolean
    ) => void;
}

const Message = ({
    title,
    preview,
    content,
    hour,
    from = "",
    to,
    emailFrom,
    emailTo,
    active = false,
    onClick,
}: MessageProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick(content || "", from || "", emailFrom || "", to || "", emailTo || "", title || "", hour || "", !active);
        }
    };

    return (
        <div
            className={`message w-full flex items-center pt-[15px] border-b border-gray-50 pl-6 pr-[30px] cursor-pointer ${
                active ? "bg-[#F2F2F2] border-l-4 border-l-[#005fb8]" : ""
            }`}
            onClick={handleClick}
        >
            <div className="mr-[20px] min-w-[40px] min-h-[40px] rounded-[50%] bg-[#005fb8] flex justify-center items-center text-[white] text-2xl">
                {from.charAt(0)}
            </div>
            <div className="content w-full">
                <div className="flex justify-between mb-[10px]">
                    <h3
                        className={`font-semibold text-xl ${
                            active ? "text-[#005fb8]" : ""
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

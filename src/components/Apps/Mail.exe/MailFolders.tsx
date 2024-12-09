interface FolderProps {
    title?: string;
    icon?: string;
    active?: boolean;
    onClick?: (title: string) => void;
}

const Folder = ({ title, icon, active, onClick }: FolderProps) => {
    return (
        <div
            className={`folder flex p-2.5 items-center h-[50px] ${
                active ? "bg-[#F2F2F2] text-[#005FB8] rounded-[10px]" : ""
            }`}
            onClick={() => title && onClick && onClick(title)}
        >
            <div className={`folder-icon w-[32px] mr-3 ${active ? "active" : ""}`}>
                <img src={icon} alt={title} />
            </div>
            {title && <div className="folder-title w-full">{title}</div>}
        </div>
    );
};
export default Folder
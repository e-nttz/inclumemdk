import { apps } from "@/components/Apps";
import { useOS } from "@/providers/InclumeOS";
import { getAntivirusInstalledFromLocalStorage } from "@/utils/localeStorage";

const GridIcons = () => {
  const { launchApp } = useOS();
console.log(getAntivirusInstalledFromLocalStorage());
  return (
    <ul className="absolute top-0 left-0 flex flex-col flex-wrap items-start justify-start max-h-full gap-4 p-4 pb-0">
      {Object.entries(apps)
        .filter(([key]) => {
          // Filtrer ChildVirus si antivirus non installé
          if (key === "childVirus" && !getAntivirusInstalledFromLocalStorage()) {
            return false;
          }
          return true;
        })
        .map(([, value]: any) => (
          <li key={value.title}>
            <button
              className="w-[100px] h-[100px] flex flex-col items-center justify-center p-4 transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50 cursor-default"
              onDoubleClick={() =>
                launchApp({
                  title: value.title,
                  icon: value.icon,
                })
              }
            >
              <figure className="w-16 h-16 p-1 mb-2">{value.icon}</figure>
              <span className="text-[12px] text-white">{value.title}</span>
            </button>
          </li>
        ))}
    </ul>
  );
};

export default GridIcons;

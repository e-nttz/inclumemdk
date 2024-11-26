import { classNames } from "@/helpers/sanitize";

interface UserAvatarProps {
	className?: string;
}

const UserAvatar = ({ className }: UserAvatarProps) => {
	return (
		<figure
			className={classNames(
				"aspect-square rounded-full overflow-hidden border-solid border-4 border-black/5 dark:border-black/10",
				className
			)}
		>
			<img
				src="/images/avatar.svg"
				alt="User avatar"
				className="object-cover w-full h-full"
			/>
		</figure>
	);
};

export default UserAvatar;

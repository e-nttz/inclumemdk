import Message from "./Message.exe";

interface Apps {
	[key: string]: App;
}

export const apps: Apps = {
	message: Message,
};

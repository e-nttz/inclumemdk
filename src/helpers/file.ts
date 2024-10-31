export function addFolderToFolder(
	tree: FileNode,
	folderPath: string,
	newFolder: FileNode
) {
	// Si l'élément est un dossier avec le nom correspondant
	if (tree.type === "folder" && tree.path === folderPath) {
		tree.children?.push(newFolder);
		return true;
	}

	// Si c'est un dossier, on parcourt ses enfants
	if (tree.type === "folder" && tree.children) {
		for (const child of tree.children) {
			const added = addFolderToFolder(child, folderPath, newFolder);
			if (added) return true;
		}
	}

	// Si le dossier n'est pas trouvé
	return false;
}

export function addFileToFolder(
	tree: FileNode,
	folderPath: string,
	newFile: FileNode
) {
	// Find the folder inside tree deeply
	let currentFolder: FileNode | null = null;

	console.log("Current folder from before : ", folderPath);

	// Loop trought the tree and children until find the folder
	const findFolder = (node: FileNode): boolean => {
		if (node.type === "folder" && node.path === folderPath) {
			currentFolder = node;
			return true;
		}

		if (node.children) {
			for (const child of node.children) {
				const found = findFolder(child);
				if (found) return true;
			}
		}

		return false;
	};

	findFolder(tree);

	console.log("Current folder from fn : ", currentFolder);

	// Insert the file inside the folder
	if (currentFolder) {
		(currentFolder as FileNode).children?.push(newFile);

		return tree;
	}

	return false;
}

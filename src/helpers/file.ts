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

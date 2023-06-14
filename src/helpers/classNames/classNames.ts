type Mods = Record<string, string | boolean>;

export function classNames(mainClass: string, mods: Mods, additional: string[]): string {
	return [
		mainClass,
		...additional,
		// тут мы переводим объект в массив, элементы которого будут состоять из [key, value], фильтруем его и возвращаем только ключи (названия классов)
		...Object.entries(mods)
			.filter(([key, value]) => !!value)
			.map(([key, value]) => key),
	].join(' ');
}

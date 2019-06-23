def getSumIndex(input, target):
	for i in range(len(input) - 1):
		for j in range(i + 1, len(input)):
			if input[i] + input[j] == target:
				return [i, j]

	return 'Não encontrado'


if __name__ == '__main__':
	test = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	targets = [5, 6, 2, 8, 15, 16]


	for target in targets:

		ans = getSumIndex(test, target)

		if 	type(ans) == str:
			print(ans)
		else:
			print(*ans)

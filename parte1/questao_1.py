def getSumIndex(input, target):

	Diferences = {i:target - i for i in input}

	for i in range(len(input)):
		dif = Diferences.get(input[i]);
		if dif in input and i != input.index(dif):
			return [i, input.index(dif)]

	return 'Não encontrado'


if __name__ == '__main__':
	test = list(range(0, 10000))

	targets = [5, 6, 2, 8, 15, 16, 13000]


	for target in targets:

		ans = getSumIndex(test, target)

		if 	type(ans) == str:
			print(ans)
		else:
			print(*ans)
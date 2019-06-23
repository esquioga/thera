def getProfit(shares):
	profit = 0

	for i in range(len(shares) - 1):
		for j in range(i + 1, len(shares)):
			net = shares[j] - shares[i]
			if  net > 0 and net > profit:
				profit = net

	return profit

if __name__ == '__main__':
	tests = [[7, 1, 5, 3, 6, 4], [7, 6, 4, 3, 1]]

	for case in tests:
		print(getProfit(case))


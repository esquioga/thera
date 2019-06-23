def checkBalance(input):
	openPair = tuple('{[(')
	closePair = tuple('}])')
	pairsHelper = dict(zip(openPair, closePair))

	closerQueue = []

	for char in input:
		if char in openPair:
			closerQueue.append(pairsHelper[char])
		elif char in closePair:
			if not closerQueue or char != closerQueue.pop():
				return 'NÃO'
	
	return 'SIM'


if __name__ == '__main__':
	tests = ['{[()]}', '{[(])}', '{{[[(())]]}}']

	for case in tests:
		print(checkBalance(case))

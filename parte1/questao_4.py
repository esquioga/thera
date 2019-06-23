def getFloodedArea(elev):
	area = 0
	lastIndex = 0
	subList = []
	temp = 0

	for i in range(len(elev)):
		current = elev[i]
		
		if current < elev[lastIndex]:
			subList.append(current)
			if not i == len(elev) - 1:
			    temp += elev[lastIndex] - current
			else:
				area += getFloodedArea(subList)
		else:
			area += temp
			temp = 0
			subList = []
			lastIndex = i

	return area	

		
if __name__ == '__main__':
	test = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

	print(getFloodedArea(test))
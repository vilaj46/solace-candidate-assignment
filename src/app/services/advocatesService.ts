export const getAdvocates = () =>
	fetch('/api/advocates').then((response) =>
		response.json().then((jsonResponse) => jsonResponse)
	)

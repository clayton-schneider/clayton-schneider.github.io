function formatDate(date: Date) {
	if (date.getFullYear() < new Date().getFullYear()) {
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
	} else {
		return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
	}
}

export default formatDate

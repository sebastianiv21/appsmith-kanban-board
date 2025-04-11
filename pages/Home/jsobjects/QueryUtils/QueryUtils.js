export default {
	fetchData() {
		resetWidget('kanban_board', true);
		ticket_list.run();
	},
	async refreshData() {
		setInterval(this.fetchData(), 30000);
	},
}
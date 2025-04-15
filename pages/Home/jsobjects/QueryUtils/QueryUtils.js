export default {
	async fetchData() {
		//resetWidget('kanban_board', true);
		await DataBoardUtils.createBoardData();
	},
	async refreshData() {
		setInterval(this.fetchData(), 30000);
	},
}
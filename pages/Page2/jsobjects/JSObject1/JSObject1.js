export default {
	getData () {
		return {
  tasks: {
    "1": { id: 1, content: "Take out the garbage" },
    "2": { id: 2, content: "Watch my favorite show" },
    "3": { id: 3, content: "Charge my phone" },
    "4": { id: 4, content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: [1,2,3,4],
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
}
	}
}
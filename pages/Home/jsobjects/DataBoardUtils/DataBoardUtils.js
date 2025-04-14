export default {
	createBoardData() {
	const ticketsArray = ticket_list.data;
	const columnsArray = ticket_product_areas.data;
  const tickets = Object.fromEntries(
    ticketsArray.map((ticket) => {
      return [ticket.id, {...ticket, id: String(ticket.id), created_at: moment(ticket["created_at"]).format('Do MMM YY')}];
    })
  );

  const columns = {};
  const columnOrder = columnsArray.map((col) => String(col.id));

  for (const column of columnsArray) {
    const { id, scenario } = column;

    const validTicketIds = ticketsArray.filter((t) => t.product_area === column.scenario).map(t => String(t.id));

    columns[id] = {
      id: String(id),
      title: scenario,
      ticketIds: validTicketIds,
    };
  }

  return { tickets, columns, columnOrder };
}
}
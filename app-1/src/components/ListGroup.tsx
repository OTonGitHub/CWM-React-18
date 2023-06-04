function ListGroup() {
  return (
    // return wrapped in parenthesis, good, multiline mode;
    <div className="col-3">
      {/* ul.list-group>li.list-group-item*5>$ */}
      <ul className="list-group">
        <li className="list-group-item">Item-1</li>
        <li className="list-group-item">Item-2</li>
        <li className="list-group-item">Item-3</li>
        <li className="list-group-item">Item-4</li>
        <li className="list-group-item">Item-5</li>
      </ul>
    </div>
  );
}

export default ListGroup;

import { Fragment } from "react";

function ListGroup() {
  return (
    // return wrapped in parenthesis, good, multiline mode;
    <Fragment>
      <h1>List Group: {"ul.list-group>li.list-group-item*5>$"}</h1>
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
    </Fragment>
  );
  // returns nested react.createElement(..,..,.., children: r.cE(..,..,.., r.ce(..,..,.., r.ce())))
}

export default ListGroup;

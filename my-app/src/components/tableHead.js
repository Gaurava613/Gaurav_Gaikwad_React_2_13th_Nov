import TableData from "./tableData";
import 'bootstrap/dist/css/bootstrap.min.css';



export function TableHead(){
    
    return(
        <div>
            <div className="container">
        <div className="middle">
        </div>
        <table className="table table-hover table table-striped  ">
            <thead className="table-dark">
                <tr>
                <th>IMAGE</th>
                <th> NAME</th>
                <th>ID</th>
                <th>SYMBOL</th>
                <th>CURRENT PRICE</th>
                <th>TOTAL VOLUME</th>
                <th>MARKET CAP</th>
                <th>HIGH 24</th>
                <th>LOW 24</th>



                </tr>
            </thead>
               <TableData></TableData>
        </table>
    </div> 
        </div>
    )
}

export default TableHead;
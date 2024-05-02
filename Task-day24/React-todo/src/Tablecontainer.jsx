export function Tablecontainer({ userdata, deletefun, editfun }) {

    return (
  
      <div className="table-con" >
        <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Location</th>
        <th className="text-center" colSpan="2">Action</th>
      </tr>
    </thead>
  
        {userdata.length > 0 ? userdata.map((user) => (
          <tbody  key={user.id} >
  
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.location}</td>
        <td>            <button className="btn btn-primary"
                onClick={(() => {
  
                  editfun(user);
                  console.log("clicked",user);
  
  
                })}
  
              >EDIT</button></td>
              <td>
              <button  className="btn btn-danger" onClick={(() => {
                deletefun(user.id);
                console.log(user);
  
              })}>DELETE</button></td>
      </tr>
  
  
  
  
      </tbody>
  
  
  
  
      )) : (<h1> No data here </h1>)}
  
  
         
  
  
  </table>
      </div>
  
  
  
    );
  
  
  
  
  }
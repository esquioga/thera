class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
		}
	}

	componentWillMount() {
		this.loadUsers();
	}

	loadUsers = () => {
		var url = 'http://127.0.0.1:5000/'
		var req = new XMLHttpRequest();
		req.open('GET', url, true);
		req.onload = () => {
			var data = JSON.parse(req.response)
			this.setState({
				users: data
			});
		};
		req.send();
	}

	render() {
		return (
			<table class="table table-striped">
			  <thead>
			    <tr>
			      <th scope="col"></th>
			      <th scope="col">USUARIO</th>
			      <th scope="col">EMAIL</th>
			      <th scope="col">DATA DE INCLUSAO</th>
			      <th scope="col">DATA DE ALTERACAO</th>
			      <th scope="col">REGRAS</th>
			      <th scope="col">STATUS</th>
			      <th scope="col">ACOES</th>
			    </tr>
			  </thead>
			<tbody>{
			this.state.users.map( user => {
				return(
					<tr id={user.id}>
			      		<th scope="row"><input class="form-check-input" type="checkbox" value=""/></th>
			      		<td>{user.name.first}</td>
			      		<td>{user.email}</td>
			      		<td>{user.registered.date}</td>
			      		<td>{user.lastUpdate}</td>
			      		<td>02</td>
			      		<td>ATIVO</td>
			      		<td><span class="oi oi-ellipses"></span></td>
			    	</tr>
				);
			})
		}</tbody></table>);
	}


}


console.log('init');
var tbody = document.getElementById('rootUsers');
console.log(tbody);
ReactDOM.render(<UserList/> , tbody);

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

	componentWillReceiveProps(nextProps) {
		this.props = nextProps;
		this.loadUsers();
	}

	loadUsers = () => {
		var url = 'http://127.0.0.1:5000/'
		if(this.props.name && this.props.name !== '') {
			url += 'name=' + this.props.name
		}

		console.log(url);
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

	getStatusStr = (status) => {
		return status ? 'ATIVO' : 'INATIVO';
	}

	render() {
		return (
			<table className="table table-striped">
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
			      		<th scope="row"><input className="form-check-input" type="checkbox" value=""/></th>
			      		<td>{user.name.first}</td>
			      		<td>{user.email}</td>
			      		<td>{user.registered.date}</td>
			      		<td>{user.lastUpdate}</td>
			      		<td>02</td>
			      		<td>{this.getStatusStr(user.status)}</td>
			      		<td><span className="oi oi-ellipses"></span></td>
			    	</tr>
				);
			})
		}</tbody></table>);
	}
}

class SearchBox extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (event) => {
		console.log(event.target.value);
		var tableDiv = document.getElementById('rootUsers');
		ReactDOM.render(<UserList name={event.target.value} /> , tableDiv);
	}

	render() {
		return (
			<div class="input-group" >
                <input type="text" class="form-control" placeholder="Pesquisar..."  onChange={this.handleChange}/>
                <div class="input-group-append">
                    <span class="oi oi-magnifying-glass"></span>
                </div>
            </div>);
	}
}


console.log('init user list');
var tableDiv = document.getElementById('rootUsers');
ReactDOM.render(<UserList/> , tableDiv);

var searchBox = document.getElementById('searchBarRoot');
ReactDOM.render(<SearchBox/>, searchBox)

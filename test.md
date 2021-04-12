// Input pseudocode
some function() {
	state = {
		items: []
	}
	componentDidMount() => {
		const items = [
			0: {id:`bepok`, dueDate: `Jan 1`, completed: false},
			1: {id: `jimmyz`, dueDate: `Jan 4`, completed: true},
			2: {id:`donaldk`, dueDate: `Jan 5`, completed: false}
		]
		this.setState({
			items: items
		})	
	}
	complete(id) => { // we're assuming we click select on div where key = bepok
		let itemToChange = this.state.items.filter(item => {
		  return item.id === id
		})
 
		// now itemToChange = {id:`bepok`, dueDate: `Jan 1`, completed: false},
		itemToChange[completed] = true
		// now itemToChange = {id:`bepok`, dueDate: `Jan 1`, completed: true},
		let newItems = this.state.items.filter(item => {
		  return item.id !== id
		})
		newItems.push(itemToChange)
		// newItems = [
		// 	0: {id:`bepok`, dueDate: `Jan 1`, completed: true},
		// 	1: {id: `jimmyz`, dueDate: `Jan 4`, completed: true},
		// 	2: {id:`donaldk`, dueDate: `Jan 5`, completed: false}
		// ]
		this.setState({
			items: newItems
		})
	}
	render () => {
		return (
			<div>
				{
					this.state.items.map(individualItem => {
						return (
							<div key = {individualItem.id}>
								<p>{individualItem.dueDate}</p>
								{
									individualItem.completed ? null : (
										return <button onClick = {(individualItem) => this.complete(individualItem.id)}>Select</button>
									)
								}
							</div>
						)
					})
				}
			</div>
		)
	}
}
 
// Output before running
<div>
	<div key = 'bepok'>
		<p>Jan 1</p>
		<button onClick = {`passing bepok to complete function`}>Select</button>
	</div>
 
	<div key = 'jimmyz'>
		<p>Jan 4</p>
	</div>
 
	<div key = 'donaldk'>
		<p>Jan 5</p>
		<button onClick = {`passing donaldk to complete function`}>Select</button>
	</div>
</div>
 
// Output after running and selecting where key = bepok
<div>
	<div key = 'bepok'>
		<p>Jan 1</p>
		<button>Select</button>
	</div>
 
	<div key = 'jimmyz'>
		<p>Jan 4</p>
	</div>
 
	<div key = 'donaldk'>
		<p>Jan 5</p>
		<button onClick = {`passing donaldk to complete function`}>Select</button>
	</div>
</div>
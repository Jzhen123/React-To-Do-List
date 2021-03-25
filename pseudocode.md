View 

    Header

    Input (row) (parent)
        Input form
        Submit button
    Text/Items (multiple rows) (child)
        Text
        Select/Complete button
            Has a status to change
        X button
        Link each item to an ID to accurately change a row time and description wise

    Details/Features (row at the bottom)
        Number of items
        Types of sorting
        * Could do a "soft delete" to make an undo button or create AI to autofill/remind user of past items
    

Model

    Stateful Child contains
        Task text
        ID
        If it has been clicked

    Stateful Parent contains
        Number of tasks
        Array of tasks
            Can use .length for number of items
        Input for new task
        Current View - by default it shows all options
    
Controller

    Compound 
        DidMount()
            Also runs Render()
            Check localstorage
        Update()
            update localstorage
        Render()
            lets you type html how you like to see it using actual html tags
        SetState()
            --> Update() --> Render()
            automatically
    constructor()
        setState initially and any bindings needed
    
    Event Handlers
        delete task
        add task
        check
        filter
        delet all
        undo (stretch goal)

    get LS
    set LS



    
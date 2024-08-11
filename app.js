/*
* <div id="parent">
*      <div id="child">
*           <h1> I am h1 tag.</h1>
*           <h2> I am h2 tag.</h2>
*       <div>
*       <div id="child2">
*           <h1> I am h1 tag.</h1>
*           <h2> I am h2 tag.</h2>
*       <div>
*</div>
*   HOW DO YOU CREATE THIS TYPE OF NESTED STRUCTURE?? 
*/

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",
        {id:"child"},
        [React.createElement("h1",{},"I am an h1 tag."), 
         React.createElement("h2",{},"I am an h2 tag.")]
    ) ,
    React.createElement("div",
        {id:"child2"},
        [React.createElement("h1",{},"I am an h1 tag."), 
         React.createElement("h2",{},"I am an h2 tag.")]
    ),
    ]
);

/*
const heading = React.createElement("h1",
    {id:"heading", xyz:"abc"},
    "hello world from React.."); //create a h1 tag and write all . It uses main react file
const root= ReactDOM.createRoot(document.getElementById("root"));// it creates the root and for this it uses reactdom

root.render(heading); // this heading will be added to root now..
*/

const root=ReactDom.createRoot(document.getElementById("root"));
root.render(parent);

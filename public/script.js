console.log("CONNECTED!");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=700&q=60"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d06322d7df8c19c1e648c8c3a101d2d&auto=format&fit=crop&w=700&q=60"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=700&q=60"},
    {name: "Silver Lake", image: "https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e3ff1cce6d43ff22a50a83269f07ac&auto=format&fit=crop&w=700&q=60"},
    {name: "Pinewoods", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-0.3.5&s=818083f99e9b291ad60959b2594d97f3&auto=format&fit=crop&w=700&q=60"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=700&q=60"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d06322d7df8c19c1e648c8c3a101d2d&auto=format&fit=crop&w=700&q=60"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=700&q=60"},
    {name: "Silver Lake", image: "https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e3ff1cce6d43ff22a50a83269f07ac&auto=format&fit=crop&w=700&q=60"},
    {name: "Pinewoods", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-0.3.5&s=818083f99e9b291ad60959b2594d97f3&auto=format&fit=crop&w=700&q=60"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=00a8cfc7aba62bd47f10abd96551cb1d&auto=format&fit=crop&w=700&q=60"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1486082570281-d942af5c39b7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2d06322d7df8c19c1e648c8c3a101d2d&auto=format&fit=crop&w=700&q=60"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec456c4aeb71d3aecbe65e586d186ec0&auto=format&fit=crop&w=700&q=60"},
    {name: "Silver Lake", image: "https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f3e3ff1cce6d43ff22a50a83269f07ac&auto=format&fit=crop&w=700&q=60"},
    {name: "Pinewoods", image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-0.3.5&s=818083f99e9b291ad60959b2594d97f3&auto=format&fit=crop&w=700&q=60"}

];
.container {
  padding: 20px;
  display: grid;
  background: white;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.container > div {
  border: 1px solid black;
  background: #ececec;
}

* + * {
    border-bottom: 0;
}


<div class="container">
  <div>Div 1</div>
  <div>Div 2</div>
  <div>Div 3</div>
  <div>Div 4</div>
</div>

https://stackoverflow.com/questions/48065133/dynamic-width-flexboxes-that-wrap-yet-keep-column-structure#



